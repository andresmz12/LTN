import Link from 'next/link'

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
    <div className="bg-white rounded-xl shadow p-5 border border-gray-100 hover:shadow-md transition">
      <h3 className="font-bold text-gray-800 text-lg mb-2">{titulo}</h3>
      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{descripcion}</p>
      <div className="flex gap-4 text-xs text-gray-500 mb-4">
        {tiempoPromedio && <span>⏱ {tiempoPromedio}</span>}
        {costo && <span>💵 {costo}</span>}
      </div>
      <Link
        href={`/${pais}/tramites/${slug}`}
        className="text-sm text-blue-700 font-semibold hover:underline"
      >
        Ver guía completa →
      </Link>
    </div>
  )
}
