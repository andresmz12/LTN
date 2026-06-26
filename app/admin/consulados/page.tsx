'use client'

import { useState, useEffect } from 'react'
import { PAIS_NOMBRES } from '@/lib/utils'

interface Consulado {
  id: string; pais: string; ciudad: string; nombre: string; direccion: string;
  telefono?: string; email?: string; horarioLunes?: string; horarioSabado?: string;
}

export default function AdminConsulados() {
  const [consulados, setConsulados] = useState<Consulado[]>([])
  const [form, setForm] = useState({ pais: 'MX', ciudad: '', nombre: '', direccion: '', telefono: '', email: '', horarioLunes: '', horarioSabado: '' })
  const [editId, setEditId] = useState<string | null>(null)
  const [msg, setMsg] = useState('')

  const load = () => fetch('/api/consulados').then(r => r.json()).then(setConsulados)
  useEffect(() => { load() }, [])

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    const method = editId ? 'PUT' : 'POST'
    const url = editId ? `/api/consulados/${editId}` : '/api/consulados'
    const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
    if (res.ok) { setMsg(editId ? 'Actualizado' : 'Creado'); setEditId(null); setForm({ pais: 'MX', ciudad: '', nombre: '', direccion: '', telefono: '', email: '', horarioLunes: '', horarioSabado: '' }); load() }
    else { const d = await res.json(); setMsg(d.error) }
  }

  async function del(id: string) {
    if (!confirm('¿Eliminar?')) return
    await fetch(`/api/consulados/${id}`, { method: 'DELETE' })
    load()
  }

  function edit(c: Consulado) {
    setEditId(c.id)
    setForm({ pais: c.pais, ciudad: c.ciudad, nombre: c.nombre, direccion: c.direccion, telefono: c.telefono || '', email: c.email || '', horarioLunes: c.horarioLunes || '', horarioSabado: c.horarioSabado || '' })
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Consulados</h1>
      {msg && <p className="mb-4 text-green-700 bg-green-50 p-3 rounded">{msg}</p>}

      <div className="grid md:grid-cols-2 gap-8">
        <form onSubmit={submit} className="bg-white rounded-xl shadow p-6 space-y-3">
          <h2 className="font-bold text-gray-800 mb-2">{editId ? 'Editar' : 'Nuevo'} consulado</h2>
          <select value={form.pais} onChange={set('pais')} className="w-full border rounded-lg px-3 py-2 text-sm">
            {Object.entries(PAIS_NOMBRES).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
          </select>
          {['ciudad', 'nombre', 'direccion', 'telefono', 'email', 'horarioLunes', 'horarioSabado'].map((f: any) => (
            <input key={f} type="text" placeholder={f} value={(form as any)[f]} onChange={set(f)}
              className="w-full border rounded-lg px-3 py-2 text-sm" />
          ))}
          <button type="submit" className="w-full bg-blue-700 text-white py-2 rounded-lg font-semibold">
            {editId ? 'Actualizar' : 'Crear'}
          </button>
          {editId && <button type="button" onClick={() => setEditId(null)} className="w-full border py-2 rounded-lg text-sm">Cancelar</button>}
        </form>

        <div className="space-y-3">
          {consulados.map((c: any) => (
            <div key={c.id} className="bg-white rounded-xl shadow p-4 flex justify-between items-start">
              <div>
                <p className="font-semibold text-gray-800">{c.nombre}</p>
                <p className="text-sm text-gray-500">{PAIS_NOMBRES[c.pais]} · {c.ciudad}</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => edit(c)} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Editar</button>
                <button onClick={() => del(c.id)} className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">Eliminar</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
