import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://moja-strona-nextjs.vercel.app'),
  title: 'Zmiana KRS',
  description: 'Profesjonalna obsługa zmian w KRS.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className="min-h-screen relative">
        <div className="fixed inset-0 bg-slate-900/60 -z-10" />
        {children}
      </body>
    </html>
  )
}
