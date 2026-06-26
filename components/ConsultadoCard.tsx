import Link from 'next/link'

interface Props {
  id: string
  pais: string
  ciudad: string
  nombre: string
  direccion: string
  telefono?: string | null
  email?: string | null
  horarioLunes?: string | null
}

export default function ConsultadoCard({ id, pais, ciudad, nombre, direccion, telefono, email, horarioLunes }: Props) {
  return (
    <div className="bg-white rounded-xl shadow p-5 border border-gray-100 hover:shadow-md transition">
      <h3 className="font-bold text-gray-800 text-lg mb-1">{nombre}</h3>
      <p className="text-sm text-blue-600 mb-3">{ciudad}</p>
      <div className="text-sm text-gray-600 space-y-1">
        <p>📍 {direccion}</p>
        {telefono && <p>📞 {telefono}</p>}
        {email && <p>✉️ {email}</p>}
        {horarioLunes && <p>🕐 {horarioLunes}</p>}
      </div>
      <Link
        href={`/${pais}/consulados/${id}`}
        className="mt-4 inline-block text-sm text-blue-700 font-semibold hover:underline"
      >
        Ver detalles →
      </Link>
    </div>
  )
}
