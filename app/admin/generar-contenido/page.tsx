import GeneradorContenido from '@/components/GeneradorContenido'

export default function GenerarContenidoPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">✨ Generar Contenido con IA</h1>
      <p className="text-gray-500 mb-6 text-sm">
        Usa Claude + búsqueda web para generar consulados, trámites y noticias automáticamente.
      </p>
      <GeneradorContenido />
    </div>
  )
}
