import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'
import { empleoSchema } from '@/lib/validations'

export async function GET(req: NextRequest) {
  const all = req.nextUrl.searchParams.get('all') === 'true'

  if (all) {
    const session = await getServerSession(authOptions)
    if ((session?.user as any)?.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }
    const empleos = await prisma.empleo.findMany({
      include: { cliente: { select: { nombreEmpresa: true } } },
      orderBy: { publishedAt: 'desc' },
    })
    return NextResponse.json(empleos)
  }

  const estado = req.nextUrl.searchParams.get('estado')
  const categoria = req.nextUrl.searchParams.get('categoria')
  const now = new Date()

  const empleos = await prisma.empleo.findMany({
    where: {
      activo: true,
      OR: [{ fechaExpiracion: null }, { fechaExpiracion: { gte: now } }],
      ...(estado ? { estadoUS: estado } : {}),
      ...(categoria ? { categoria } : {}),
    },
    orderBy: [{ destacado: 'desc' }, { publishedAt: 'desc' }],
  })
  return NextResponse.json(empleos)
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if ((session?.user as any)?.role !== 'admin') return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  const body = await req.json()
  const parsed = empleoSchema.safeParse(body)
  if (!parsed.success) return NextResponse.json({ error: parsed.error.errors[0].message }, { status: 400 })

  const { fechaExpiracion, clienteId, ...rest } = parsed.data
  const empleo = await prisma.empleo.create({
    data: {
      ...rest,
      ...(clienteId ? { clienteId } : {}),
      ...(fechaExpiracion ? { fechaExpiracion: new Date(fechaExpiracion) } : {}),
    } as any,
  })
  return NextResponse.json(empleo, { status: 201 })
}
