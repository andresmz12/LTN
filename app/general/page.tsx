import Link from 'next/link'
import Navbar from '@/components/Navbar'
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

export default async function GeneralPage() {
  const tramitesGenerales = await prisma.tramite.findMany({
    where: { pais: 'GENERAL' },
    orderBy: { titulo: 'asc' },
  }).catch(() => [])

  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-10">

        {/* Header */}
        <div className="mb-10">
          <Link href="/" className="text-sm text-blue-600 hover:underline mb-3 inline-block">← Inicio</Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            🌎 Recursos Generales para Latinos
          </h1>
          <p className="text-gray-500 max-w-2xl">
            Información esencial para toda la comunidad latina en Estados Unidos, sin importar tu país de origen o estatus migratorio.
          </p>
        </div>

        {/* Temas principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {TEMAS.map((tema) => {
            const tramite = tramitesGenerales.find((t: any) => t.slug === tema.slug)
            const href = tramite ? `/general/tramites/${tema.slug}` : '#'
            return (
              <div key={tema.slug}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <span className="text-3xl shrink-0">{tema.icono}</span>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-bold text-gray-900 mb-1 text-base">{tema.titulo}</h2>
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
            )
          })}
        </div>

        {/* Recursos adicionales */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Recursos y enlaces oficiales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { nombre: 'IRS — Impuestos en español', url: 'https://www.irs.gov/es', desc: 'Declaración de impuestos y ITIN' },
              { nombre: 'USCIS — Inmigración', url: 'https://www.uscis.gov/es', desc: 'Visas, residencia y ciudadanía' },
              { nombre: 'Benefits.gov', url: 'https://www.benefits.gov/', desc: 'Beneficios del gobierno federal' },
              { nombre: 'FindAHealthCenter.hrsa.gov', url: 'https://findahealthcenter.hrsa.gov/', desc: 'Centros de salud comunitarios' },
              { nombre: 'USA.gov en español', url: 'https://www.usa.gov/espanol', desc: 'Portal oficial del gobierno' },
              { nombre: 'DOL — Derechos laborales', url: 'https://www.dol.gov/agencies/whd', desc: 'Salario mínimo y derechos' },
            ].map(r => (
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

      <footer className="text-center text-sm text-gray-400 py-8 border-t border-gray-100">
        © 2025 Compa. Todos los derechos reservados.
      </footer>
    </>
  )
}
