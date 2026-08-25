import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import TramiteCard from '@/components/TramiteCard'
import AnuncioCard from '@/components/AnuncioCard'
import { PAISES, PAIS_NOMBRES } from '@/lib/utils'
import { prisma } from '@/lib/db'
import { getAnunciosPara } from '@/lib/ads'

export default async function TramitesPage({ params }: { params: { pais: string } }) {
  const pais = params.pais.toUpperCase()
  if (!PAISES.includes(pais as any)) notFound()

  const [tramites, anuncios] = await Promise.all([
    prisma.tramite.findMany({
      where: { pais },
      orderBy: { titulo: 'asc' },
    }),
    getAnunciosPara(pais),
  ])

  return (
    <>
      <Navbar pais={pais} />
      <main className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Trámites para ciudadanos de {PAIS_NOMBRES[pais]}
        </h1>
        <p className="text-gray-500 mb-8">Guías paso a paso para tus documentos y trámites en EE.UU.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tramites.map((t: any, idx: number) => {
            const showAdAfter = anuncios.length > 0 && idx > 0 && (idx + 1) % 3 === 0
            const anuncio = showAdAfter ? anuncios[Math.floor(idx / 3) % anuncios.length] : null
            return (
              <div key={t.id} className="contents">
                <TramiteCard {...t} pais={pais} />
                {showAdAfter && anuncio && (
                  <AnuncioCard
                    id={anuncio.id}
                    titulo={anuncio.titulo}
                    descripcion={anuncio.descripcion}
                    imagenUrl={anuncio.imagenUrl}
                    enlaceDestino={anuncio.enlaceDestino}
                    tipo={anuncio.tipo}
                  />
                )}
              </div>
            )
          })}
        </div>

        {tramites.length === 0 && (
          <p className="text-gray-500 text-center py-16">No hay trámites registrados.</p>
        )}
      </main>
      <Footer />
    </>
  )
}
