'use client'

import { useState, useEffect } from 'react'
import { PAIS_NOMBRES } from '@/lib/utils'

interface Consulado {
  id: string; pais: string; ciudad: string; nombre: string; direccion: string;
  telefono?: string; email?: string; horarioLunes?: string; horarioSabado?: string;
}

const emptyForm = { pais: 'MX', ciudad: '', nombre: '', direccion: '', telefono: '', email: '', horarioLunes: '', horarioSabado: '' }

const inputClass = 'w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:border-transparent'
const labelClass = 'block text-xs font-medium text-gray-500 mb-1 uppercase tracking-wide'

export default function AdminConsulados() {
  const [consulados, setConsulados] = useState<Consulado[]>([])
  const [form, setForm] = useState(emptyForm)
  const [editId, setEditId] = useState<string | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [msg, setMsg] = useState('')
  const [filterPais, setFilterPais] = useState('')

  const load = () => fetch('/api/consulados').then(r => r.json()).then(setConsulados)
  useEffect(() => { load() }, [])

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  function openNew() {
    setEditId(null)
    setForm(emptyForm)
    setShowModal(true)
  }

  function openEdit(c: Consulado) {
    setEditId(c.id)
    setForm({ pais: c.pais, ciudad: c.ciudad, nombre: c.nombre, direccion: c.direccion, telefono: c.telefono || '', email: c.email || '', horarioLunes: c.horarioLunes || '', horarioSabado: c.horarioSabado || '' })
    setShowModal(true)
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    const method = editId ? 'PUT' : 'POST'
    const url = editId ? `/api/consulados/${editId}` : '/api/consulados'
    const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
    if (res.ok) {
      setMsg(editId ? 'Consulado actualizado' : 'Consulado creado')
      setShowModal(false)
      setEditId(null)
      setForm(emptyForm)
      load()
    } else {
      const d = await res.json()
      setMsg(d.error)
    }
  }

  async function del(id: string) {
    if (!confirm('¿Eliminar este consulado?')) return
    await fetch(`/api/consulados/${id}`, { method: 'DELETE' })
    load()
  }

  const filtered = filterPais ? consulados.filter(c => c.pais === filterPais) : consulados

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Consulados</h1>
          <p className="text-gray-500 mt-1">{consulados.length} consulados registrados</p>
        </div>
        <button
          onClick={openNew}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90"
          style={{ background: '#d1430c' }}
        >
          + Nuevo Consulado
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
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr style={{ background: '#F2F3F8' }} className="text-left text-gray-500">
              <th className="px-6 py-4 font-medium">Nombre</th>
              <th className="px-6 py-4 font-medium">País</th>
              <th className="px-6 py-4 font-medium">Ciudad</th>
              <th className="px-6 py-4 font-medium">Teléfono</th>
              <th className="px-6 py-4 font-medium">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filtered.map((c: any) => (
              <tr key={c.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 font-medium text-gray-800">{c.nombre}</td>
                <td className="px-6 py-4">
                  <span className="bg-blue-50 text-blue-700 text-xs px-2 py-0.5 rounded-full">
                    {(PAIS_NOMBRES as any)[c.pais] || c.pais}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-600">{c.ciudad}</td>
                <td className="px-6 py-4 text-gray-500">{c.telefono || '–'}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => openEdit(c)}
                      className="text-xs px-3 py-1.5 rounded-lg font-medium transition"
                      style={{ background: '#EFF6FF', color: '#1d4ed8' }}
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => del(c.id)}
                      className="text-xs px-3 py-1.5 rounded-lg font-medium transition"
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
                <td colSpan={5} className="px-6 py-10 text-center text-gray-500">No hay consulados</td>
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
                  {editId ? 'Editar' : 'Nuevo'} Consulado
                </h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-600 text-2xl leading-none"
                >
                  ×
                </button>
              </div>
              <form onSubmit={submit} className="space-y-4">
                <div>
                  <label htmlFor="pais" className={labelClass}>País</label>
                  <select id="pais" value={form.pais} onChange={set('pais')} className={inputClass}>
                    {Object.entries(PAIS_NOMBRES).map(([k, v]) => <option key={k} value={k}>{v as string}</option>)}
                  </select>
                </div>
                {[
                  { key: 'nombre', label: 'Nombre' },
                  { key: 'ciudad', label: 'Ciudad' },
                  { key: 'direccion', label: 'Dirección' },
                  { key: 'telefono', label: 'Teléfono' },
                  { key: 'email', label: 'Email' },
                  { key: 'horarioLunes', label: 'Horario Lunes–Viernes' },
                  { key: 'horarioSabado', label: 'Horario Sábado' },
                ].map(({ key, label }) => (
                  <div key={key}>
                    <label htmlFor={`consulado-${key}`} className={labelClass}>{label}</label>
                    <input
                      id={`consulado-${key}`}
                      type="text"
                      value={(form as any)[key]}
                      onChange={set(key)}
                      className={inputClass}
                    />
                  </div>
                ))}
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
                    style={{ background: '#d1430c' }}
                  >
                    {editId ? 'Actualizar' : 'Crear'}
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
