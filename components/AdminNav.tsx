'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  IconGrid, IconSparkles, IconBuilding, IconClipboard, IconNewspaper,
  IconHandshake, IconMegaphone, IconBriefcase, IconUsers,
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
  return (
    <aside className="w-60 min-h-screen flex flex-col py-6 px-3 gap-0.5 shrink-0 bg-gray-900">
      <Link href="/" className="flex items-baseline gap-2 px-3 mb-6">
        <span className="text-xl font-display font-semibold text-white">Compa</span>
        <span className="text-[11px] text-gray-400 tracking-wide">Admin</span>
      </Link>

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
        <Link href="/" className="block text-xs text-gray-400 hover:text-white transition py-1">
          Ver Recursos Generales
        </Link>
        <Link href="/patrocinadores" className="block text-xs text-gray-400 hover:text-white transition py-1">
          Ver Patrocinadores
        </Link>
        <Link href="/" className="block text-xs text-gray-500 hover:text-white transition py-1">
          ← Volver al sitio
        </Link>
      </div>
    </aside>
  )
}
