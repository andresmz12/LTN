'use client'

import { useState, useEffect } from 'react'

interface Anuncio { id: string; titulo: string; tipo: string; activo: boolean; impresiones: number; clicks: number; paisesTarget: string[]; presupuesto?: number; descripcion?: string }
interface Cliente { id: string; nombreEmpresa: string }

const emptyForm = { tipo: 'banner', titulo: '', descripcion: '', enlaceDestino: 'https://', clienteId: '', paisesTarget: 'MX', presupuesto: 0 }

const inputClass = 'w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:border-transparent'
const labelClass = 'block text-xs font-medium text-gray-500 mb-1 uppercase tracking-wide'

const TIPO_COLORS: Record<string, { bg: string; text: string }> = {
  banner: { bg: '#EFF6FF', text: '#1d4ed8' },
  card: { bg: '#F0FDF4', text: '#15803d' },
  popup: { bg: '#FFF7ED', text: '#c2410c' },
}

export default function AdminAnuncios() {
  const [anuncios, setAnuncios] = useState<Anuncio[]>([])
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [form, setForm] = useState(emptyForm)
  const [showModal, setShowModal] = useState(false)
  const [msg, setMsg] = useState('')

  const load = async () => {
    const [a, c] = await Promise.all([
      fetch('/api/anuncios').then(r => r.json()),
      fetch('/api/clientes').then(r => r.json()),
    ])
    setAnuncios(Array.isArray(a) ? a : [])
    setClientes(Array.isArray(c) ? c : [])
  }
  useEffect(() => { load() }, [])

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    const payload = {
      ...form,
      paisesTarget: form.paisesTarget.split(',').map((p: any) => p.trim().toUpperCase()),
      presupuesto: Number(form.presupuesto),
    }
    const res = await fetch('/api/anuncios', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
    if (res.ok) {
      setMsg('Anuncio creado')
      setShowModal(false)
      setForm(emptyForm)
      load()
    } else {
      const d = await res.json()
      setMsg(d.error)
    }
  }

  async function del(id: string) {
    if (!confirm('¿Eliminar este anuncio?')) return
    await fetch(`/api/anuncios/${id}`, { method: 'DELETE' })
    load()
  }

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Anuncios</h1>
          <p className="text-gray-500 mt-1">{anuncios.length} anuncios registrados</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90"
          style={{ background: '#F96167' }}
        >
          + Nuevo Anuncio
        </button>
      </div>

      {msg && (
        <div className="mb-4 px-4 py-3 rounded-xl bg-green-50 text-green-700 text-sm">{msg}</div>
      )}

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {anuncios.map((a: any) => {
          const ctr = a.impresiones > 0 ? ((a.clicks / a.impresiones) * 100).toFixed(1) : '0.0'
          const tipoColor = TIPO_COLORS[a.tipo] || { bg: '#F3F4F6', text: '#374151' }
          return (
            <div key={a.id} className="bg-white rounded-2xl shadow-sm p-5">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1 min-w-0 mr-2">
                  <h3 className="font-bold text-gray-800 text-sm truncate">{a.titulo}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{ background: tipoColor.bg, color: tipoColor.text }}
                    >
                      {a.tipo}
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${a.activo ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                      {a.activo ? 'Activo' : 'Inactivo'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Países */}
              <div className="flex flex-wrap gap-1 mb-4">
                {(a.paisesTarget as string[]).map((p: string) => (
                  <span key={p} className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">{p}</span>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 mb-4 py-3 border-y border-gray-100">
                <div className="text-center">
                  <div className="text-sm font-bold text-gray-800">{a.impresiones.toLocaleString()}</div>
                  <div className="text-xs text-gray-400">Imp.</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-bold text-gray-800">{a.clicks.toLocaleString()}</div>
                  <div className="text-xs text-gray-400">Clicks</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-bold" style={{ color: '#F96167' }}>{ctr}%</div>
                  <div className="text-xs text-gray-400">CTR</div>
                </div>
              </div>

              {/* Presupuesto */}
              {a.presupuesto != null && (
                <div className="text-xs text-gray-500 mb-3">
                  Presupuesto: <span className="font-semibold text-gray-700">${Number(a.presupuesto).toLocaleString()}</span>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-2">
                <button
                  onClick={() => del(a.id)}
                  className="flex-1 py-1.5 rounded-lg text-xs font-medium transition"
                  style={{ background: '#FEF2F2', color: '#dc2626' }}
                >
                  Eliminar
                </button>
              </div>
            </div>
          )
        })}
        {anuncios.length === 0 && (
          <div className="col-span-3 text-center py-16 text-gray-400">No hay anuncios registrados</div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Nuevo Anuncio</h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
                >
                  ×
                </button>
              </div>
              <form onSubmit={submit} className="space-y-4">
                <div>
                  <label className={labelClass}>Tipo</label>
                  <select value={form.tipo} onChange={set('tipo')} className={inputClass}>
                    {['banner', 'card', 'popup'].map((t) => <option key={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Título</label>
                  <input type="text" value={form.titulo} onChange={set('titulo')} required className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Descripción</label>
                  <input type="text" value={form.descripcion} onChange={set('descripcion')} required className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>URL Destino</label>
                  <input type="url" value={form.enlaceDestino} onChange={set('enlaceDestino')} required className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Cliente</label>
                  <select value={form.clienteId} onChange={set('clienteId')} required className={inputClass}>
                    <option value="">Seleccionar cliente</option>
                    {clientes.map((c: any) => <option key={c.id} value={c.id}>{c.nombreEmpresa}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Países (MX,CO)</label>
                  <input type="text" value={form.paisesTarget} onChange={set('paisesTarget')} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Presupuesto $</label>
                  <input type="number" value={form.presupuesto} onChange={set('presupuesto')} className={inputClass} />
                </div>
                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90"
                    style={{ background: '#F96167' }}
                  >
                    Crear Anuncio
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
