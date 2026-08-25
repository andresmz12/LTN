import type { Metadata, Viewport } from 'next'
import { Inter, Sora } from 'next/font/google'
import './globals.css'
import SessionProvider from '@/components/SessionProvider'
import RegisterSW from '@/components/RegisterSW'

const inter = Inter({ subsets: ['latin'] })
const sora = Sora({ subsets: ['latin'], variable: '--font-display' })

export const metadata: Metadata = {
  title: 'Compa - Tu guía latina en EE.UU.',
  description: 'Consulados, trámites, noticias y servicios para la comunidad latina en Estados Unidos.',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.png',
    apple: '/icons/apple-touch-icon.png',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Compa',
  },
}

export const viewport: Viewport = {
  themeColor: '#2a3180',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.className} ${sora.variable} bg-gray-50 min-h-screen`}>
        <SessionProvider>{children}</SessionProvider>
        <RegisterSW />
      </body>
    </html>
  )
}
