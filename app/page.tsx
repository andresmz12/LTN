import Link from 'next/link'
import Navbar from '@/components/Navbar'
import AnuncioCard from '@/components/AnuncioCard'
import { prisma } from '@/lib/db'

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
  alto:       { label: 'Alta prioridad', className: 'bg-orange-100 text-orange-700' },
  importante: { label: 'Importante', className: 'bg-yellow-100 text-yellow-700' },
  relevante:  { label: 'Relevante',  className: 'bg-blue-50 text-blue-600' },
}

const RECURSOS_OFICIALES = [
  { nombre: 'IRS — Impuestos en español', url: 'https://www.irs.gov/es', desc: 'Declaración de impuestos y ITIN' },
  { nombre: 'USCIS — Inmigración', url: 'https://www.uscis.gov/es', desc: 'Visas, residencia y ciudadanía' },
  { nombre: 'Benefits.gov', url: 'https://www.benefits.gov/', desc: 'Beneficios del gobierno federal' },
  { nombre: 'FindAHealthCenter.hrsa.gov', url: 'https://findahealthcenter.hrsa.gov/', desc: 'Centros de salud comunitarios' },
  { nombre: 'USA.gov en español', url: 'https://www.usa.gov/espanol', desc: 'Portal oficial del gobierno' },
  { nombre: 'DOL — Derechos laborales', url: 'https://www.dol.gov/agencies/whd', desc: 'Salario mínimo y derechos' },
]

async function getAnuncios() {
  const now = new Date()
  const anuncios = await prisma.anuncio.findMany({
    where: {
      activo: true,
      fechaInicio: { lte: now },
      OR: [{ fechaFin: null }, { fechaFin: { gte: now } }],
      paisesTarget: { has: 'GENERAL' },
    },
  }).catch(() => [])

  if (anuncios.length > 0) {
    await prisma.anuncio.updateMany({
      where: { id: { in: anuncios.map((a: any) => a.id) } },
      data: { impresiones: { increment: 1 } },
    }).catch(() => {})
  }

  return anuncios
}

export default async function Home() {
  const [tramites, anuncios] = await Promise.all([
    prisma.tramite.findMany({
      where: { pais: 'GENERAL' },
      orderBy: { titulo: 'asc' },
    }).catch(() => []),
    getAnuncios(),
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
      <main className="max-w-5xl mx-auto px-4 py-10">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Información para latinos en EE.UU.
          </h1>
          <p className="text-gray-500 max-w-2xl">
            Todo lo que necesitas saber para vivir, trabajar y prosperar en Estados Unidos — sin importar tu país de origen o estatus migratorio.
          </p>
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
                        className="block bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h3 className="font-bold text-gray-900 text-base leading-snug">{tramite.titulo}</h3>
                          {badge && (
                            <span className={`shrink-0 text-xs font-semibold px-2 py-0.5 rounded-full whitespace-nowrap ${badge.className}`}>
                              {badge.label}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500 mb-4 line-clamp-3">{tramite.descripcion}</p>
                        <span className="text-sm font-semibold text-blue-700">
                          Ver guía completa →
                        </span>
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
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Recursos y enlaces oficiales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {RECURSOS_OFICIALES.map(r => (
              <a key={r.nombre} href={r.url} target="_blank" rel="noopener noreferrer"
                className="flex items-start gap-3 bg-white rounded-xl p-4 hover:shadow-sm transition-shadow">
                <span className="text-blue-500 text-lg shrink-0">🔗</span>
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
          <Link href="/patrocinadores" className="inline-block bg-blue-700 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-800 transition">
            Ver abogados y servicios recomendados
          </Link>
        </div>

      </main>

      <footer className="text-center text-xs text-gray-400 py-8 mt-8 border-t border-gray-100">
        © 2025 Compa ·{' '}
        <Link href="/patrocinadores" className="hover:text-gray-600 underline">Patrocinadores</Link>
      </footer>
    </>
  )
}
