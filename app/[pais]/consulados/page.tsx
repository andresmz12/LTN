import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ConsultadoCard from '@/components/ConsultadoCard'
import AnuncioCard from '@/components/AnuncioCard'
import { PAISES, PAIS_NOMBRES } from '@/lib/utils'
import { prisma } from '@/lib/db'
import { getAnunciosPara } from '@/lib/ads'
import { getEstadoCookie } from '@/lib/location'

export default async function ConsultadosPage({ params }: { params: { pais: string } }) {
  const pais = params.pais.toUpperCase()
  if (!PAISES.includes(pais as any)) notFound()

  const estado = getEstadoCookie()

  const [consuladosRaw, anuncios] = await Promise.all([
    prisma.consulado.findMany({
      where: { pais },
      orderBy: { ciudad: 'asc' },
    }),
    getAnunciosPara(pais, estado, 'PAIS_CONSULADOS'),
  ])

  // Si conocemos el estado del visitante, el consulado de su estado va primero.
  const consulados = estado
    ? [...consuladosRaw].sort((a: any, b: any) => (b.estadoUS === estado ? 1 : 0) - (a.estadoUS === estado ? 1 : 0))
    : consuladosRaw

  return (
    <>
      <Navbar pais={pais} />
      <main className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Consulados de {PAIS_NOMBRES[pais]} en EE.UU.
        </h1>
        <p className="text-gray-500 mb-8">{consulados.length} consulado(s) disponibles</p>

        <div className="grid md:grid-cols-2 gap-6">
          {consulados.map((c: any, idx: number) => {
            const showAdAfter = anuncios.length > 0 && idx > 0 && (idx + 1) % 3 === 0
            const anuncio = showAdAfter ? anuncios[Math.floor(idx / 3) % anuncios.length] : null
            return (
              <div key={c.id} className="contents">
                <ConsultadoCard {...c} pais={pais} />
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

        {consulados.length === 0 && (
          <p className="text-gray-500 text-center py-16">No hay consulados registrados.</p>
        )}
      </main>
      <Footer />
    </>
  )
}
