'use client'

interface Props {
  id: string
  titulo: string
  descripcion: string
  imagenUrl?: string | null
  enlaceDestino: string
  tipo: string
}

export default function AnuncioCard({ id, titulo, descripcion, imagenUrl, enlaceDestino, tipo }: Props) {
  const handleClick = async () => {
    await fetch(`/api/anuncios/${id}/click`, { method: 'POST' })
    window.open(enlaceDestino, '_blank', 'noopener')
  }

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
