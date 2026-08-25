import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ConsultadoCard from '@/components/ConsultadoCard'
import { PAISES, PAIS_NOMBRES } from '@/lib/utils'
import { prisma } from '@/lib/db'

export default async function ConsultadosPage({ params }: { params: { pais: string } }) {
  const pais = params.pais.toUpperCase()
  if (!PAISES.includes(pais as any)) notFound()

  const consulados = await prisma.consulado.findMany({
    where: { pais },
    orderBy: { ciudad: 'asc' },
  })

  return (
    <>
      <Navbar pais={pais} />
      <main className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Consulados de {PAIS_NOMBRES[pais]} en EE.UU.
        </h1>
        <p className="text-gray-500 mb-8">{consulados.length} consulado(s) disponibles</p>

        <div className="grid md:grid-cols-2 gap-6">
          {consulados.map((c: any) => (
            <ConsultadoCard key={c.id} {...c} pais={pais} />
          ))}
        </div>

        {consulados.length === 0 && (
          <p className="text-gray-500 text-center py-16">No hay consulados registrados.</p>
        )}
      </main>
      <Footer />
    </>
  )
}
