import Link from 'next/link'
import { PAIS_NOMBRES, PAIS_FLAGS } from '@/lib/utils'

export default function CountrySelectorCard({ pais }: { pais: string }) {
  return (
    <Link
      href={`/${pais}`}
      className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow hover:shadow-lg hover:-translate-y-1 transition-all border border-gray-100"
    >
      <span className="text-5xl mb-3">{PAIS_FLAGS[pais]}</span>
      <span className="text-lg font-semibold text-gray-800">{PAIS_NOMBRES[pais]}</span>
    </Link>
  )
}
