'use client'

import { useState, useEffect } from 'react'
import { PAIS_NOMBRES } from '@/lib/utils'

interface Cliente {
  id: string; nombreEmpresa: string; tipo: string; emailContacto: string;
  telefono?: string; sitioWeb?: string; descripcion?: string; logoUrl?: string;
  activo: boolean; paisServicio: string[];
}

const emptyForm = {
  nombreEmpresa: '', tipo: 'abogado', emailContacto: '', telefono: '',
  sitioWeb: '', descripcion: '', logoUrl: '', paisServicio: 'MX',
}

const inputClass = 'w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:border-transparent'
const labelClass = 'block text-xs font-medium text-gray-500 mb-1 uppercase tracking-wide'

const tipos = ['abogado', 'notaria', 'remesas', 'salud', 'educacion', 'financiero', 'otro']
const TIPO_LABELS: Record<string, string> = {
  abogado: 'Abogado / Firma Legal', notaria: 'Notaría', remesas: 'Remesas',
  salud: 'Salud', educacion: 'Educación', financiero: 'Financiero', otro: 'Otro',
}

export default function AdminClientes() {
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [form, setForm] = useState(emptyForm)
  const [editId, setEditId] = useState<string | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [msg, setMsg] = useState('')

  const load = () => fetch('/api/clientes').then(r => r.json()).then(setClientes).catch(() => {})
  useEffect(() => { load() }, [])

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  function openNew() {
    setEditId(null)
    setForm(emptyForm)
    setShowModal(true)
  }

  function openEdit(c: Cliente) {
    setEditId(c.id)
    setForm({
      nombreEmpresa: c.nombreEmpresa, tipo: c.tipo, emailContacto: c.emailContacto,
      telefono: c.telefono || '', sitioWeb: c.sitioWeb || '',
      descripcion: c.descripcion || '', logoUrl: c.logoUrl || '',
      paisServicio: c.paisServicio.join(','),
    })
    setShowModal(true)
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    const payload = { ...form, paisServicio: form.paisServicio.split(',').map((p: string) => p.trim().toUpperCase()) }
    const method = editId ? 'PUT' : 'POST'
    const url = editId ? `/api/clientes/${editId}` : '/api/clientes'
    const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
    if (res.ok) {
      setMsg(editId ? 'Patrocinador actualizado' : 'Patrocinador creado')
      setShowModal(false)
      setEditId(null)
      setForm(emptyForm)
      load()
    } else {
      const d = await res.json()
      setMsg(d.error || 'Error')
    }
  }

  async function toggleActivo(id: string, activo: boolean) {
    await fetch(`/api/clientes/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ activo: !activo }),
    })
    load()
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Patrocinadores</h1>
          <p className="text-gray-500 mt-1">{clientes.length} patrocinadores registrados</p>
        </div>
        <button
          onClick={openNew}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90"
          style={{ background: '#F96167' }}
        >
          + Nuevo Patrocinador
        </button>
      </div>

      {msg && <div className="mb-4 px-4 py-3 rounded-xl bg-green-50 text-green-700 text-sm">{msg}</div>}

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr style={{ background: '#F2F3F8' }} className="text-left text-gray-500">
              <th className="px-6 py-4 font-medium">Empresa</th>
              <th className="px-6 py-4 font-medium">Tipo</th>
              <th className="px-6 py-4 font-medium">Contacto</th>
              <th className="px-6 py-4 font-medium">Países</th>
              <th className="px-6 py-4 font-medium">Estado</th>
              <th className="px-6 py-4 font-medium">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {clientes.map((c: any) => (
              <tr key={c.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4">
                  <div className="font-semibold text-gray-800">{c.nombreEmpresa}</div>
                  {c.sitioWeb && <div className="text-xs text-blue-600 truncate max-w-[180px]">{c.sitioWeb}</div>}
                </td>
                <td className="px-6 py-4">
                  <span className="bg-purple-50 text-purple-700 text-xs px-2 py-0.5 rounded-full">
                    {TIPO_LABELS[c.tipo] || c.tipo}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-500 text-xs">
                  <div>{c.emailContacto}</div>
                  {c.telefono && <div>{c.telefono}</div>}
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-1">
                    {c.paisServicio.map((p: string) => (
                      <span key={p} className="text-xs bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded-full">{p}</span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <button onClick={() => toggleActivo(c.id, c.activo)}
                    className={`text-xs px-2 py-0.5 rounded-full ${c.activo ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                    {c.activo ? '✓ Activo' : '⏸ Inactivo'}
                  </button>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => openEdit(c)}
                    className="text-xs px-3 py-1.5 rounded-lg font-medium"
                    style={{ background: '#EFF6FF', color: '#1d4ed8' }}
                  >
                    Editar
                  </button>
                </td>
              </tr>
            ))}
            {clientes.length === 0 && (
              <tr><td colSpan={6} className="px-6 py-10 text-center text-gray-400">No hay patrocinadores registrados</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">{editId ? 'Editar' : 'Nuevo'} Patrocinador</h2>
                <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600 text-2xl leading-none">×</button>
              </div>
              <form onSubmit={submit} className="space-y-4">
                <div>
                  <label className={labelClass}>Nombre de empresa</label>
                  <input type="text" value={form.nombreEmpresa} onChange={set('nombreEmpresa')} required className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Tipo de servicio</label>
                  <select value={form.tipo} onChange={set('tipo')} className={inputClass}>
                    {tipos.map(t => <option key={t} value={t}>{TIPO_LABELS[t]}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Email de contacto</label>
                  <input type="email" value={form.emailContacto} onChange={set('emailContacto')} required className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Teléfono</label>
                  <input type="tel" value={form.telefono} onChange={set('telefono')} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Sitio web</label>
                  <input type="url" value={form.sitioWeb} onChange={set('sitioWeb')} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Descripción</label>
                  <textarea value={form.descripcion} onChange={set('descripcion')} rows={2} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>URL del logo</label>
                  <input type="url" value={form.logoUrl} onChange={set('logoUrl')} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Países que sirve (ej: MX,CO,VE)</label>
                  <input type="text" value={form.paisServicio} onChange={set('paisServicio')} className={inputClass} />
                  <p className="text-xs text-gray-400 mt-1">Separados por coma. GENERAL = todos los países.</p>
                </div>
                <div className="flex gap-3 pt-2">
                  <button type="button" onClick={() => setShowModal(false)}
                    className="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50">
                    Cancelar
                  </button>
                  <button type="submit"
                    className="flex-1 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90"
                    style={{ background: '#F96167' }}>
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
