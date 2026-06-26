import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'
import { tramiteSchema } from '@/lib/validations'

export async function GET(req: NextRequest) {
  const pais = req.nextUrl.searchParams.get('pais')
  const tramites = await prisma.tramite.findMany({
    where: pais ? { pais } : undefined,
    orderBy: { titulo: 'asc' },
  })
  return NextResponse.json(tramites)
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if ((session?.user as any)?.role !== 'admin') return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  const body = await req.json()
  const parsed = tramiteSchema.safeParse(body)
  if (!parsed.success) return NextResponse.json({ error: parsed.error.errors[0].message }, { status: 400 })

  const tramite = await prisma.tramite.create({ data: parsed.data as any })
  return NextResponse.json(tramite, { status: 201 })
}
