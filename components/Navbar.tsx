'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { useRouter, usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { PAIS_NOMBRES, PAISES } from '@/lib/utils'
import Logo from '@/components/Logo'
import Flag from '@/components/Flag'
import { IconChevronDown, IconArrowLeft, IconBuilding, IconClipboard, IconNewspaper, IconShield, IconMenu, IconX } from '@/components/icons'

const NAV_LINKS = [
  { href: '/', label: 'Recursos Generales', match: (p: string | null) => p === '/' || !!p?.startsWith('/general') },
  { href: '/derechos', label: 'Derechos', match: (p: string | null) => p === '/derechos' },
  { href: '/trabajos', label: 'Trabajos', match: (p: string | null) => !!p?.startsWith('/trabajos') },
  { href: '/patrocinadores', label: 'Patrocinadores', match: (p: string | null) => p === '/patrocinadores' },
]

export default function Navbar({ pais }: { pais?: string }) {
  const { data: session } = useSession()
  const pathname = usePathname()
  const router = useRouter()
  const [paisMenuOpen, setPaisMenuOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const paisMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (paisMenuRef.current && !paisMenuRef.current.contains(e.target as Node)) setPaisMenuOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => { setMobileMenuOpen(false) }, [pathname])

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:bg-brand-700 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold"
      >
        Saltar al contenido principal
      </a>
      {/* Top bar */}
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-2 sm:gap-4">
        <Logo />

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-1 text-sm">
          <Link
            href="/"
            className={`px-3 py-1.5 rounded-lg font-medium transition whitespace-nowrap ${
              pathname === '/' || pathname?.startsWith('/general')
                ? 'bg-brand-700 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Recursos Generales
          </Link>

          <Link
            href="/derechos"
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg font-medium transition whitespace-nowrap ${
              pathname === '/derechos'
                ? 'bg-accent-500 text-white'
                : 'text-accent-700 hover:bg-accent-50'
            }`}
          >
            <IconShield className="w-3.5 h-3.5" />
            Derechos
          </Link>

          <div ref={paisMenuRef} className="relative">
            <button
              type="button"
              onClick={() => setPaisMenuOpen((v) => !v)}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg font-medium transition whitespace-nowrap ${
                pais
                  ? 'bg-brand-700 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Info por país
              <IconChevronDown
                className={`w-3.5 h-3.5 transition-transform ${paisMenuOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {paisMenuOpen && (
              <div className="absolute left-0 mt-2 w-72 bg-white border border-gray-100 rounded-2xl shadow-xl p-3 grid grid-cols-2 gap-1 max-h-80 overflow-y-auto z-50">
                {PAISES.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => { setPaisMenuOpen(false); router.push(`/${p}`) }}
                    className="flex items-center gap-2 px-2.5 py-2 rounded-xl text-left hover:bg-brand-50 transition-colors"
                  >
                    <Flag pais={p} className="w-6 h-4" />
                    <span className="text-sm font-medium text-gray-800 truncate">{PAIS_NOMBRES[p]}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/trabajos"
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg font-medium transition whitespace-nowrap ${
              pathname?.startsWith('/trabajos')
                ? 'bg-brand-700 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Trabajos
          </Link>

          <Link
            href="/patrocinadores"
            className={`px-3 py-1.5 rounded-lg font-medium transition whitespace-nowrap ${
              pathname === '/patrocinadores'
                ? 'bg-brand-700 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Patrocinadores
          </Link>
        </div>

        {/* Auth (desktop) + hamburger (mobile) */}
        <div className="flex items-center gap-3 text-xs sm:text-sm shrink-0">
          <div className="hidden sm:flex items-center gap-2">
            {session ? (
              <>
                {(session.user as any)?.role === 'admin' && (
                  <Link href="/admin" className="bg-accent-600 text-white px-2 py-1 rounded text-xs font-semibold">
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

          <button
            type="button"
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="sm:hidden text-gray-600 p-2.5 -mr-2.5"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <IconX className="w-6 h-6" /> : <IconMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-gray-100 px-4 py-3 space-y-1 max-h-[75vh] overflow-y-auto">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`block px-3 py-2.5 rounded-lg font-medium text-sm ${
                l.match(pathname)
                  ? 'bg-brand-700 text-white'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {l.label}
            </Link>
          ))}

          <div className="pt-2 mt-2 border-t border-gray-100">
            <p className="px-3 pb-1 text-xs font-semibold text-gray-500 uppercase tracking-wide">Info por país</p>
            <div className="grid grid-cols-2 gap-1">
              {PAISES.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => router.push(`/${p}`)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-left hover:bg-gray-50"
                >
                  <Flag pais={p} className="w-6 h-4" />
                  <span className="text-sm font-medium text-gray-800 truncate">{PAIS_NOMBRES[p]}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="pt-3 mt-2 border-t border-gray-100">
            {session ? (
              <div className="flex items-center justify-between px-3">
                {(session.user as any)?.role === 'admin' && (
                  <Link href="/admin" className="bg-accent-600 text-white px-3 py-1.5 rounded text-xs font-semibold">
                    Admin
                  </Link>
                )}
                <button onClick={() => signOut({ callbackUrl: '/' })} className="text-gray-500 text-sm">
                  Salir
                </button>
              </div>
            ) : (
              <Link href="/auth/login" className="block px-3 py-2 text-brand-700 font-semibold text-sm">
                Entrar
              </Link>
            )}
          </div>
        </div>
      )}

      {/* Country sub-nav — only when inside a country */}
      {pais && (
        <div className="border-t border-gray-100 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 py-2 flex flex-wrap items-center gap-1 text-sm">
            <Link href="/" className="flex items-center gap-1 text-gray-500 hover:text-gray-700 px-2 py-1 whitespace-nowrap shrink-0">
              <IconArrowLeft className="w-3.5 h-3.5" /> Países
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-700 font-semibold px-2 py-1 whitespace-nowrap shrink-0">
              <Flag pais={pais} className="w-5 h-3.5" /> {PAIS_NOMBRES[pais]}
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
