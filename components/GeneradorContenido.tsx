'use client'

import { useState } from 'react'
import { PAISES as PAISES_CONST, PAIS_NOMBRES } from '@/lib/utils'

const PAISES = [...PAISES_CONST]
const PAISES_CON_GENERAL = ['GENERAL', ...PAISES]
const CATEGORIAS_TRAMITE = [
  'Migración y Estatus', 'Protección al Consumidor', 'Dinero e Impuestos', 'Trabajo',
  'Transporte', 'Salud', 'Vivienda', 'Identidad y Documentos', 'Educación', 'Seguridad y Emergencias',
]
type Tab = 'consulados' | 'tramites' | 'noticias'

const TAB_CONFIG = [
  { id: 'consulados' as Tab, label: '🏛 Consulados' },
  { id: 'tramites' as Tab, label: '📋 Trámites' },
  { id: 'noticias' as Tab, label: '📰 Noticias' },
]

const inputClass = 'w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition'
const labelClass = 'block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wide'

export default function GeneradorContenido() {
  const [tab, setTab] = useState<Tab>('consulados')

  return (
    <div>
      <div className="flex gap-2 mb-8">
        {TAB_CONFIG.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all"
            style={
              tab === t.id
                ? { background: '#d1430c', color: 'white', borderColor: '#d1430c' }
                : { background: 'white', color: '#374151', borderColor: '#e5e7eb' }
            }
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'consulados' && <GeneradorConsulados />}
      {tab === 'tramites' && <GeneradorTramites />}
      {tab === 'noticias' && <GeneradorNoticias />}
    </div>
  )
}

function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center py-12 gap-4">
      <div
        className="w-10 h-10 rounded-full border-4 border-amber-200 border-t-amber-500 animate-spin"
      />
      <p className="text-sm text-gray-500">Buscando en internet y generando contenido...</p>
    </div>
  )
}

