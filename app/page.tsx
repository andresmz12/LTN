import Link from 'next/link'
import Navbar from '@/components/Navbar'
import CountrySelectorCard from '@/components/CountrySelectorCard'
import { PAISES } from '@/lib/utils'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-10">

        {/* Simple header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Información para latinos en EE.UU.
          </h1>
          <p className="text-gray-500">
            Consulados, trámites, noticias y recursos — en un solo lugar.
          </p>
        </div>

        {/* General Resources — always visible and prominent */}
        <Link href="/general" className="block mb-10 bg-blue-700 text-white rounded-2xl p-6 hover:bg-blue-800 transition-colors">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-200 text-xs font-semibold uppercase tracking-wider mb-1">Para todos los latinos</p>
              <h2 className="text-xl font-bold mb-1">Recursos Generales</h2>
              <p className="text-blue-200 text-sm">ITIN · Impuestos · Licencia · Seguro médico · Cuenta bancaria</p>
            </div>
            <span className="text-3xl shrink-0 ml-4">🌎</span>
          </div>
        </Link>

        {/* Countries */}
        <div>
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
            Por país
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {PAISES.map(pais => (
              <CountrySelectorCard key={pais} pais={pais} />
            ))}
          </div>
        </div>

      </main>

      <footer className="text-center text-xs text-gray-400 py-8 mt-8 border-t border-gray-100">
        © 2025 Compa ·{' '}
        <Link href="/patrocinadores" className="hover:text-gray-600 underline">Patrocinadores</Link>
      </footer>
    </>
  )
}
