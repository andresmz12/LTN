'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { PAIS_NOMBRES, PAIS_FLAGS } from '@/lib/utils'

export default function Navbar({ pais }: { pais?: string }) {
  const { data: session } = useSession()

  return (
    <nav className="bg-blue-700 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Compa 🌎
        </Link>

        <div className="flex items-center gap-4 text-sm">
          {pais && (
            <>
              <Link href={`/${pais}/consulados`} className="hover:underline">
                {PAIS_FLAGS[pais]} Consulados
              </Link>
              <Link href={`/${pais}/tramites`} className="hover:underline">
                Trámites
              </Link>
              <Link href={`/${pais}/noticias`} className="hover:underline">
                Noticias
              </Link>
            </>
          )}

          {session ? (
            <>
              <Link href="/dashboard" className="hover:underline">
                Mi perfil
              </Link>
              {(session.user as any)?.role === 'admin' && (
                <Link href="/admin" className="bg-yellow-400 text-black px-2 py-1 rounded text-xs font-semibold">
                  Admin
                </Link>
              )}
              <button onClick={() => signOut({ callbackUrl: '/' })} className="hover:underline">
                Salir
              </button>
            </>
          ) : (
            <>
              <Link href="/auth/login" className="hover:underline">
                Entrar
              </Link>
              <Link href="/auth/register" className="bg-white text-blue-700 px-3 py-1 rounded font-semibold hover:bg-blue-50">
                Registrarse
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
