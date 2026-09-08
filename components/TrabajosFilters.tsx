'use client'

import { useRouter } from 'next/navigation'
import { ESTADOS_US, EMPLEO_CATEGORIAS } from '@/lib/utils'

interface Props {
  estado: string
  categoria: string
  estadoDetectado: string | null
}

export default function TrabajosFilters({ estado, categoria, estadoDetectado }: Props) {
  const router = useRouter()

  function update(next: { estado?: string; categoria?: string }) {
    const e = next.estado !== undefined ? next.estado : estado
    const c = next.categoria !== undefined ? next.categoria : categoria
    const params = new URLSearchParams()
    if (e) params.set('estado', e)
    if (c) params.set('categoria', c)
    router.push(`/trabajos${params.toString() ? '?' + params.toString() : ''}`)
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <select
        value={estado}
        onChange={(e) => update({ estado: e.target.value })}
        className="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white"
      >
        <option value="">Todos los estados</option>
        {Object.entries(ESTADOS_US).map(([code, nombre]) => (
          <option key={code} value={code}>{nombre}</option>
        ))}
      </select>
      <select
        value={categoria}
        onChange={(e) => update({ categoria: e.target.value })}
        className="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white"
      >
        <option value="">Todas las categorías</option>
        {EMPLEO_CATEGORIAS.map((c) => <option key={c} value={c}>{c}</option>)}
      </select>
      {estadoDetectado && estado === estadoDetectado && (
        <span className="text-xs text-brand-600 font-medium">📍 Mostrando trabajos cerca de ti</span>
      )}
      {(estado || categoria) && (
        <button type="button" onClick={() => update({ estado: '', categoria: '' })} className="text-xs text-gray-500 hover:text-gray-600 underline">
          Quitar filtros
        </button>
      )}
    </div>
  )
}