function GeneradorConsulados() {
  const [pais, setPais] = useState('MX')
  const [ciudad, setCiudad] = useState('')
  const [loading, setLoading] = useState(false)
  const [editData, setEditData] = useState<Record<string, unknown> | null>(null)
  const [status, setStatus] = useState('')

  async function generate() {
    if (!ciudad.trim()) return
    setLoading(true)
    setEditData(null)
    setStatus('')
    try {
      const res = await fetch('/api/admin/generate-consulado', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pais, ciudad }),
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
      setEditData(null)
      setCiudad('')
    } catch (e: unknown) {
      setStatus('Error: ' + (e instanceof Error ? e.message : String(e)))
    }
  }

  return (
    <div className="max-w-2xl">
      <div className="flex gap-3 mb-6">
        <select
          value={pais}
          onChange={(e) => setPais(e.target.value)}
          className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm bg-white"
        >
          {PAISES.map((p) => <option key={p} value={p}>{PAIS_NOMBRES[p] || p}</option>)}
        </select>
        <input
          value={ciudad}
          onChange={(e) => setCiudad(e.target.value)}
          placeholder="Ciudad (ej: Los Angeles)"
          className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm flex-1 focus:outline-none focus:ring-2"
          onKeyDown={(e) => e.key === 'Enter' && generate()}
        />
        <button
          onClick={generate}
          disabled={loading || !ciudad.trim()}
          className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold disabled:opacity-50 transition-all"
          style={{ background: '#fbbf24', color: '#1a1a1a' }}
        >
          🤖 Generar con IA
        </button>
      </div>

      {status && (
        <p className={`text-sm mb-4 px-4 py-3 rounded-xl ${status.startsWith('✅') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
          {status}
        </p>
      )}

      {loading && <LoadingState />}

      {editData && !loading && (
        <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-4 border-2" style={{ borderColor: '#fbbf24' }}>
          <h3 className="font-bold text-lg text-gray-800">Vista previa — edita antes de publicar</h3>
          {(['nombre', 'ciudad', 'estadoUS', 'direccion', 'telefono', 'email', 'horarioLunes', 'horarioSabado'] as string[]).map((field) => (
            <div key={field}>
              <label className={labelClass}>{field}</label>
              <input
                value={(editData[field] as string) || ''}
                onChange={(e) => setEditData({ ...editData, [field]: e.target.value })}
                className={inputClass}
                style={{ '--tw-ring-color': '#fbbf24' } as any}
              />
            </div>
          ))}
          <div>
            <label className={labelClass}>Servicios (uno por línea)</label>
            <textarea
              value={((editData.servicios as string[]) || []).join('\n')}
              onChange={(e) => setEditData({ ...editData, servicios: e.target.value.split('\n').filter(Boolean) })}
              rows={4}
              className={inputClass}
            />
          </div>
          <button
            onClick={publish}
            className="w-full py-3 rounded-xl font-bold text-sm text-white transition-all"
            style={{ background: '#16a34a' }}
          >
            ✅ Publicar en base de datos
          </button>
        </div>
      )}
    </div>
  )
}

function GeneradorTramites() {
  const [pais, setPais] = useState('GENERAL')
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
      <div className="flex gap-3 mb-6">
        <select
          value={pais}
          onChange={(e) => setPais(e.target.value)}
          className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm bg-white"
        >
          {PAISES_CON_GENERAL.map((p) => <option key={p} value={p}>{PAIS_NOMBRES[p] || p}</option>)}
        </select>
        <input
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          placeholder="Tipo de trámite (ej: pasaporte, visa, ITIN)"
          className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm flex-1 focus:outline-none focus:ring-2"
          onKeyDown={(e) => e.key === 'Enter' && generate()}
        />
        <button
          onClick={generate}
          disabled={loading || !tipo.trim()}
          className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold disabled:opacity-50 transition-all"
          style={{ background: '#fbbf24', color: '#1a1a1a' }}
        >
          🤖 Generar con IA
        </button>
      </div>

      {status && (
        <p className={`text-sm mb-4 px-4 py-3 rounded-xl ${status.startsWith('✅') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
          {status}
        </p>
      )}

      {loading && <LoadingState />}

      {editData && !loading && (
        <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-4 border-2" style={{ borderColor: '#fbbf24' }}>
          <h3 className="font-bold text-lg text-gray-800">Vista previa — edita antes de publicar</h3>
          <div>
            <label className={labelClass}>categoria</label>
            <select
              value={(editData.categoria as string) || ''}
              onChange={(e) => setEditData({ ...editData, categoria: e.target.value })}
              className={inputClass}
            >
              <option value="">Sin categoría</option>
              {CATEGORIAS_TRAMITE.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          {(['titulo', 'slug', 'descripcion', 'costo', 'tiempoPromedio'] as string[]).map((field) => (
            <div key={field}>
              <label className={labelClass}>{field}</label>
              <input
                value={(editData[field] as string) || ''}
                onChange={(e) => setEditData({ ...editData, [field]: e.target.value })}
                className={inputClass}
              />
            </div>
          ))}
          <div>
            <label className={labelClass}>Contenido (HTML)</label>
            <textarea
              value={(editData.contenidoHtml as string) || ''}
              onChange={(e) => setEditData({ ...editData, contenidoHtml: e.target.value })}
              rows={6}
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Documentos necesarios (uno por línea)</label>
            <textarea
              value={((editData.documentosNecesarios as string[]) || []).join('\n')}
              onChange={(e) => setEditData({ ...editData, documentosNecesarios: e.target.value.split('\n').filter(Boolean) })}
              rows={4}
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Pasos (uno por línea)</label>
            <textarea
              value={((editData.pasos as string[]) || []).join('\n')}
              onChange={(e) => setEditData({ ...editData, pasos: e.target.value.split('\n').filter(Boolean) })}
              rows={4}
              className={inputClass}
            />
          </div>
          <button
            onClick={publish}
            className="w-full py-3 rounded-xl font-bold text-sm text-white transition-all"
            style={{ background: '#16a34a' }}
          >
            ✅ Publicar en base de datos
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
      <div className="flex gap-3 mb-6 flex-wrap">
        <select
          value={pais}
          onChange={(e) => setPais(e.target.value)}
          className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm bg-white"
        >
          {PAISES.map((p) => <option key={p} value={p}>{PAIS_NOMBRES[p] || p}</option>)}
        </select>
        <input
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Tema (ej: migración, deportaciones)"
          className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm flex-1 focus:outline-none focus:ring-2"
          onKeyDown={(e) => e.key === 'Enter' && generate()}
        />
        <select
          value={cantidad}
          onChange={(e) => setCantidad(Number(e.target.value))}
          className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm bg-white"
        >
          {[1, 2, 3, 5].map((n) => <option key={n} value={n}>{n} noticias</option>)}
        </select>
        <button
          onClick={generate}
          disabled={loading || !busqueda.trim()}
          className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold disabled:opacity-50 transition-all"
          style={{ background: '#fbbf24', color: '#1a1a1a' }}
        >
          🤖 Generar con IA
        </button>
      </div>

      {status && (
        <p className={`text-sm mb-4 px-4 py-3 rounded-xl ${status.startsWith('✅') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
          {status}
        </p>
      )}

      {loading && <LoadingState />}

      <div className="space-y-4">
        {noticias.map((n, idx) => (
          <div key={idx} className="bg-white rounded-lg border border-gray-200 p-6 space-y-3 border-2" style={{ borderColor: '#fbbf24' }}>
            <div>
              <label className={labelClass}>Título</label>
              <input
                value={(n.titulo as string) || ''}
                onChange={(e) => updateNoticia(idx, 'titulo', e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Slug</label>
              <input
                value={(n.slug as string) || ''}
                onChange={(e) => updateNoticia(idx, 'slug', e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Categoría</label>
              <input
                value={(n.categoria as string) || ''}
                onChange={(e) => updateNoticia(idx, 'categoria', e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Resumen</label>
              <textarea
                value={(n.resumen as string) || ''}
                onChange={(e) => updateNoticia(idx, 'resumen', e.target.value)}
                rows={2}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Contenido (HTML)</label>
              <textarea
                value={(n.contenidoHtml as string) || ''}
                onChange={(e) => updateNoticia(idx, 'contenidoHtml', e.target.value)}
                rows={5}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Fuente</label>
              <input
                value={(n.fuente as string) || ''}
                onChange={(e) => updateNoticia(idx, 'fuente', e.target.value)}
                className={inputClass}
              />
            </div>
            <button
              onClick={() => publishOne(idx)}
              className="w-full py-3 rounded-xl font-bold text-sm text-white transition-all"
              style={{ background: '#16a34a' }}
            >
              ✅ Publicar esta noticia
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
