import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { IconArrowLeft, IconMapPin, IconBriefcase, IconBanknote, IconMail, IconPhone, IconLink } from '@/components/icons'
import { ESTADOS_US } from '@/lib/utils'
import { prisma } from '@/lib/db'

function AplicarAction({ comoAplicar }: { comoAplicar: string }) {
  const value = comoAplicar.trim()
  if (/^https?:\/\//i.test(value)) {
    return (
      <a href={value} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-brand-700 text-white font-semibold px-6 py-3 rounded-xl hover:bg-brand-800 transition">
        <IconLink className="w-4 h-4" /> Aplicar en línea
      </a>
    )
  }
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    return (
      <a href={`mailto:${value}`}
        className="inline-flex items-center gap-2 bg-brand-700 text-white font-semibold px-6 py-3 rounded-xl hover:bg-brand-800 transition">
        <IconMail className="w-4 h-4" /> Aplicar por email
      </a>
    )
  }
  if (/^[\d()+\-.\s]{7,}$/.test(value)) {
    return (
      <a href={`tel:${value.replace(/[^\d+]/g, '')}`}
        className="inline-flex items-center gap-2 bg-brand-700 text-white font-semibold px-6 py-3 rounded-xl hover:bg-brand-800 transition">
        <IconPhone className="w-4 h-4" /> Llamar para aplicar: {value}
      </a>
    )
  }
  return <p className="text-gray-700">{value}</p>
}

export default async function TrabajoDetailPage({ params }: { params: { slug: string } }) {
  const trabajo = await prisma.empleo.findUnique({ where: { slug: params.slug } }).catch(() => null)
  if (!trabajo || !trabajo.activo) notFound()

  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <Link href="/trabajos" className="flex items-center gap-1 text-sm text-brand-600 hover:underline mb-4 w-fit">
          <IconArrowLeft className="w-4 h-4" /> Volver a trabajos
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          {trabajo.destacado && (
            <span className="text-xs font-semibold text-accent-700 bg-accent-50 px-2.5 py-1 rounded-full uppercase tracking-wide mb-3 inline-block">
              Destacado
            </span>
          )}
          <h1 className="text-2xl font-bold text-gray-900 mb-1">{trabajo.titulo}</h1>
          <p className="text-brand-600 font-medium mb-6">{trabajo.empresa}</p>

          <div className="flex flex-wrap gap-4 mb-8 p-4 bg-gray-50 rounded-xl text-sm">
            <span className="flex items-center gap-1.5 text-gray-700">
              <IconMapPin className="w-4 h-4 text-gray-400" /> {trabajo.ciudad ? `${trabajo.ciudad}, ` : ''}{ESTADOS_US[trabajo.estadoUS] || trabajo.estadoUS}
            </span>
            <span className="flex items-center gap-1.5 text-gray-700">
              <IconBriefcase className="w-4 h-4 text-gray-400" /> {trabajo.tipoEmpleo}
            </span>
            {trabajo.salario && (
              <span className="flex items-center gap-1.5 text-gray-700">
                <IconBanknote className="w-4 h-4 text-gray-400" /> {trabajo.salario}
              </span>
            )}
          </div>

          <div className="mb-6">
            <span className="text-xs bg-brand-50 text-brand-700 px-2.5 py-1 rounded-full">{trabajo.categoria}</span>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-bold text-gray-800 mb-3">Descripción</h2>
            <p className="text-gray-700 whitespace-pre-line leading-relaxed">{trabajo.descripcion}</p>
          </div>

          {trabajo.requisitos.length > 0 && (
            <div className="mb-8">
              <h2 className="text-lg font-bold text-gray-800 mb-3">Requisitos</h2>
              <ul className="space-y-2">
                {trabajo.requisitos.map((r: string, i: number) => (
                  <li key={i} className="flex gap-2 text-gray-700">
                    <span className="text-green-500 shrink-0">✓</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="border-t border-gray-100 pt-6">
            <h2 className="text-base font-bold text-gray-800 mb-3">Cómo aplicar</h2>
            <AplicarAction comoAplicar={trabajo.comoAplicar} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
