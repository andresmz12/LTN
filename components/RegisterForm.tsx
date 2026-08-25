'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { PAIS_NOMBRES } from '@/lib/utils'

const US_STATES = ['CA', 'TX', 'FL', 'NY', 'IL', 'AZ', 'NV', 'GA', 'NC', 'WA', 'Other']

export default function RegisterForm() {
  const router = useRouter()
  const [form, setForm] = useState({
    email: '', password: '', nombre: '', apellido: '',
    phone: '', paisOrigen: '', estadoUS: '',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    const data = await res.json()
    setLoading(false)

    if (!res.ok) {
      setError(data.error || 'Error al registrar')
    } else {
      router.push('/auth/login?registered=1')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <p className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">{error}</p>}

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
          <input type="text" value={form.nombre} onChange={set('nombre')} required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Apellido</label>
          <input type="text" value={form.apellido} onChange={set('apellido')} required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input type="email" value={form.email} onChange={set('email')} required
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
        <input type="password" value={form.password} onChange={set('password')} required minLength={8}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono (opcional)</label>
        <input type="tel" value={form.phone} onChange={set('phone')}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">País de origen</label>
          <select value={form.paisOrigen} onChange={set('paisOrigen')}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500">
            <option value="">Seleccionar</option>
            {Object.entries(PAIS_NOMBRES).map(([k, v]) => (
              <option key={k} value={k}>{v}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Estado en EE.UU.</label>
          <select value={form.estadoUS} onChange={set('estadoUS')}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500">
            <option value="">Seleccionar</option>
            {US_STATES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      <button type="submit" disabled={loading}
        className="w-full bg-brand-700 text-white py-2 rounded-lg font-semibold hover:bg-brand-800 disabled:opacity-50 transition">
        {loading ? 'Creando cuenta...' : 'Crear cuenta'}
      </button>

      <p className="text-center text-sm text-gray-500">
        ¿Ya tienes cuenta?{' '}
        <Link href="/auth/login" className="text-brand-700 font-semibold hover:underline">Entrar</Link>
      </p>
    </form>
  )
}
