import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session?.user) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

  const user = await prisma.user.findUnique({
    where: { email: session.user.email! },
    select: { id: true, email: true, nombre: true, apellido: true, paisOrigen: true, estadoUS: true, savedConsulados: true, role: true },
  })

  return NextResponse.json(user)
}
