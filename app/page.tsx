import Navbar from '@/components/Navbar'
import CountrySelectorCard from '@/components/CountrySelectorCard'
import { PAISES } from '@/lib/utils'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Bienvenido a <span className="text-blue-700">Compa</span> 🌎
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Tu guía de confianza para latinos en Estados Unidos. Consulados, trámites, noticias y más.
          </p>
        </div>

        <h2 className="text-xl font-semibold text-gray-700 mb-6 text-center">
          ¿De dónde eres?
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {PAISES.map(pais => (
            <CountrySelectorCard key={pais} pais={pais} />
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-white rounded-xl shadow">
            <div className="text-3xl mb-3">🏛</div>
            <h3 className="font-bold text-gray-800 mb-2">Consulados</h3>
            <p className="text-sm text-gray-600">Encuentra tu consulado más cercano con horarios y contacto.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <div className="text-3xl mb-3">📋</div>
            <h3 className="font-bold text-gray-800 mb-2">Trámites</h3>
            <p className="text-sm text-gray-600">Guías paso a paso para tus documentos y trámites migratorios.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <div className="text-3xl mb-3">📰</div>
            <h3 className="font-bold text-gray-800 mb-2">Noticias</h3>
            <p className="text-sm text-gray-600">Noticias relevantes para la comunidad latina en EE.UU.</p>
          </div>
        </div>
      </main>

      <footer className="text-center text-sm text-gray-400 py-8">
        © 2024 Compa. Todos los derechos reservados.
      </footer>
    </>
  )
}
