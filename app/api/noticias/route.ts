import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'
import { noticiaSchema } from '@/lib/validations'

export async function GET(req: NextRequest) {
  const pais = req.nextUrl.searchParams.get('pais')
  const noticias = await prisma.noticia.findMany({
    where: {
      publicado: true,
      ...(pais ? { paises: { has: pais } } : {}),
    },
    orderBy: { publishedAt: 'desc' },
  })
  return NextResponse.json(noticias)
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if ((session?.user as any)?.role !== 'admin') return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  const body = await req.json()
  const parsed = noticiaSchema.safeParse(body)
  if (!parsed.success) return NextResponse.json({ error: parsed.error.errors[0].message }, { status: 400 })

  const noticia = await prisma.noticia.create({ data: parsed.data as any })
  return NextResponse.json(noticia, { status: 201 })
}
