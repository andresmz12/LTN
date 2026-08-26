'use client'

import { useState, useEffect } from 'react'

interface Noticia {
  id: string; titulo: string; slug: string; resumen: string; categoria: string;
  paises: string[]; publicado: boolean; fuente?: string;
}

const categorias = ['Inmigración', 'Salud', 'Educación', 'Trabajo', 'Comunidad', 'Legal']
const emptyForm = { titulo: '', slug: '', contenidoHtml: '', resumen: '', categoria: 'Inmigración', paises: 'MX', publicado: true, fuente: '' }

const inputClass = 'w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:border-transparent'
const labelClass = 'block text-xs font-medium text-gray-500 mb-1 uppercase tracking-wide'

export default function AdminNoticias() {
  const [noticias, setNoticias] = useState<Noticia[]>([])
  const [form, setForm] = useState(emptyForm)
  const [editSlug, setEditSlug] = useState<string | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [msg, setMsg] = useState('')

  const load = () => fetch('/api/noticias').then(r => r.json()).then(setNoticias).catch(() => {})
  useEffect(() => { load() }, [])

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value }))

  function openNew() {
    setEditSlug(null)
    setForm(emptyForm)
    setShowModal(true)
  }

  function openEdit(n: Noticia) {
    setEditSlug(n.slug)
    setForm({ titulo: n.titulo, slug: n.slug, contenidoHtml: '', resumen: n.resumen, categoria: n.categoria, paises: n.paises.join(','), publicado: n.publicado, fuente: n.fuente || '' })
    setShowModal(true)
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    const payload = { ...form, paises: form.paises.split(',').map((p: any) => p.trim().toUpperCase()) }
    const method = editSlug ? 'PUT' : 'POST'
    const url = editSlug ? `/api/noticias/${editSlug}` : '/api/noticias'
    const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
    if (res.ok) {
      setMsg(editSlug ? 'Noticia actualizada' : 'Noticia creada')
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
    if (!confirm('¿Eliminar esta noticia?')) return
    await fetch(`/api/noticias/${slug}`, { method: 'DELETE' })
    load()
  }

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Noticias</h1>
          <p className="text-gray-500 mt-1">{noticias.length} noticias registradas</p>
        </div>
        <button
          onClick={openNew}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90"
          style={{ background: '#96661c' }}
        >
          + Nueva Noticia
        </button>
      </div>

      {msg && (
        <div className="mb-4 px-4 py-3 rounded-xl bg-green-50 text-green-700 text-sm">{msg}</div>
      )}

      {/* Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr style={{ background: '#F2F3F8' }} className="text-left text-gray-500">
              <th className="px-6 py-4 font-medium">Título</th>
              <th className="px-6 py-4 font-medium">País</th>
              <th className="px-6 py-4 font-medium">Categoría</th>
              <th className="px-6 py-4 font-medium">Publicado</th>
              <th className="px-6 py-4 font-medium">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {noticias.map((n: any) => (
              <tr key={n.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 font-medium text-gray-800 max-w-xs truncate">{n.titulo}</td>
                <td className="px-6 py-4">
                  <span className="bg-blue-50 text-blue-700 text-xs px-2 py-0.5 rounded-full">
                    {n.paises.join(', ')}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-600">{n.categoria}</td>
                <td className="px-6 py-4">
                  {n.publicado ? (
                    <span className="bg-green-50 text-green-700 text-xs px-2 py-0.5 rounded-full">Publicado</span>
                  ) : (
                    <span className="bg-gray-100 text-gray-500 text-xs px-2 py-0.5 rounded-full">Borrador</span>
                  )}
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => openEdit(n)}
                      className="text-xs px-3 py-1.5 rounded-lg font-medium"
                      style={{ background: '#EFF6FF', color: '#1d4ed8' }}
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => del(n.slug)}
                      className="text-xs px-3 py-1.5 rounded-lg font-medium"
                      style={{ background: '#FEF2F2', color: '#dc2626' }}
                    >
                      Eliminar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {noticias.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-10 text-center text-gray-400">No hay noticias</td>
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
                  {editSlug ? 'Editar' : 'Nueva'} Noticia
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
                  <label className={labelClass}>Título</label>
                  <input type="text" value={form.titulo} onChange={set('titulo')} required className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Slug</label>
                  <input type="text" value={form.slug} onChange={set('slug')} required className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Resumen</label>
                  <input type="text" value={form.resumen} onChange={set('resumen')} required className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Categoría</label>
                  <select value={form.categoria} onChange={set('categoria')} className={inputClass}>
                    {categorias.map((c: any) => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Países (MX,CO,VE)</label>
                  <input type="text" value={form.paises} onChange={set('paises')} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Contenido HTML</label>
                  <textarea value={form.contenidoHtml} onChange={set('contenidoHtml')} rows={4} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Fuente (opcional)</label>
                  <input type="text" value={form.fuente} onChange={set('fuente')} className={inputClass} />
                </div>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.publicado}
                    onChange={set('publicado')}
                    className="w-4 h-4 rounded"
                  />
                  <span className="text-sm font-medium text-gray-700">Publicado</span>
                </label>
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
                    style={{ background: '#96661c' }}
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
