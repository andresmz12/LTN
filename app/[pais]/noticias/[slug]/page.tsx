import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { PAISES, formatDate } from '@/lib/utils'
import { prisma } from '@/lib/db'

export default async function NoticiaDetailPage({ params }: { params: { pais: string; slug: string } }) {
  const pais = params.pais.toUpperCase()
  if (!PAISES.includes(pais as any)) notFound()

  const noticia = await prisma.noticia.findUnique({ where: { slug: params.slug } })
  if (!noticia || !noticia.publicado) notFound()

  return (
    <>
      <Navbar pais={pais} />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <Link href={`/${pais}/noticias`} className="text-sm text-blue-600 hover:underline mb-4 inline-block">
          ← Volver a noticias
        </Link>

        <article className="bg-white rounded-2xl shadow p-8">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded mb-4">
            {noticia.categoria}
          </span>

          <h1 className="text-2xl font-bold text-gray-900 mb-4">{noticia.titulo}</h1>

          <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
            <span>{formatDate(noticia.publishedAt)}</span>
            {noticia.fuente && <span>Fuente: {noticia.fuente}</span>}
          </div>

          <p className="text-gray-600 text-base mb-6 italic">{noticia.resumen}</p>

          <div className="prose prose-sm max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: noticia.contenidoHtml }} />

          {noticia.enlaceOriginal && (
            <div className="mt-8 pt-6 border-t">
              <a href={noticia.enlaceOriginal} target="_blank" rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline">
                Ver noticia original →
              </a>
            </div>
          )}
        </article>
      </main>
    </>
  )
}
