import { prisma } from '@/lib/db'

export default async function AdminDashboard() {
  const [users, consulados, tramites, noticias, anuncios, analytics] = await Promise.all([
    prisma.user.count(),
    prisma.consulado.count(),
    prisma.tramite.count(),
    prisma.noticia.count(),
    prisma.anuncio.count({ where: { activo: true } }),
    prisma.analytics.count(),
  ])

  const totalImpressions = await prisma.anuncio.aggregate({ _sum: { impresiones: true } })
  const totalClicks = await prisma.anuncio.aggregate({ _sum: { clicks: true } })

  const recentUsers = await prisma.user.findMany({
    orderBy: { createdAt: 'desc' },
    take: 5,
    select: { nombre: true, apellido: true, email: true, paisOrigen: true, createdAt: true },
  })

  const stats = [
    { label: 'Usuarios', value: users, icon: '👥' },
    { label: 'Consulados', value: consulados, icon: '🏛' },
    { label: 'Trámites', value: tramites, icon: '📋' },
    { label: 'Noticias', value: noticias, icon: '📰' },
    { label: 'Anuncios activos', value: anuncios, icon: '📣' },
    { label: 'Eventos analytics', value: analytics, icon: '📊' },
    { label: 'Impresiones totales', value: totalImpressions._sum.impresiones || 0, icon: '👁' },
    { label: 'Clicks totales', value: totalClicks._sum.clicks || 0, icon: '🖱' },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Dashboard Admin</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {stats.map((s: any) => (
          <div key={s.label} className="bg-white rounded-xl shadow p-4">
            <div className="text-2xl mb-1">{s.icon}</div>
            <div className="text-2xl font-bold text-gray-900">{s.value.toLocaleString()}</div>
            <div className="text-xs text-gray-500 mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="font-bold text-gray-800 mb-4">Últimos usuarios registrados</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 border-b">
                <th className="pb-2">Nombre</th>
                <th className="pb-2">Email</th>
                <th className="pb-2">País</th>
                <th className="pb-2">Fecha</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {recentUsers.map((u: any) => (
                <tr key={u.email}>
                  <td className="py-2">{u.nombre} {u.apellido}</td>
                  <td className="py-2 text-gray-600">{u.email}</td>
                  <td className="py-2">{u.paisOrigen || '–'}</td>
                  <td className="py-2 text-gray-500">{new Date(u.createdAt).toLocaleDateString('es')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
