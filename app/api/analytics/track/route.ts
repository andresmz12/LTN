import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    const body = await req.json()

    await prisma.analytics.create({
      data: {
        userId: (session?.user as any)?.id || null,
        evento: body.evento || 'pageview',
        seccion: body.seccion,
        pais: body.pais,
        estadoUS: body.estadoUS,
        deviceType: req.headers.get('user-agent')?.includes('Mobile') ? 'mobile' : 'desktop',
        referrer: req.headers.get('referer'),
      },
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false })
  }
}
