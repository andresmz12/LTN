'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { EMPLEO_CATEGORIAS, ESTADOS_US } from '@/lib/utils'

interface Props {
  estadoUS: string | null
  alertaCategorias: string[]
  alertaActiva: boolean
}

export default function AlertasTrabajo({ estadoUS, alertaCategorias, alertaActiva }: Props) {
  const router = useRouter()
  const [estado, setEstado] = useState(estadoUS || '')
  const [categorias, setCategorias] = useState<string[]>(alertaCategorias)
  const [activa, setActiva] = useState(alertaActiva)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  function toggleCategoria(c: string) {
    setCategorias(prev => prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c])
  }

  async function save() {
    setSaving(true)
    setSaved(false)
    await fetch('/api/auth/me', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ estadoUS: estado || null, alertaCategorias: categorias, alertaActiva: activa }),
    })
    setSaving(false)
    setSaved(true)
    router.refresh()
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-1">
        <h2 className="font-display font-semibold text-gray-800">Alertas de trabajo</h2>
        <label className="flex items-center gap-2 text-xs text-gray-500 cursor-pointer">
          <input type="checkbox" checked={activa} onChange={e => setActiva(e.target.checked)}
            className="rounded border-gray-300 text-brand-600 focus:ring-brand-300" />
          Activar
        </label>
      </div>
      <p className="text-xs text-gray-500 mb-4">Te mostramos aquí los trabajos nuevos que coincidan con tu estado y categorías.</p>

      <label htmlFor="alerta-estado" className="block text-xs font-medium text-gray-500 mb-1 uppercase tracking-wide">Tu estado en EE.UU.</label>
      <select id="alerta-estado" value={estado} onChange={e => setEstado(e.target.value)}
        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-brand-200">
        <option value="">Sin especificar</option>
        {Object.entries(ESTADOS_US).map(([code, name]) => (
          <option key={code} value={code}>{name}</option>
        ))}
      </select>

      <span id="alerta-categorias-label" className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">Categorías de interés</span>
      <div role="group" aria-labelledby="alerta-categorias-label" className="flex flex-wrap gap-2 mb-4">
        {EMPLEO_CATEGORIAS.map(c => (
          <button key={c} type="button" onClick={() => toggleCategoria(c)} aria-pressed={categorias.includes(c)}
            className={`text-xs px-3 py-1.5 rounded-full border transition ${
              categorias.includes(c)
                ? 'bg-brand-500 border-brand-500 text-white'
                : 'border-gray-200 text-gray-600 hover:border-brand-300'
            }`}>
            {c}
          </button>
        ))}
      </div>

      <button onClick={save} disabled={saving}
        className="bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold px-5 py-2 rounded-lg transition disabled:opacity-60">
        {saving ? 'Guardando…' : saved ? 'Guardado ✓' : 'Guardar preferencias'}
      </button>
    </div>
  )
}
