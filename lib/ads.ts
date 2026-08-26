import { prisma } from '@/lib/db'

/**
 * Anuncios targeteados por país (o GENERAL), con targeting de estado y de
 * ubicación dentro del sitio opcionales:
 * - estadosTarget vacío = se muestra a cualquiera dentro del país target;
 *   si está definido, solo se muestra si conocemos el estado del visitante
 *   (cookie de LocationBanner) y coincide.
 * - ubicaciones vacío = se muestra en cualquier página de ese país/GENERAL;
 *   si está definido, solo se muestra en las ubicaciones elegidas en el admin
 *   (ver lib/utils.ts UBICACIONES).
 */
export async function getAnunciosPara(target: string, estado?: string | null, ubicacion?: string) {
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
    (a: any) =>
      (a.estadosTarget.length === 0 || (estado && a.estadosTarget.includes(estado))) &&
      (a.ubicaciones.length === 0 || (ubicacion && a.ubicaciones.includes(ubicacion)))
  )

  if (anuncios.length > 0) {
    await prisma.anuncio.updateMany({
      where: { id: { in: anuncios.map((a: any) => a.id) } },
      data: { impresiones: { increment: 1 } },
    }).catch(() => {})
  }

  return anuncios
}
