import type { Metadata } from "next"
import Script from "next/script"

import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import Trust from "@/components/Trust"
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
  const seoSectionContent = `Profesjonalna obsługa zmian wpisu w KRS dla spółek i biur rachunkowych

Oferujemy kompleksową pomoc w zmianie wpisu w Krajowym Rejestrze Sądowym (KRS), dostosowaną do potrzeb spółek prawa handlowego, fundacji i stowarzyszeń. Przygotowujemy i składamy wniosek o zmianę w KRS, pomagamy w aktualizacji danych w KRS, zmianie danych spółki w KRS oraz rejestracji zmian w rejestrze sądowym. Nasze usługi KRS dla spółek obejmują pełną obsługę formalności, dzięki czemu proces zgłoszenia zmiany do KRS jest szybki i bezproblemowy.

Specjalizujemy się w obsłudze wniosków KRS, oferując przygotowanie uchwał do KRS i wszystkich niezbędnych dokumentów rejestrowych spółki. Nasz zespół doradza, jak zmienić dane w KRS i jak skutecznie złożyć wniosek o zmianę wpisu w KRS, minimalizując ryzyko odrzucenia przez sąd rejestrowy. Zapewniamy pełne wsparcie przy zmianie umowy spółki KRS – w tym zmianie PKD, adresu siedziby, kapitału zakładowego, składu wspólników i zarządu w KRS.

Zakres naszych usług obejmuje między innymi:

przygotowanie i składanie wniosku o zmianę w KRS

zmianę zarządu w KRS

zmianę danych rejestracyjnych w KRS

zgłoszenie zmian do KRS drogą elektroniczną lub tradycyjną

elektroniczne zgłoszenie zmian do KRS przez system S24

wpis zmian do KRS w rejestrze sądowym

przygotowanie uchwał i dokumentów do KRS

pełną obsługę wniosków KRS dla spółek i biur rachunkowych

Obsługa zmian w KRS przez system S24

Oferujemy również pełną obsługę elektronicznego zgłoszenia zmian do KRS poprzez system S24. Przygotowujemy dokumenty i pomagamy w składaniu wniosków online, co znacząco skraca czas rejestracji zmian i obniża koszty opłat sądowych. Elektroniczne wnioski KRS to wygodne i nowoczesne rozwiązanie dla przedsiębiorców, którzy cenią szybkość i efektywność.

Współpraca z biurami rachunkowymi

Zapraszamy do współpracy biura rachunkowe. Oferujemy partnerstwo w zakresie obsługi zmian KRS dla biur rachunkowych, zapewniając kompleksowe wsparcie ich klientów w procesie aktualizacji danych spółki w KRS. Proponujemy atrakcyjne warunki B2B, indywidualną wycenę i gwarancję profesjonalnej obsługi wniosków KRS.

Skontaktuj się z nami, aby dowiedzieć się więcej o naszych usługach KRS dla spółek i biur rachunkowych. Z nami zmiana danych w KRS, zgłoszenie zmian sądowi rejestrowemu i przygotowanie dokumentów rejestrowych spółki stają się proste, szybkie i bezpieczne.`

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
