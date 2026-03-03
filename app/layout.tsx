import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Providers from './providers'
import ContactPopup from '@/components/ContactPopup'
import { siteUrl, organizationSchema, brandName } from '@/lib/seo'

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
  icons: {
    icon: '/favicon.svg',
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  url: siteUrl,
  name: brandName,
  publisher: { '@id': `${siteUrl}/#organization` },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className="min-h-screen">
        <Script id="global-structured-data" type="application/ld+json">
          {JSON.stringify([organizationSchema, websiteSchema])}
        </Script>
        <Providers>
          {children}
          <ContactPopup />
        </Providers>
      </body>
    </html>
  )
}
