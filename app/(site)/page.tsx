import type { Metadata } from "next"

import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import Trust from "@/components/Trust"
import FAQ from "@/components/FAQ"
import Footer from "@/components/Footer"
import LandingServices from "@/components/services/LandingServices"
import heroBackgroundImage from "@/public/images/zmiana-wpisu-w-krs-tlo-strony-glownej-profesjonalna-poczekalnia-prawnicza.webp"
import { brandName, siteUrl } from "@/lib/seo"

const pagePath = "/"
const pageUrl = siteUrl

export const metadata: Metadata = {
  title:
    "Zmiana wpisu w KRS dla spółek – od 799 zł, zdalnie | ZmianaKRS",
  description:
    "Profesjonalna zmiana zarządu, adresu, wspólnika lub umowy spółki w KRS. Przygotujemy dokumenty i złożymy wniosek za Ciebie. Szybko, bez błędów, od 799 zł netto.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Zmiana wpisu w KRS dla spółek – od 799 zł, zdalnie | ZmianaKRS",
    description:
      "Profesjonalna zmiana zarządu, adresu, wspólnika lub umowy spółki w KRS. Przygotujemy dokumenty i złożymy wniosek za Ciebie. Szybko, bez błędów, od 799 zł netto.",
    url: pageUrl,
    type: "website",
    siteName: brandName,
    images: [
      {
        url: `${siteUrl}/images/zmiana-wpisu-w-krs-profesjonalna-obsluga-wnioskow.webp`,
        width: 1200,
        height: 630,
        alt: "Zmiana wpisu w KRS bez stresu – profesjonalna obsługa wniosków KRS dla spółek",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Zmiana wpisu w KRS dla spółek – od 799 zł, zdalnie | ZmianaKRS",
    description:
      "Profesjonalna zmiana zarządu, adresu, wspólnika lub umowy spółki w KRS. Przygotujemy dokumenty i złożymy wniosek za Ciebie. Szybko, bez błędów, od 799 zł netto.",
    images: [
      `${siteUrl}/images/zmiana-wpisu-w-krs-profesjonalna-obsluga-wnioskow.webp`,
    ],
  },
}

export default function HomePage() {
  return (
    <div className="relative pb-20">
      <div
        className="fixed inset-0 -z-20"
        style={{
          backgroundImage: `url(${heroBackgroundImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      <div className="fixed inset-0 -z-10 bg-slate-900/60" aria-hidden />

      <Navbar />
      <main className="py-32">
        <Hero />
        <LandingServices />
        <Features />
        <Trust />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
