import type { Metadata } from "next"
import Script from "next/script"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import SEOExpandableSection from "@/components/SEOExpandableSection"
import termsBackground from "@/public/images/archiwum-dokumenty-spolek-zmiana-wpisu-krs.webp"
import { brandName, organizationSchema, siteUrl } from "@/lib/seo"

const pageUrl = `${siteUrl}/regulamin`

const structuredData = {
  "@context": "https://schema.org",
  "@type": "TermsOfService",
  name: "Regulamin świadczenia usług ZmianaKRS",
  url: pageUrl,
  publisher: organizationSchema,
  inLanguage: "pl-PL",
}

export const metadata: Metadata = {
  title: "Regulamin | ZmianaKRS",
  description:
    "Zapoznaj się z warunkami świadczenia usług przez ZmianaKRS – zasady współpracy, płatności oraz odpowiedzialności.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Regulamin | ZmianaKRS",
    description:
      "Warunki współpracy z ZmianaKRS przy obsłudze zmian w Krajowym Rejestrze Sądowym.",
    url: pageUrl,
    siteName: brandName,
    images: [
      {
        url: `${siteUrl}/images/krs-services.png`,
        width: 1200,
        height: 630,
        alt: "Regulamin ZmianaKRS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Regulamin ZmianaKRS",
    description: "Sprawdź zasady współpracy, rozliczeń i odpowiedzialności przy obsłudze zmian w KRS.",
    images: [`${siteUrl}/images/krs-services.png`],
  },
}

const sections = [
  {
    title: "Zakres usług",
    content:
      "Świadczymy usługi polegające na analizie dokumentów, przygotowaniu wniosków do KRS, koordynacji podpisów elektronicznych, a także monitoringu postępowań rejestrowych. Zakres każdej współpracy opisujemy w umowie lub zleceniu.",
    pageId: "terms-1",
  },
  {
    title: "Zasady rozliczeń",
    content:
      "Wynagrodzenie ustalane jest w formie ryczałtu lub stawki godzinowej. Płatność następuje na podstawie faktury VAT z terminem 7 lub 14 dni. Opłaty sądowe i notarialne ponosi klient, chyba że strony uzgodnią inaczej.",
    pageId: "terms-2",
  },
  {
    title: "Odpowiedzialność",
    content:
      "Odpowiadamy za prawidłowość przygotowanych dokumentów i terminowość działań. Nie ponosimy odpowiedzialności za opóźnienia wynikające z działania sądu lub braku wymaganych podpisów ze strony klienta.",
    pageId: "terms-3",
  },
  {
    title: "Reklamacje",
    content:
      "Reklamacje możesz zgłosić mailowo na adres kontakt@zmianakrs.pl. Rozpatrujemy je w ciągu 14 dni roboczych. Jeśli reklamacja jest zasadna, proponujemy stosowne rozwiązanie – poprawę dokumentów, ponowne złożenie wniosku lub rekompensatę kosztów.",
    pageId: "terms-4",
  },
]

export default function TermsPage() {
  return (
    <div className="relative min-h-screen text-white">
      <Script id="terms-structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>

      <div
        className="fixed inset-0 -z-10 bg-slate-950/80"
        style={{
          backgroundImage: `url(${termsBackground.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Navbar />

      <main className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-4 py-20 lg:py-24">
        <section>
          <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Warunki współpracy</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            Regulamin świadczenia usług ZmianaKRS
          </h1>
          <p className="mt-6 text-lg text-slate-200 md:text-xl">
            Regulamin określa zasady współpracy, odpowiedzialności i rozliczeń. Stanowi integralną część umowy podpisywanej z
            klientem.
          </p>
        </section>

        <section className="grid gap-10 rounded-3xl bg-slate-900/60 px-8 py-12 backdrop-blur md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Najważniejsze postanowienia</h2>
            <p className="text-slate-200">
              Przed rozpoczęciem projektu określamy harmonogram, osoby odpowiedzialne i kamienie milowe. Każda zmiana zakresu
              wymaga potwierdzenia mailowego, aby zapewnić przejrzystość współpracy.
            </p>
          </div>
          <div>
            <ul className="space-y-3 text-sm text-slate-200">
              <li className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                <span>Wszystkie dokumenty przekazane przez klienta traktujemy jako poufne i wykorzystujemy wyłącznie do celów realizacji umowy.</span>
              </li>
              <li className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                <span>Wynagrodzenie nie obejmuje kosztów zewnętrznych – opłat sądowych, notarialnych i podatkowych.</span>
              </li>
              <li className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                <span>Klient zobowiązuje się dostarczyć wymagane dokumenty w terminie, aby uniknąć przesunięć w harmonogramie.</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-6">
          {sections.map((section) => (
            <SEOExpandableSection key={section.pageId} title={section.title} content={section.content} pageId={section.pageId} />
          ))}
        </section>

        <section className="rounded-3xl bg-amber-500/10 px-10 py-12 text-center text-slate-900 backdrop-blur">
          <h2 className="text-3xl font-semibold text-white">Chcesz rozpocząć współpracę?</h2>
          <p className="mt-4 text-base text-slate-100 md:text-lg">
            Zapoznaj się z regulaminem i skontaktuj się z nami, aby przygotować umowę dopasowaną do Twojego projektu.
          </p>
          <a
            className="mt-8 inline-flex items-center justify-center rounded-full bg-amber-500 px-8 py-3 text-base font-semibold text-slate-900 transition hover:bg-amber-400"
            href="/kontakt"
          >
            Porozmawiajmy o szczegółach
          </a>
        </section>
      </main>

      <Footer />
    </div>
  )
}
