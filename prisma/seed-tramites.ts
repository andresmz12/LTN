import { PrismaClient } from '@prisma/client'
import fs from 'fs'
import path from 'path'

const prisma = new PrismaClient()

type FuenteJson = { nombre: string; url: string }

type TramiteJson = {
  slug: string
  categoria?: string
  prioridad?: string
  pais: string
  titulo: string
  resumen: string
  requisitos?: string[]
  pasos?: string[]
  costo?: string
  tiempoEstimado?: string
  diferencias_por_estado?: string
  advertencias?: string[]
  fechaVerificacion?: string
  nivelVolatilidad?: string
  fuentes?: FuenteJson[]
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function buildContenidoHtml(t: TramiteJson): string {
  let html = `<p>${escapeHtml(t.resumen)}</p>`

  if (t.diferencias_por_estado) {
    html += `<h2>Diferencias por estado</h2><p>${escapeHtml(t.diferencias_por_estado)}</p>`
  }

  if (t.advertencias && t.advertencias.length > 0) {
    html += `<h2>Advertencias</h2><ul>${t.advertencias.map((a) => `<li>${escapeHtml(a)}</li>`).join('')}</ul>`
  }

  return html
}

function buildLinksExternos(t: TramiteJson): { texto: string; url: string }[] {
  if (!t.fuentes) return []
  return t.fuentes.map((f) => ({ texto: f.nombre, url: f.url }))
}

async function main() {
  const jsonPath = path.join(__dirname, 'data', 'compa_recursos.json')
  const raw = fs.readFileSync(jsonPath, 'utf-8')
  const tramites: TramiteJson[] = JSON.parse(raw)

  console.log(`🌱 Importando ${tramites.length} trámites desde ${jsonPath}...`)

  let created = 0
  let updated = 0
  const failed: { slug: string; error: string }[] = []

  for (const t of tramites) {
    try {
      const existing = await prisma.tramite.findUnique({ where: { slug: t.slug } })

      const data = {
        pais: t.pais,
        titulo: t.titulo,
        slug: t.slug,
        descripcion: t.resumen,
        contenidoHtml: buildContenidoHtml(t),
        pasos: t.pasos ?? [],
        documentosNecesarios: t.requisitos ?? [],
        tiempoPromedio: t.tiempoEstimado ?? null,
        costo: t.costo ?? null,
        linksExternos: buildLinksExternos(t),
        categoria: t.categoria ?? null,
        prioridad: t.prioridad ?? null,
        fechaVerificacion: t.fechaVerificacion ? new Date(t.fechaVerificacion) : null,
        nivelVolatilidad: t.nivelVolatilidad ?? null,
      }

      await prisma.tramite.upsert({
        where: { slug: t.slug },
        create: data,
        update: data,
      })

      if (existing) {
        updated++
      } else {
        created++
      }
    } catch (e: any) {
      failed.push({ slug: t.slug, error: e?.message ?? String(e) })
    }
  }

  console.log('\n🎉 Importación completada!')
  console.log(`✅ Creados: ${created}`)
  console.log(`🔄 Actualizados: ${updated}`)
  console.log(`❌ Fallidos: ${failed.length}`)
  if (failed.length > 0) {
    console.log('\nDetalle de fallos:')
    for (const f of failed) {
      console.log(`  - ${f.slug}: ${f.error}`)
    }
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
