'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { PAIS_NOMBRES, PAIS_FLAGS } from '@/lib/utils'

export default function Navbar({ pais }: { pais?: string }) {
  const { data: session } = useSession()

  return (
    <nav className="bg-blue-700 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="text-xl font-bold tracking-tight shrink-0">
          Compa 🌎
        </Link>

        <div className="flex items-center gap-1 text-sm overflow-x-auto">
          {pais ? (
            <>
              <Link href="/" className="hover:bg-white/10 px-3 py-1.5 rounded-lg whitespace-nowrap">
                Inicio
              </Link>
              <Link href={`/${pais}/consulados`} className="hover:bg-white/10 px-3 py-1.5 rounded-lg whitespace-nowrap">
                {PAIS_FLAGS[pais]} Consulados
              </Link>
              <Link href={`/${pais}/tramites`} className="hover:bg-white/10 px-3 py-1.5 rounded-lg whitespace-nowrap">
                Trámites
              </Link>
              <Link href={`/${pais}/noticias`} className="hover:bg-white/10 px-3 py-1.5 rounded-lg whitespace-nowrap">
                Noticias
              </Link>
              <Link href="/general" className="hover:bg-white/10 px-3 py-1.5 rounded-lg whitespace-nowrap text-blue-200">
                Recursos generales
              </Link>
            </>
          ) : (
            <>
              <Link href="/general" className="hover:bg-white/10 px-3 py-1.5 rounded-lg whitespace-nowrap">
                Recursos generales
              </Link>
              <Link href="/patrocinadores" className="hover:bg-white/10 px-3 py-1.5 rounded-lg whitespace-nowrap">
                Patrocinadores
              </Link>
            </>
          )}
        </div>

        <div className="flex items-center gap-2 text-sm shrink-0">
          {session ? (
            <>
              <Link href="/dashboard" className="hover:underline hidden sm:block">
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
              <Link href="/auth/login" className="hover:underline hidden sm:block">
                Entrar
              </Link>
              <Link href="/auth/register" className="bg-white text-blue-700 px-3 py-1 rounded font-semibold hover:bg-blue-50 whitespace-nowrap">
                Registrarse
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
