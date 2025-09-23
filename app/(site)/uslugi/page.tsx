import type { Metadata } from "next"
import Script from "next/script"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import SEOExpandableSection from "@/components/SEOExpandableSection"
import servicesBackground from "@/public/images/outsourcing-zmian-krs-kompleksowa-obsluga-dla-przedsiebiorcow-i-ksiegowych.webp"
import ServicesList from "./ServicesList"
import { brandName, organizationSchema, siteUrl } from "@/lib/seo"

const pageUrl = `${siteUrl}/uslugi`

const keyServices = [
  {
    title: "Zmiana danych w KRS",
    description:
      "Przygotowanie kompletu dokumentów do aktualizacji danych zarządu, wspólników i kapitału zakładowego wraz z reprezentacją przed sądem.",
  },
  {
    title: "Obsługa walnych zgromadzeń",
    description:
      "Wsparcie w organizacji WZ, przygotowaniu uchwał i protokołów, a następnie zgłoszeniu zmian w rejestrze.",
  },
  {
    title: "Reorganizacje i przekształcenia",
    description:
      "Koordynacja zmian formy prawnej, aportów i restrukturyzacji grup kapitałowych w modelu projektowym.",
  },
]

const faqs = [
  {
    title: "Jak wygląda standardowa obsługa?",
    content:
      "Rozpoczynamy od analizy dokumentów i przygotowania harmonogramu. Następnie pracujemy etapami: dokumenty, podpisy, wniosek, monitoring i zamknięcie projektu z przekazaniem archiwum.",
    pageId: "services-faq-1",
  },
  {
    title: "Czy pomagacie w sprawach pilnych?",
    content:
      "Tak. Dla zgłoszeń wymagających szybkiej reakcji uruchamiamy tryb ekspresowy – dokumenty trafiają do podpisu w ciągu 24h, a wniosek składamy po otrzymaniu wszystkich pełnomocnictw.",
    pageId: "services-faq-2",
  },
]

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Obsługa zmian w KRS",
  url: pageUrl,
  provider: organizationSchema,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Zakres usług",
    itemListElement: keyServices.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
      },
    })),
  },
}

export const metadata: Metadata = {
  title: "Usługi KRS | ZmianaKRS",
  description:
    "Kompleksowa obsługa zmian w KRS – od przygotowania dokumentów po monitorowanie wpisu. Sprawdź, jak możemy pomóc Twojej spółce.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Usługi KRS | ZmianaKRS",
    description:
      "Zmiana zarządu, aktualizacja umowy spółki, rejestracja prokury – poznaj pełny zakres usług ZmianaKRS.",
    url: pageUrl,
    siteName: brandName,
    images: [
      {
        url: `${siteUrl}/images/krs-services.png`,
        width: 1200,
        height: 630,
        alt: "Usługi ZmianaKRS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Usługi KRS",
    description: "Profesjonalna obsługa zmian w Krajowym Rejestrze Sądowym dla spółek i biur rachunkowych.",
    images: [`${siteUrl}/images/krs-services.png`],
  },
}

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen text-white">
      <Script id="services-structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>

      <div
        className="fixed inset-0 -z-10 bg-slate-950/80"
        style={{
          backgroundImage: `url(${servicesBackground.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Navbar />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 py-20 lg:py-24">
        <section className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Zakres wsparcia</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            Usługi obsługi zmian w KRS
          </h1>
          <p className="mt-6 text-lg text-slate-200 md:text-xl">
            Zapewniamy kompleksowe wsparcie – od przygotowania uchwał i pełnomocnictw, przez koordynację podpisów, po monitorowanie
            wpisu w Krajowym Rejestrze Sądowym.
          </p>
        </section>

        <section className="grid gap-8 md:grid-cols-3">
          {keyServices.map((service) => (
            <article key={service.title} className="rounded-2xl bg-slate-900/70 p-8 backdrop-blur">
              <h2 className="text-xl font-semibold text-white">{service.title}</h2>
              <p className="mt-4 text-sm text-slate-300">{service.description}</p>
            </article>
          ))}
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Aktualna lista usług</h2>
          <ServicesList />
        </section>

        <section className="grid gap-10 rounded-3xl bg-slate-900/60 px-8 py-12 backdrop-blur md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Jak przebiega współpraca?</h2>
            <p className="text-slate-200">
              Pracujemy według sprawdzonego procesu obejmującego analizę stanu prawnego, przygotowanie dokumentów, pozyskanie podpisów
              oraz koordynację wysyłki i monitoringu sprawy.
            </p>
          </div>
          <div>
            <ul className="space-y-3 text-sm text-slate-200">
              <li className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                <span>Stały kontakt z dedykowanym opiekunem – telefonicznie, mailowo i w panelu klienta.</span>
              </li>
              <li className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                <span>Możliwość reprezentacji przed sądem rejestrowym na podstawie pełnomocnictwa.</span>
              </li>
              <li className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                <span>Pełna dokumentacja powykonawcza wraz z instrukcją przechowywania i dalszych zgłoszeń.</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-6">
          {faqs.map((faq) => (
            <SEOExpandableSection key={faq.pageId} title={faq.title} content={faq.content} pageId={faq.pageId} />
          ))}
        </section>

        <section className="rounded-3xl bg-amber-500/10 px-10 py-12 text-center text-slate-900 backdrop-blur">
          <h2 className="text-3xl font-semibold text-white">Potrzebujesz indywidualnej oferty?</h2>
          <p className="mt-4 text-base text-slate-100 md:text-lg">
            Przekaż nam zakres planowanych zmian. Przygotujemy harmonogram, listę dokumentów oraz wycenę dostosowaną do Twoich potrzeb.
          </p>
          <a
            className="mt-8 inline-flex items-center justify-center rounded-full bg-amber-500 px-8 py-3 text-base font-semibold text-slate-900 transition hover:bg-amber-400"
            href="/kontakt"
          >
            Porozmawiajmy o projekcie
          </a>
        </section>
      </main>

      <Footer />
    </div>
  )
}
