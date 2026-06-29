import Link from 'next/link'
import Navbar from '@/components/Navbar'
import CountrySelectorCard from '@/components/CountrySelectorCard'
import { PAISES } from '@/lib/utils'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-12">

        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tu guía para latinos en <span className="text-blue-700">Estados Unidos</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Consulados, trámites, impuestos, ITIN y más — información confiable para toda la comunidad latina.
          </p>
        </div>

        {/* General Resources Banner */}
        <Link href="/general" className="block mb-12 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
          <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-sm font-semibold text-blue-300 uppercase tracking-wider mb-1">Para todos los latinos</div>
              <h2 className="text-2xl font-bold mb-2">Recursos Generales</h2>
              <p className="text-blue-200 text-sm max-w-lg">
                ITIN, declaración de impuestos, licencia de conducir, seguro médico y más — sin importar tu país de origen.
              </p>
            </div>
            <div className="flex gap-3 flex-wrap justify-center md:justify-end shrink-0">
              {['ITIN', 'Impuestos', 'Licencia', 'Seguro médico', 'Cuenta bancaria'].map(t => (
                <span key={t} className="bg-white/20 text-white text-xs px-3 py-1.5 rounded-full font-medium">{t}</span>
              ))}
            </div>
          </div>
        </Link>

        {/* Countries */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Selecciona tu país</h2>
          <p className="text-gray-500 text-sm mb-6">Información específica: consulados, trámites y noticias por país.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {PAISES.map(pais => (
              <CountrySelectorCard key={pais} pais={pais} />
            ))}
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
          <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="text-3xl mb-3">🏛</div>
            <h3 className="font-bold text-gray-800 mb-1">Consulados</h3>
            <p className="text-sm text-gray-500">Horarios, direcciones y servicios de tu consulado más cercano.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="text-3xl mb-3">📋</div>
            <h3 className="font-bold text-gray-800 mb-1">Trámites</h3>
            <p className="text-sm text-gray-500">Guías paso a paso para pasaportes, IDs y documentos migratorios.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="text-3xl mb-3">📰</div>
            <h3 className="font-bold text-gray-800 mb-1">Noticias</h3>
            <p className="text-sm text-gray-500">Las últimas noticias de inmigración, salud y comunidad latina.</p>
          </div>
        </div>
      </main>

      <footer className="text-center text-sm text-gray-400 py-8 mt-8 border-t border-gray-100">
        © 2025 Compa. Todos los derechos reservados. |{' '}
        <Link href="/patrocinadores" className="hover:text-gray-600 underline">Patrocinadores</Link>
      </footer>
    </>
  )
}
