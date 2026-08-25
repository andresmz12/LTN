import Link from 'next/link'
import Logo from '@/components/Logo'

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white mt-8">
      <div className="max-w-5xl mx-auto px-4 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Logo />
        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-brand-700 transition">Recursos</Link>
          <Link href="/derechos" className="hover:text-brand-700 transition">Tus Derechos</Link>
          <Link href="/trabajos" className="hover:text-brand-700 transition">Trabajos</Link>
          <Link href="/patrocinadores" className="hover:text-brand-700 transition">Patrocinadores</Link>
          <Link href="/privacidad" className="hover:text-brand-700 transition">Privacidad</Link>
          <a href="mailto:contacto@compa.app" className="hover:text-brand-700 transition">Contacto</a>
        </nav>
        <p className="text-xs text-gray-400">© 2026 Compa. Hecho con 🧡 para la comunidad latina.</p>
      </div>
    </footer>
  )
}
