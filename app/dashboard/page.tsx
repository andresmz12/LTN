import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AlertasTrabajo from '@/components/AlertasTrabajo'
import TrabajoCard from '@/components/TrabajoCard'
import { IconBuilding, IconClipboard, IconNewspaper } from '@/components/icons'
import { PAIS_NOMBRES, formatDate } from '@/lib/utils'
import Link from 'next/link'

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)
  if (!session?.user) redirect('/auth/login')

  const user = await prisma.user.findUnique({
    where: { email: session.user.email! },
    select: {
      id: true, nombre: true, apellido: true, email: true, paisOrigen: true, estadoUS: true,
      savedConsulados: true, alertaCategorias: true, alertaActiva: true, createdAt: true, role: true,
    },
  })

  if (!user) redirect('/auth/login')

  const now = new Date()
  const [savedConsulados, trabajosSugeridos] = await Promise.all([
    user.savedConsulados.length > 0
      ? prisma.consulado.findMany({ where: { id: { in: user.savedConsulados } } })
      : Promise.resolve([]),
    user.alertaActiva && user.estadoUS
      ? prisma.empleo.findMany({
          where: {
            activo: true,
            estadoUS: user.estadoUS,
            OR: [{ fechaExpiracion: null }, { fechaExpiracion: { gte: now } }],
            ...(user.alertaCategorias.length > 0 ? { categoria: { in: user.alertaCategorias } } : {}),
          },
          orderBy: { publishedAt: 'desc' },
          take: 6,
        })
      : Promise.resolve([]),
  ])

  return (
    <>
      <Navbar />
      <main id="main-content" className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-display font-semibold text-gray-900 mb-1">
          Hola, {user.nombre}
        </h1>
        <p className="text-gray-500 mb-8">Miembro desde {formatDate(user.createdAt)}</p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="font-display font-semibold text-gray-800 mb-4">Tu perfil</h2>
            <div className="space-y-2 text-sm text-gray-600">
              <p><span className="font-medium">Nombre:</span> {user.nombre} {user.apellido}</p>
              <p><span className="font-medium">Email:</span> {user.email}</p>
              {user.paisOrigen && (
                <p><span className="font-medium">País de origen:</span> {PAIS_NOMBRES[user.paisOrigen] || user.paisOrigen}</p>
              )}
              {user.estadoUS && (
                <p><span className="font-medium">Estado en EE.UU.:</span> {user.estadoUS}</p>
              )}
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="font-display font-semibold text-gray-800 mb-4">Consulados guardados</h2>
            {savedConsulados.length === 0 ? (
              <p className="text-sm text-gray-500">No tienes consulados guardados.</p>
            ) : (
              <div className="space-y-2">
                {savedConsulados.map((c: any) => (
                  <Link key={c.id} href={`/${c.pais}/consulados/${c.id}`}
                    className="block text-sm text-brand-600 hover:underline">
                    {c.nombre} – {c.ciudad}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mb-6">
          <AlertasTrabajo
            estadoUS={user.estadoUS}
            alertaCategorias={user.alertaCategorias}
            alertaActiva={user.alertaActiva}
          />
        </div>

        {user.alertaActiva && (
          <div className="mb-6">
            <h2 className="font-display font-semibold text-gray-800 mb-3">Trabajos para ti</h2>
            {trabajosSugeridos.length === 0 ? (
              <p className="text-sm text-gray-500 bg-white rounded-lg border border-gray-200 p-6">
                Todavía no hay trabajos que coincidan con tus preferencias. Te avisamos aquí en cuanto publiquemos uno.
              </p>
            ) : (
              <div className="grid sm:grid-cols-2 gap-4">
                {trabajosSugeridos.map((t: any) => (
                  <TrabajoCard key={t.id} {...t} />
                ))}
              </div>
            )}
          </div>
        )}

        {user.paisOrigen && (
          <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
            <h2 className="font-display font-semibold text-gray-800 mb-3">Acceso rápido</h2>
            <div className="flex flex-wrap gap-3">
              <Link href={`/${user.paisOrigen}/consulados`}
                className="flex items-center gap-1.5 bg-white border border-brand-200 text-brand-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-100 transition">
                <IconBuilding className="w-4 h-4" /> Consulados
              </Link>
              <Link href={`/${user.paisOrigen}/tramites`}
                className="flex items-center gap-1.5 bg-white border border-brand-200 text-brand-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-100 transition">
                <IconClipboard className="w-4 h-4" /> Trámites
              </Link>
              <Link href={`/${user.paisOrigen}/noticias`}
                className="flex items-center gap-1.5 bg-white border border-brand-200 text-brand-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-100 transition">
                <IconNewspaper className="w-4 h-4" /> Noticias
              </Link>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
