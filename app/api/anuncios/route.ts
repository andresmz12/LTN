import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'
import { anuncioSchema } from '@/lib/validations'

export async function GET(req: NextRequest) {
  const pais = req.nextUrl.searchParams.get('pais')
  const now = new Date()

  const anuncios = await prisma.anuncio.findMany({
    where: {
      activo: true,
      fechaInicio: { lte: now },
      OR: [{ fechaFin: null }, { fechaFin: { gte: now } }],
      ...(pais ? { paisesTarget: { has: pais } } : {}),
    },
    include: { cliente: { select: { nombreEmpresa: true, logoUrl: true } } },
  })

  // Track impressions
  if (anuncios.length > 0) {
    await prisma.anuncio.updateMany({
      where: { id: { in: anuncios.map(a => a.id) } },
      data: { impresiones: { increment: 1 } },
    })
  }

  return NextResponse.json(anuncios)
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if ((session?.user as any)?.role !== 'admin') return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  const body = await req.json()
  const parsed = anuncioSchema.safeParse(body)
  if (!parsed.success) return NextResponse.json({ error: parsed.error.errors[0].message }, { status: 400 })

  const { fechaFin, ...rest } = parsed.data
  const anuncio = await prisma.anuncio.create({
    data: { ...rest, ...(fechaFin ? { fechaFin: new Date(fechaFin) } : {}) } as any,
  })
  return NextResponse.json(anuncio, { status: 201 })
}
