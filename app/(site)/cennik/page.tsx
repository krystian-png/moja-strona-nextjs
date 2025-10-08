import type { Metadata } from "next"
import Script from "next/script"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import SEOExpandableSection from "@/components/SEOExpandableSection"
import professionalWaitingRoomImage from "@/public/images/profesjonalna-poczekalnia-prawnicza-z-eleganckimi-krzeslami-atmosfera-zaufania-podczas-ustalania-cen.webp"
import { brandName, organizationSchema, siteUrl } from "@/lib/seo"

const pricingTiers = [
  {
    name: "Start",
    price: "od 590 zł netto",
    badge: "Najczęściej wybierany",
    description:
      "Dla spółek przygotowujących pierwszy wniosek o zmianę wpisu lub prostą aktualizację danych w rejestrze.",
    includes: [
      "Analiza dokumentów i wskazanie wymaganych uchwał",
      "Przygotowanie kompletnego wniosku S24 lub Portalu Rejestrów Sądowych",
      "Weryfikacja podpisów elektronicznych i wysyłka do KRS",
    ],
  },
  {
    name: "Rozwój",
    price: "od 890 zł netto",
    description:
      "Pakiet dla spółek przeprowadzających złożone zmiany – zmiana umowy, rozszerzenie PKD, powołanie nowych organów.",
    includes: [
      "Opracowanie projektów uchwał i załączników",
      "Koordynacja podpisów wspólników oraz reprezentacji przed notariuszem",
      "Monitorowanie statusu sprawy i wsparcie przy uzupełnieniach",
    ],
  },
  {
    name: "Premium",
    price: "wycena indywidualna",
    description:
      "Kompleksowa obsługa zmian strukturalnych, reorganizacji grup kapitałowych i projektów wymagających reprezentacji przed sądem.",
    includes: [
      "Strategia zmian i harmonogram prac z dedykowanym opiekunem",
      "Przygotowanie dokumentów do zgłoszeń w urzędach powiązanych (US, GUS, ZUS)",
      "Stały dostęp do konsultacji prawno-księgowych oraz raportowanie postępów",
    ],
  },
]

const faqs = [
  {
    title: "Co wpływa na ostateczną wycenę usługi?",
    content:
      "Na cenę wpływa liczba koniecznych uchwał, złożoność zmian w umowie spółki, konieczność udziału notariusza oraz to, czy przygotowujemy dokumenty do dodatkowych zgłoszeń w urzędach. Przed rozpoczęciem współpracy otrzymujesz kosztorys i harmonogram prac, abyś dokładnie wiedział, ile zapłacisz i na jakim etapie znajdują się działania.",
    pageId: "cennik-faq-1",
  },
  {
    title: "Czy opłata sądowa jest wliczona w cenę?",
    content:
      "Opłaty sądowe oraz za ogłoszenie w Monitorze Sądowym i Gospodarczym są niezależne od naszego wynagrodzenia. Na życzenie możemy opłacić je w Twoim imieniu, aby przyspieszyć procedurę — koszt przelewamy dokładnie w wysokości wynikającej z przepisów.",
    pageId: "cennik-faq-2",
  },
  {
    title: "Czy oferujecie abonament dla stałych klientów?",
    content:
      "Tak. Dla biur rachunkowych, kancelarii i spółek, które regularnie zgłaszają zmiany w KRS, przygotowaliśmy abonament z ryczałtowym rozliczeniem miesięcznym oraz priorytetową obsługą zgłoszeń w trybie ekspresowym.",
    pageId: "cennik-faq-3",
  },
]

const pageUrl = `${siteUrl}/cennik`

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Cennik usług zmiany wpisu w KRS",
  url: pageUrl,
  provider: organizationSchema,
  areaServed: {
    "@type": "Country",
    name: "Polska",
  },
  offers: pricingTiers.map((tier) => {
    const numericPrice = tier.price.match(/\d+/g)?.join("")

    return {
      "@type": "Offer",
      name: tier.name,
      ...(numericPrice
        ? {
            priceSpecification: {
              "@type": "PriceSpecification",
              price: numericPrice,
              priceCurrency: "PLN",
            },
          }
        : {}),
      description: tier.description,
      availability: "https://schema.org/InStock",
    }
  }),
}

