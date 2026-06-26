import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function POST(_req: NextRequest, { params }: { params: { id: string } }) {
  await prisma.anuncio.update({
    where: { id: params.id },
    data: { clicks: { increment: 1 } },
  })
  return NextResponse.json({ ok: true })
}
