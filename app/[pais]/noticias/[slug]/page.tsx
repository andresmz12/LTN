import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { IconArrowLeft } from '@/components/icons'
import { PAISES, PAIS_NOMBRES, PAIS_FLAGS, formatDate } from '@/lib/utils'
import { prisma } from '@/lib/db'

const CATEGORIA_COLORS: Record<string, string> = {
  'Inmigración': '#1d4ed8',
  'Salud': '#15803d',
  'Educación': '#854d0e',
  'Trabajo': '#c2410c',
  'Comunidad': '#6d28d9',
  'Legal': '#dc2626',
  'Economía': '#0369a1',
}

export default async function NoticiaDetailPage({ params }: { params: { pais: string; slug: string } }) {
  const pais = params.pais.toUpperCase()
  if (!PAISES.includes(pais as any)) notFound()

  const noticia = await prisma.noticia.findUnique({ where: { slug: params.slug } })
  if (!noticia || !noticia.publicado) notFound()

  const accentColor = CATEGORIA_COLORS[noticia.categoria] || '#1d4ed8'

  return (
    <>
      <Navbar pais={pais} />
      <main className="max-w-2xl mx-auto px-4 py-10">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href={`/${pais}`} className="hover:text-gray-700">
            {PAIS_FLAGS[pais]} {PAIS_NOMBRES[pais]}
          </Link>
          <span>/</span>
          <Link href={`/${pais}/noticias`} className="hover:text-gray-700">Noticias</Link>
        </div>

        <article>
          {/* Category pill */}
          <span
            className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
            style={{ color: accentColor, background: `${accentColor}15` }}
          >
            {noticia.categoria}
          </span>

          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-900 leading-tight mt-4 mb-3">
            {noticia.titulo}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-3 text-sm text-gray-400 mb-6 pb-6 border-b border-gray-100">
            <time>{formatDate(noticia.publishedAt)}</time>
            {noticia.fuente && (
              <>
                <span>·</span>
                <span>{noticia.fuente}</span>
              </>
            )}
          </div>

          {/* Lead / Summary */}
          <p className="text-base text-gray-600 leading-relaxed mb-6 font-medium">
            {noticia.resumen}
          </p>

          {/* Body */}
          <div
            className="text-gray-700 leading-relaxed space-y-4 [&>p]:text-base [&>h2]:text-lg [&>h2]:font-bold [&>h2]:text-gray-900 [&>h2]:mt-6 [&>h2]:mb-2 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-1 [&>li]:text-sm"
            dangerouslySetInnerHTML={{ __html: noticia.contenidoHtml }}
          />

          {/* Source link */}
          {noticia.enlaceOriginal && (
            <div className="mt-10 pt-6 border-t border-gray-100">
              <a
                href={noticia.enlaceOriginal}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-brand-600 hover:underline"
              >
                Ver noticia original →
              </a>
            </div>
          )}
        </article>

        {/* Back */}
        <div className="mt-8">
          <Link
            href={`/${pais}/noticias`}
            className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800 w-fit"
          >
            <IconArrowLeft className="w-4 h-4" /> Ver todas las noticias
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
