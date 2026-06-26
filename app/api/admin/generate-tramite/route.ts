import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { generateTramite } from '@/lib/ai-generator'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)
  if ((session?.user as any)?.role !== 'admin') {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
  }

  const { pais, tipo } = await req.json()
  if (!pais || !tipo) {
    return NextResponse.json({ error: 'Faltan campos' }, { status: 400 })
  }

  const data = await generateTramite(pais, tipo)
  return NextResponse.json(data)
}
