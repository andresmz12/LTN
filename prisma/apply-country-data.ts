import { PrismaClient } from '@prisma/client'
import { splitCiudadEstado } from './data/helpers'
import { consuladosCO, tramitesCO, noticiasCO } from './data/co'
import { consuladosVE, tramitesVE, noticiasVE } from './data/ve'
import { consuladosSV, tramitesSV, noticiasSV } from './data/sv'
import { consuladosGT, tramitesGT, noticiasGT } from './data/gt'
import { consuladosHN, tramitesHN, noticiasHN } from './data/hn'

const prisma = new PrismaClient()

const PAISES = [
  { codigo: 'CO', consulados: consuladosCO, tramites: tramitesCO, noticias: noticiasCO },
  { codigo: 'VE', consulados: consuladosVE, tramites: tramitesVE, noticias: noticiasVE },
  { codigo: 'SV', consulados: consuladosSV, tramites: tramitesSV, noticias: noticiasSV },
  { codigo: 'GT', consulados: consuladosGT, tramites: tramitesGT, noticias: noticiasGT },
  { codigo: 'HN', consulados: consuladosHN, tramites: tramitesHN, noticias: noticiasHN },
]

async function main() {
  console.log('🔄 Aplicando datos verificados por país (CO, VE, SV, GT, HN)...\n')

  for (const { codigo, consulados, tramites, noticias } of PAISES) {
    // Consulados y trámites: reemplazan por completo lo que había para ese país
    // (los datos nuevos vienen de fuentes oficiales y son más completos).
    const delC = await prisma.consulado.deleteMany({ where: { pais: codigo } })
    const delT = await prisma.tramite.deleteMany({ where: { pais: codigo } })

    const consuladosData = consulados.map((c: any) => {
      const { ciudad, estadoUS } = splitCiudadEstado(c.ciudad)
      return { ...c, ciudad, estadoUS }
    })
    await prisma.consulado.createMany({ data: consuladosData })
    await prisma.tramite.createMany({ data: tramites as any })

    // Noticias: se agregan sin borrar las existentes (slugs nuevos, no chocan).
    const noticiasData = noticias.map((n: any) => ({ ...n, publicado: true }))
    const resNoticias = await prisma.noticia.createMany({
      data: noticiasData,
      skipDuplicates: true,
    })

    console.log(
      `✅ ${codigo}: ${delC.count}→${consuladosData.length} consulados, ${delT.count}→${tramites.length} trámites, +${resNoticias.count} noticias nuevas`
    )
  }

  console.log('\n🎉 Datos aplicados correctamente.')
}

main()
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())
