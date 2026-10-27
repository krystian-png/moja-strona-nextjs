import type { AppProps } from "next/app"
import { useRouter } from "next/router"
import Script from "next/script"
import "@/app/globals.css"
import Providers from "@/app/providers"
import CookieBanner from "@/components/CookieBanner"

export default function LocalizedPagesApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()
  const locale = pathname.startsWith("/en") ? "en" : "uk"
  return <>
    {process.env.NEXT_PUBLIC_GA_ID && <>
      <Script id="uk-gtag-consent-default" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',wait_for_update:500});
        try { if (localStorage.getItem('cookie_consent') === 'accepted') {
          gtag('consent','update',{analytics_storage:'granted',ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted'});
        }} catch(e) {}
      `}</Script>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} strategy="afterInteractive" />
      <Script id="uk-gtag-config" strategy="afterInteractive">{`gtag('js', new Date()); gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { send_page_view: true });`}</Script>
    </>}
    <Providers><Component {...pageProps} /><CookieBanner forceLocale={locale} /></Providers>
  </>
}
