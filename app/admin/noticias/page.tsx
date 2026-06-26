'use client'

import { useState, useEffect } from 'react'

interface Noticia {
  id: string; titulo: string; slug: string; resumen: string; categoria: string;
  paises: string[]; publicado: boolean; fuente?: string;
}

export default function AdminNoticias() {
  const [noticias, setNoticias] = useState<Noticia[]>([])
  const [form, setForm] = useState({ titulo: '', slug: '', contenidoHtml: '', resumen: '', categoria: 'Inmigración', paises: 'MX', publicado: true, fuente: '' })
  const [editSlug, setEditSlug] = useState<string | null>(null)
  const [msg, setMsg] = useState('')

  const load = () => fetch('/api/noticias').then(r => r.json()).then(setNoticias).catch(() => {})
  useEffect(() => { load() }, [])

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value }))

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    const payload = { ...form, paises: form.paises.split(',').map(p => p.trim().toUpperCase()) }
    const method = editSlug ? 'PUT' : 'POST'
    const url = editSlug ? `/api/noticias/${editSlug}` : '/api/noticias'
    const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
    if (res.ok) { setMsg(editSlug ? 'Actualizada' : 'Creada'); setEditSlug(null); load() }
    else { const d = await res.json(); setMsg(d.error) }
  }

  async function del(slug: string) {
    if (!confirm('¿Eliminar?')) return
    await fetch(`/api/noticias/${slug}`, { method: 'DELETE' })
    load()
  }

  const categorias = ['Inmigración', 'Salud', 'Educación', 'Trabajo', 'Comunidad', 'Legal']

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Noticias</h1>
      {msg && <p className="mb-4 text-green-700 bg-green-50 p-3 rounded">{msg}</p>}

      <div className="grid md:grid-cols-2 gap-8">
        <form onSubmit={submit} className="bg-white rounded-xl shadow p-6 space-y-3">
          <h2 className="font-bold text-gray-800 mb-2">{editSlug ? 'Editar' : 'Nueva'} noticia</h2>
          <input type="text" placeholder="Título" value={form.titulo} onChange={set('titulo')} required className="w-full border rounded-lg px-3 py-2 text-sm" />
          <input type="text" placeholder="Slug (ej: noticia-importante)" value={form.slug} onChange={set('slug')} required className="w-full border rounded-lg px-3 py-2 text-sm" />
          <input type="text" placeholder="Resumen" value={form.resumen} onChange={set('resumen')} required className="w-full border rounded-lg px-3 py-2 text-sm" />
          <select value={form.categoria} onChange={set('categoria')} className="w-full border rounded-lg px-3 py-2 text-sm">
            {categorias.map(c => <option key={c}>{c}</option>)}
          </select>
          <input type="text" placeholder="Países (MX,CO,VE)" value={form.paises} onChange={set('paises')} className="w-full border rounded-lg px-3 py-2 text-sm" />
          <textarea placeholder="Contenido HTML" value={form.contenidoHtml} onChange={set('contenidoHtml')} rows={4} className="w-full border rounded-lg px-3 py-2 text-sm" />
          <input type="text" placeholder="Fuente (opcional)" value={form.fuente} onChange={set('fuente')} className="w-full border rounded-lg px-3 py-2 text-sm" />
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={form.publicado} onChange={set('publicado')} />
            Publicado
          </label>
          <button type="submit" className="w-full bg-blue-700 text-white py-2 rounded-lg font-semibold">
            {editSlug ? 'Actualizar' : 'Crear'}
          </button>
        </form>

        <div className="space-y-3">
          {noticias.map(n => (
            <div key={n.id} className="bg-white rounded-xl shadow p-4 flex justify-between items-start">
              <div>
                <p className="font-semibold text-gray-800 text-sm">{n.titulo}</p>
                <p className="text-xs text-gray-500">{n.categoria} · {n.paises.join(', ')} · {n.publicado ? '✅ Publicado' : '⏸ Borrador'}</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => del(n.slug)} className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">Eliminar</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
