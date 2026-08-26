'use client'

import { useState, useEffect } from 'react'
import { ESTADOS_US, EMPLEO_CATEGORIAS, EMPLEO_TIPOS, slugify } from '@/lib/utils'

interface Trabajo {
  id: string; titulo: string; slug: string; empresa: string; descripcion: string;
  categoria: string; tipoEmpleo: string; estadoUS: string; ciudad?: string; salario?: string;
  requisitos: string[]; comoAplicar: string; clienteId?: string; destacado: boolean;
  activo: boolean; presupuesto?: number; pagado: boolean;
}
interface Cliente { id: string; nombreEmpresa: string }

const emptyForm = {
  titulo: '', slug: '', empresa: '', descripcion: '',
  categoria: EMPLEO_CATEGORIAS[0], tipoEmpleo: EMPLEO_TIPOS[0], estadoUS: 'TX',
  ciudad: '', salario: '', requisitos: '', comoAplicar: '',
  clienteId: '', destacado: false, presupuesto: 0, pagado: false,
}

const inputClass = 'w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:border-transparent'
const labelClass = 'block text-xs font-medium text-gray-500 mb-1 uppercase tracking-wide'

export default function AdminTrabajos() {
  const [trabajos, setTrabajos] = useState<Trabajo[]>([])
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [form, setForm] = useState(emptyForm)
  const [editId, setEditId] = useState<string | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [msg, setMsg] = useState('')

  const load = async () => {
    const [t, c] = await Promise.all([
      fetch('/api/trabajos?all=true').then(r => r.json()),
      fetch('/api/clientes').then(r => r.json()),
    ])
    setTrabajos(Array.isArray(t) ? t : [])
    setClientes(Array.isArray(c) ? c : [])
  }
  useEffect(() => { load() }, [])

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value
    setForm(f => {
      const next = { ...f, [k]: value }
      if (k === 'titulo' && !editId) next.slug = slugify(String(value))
      return next
    })
  }

  function openNew() {
    setEditId(null)
    setForm(emptyForm)
    setShowModal(true)
  }

  function openEdit(t: Trabajo) {
    setEditId(t.id)
    setForm({
      titulo: t.titulo, slug: t.slug, empresa: t.empresa, descripcion: t.descripcion,
      categoria: t.categoria, tipoEmpleo: t.tipoEmpleo, estadoUS: t.estadoUS,
      ciudad: t.ciudad || '', salario: t.salario || '',
      requisitos: (t.requisitos || []).join(', '), comoAplicar: t.comoAplicar,
      clienteId: t.clienteId || '', destacado: t.destacado,
      presupuesto: t.presupuesto || 0, pagado: t.pagado,
    })
    setShowModal(true)
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    const payload = {
      ...form,
      requisitos: form.requisitos.split(',').map((r: string) => r.trim()).filter(Boolean),
      presupuesto: Number(form.presupuesto),
      clienteId: form.clienteId || undefined,
    }
    const method = editId ? 'PUT' : 'POST'
    const url = editId ? `/api/trabajos/${editId}` : '/api/trabajos'
    const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
    if (res.ok) {
      setMsg(editId ? 'Trabajo actualizado' : 'Trabajo creado')
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
    await fetch(`/api/trabajos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ activo: !activo }),
    })
    load()
  }

  async function togglePagado(id: string, pagado: boolean) {
    await fetch(`/api/trabajos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pagado: !pagado }),
    })
    load()
  }

  async function del(id: string) {
    if (!confirm('¿Eliminar este trabajo?')) return
    await fetch(`/api/trabajos/${id}`, { method: 'DELETE' })
    load()
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Trabajos</h1>
          <p className="text-gray-500 mt-1">{trabajos.length} publicaciones registradas</p>
        </div>
        <button
          onClick={openNew}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90"
          style={{ background: '#96661c' }}
        >
          + Nuevo Trabajo
        </button>
      </div>

      {msg && (
        <div className="mb-4 px-4 py-3 rounded-xl bg-green-50 text-green-700 text-sm">{msg}</div>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {trabajos.map((t: any) => (
          <div key={t.id} className="bg-white rounded-lg border border-gray-200 p-5">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1 min-w-0 mr-2">
                <h3 className="font-bold text-gray-800 text-sm truncate">{t.titulo}</h3>
                <p className="text-xs text-gray-500 truncate">{t.empresa}</p>
                <div className="flex items-center gap-2 mt-2 flex-wrap">
                  <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">{ESTADOS_US[t.estadoUS] || t.estadoUS}</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{t.categoria}</span>
                  {t.destacado && <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">Destacado</span>}
                  <button
                    onClick={() => toggleActivo(t.id, t.activo)}
                    className={`text-xs px-2 py-0.5 rounded-full transition ${t.activo ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-500'}`}
                  >
                    {t.activo ? '✓ Activo' : '⏸ Inactivo'}
                  </button>
                  <button
                    onClick={() => togglePagado(t.id, t.pagado)}
                    className={`text-xs px-2 py-0.5 rounded-full transition ${t.pagado ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'}`}
                  >
                    {t.pagado ? '✓ Pagado' : '$ Pendiente de pago'}
                  </button>
                </div>
              </div>
            </div>

            {t.presupuesto != null && t.presupuesto > 0 && (
              <div className="text-xs text-gray-500 mb-3 mt-2">
                Precio: <span className="font-semibold text-gray-700">${Number(t.presupuesto).toLocaleString()}</span>
              </div>
            )}

            <div className="flex gap-2 mt-3">
              <button
                onClick={() => openEdit(t)}
                className="flex-1 py-1.5 rounded-lg text-xs font-medium transition"
                style={{ background: '#EFF6FF', color: '#1d4ed8' }}
              >
                Editar
              </button>
              <button
                onClick={() => del(t.id)}
                className="flex-1 py-1.5 rounded-lg text-xs font-medium transition"
                style={{ background: '#FEF2F2', color: '#dc2626' }}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
        {trabajos.length === 0 && (
          <div className="col-span-3 text-center py-16 text-gray-400">No hay trabajos registrados</div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">{editId ? 'Editar' : 'Nuevo'} Trabajo</h2>
                <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600 text-2xl leading-none">×</button>
              </div>
              <form onSubmit={submit} className="space-y-4">
                <div>
                  <label className={labelClass}>Título del puesto</label>
                  <input type="text" value={form.titulo} onChange={set('titulo')} required className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Slug (URL)</label>
                  <input type="text" value={form.slug} onChange={set('slug')} required className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Empresa</label>
                  <input type="text" value={form.empresa} onChange={set('empresa')} required className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Descripción</label>
                  <textarea value={form.descripcion} onChange={set('descripcion')} rows={4} required className={inputClass} />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass}>Categoría</label>
                    <select value={form.categoria} onChange={set('categoria')} className={inputClass}>
                      {EMPLEO_CATEGORIAS.map((c) => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Tipo de empleo</label>
                    <select value={form.tipoEmpleo} onChange={set('tipoEmpleo')} className={inputClass}>
                      {EMPLEO_TIPOS.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass}>Estado</label>
                    <select value={form.estadoUS} onChange={set('estadoUS')} required className={inputClass}>
                      {Object.entries(ESTADOS_US).map(([code, nombre]) => (
                        <option key={code} value={code}>{nombre}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Ciudad (opcional)</label>
                    <input type="text" value={form.ciudad} onChange={set('ciudad')} className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Salario (opcional)</label>
                  <input type="text" value={form.salario} onChange={set('salario')} placeholder="ej: $18-22/hora" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Requisitos (separados por coma)</label>
                  <input type="text" value={form.requisitos} onChange={set('requisitos')} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Cómo aplicar (email, teléfono o URL)</label>
                  <input type="text" value={form.comoAplicar} onChange={set('comoAplicar')} required className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Cliente / Empleador (opcional)</label>
                  <select value={form.clienteId} onChange={set('clienteId')} className={inputClass}>
                    <option value="">Sin cliente asociado</option>
                    {clientes.map((c: any) => <option key={c.id} value={c.id}>{c.nombreEmpresa}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Precio cobrado $</label>
                  <input type="number" value={form.presupuesto} onChange={set('presupuesto')} min="0" className={inputClass} />
                </div>
                <div className="flex items-center gap-4 pt-1">
                  <label className="flex items-center gap-2 text-sm text-gray-600">
                    <input type="checkbox" checked={form.destacado} onChange={set('destacado')} /> Destacado
                  </label>
                  <label className="flex items-center gap-2 text-sm text-gray-600">
                    <input type="checkbox" checked={form.pagado} onChange={set('pagado')} /> Pagado
                  </label>
                </div>
                <div className="flex gap-3 pt-2">
                  <button type="button" onClick={() => setShowModal(false)}
                    className="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50">
                    Cancelar
                  </button>
                  <button type="submit"
                    className="flex-1 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90"
                    style={{ background: '#96661c' }}>
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
