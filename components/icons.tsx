import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function IconMapPin(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  )
}

export function IconPhone(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 5c0-.6.4-1 1-1h2.7a1 1 0 0 1 1 .8l.8 3.3a1 1 0 0 1-.3 1L7.6 10.6a12 12 0 0 0 5.8 5.8l1.5-1.6a1 1 0 0 1 1-.3l3.3.8a1 1 0 0 1 .8 1V19c0 .6-.4 1-1 1h-1C10.6 20 4 13.4 4 5Z" />
    </svg>
  )
}

export function IconMail(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

export function IconClock(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  )
}

export function IconBuilding(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 21V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v16" />
      <path d="M14 21V10a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11" />
      <path d="M8 8h0M8 12h0M8 16h0" strokeWidth={2.4} />
      <path d="M3 21h18" />
    </svg>
  )
}

export function IconClipboard(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="6" y="4" width="12" height="17" rx="2" />
      <rect x="9" y="2.5" width="6" height="3" rx="1" />
      <path d="M9 11h6M9 15h6" />
    </svg>
  )
}

export function IconNewspaper(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v13a2 2 0 0 0 2 2H6a2 2 0 0 1-2-2V5Z" />
      <path d="M17 8h3v10a2 2 0 0 1-2 2" />
      <path d="M8 8h4M8 11.5h4M8 15h4" />
    </svg>
  )
}

export function IconLink(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9.5 14.5 14.5 9.5" />
      <path d="M11 6.5 12.4 5A4 4 0 1 1 18 10.6L16.5 12" />
      <path d="M13 17.5 11.6 19A4 4 0 1 1 6 13.4L7.5 12" />
    </svg>
  )
}

export function IconScale(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v18M8 21h8" />
      <path d="M5 7h5M14 7h5" />
      <path d="M5 7 2.5 12a2.5 2.5 0 0 0 5 0L5 7ZM19 7l-2.5 5a2.5 2.5 0 0 0 5 0L19 7Z" />
    </svg>
  )
}

export function IconScroll(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M8 3h11v15a2.5 2.5 0 0 1-2.5 2.5h0A2.5 2.5 0 0 1 14 18v-1H5.5A2.5 2.5 0 0 1 3 14.5V6a3 3 0 0 1 3-3h2Z" />
      <path d="M8 3a3 3 0 0 1 3 3v12" />
    </svg>
  )
}

export function IconBanknote(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="6" width="19" height="12" rx="2" />
      <circle cx="12" cy="12" r="2.6" />
      <path d="M6 9h0M18 15h0" strokeWidth={2.4} />
    </svg>
  )
}

export function IconHeartPulse(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20.5 8.5c0 5-8.5 10.5-8.5 10.5S3.5 13.5 3.5 8.5a4.5 4.5 0 0 1 8-2.8 4.5 4.5 0 0 1 9 2.8Z" />
      <path d="M6 11h2l1.5-3 2 5 1.5-2H16" />
    </svg>
  )
}

export function IconBookOpen(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 6.5c-1.5-1.3-4-2-7-2v13c3 0 5.5.7 7 2 1.5-1.3 4-2 7-2V4.5c-3 0-5.5.7-7 2Z" />
      <path d="M12 6.5v13" />
    </svg>
  )
}

export function IconBank(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 10 12 4l9 6" />
      <path d="M5 10v9M9.5 10v9M14.5 10v9M19 10v9" />
      <path d="M3 19h18" />
    </svg>
  )
}

export function IconHandshake(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m2 12 4-4 4 3 3-3 3 3h4" />
      <path d="M6 8v6l4 4 3-3" />
      <path d="m22 12-4 4-2-2" />
    </svg>
  )
}

export function IconGlobe(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </svg>
  )
}

export function IconArrowRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function IconChevronDown(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

export function IconArrowLeft(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M19 12H5M11 6l-6 6 6 6" />
    </svg>
  )
}

export function IconBriefcase(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="7.5" width="18" height="12" rx="2" />
      <path d="M8 7.5V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.5" />
      <path d="M3 12.5h18" />
      <path d="M10.5 12.5h3v1.5h-3z" />
    </svg>
  )
}

export function IconShield(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5 5 6v5.5c0 4.5 3 8.2 7 9.5 4-1.3 7-5 7-9.5V6l-7-2.5Z" />
      <path d="M9 12.2 11.2 14.5 15.5 10" />
    </svg>
  )
}

export function IconWhatsapp(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.5-1.9-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.2-.4.1-.2 0-.3 0-.5-.1-.1-.6-1.5-.8-2-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.1.2-1.2-.1-.2-.3-.3-.6-.4Z" />
      <path d="M12 2.5A9.5 9.5 0 0 0 3.6 17l-1.1 4 4.1-1.1A9.5 9.5 0 1 0 12 2.5Zm0 17.2c-1.5 0-3-.4-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A7.7 7.7 0 1 1 12 19.7Z" />
    </svg>
  )
}

export function IconSparkles(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2 2M16 16l2 2M6 18l2-2M16 8l2-2" />
    </svg>
  )
}

export function IconGrid(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="7.5" height="7.5" rx="1.5" />
      <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" />
      <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" />
      <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" />
    </svg>
  )
}

export function IconUsers(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M2.8 20c.6-3.4 3.2-5.5 6.2-5.5s5.6 2.1 6.2 5.5" />
      <path d="M16 8.2a3.2 3.2 0 1 1 3.6 3.17" />
      <path d="M15 14.7c2.6.3 4.6 2.2 5.2 5.3" />
    </svg>
  )
}

export function IconMegaphone(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 10v4a1 1 0 0 0 1 1h2l1 5h2l-1-5h1l9 4V6l-9 4H4a1 1 0 0 0-1 1Z" />
      <path d="M18 9.5a4 4 0 0 1 0 5" />
    </svg>
  )
}

export function IconMenu(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 6.5h17M3.5 12h17M3.5 17.5h17" />
    </svg>
  )
}

export function IconX(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 5l14 14M19 5L5 19" />
    </svg>
  )
}

export function IconTarget(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" />
    </svg>
  )
}
