import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import TramiteCard from '@/components/TramiteCard'
import { PAISES, PAIS_NOMBRES } from '@/lib/utils'
import { prisma } from '@/lib/db'

export default async function TramitesPage({ params }: { params: { pais: string } }) {
  const pais = params.pais.toUpperCase()
  if (!PAISES.includes(pais as any)) notFound()

  const tramites = await prisma.tramite.findMany({
    where: { pais },
    orderBy: { titulo: 'asc' },
  })

  return (
    <>
      <Navbar pais={pais} />
      <main className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Trámites para ciudadanos de {PAIS_NOMBRES[pais]}
        </h1>
        <p className="text-gray-500 mb-8">Guías paso a paso para tus documentos y trámites en EE.UU.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tramites.map(t => (
            <TramiteCard key={t.id} {...t} pais={pais} />
          ))}
        </div>

        {tramites.length === 0 && (
          <p className="text-gray-500 text-center py-16">No hay trámites registrados.</p>
        )}
      </main>
    </>
  )
}
