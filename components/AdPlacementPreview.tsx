'use client'

import { UBICACIONES } from '@/lib/utils'

interface Props {
  ubicaciones: string[]
}

// Mini-wireframes de cada página del sitio, mostrando en qué punto exacto
// aparece el anuncio (recuadro naranja) dentro del contenido real.
const WIREFRAMES: Record<string, { titulo: string; adAfterItem: number; items: number }> = {
  INICIO: { titulo: 'Inicio', adAfterItem: 2, items: 4 },
  PAIS_RESUMEN: { titulo: 'Página de país', adAfterItem: 0, items: 3 },
  PAIS_CONSULADOS: { titulo: 'Consulados', adAfterItem: 1, items: 3 },
  PAIS_TRAMITES: { titulo: 'Trámites', adAfterItem: 1, items: 3 },
  PAIS_NOTICIAS: { titulo: 'Noticias', adAfterItem: 1, items: 3 },
}

function Wireframe({ value, label, active }: { value: string; label: string; active: boolean }) {
  const wf = WIREFRAMES[value]
  if (!wf) return null
  const items = Array.from({ length: wf.items })

  return (
    <div
      className={`rounded-lg border p-2 transition ${
        active ? 'border-accent-400 ring-2 ring-accent-100 bg-accent-50/30' : 'border-gray-200 bg-gray-50 opacity-60'
      }`}
    >
      <div className="text-[10px] font-semibold text-gray-500 mb-1.5 truncate">{label}</div>
      <div className="bg-white rounded border border-gray-200 p-1.5 space-y-1">
        <div className="h-1.5 w-2/3 bg-gray-200 rounded-full" />
        <div className="h-1 w-1/2 bg-gray-100 rounded-full mb-1" />
        {items.map((_, i) => (
          <div key={i}>
            <div className="h-3 bg-gray-100 border border-gray-200 rounded-sm" />
            {i === wf.adAfterItem && (
              <div
                className={`h-3 mt-1 rounded-sm border flex items-center justify-center text-[7px] font-bold tracking-wide ${
                  active ? 'bg-accent-200 border-accent-400 text-accent-800' : 'bg-gray-200 border-gray-300 text-gray-500'
                }`}
              >
                TU ANUNCIO
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function AdPlacementPreview({ ubicaciones }: Props) {
  const sinRestriccion = ubicaciones.length === 0

  return (
    <div className="mt-3">
      <p className="text-xs text-gray-500 mb-2">
        {sinRestriccion
          ? 'Vista previa: sin marcar ninguna ubicación, el anuncio puede salir en cualquiera de estas páginas (dentro de los países elegidos).'
          : 'Vista previa: el anuncio saldrá exactamente donde se ve resaltado en naranja.'}
      </p>
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
        {UBICACIONES.map((u) => (
          <Wireframe
            key={u.value}
            value={u.value}
            label={u.label}
            active={sinRestriccion || ubicaciones.includes(u.value)}
          />
        ))}
      </div>
    </div>
  )
}
