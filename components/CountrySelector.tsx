'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { PAISES, PAIS_NOMBRES, PAIS_FLAGS } from '@/lib/utils'

export default function CountrySelector() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div>
      <label className="block text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
        Info por país
      </label>
      <div ref={ref} className="relative">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="w-full flex items-center justify-between bg-white border border-gray-200 rounded-2xl px-5 py-4 text-base font-medium text-gray-800 shadow-sm hover:border-gray-300 hover:shadow-md transition-all"
        >
          <span>Selecciona tu país para ver su información</span>
          <svg
            className={`w-5 h-5 text-gray-400 shrink-0 ml-3 transition-transform ${open ? 'rotate-180' : ''}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
          </svg>
        </button>

        {open && (
          <div className="absolute z-50 mt-2 w-full bg-white border border-gray-100 rounded-2xl shadow-xl p-3 grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-80 overflow-y-auto">
            {PAISES.map((pais) => (
              <button
                key={pais}
                type="button"
                onClick={() => router.push(`/${pais}`)}
                className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-left hover:bg-blue-50 transition-colors"
              >
                <span className="text-xl shrink-0">{PAIS_FLAGS[pais]}</span>
                <span className="text-sm font-medium text-gray-800 truncate">{PAIS_NOMBRES[pais]}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
