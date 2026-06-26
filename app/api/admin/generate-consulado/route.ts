import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { generateConsulado } from '@/lib/ai-generator'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session || session.user.role !== 'admin') {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
  }

  const { pais, ciudad } = await req.json()
  if (!pais || !ciudad) {
    return NextResponse.json({ error: 'Faltan campos' }, { status: 400 })
  }

  const data = await generateConsulado(pais, ciudad)
  return NextResponse.json(data)
}
