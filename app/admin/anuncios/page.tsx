'use client'

import { useState, useEffect } from 'react'

interface Anuncio { id: string; titulo: string; tipo: string; activo: boolean; impresiones: number; clicks: number; paisesTarget: string[] }
interface Cliente { id: string; nombreEmpresa: string }

export default function AdminAnuncios() {
  const [anuncios, setAnuncios] = useState<Anuncio[]>([])
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [form, setForm] = useState({ tipo: 'banner', titulo: '', descripcion: '', enlaceDestino: 'https://', clienteId: '', paisesTarget: 'MX', presupuesto: 0 })
  const [msg, setMsg] = useState('')

  const load = async () => {
    const [a, c] = await Promise.all([fetch('/api/anuncios').then(r => r.json()), fetch('/api/clientes').then(r => r.json())])
    setAnuncios(Array.isArray(a) ? a : [])
    setClientes(Array.isArray(c) ? c : [])
  }
  useEffect(() => { load() }, [])
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    const payload = { ...form, paisesTarget: form.paisesTarget.split(',').map((p: any) => p.trim().toUpperCase()), presupuesto: Number(form.presupuesto) }
    const res = await fetch('/api/anuncios', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
    if (res.ok) { setMsg('Creado'); load() } else { const d = await res.json(); setMsg(d.error) }
  }

  async function del(id: string) {
    if (!confirm('¿Eliminar?')) return
    await fetch(`/api/anuncios/${id}`, { method: 'DELETE' })
    load()
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Anuncios</h1>
      {msg && <p className="mb-4 text-green-700 bg-green-50 p-3 rounded">{msg}</p>}
      <div className="grid md:grid-cols-2 gap-8">
        <form onSubmit={submit} className="bg-white rounded-xl shadow p-6 space-y-3">
          <h2 className="font-bold text-gray-800 mb-2">Nuevo anuncio</h2>
          <select value={form.tipo} onChange={set('tipo')} className="w-full border rounded-lg px-3 py-2 text-sm">
            {['banner', 'card', 'popup'].map((t: any) => <option key={t}>{t}</option>)}
          </select>
          <input type="text" placeholder="Título" value={form.titulo} onChange={set('titulo')} required className="w-full border rounded-lg px-3 py-2 text-sm" />
          <input type="text" placeholder="Descripción" value={form.descripcion} onChange={set('descripcion')} required className="w-full border rounded-lg px-3 py-2 text-sm" />
          <input type="url" placeholder="URL destino" value={form.enlaceDestino} onChange={set('enlaceDestino')} required className="w-full border rounded-lg px-3 py-2 text-sm" />
          <select value={form.clienteId} onChange={set('clienteId')} required className="w-full border rounded-lg px-3 py-2 text-sm">
            <option value="">Seleccionar cliente</option>
            {clientes.map((c: any) => <option key={c.id} value={c.id}>{c.nombreEmpresa}</option>)}
          </select>
          <input type="text" placeholder="Países (MX,CO)" value={form.paisesTarget} onChange={set('paisesTarget')} className="w-full border rounded-lg px-3 py-2 text-sm" />
          <input type="number" placeholder="Presupuesto $" value={form.presupuesto} onChange={set('presupuesto')} className="w-full border rounded-lg px-3 py-2 text-sm" />
          <button type="submit" className="w-full bg-blue-700 text-white py-2 rounded-lg font-semibold">Crear</button>
        </form>

        <div className="space-y-3">
          {anuncios.map((a: any) => (
            <div key={a.id} className="bg-white rounded-xl shadow p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{a.titulo}</p>
                  <p className="text-xs text-gray-500">{a.tipo} · {a.paisesTarget.join(', ')}</p>
                </div>
                <button onClick={() => del(a.id)} className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">Eliminar</button>
              </div>
              <div className="flex gap-4 text-xs text-gray-500">
                <span>👁 {a.impresiones} impresiones</span>
                <span>🖱 {a.clicks} clicks</span>
                <span>{a.clicks && a.impresiones ? ((a.clicks / a.impresiones) * 100).toFixed(1) : 0}% CTR</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
