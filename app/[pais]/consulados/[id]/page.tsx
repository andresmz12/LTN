import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import GuardarConsuladoButton from '@/components/GuardarConsuladoButton'
import { IconArrowLeft, IconMapPin, IconPhone, IconMail, IconClock } from '@/components/icons'
import { PAISES, PAIS_NOMBRES } from '@/lib/utils'
import { prisma } from '@/lib/db'
import { authOptions } from '@/lib/auth'

export default async function ConsultadoDetailPage({ params }: { params: { pais: string; id: string } }) {
  const pais = params.pais.toUpperCase()
  if (!PAISES.includes(pais as any)) notFound()

  const consulado = await prisma.consulado.findUnique({ where: { id: params.id } })
  if (!consulado) notFound()

  const servicios = consulado.servicios as string[] | null

  const session = await getServerSession(authOptions)
  let guardadoInicial = false
  if (session?.user?.email) {
    const user = await prisma.user.findUnique({ where: { email: session.user.email }, select: { savedConsulados: true } })
    guardadoInicial = user?.savedConsulados.includes(consulado.id) ?? false
  }

  return (
    <>
      <Navbar pais={pais} />
      <main id="main-content" className="max-w-3xl mx-auto px-4 py-10">
        <Link href={`/${pais}/consulados`} className="flex items-center gap-1 text-sm text-brand-600 hover:underline mb-4 w-fit">
          <IconArrowLeft className="w-4 h-4" /> Volver a consulados
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div className="flex items-start justify-between gap-4 mb-1">
            <h1 className="text-2xl font-bold text-gray-900">{consulado.nombre}</h1>
            <GuardarConsuladoButton consuladoId={consulado.id} guardadoInicial={guardadoInicial} />
          </div>
          <p className="text-brand-600 font-medium mb-6">{consulado.ciudad}, {PAIS_NOMBRES[pais]}</p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h2 className="font-semibold text-gray-700 mb-3">Información de contacto</h2>
              <div className="space-y-2 text-sm text-gray-600">
                <p className="flex items-center gap-2"><IconMapPin className="w-4 h-4 text-gray-500" /> {consulado.direccion}</p>
                {consulado.telefono && <p className="flex items-center gap-2"><IconPhone className="w-4 h-4 text-gray-500" /> <a href={`tel:${consulado.telefono}`} className="hover:underline">{consulado.telefono}</a></p>}
                {consulado.email && <p className="flex items-center gap-2"><IconMail className="w-4 h-4 text-gray-500" /> <a href={`mailto:${consulado.email}`} className="hover:underline">{consulado.email}</a></p>}
              </div>
            </div>

            <div>
              <h2 className="font-semibold text-gray-700 mb-3">Horarios</h2>
              <div className="space-y-2 text-sm text-gray-600">
                {consulado.horarioLunes && <p className="flex items-center gap-2"><IconClock className="w-4 h-4 text-gray-500" /> Lun–Vie: {consulado.horarioLunes}</p>}
                {consulado.horarioSabado && <p className="flex items-center gap-2"><IconClock className="w-4 h-4 text-gray-500" /> Sábado: {consulado.horarioSabado}</p>}
              </div>
            </div>
          </div>

          {servicios && servicios.length > 0 && (
            <div>
              <h2 className="font-semibold text-gray-700 mb-3">Servicios disponibles</h2>
              <div className="flex flex-wrap gap-2">
                {servicios.map((s, i) => (
                  <span key={i} className="bg-brand-100 text-brand-700 text-sm px-3 py-1 rounded-full">{s}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
