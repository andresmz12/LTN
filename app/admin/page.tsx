import { prisma } from '@/lib/db'
import { IconUsers, IconBuilding, IconClipboard, IconNewspaper, IconMegaphone, IconTarget } from '@/components/icons'

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

  const topAnuncios = await prisma.anuncio.findMany({
    orderBy: { impresiones: 'desc' },
    take: 4,
    select: { id: true, titulo: true, tipo: true, impresiones: true, clicks: true, paisesTarget: true },
  })

  const imp = totalImpressions._sum.impresiones || 0
  const clk = totalClicks._sum.clicks || 0
  const ctr = imp > 0 ? ((clk / imp) * 100).toFixed(1) : '0.0'

  const primaryStats = [
    { label: 'Usuarios', value: users, icon: IconUsers },
    { label: 'Consulados', value: consulados, icon: IconBuilding },
    { label: 'Trámites', value: tramites, icon: IconClipboard },
    { label: 'Noticias', value: noticias, icon: IconNewspaper },
  ]

  const adStats = [
    { label: 'Anuncios activos', value: anuncios, icon: IconMegaphone },
    { label: 'Impresiones', value: imp.toLocaleString(), icon: IconTarget },
    { label: 'Clicks', value: clk.toLocaleString(), icon: IconTarget },
    { label: 'CTR Promedio', value: `${ctr}%`, icon: IconTarget },
  ]

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-display font-semibold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">Resumen general de Compa</p>
      </div>

      {/* Primary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {primaryStats.map((s) => (
          <div key={s.label} className="bg-white rounded-lg border border-gray-200 p-6">
            <s.icon className="w-5 h-5 text-brand-400 mb-3" />
            <div className="text-3xl font-display font-semibold text-brand-800 mb-1">
              {typeof s.value === 'number' ? s.value.toLocaleString() : s.value}
            </div>
            <div className="text-sm text-gray-500">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Ad Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {adStats.map((s) => (
          <div key={s.label} className="bg-white rounded-lg border border-gray-200 p-6">
            <s.icon className="w-5 h-5 text-accent-500 mb-3" />
            <div className="text-3xl font-display font-semibold text-accent-700 mb-1">
              {typeof s.value === 'number' ? s.value.toLocaleString() : s.value}
            </div>
            <div className="text-sm text-gray-500">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Recent Users Table */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="font-display font-semibold text-gray-800 text-lg mb-4">Últimos usuarios</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-400 border-b border-gray-100">
                  <th className="pb-3 font-medium">Nombre</th>
                  <th className="pb-3 font-medium">Email</th>
                  <th className="pb-3 font-medium">País</th>
                  <th className="pb-3 font-medium">Fecha</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {recentUsers.map((u: any) => (
                  <tr key={u.email} className="hover:bg-gray-50 transition">
                    <td className="py-3 font-medium text-gray-800">{u.nombre} {u.apellido}</td>
                    <td className="py-3 text-gray-500 text-xs">{u.email}</td>
                    <td className="py-3">
                      <span className="bg-brand-50 text-brand-700 text-xs px-2 py-0.5 rounded-full">
                        {u.paisOrigen || '–'}
                      </span>
                    </td>
                    <td className="py-3 text-gray-400 text-xs">{new Date(u.createdAt).toLocaleDateString('es')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Anuncios */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="font-display font-semibold text-gray-800 text-lg mb-4">Top anuncios</h2>
          <div className="space-y-3">
            {topAnuncios.map((a: any) => {
              const ctrVal = a.impresiones > 0 ? ((a.clicks / a.impresiones) * 100).toFixed(1) : '0.0'
              return (
                <div key={a.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                  <div className="flex-1 min-w-0 mr-3">
                    <p className="font-medium text-gray-800 text-sm truncate">{a.titulo}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{(a.paisesTarget as string[]).join(', ')}</p>
                  </div>
                  <div className="flex gap-4 text-xs shrink-0">
                    <div className="text-center">
                      <div className="font-bold text-gray-700">{a.impresiones.toLocaleString()}</div>
                      <div className="text-gray-400">imp</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-accent-600">{ctrVal}%</div>
                      <div className="text-gray-400">CTR</div>
                    </div>
                  </div>
                </div>
              )
            })}
            {topAnuncios.length === 0 && (
              <p className="text-gray-400 text-sm text-center py-4">Sin anuncios aún</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
