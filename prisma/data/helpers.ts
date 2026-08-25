const ESTADO_ALIASES: Record<string, string> = {
  'D.C.': 'DC',
}

/**
 * Los archivos de datos por país traen "ciudad" como "Houston, TX" o
 * "Boston (Chelsea), MA". Esto separa en { ciudad, estadoUS } usando la
 * última coma, para que ciudad quede limpio y estadoUS sea el código de 2
 * letras que usa el resto de la app (ESTADOS_US en lib/utils.ts).
 */
export function splitCiudadEstado(raw: string): { ciudad: string; estadoUS: string | null } {
  const idx = raw.lastIndexOf(',')
  if (idx === -1) return { ciudad: raw.trim(), estadoUS: null }

  const ciudad = raw.slice(0, idx).trim()
  let estado = raw.slice(idx + 1).trim()
  estado = ESTADO_ALIASES[estado] || estado

  return { ciudad, estadoUS: estado || null }
}
