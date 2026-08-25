import Link from 'next/link'
import { IconMapPin, IconBriefcase, IconBanknote } from '@/components/icons'
import { ESTADOS_US } from '@/lib/utils'

interface Props {
  id: string
  slug: string
  titulo: string
  empresa: string
  categoria: string
  tipoEmpleo: string
  estadoUS: string
  ciudad?: string | null
  salario?: string | null
  destacado: boolean
}

export default function TrabajoCard({ slug, titulo, empresa, categoria, tipoEmpleo, estadoUS, ciudad, salario, destacado }: Props) {
  return (
    <Link
      href={`/trabajos/${slug}`}
      className={`block rounded-xl border p-5 transition hover:shadow-md ${
        destacado ? 'bg-accent-50 border-accent-200 hover:border-accent-300' : 'bg-white border-gray-100 hover:border-brand-100'
      }`}
    >
      {destacado && (
        <span className="text-xs font-semibold text-accent-700 uppercase tracking-wide mb-2 inline-block">Destacado</span>
      )}
      <h3 className="font-bold text-gray-900 text-lg mb-1">{titulo}</h3>
      <p className="text-sm text-gray-600 mb-3">{empresa}</p>
      <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-3">
        <span className="flex items-center gap-1"><IconMapPin className="w-3.5 h-3.5" /> {ciudad ? `${ciudad}, ` : ''}{ESTADOS_US[estadoUS] || estadoUS}</span>
        <span className="flex items-center gap-1"><IconBriefcase className="w-3.5 h-3.5" /> {tipoEmpleo}</span>
        {salario && <span className="flex items-center gap-1"><IconBanknote className="w-3.5 h-3.5" /> {salario}</span>}
      </div>
      <span className="text-xs bg-brand-50 text-brand-700 px-2 py-0.5 rounded-full">{categoria}</span>
    </Link>
  )
}
