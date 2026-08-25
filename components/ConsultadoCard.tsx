import Link from 'next/link'
import { IconMapPin, IconPhone, IconMail, IconClock } from '@/components/icons'

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
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md hover:border-brand-100 transition">
      <h3 className="font-bold text-gray-900 text-lg mb-1">{nombre}</h3>
      <p className="text-sm text-brand-600 font-medium mb-3">{ciudad}</p>
      <div className="text-sm text-gray-600 space-y-1.5">
        <p className="flex items-center gap-2"><IconMapPin className="w-4 h-4 text-gray-400 shrink-0" /> {direccion}</p>
        {telefono && <p className="flex items-center gap-2"><IconPhone className="w-4 h-4 text-gray-400 shrink-0" /> {telefono}</p>}
        {email && <p className="flex items-center gap-2"><IconMail className="w-4 h-4 text-gray-400 shrink-0" /> {email}</p>}
        {horarioLunes && <p className="flex items-center gap-2"><IconClock className="w-4 h-4 text-gray-400 shrink-0" /> {horarioLunes}</p>}
      </div>
      <Link
        href={`/${pais}/consulados/${id}`}
        className="mt-4 inline-block text-sm text-brand-700 font-semibold hover:underline"
      >
        Ver detalles →
      </Link>
    </div>
  )
}
