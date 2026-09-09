'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'

const STORAGE_KEY = 'compa_signup_incentive_dismissed_at'
const SNOOZE_DAYS = 14
const SHOW_DELAY_MS = 4000
const HIDDEN_PREFIXES = ['/admin', '/auth']

export default function SignupIncentivePopup() {
  const { status } = useSession()
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)
  const hiddenRoute = HIDDEN_PREFIXES.some((p) => pathname?.startsWith(p))

  useEffect(() => {
    if (status !== 'unauthenticated' || hiddenRoute) return

    let lastDismissed = 0
    try {
      lastDismissed = Number(localStorage.getItem(STORAGE_KEY) || 0)
    } catch {
      // localStorage no disponible (modo privado, etc.)
    }
    const daysSince = (Date.now() - lastDismissed) / (1000 * 60 * 60 * 24)
    if (lastDismissed && daysSince < SNOOZE_DAYS) return

    const timer = setTimeout(() => setVisible(true), SHOW_DELAY_MS)
    return () => clearTimeout(timer)
  }, [status, hiddenRoute])

  function dismiss() {
    setVisible(false)
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()))
    } catch {
      // ignorar si no hay localStorage
    }
  }

  if (!visible || hiddenRoute) return null

  return (
    <div
      role="dialog"
      aria-labelledby="signup-incentive-title"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-sm z-40 bg-white rounded-xl shadow-xl border border-brand-100 p-5 relative"
    >
      <button
        onClick={dismiss}
        aria-label="Cerrar"
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-xl leading-none px-2"
      >
        ×
      </button>
      <p className="text-xs font-semibold text-accent-600 uppercase tracking-wide mb-1">🎁 Regístrate gratis</p>
      <h3 id="signup-incentive-title" className="font-display font-semibold text-gray-900 mb-1.5">
        No te pierdas nada
      </h3>
      <p className="text-sm text-gray-500 mb-4">
        Crea tu cuenta gratis y recibe avisos de nuevos trámites, alertas de empleo y noticias de tu país apenas se publiquen.
      </p>
      <div className="flex gap-2">
        <Link
          href="/auth/register"
          onClick={dismiss}
          className="flex-1 text-center py-2 rounded-lg text-sm font-semibold text-white bg-accent-500 hover:bg-accent-600 transition"
        >
          Registrarme
        </Link>
        <button
          onClick={dismiss}
          className="py-2 px-3 rounded-lg text-sm font-medium text-gray-500 hover:bg-gray-50 transition"
        >
          Ahora no
        </button>
      </div>
    </div>
  )
}
