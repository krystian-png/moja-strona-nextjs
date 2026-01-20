import type { Metadata } from 'next'
import './globals.css'
import Providers from './providers'
import ContactPopup from '@/components/ContactPopup'

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://moja-strona-nextjs.vercel.app'
  ),
  title: {
    default: 'Zmiana KRS – zmiana wpisu w KRS dla spółek',
    template: '%s | Zmiana KRS',
  },
  description:
    'Profesjonalna obsługa zmian w KRS dla spółek – zmiana zarządu, umowy spółki, danych w KRS.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className="min-h-screen">
        <Providers>
          {children}
          <ContactPopup />
        </Providers>
      </body>
    </html>
  )
}
