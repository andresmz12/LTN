import Link from 'next/link'
import { formatDate } from '@/lib/utils'

const CATEGORIA_COLORS: Record<string, { bg: string; text: string }> = {
  'Inmigración': { bg: '#EFF6FF', text: '#1d4ed8' },
  'Salud': { bg: '#F0FDF4', text: '#15803d' },
  'Educación': { bg: '#FEF9C3', text: '#854d0e' },
  'Trabajo': { bg: '#FFF7ED', text: '#c2410c' },
  'Comunidad': { bg: '#F5F3FF', text: '#6d28d9' },
  'Legal': { bg: '#FEF2F2', text: '#dc2626' },
  'Economía': { bg: '#F0F9FF', text: '#0369a1' },
}

interface Props {
  pais: string
  titulo: string
  slug: string
  resumen: string
  categoria: string
  publishedAt: Date | string
  fuente?: string | null
}

export default function NoticiaCard({ pais, titulo, slug, resumen, categoria, publishedAt, fuente }: Props) {
  const color = CATEGORIA_COLORS[categoria] || { bg: '#F3F4F6', text: '#374151' }

  return (
    <Link href={`/${pais}/noticias/${slug}`} className="group block">
      <article className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
        {/* Color accent top bar */}
        <div className="h-1" style={{ background: color.text }} />

        <div className="p-5 flex flex-col flex-1">
          {/* Category */}
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full w-fit mb-3"
            style={{ background: color.bg, color: color.text }}
          >
            {categoria}
          </span>

          {/* Title */}
          <h3 className="font-bold text-gray-900 leading-snug mb-2 line-clamp-2 group-hover:text-blue-700 transition-colors">
            {titulo}
          </h3>

          {/* Summary */}
          <p className="text-sm text-gray-500 line-clamp-3 flex-1 leading-relaxed">
            {resumen}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-50 text-xs text-gray-400">
            <span>{formatDate(publishedAt)}</span>
            {fuente && <span className="truncate ml-2">{fuente}</span>}
          </div>
        </div>
      </article>
    </Link>
  )
}
