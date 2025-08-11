import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LUCMAR - Commercial Transport | Safe & On-Time Deliveries',
  description: 'Leading commercial transport company with over 40 years of experience. Logistics services, satellite tracking, and safe deliveries throughout the Argentine corridor.',
  keywords: 'commercial transport, logistics, Argentina, trucks, deliveries, satellite tracking',
  authors: [{ name: 'LUCMAR' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}