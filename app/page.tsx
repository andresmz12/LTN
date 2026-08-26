import Link from 'next/link'
import Navbar from '@/components/Navbar'
import AnuncioCard from '@/components/AnuncioCard'
import Footer from '@/components/Footer'
import LocationBanner from '@/components/LocationBanner'
import { IconLink, IconArrowRight, IconShield } from '@/components/icons'
import { prisma } from '@/lib/db'
import { getAnunciosPara } from '@/lib/ads'
import { getEstadoCookie } from '@/lib/location'

const PRIORIDAD_ORDER: Record<string, number> = { critico: 0, alto: 1, importante: 2, relevante: 3 }

const CATEGORIA_ORDER = [
  'Migración y Seguridad',
  'Migración y Estatus',
  'Protección al Consumidor',
  'Dinero e Impuestos',
  'Trabajo',
  'Transporte',
  'Salud',
  'Vivienda',
  'Identidad y Documentos',
  'Educación',
  'Seguridad y Emergencias',
]

const PRIORIDAD_BADGE: Record<string, { label: string; className: string }> = {
  critico:    { label: 'Crítico',    className: 'bg-red-100 text-red-700' },
  alto:       { label: 'Alta prioridad', className: 'bg-accent-100 text-accent-700' },
  importante: { label: 'Importante', className: 'bg-amber-100 text-amber-700' },
  relevante:  { label: 'Relevante',  className: 'bg-brand-50 text-brand-600' },
}

const RECURSOS_OFICIALES = [
  { nombre: 'IRS — Impuestos en español', url: 'https://www.irs.gov/es', desc: 'Declaración de impuestos y ITIN' },
  { nombre: 'USCIS — Inmigración', url: 'https://www.uscis.gov/es', desc: 'Visas, residencia y ciudadanía' },
  { nombre: 'Benefits.gov', url: 'https://www.benefits.gov/', desc: 'Beneficios del gobierno federal' },
  { nombre: 'FindAHealthCenter.hrsa.gov', url: 'https://findahealthcenter.hrsa.gov/', desc: 'Centros de salud comunitarios' },
  { nombre: 'USA.gov en español', url: 'https://www.usa.gov/espanol', desc: 'Portal oficial del gobierno' },
  { nombre: 'DOL — Derechos laborales', url: 'https://www.dol.gov/agencies/whd', desc: 'Salario mínimo y derechos' },
]

