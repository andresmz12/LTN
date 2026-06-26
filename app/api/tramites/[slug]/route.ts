import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'
import { tramiteSchema } from '@/lib/validations'

export async function GET(_req: NextRequest, { params }: { params: { slug: string } }) {
  const tramite = await prisma.tramite.findUnique({ where: { slug: params.slug } })
  if (!tramite) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(tramite)
}

export async function PUT(req: NextRequest, { params }: { params: { slug: string } }) {
  const session = await getServerSession(authOptions)
  if ((session?.user as any)?.role !== 'admin') return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  const body = await req.json()
  const parsed = tramiteSchema.partial().safeParse(body)
  if (!parsed.success) return NextResponse.json({ error: parsed.error.errors[0].message }, { status: 400 })

  const tramite = await prisma.tramite.update({ where: { slug: params.slug }, data: parsed.data as any })
  return NextResponse.json(tramite)
}

export async function DELETE(_req: NextRequest, { params }: { params: { slug: string } }) {
  const session = await getServerSession(authOptions)
  if ((session?.user as any)?.role !== 'admin') return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  await prisma.tramite.delete({ where: { slug: params.slug } })
  return NextResponse.json({ ok: true })
}
