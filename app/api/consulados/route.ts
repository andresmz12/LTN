import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'
import { consuladoSchema } from '@/lib/validations'

export async function GET(req: NextRequest) {
  const pais = req.nextUrl.searchParams.get('pais')
  const consulados = await prisma.consulado.findMany({
    where: pais ? { pais } : undefined,
    orderBy: { ciudad: 'asc' },
  })
  return NextResponse.json(consulados)
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if ((session?.user as any)?.role !== 'admin') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const body = await req.json()
  const parsed = consuladoSchema.safeParse(body)
  if (!parsed.success) return NextResponse.json({ error: parsed.error.errors[0].message }, { status: 400 })

  const consulado = await prisma.consulado.create({ data: parsed.data })
  return NextResponse.json(consulado, { status: 201 })
}
