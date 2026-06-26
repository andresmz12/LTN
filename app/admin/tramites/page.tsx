'use client'

import { useState, useEffect } from 'react'
import { PAIS_NOMBRES } from '@/lib/utils'

interface Tramite { id: string; pais: string; titulo: string; slug: string; descripcion: string; tiempoPromedio?: string; costo?: string }

export default function AdminTramites() {
  const [tramites, setTramites] = useState<Tramite[]>([])
  const [form, setForm] = useState({ pais: 'MX', titulo: '', slug: '', descripcion: '', contenidoHtml: '', tiempoPromedio: '', costo: '' })
  const [msg, setMsg] = useState('')

  const load = () => fetch('/api/tramites').then(r => r.json()).then(setTramites).catch(() => {})
  useEffect(() => { load() }, [])
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    const res = await fetch('/api/tramites', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
    if (res.ok) { setMsg('Creado'); load() } else { const d = await res.json(); setMsg(d.error) }
  }

  async function del(slug: string) {
    if (!confirm('¿Eliminar?')) return
    await fetch(`/api/tramites/${slug}`, { method: 'DELETE' })
    load()
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Trámites</h1>
      {msg && <p className="mb-4 text-green-700 bg-green-50 p-3 rounded">{msg}</p>}
      <div className="grid md:grid-cols-2 gap-8">
        <form onSubmit={submit} className="bg-white rounded-xl shadow p-6 space-y-3">
          <h2 className="font-bold text-gray-800 mb-2">Nuevo trámite</h2>
          <select value={form.pais} onChange={set('pais')} className="w-full border rounded-lg px-3 py-2 text-sm">
            {Object.entries(PAIS_NOMBRES).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
          </select>
          {['titulo', 'slug', 'descripcion', 'tiempoPromedio', 'costo'].map(f => (
            <input key={f} type="text" placeholder={f} value={(form as any)[f]} onChange={set(f)} className="w-full border rounded-lg px-3 py-2 text-sm" />
          ))}
          <textarea placeholder="Contenido HTML" value={form.contenidoHtml} onChange={set('contenidoHtml')} rows={3} className="w-full border rounded-lg px-3 py-2 text-sm" />
          <button type="submit" className="w-full bg-blue-700 text-white py-2 rounded-lg font-semibold">Crear</button>
        </form>
        <div className="space-y-3">
          {tramites.map(t => (
            <div key={t.id} className="bg-white rounded-xl shadow p-4 flex justify-between items-start">
              <div>
                <p className="font-semibold text-gray-800 text-sm">{t.titulo}</p>
                <p className="text-xs text-gray-500">{PAIS_NOMBRES[t.pais]} · {t.tiempoPromedio}</p>
              </div>
              <button onClick={() => del(t.slug)} className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">Eliminar</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
