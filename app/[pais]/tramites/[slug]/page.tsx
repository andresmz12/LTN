import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ShareButton from '@/components/ShareButton'
import { IconArrowLeft } from '@/components/icons'
import { PAISES, PAIS_NOMBRES, PAIS_FLAGS } from '@/lib/utils'
import { prisma } from '@/lib/db'

export default async function TramiteDetailPage({ params }: { params: { pais: string; slug: string } }) {
  const pais = params.pais.toUpperCase()
  if (!PAISES.includes(pais as any)) notFound()

  const tramite = await prisma.tramite.findUnique({ where: { slug: params.slug } })
  if (!tramite) notFound()

  const pasos = tramite.pasos as string[] | null
  const links = tramite.linksExternos as { texto: string; url: string }[] | null

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
          <Link href={`/${pais}/tramites`} className="hover:text-gray-700">Trámites</Link>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{tramite.titulo}</h1>

          {/* Quick info pills */}
          <div className="flex flex-wrap gap-3">
            {tramite.tiempoPromedio && (
              <div className="flex items-center gap-2 bg-brand-50 text-brand-700 text-sm px-3 py-1.5 rounded-xl">
                <span className="font-medium">Tiempo:</span> {tramite.tiempoPromedio}
              </div>
            )}
            {tramite.costo && (
              <div className="flex items-center gap-2 bg-green-50 text-green-700 text-sm px-3 py-1.5 rounded-xl">
                <span className="font-medium">Costo:</span> {tramite.costo}
              </div>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-4 text-base">
          {tramite.descripcion}
        </p>

        <div className="mb-8">
          <ShareButton text={`${tramite.titulo} — guía en Compa:`} path={`/${pais}/tramites/${tramite.slug}`} />
        </div>

        {/* Documents */}
        {tramite.documentosNecesarios.length > 0 && (
          <section className="mb-8">
            <h2 className="text-base font-bold text-gray-800 mb-3 pb-2 border-b border-gray-100">
              Documentos necesarios
            </h2>
            <ul className="space-y-2">
              {tramite.documentosNecesarios.map((doc: any, i: number) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <span className="text-brand-500 mt-0.5 shrink-0">✓</span>
                  {doc}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Steps */}
        {pasos && pasos.length > 0 && (
          <section className="mb-8">
            <h2 className="text-base font-bold text-gray-800 mb-3 pb-2 border-b border-gray-100">
              Pasos a seguir
            </h2>
            <ol className="space-y-4">
              {pasos.map((paso: any, i: number) => (
                <li key={i} className="flex gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-brand-700 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-sm text-gray-700 leading-relaxed">{paso}</span>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* Extra content */}
        {tramite.contenidoHtml && (
          <section className="mb-8 text-sm text-gray-700 leading-relaxed space-y-3
            [&>h2]:text-base [&>h2]:font-bold [&>h2]:text-gray-800 [&>h2]:mt-4 [&>h2]:mb-2
            [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-1
            [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:space-y-1
            [&>p]:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: tramite.contenidoHtml }}
          />
        )}

        {/* Links */}
        {links && links.length > 0 && (
          <section className="pt-6 border-t border-gray-100">
            <h2 className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-3">
              Recursos oficiales
            </h2>
            <div className="space-y-2">
              {links.map((l, i) => (
                <a key={i} href={l.url} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-brand-700 hover:underline">
                  <span className="text-brand-400">→</span> {l.texto}
                </a>
              ))}
            </div>
          </section>
        )}

        <div className="mt-10">
          <Link href={`/${pais}/tramites`} className="flex items-center gap-1 text-sm text-gray-400 hover:text-gray-700 w-fit">
            <IconArrowLeft className="w-4 h-4" /> Ver todos los trámites
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
