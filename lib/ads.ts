import { prisma } from '@/lib/db'

/**
 * Anuncios targeteados por país (o GENERAL), con targeting de estado opcional:
 * un anuncio con estadosTarget vacío se muestra a cualquiera dentro del país target;
 * un anuncio con estadosTarget definido solo se muestra si conocemos el estado del
 * visitante (cookie de LocationBanner) y coincide.
 */
export async function getAnunciosPara(target: string, estado?: string | null) {
  const now = new Date()
  const candidatos = await prisma.anuncio.findMany({
    where: {
      activo: true,
      fechaInicio: { lte: now },
      OR: [{ fechaFin: null }, { fechaFin: { gte: now } }],
      paisesTarget: { has: target },
    },
  }).catch(() => [])

  const anuncios = candidatos.filter(
    (a: any) => a.estadosTarget.length === 0 || (estado && a.estadosTarget.includes(estado))
  )

  if (anuncios.length > 0) {
    await prisma.anuncio.updateMany({
      where: { id: { in: anuncios.map((a: any) => a.id) } },
      data: { impresiones: { increment: 1 } },
    }).catch(() => {})
  }

  return anuncios
}
