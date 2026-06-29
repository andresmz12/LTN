import Link from 'next/link'
import { PAIS_NOMBRES, PAIS_FLAGS } from '@/lib/utils'

export default function CountrySelectorCard({ pais }: { pais: string }) {
  return (
    <Link
      href={`/${pais}`}
      className="flex flex-col items-center justify-center p-5 bg-white rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all border border-gray-100"
    >
      <span className="text-4xl mb-2">{PAIS_FLAGS[pais]}</span>
      <span className="text-sm font-semibold text-gray-800 text-center leading-tight">{PAIS_NOMBRES[pais]}</span>
    </Link>
  )
}
