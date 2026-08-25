import { cookies } from 'next/headers'
import { ESTADO_COOKIE } from '@/lib/utils'

/** Server-side: read the visitor's detected US state from the cookie set by <LocationBanner>. */
export function getEstadoCookie(): string | null {
  return cookies().get(ESTADO_COOKIE)?.value || null
}
