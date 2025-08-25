// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Zmiana KRS',
  description: 'Profesjonalna obsługa zmian w KRS.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  )
}