export const metadata: Metadata = {
  title: "Cennik obsługi zmian w KRS | ZmianaKRS",
  description:
    "Poznaj przejrzysty cennik obsługi zmian w KRS. Pakiety Start, Rozwój i Premium dopasowane do etapu rozwoju Twojej spółki.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Cennik obsługi zmian w KRS | ZmianaKRS",
    description:
      "Porównaj pakiety obsługi wniosków do KRS i wybierz zakres wsparcia dopasowany do Twojej spółki.",
    url: pageUrl,
    siteName: brandName,
    images: [
      {
        url: `${siteUrl}/images/krs-services.png`,
        width: 1200,
        height: 630,
        alt: "Cennik usług KRS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cennik obsługi zmian w KRS",
    description:
      "Przejrzyste pakiety obsługi zmian w Krajowym Rejestrze Sądowym dla firm i biur rachunkowych.",
    images: [`${siteUrl}/images/krs-services.png`],
  },
}

export default function PricingPage() {
  return (
    <div className="relative min-h-screen text-white">
      <Script id="cennik-structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>

      <div
        className="fixed inset-0 -z-10 bg-slate-900/75"
        style={{
          backgroundImage: `url(${professionalWaitingRoomImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Navbar />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 py-20 lg:py-24">
        <section className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Oferta</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            Przejrzysty cennik obsługi zmian w KRS
          </h1>
          <p className="mt-6 text-lg text-slate-200 md:text-xl">
            Wybierz pakiet, który najlepiej odpowiada zakresowi planowanych zmian. Każde zlecenie rozpoczynamy od
            konsultacji oraz przygotowania harmonogramu działań, aby cały proces był przewidywalny.
          </p>
        </section>

        <section className="grid gap-8 md:grid-cols-3">
          {pricingTiers.map((tier) => (
            <article
              key={tier.name}
              className="flex flex-col gap-6 rounded-2xl bg-slate-900/70 p-8 backdrop-blur"
            >
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-white">{tier.name}</h2>
                {tier.badge ? (
                  <span className="inline-block rounded-full bg-amber-500/20 px-3 py-1 text-xs font-medium text-amber-200">
                    {tier.badge}
                  </span>
                ) : null}
                <p className="text-sm uppercase tracking-widest text-amber-300">{tier.price}</p>
                <p className="text-sm text-slate-300">{tier.description}</p>
              </div>
              <ul className="space-y-3 text-sm text-slate-200">
                {tier.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span aria-hidden="true" className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <a
                  href="/kontakt"
                  className="inline-flex items-center justify-center rounded-lg bg-amber-600 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-500"
                >
                  Zapytaj o termin
                </a>
              </div>
            </article>
          ))}
        </section>

        <section className="grid gap-10 rounded-3xl bg-slate-900/60 px-8 py-12 backdrop-blur md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Co zawiera przygotowanie wniosku?</h2>
            <p className="text-slate-200">
              Pracujemy w modelu projektowym. Wyznaczamy dedykowanego opiekuna, który prowadzi Cię przez każdy etap zmiany –
              od analizy dokumentów, przez przygotowanie uchwał, aż po monitorowanie decyzji sądu. Dokumenty przygotowujemy w
              oparciu o aktualne wzory ministerialne oraz orzecznictwo KRS.
            </p>
          </div>
          <div>
            <ul className="space-y-3 text-sm text-slate-200">
              <li className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                <span>
                  Wsparcie w uzyskaniu podpisów elektronicznych, w tym organizacja podpisów zdalnych dla wspólników przebywających
                  poza Polską.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                <span>
                  Pełna archiwizacja i przekazanie kompletnej dokumentacji w wersji elektronicznej oraz – na życzenie – papierowej.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                <span>
                  Proaktywna komunikacja z sądem rejestrowym i informowanie Cię o każdym statusie sprawy.
                </span>
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
          <h2 className="text-3xl font-semibold text-white">Porozmawiajmy o Twoim projekcie</h2>
          <p className="mt-4 text-base text-slate-100 md:text-lg">
            Opowiedz nam o planowanych zmianach w spółce. W ciągu jednego dnia roboczego przygotujemy harmonogram, listę
            wymaganych dokumentów i kosztorys.
          </p>
          <a
            className="mt-8 inline-flex items-center justify-center rounded-full bg-amber-500 px-8 py-3 text-base font-semibold text-slate-900 transition hover:bg-amber-400"
            href="/kontakt"
          >
            Umów konsultację
          </a>
        </section>
      </main>

      <Footer />
    </div>
  )
}
