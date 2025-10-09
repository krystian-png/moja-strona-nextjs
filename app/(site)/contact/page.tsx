import type { Metadata } from "next"
import Script from "next/script"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import SEOExpandableSection from "@/components/SEOExpandableSection"
import contactBackground from "@/public/images/contact-bg.webp"
import { brandName, organizationSchema, siteUrl } from "@/lib/seo"

const pageUrl = `${siteUrl}/contact`

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Kontakt z zespołem ZmianaKRS",
  url: pageUrl,
  publisher: organizationSchema,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+48572234779",
    email: "kontakt@zmianakrs.pl",
    contactType: "customer service",
    areaServed: "PL",
    availableLanguage: ["pl-PL"],
  },
}

export const metadata: Metadata = {
  title: "Kontakt | ZmianaKRS",
  description:
    "Skontaktuj się z zespołem ZmianaKRS. Konsultacja telefoniczna, spotkanie online lub wsparcie mailowe w zakresie zmian w KRS.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Kontakt | ZmianaKRS",
    description:
      "Porozmawiaj z ekspertem ds. zmian w KRS. Telefon, e-mail oraz formularz konsultacyjny dostępny w jednym miejscu.",
    url: pageUrl,
    siteName: brandName,
    images: [
      {
        url: `${siteUrl}/images/krs-services.png`,
        width: 1200,
        height: 630,
        alt: "Kontakt z zespołem ZmianaKRS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt ZmianaKRS",
    description: "Zarezerwuj konsultację i dowiedz się, jak możemy wesprzeć Twoją spółkę przy zmianach w KRS.",
    images: [`${siteUrl}/images/krs-services.png`],
  },
}

const faqs = [
  {
    title: "Jak wygląda pierwsza konsultacja?",
    content:
      "Rozmawiamy o zakresie zmian w spółce, analizujemy aktualny wpis w KRS i wskazujemy wymagane dokumenty. Po spotkaniu otrzymujesz e-mail z podsumowaniem i propozycją harmonogramu.",
    pageId: "contact-faq-1",
  },
  {
    title: "Czy mogę przekazać dokumenty online?",
    content:
      "Tak. Korzystamy z bezpiecznego repozytorium plików. Wystarczy, że prześlesz skany podpisanych uchwał i pełnomocnictw, a resztą zajmuje się nasz zespół.",
    pageId: "contact-faq-2",
  },
]

const contactCards = [
  {
    title: "Zadzwoń",
    value: "+48 572 234 779",
    href: "tel:+48572234779",
    helper: "Poniedziałek – piątek, 8:00-18:00",
  },
  {
    title: "Napisz",
    value: "kontakt@zmianakrs.pl",
    href: "mailto:kontakt@zmianakrs.pl",
    helper: "Odpowiadamy w ciągu jednego dnia roboczego",
  },
  {
    title: "Umów spotkanie",
    value: "Konsultacja online",
    href: "/uslugi",
    helper: "Zarezerwuj termin i poznaj rekomendowany zakres prac",
  },
]

export default function ContactPage() {
  return (
    <div className="relative min-h-screen text-white">
      <Script id="contact-structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>

      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `linear-gradient(rgba(2, 6, 23, 0.88), rgba(2, 6, 23, 0.88)), url(${contactBackground.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <Navbar />

      <main className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-4 py-20 lg:py-24">
        <section className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Skontaktuj się z nami</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            Porozmawiajmy o Twojej zmianie w KRS
          </h1>
          <p className="mt-6 text-lg text-slate-200 md:text-xl">
            Nasi specjaliści pomagają w zmianach zarządu, aktualizacjach umowy spółki, reorganizacji udziałów i wielu innych
            procesach rejestrowych. Wybierz dogodną formę kontaktu, aby uzyskać indywidualną ofertę.
          </p>
        </section>

        <section className="grid gap-8 md:grid-cols-3">
          {contactCards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col items-center gap-2 rounded-2xl bg-slate-900/70 px-6 py-8 text-center backdrop-blur"
            >
              <h2 className="text-xl font-semibold text-white">{card.title}</h2>
              <a
                href={card.href}
                className="text-lg font-medium text-amber-200 transition hover:text-amber-100"
              >
                {card.value}
              </a>
              <p className="text-sm text-slate-300">{card.helper}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-10 rounded-3xl bg-slate-900/60 px-8 py-12 text-left backdrop-blur md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Dlaczego warto działać z nami?</h2>
            <p className="text-slate-200">
              Zapewniamy wsparcie merytoryczne oraz technologiczne – przygotujemy dokumenty, zbierzemy podpisy, a także
              przeprowadzimy Cię przez elektroniczne złożenie wniosku. Jesteśmy do dyspozycji na każdym etapie postępowania.
            </p>
          </div>
          <div>
            <ul className="space-y-3 text-sm text-slate-200">
              <li className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                <span>Dedykowany opiekun projektu dostępny telefonicznie i mailowo.</span>
              </li>
              <li className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                <span>Transparentne rozliczenie – wiesz, za co płacisz i jakie dokumenty przygotowujemy.</span>
              </li>
              <li className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                <span>Stały monitoring statusu sprawy i informowanie o kolejnych krokach.</span>
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
          <h2 className="text-3xl font-semibold text-white">Zarezerwuj 30-minutową konsultację</h2>
          <p className="mt-4 text-base text-slate-100 md:text-lg">
            W trakcie spotkania omówimy dokumenty, terminy i koszty. Jeśli zdecydujesz się na współpracę, przygotujemy pełną
            checklistę zadań.
          </p>
          <a
            className="mt-8 inline-flex items-center justify-center rounded-full bg-amber-500 px-8 py-3 text-base font-semibold text-slate-900 transition hover:bg-amber-400"
            href="/cennik"
          >
            Sprawdź dostępne pakiety
          </a>
        </section>
      </main>

      <Footer />
    </div>
  )
}
