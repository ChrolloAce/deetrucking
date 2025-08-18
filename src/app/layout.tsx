import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Anna Marsi LLC | South Florida Trucking Jobs & Driver Opportunities',
  description: 'Family-based trucking company in South Florida hiring drivers. Competitive pay: $0.65/mile single, $0.80/mile team. Weekly pay, 5+ years experience. Always hiring!',
  keywords: 'trucking jobs Florida, driver jobs Miami, truck driver careers, South Florida trucking, CDL jobs, weekly pay trucking',
  authors: [{ name: 'Anna Marsi LLC' }],
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