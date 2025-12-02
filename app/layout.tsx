import type { Metadata } from 'next'
import './globals.css'
import Providers from './providers'

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
  alternates: {
    canonical: '/', // <-- TO USTAWIA POPRAWNY KANONICZNY ADRES DLA STRONY GŁÓWNEJ
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className="min-h-screen">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
