'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { IconBookmark } from '@/components/icons'

export default function GuardarConsuladoButton({ consuladoId, guardadoInicial }: { consuladoId: string; guardadoInicial: boolean }) {
  const { data: session, status } = useSession()
  const [guardado, setGuardado] = useState(guardadoInicial)
  const [loading, setLoading] = useState(false)

  if (status === 'loading') return null

  if (!session?.user) {
    return (
      <Link
        href="/auth/login"
        className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg px-3 py-1.5 hover:border-brand-300 hover:text-brand-700 transition"
      >
        <IconBookmark className="w-4 h-4" /> Inicia sesión para guardar
      </Link>
    )
  }

  async function toggle() {
    setLoading(true)
    const optimistic = !guardado
    setGuardado(optimistic)
    try {
      const res = await fetch('/api/auth/me', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ toggleSavedConsulado: consuladoId }),
      })
      if (!res.ok) setGuardado(!optimistic)
    } catch {
      setGuardado(!optimistic)
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      disabled={loading}
      aria-pressed={guardado}
      className={`inline-flex items-center gap-2 text-sm font-medium rounded-lg px-3 py-1.5 border transition disabled:opacity-60 ${
        guardado
          ? 'bg-brand-50 border-brand-300 text-brand-700'
          : 'border-gray-200 text-gray-600 hover:border-brand-300 hover:text-brand-700'
      }`}
    >
      <IconBookmark className={`w-4 h-4 ${guardado ? 'fill-current' : ''}`} />
      {guardado ? 'Guardado' : 'Guardar consulado'}
    </button>
  )
}
