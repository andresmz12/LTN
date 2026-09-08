import { prisma } from '@/lib/db'

export default async function AdminUsuarios() {
  const [users, byPais, byEstado, recentEvents] = await Promise.all([
    prisma.user.findMany({ orderBy: { createdAt: 'desc' }, select: { id: true, nombre: true, apellido: true, email: true, paisOrigen: true, estadoUS: true, role: true, createdAt: true, lastLogin: true } }),
    prisma.user.groupBy({ by: ['paisOrigen'], _count: true }),
    prisma.user.groupBy({ by: ['estadoUS'], _count: true, orderBy: { _count: { estadoUS: 'desc' } }, take: 5 }),
    prisma.analytics.findMany({ orderBy: { timestamp: 'desc' }, take: 10, select: { evento: true, seccion: true, pais: true, deviceType: true, timestamp: true } }),
  ])

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Usuarios & Analytics</h1>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-xl shadow p-4">
          <p className="text-xs text-gray-500 mb-2">Por país de origen</p>
          {byPais.filter((b: any) => b.paisOrigen).map((b: any) => (
            <div key={b.paisOrigen} className="flex justify-between text-sm">
              <span>{b.paisOrigen}</span>
              <span className="font-semibold">{b._count}</span>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-xl shadow p-4">
          <p className="text-xs text-gray-500 mb-2">Top estados EE.UU.</p>
          {byEstado.filter((b: any) => b.estadoUS).map((b: any) => (
            <div key={b.estadoUS} className="flex justify-between text-sm">
              <span>{b.estadoUS}</span>
              <span className="font-semibold">{b._count}</span>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-xl shadow p-4">
          <p className="text-xs text-gray-500 mb-2">Últimos eventos</p>
          {recentEvents.map((e: any, i: number) => (
            <div key={i} className="text-xs text-gray-600 py-1 border-b last:border-0">
              {e.evento} · {e.seccion || e.pais || '–'} · {e.deviceType}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr className="text-left text-gray-500">
              <th className="px-4 py-3">Nombre</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">País</th>
              <th className="px-4 py-3">Estado</th>
              <th className="px-4 py-3">Rol</th>
              <th className="px-4 py-3">Registro</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {users.map((u: any) => (
              <tr key={u.id}>
                <td className="px-4 py-3">{u.nombre} {u.apellido}</td>
                <td className="px-4 py-3 text-gray-500">{u.email}</td>
                <td className="px-4 py-3">{u.paisOrigen || '–'}</td>
                <td className="px-4 py-3">{u.estadoUS || '–'}</td>
                <td className="px-4 py-3">
                  <span className={`text-xs px-2 py-1 rounded-full ${u.role === 'admin' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-600'}`}>
                    {u.role}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-500">{new Date(u.createdAt).toLocaleDateString('es')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
