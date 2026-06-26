'use client'

import { useState } from 'react'

const PAISES = ['MX', 'CO', 'VE', 'SV']
type Tab = 'consulados' | 'tramites' | 'noticias'

export default function GeneradorContenido() {
  const [tab, setTab] = useState<Tab>('consulados')

  return (
    <div>
      <div className="flex gap-2 mb-6 border-b border-gray-200">
        {(['consulados', 'tramites', 'noticias'] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 text-sm font-medium capitalize border-b-2 transition ${
              tab === t ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            {t === 'consulados' ? '🏛 Consulados' : t === 'tramites' ? '📋 Trámites' : '📰 Noticias'}
          </button>
        ))}
      </div>

      {tab === 'consulados' && <GeneradorConsulados />}
      {tab === 'tramites' && <GeneradorTramites />}
      {tab === 'noticias' && <GeneradorNoticias />}
    </div>
  )
}

function GeneradorConsulados() {
  const [pais, setPais] = useState('MX')
  const [ciudad, setCiudad] = useState('')
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<Record<string, unknown> | null>(null)
  const [editData, setEditData] = useState<Record<string, unknown> | null>(null)
  const [status, setStatus] = useState('')

  async function generate() {
    if (!ciudad.trim()) return
    setLoading(true)
    setData(null)
    setStatus('')
    try {
      const res = await fetch('/api/admin/generate-consulado', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pais, ciudad }),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error)
      setData(json)
      setEditData(json)
    } catch (e: unknown) {
      setStatus('Error: ' + (e instanceof Error ? e.message : String(e)))
    } finally {
      setLoading(false)
    }
  }

  async function publish() {
    if (!editData) return
    setStatus('Publicando...')
    try {
      const res = await fetch('/api/consulados', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editData),
      })
      if (!res.ok) {
        const json = await res.json()
        throw new Error(json.error || 'Error al publicar')
      }
      setStatus('✅ Publicado exitosamente')
      setData(null)
      setEditData(null)
      setCiudad('')
    } catch (e: unknown) {
      setStatus('Error: ' + (e instanceof Error ? e.message : String(e)))
    }
  }

  return (
    <div className="max-w-2xl">
      <div className="flex gap-3 mb-4">
        <select value={pais} onChange={(e) => setPais(e.target.value)} className="border rounded px-3 py-2">
          {PAISES.map((p) => <option key={p}>{p}</option>)}
        </select>
        <input
          value={ciudad}
          onChange={(e) => setCiudad(e.target.value)}
          placeholder="Ciudad (ej: Los Angeles)"
          className="border rounded px-3 py-2 flex-1"
          onKeyDown={(e) => e.key === 'Enter' && generate()}
        />
        <button
          onClick={generate}
          disabled={loading || !ciudad.trim()}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Generando...' : '✨ Generar'}
        </button>
      </div>

      {status && <p className="text-sm mb-3 text-gray-600">{status}</p>}

      {editData && (
        <div className="border rounded-lg p-4 space-y-3 bg-white">
          <h3 className="font-semibold text-lg">Vista previa</h3>
          {(['nombre', 'ciudad', 'estado', 'direccion', 'telefono', 'email', 'horario', 'sitioWeb'] as string[]).map((field) => (
            <div key={field}>
              <label className="block text-xs text-gray-500 mb-1 capitalize">{field}</label>
              <input
                value={(editData[field] as string) || ''}
                onChange={(e) => setEditData({ ...editData, [field]: e.target.value })}
                className="w-full border rounded px-3 py-1.5 text-sm"
              />
            </div>
          ))}
          <div>
            <label className="block text-xs text-gray-500 mb-1">Servicios (uno por línea)</label>
            <textarea
              value={((editData.servicios as string[]) || []).join('\n')}
              onChange={(e) => setEditData({ ...editData, servicios: e.target.value.split('\n').filter(Boolean) })}
              rows={4}
              className="w-full border rounded px-3 py-1.5 text-sm"
            />
          </div>
          <button onClick={publish} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full">
            Publicar en base de datos
          </button>
        </div>
      )}
    </div>
  )
}

