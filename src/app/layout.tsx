import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Grand Budapest Transport LLC | Miami Commercial Transport Services',
  description: 'Professional commercial transport services in Miami, Florida. DOT certified logistics company serving Florida and the Southeast with reliable freight solutions.',
  keywords: 'commercial transport, Miami trucking, Florida logistics, freight services, DOT certified, Southeast transport',
  authors: [{ name: 'Grand Budapest Transport LLC' }],
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