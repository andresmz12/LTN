import Link from 'next/link'
import { formatDate } from '@/lib/utils'

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
  return (
    <div className="bg-white rounded-xl shadow p-5 border border-gray-100 hover:shadow-md transition">
      <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded mb-2">
        {categoria}
      </span>
      <h3 className="font-bold text-gray-800 text-lg mb-2 line-clamp-2">{titulo}</h3>
      <p className="text-sm text-gray-600 mb-3 line-clamp-3">{resumen}</p>
      <div className="flex items-center justify-between text-xs text-gray-400">
        <span>{formatDate(publishedAt)}</span>
        {fuente && <span>{fuente}</span>}
      </div>
      <Link
        href={`/${pais}/noticias/${slug}`}
        className="mt-3 inline-block text-sm text-blue-700 font-semibold hover:underline"
      >
        Leer más →
      </Link>
    </div>
  )
}
