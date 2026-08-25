import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'
import { empleoSchema } from '@/lib/validations'

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  const empleo = await prisma.empleo.findUnique({ where: { id: params.id } })
  if (!empleo) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(empleo)
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  if ((session?.user as any)?.role !== 'admin') return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  const body = await req.json()
  const parsed = empleoSchema.partial().safeParse(body)
  if (!parsed.success) return NextResponse.json({ error: parsed.error.errors[0].message }, { status: 400 })

  const { fechaExpiracion, ...rest } = parsed.data as any
  const empleo = await prisma.empleo.update({
    where: { id: params.id },
    data: { ...rest, ...(fechaExpiracion ? { fechaExpiracion: new Date(fechaExpiracion) } : {}) },
  })
  return NextResponse.json(empleo)
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  if ((session?.user as any)?.role !== 'admin') return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  await prisma.empleo.delete({ where: { id: params.id } })
  return NextResponse.json({ ok: true })
}
