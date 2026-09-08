'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ESTADOS_US, ESTADO_COOKIE } from '@/lib/utils'
import { IconMapPin } from '@/components/icons'

const DISMISSED_KEY = 'compa_estado_dismissed'

function readCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`))
  return match ? decodeURIComponent(match[1]) : null
}

function setEstadoCookie(estado: string) {
  document.cookie = `${ESTADO_COOKIE}=${estado}; path=/; max-age=${60 * 60 * 24 * 180}`
}

export default function LocationBanner() {
  const router = useRouter()
  const [estado, setEstado] = useState<string | null>(null)
  const [dismissed, setDismissed] = useState(true)
  const [loading, setLoading] = useState(false)
  const [showManual, setShowManual] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setEstado(readCookie(ESTADO_COOKIE))
    setDismissed(localStorage.getItem(DISMISSED_KEY) === '1')
  }, [])

  function apply(code: string) {
    setEstadoCookie(code)
    setEstado(code)
    setShowManual(false)
    setError('')
    router.refresh()
  }

  async function usarUbicacion() {
    if (!navigator.geolocation) {
      setError('Tu navegador no soporta geolocalización.')
      setShowManual(true)
      return
    }
    setLoading(true)
    setError('')
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const { latitude, longitude } = pos.coords
          const res = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=es`
          )
          const data = await res.json()
          const code: string | undefined = data?.principalSubdivisionCode?.replace('US-', '')
          if (code && ESTADOS_US[code]) {
            apply(code)
          } else {
            setError('No pudimos identificar tu estado automáticamente.')
            setShowManual(true)
          }
        } catch {
          setError('No pudimos identificar tu estado automáticamente.')
          setShowManual(true)
        } finally {
          setLoading(false)
        }
      },
      () => {
        setError('No diste permiso de ubicación, o no se pudo obtener.')
        setShowManual(true)
        setLoading(false)
      },
      { timeout: 8000 }
    )
  }

  function dismiss() {
    localStorage.setItem(DISMISSED_KEY, '1')
    setDismissed(true)
  }

  if (estado) {
    return (
      <div className="flex items-center gap-1.5 text-xs text-gray-500">
        <IconMapPin className="w-3.5 h-3.5 text-brand-500" />
        {ESTADOS_US[estado]}
        <button
          type="button"
          onClick={() => { document.cookie = `${ESTADO_COOKIE}=; path=/; max-age=0`; setEstado(null); router.refresh() }}
          className="text-brand-600 hover:underline ml-1"
        >
          Cambiar
        </button>
      </div>
    )
  }

  if (dismissed) return null

  return (
    <div className="bg-brand-50 border border-brand-100 rounded-xl p-4 flex flex-wrap items-center gap-3 justify-between">
      <div className="flex items-center gap-2 text-sm text-brand-900">
        <IconMapPin className="w-5 h-5 text-brand-500 shrink-0" />
        <span>¿Quieres ver el consulado y las ofertas más cercanas a ti?</span>
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={usarUbicacion}
          disabled={loading}
          className="bg-brand-700 text-white text-sm font-semibold px-4 py-1.5 rounded-lg hover:bg-brand-800 transition disabled:opacity-50"
        >
          {loading ? 'Buscando…' : 'Usar mi ubicación'}
        </button>
        <button type="button" onClick={dismiss} className="text-sm text-gray-500 hover:text-gray-600">
          Ahora no
        </button>
      </div>

      {(showManual || error) && (
        <div className="w-full flex items-center gap-2 pt-1">
          {error && <span className="text-xs text-gray-500">{error}</span>}
          <select
            defaultValue=""
            onChange={(e) => e.target.value && apply(e.target.value)}
            className="text-xs border border-gray-200 rounded-lg px-2 py-1"
          >
            <option value="" disabled>Elige tu estado manualmente</option>
            {Object.entries(ESTADOS_US).map(([code, nombre]) => (
              <option key={code} value={code}>{nombre}</option>
            ))}
          </select>
        </div>
      )}
    </div>
  )
}
