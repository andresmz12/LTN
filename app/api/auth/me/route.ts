import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'

const SELECT = {
  id: true, email: true, nombre: true, apellido: true, paisOrigen: true, estadoUS: true,
  savedConsulados: true, alertaCategorias: true, alertaActiva: true, role: true,
}

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session?.user) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

  const user = await prisma.user.findUnique({
    where: { email: session.user.email! },
    select: SELECT,
  })

  return NextResponse.json(user)
}

export async function PUT(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session?.user) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

  const body = await req.json()
  const { estadoUS, paisOrigen, alertaCategorias, alertaActiva } = body

  const user = await prisma.user.update({
    where: { email: session.user.email! },
    data: {
      ...(estadoUS !== undefined ? { estadoUS } : {}),
      ...(paisOrigen !== undefined ? { paisOrigen } : {}),
      ...(Array.isArray(alertaCategorias) ? { alertaCategorias } : {}),
      ...(typeof alertaActiva === 'boolean' ? { alertaActiva } : {}),
    },
    select: SELECT,
  })

  return NextResponse.json(user)
}
