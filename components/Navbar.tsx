'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import { PAIS_NOMBRES, PAIS_FLAGS, PAISES } from '@/lib/utils'

export default function Navbar({ pais }: { pais?: string }) {
  const { data: session } = useSession()
  const pathname = usePathname()

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
      {/* Top bar */}
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="text-xl font-bold text-blue-700 shrink-0">
          Compa
        </Link>

        {/* Main nav — always visible */}
        <div className="flex items-center gap-1 text-sm">
          <Link
            href="/"
            className={`px-3 py-1.5 rounded-lg font-medium transition whitespace-nowrap ${
              pathname === '/' || pathname?.startsWith('/general')
                ? 'bg-blue-700 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Recursos Generales
          </Link>
          <Link
            href="/patrocinadores"
            className={`px-3 py-1.5 rounded-lg font-medium transition whitespace-nowrap hidden sm:block ${
              pathname === '/patrocinadores'
                ? 'bg-blue-700 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Patrocinadores
          </Link>
        </div>

        {/* Auth */}
        <div className="flex items-center gap-2 text-sm shrink-0">
          {session ? (
            <>
              {(session.user as any)?.role === 'admin' && (
                <Link href="/admin" className="bg-yellow-400 text-black px-2 py-1 rounded text-xs font-semibold">
                  Admin
                </Link>
              )}
              <button onClick={() => signOut({ callbackUrl: '/' })} className="text-gray-500 hover:text-gray-800">
                Salir
              </button>
            </>
          ) : (
            <Link href="/auth/login" className="text-gray-600 hover:text-blue-700 font-medium">
              Entrar
            </Link>
          )}
        </div>
      </div>

      {/* Country sub-nav — only when inside a country */}
      {pais && (
        <div className="border-t border-gray-100 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 py-2 flex items-center gap-1 text-sm overflow-x-auto">
            <Link href="/" className="text-gray-400 hover:text-gray-700 px-2 py-1 whitespace-nowrap shrink-0">
              ← Países
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-700 font-semibold px-2 py-1 whitespace-nowrap shrink-0">
              {PAIS_FLAGS[pais]} {PAIS_NOMBRES[pais]}
            </span>
            <span className="text-gray-300">/</span>
            <Link
              href={`/${pais}/consulados`}
              className={`px-3 py-1 rounded-lg whitespace-nowrap transition ${
                pathname?.includes('/consulados')
                  ? 'bg-blue-700 text-white'
                  : 'text-gray-600 hover:bg-white hover:shadow-sm'
              }`}
            >
              Consulados
            </Link>
            <Link
              href={`/${pais}/tramites`}
              className={`px-3 py-1 rounded-lg whitespace-nowrap transition ${
                pathname?.includes('/tramites')
                  ? 'bg-blue-700 text-white'
                  : 'text-gray-600 hover:bg-white hover:shadow-sm'
              }`}
            >
              Trámites
            </Link>
            <Link
              href={`/${pais}/noticias`}
              className={`px-3 py-1 rounded-lg whitespace-nowrap transition ${
                pathname?.includes('/noticias')
                  ? 'bg-blue-700 text-white'
                  : 'text-gray-600 hover:bg-white hover:shadow-sm'
              }`}
            >
              Noticias
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
