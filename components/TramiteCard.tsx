import Link from 'next/link'
import { IconClock, IconBanknote } from '@/components/icons'

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
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md hover:border-brand-100 transition">
      <h3 className="font-bold text-gray-900 text-lg mb-2">{titulo}</h3>
      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{descripcion}</p>
      <div className="flex gap-4 text-xs text-gray-500 mb-4">
        {tiempoPromedio && <span className="flex items-center gap-1"><IconClock className="w-3.5 h-3.5" /> {tiempoPromedio}</span>}
        {costo && <span className="flex items-center gap-1"><IconBanknote className="w-3.5 h-3.5" /> {costo}</span>}
      </div>
      <Link
        href={`/${pais}/tramites/${slug}`}
        className="text-sm text-brand-700 font-semibold hover:underline"
      >
        Ver guía completa →
      </Link>
    </div>
  )
}
