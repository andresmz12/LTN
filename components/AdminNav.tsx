'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: '📊', exact: true },
  { href: '/admin/generar-contenido', label: 'Generar con IA', icon: '✨', gold: true },
  { href: '/admin/consulados', label: 'Consulados', icon: '🏛' },
  { href: '/admin/tramites', label: 'Trámites', icon: '📋' },
  { href: '/admin/noticias', label: 'Noticias', icon: '📰' },
  { href: '/admin/clientes', label: 'Patrocinadores', icon: '🤝' },
  { href: '/admin/anuncios', label: 'Anuncios', icon: '📢' },
  { href: '/admin/usuarios', label: 'Usuarios', icon: '👥' },
]

export default function AdminNav() {
  const pathname = usePathname()
  return (
    <aside style={{ background: '#1E2761' }} className="w-60 min-h-screen flex flex-col py-6 px-3 gap-1 shrink-0">
      <Link href="/" className="flex items-center gap-2 px-3 mb-6">
        <span className="text-2xl font-bold text-white">Compa</span>
        <span className="text-xs text-blue-300 mt-1">Admin</span>
      </Link>

      <div className="text-xs text-blue-400 uppercase tracking-widest px-3 mb-1">Contenido</div>

      {navItems.map(({ href, label, icon, gold, exact }) => {
        const active = exact ? pathname === href : pathname.startsWith(href)
        return (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
              gold
                ? active
                  ? 'text-white'
                  : 'text-amber-300 hover:text-white hover:bg-white/10'
                : active
                ? 'bg-white/20 text-white'
                : 'text-blue-200 hover:bg-white/10 hover:text-white'
            }`}
            style={gold && active ? { background: '#E8A33D' } : {}}
          >
            <span className="text-base">{icon}</span>
            <span>{label}</span>
            {gold && (
              <span className="ml-auto text-xs bg-white/20 px-1.5 py-0.5 rounded-full">IA</span>
            )}
          </Link>
        )
      })}

      <div className="mt-auto px-3 pt-4 border-t border-white/10 space-y-1">
        <Link href="/general" className="flex items-center gap-2 text-xs text-blue-300 hover:text-white transition py-1">
          🌎 Ver Recursos Generales
        </Link>
        <Link href="/patrocinadores" className="flex items-center gap-2 text-xs text-blue-300 hover:text-white transition py-1">
          🤝 Ver Patrocinadores
        </Link>
        <Link href="/" className="flex items-center gap-2 text-xs text-blue-300 hover:text-white transition py-1">
          ← Ver sitio
        </Link>
      </div>
    </aside>
  )
}
