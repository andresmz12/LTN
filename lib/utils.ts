export const PAISES = ['MX', 'CO', 'VE', 'SV'] as const
export type Pais = typeof PAISES[number]

export const PAIS_NOMBRES: Record<string, string> = {
  MX: 'México',
  CO: 'Colombia',
  VE: 'Venezuela',
  SV: 'El Salvador',
}

export const PAIS_FLAGS: Record<string, string> = {
  MX: '🇲🇽',
  CO: '🇨🇴',
  VE: '🇻🇪',
  SV: '🇸🇻',
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString('es-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const loginAttempts = new Map<string, { count: number; resetAt: number }>()

export function checkRateLimit(key: string, max = 5, windowMs = 15 * 60 * 1000): boolean {
  const now = Date.now()
  const entry = loginAttempts.get(key)

  if (!entry || now > entry.resetAt) {
    loginAttempts.set(key, { count: 1, resetAt: now + windowMs })
    return true
  }

  if (entry.count >= max) return false

  entry.count++
  return true
}
