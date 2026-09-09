'use client'

import { useEffect, useState } from 'react'

interface Props {
  id: string
  titulo: string
  descripcion: string
  imagenUrl?: string | null
  enlaceDestino: string
  tipo: string
}

function useClickHandler(id: string, enlaceDestino: string) {
  return async () => {
    await fetch(`/api/anuncios/${id}/click`, { method: 'POST' })
    window.open(enlaceDestino, '_blank', 'noopener')
  }
}

function CardAd({ id, titulo, descripcion, imagenUrl, enlaceDestino }: Props) {
  const handleClick = useClickHandler(id, enlaceDestino)
  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
      <span className="text-xs text-yellow-600 font-semibold uppercase tracking-wide">Patrocinado</span>
      {imagenUrl && (
        <img src={imagenUrl} alt={titulo} className="w-full h-32 object-cover rounded-lg mt-2 mb-3" />
      )}
      <h4 className="font-bold text-gray-800 mb-1">{titulo}</h4>
      <p className="text-sm text-gray-600 mb-3">{descripcion}</p>
      <button
        onClick={handleClick}
        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-lg text-sm transition"
      >
        Ver más
      </button>
    </div>
  )
}

function BannerAd({ id, titulo, descripcion, imagenUrl, enlaceDestino }: Props) {
  const handleClick = useClickHandler(id, enlaceDestino)
  return (
    <div className="col-span-full bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex flex-col sm:flex-row items-center gap-4">
      {imagenUrl && (
        <img src={imagenUrl} alt={titulo} className="w-full sm:w-40 h-24 object-cover rounded-lg shrink-0" />
      )}
      <div className="flex-1 min-w-0 text-center sm:text-left">
        <span className="text-xs text-yellow-600 font-semibold uppercase tracking-wide">Patrocinado</span>
        <h4 className="font-bold text-gray-800">{titulo}</h4>
        <p className="text-sm text-gray-600 line-clamp-2">{descripcion}</p>
      </div>
      <button
        onClick={handleClick}
        className="shrink-0 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded-lg text-sm transition"
      >
        Ver más
      </button>
    </div>
  )
}

function PopupAd({ id, titulo, descripcion, imagenUrl, enlaceDestino }: Props) {
  const handleClick = useClickHandler(id, enlaceDestino)
  const [visible, setVisible] = useState(false)
  const storageKey = `compa_popup_ad_seen_${id}`

  useEffect(() => {
    try {
      if (sessionStorage.getItem(storageKey)) return
    } catch {
      // ignorar si no hay sessionStorage
    }
    const timer = setTimeout(() => setVisible(true), 1500)
    return () => clearTimeout(timer)
  }, [storageKey])

  function dismiss() {
    setVisible(false)
    try {
      sessionStorage.setItem(storageKey, '1')
    } catch {
      // ignorar si no hay sessionStorage
    }
  }

  if (!visible) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" role="dialog" aria-labelledby={`popup-ad-${id}`}>
      <div className="bg-white rounded-xl shadow-xl max-w-sm w-full p-5 relative">
        <button
          onClick={dismiss}
          aria-label="Cerrar"
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-2xl leading-none px-2"
        >
          ×
        </button>
        <span className="text-xs text-yellow-600 font-semibold uppercase tracking-wide">Patrocinado</span>
        {imagenUrl && (
          <img src={imagenUrl} alt={titulo} className="w-full h-40 object-cover rounded-lg mt-2 mb-3" />
        )}
        <h4 id={`popup-ad-${id}`} className="font-bold text-gray-800 mb-1">{titulo}</h4>
        <p className="text-sm text-gray-600 mb-4">{descripcion}</p>
        <button
          onClick={() => { handleClick(); dismiss() }}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-lg text-sm transition"
        >
          Ver más
        </button>
      </div>
    </div>
  )
}

export default function AnuncioCard(props: Props) {
  if (props.tipo === 'banner') return <BannerAd {...props} />
  if (props.tipo === 'popup') return <PopupAd {...props} />
  return <CardAd {...props} />
}
