import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LUCMAR - Transporte Comercial | Entregas Seguras y en Tiempo',
  description: 'Empresa líder en transporte comercial con más de 40 años de experiencia. Servicios de logística, seguimiento satelital y entregas seguras en todo el corredor argentino.',
  keywords: 'transporte comercial, logística, Argentina, camiones, entregas, seguimiento satelital',
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