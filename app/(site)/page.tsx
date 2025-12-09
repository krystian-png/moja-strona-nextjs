import type { Metadata } from "next"
import Script from "next/script"

import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import Trust from "@/components/Trust"
import FAQ from "@/components/FAQ"
import SEOExpandableSection from "@/components/SEOExpandableSection"
import Footer from "@/components/Footer"
import heroBackgroundImage from "@/public/images/zmiana-wpisu-w-krs-tlo-strony-glownej-profesjonalna-poczekalnia-prawnicza.webp"
import { brandName, organizationSchema, siteUrl } from "@/lib/seo"

const pagePath = "/"
const pageUrl = siteUrl

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Zmiana wpisu w KRS bez stresu - profesjonalna obsługa wniosków",
  url: pageUrl,
  description:
    "Potrzebujesz zmienić wpis w KRS? Oferujemy kompleksową obsługę wniosków o zmianę danych spółki w KRS. Szybko, bezpiecznie i w przystępnej cenie.",
  publisher: organizationSchema,
  mainEntity: {
    "@type": "Organization",
    name: brandName,
    url: siteUrl,
  },
  image: `${siteUrl}/images/zmiana-wpisu-w-krs-profesjonalna-obsluga-wnioskow.webp`,
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: `${siteUrl}/images/zmiana-wpisu-w-krs-profesjonalna-obsluga-wnioskow.webp`,
  },
}

export const metadata: Metadata = {
  title:
    "Zmiana wpisu w KRS bez stresu - profesjonalna obsługa wniosków | ZmianaKRS",
  description:
    "Potrzebujesz zmienić wpis w KRS? Oferujemy kompleksową obsługę wniosków o zmianę danych spółki w KRS. Szybko, bezpiecznie i w przystępnej cenie.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Zmiana wpisu w KRS bez stresu - profesjonalna obsługa wniosków | ZmianaKRS",
    description:
      "Potrzebujesz zmienić wpis w KRS? Oferujemy kompleksową obsługę wniosków o zmianę danych spółki w KRS. Szybko, bezpiecznie i w przystępnej cenie.",
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
      "Zmiana wpisu w KRS bez stresu - profesjonalna obsługa wniosków | ZmianaKRS",
    description:
      "Potrzebujesz zmienić wpis w KRS? Oferujemy kompleksową obsługę wniosków o zmianę danych spółki w KRS. Szybko, bezpiecznie i w przystępnej cenie.",
    images: [
      `${siteUrl}/images/zmiana-wpisu-w-krs-profesjonalna-obsluga-wnioskow.webp`,
    ],
  },
}

export default function HomePage() {
  const seoSectionContent = `Zgłoszenie zmiany wpisu w KRS – kompleksowa i profesjonalna obsługa

Oferujemy kompleksową obsługę zmian wpisu w Krajowym Rejestrze Sądowym (KRS), dedykowaną spółkom prawa handlowego, fundacjom i stowarzyszeniom. Zapewniamy pełne wsparcie przy przygotowaniu i złożeniu wniosku o zmianę wpisu w KRS, dzięki czemu aktualizacja danych w rejestrze przedsiębiorców KRS przebiega szybko, poprawnie i bez ryzyka zwrotu wniosku przez sąd rejestrowy.

Nasza usługa obejmuje zmianę danych spółki w KRS – w tym zmianę zarządu, adresu siedziby, PKD, treści umowy spółki oraz innych informacji wymagających ujawnienia w KRS. Dzięki praktycznemu doświadczeniu gwarantujemy, że wniosek o zmianę wpisu w KRS zostanie sporządzony zgodnie z obowiązującymi przepisami, a wpis zmian do KRS zostanie skutecznie dokonany.

Co obejmuje profesjonalna obsługa wniosku o zmianę wpisu w KRS

Nasze usługi KRS obejmują między innymi:

• przygotowanie i złożenie wniosku o zmianę w KRS,
• zmianę zarządu w KRS oraz sposobu reprezentacji,
• zmianę danych rejestrowych w KRS (adres, PKD, kapitał, umowa spółki),
• zgłoszenie zmian do KRS drogą elektroniczną,
• elektroniczne zgłoszenie zmian do KRS przez system S24,
• przygotowanie uchwał, załączników i pozostałych dokumentów rejestrowych,
• pełną obsługę wniosków KRS dla spółek i biur rachunkowych.

Naszym celem jest odciążenie przedsiębiorców i biur rachunkowych z formalności oraz minimalizacja ryzyka błędów skutkujących zwrotem lub oddaleniem wniosku o zmianę wpisu w KRS.

Obsługa zmian w KRS przez system S24

Oferujemy pełną obsługę elektronicznego zgłoszenia zmian do KRS przez system S24. Przygotowujemy dokumenty, wspieramy proces podpisania ich podpisem elektronicznym oraz pomagamy w złożeniu wniosku online. Dzięki temu zmiana wpisu w KRS przez S24 przebiega szybciej, sprawniej i może obniżyć koszty związane z opłatami sądowymi.

Współpraca z biurami rachunkowymi

Zapraszamy do współpracy biura rachunkowe działające w modelu B2B. Oferujemy kompleksową obsługę zmian wpisów w KRS dla klientów biur rachunkowych, zapewniając profesjonalne przygotowanie dokumentów, terminowe złożenie wniosku oraz pełne wsparcie proceduralne w procesie aktualizacji danych w KRS.

Sprawdź koszty zmian wpisu w KRS

Jeżeli chcesz poznać koszt zmiany wpisu w rejestrze przedsiębiorców KRS, wysokość opłat sądowych lub koszt obsługi naszej usługi, przejdź do zakładki:

➡️ Cennik

Znajdziesz tam szczegółowe stawki oraz opłaty obowiązujące przy zmianie wpisu w KRS.`

  return (
    <div className="relative pb-20">
      <Script id="home-structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>

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
        <Features />
        <Trust />
        <FAQ />
        <SEOExpandableSection
          title="Więcej o naszych usługach KRS"
          content={seoSectionContent}
          pageId="home"
        />
      </main>
      <Footer />
    </div>
  )
}
