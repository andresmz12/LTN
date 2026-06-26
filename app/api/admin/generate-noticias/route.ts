import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { generateNoticias } from '@/lib/ai-generator'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session || session.user.role !== 'admin') {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
  }

  const { pais, busqueda, cantidad } = await req.json()
  if (!pais || !busqueda) {
    return NextResponse.json({ error: 'Faltan campos' }, { status: 400 })
  }

  const data = await generateNoticias(pais, busqueda, cantidad || 3)
  return NextResponse.json(data)
}
