'use client'

import { useState, useEffect } from 'react'
import { PAIS_NOMBRES } from '@/lib/utils'

interface Tramite { id: string; pais: string; titulo: string; slug: string; descripcion: string; tiempoPromedio?: string; costo?: string }

const emptyForm = { pais: 'MX', titulo: '', slug: '', descripcion: '', contenidoHtml: '', tiempoPromedio: '', costo: '' }

const inputClass = 'w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:border-transparent'
const labelClass = 'block text-xs font-medium text-gray-500 mb-1 uppercase tracking-wide'

export default function AdminTramites() {
  const [tramites, setTramites] = useState<Tramite[]>([])
  const [form, setForm] = useState(emptyForm)
  const [editSlug, setEditSlug] = useState<string | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [msg, setMsg] = useState('')
  const [filterPais, setFilterPais] = useState('')

  const load = () => fetch('/api/tramites').then(r => r.json()).then(setTramites).catch(() => {})
  useEffect(() => { load() }, [])

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  function openNew() {
    setEditSlug(null)
    setForm(emptyForm)
    setShowModal(true)
  }

  function openEdit(t: Tramite) {
    setEditSlug(t.slug)
    setForm({ pais: t.pais, titulo: t.titulo, slug: t.slug, descripcion: t.descripcion, contenidoHtml: '', tiempoPromedio: t.tiempoPromedio || '', costo: t.costo || '' })
    setShowModal(true)
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    const method = editSlug ? 'PUT' : 'POST'
    const url = editSlug ? `/api/tramites/${editSlug}` : '/api/tramites'
    const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
    if (res.ok) {
      setMsg(editSlug ? 'Trámite actualizado' : 'Trámite creado')
      setShowModal(false)
      setEditSlug(null)
      setForm(emptyForm)
      load()
    } else {
      const d = await res.json()
      setMsg(d.error)
    }
  }

  async function del(slug: string) {
    if (!confirm('¿Eliminar este trámite?')) return
    await fetch(`/api/tramites/${slug}`, { method: 'DELETE' })
    load()
  }

  const filtered = filterPais ? tramites.filter(t => t.pais === filterPais) : tramites

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Trámites</h1>
          <p className="text-gray-500 mt-1">{tramites.length} trámites registrados</p>
        </div>
        <button
          onClick={openNew}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90"
          style={{ background: '#F96167' }}
        >
          + Nuevo Trámite
        </button>
      </div>

      {msg && (
        <div className="mb-4 px-4 py-3 rounded-xl bg-green-50 text-green-700 text-sm">{msg}</div>
      )}

      {/* Filter */}
      <div className="mb-4">
        <select
          value={filterPais}
          onChange={(e) => setFilterPais(e.target.value)}
          className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm bg-white"
        >
          <option value="">Todos los países</option>
          {Object.entries(PAIS_NOMBRES).map(([k, v]) => <option key={k} value={k}>{v as string}</option>)}
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr style={{ background: '#F2F3F8' }} className="text-left text-gray-500">
              <th className="px-6 py-4 font-medium">Título</th>
              <th className="px-6 py-4 font-medium">País</th>
              <th className="px-6 py-4 font-medium">Costo</th>
              <th className="px-6 py-4 font-medium">Tiempo</th>
              <th className="px-6 py-4 font-medium">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filtered.map((t: any) => (
              <tr key={t.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 font-medium text-gray-800">{t.titulo}</td>
                <td className="px-6 py-4">
                  <span className="bg-blue-50 text-blue-700 text-xs px-2 py-0.5 rounded-full">
                    {(PAIS_NOMBRES as any)[t.pais] || t.pais}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-600">{t.costo || '–'}</td>
                <td className="px-6 py-4 text-gray-500">{t.tiempoPromedio || '–'}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => openEdit(t)}
                      className="text-xs px-3 py-1.5 rounded-lg font-medium"
                      style={{ background: '#EFF6FF', color: '#1d4ed8' }}
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => del(t.slug)}
                      className="text-xs px-3 py-1.5 rounded-lg font-medium"
                      style={{ background: '#FEF2F2', color: '#dc2626' }}
                    >
                      Eliminar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-10 text-center text-gray-400">No hay trámites</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">
                  {editSlug ? 'Editar' : 'Nuevo'} Trámite
                </h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
                >
                  ×
                </button>
              </div>
              <form onSubmit={submit} className="space-y-4">
                <div>
                  <label className={labelClass}>País</label>
                  <select value={form.pais} onChange={set('pais')} className={inputClass}>
                    {Object.entries(PAIS_NOMBRES).map(([k, v]) => <option key={k} value={k}>{v as string}</option>)}
                  </select>
                </div>
                {[
                  { key: 'titulo', label: 'Título' },
                  { key: 'slug', label: 'Slug' },
                  { key: 'descripcion', label: 'Descripción' },
                  { key: 'tiempoPromedio', label: 'Tiempo Promedio' },
                  { key: 'costo', label: 'Costo' },
                ].map(({ key, label }) => (
                  <div key={key}>
                    <label className={labelClass}>{label}</label>
                    <input
                      type="text"
                      value={(form as any)[key]}
                      onChange={set(key)}
                      className={inputClass}
                    />
                  </div>
                ))}
                <div>
                  <label className={labelClass}>Contenido HTML</label>
                  <textarea
                    value={form.contenidoHtml}
                    onChange={set('contenidoHtml')}
                    rows={4}
                    className={inputClass}
                  />
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
                    {editSlug ? 'Actualizar' : 'Crear'}
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
