import type { Metadata } from "next"
import Script from "next/script"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import SEOExpandableSection from "@/components/SEOExpandableSection"
import aboutBackground from "@/public/images/solidne-fundamenty-prawne-eksperci-krs-doswiadczenie-wnioski-zmiana-wpisu.webp"
import { brandName, organizationSchema, siteUrl } from "@/lib/seo"

const pageUrl = `${siteUrl}/o-nas`

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "O nas - ZmianaKRS",
  url: pageUrl,
  publisher: organizationSchema,
  description:
    "Poznaj zespół ZmianaKRS odpowiedzialny za obsługę zmian w Krajowym Rejestrze Sądowym dla spółek i biur rachunkowych.",
}

export const metadata: Metadata = {
  title: "O nas | ZmianaKRS",
  description:
    "Jesteśmy zespołem prawników, analityków i konsultantów ds. KRS. Od 2015 roku pomagamy spółkom sprawnie przechodzić przez zmiany w rejestrze.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "O nas | ZmianaKRS",
    description:
      "Dowiedz się, jak pracujemy przy obsłudze zmian w KRS. Poznaj proces, wartości i doświadczenie zespołu ZmianaKRS.",
    url: pageUrl,
    siteName: brandName,
    images: [
      {
        url: `${siteUrl}/images/krs-services.png`,
        width: 1200,
        height: 630,
        alt: "Zespół ZmianaKRS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Poznaj ZmianaKRS",
    description: "Sprawdź, kto stoi za sukcesem setek obsłużonych zmian w KRS i jak wspieramy naszych klientów.",
    images: [`${siteUrl}/images/krs-services.png`],
  },
}

const milestones = [
  {
    year: "2015",
    title: "Pierwsze projekty KRS",
    description: "Rozpoczęliśmy działalność jako butikowa kancelaria wspierająca start-upy przy zmianach w rejestrze.",
  },
  {
    year: "2018",
    title: "Automatyzacja dokumentów",
    description: "Zbudowaliśmy własny system szablonów uchwał i powiadomień dla klientów, skracając czas przygotowania akt.",
  },
  {
    year: "2022",
    title: "Zespół interdyscyplinarny",
    description: "Dołączyli do nas analitycy finansowi, by zapewnić wsparcie także przy zmianach kapitałowych i reorganizacjach.",
  },
]

const faqs = [
  {
    title: "Jak wygląda współpraca z klientem?",
    content:
      "Każdy projekt zaczyna się od warsztatu, podczas którego określamy zakres zmian, osoby odpowiedzialne i terminy. Następnie pracujemy sprintami, a o postępie informujemy w dedykowanym panelu lub w ustalonych raportach.",
    pageId: "onas-faq-1",
  },
  {
    title: "Z jakimi branżami pracujecie najczęściej?",
    content:
      "Najwięcej projektów prowadzimy dla spółek technologicznych, e-commerce, firm produkcyjnych oraz biur rachunkowych obsługujących sektor MŚP. Dostosowujemy proces do specyfiki branży.",
    pageId: "onas-faq-2",
  },
]

export default function AboutPage() {
  return (
    <div className="relative min-h-screen text-white">
      <Script id="onas-structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>

      <div
        className="fixed inset-0 -z-10 bg-slate-950/80"
        style={{
          backgroundImage: `url(${aboutBackground.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Navbar />

      <main className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-4 py-20 lg:py-24">
        <section className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Kim jesteśmy</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            Zespół specjalistów KRS, który prowadzi Cię przez zmiany bez stresu
          </h1>
          <p className="mt-6 text-lg text-slate-200 md:text-xl">
            Łączymy doświadczenie prawników, project managerów i konsultantów finansowych. Dzięki temu potrafimy przygotować
            kompleksową dokumentację i zadbać o każdy aspekt wpisu do KRS.
          </p>
        </section>

        <section className="grid gap-6 rounded-3xl bg-slate-900/60 px-8 py-12 backdrop-blur md:grid-cols-3">
          {milestones.map((milestone) => (
            <article key={milestone.year} className="space-y-3">
              <span className="text-sm uppercase tracking-widest text-amber-300">{milestone.year}</span>
              <h2 className="text-xl font-semibold text-white">{milestone.title}</h2>
              <p className="text-sm text-slate-300">{milestone.description}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-10 rounded-3xl bg-slate-900/60 px-8 py-12 backdrop-blur md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Jak pracujemy?</h2>
            <p className="text-slate-200">
              Każdą zmianę traktujemy jak projekt biznesowy – z planem, odpowiedzialnościami i mierzalnym rezultatem. Dbamy o
              komunikację z zarządem, księgowością i kancelarią notarialną, aby wszyscy interesariusze byli na bieżąco.
            </p>
          </div>
          <div>
            <ul className="space-y-3 text-sm text-slate-200">
              <li className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                <span>Dedykowany zespół projektowy z liderem odpowiedzialnym za terminy.</span>
              </li>
              <li className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                <span>Narzędzia online do bezpiecznego przekazywania i akceptacji dokumentów.</span>
              </li>
              <li className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                <span>Retrospektywa po zakończeniu projektu i rekomendacje dalszych działań.</span>
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
          <h2 className="text-3xl font-semibold text-white">Dołącz do grona naszych klientów</h2>
          <p className="mt-4 text-base text-slate-100 md:text-lg">
            Chcesz dowiedzieć się więcej o naszym zespole i metodzie pracy? Zarezerwuj konsultację, a pokażemy Ci, jak możemy
            wesprzeć Twoją spółkę.
          </p>
          <a
            className="mt-8 inline-flex items-center justify-center rounded-full bg-amber-500 px-8 py-3 text-base font-semibold text-slate-900 transition hover:bg-amber-400"
            href="/kontakt"
          >
            Porozmawiaj z nami
          </a>
        </section>
      </main>

      <Footer />
    </div>
  )
}
