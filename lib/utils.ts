export const PAISES = ['MX', 'CO', 'VE', 'SV', 'GT', 'HN', 'NI', 'CU', 'DO', 'EC', 'PE'] as const
export type Pais = typeof PAISES[number]

// Dónde puede aparecer un anuncio dentro del sitio. Vacío = se muestra en
// cualquier página de sus países/estados target (comportamiento anterior).
export const UBICACIONES = [
  { value: 'INICIO', label: 'Inicio (Recursos Generales)' },
  { value: 'PAIS_RESUMEN', label: 'Página de país — resumen' },
  { value: 'PAIS_CONSULADOS', label: 'Página de país — Consulados' },
  { value: 'PAIS_TRAMITES', label: 'Página de país — Trámites' },
  { value: 'PAIS_NOTICIAS', label: 'Página de país — Noticias' },
] as const
export type Ubicacion = typeof UBICACIONES[number]['value']
export const UBICACION_LABELS: Record<string, string> = Object.fromEntries(
  UBICACIONES.map(u => [u.value, u.label])
)

export const PAIS_NOMBRES: Record<string, string> = {
  MX: 'México',
  CO: 'Colombia',
  VE: 'Venezuela',
  SV: 'El Salvador',
  GT: 'Guatemala',
  HN: 'Honduras',
  NI: 'Nicaragua',
  CU: 'Cuba',
  DO: 'Rep. Dominicana',
  EC: 'Ecuador',
  PE: 'Perú',
  GENERAL: 'Recursos Generales',
}

export const PAIS_FLAGS: Record<string, string> = {
  MX: '🇲🇽',
  CO: '🇨🇴',
  VE: '🇻🇪',
  SV: '🇸🇻',
  GT: '🇬🇹',
  HN: '🇭🇳',
  NI: '🇳🇮',
  CU: '🇨🇺',
  DO: '🇩🇴',
  EC: '🇪🇨',
  PE: '🇵🇪',
  GENERAL: '🌎',
}

export const ESTADOS_US: Record<string, string> = {
  AL: 'Alabama', AK: 'Alaska', AZ: 'Arizona', AR: 'Arkansas', CA: 'California',
  CO: 'Colorado', CT: 'Connecticut', DE: 'Delaware', DC: 'Washington DC', FL: 'Florida',
  GA: 'Georgia', HI: 'Hawái', ID: 'Idaho', IL: 'Illinois', IN: 'Indiana',
  IA: 'Iowa', KS: 'Kansas', KY: 'Kentucky', LA: 'Luisiana', ME: 'Maine',
  MD: 'Maryland', MA: 'Massachusetts', MI: 'Míchigan', MN: 'Minnesota', MS: 'Misisipi',
  MO: 'Misuri', MT: 'Montana', NE: 'Nebraska', NV: 'Nevada', NH: 'Nuevo Hampshire',
  NJ: 'Nueva Jersey', NM: 'Nuevo México', NY: 'Nueva York', NC: 'Carolina del Norte',
  ND: 'Dakota del Norte', OH: 'Ohio', OK: 'Oklahoma', OR: 'Oregón', PA: 'Pensilvania',
  PR: 'Puerto Rico',
  RI: 'Rhode Island', SC: 'Carolina del Sur', SD: 'Dakota del Sur', TN: 'Tennessee',
  TX: 'Texas', UT: 'Utah', VT: 'Vermont', VA: 'Virginia', WA: 'Washington',
  WV: 'Virginia Occidental', WI: 'Wisconsin', WY: 'Wyoming',
}

export const EMPLEO_CATEGORIAS = [
  'Construcción',
  'Limpieza',
  'Restaurantes y Cocina',
  'Cuidado de Niños y Ancianos',
  'Transporte y Delivery',
  'Bodega y Almacén',
  'Manufactura',
  'Oficina y Administración',
  'Salud',
  'Belleza y Estética',
  'Agricultura',
  'Ventas',
  'Otro',
]

export const EMPLEO_TIPOS = ['Tiempo completo', 'Medio tiempo', 'Temporal', 'Por día', 'Contrato']

export const ESTADO_COOKIE = 'compa_estado'

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
