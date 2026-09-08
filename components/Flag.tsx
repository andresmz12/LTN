interface Props {
  pais: string
  className?: string
}

/**
 * Windows no incluye los emojis de banderas en la fuente del sistema
 * (decisión deliberada de Microsoft) — ahí solo se ve el código de país
 * como texto ("MX", "CO"...) en vez de la bandera. Usamos SVGs propios
 * (public/flags) en vez de un emoji o un CDN externo, para que se vea
 * igual en todos los sistemas operativos y también funcione sin conexión.
 */
export default function Flag({ pais, className = 'w-5 h-[14px]' }: Props) {
  return (
    <img
      src={`/flags/${pais.toLowerCase()}.svg`}
      alt=""
      loading="lazy"
      className={`inline-block rounded-[2px] object-cover shrink-0 align-middle ${className}`}
    />
  )
}
