'use client'

import { useState, useEffect } from 'react'

interface Cliente { id: string; nombreEmpresa: string; tipo: string; emailContacto: string; activo: boolean; paisServicio: string[] }

export default function AdminClientes() {
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [form, setForm] = useState({ nombreEmpresa: '', tipo: 'abogado', emailContacto: '', telefono: '', sitioWeb: '', paisServicio: 'MX' })
  const [msg, setMsg] = useState('')

  const load = () => fetch('/api/clientes').then(r => r.json()).then(setClientes).catch(() => {})
  useEffect(() => { load() }, [])
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    const payload = { ...form, paisServicio: form.paisServicio.split(',').map(p => p.trim().toUpperCase()) }
    const res = await fetch('/api/clientes', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
    if (res.ok) { setMsg('Creado'); load() } else { const d = await res.json(); setMsg(d.error) }
  }

  const tipos = ['abogado', 'notaria', 'remesas', 'salud', 'educacion', 'financiero', 'otro']

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Clientes / Sponsors</h1>
      {msg && <p className="mb-4 text-green-700 bg-green-50 p-3 rounded">{msg}</p>}
      <div className="grid md:grid-cols-2 gap-8">
        <form onSubmit={submit} className="bg-white rounded-xl shadow p-6 space-y-3">
          <h2 className="font-bold text-gray-800 mb-2">Nuevo cliente</h2>
          <input type="text" placeholder="Empresa" value={form.nombreEmpresa} onChange={set('nombreEmpresa')} required className="w-full border rounded-lg px-3 py-2 text-sm" />
          <select value={form.tipo} onChange={set('tipo')} className="w-full border rounded-lg px-3 py-2 text-sm">
            {tipos.map(t => <option key={t}>{t}</option>)}
          </select>
          <input type="email" placeholder="Email contacto" value={form.emailContacto} onChange={set('emailContacto')} required className="w-full border rounded-lg px-3 py-2 text-sm" />
          <input type="tel" placeholder="Teléfono" value={form.telefono} onChange={set('telefono')} className="w-full border rounded-lg px-3 py-2 text-sm" />
          <input type="url" placeholder="Sitio web" value={form.sitioWeb} onChange={set('sitioWeb')} className="w-full border rounded-lg px-3 py-2 text-sm" />
          <input type="text" placeholder="Países (MX,CO)" value={form.paisServicio} onChange={set('paisServicio')} className="w-full border rounded-lg px-3 py-2 text-sm" />
          <button type="submit" className="w-full bg-blue-700 text-white py-2 rounded-lg font-semibold">Crear</button>
        </form>
        <div className="space-y-3">
          {clientes.map(c => (
            <div key={c.id} className="bg-white rounded-xl shadow p-4">
              <p className="font-semibold text-gray-800">{c.nombreEmpresa}</p>
              <p className="text-sm text-gray-500">{c.tipo} · {c.emailContacto}</p>
              <p className="text-xs text-gray-400">{c.paisServicio.join(', ')} · {c.activo ? '✅ Activo' : '⏸ Inactivo'}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
