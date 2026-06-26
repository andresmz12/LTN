import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'
import Navbar from '@/components/Navbar'
import { PAIS_NOMBRES, formatDate } from '@/lib/utils'
import Link from 'next/link'

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)
  if (!session?.user) redirect('/auth/login')

  const user = await prisma.user.findUnique({
    where: { email: session.user.email! },
    select: { id: true, nombre: true, apellido: true, email: true, paisOrigen: true, estadoUS: true, savedConsulados: true, createdAt: true, role: true },
  })

  if (!user) redirect('/auth/login')

  const savedConsulados = user.savedConsulados.length > 0
    ? await prisma.consulado.findMany({ where: { id: { in: user.savedConsulados } } })
    : []

  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">
          Hola, {user.nombre} 👋
        </h1>
        <p className="text-gray-500 mb-8">Miembro desde {formatDate(user.createdAt)}</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="font-bold text-gray-800 mb-4">Tu perfil</h2>
            <div className="space-y-2 text-sm text-gray-600">
              <p><span className="font-medium">Nombre:</span> {user.nombre} {user.apellido}</p>
              <p><span className="font-medium">Email:</span> {user.email}</p>
              {user.paisOrigen && (
                <p><span className="font-medium">País de origen:</span> {PAIS_NOMBRES[user.paisOrigen] || user.paisOrigen}</p>
              )}
              {user.estadoUS && (
                <p><span className="font-medium">Estado en EE.UU.:</span> {user.estadoUS}</p>
              )}
              <p><span className="font-medium">Rol:</span> {user.role}</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="font-bold text-gray-800 mb-4">Consulados guardados</h2>
            {savedConsulados.length === 0 ? (
              <p className="text-sm text-gray-500">No tienes consulados guardados.</p>
            ) : (
              <div className="space-y-2">
                {savedConsulados.map((c: any) => (
                  <Link key={c.id} href={`/${c.pais}/consulados/${c.id}`}
                    className="block text-sm text-blue-600 hover:underline">
                    {c.nombre} – {c.ciudad}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {user.paisOrigen && (
          <div className="mt-6 bg-blue-50 rounded-2xl p-6">
            <h2 className="font-bold text-gray-800 mb-3">Acceso rápido</h2>
            <div className="flex flex-wrap gap-3">
              <Link href={`/${user.paisOrigen}/consulados`}
                className="bg-white border border-blue-200 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition">
                🏛 Consulados
              </Link>
              <Link href={`/${user.paisOrigen}/tramites`}
                className="bg-white border border-blue-200 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition">
                📋 Trámites
              </Link>
              <Link href={`/${user.paisOrigen}/noticias`}
                className="bg-white border border-blue-200 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition">
                📰 Noticias
              </Link>
            </div>
          </div>
        )}
      </main>
    </>
  )
}
