'use client'

import { IconWhatsapp } from '@/components/icons'

interface Props {
  text: string
  path: string
  className?: string
}

export default function ShareButton({ text, path, className }: Props) {
  function share() {
    const url = `${window.location.origin}${path}`
    const message = `${text} ${url}`
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank', 'noopener')
  }

  return (
    <button
      type="button"
      onClick={share}
      className={
        className ||
        'inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-4 py-2 rounded-xl hover:bg-[#1fb955] transition'
      }
    >
      <IconWhatsapp className="w-4 h-4" />
      Compartir por WhatsApp
    </button>
  )
}
