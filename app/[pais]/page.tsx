import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnuncioCard from '@/components/AnuncioCard'
import { IconBuilding, IconClipboard, IconNewspaper } from '@/components/icons'
import { PAISES, PAIS_NOMBRES, PAIS_FLAGS } from '@/lib/utils'
import { prisma } from '@/lib/db'
import { getAnunciosPara } from '@/lib/ads'

export default async function PaisPage({ params }: { params: { pais: string } }) {
  const pais = params.pais.toUpperCase()
  if (!PAISES.includes(pais as any)) notFound()

  const [consulados, tramites, noticias, anuncios] = await Promise.all([
    prisma.consulado.findMany({ where: { pais }, take: 2, orderBy: { ciudad: 'asc' } }),
    prisma.tramite.findMany({ where: { pais }, take: 3, orderBy: { titulo: 'asc' } }),
    prisma.noticia.findMany({ where: { publicado: true, paises: { has: pais } }, take: 3, orderBy: { publishedAt: 'desc' } }),
    getAnunciosPara(pais),
  ])
  const anuncio = anuncios[0] ?? null

  return (
    <>
      <Navbar pais={pais} />

      <div className="bg-gradient-to-br from-brand-900 to-brand-700">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <h1 className="text-3xl font-display font-bold text-white flex items-center gap-3">
            <span>{PAIS_FLAGS[pais]}</span> {PAIS_NOMBRES[pais]}
          </h1>
          <p className="text-brand-100 mt-1">Recursos y servicios para la comunidad de {PAIS_NOMBRES[pais]} en EE.UU.</p>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                <IconBuilding className="w-5 h-5 text-brand-500" /> Consulados
              </h2>
              <Link href={`/${pais}/consulados`} className="text-sm text-brand-600 hover:underline">Ver todos</Link>
            </div>
            <div className="space-y-3">
              {consulados.map((c: any) => (
                <Link key={c.id} href={`/${pais}/consulados/${c.id}`}
                  className="block bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-100 transition">
                  <p className="font-semibold text-gray-800">{c.nombre}</p>
                  <p className="text-sm text-gray-500">{c.ciudad}</p>
                </Link>
              ))}
            </div>
          </section>

          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                <IconClipboard className="w-5 h-5 text-brand-500" /> Trámites
              </h2>
              <Link href={`/${pais}/tramites`} className="text-sm text-brand-600 hover:underline">Ver todos</Link>
            </div>
            <div className="space-y-3">
              {tramites.map((t: any) => (
                <Link key={t.id} href={`/${pais}/tramites/${t.slug}`}
                  className="block bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-100 transition">
                  <p className="font-semibold text-gray-800">{t.titulo}</p>
                  <p className="text-sm text-gray-500">{t.tiempoPromedio}</p>
                </Link>
              ))}
            </div>
          </section>

          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                <IconNewspaper className="w-5 h-5 text-brand-500" /> Noticias
              </h2>
              <Link href={`/${pais}/noticias`} className="text-sm text-brand-600 hover:underline">Ver todas</Link>
            </div>
            <div className="space-y-3">
              {noticias.map((n: any) => (
                <Link key={n.id} href={`/${pais}/noticias/${n.slug}`}
                  className="block bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-100 transition">
                  <p className="font-semibold text-gray-800 line-clamp-2">{n.titulo}</p>
                  <p className="text-sm text-gray-500">{n.categoria}</p>
                </Link>
              ))}
            </div>
          </section>
        </div>

        {anuncio && (
          <div className="mt-8 max-w-md">
            <AnuncioCard
              id={anuncio.id}
              titulo={anuncio.titulo}
              descripcion={anuncio.descripcion}
              imagenUrl={anuncio.imagenUrl}
              enlaceDestino={anuncio.enlaceDestino}
              tipo={anuncio.tipo}
            />
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