export default async function Home() {
  const estado = getEstadoCookie()
  const [tramites, anuncios] = await Promise.all([
    prisma.tramite.findMany({
      where: { pais: 'GENERAL' },
      orderBy: { titulo: 'asc' },
    }).catch(() => []),
    getAnunciosPara('GENERAL', estado, 'INICIO'),
  ])

  type TramiteRow = (typeof tramites)[number]

  // Group by categoria
  const byCategoria: Record<string, TramiteRow[]> = {}
  for (const t of tramites) {
    const cat: string = (t as any).categoria ?? 'General'
    if (!byCategoria[cat]) byCategoria[cat] = []
    byCategoria[cat].push(t)
  }

  const prioridadOf = (t: TramiteRow) =>
    PRIORIDAD_ORDER[(t as any).prioridad ?? 'relevante'] ?? 3

  // Sort tramites within each category by prioridad
  for (const items of Object.values(byCategoria)) {
    items.sort((a: TramiteRow, b: TramiteRow) => prioridadOf(a) - prioridadOf(b))
  }

  // Sort categories by the fixed order; unknown categories go at the end alphabetically
  const categorias: [string, TramiteRow[]][] = Object.entries(byCategoria).sort(
    ([a], [b]) => {
      const ia = CATEGORIA_ORDER.indexOf(a)
      const ib = CATEGORIA_ORDER.indexOf(b)
      if (ia === -1 && ib === -1) return a.localeCompare(b)
      if (ia === -1) return 1
      if (ib === -1) return -1
      return ia - ib
    }
  )

  let cardIndex = 0

  return (
    <>
      <Navbar />

      {/* Hero */}
      <div className="bg-brand-900">
        <div className="max-w-5xl mx-auto px-4 py-14 sm:py-16">
          <span className="block w-10 h-1 bg-accent-400 rounded-full mb-5" />
          <h1 className="text-3xl sm:text-[2.75rem] font-display font-semibold text-white mb-4 max-w-2xl leading-[1.15]">
            Información para latinos en EE.UU.
          </h1>
          <p className="text-brand-200 max-w-xl text-[15px] sm:text-base">
            Todo lo que necesitas saber para vivir, trabajar y prosperar en Estados Unidos — sin importar tu país de origen o estatus migratorio.
          </p>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 py-10">

        <Link
          href="/derechos"
          className="mb-6 flex items-center gap-4 bg-white border-l-4 border-accent-500 rounded-r-lg rounded-l-sm p-5 hover:bg-accent-50/40 transition"
        >
          <IconShield className="w-7 h-7 shrink-0 text-accent-600" />
          <div>
            <p className="font-display font-semibold text-gray-900">Conoce tus Derechos</p>
            <p className="text-gray-500 text-sm">Qué hacer si la policía o ICE te paran — sin importar tu estatus migratorio.</p>
          </div>
        </Link>

        <div className="mb-8">
          <LocationBanner />
        </div>

        {tramites.length === 0 ? (
          <p className="text-gray-400 text-sm italic py-8">No hay recursos disponibles aún.</p>
        ) : (
          categorias.map(([categoria, items]) => (
            <div key={categoria} className="mb-10">
              <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                {categoria}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {items.map((tramite: TramiteRow) => {
                  const prioridad = (tramite as any).prioridad as string | null
                  const badge = prioridad ? PRIORIDAD_BADGE[prioridad] : null
                  const idx = cardIndex++
                  const showAdAfter = anuncios.length > 0 && idx > 0 && (idx + 1) % 3 === 0
                  const anuncio = showAdAfter ? anuncios[Math.floor(idx / 3) % anuncios.length] : null

                  return (
                    <div key={tramite.id} className="contents">
                      <Link
                        href={`/general/tramites/${tramite.slug}`}
                        className="group block bg-white rounded-lg border border-gray-200 p-6 hover:border-brand-300 transition-colors"
                      >
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h3 className="font-display font-semibold text-gray-900 text-base leading-snug">{tramite.titulo}</h3>
                          {badge && (
                            <span className={`shrink-0 text-xs font-semibold px-2 py-0.5 rounded-full whitespace-nowrap ${badge.className}`}>
                              {badge.label}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500 mb-2 line-clamp-3">{tramite.descripcion}</p>
                        <IconArrowRight className="w-4 h-4 text-brand-400 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition" />
                      </Link>
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
            </div>
          ))
        )}

        {/* Recursos oficiales */}
        <div className="bg-brand-50 border border-brand-100 rounded-lg p-8 mb-8">
          <h2 className="text-xl font-display font-semibold text-gray-800 mb-4">Recursos y enlaces oficiales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {RECURSOS_OFICIALES.map(r => (
              <a key={r.nombre} href={r.url} target="_blank" rel="noopener noreferrer"
                className="flex items-start gap-3 bg-white rounded-lg border border-gray-100 p-4 hover:border-brand-200 transition-colors">
                <IconLink className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-gray-800 text-sm">{r.nombre}</div>
                  <div className="text-xs text-gray-500">{r.desc}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* CTA patrocinadores */}
        <div className="text-center py-6 border-t border-gray-100">
          <p className="text-sm text-gray-500 mb-2">¿Necesitas ayuda profesional?</p>
          <Link href="/patrocinadores" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-accent-600 transition">
            Ver abogados y servicios recomendados
          </Link>
        </div>

      </main>

      <Footer />
    </>
  )
}
