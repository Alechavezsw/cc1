import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cosecha Creativa - Marketing, Diseño y Desarrollo Web',
  description: 'Agencia de marketing, diseño, contenido y desarrollo web. Transformamos ideas en resultados.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}