function GeneradorTramites() {
  const [pais, setPais] = useState('MX')
  const [tipo, setTipo] = useState('')
  const [loading, setLoading] = useState(false)
  const [editData, setEditData] = useState<Record<string, unknown> | null>(null)
  const [status, setStatus] = useState('')

  async function generate() {
    if (!tipo.trim()) return
    setLoading(true)
    setEditData(null)
    setStatus('')
    try {
      const res = await fetch('/api/admin/generate-tramite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pais, tipo }),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error)
      setEditData(json)
    } catch (e: unknown) {
      setStatus('Error: ' + (e instanceof Error ? e.message : String(e)))
    } finally {
      setLoading(false)
    }
  }

  async function publish() {
    if (!editData) return
    setStatus('Publicando...')
    try {
      const res = await fetch('/api/tramites', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editData),
      })
      if (!res.ok) {
        const json = await res.json()
        throw new Error(json.error || 'Error al publicar')
      }
      setStatus('✅ Publicado exitosamente')
      setEditData(null)
      setTipo('')
    } catch (e: unknown) {
      setStatus('Error: ' + (e instanceof Error ? e.message : String(e)))
    }
  }

  return (
    <div className="max-w-2xl">
      <div className="flex gap-3 mb-4">
        <select value={pais} onChange={(e) => setPais(e.target.value)} className="border rounded px-3 py-2">
          {PAISES.map((p) => <option key={p}>{p}</option>)}
        </select>
        <input
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          placeholder="Tipo de trámite (ej: pasaporte, visa)"
          className="border rounded px-3 py-2 flex-1"
          onKeyDown={(e) => e.key === 'Enter' && generate()}
        />
        <button
          onClick={generate}
          disabled={loading || !tipo.trim()}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Generando...' : '✨ Generar'}
        </button>
      </div>

      {status && <p className="text-sm mb-3 text-gray-600">{status}</p>}

      {editData && (
        <div className="border rounded-lg p-4 space-y-3 bg-white">
          <h3 className="font-semibold text-lg">Vista previa</h3>
          {(['titulo', 'slug', 'descripcion', 'costoAprox', 'tiempoEstimado', 'sitioOficial'] as string[]).map((field) => (
            <div key={field}>
              <label className="block text-xs text-gray-500 mb-1 capitalize">{field}</label>
              <input
                value={(editData[field] as string) || ''}
                onChange={(e) => setEditData({ ...editData, [field]: e.target.value })}
                className="w-full border rounded px-3 py-1.5 text-sm"
              />
            </div>
          ))}
          <div>
            <label className="block text-xs text-gray-500 mb-1">Requisitos (uno por línea)</label>
            <textarea
              value={((editData.requisitos as string[]) || []).join('\n')}
              onChange={(e) => setEditData({ ...editData, requisitos: e.target.value.split('\n').filter(Boolean) })}
              rows={4}
              className="w-full border rounded px-3 py-1.5 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Pasos (uno por línea)</label>
            <textarea
              value={((editData.pasos as string[]) || []).join('\n')}
              onChange={(e) => setEditData({ ...editData, pasos: e.target.value.split('\n').filter(Boolean) })}
              rows={4}
              className="w-full border rounded px-3 py-1.5 text-sm"
            />
          </div>
          <button onClick={publish} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full">
            Publicar en base de datos
          </button>
        </div>
      )}
    </div>
  )
}

function GeneradorNoticias() {
  const [pais, setPais] = useState('MX')
  const [busqueda, setBusqueda] = useState('')
  const [cantidad, setCantidad] = useState(3)
  const [loading, setLoading] = useState(false)
  const [noticias, setNoticias] = useState<Record<string, unknown>[]>([])
  const [status, setStatus] = useState('')

  async function generate() {
    if (!busqueda.trim()) return
    setLoading(true)
    setNoticias([])
    setStatus('')
    try {
      const res = await fetch('/api/admin/generate-noticias', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pais, busqueda, cantidad }),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error)
      setNoticias(Array.isArray(json) ? json : [])
    } catch (e: unknown) {
      setStatus('Error: ' + (e instanceof Error ? e.message : String(e)))
    } finally {
      setLoading(false)
    }
  }

  async function publishOne(idx: number) {
    const noticia = noticias[idx]
    try {
      const res = await fetch('/api/noticias', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(noticia),
      })
      if (!res.ok) {
        const json = await res.json()
        throw new Error(json.error || 'Error al publicar')
      }
      setNoticias((prev) => prev.filter((_, i) => i !== idx))
      setStatus('✅ Noticia publicada')
    } catch (e: unknown) {
      setStatus('Error: ' + (e instanceof Error ? e.message : String(e)))
    }
  }

  function updateNoticia(idx: number, field: string, value: string) {
    setNoticias((prev) => prev.map((n, i) => i === idx ? { ...n, [field]: value } : n))
  }

  return (
    <div className="max-w-2xl">
      <div className="flex gap-3 mb-4 flex-wrap">
        <select value={pais} onChange={(e) => setPais(e.target.value)} className="border rounded px-3 py-2">
          {PAISES.map((p) => <option key={p}>{p}</option>)}
        </select>
        <input
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Tema (ej: migración, deportaciones)"
          className="border rounded px-3 py-2 flex-1"
          onKeyDown={(e) => e.key === 'Enter' && generate()}
        />
        <select value={cantidad} onChange={(e) => setCantidad(Number(e.target.value))} className="border rounded px-3 py-2">
          {[1, 2, 3, 5].map((n) => <option key={n} value={n}>{n} noticias</option>)}
        </select>
        <button
          onClick={generate}
          disabled={loading || !busqueda.trim()}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Generando...' : '✨ Generar'}
        </button>
      </div>

      {status && <p className="text-sm mb-3 text-gray-600">{status}</p>}

      <div className="space-y-4">
        {noticias.map((n, idx) => (
          <div key={idx} className="border rounded-lg p-4 bg-white space-y-2">
            <div>
              <label className="block text-xs text-gray-500 mb-1">Título</label>
              <input
                value={(n.titulo as string) || ''}
                onChange={(e) => updateNoticia(idx, 'titulo', e.target.value)}
                className="w-full border rounded px-3 py-1.5 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Slug</label>
              <input
                value={(n.slug as string) || ''}
                onChange={(e) => updateNoticia(idx, 'slug', e.target.value)}
                className="w-full border rounded px-3 py-1.5 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Resumen</label>
              <textarea
                value={(n.resumen as string) || ''}
                onChange={(e) => updateNoticia(idx, 'resumen', e.target.value)}
                rows={2}
                className="w-full border rounded px-3 py-1.5 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Contenido</label>
              <textarea
                value={(n.contenido as string) || ''}
                onChange={(e) => updateNoticia(idx, 'contenido', e.target.value)}
                rows={5}
                className="w-full border rounded px-3 py-1.5 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Fuente</label>
              <input
                value={(n.fuente as string) || ''}
                onChange={(e) => updateNoticia(idx, 'fuente', e.target.value)}
                className="w-full border rounded px-3 py-1.5 text-sm"
              />
            </div>
            <button
              onClick={() => publishOne(idx)}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full text-sm"
            >
              Publicar esta noticia
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
