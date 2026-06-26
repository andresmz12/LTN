import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'
import { noticiaSchema } from '@/lib/validations'

export async function GET(_req: NextRequest, { params }: { params: { slug: string } }) {
  const noticia = await prisma.noticia.findUnique({ where: { slug: params.slug } })
  if (!noticia || !noticia.publicado) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(noticia)
}

export async function PUT(req: NextRequest, { params }: { params: { slug: string } }) {
  const session = await getServerSession(authOptions)
  if ((session?.user as any)?.role !== 'admin') return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  const body = await req.json()
  const parsed = noticiaSchema.partial().safeParse(body)
  if (!parsed.success) return NextResponse.json({ error: parsed.error.errors[0].message }, { status: 400 })

  const noticia = await prisma.noticia.update({ where: { slug: params.slug }, data: parsed.data as any })
  return NextResponse.json(noticia)
}

export async function DELETE(_req: NextRequest, { params }: { params: { slug: string } }) {
  const session = await getServerSession(authOptions)
  if ((session?.user as any)?.role !== 'admin') return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  await prisma.noticia.delete({ where: { slug: params.slug } })
  return NextResponse.json({ ok: true })
}
