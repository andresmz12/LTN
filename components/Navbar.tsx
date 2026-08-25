'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { useRouter, usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { PAIS_NOMBRES, PAIS_FLAGS, PAISES } from '@/lib/utils'
import Logo from '@/components/Logo'
import { IconChevronDown, IconArrowLeft, IconBuilding, IconClipboard, IconNewspaper, IconBriefcase, IconShield } from '@/components/icons'

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
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-2 sm:gap-4">
        <Logo />

        {/* Main nav — scrolls horizontally below sm instead of pushing "Entrar" off-screen.
            Safe to clip overflow here only below sm: the país dropdown uses `fixed` positioning
            on mobile (escapes ancestor clipping) and switches to `sm:absolute` at sm+, where we
            restore overflow-visible so the dropdown panel isn't cut off. */}
        <div className="flex items-center gap-0.5 sm:gap-1 text-xs sm:text-sm overflow-x-auto sm:overflow-visible min-w-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <Link
            href="/"
            className={`px-2 sm:px-3 py-1.5 rounded-lg font-medium transition whitespace-nowrap shrink-0 ${
              pathname === '/' || pathname?.startsWith('/general')
                ? 'bg-brand-700 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <span className="hidden sm:inline">Recursos Generales</span>
            <span className="sm:hidden">Recursos</span>
          </Link>

          <Link
            href="/derechos"
            className={`flex items-center gap-1 px-2 sm:px-3 py-1.5 rounded-lg font-medium transition whitespace-nowrap shrink-0 ${
              pathname === '/derechos'
                ? 'bg-accent-500 text-white'
                : 'text-accent-700 hover:bg-accent-50'
            }`}
          >
            <IconShield className="w-3.5 h-3.5" />
            Derechos
          </Link>

          <div ref={paisMenuRef} className="relative shrink-0">
            <button
              type="button"
              onClick={() => setPaisMenuOpen((v) => !v)}
              className={`flex items-center gap-1 px-2 sm:px-3 py-1.5 rounded-lg font-medium transition whitespace-nowrap ${
                pais
                  ? 'bg-brand-700 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <span className="hidden sm:inline">Info por país</span>
              <span className="sm:hidden">Países</span>
              <IconChevronDown
                className={`w-3.5 h-3.5 transition-transform ${paisMenuOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {paisMenuOpen && (
              <div className="fixed inset-x-4 top-16 z-50 sm:absolute sm:inset-x-auto sm:top-auto sm:left-0 sm:mt-2 sm:w-72 bg-white border border-gray-100 rounded-2xl shadow-xl p-3 grid grid-cols-2 gap-1 max-h-80 overflow-y-auto">
                {PAISES.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => { setPaisMenuOpen(false); router.push(`/${p}`) }}
                    className="flex items-center gap-2 px-2.5 py-2 rounded-xl text-left hover:bg-brand-50 transition-colors"
                  >
                    <span className="text-lg shrink-0">{PAIS_FLAGS[p]}</span>
                    <span className="text-sm font-medium text-gray-800 truncate">{PAIS_NOMBRES[p]}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/trabajos"
            className={`flex items-center gap-1 px-2 sm:px-3 py-1.5 rounded-lg font-medium transition whitespace-nowrap shrink-0 ${
              pathname?.startsWith('/trabajos')
                ? 'bg-brand-700 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <IconBriefcase className="w-3.5 h-3.5 sm:hidden" />
            Trabajos
          </Link>

          <Link
            href="/patrocinadores"
            className={`hidden sm:block px-2 sm:px-3 py-1.5 rounded-lg font-medium transition whitespace-nowrap shrink-0 ${
              pathname === '/patrocinadores'
                ? 'bg-brand-700 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Patrocinadores
          </Link>
        </div>

        {/* Auth */}
        <div className="flex items-center gap-2 text-xs sm:text-sm shrink-0">
          {session ? (
            <>
              {(session.user as any)?.role === 'admin' && (
                <Link href="/admin" className="bg-accent-400 text-white px-2 py-1 rounded text-xs font-semibold">
                  Admin
                </Link>
              )}
              <button onClick={() => signOut({ callbackUrl: '/' })} className="text-gray-500 hover:text-gray-800">
                Salir
              </button>
            </>
          ) : (
            <Link href="/auth/login" className="text-gray-600 hover:text-brand-700 font-medium">
              Entrar
            </Link>
          )}
        </div>
      </div>

      {/* Country sub-nav — only when inside a country */}
      {pais && (
        <div className="border-t border-gray-100 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 py-2 flex flex-wrap items-center gap-1 text-sm">
            <Link href="/" className="flex items-center gap-1 text-gray-400 hover:text-gray-700 px-2 py-1 whitespace-nowrap shrink-0">
              <IconArrowLeft className="w-3.5 h-3.5" /> Países
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-700 font-semibold px-2 py-1 whitespace-nowrap shrink-0">
              {PAIS_FLAGS[pais]} {PAIS_NOMBRES[pais]}
            </span>
            <span className="text-gray-300 hidden sm:inline">/</span>
            <Link
              href={`/${pais}/consulados`}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg whitespace-nowrap transition ${
                pathname?.includes('/consulados')
                  ? 'bg-brand-700 text-white'
                  : 'text-gray-600 hover:bg-white hover:shadow-sm'
              }`}
            >
              <IconBuilding className="w-4 h-4" /> Consulados
            </Link>
            <Link
              href={`/${pais}/tramites`}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg whitespace-nowrap transition ${
                pathname?.includes('/tramites')
                  ? 'bg-brand-700 text-white'
                  : 'text-gray-600 hover:bg-white hover:shadow-sm'
              }`}
            >
              <IconClipboard className="w-4 h-4" /> Trámites
            </Link>
            <Link
              href={`/${pais}/noticias`}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg whitespace-nowrap transition ${
                pathname?.includes('/noticias')
                  ? 'bg-brand-700 text-white'
                  : 'text-gray-600 hover:bg-white hover:shadow-sm'
              }`}
            >
              <IconNewspaper className="w-4 h-4" /> Noticias
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
