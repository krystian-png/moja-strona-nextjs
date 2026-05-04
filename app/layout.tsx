import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Providers from './providers'
import ContactPopup from '@/components/ContactPopup'
import { siteUrl, organizationSchema, brandName } from '@/lib/seo'
import CookieBanner from '@/components/CookieBanner'

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://zmianakrs.pl'
  ),
  title: {
    default: 'ZmianaKRS – zmiana wpisu w KRS dla spółek',
    template: '%s | ZmianaKRS',
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
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              id="gtag-consent-default"
              strategy="afterInteractive"
            >{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('consent', 'default', {
                analytics_storage: 'denied',
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                wait_for_update: 500,
              });
              var _stored = null;
              try { _stored = localStorage.getItem('cookie_consent'); } catch(e){}
              if (_stored === 'accepted') {
                gtag('consent', 'update', {
                  analytics_storage: 'granted',
                  ad_storage: 'granted',
                  ad_user_data: 'granted',
                  ad_personalization: 'granted',
                });
              }
            `}</Script>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-config" strategy="afterInteractive">{`
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { send_page_view: true });
            `}</Script>
          </>
        )}
        <Providers>
          {children}
          <ContactPopup />
          <CookieBanner />
        </Providers>
      </body>
    </html>
  )
}
