import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ShareButton from '@/components/ShareButton'
import { IconGlobe, IconLink, IconArrowLeft } from '@/components/icons'
import { prisma } from '@/lib/db'
import { formatDate } from '@/lib/utils'

export default async function TramiteGeneralPage({ params }: { params: { slug: string } }) {
  const tramite = await prisma.tramite.findUnique({
    where: { slug: params.slug },
  }).catch(() => null)

  if (!tramite || tramite.pais !== 'GENERAL') notFound()

  const pasos = tramite.pasos as string[] | null
  const linksExternos = tramite.linksExternos as Array<{ texto: string; url: string }> | null

  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <div className="mb-6">
          <Link href="/" className="flex items-center gap-1 text-sm text-brand-600 hover:underline w-fit">
            <IconArrowLeft className="w-4 h-4" /> Recursos Generales
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div className="mb-6">
            <span className="inline-flex items-center gap-1.5 text-xs bg-brand-50 text-brand-700 px-2 py-1 rounded-full font-medium">
              <IconGlobe className="w-3.5 h-3.5" /> Recursos Generales
            </span>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-3">{tramite.titulo}</h1>
          <p className="text-gray-500 mb-4">{tramite.descripcion}</p>

          <div className="mb-6">
            <ShareButton text={`${tramite.titulo} — guía en Compa:`} path={`/general/tramites/${tramite.slug}`} />
          </div>

          <div className="flex flex-wrap gap-4 mb-8 p-4 bg-gray-50 rounded-xl text-sm">
            {tramite.tiempoPromedio && (
              <div>
                <span className="text-gray-400">Tiempo: </span>
                <span className="font-semibold text-gray-700">{tramite.tiempoPromedio}</span>
              </div>
            )}
            {tramite.costo && (
              <div>
                <span className="text-gray-400">Costo: </span>
                <span className="font-semibold text-gray-700">{tramite.costo}</span>
              </div>
            )}
          </div>

          {pasos && pasos.length > 0 && (
            <div className="mb-8">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Pasos a seguir</h2>
              <ol className="space-y-3">
                {pasos.map((paso: string, i: number) => (
                  <li key={i} className="flex gap-3">
                    <span className="shrink-0 w-7 h-7 rounded-full bg-brand-700 text-white text-sm font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span className="text-gray-700 pt-0.5">{paso}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {tramite.documentosNecesarios?.length > 0 && (
            <div className="mb-8">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Documentos necesarios</h2>
              <ul className="space-y-2">
                {tramite.documentosNecesarios.map((doc: string, i: number) => (
                  <li key={i} className="flex gap-2 text-gray-700">
                    <span className="text-green-500 shrink-0">✓</span>
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div
            className="prose prose-sm max-w-none text-gray-700 mb-8"
            dangerouslySetInnerHTML={{ __html: tramite.contenidoHtml }}
          />

          {linksExternos && linksExternos.length > 0 && (
            <div className="border-t border-gray-100 pt-6">
              <h2 className="text-base font-bold text-gray-800 mb-3">Recursos oficiales</h2>
              <div className="space-y-2">
                {linksExternos.map((link: any, i: number) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-brand-700 hover:underline text-sm"
                  >
                    <IconLink className="w-4 h-4" /> {link.texto}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/patrocinadores"
            className="text-sm text-brand-600 hover:underline"
          >
            ¿Necesitas ayuda profesional? Ver abogados y servicios recomendados →
          </Link>
        </div>
      </main>

      <Footer />
    </>
  )
}
