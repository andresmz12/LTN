'use client'

import { useRouter } from 'next/navigation'
import { PAISES, PAIS_NOMBRES, PAIS_FLAGS } from '@/lib/utils'

export default function CountrySelector() {
  const router = useRouter()

  return (
    <div>
      <label htmlFor="pais-select" className="block text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
        Info por país
      </label>
      <select
        id="pais-select"
        defaultValue=""
        onChange={(e) => {
          if (e.target.value) router.push(`/${e.target.value}`)
        }}
        className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 text-base font-medium text-gray-800 shadow-sm appearance-none cursor-pointer hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2'><path d='M6 9l6 6 6-6'/></svg>")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 1.25rem center',
          backgroundSize: '1.25rem',
        }}
      >
        <option value="" disabled>
          Selecciona tu país...
        </option>
        {PAISES.map((pais) => (
          <option key={pais} value={pais}>
            {PAIS_FLAGS[pais]}  {PAIS_NOMBRES[pais]}
          </option>
        ))}
      </select>
    </div>
  )
}
