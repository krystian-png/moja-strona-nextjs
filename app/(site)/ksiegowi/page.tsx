import type { Metadata } from "next"
import Script from "next/script"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import SEOExpandableSection from "@/components/SEOExpandableSection"
import accountantsBackground from "@/public/images/miejsce-pracy-ksiegowego-kawa-dokumenty-atmosfera-zaufania-profesjonalna-wspolpraca-obsluga-krs.webp"
import { brandName, organizationSchema, siteUrl } from "@/lib/seo"

const pageUrl = `${siteUrl}/ksiegowi`

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Obsługa zmian KRS dla biur rachunkowych",
  url: pageUrl,
  provider: organizationSchema,
  serviceType: "White-label KRS filing",
  audience: {
    "@type": "Audience",
    audienceType: "Biura rachunkowe i kancelarie",
  },
}

export const metadata: Metadata = {
  title: "Obsługa zmian KRS dla księgowych | ZmianaKRS",
  description:
    "Zyskaj partnera do obsługi wniosków KRS. White-label dla biur rachunkowych, raportowanie postępów i wsparcie ekspertów.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Obsługa zmian KRS dla księgowych | ZmianaKRS",
    description:
      "Przekaż przygotowanie dokumentów i składanie wniosków KRS zespołowi ZmianaKRS. Transparentne zasady współpracy B2B.",
    url: pageUrl,
    siteName: brandName,
    images: [
      {
        url: `${siteUrl}/images/krs-services.png`,
        width: 1200,
        height: 630,
        alt: "Obsługa zmian KRS dla biur rachunkowych",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wsparcie KRS dla księgowych",
    description:
      "Deleguj przygotowanie i złożenie wniosków KRS ekspertom. White-label dla biur rachunkowych i kancelarii.",
    images: [`${siteUrl}/images/krs-services.png`],
  },
}

const benefits = [
  {
    title: "White-label",
    description:
      "Pracujemy w tle – komunikację z klientem możesz prowadzić pod własną marką, a my przygotujemy komplet dokumentów do podpisu.",
  },
  {
    title: "Priorytetowe terminy",
    description:
      "Rezerwujemy czas w kalendarzu zespołu na zgłoszenia Twoich klientów. W pilnych sprawach rozpoczynamy działania w 24h.",
  },
  {
    title: "Statusy w czasie rzeczywistym",
    description:
      "Otrzymujesz dostęp do panelu z listą spraw oraz historią komunikacji z sądem. Możesz udostępnić statusy swoim klientom.",
  },
]

const faqs = [
  {
    title: "Jak wygląda wdrożenie współpracy?",
    content:
      "Podpisujemy umowę B2B oraz NDA, ustalamy proces przekazywania danych klientów i tworzymy szablony dokumentów dostosowane do Twoich standardów. Pierwsze zlecenie realizujemy wspólnie, aby uspójnić komunikację.",
    pageId: "ksiegowi-faq-1",
  },
  {
    title: "Czy mogę rozliczać się ryczałtowo?",
    content:
      "Tak. Oferujemy rozliczenie abonamentowe z określonym limitem spraw miesięcznie lub elastyczny pakiet godzinowy, który możesz wykorzystać na konsultacje i przygotowanie dokumentów.",
    pageId: "ksiegowi-faq-2",
  },
]

export default function AccountantsPage() {
  return (
    <div className="relative min-h-screen text-white">
      <Script id="ksiegowi-structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>

      <div
        className="fixed inset-0 -z-10 bg-slate-950/80"
        style={{
          backgroundImage: `url(${accountantsBackground.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Navbar />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 py-20 lg:py-24">
        <section className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Partner dla biur rachunkowych</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            Kompleksowa obsługa zmian KRS dla Twoich klientów
          </h1>
          <p className="mt-6 text-lg text-slate-200 md:text-xl">
            Odciąż swój zespół i zyskaj pewność, że każdy wniosek jest przygotowany zgodnie z aktualnymi wymogami. Dostarczamy
            dokumenty gotowe do podpisu oraz dbamy o komunikację z sądem rejestrowym.
          </p>
        </section>

        <section className="grid gap-8 md:grid-cols-3">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="rounded-2xl bg-slate-900/70 p-8 backdrop-blur">
              <h2 className="text-xl font-semibold text-white">{benefit.title}</h2>
              <p className="mt-4 text-sm text-slate-300">{benefit.description}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-10 rounded-3xl bg-slate-900/60 px-8 py-12 backdrop-blur md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Standard obsługi white-label</h2>
            <p className="text-slate-200">
              Działamy w Twoich procesach – przygotowujemy checklisty dokumentów dla klientów, ustalamy sposób podpisywania i
              raportujemy każdy etap. Możesz zaangażować nas zarówno w pojedyncze zgłoszenie, jak i stałą obsługę.
            </p>
          </div>
          <div>
            <ul className="space-y-3 text-sm text-slate-200">
              <li className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                <span>Szablony dokumentów dostosowane do identyfikacji Twojej marki.</span>
              </li>
              <li className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                <span>Stały opiekun wdrożony w specyfikę klientów i branżę.</span>
              </li>
              <li className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                <span>Raportowanie SLA oraz rekomendacje zmian w procedurach.</span>
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
          <h2 className="text-3xl font-semibold text-white">Zostań naszym partnerem</h2>
          <p className="mt-4 text-base text-slate-100 md:text-lg">
            Porozmawiajmy o modelu współpracy, który najlepiej uzupełni usługi Twojego biura rachunkowego. Przygotujemy ofertę
            oraz materiały startowe dla Twojego zespołu.
          </p>
          <a
            className="mt-8 inline-flex items-center justify-center rounded-full bg-amber-500 px-8 py-3 text-base font-semibold text-slate-900 transition hover:bg-amber-400"
            href="/kontakt"
          >
            Umów spotkanie partnerskie
          </a>
        </section>
      </main>

      <Footer />
    </div>
  )
}
