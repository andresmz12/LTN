'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useSession, signOut } from 'next-auth/react'
import {
  IconGrid, IconSparkles, IconBuilding, IconClipboard, IconNewspaper,
  IconHandshake, IconMegaphone, IconBriefcase, IconUsers, IconMenu, IconX, IconLogout,
} from '@/components/icons'

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: IconGrid, exact: true },
  { href: '/admin/generar-contenido', label: 'Generar con IA', icon: IconSparkles, gold: true },
  { href: '/admin/consulados', label: 'Consulados', icon: IconBuilding },
  { href: '/admin/tramites', label: 'Trámites', icon: IconClipboard },
  { href: '/admin/noticias', label: 'Noticias', icon: IconNewspaper },
  { href: '/admin/clientes', label: 'Patrocinadores', icon: IconHandshake },
  { href: '/admin/anuncios', label: 'Anuncios', icon: IconMegaphone },
  { href: '/admin/trabajos', label: 'Trabajos', icon: IconBriefcase },
  { href: '/admin/usuarios', label: 'Usuarios', icon: IconUsers },
]

export default function AdminNav() {
  const pathname = usePathname()
  const { data: session } = useSession()
  const [open, setOpen] = useState(false)
  const nombre = session?.user?.name || 'Administrador'
  const email = session?.user?.email || ''
  const iniciales = nombre
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      {/* Mobile top bar */}
      <div className="sm:hidden fixed top-0 inset-x-0 h-12 bg-gray-900 flex items-center justify-between px-4 z-40">
        <span className="text-white font-display font-semibold text-sm">Compa Admin</span>
        <button type="button" onClick={() => setOpen(true)} aria-label="Abrir menú" className="text-white p-2.5 -mr-2.5">
          <IconMenu className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile backdrop */}
      {open && (
        <div className="sm:hidden fixed inset-0 bg-black/50 z-40" onClick={() => setOpen(false)} />
      )}

      <aside
        className={`w-60 min-h-screen flex flex-col py-6 px-3 gap-0.5 shrink-0 bg-gray-900 fixed inset-y-0 left-0 z-50 transform transition-transform sm:static sm:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-3 mb-6">
          <Link href="/" className="flex items-baseline gap-2">
            <span className="text-xl font-display font-semibold text-white">Compa</span>
            <span className="text-[11px] text-gray-500 tracking-wide">Admin</span>
          </Link>
          <button type="button" onClick={() => setOpen(false)} aria-label="Cerrar menú" className="sm:hidden text-gray-500 p-2.5 -mr-2.5">
            <IconX className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center gap-2.5 px-3 mb-6">
          <div className="w-8 h-8 rounded-full bg-brand-500 text-white text-xs font-semibold flex items-center justify-center shrink-0">
            {iniciales || 'AD'}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-white truncate">{nombre}</p>
            <p className="text-xs text-gray-500 truncate">{email}</p>
          </div>
          <button
            type="button"
            onClick={() => signOut({ callbackUrl: '/' })}
            title="Cerrar sesión"
            aria-label="Cerrar sesión"
            className="text-gray-500 hover:text-white p-1.5 rounded-md hover:bg-white/5 transition shrink-0"
          >
            <IconLogout className="w-4 h-4" />
          </button>
        </div>

        <div className="text-[11px] text-gray-500 uppercase tracking-widest px-3 mb-1">Contenido</div>

        {navItems.map(({ href, label, icon: Icon, gold, exact }) => {
          const active = exact ? pathname === href : pathname.startsWith(href)
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                active
                  ? gold
                    ? 'bg-accent-600 text-white'
                    : 'bg-brand-500 text-white'
                  : gold
                  ? 'text-accent-400 hover:text-white hover:bg-white/5'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span>{label}</span>
              {gold && (
                <span className="ml-auto text-[10px] bg-white/15 px-1.5 py-0.5 rounded">IA</span>
              )}
            </Link>
          )
        })}

        <div className="mt-auto px-3 pt-4 border-t border-white/10 space-y-1.5">
          <Link href="/" className="block text-xs text-gray-500 hover:text-white transition py-1">
            Ver Recursos Generales
          </Link>
          <Link href="/patrocinadores" className="block text-xs text-gray-500 hover:text-white transition py-1">
            Ver Patrocinadores
          </Link>
          <Link href="/" className="block text-xs text-gray-500 hover:text-white transition py-1">
            ← Volver al sitio
          </Link>
        </div>
      </aside>
    </>
  )
}
