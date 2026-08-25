import { prisma } from '@/lib/db'

export async function getAnunciosPara(target: string) {
  const now = new Date()
  const anuncios = await prisma.anuncio.findMany({
    where: {
      activo: true,
      fechaInicio: { lte: now },
      OR: [{ fechaFin: null }, { fechaFin: { gte: now } }],
      paisesTarget: { has: target },
    },
  }).catch(() => [])

  if (anuncios.length > 0) {
    await prisma.anuncio.updateMany({
      where: { id: { in: anuncios.map((a: any) => a.id) } },
      data: { impresiones: { increment: 1 } },
    }).catch(() => {})
  }

  return anuncios
}
