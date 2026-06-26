import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { PAISES, PAIS_NOMBRES } from '@/lib/utils'
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
      <main className="max-w-3xl mx-auto px-4 py-10">
        <Link href={`/${pais}/tramites`} className="text-sm text-blue-600 hover:underline mb-4 inline-block">
          ← Volver a trámites
        </Link>

        <div className="bg-white rounded-2xl shadow p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-3">{tramite.titulo}</h1>

          <div className="flex gap-6 text-sm text-gray-500 mb-6">
            {tramite.tiempoPromedio && <span>⏱ {tramite.tiempoPromedio}</span>}
            {tramite.costo && <span>💵 {tramite.costo}</span>}
          </div>

          <p className="text-gray-700 mb-6">{tramite.descripcion}</p>

          {tramite.documentosNecesarios.length > 0 && (
            <div className="mb-6">
              <h2 className="font-bold text-gray-800 mb-3">📄 Documentos necesarios</h2>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                {tramite.documentosNecesarios.map((doc, i) => <li key={i}>{doc}</li>)}
              </ul>
            </div>
          )}

          {pasos && pasos.length > 0 && (
            <div className="mb-6">
              <h2 className="font-bold text-gray-800 mb-3">📝 Pasos a seguir</h2>
              <ol className="space-y-3">
                {pasos.map((paso, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-700">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {i + 1}
                    </span>
                    <span>{paso}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {tramite.contenidoHtml && (
            <div className="prose prose-sm max-w-none mb-6"
              dangerouslySetInnerHTML={{ __html: tramite.contenidoHtml }} />
          )}

          {links && links.length > 0 && (
            <div>
              <h2 className="font-bold text-gray-800 mb-3">🔗 Links útiles</h2>
              <div className="space-y-2">
                {links.map((l, i) => (
                  <a key={i} href={l.url} target="_blank" rel="noopener noreferrer"
                    className="block text-sm text-blue-600 hover:underline">
                    {l.texto} →
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  )
}
