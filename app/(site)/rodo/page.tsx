import type { Metadata } from "next"
import Script from "next/script"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import SEOExpandableSection from "@/components/SEOExpandableSection"
import gdprBackground from "@/public/images/dokumenty-zmiana-zarzadu-i-wpis-do-krs.webp"
import { brandName, organizationSchema, siteUrl } from "@/lib/seo"

const pageUrl = `${siteUrl}/rodo`

const faqs = [
  {
    question: "Kto jest administratorem danych?",
    answer:
      "Administratorem danych osobowych jest ZmianaKRS z siedzibą w Warszawie. Możesz skontaktować się z nami mailowo: rodo@zmianakrs.pl lub telefonicznie +48 572 234 779.",
    pageId: "rodo-faq-1",
  },
  {
    question: "W jakim celu przetwarzamy dane?",
    answer:
      "Dane przetwarzamy, aby przygotować i złożyć wnioski do KRS, prowadzić korespondencję oraz wystawiać dokumenty księgowe. Na podstawie odrębnej zgody możemy prowadzić komunikację marketingową.",
    pageId: "rodo-faq-2",
  },
  {
    question: "Komu udostępniamy dane?",
    answer:
      "Dane przekazujemy tylko podmiotom wspierającym realizację usługi – notariuszom, kancelariom współpracującym, dostawcom podpisów elektronicznych oraz operatorom systemów teleinformatycznych, z którymi łączą nas umowy powierzenia.",
    pageId: "rodo-faq-3",
  },
]

const structuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
  url: pageUrl,
  publisher: organizationSchema,
}

export const metadata: Metadata = {
  title: "RODO | ZmianaKRS",
  description:
    "Informacje o ochronie danych osobowych w ZmianaKRS – administrator, cele przetwarzania, odbiorcy danych i prawa osób.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "RODO | ZmianaKRS",
    description:
      "Dowiedz się, jak ZmianaKRS realizuje obowiązki wynikające z RODO i jak możesz skorzystać ze swoich praw.",
    url: pageUrl,
    siteName: brandName,
    images: [
      {
        url: `${siteUrl}/images/krs-services.png`,
        width: 1200,
        height: 630,
        alt: "RODO ZmianaKRS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RODO ZmianaKRS",
    description: "Poznaj zasady ochrony danych osobowych stosowane przez ZmianaKRS.",
    images: [`${siteUrl}/images/krs-services.png`],
  },
}

export default function RodoPage() {
  return (
    <div className="relative min-h-screen text-white">
      <Script id="rodo-structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>

      <div
        className="fixed inset-0 -z-10 bg-slate-950/80"
        style={{
          backgroundImage: `url(${gdprBackground.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Navbar />

      <main className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-4 py-20 lg:py-24">
        <section>
          <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Ochrona danych osobowych</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            RODO w ZmianaKRS
          </h1>
          <p className="mt-6 text-lg text-slate-200 md:text-xl">
            Poznaj informacje o tym, jak realizujemy obowiązki wynikające z RODO i jak wspieramy klientów w ochronie danych
            osobowych podczas procesów rejestrowych.
          </p>
        </section>

        <section className="grid gap-10 rounded-3xl bg-slate-900/60 px-8 py-12 backdrop-blur md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Zasady bezpieczeństwa</h2>
            <p className="text-slate-200">
              Korzystamy z szyfrowanych repozytoriów dokumentów, weryfikujemy dostęp do systemów i prowadzimy rejestr czynności
              przetwarzania. Każdy członek zespołu przechodzi cykliczne szkolenia z ochrony danych.
            </p>
          </div>
          <div>
            <ul className="space-y-3 text-sm text-slate-200">
              <li className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                <span>Stosujemy dwuskładnikowe uwierzytelnianie w systemach przechowywania plików i podpisów elektronicznych.</span>
              </li>
              <li className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                <span>Regularnie testujemy procedury odzyskiwania danych i reagowania na incydenty.</span>
              </li>
              <li className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                <span>Zapewniamy audyt ścieżki dokumentu – od przygotowania po archiwizację.</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-6">
          {faqs.map((faq) => (
            <SEOExpandableSection key={faq.pageId} title={faq.question} content={faq.answer} pageId={faq.pageId} />
          ))}
        </section>

        <section className="rounded-3xl bg-amber-500/10 px-10 py-12 text-center text-slate-900 backdrop-blur">
          <h2 className="text-3xl font-semibold text-white">Potrzebujesz wsparcia przy RODO?</h2>
          <p className="mt-4 text-base text-slate-100 md:text-lg">
            Pomożemy przygotować dokumentację powierzenia przetwarzania oraz procedury dla Twojej organizacji.
          </p>
          <a
            className="mt-8 inline-flex items-center justify-center rounded-full bg-amber-500 px-8 py-3 text-base font-semibold text-slate-900 transition hover:bg-amber-400"
            href="mailto:rodo@zmianakrs.pl"
          >
            Skontaktuj się z nami
          </a>
        </section>
      </main>

      <Footer />
    </div>
  )
}
