'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { useRouter, usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { PAIS_NOMBRES, PAIS_FLAGS, PAISES } from '@/lib/utils'

export default function Navbar({ pais }: { pais?: string }) {
  const { data: session } = useSession()
  const pathname = usePathname()
  const router = useRouter()
  const [paisMenuOpen, setPaisMenuOpen] = useState(false)
  const paisMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (paisMenuRef.current && !paisMenuRef.current.contains(e.target as Node)) setPaisMenuOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
      {/* Top bar */}
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="text-xl font-bold text-blue-700 shrink-0">
          Compa
        </Link>

        {/* Main nav — always visible */}
        <div className="flex items-center gap-0.5 sm:gap-1 text-xs sm:text-sm">
          <Link
            href="/"
            className={`px-2 sm:px-3 py-1.5 rounded-lg font-medium transition whitespace-nowrap shrink-0 ${
              pathname === '/' || pathname?.startsWith('/general')
                ? 'bg-blue-700 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <span className="hidden sm:inline">Recursos Generales</span>
            <span className="sm:hidden">Recursos</span>
          </Link>

          <div ref={paisMenuRef} className="relative shrink-0">
            <button
              type="button"
              onClick={() => setPaisMenuOpen((v) => !v)}
              className={`flex items-center gap-1 px-2 sm:px-3 py-1.5 rounded-lg font-medium transition whitespace-nowrap ${
                pais
                  ? 'bg-blue-700 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <span className="hidden sm:inline">Info por país</span>
              <span className="sm:hidden">Países</span>
              <svg
                className={`w-3.5 h-3.5 transition-transform ${paisMenuOpen ? 'rotate-180' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {paisMenuOpen && (
              <div className="fixed inset-x-4 top-16 z-50 sm:absolute sm:inset-x-auto sm:top-auto sm:left-0 sm:mt-2 sm:w-72 bg-white border border-gray-100 rounded-2xl shadow-xl p-3 grid grid-cols-2 gap-1 max-h-80 overflow-y-auto">
                {PAISES.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => { setPaisMenuOpen(false); router.push(`/${p}`) }}
                    className="flex items-center gap-2 px-2.5 py-2 rounded-xl text-left hover:bg-blue-50 transition-colors"
                  >
                    <span className="text-lg shrink-0">{PAIS_FLAGS[p]}</span>
                    <span className="text-sm font-medium text-gray-800 truncate">{PAIS_NOMBRES[p]}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/patrocinadores"
            className={`px-2 sm:px-3 py-1.5 rounded-lg font-medium transition whitespace-nowrap shrink-0 ${
              pathname === '/patrocinadores'
                ? 'bg-blue-700 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <span className="hidden sm:inline">Patrocinadores</span>
            <span className="sm:hidden">Sponsors</span>
          </Link>
        </div>

        {/* Auth */}
        <div className="flex items-center gap-2 text-xs sm:text-sm shrink-0">
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
