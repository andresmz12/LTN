import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'
import { consuladoSchema } from '@/lib/validations'

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  const consulado = await prisma.consulado.findUnique({ where: { id: params.id } })
  if (!consulado) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(consulado)
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  if ((session?.user as any)?.role !== 'admin') return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  const body = await req.json()
  const parsed = consuladoSchema.partial().safeParse(body)
  if (!parsed.success) return NextResponse.json({ error: parsed.error.errors[0].message }, { status: 400 })

  const consulado = await prisma.consulado.update({ where: { id: params.id }, data: parsed.data })
  return NextResponse.json(consulado)
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  if ((session?.user as any)?.role !== 'admin') return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  await prisma.consulado.delete({ where: { id: params.id } })
  return NextResponse.json({ ok: true })
}
