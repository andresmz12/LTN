import Link from 'next/link'
import { IconClock, IconBanknote, IconArrowRight } from '@/components/icons'

interface Props {
  pais: string
  titulo: string
  slug: string
  descripcion: string
  tiempoPromedio?: string | null
  costo?: string | null
}

export default function TramiteCard({ pais, titulo, slug, descripcion, tiempoPromedio, costo }: Props) {
  return (
    <Link
      href={`/${pais}/tramites/${slug}`}
      className="group block bg-white rounded-lg border border-gray-200 p-5 hover:border-brand-300 transition-colors"
    >
      <h3 className="font-display font-semibold text-gray-900 text-lg mb-2">{titulo}</h3>
      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{descripcion}</p>
      <div className="flex items-center justify-between gap-4">
        <div className="flex gap-4 text-xs text-gray-500">
          {tiempoPromedio && <span className="flex items-center gap-1"><IconClock className="w-3.5 h-3.5" /> {tiempoPromedio}</span>}
          {costo && <span className="flex items-center gap-1"><IconBanknote className="w-3.5 h-3.5" /> {costo}</span>}
        </div>
        <IconArrowRight className="w-4 h-4 text-brand-400 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition shrink-0" />
      </div>
    </Link>
  )
}
