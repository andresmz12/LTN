import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NoticiaCard from '@/components/NoticiaCard'
import { PAISES, PAIS_NOMBRES } from '@/lib/utils'
import { prisma } from '@/lib/db'

export default async function NoticiasPage({ params }: { params: { pais: string } }) {
  const pais = params.pais.toUpperCase()
  if (!PAISES.includes(pais as any)) notFound()

  const noticias = await prisma.noticia.findMany({
    where: { publicado: true, paises: { has: pais } },
    orderBy: { publishedAt: 'desc' },
  })

  return (
    <>
      <Navbar pais={pais} />
      <main className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Noticias para {PAIS_NOMBRES[pais]}
        </h1>
        <p className="text-gray-500 mb-8">Las últimas noticias relevantes para tu comunidad.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {noticias.map((n: any) => (
            <NoticiaCard key={n.id} {...n} pais={pais} />
          ))}
        </div>

        {noticias.length === 0 && (
          <p className="text-gray-500 text-center py-16">No hay noticias publicadas.</p>
        )}
      </main>
      <Footer />
    </>
  )
}
