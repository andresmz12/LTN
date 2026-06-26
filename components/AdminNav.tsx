'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/admin', label: '📊 Dashboard' },
  { href: '/admin/consulados', label: '🏛 Consulados' },
  { href: '/admin/tramites', label: '📋 Trámites' },
  { href: '/admin/noticias', label: '📰 Noticias' },
  { href: '/admin/anuncios', label: '📣 Anuncios' },
  { href: '/admin/clientes', label: '🏢 Clientes' },
  { href: '/admin/usuarios', label: '👥 Usuarios' },
]

export default function AdminNav() {
  const pathname = usePathname()
  return (
    <aside className="w-56 min-h-screen bg-gray-900 text-white flex flex-col py-6 px-3 gap-1">
      <Link href="/" className="text-lg font-bold mb-6 px-3">Compa Admin</Link>
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
            pathname === href ? 'bg-blue-600' : 'hover:bg-gray-700'
          }`}
        >
          {label}
        </Link>
      ))}
    </aside>
  )
}
