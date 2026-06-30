import Link from 'next/link'
import Navbar from '@/components/Navbar'
import CountrySelector from '@/components/CountrySelector'
import AnuncioCard from '@/components/AnuncioCard'
import { prisma } from '@/lib/db'

const TEMAS = [
  {
    icono: '🪪',
    titulo: 'ITIN — Número de Identificación Tributaria',
    slug: 'itin-como-solicitarlo',
    descripcion: 'El ITIN te permite pagar impuestos, abrir cuentas bancarias y acceder a servicios financieros sin necesidad de número de Seguro Social.',
    tags: ['Formulario W-7', 'IRS', 'Sin estatus migratorio'],
  },
  {
    icono: '🧾',
    titulo: 'Declaración de Impuestos',
    slug: 'declaracion-impuestos',
    descripcion: 'Aprende cómo declarar tus impuestos en EE.UU. usando tu ITIN o SSN. Disponible para todos, sin importar tu estatus migratorio.',
    tags: ['IRS', 'Formulario 1040', 'Gratuito con VITA'],
  },
  {
    icono: '🏢',
    titulo: 'Cómo Crear una LLC',
    slug: 'crear-llc',
    descripcion: 'Forma tu propio negocio en EE.UU. abriendo una LLC, incluso sin ser ciudadano o residente. Protege tus bienes personales.',
    tags: ['LLC', 'EIN', 'Negocio propio'],
  },
  {
    icono: '🚗',
    titulo: 'Licencia de Conducir',
    slug: 'licencia-conducir',
    descripcion: 'Cómo obtener tu licencia de conducir en EE.UU. Varios estados permiten a inmigrantes sin documentos obtener una licencia.',
    tags: ['REAL ID', 'DMV', 'Por estado'],
  },
  {
    icono: '🏥',
    titulo: 'Seguro Médico',
    slug: 'seguro-medico',
    descripcion: 'Opciones de seguro médico para inmigrantes: Medicaid, ACA (Obamacare), centros de salud comunitarios y más.',
    tags: ['Medicaid', 'ACA', 'Community Health'],
  },
  {
    icono: '🏦',
    titulo: 'Cómo Abrir una Cuenta Bancaria',
    slug: 'cuenta-bancaria',
    descripcion: 'Abre tu cuenta bancaria en EE.UU. con o sin SSN. Muchos bancos aceptan ITIN o pasaporte extranjero.',
    tags: ['ITIN', 'Sin SSN', 'Bancos y crédito'],
  },
  {
    icono: '💼',
    titulo: 'Derechos Laborales',
    slug: 'derechos-laborales',
    descripcion: 'Conoce tus derechos como trabajador en EE.UU.: salario mínimo, horas extra, condiciones de trabajo y cómo reportar abusos.',
    tags: ['DOL', 'Salario mínimo', 'Sin discriminación'],
  },
  {
    icono: '🏠',
    titulo: 'Ayuda con Vivienda',
    slug: 'ayuda-vivienda',
    descripcion: 'Programas de asistencia de vivienda, cómo rentar un apartamento, tus derechos como inquilino y organizaciones de ayuda.',
    tags: ['HUD', 'Renta', 'Derechos inquilinos'],
  },
  {
    icono: '📚',
    titulo: 'Educación',
    slug: 'educacion',
    descripcion: 'Escuelas públicas, ESL (inglés), GED, universidades comunitarias y becas disponibles para inmigrantes.',
    tags: ['ESL', 'GED', 'Community College', 'DACA'],
  },
]

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
  const [tramitesGenerales, anuncios] = await Promise.all([
    prisma.tramite.findMany({ where: { pais: 'GENERAL' }, orderBy: { titulo: 'asc' } }).catch(() => []),
    getAnuncios(),
  ])

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

        {/* Country selector — quick access if you want your country's info */}
        <div className="mb-12">
          <CountrySelector />
        </div>

        {/* Recursos Generales — main content */}
        <div className="mb-10">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
            Recursos para todos los latinos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TEMAS.map((tema, i) => {
              const tramite = tramitesGenerales.find((t: any) => t.slug === tema.slug)
              const href = tramite ? `/general/tramites/${tema.slug}` : '#'
              const anuncio = anuncios.length > 0 ? anuncios[Math.floor(i / 3) % anuncios.length] : null
              const showAdAfter = anuncios.length > 0 && i > 0 && (i + 1) % 3 === 0

              return (
                <div key={tema.slug} className="contents">
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <span className="text-3xl shrink-0">{tema.icono}</span>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-gray-900 mb-1 text-base">{tema.titulo}</h3>
                        <p className="text-sm text-gray-500 mb-3">{tema.descripcion}</p>
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {tema.tags.map(tag => (
                            <span key={tag} className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">{tag}</span>
                          ))}
                        </div>
                        {tramite ? (
                          <Link href={href} className="text-sm font-semibold text-blue-700 hover:underline">
                            Ver guía completa →
                          </Link>
                        ) : (
                          <span className="text-xs text-gray-400 italic">Guía próximamente</span>
                        )}
                      </div>
                    </div>
                  </div>
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
