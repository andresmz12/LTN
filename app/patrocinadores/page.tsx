import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { IconArrowLeft, IconScale, IconScroll, IconBanknote, IconHeartPulse, IconBookOpen, IconBank, IconHandshake, IconPhone, IconMail, IconGlobe } from '@/components/icons'
import { prisma } from '@/lib/db'

const TIPO_LABELS: Record<string, string> = {
  abogado: 'Abogado / Firma Legal',
  notaria: 'Notaría',
  remesas: 'Envío de Remesas',
  salud: 'Salud',
  educacion: 'Educación',
  financiero: 'Servicios Financieros',
  otro: 'Otro',
}

const TIPO_ICONS: Record<string, (props: { className?: string }) => JSX.Element> = {
  abogado: IconScale,
  notaria: IconScroll,
  remesas: IconBanknote,
  salud: IconHeartPulse,
  educacion: IconBookOpen,
  financiero: IconBank,
  otro: IconHandshake,
}

export default async function PatrocinadoresPage() {
  const clientes = await prisma.cliente.findMany({
    where: { activo: true },
    include: {
      anuncios: { where: { activo: true }, take: 1 },
    },
    orderBy: { createdAt: 'asc' },
  }).catch(() => [])

  const tipos: string[] = Array.from(new Set(clientes.map((c: any) => c.tipo as string)))

  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-10">

        {/* Header */}
        <div className="mb-10">
          <Link href="/" className="flex items-center gap-1 text-sm text-brand-600 hover:underline mb-3 w-fit">
            <IconArrowLeft className="w-4 h-4" /> Inicio
          </Link>
          <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">Patrocinadores</h1>
          <p className="text-gray-500 max-w-2xl">
            Empresas y profesionales de confianza que apoyan a la comunidad latina en EE.UU.
          </p>
        </div>

        {clientes.length === 0 ? (
          <div className="text-center py-24 text-gray-400">
            <IconHandshake className="w-12 h-12 mx-auto mb-4 text-brand-300" />
            <p className="text-lg font-medium mb-2">Próximamente</p>
            <p className="text-sm">Estamos incorporando patrocinadores. Vuelve pronto.</p>
          </div>
        ) : (
          <>
            {tipos.map(tipo => {
              const grupo = clientes.filter((c: any) => c.tipo === tipo)
              const TipoIcon = TIPO_ICONS[tipo] || IconHandshake
              return (
                <div key={tipo} className="mb-10">
                  <h2 className="text-lg font-bold text-gray-700 mb-4 flex items-center gap-2">
                    <TipoIcon className="w-5 h-5 text-brand-500" />
                    <span>{TIPO_LABELS[tipo] || tipo}</span>
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {grupo.map((c: any) => {
                      const CardIcon = TIPO_ICONS[c.tipo] || IconHandshake
                      return (
                      <div key={c.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col hover:shadow-md hover:border-brand-100 transition">
                        {c.logoUrl ? (
                          <img src={c.logoUrl} alt={c.nombreEmpresa} className="h-12 object-contain mb-4 self-start" />
                        ) : (
                          <div className="h-12 w-12 rounded-xl bg-brand-50 flex items-center justify-center mb-4">
                            <CardIcon className="w-6 h-6 text-brand-600" />
                          </div>
                        )}
                        <h3 className="font-bold text-gray-900 mb-1">{c.nombreEmpresa}</h3>
                        <span className="text-xs bg-brand-50 text-brand-700 px-2 py-0.5 rounded-full w-fit mb-2">
                          {TIPO_LABELS[c.tipo] || c.tipo}
                        </span>
                        {c.descripcion && (
                          <p className="text-sm text-gray-500 mb-3 flex-1">{c.descripcion}</p>
                        )}
                        <div className="text-xs text-gray-400 mb-4 space-y-1.5">
                          {c.telefono && <div className="flex items-center gap-1.5"><IconPhone className="w-3.5 h-3.5" /> {c.telefono}</div>}
                          {c.emailContacto && <div className="flex items-center gap-1.5"><IconMail className="w-3.5 h-3.5" /> {c.emailContacto}</div>}
                          {c.paisServicio?.length > 0 && (
                            <div className="flex items-center gap-1.5"><IconGlobe className="w-3.5 h-3.5" /> Sirve a: {c.paisServicio.join(', ')}</div>
                          )}
                        </div>
                        {c.sitioWeb && (
                          <a
                            href={c.sitioWeb}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-auto block text-center bg-brand-700 text-white text-sm font-semibold py-2 rounded-xl hover:bg-brand-800 transition"
                          >
                            Visitar sitio web
                          </a>
                        )}
                      </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </>
        )}

        {/* CTA para nuevos sponsors */}
        <div className="mt-12 bg-gradient-to-r from-accent-600 to-accent-500 text-white rounded-2xl p-8 text-center">
          <h2 className="text-xl font-display font-bold mb-2">¿Quieres llegar a miles de latinos en EE.UU.?</h2>
          <p className="text-accent-50 text-sm mb-6 max-w-xl mx-auto">
            Anuncia tu negocio en Compa y conecta con la comunidad latina que más lo necesita.
            Abogados, remesas, salud, finanzas y más.
          </p>
          <a
            href="mailto:contacto@compa.app?subject=Quiero ser patrocinador"
            className="inline-block bg-white text-accent-700 font-bold px-8 py-3 rounded-xl hover:bg-accent-50 transition"
          >
            Contáctanos para anunciarte
          </a>
        </div>
      </main>

      <Footer />
    </>
  )
}
