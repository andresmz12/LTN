import Link from 'next/link'

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 shrink-0 ${className}`}>
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect width="32" height="32" rx="9" fill="#2a3180" />
        <path
          d="M20.5 11.2a5.4 5.4 0 1 0 0 9.6"
          stroke="white"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <circle cx="21.5" cy="16" r="1.6" fill="#ee6d17" />
      </svg>
      <span className="text-xl font-display font-bold text-brand-800 tracking-tight">Compa</span>
    </Link>
  )
}
