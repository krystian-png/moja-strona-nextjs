import type { Metadata } from "next"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import Process from "@/components/Process"
import CTA from "@/components/CTA"
import SEOExpandableSection from "@/components/seo-expandable-section"

export const metadata: Metadata = {
  title: "ZmianaKRS - Strona główna",
  description:
    "Profesjonalna obsługa zmian w KRS. Skorzystaj z naszej pomocy przy aktualizacji danych spółki.",
  openGraph: {
    title: "ZmianaKRS - Strona główna",
    description:
      "Profesjonalna obsługa zmian w KRS. Skorzystaj z naszej pomocy przy aktualizacji danych spółki.",
    url: "/",
    siteName: "ZmianaKRS",
    images: [
      {
        url: "/images/krs-logo.png",
        width: 1200,
        height: 630,
        alt: "ZmianaKRS",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <Process />
      <CTA />
      <SEOExpandableSection
        pageId="home"
        title="Dowiedz się więcej o zmianach w KRS"
        content={`Zmiana danych w KRS wymaga staranności i znajomości przepisów.\nNasi specjaliści zapewniają pełne wsparcie na każdym etapie.`}
      />
    </main>
  )
}
