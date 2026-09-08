import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import TrabajoCard from '@/components/TrabajoCard'
import TrabajosFilters from '@/components/TrabajosFilters'
import { IconBriefcase } from '@/components/icons'
import { prisma } from '@/lib/db'
import { getEstadoCookie } from '@/lib/location'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trabajos para la comunidad latina en EE.UU.',
  description: 'Ofertas de empleo por estado y categoría para la comunidad latina en Estados Unidos: construcción, limpieza, restaurantes, transporte y más.',
}

export default async function TrabajosPage({
  searchParams,
}: {
  searchParams: { estado?: string; categoria?: string }
}) {
  const estadoDetectado = getEstadoCookie()
  const estado = searchParams.estado ?? estadoDetectado ?? ''
  const categoria = searchParams.categoria ?? ''
  const now = new Date()

  const trabajos = await prisma.empleo.findMany({
    where: {
      activo: true,
      OR: [{ fechaExpiracion: null }, { fechaExpiracion: { gte: now } }],
      ...(estado ? { estadoUS: estado } : {}),
      ...(categoria ? { categoria } : {}),
    },
    orderBy: [{ destacado: 'desc' }, { publishedAt: 'desc' }],
  }).catch(() => [])

  return (
    <>
      <Navbar />

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <h1 className="text-3xl font-display font-semibold text-gray-900 flex items-center gap-3">
            <IconBriefcase className="w-8 h-8 text-brand-500" /> Trabajos
          </h1>
          <p className="text-gray-500 mt-1">Ofertas de empleo para la comunidad latina en EE.UU.</p>
        </div>
      </div>

      <main id="main-content" className="max-w-5xl mx-auto px-4 py-10">
        <TrabajosFilters estado={estado} categoria={categoria} estadoDetectado={estadoDetectado} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {trabajos.map((t: any) => (
            <TrabajoCard key={t.id} {...t} />
          ))}
        </div>

        {trabajos.length === 0 && (
          <p className="text-gray-500 text-center py-16">No hay trabajos disponibles con esos filtros por ahora.</p>
        )}
      </main>
      <Footer />
    </>
  )
}
