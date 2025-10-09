import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import SEOExpandableSection from "@/components/SEOExpandableSection"
import servicesBackground from "@/public/images/profesjonalne-biuro-obslugi-krs-eksperci-zmiany-wpisu-rejestr-sadowy-doswiadczenie.webp"
import ServicesList from "./ServicesList"
import { brandName, organizationSchema, siteUrl } from "@/lib/seo"
import type { LucideIcon } from "lucide-react"
import {
  ArrowRight,
  Building,
  CheckCircle,
  Clock,
  FileText,
  Mail,
  Phone,
  RefreshCw,
  Shield,
  Users,
} from "lucide-react"

const pageUrl = `${siteUrl}/uslugi`

type MainService = {
  title: string
  description: string
  price: string
  features: string[]
  included?: string[]
  note?: string
  popular?: boolean
  icon: LucideIcon
}

type Benefit = {
  icon: LucideIcon
  title: string
  description: string
}

const mainServices: MainService[] = [
  {
    title: "Zmiana wpisu w KRS",
    description:
      "Składanie wniosków o zmianę w KRS może być czasochłonne i pełne pułapek formalnych. My robimy to za Ciebie – zgodnie z obowiązującymi przepisami, bez zbędnych błędów i opóźnień.",
    price: "od 799 zł netto",
    features: [
      "Zmiany zarządu (powołanie, odwołanie, rezygnacja)",
      "Zmiany adresu siedziby spółki",
      "Zmiany przedmiotu działalności (PKD)",
      "Zmiany wspólników (zbycie udziałów)",
      "Zmiany sposobu reprezentacji spółki",
      "Aktualizacji listy wspólników",
      "Wpisania lub zmiany prokurenta",
    ],
    included: [
      "Przygotowanie lub sprawdzenie dokumentów do KRS",
      "Opracowanie kompletnego wniosku o zmianę wpisu",
      "Złożenie wniosku elektronicznie przez PRS",
      "Bieżąca komunikacja z sądem",
    ],
    popular: true,
    icon: RefreshCw,
  },
  {
    title: "Zakładanie spółek z o.o. przez S24",
    description:
      "Dla prostych struktur właścicielskich i standardowych umów spółki, system S24 umożliwia szybkie założenie spółki online.",
    price: "od 699 zł netto",
    features: [
      "Przygotowanie wszystkich wymaganych dokumentów",
      "Zakładanie wniosku w systemie S24",
      "Przesyłanie do podpisu przez wspólników",
      "Instrukcje podpisu i opłacenia dokumentów",
    ],
    note:
      "Klienci muszą posiadać konta w systemie S24 i profil zaufany / podpis kwalifikowany",
    icon: FileText,
  },
  {
    title: "Zakładanie spółek z o.o. przez notariusza",
    description:
      "Dla klientów, którzy potrzebują niestandardowej umowy spółki, rekomendujemy zakładanie spółki z o.o. w formie aktu notarialnego.",
    price: "od 1199 zł netto",
    features: [
      "Przygotowanie wszystkich dokumentów prawnych",
      "Wsparcie w projektowaniu umowy spółki",
      "Organizacja spotkania z notariuszem",
      "Składanie wniosku w KRS po podpisaniu aktu",
    ],
    included: [
      "Przygotowanie dokumentów do notariusza",
      "Opracowanie projektu umowy spółki",
      "Złożenie wniosku o wpis do KRS",
      "Otrzymanie zaświadczeń o wpisie",
    ],
    icon: Building,
  },
  {
    title: "Pomoc w przygotowaniu dokumentów Zwyczajnego Zgromadzenia Wspólników",
    description:
      "Kompleksowe wsparcie w przygotowaniu dokumentów wymaganych do zatwierdzenia rocznego sprawozdania finansowego i spełnienia obowiązku złożenia ich do KRS.",
    price: "499 zł netto",
    features: [
      "Sporządzenie protokołu Zwyczajnego Zgromadzenia Wspólników z wszystkimi wymaganymi uchwałami",
      "Przygotowanie wzoru sprawozdania Zarządu z działalności",
      "Załączenie rocznego sprawozdania finansowego klienta do protokołu",
      "Pomoc w złożeniu kompletu dokumentów do Repozytorium Dokumentów Finansowych KRS",
    ],
    note:
      "Usługa przeznaczona dla spółek z o.o. chcących w terminie i bez błędów wypełnić obowiązki rejestrowe i uniknąć kar za opóźnienie lub brak złożenia dokumentów",
    icon: FileText,
  },
]

const benefits: Benefit[] = [
  {
    icon: Clock,
    title: "Oszczędność czasu",
    description:
      "Zajmujemy się wszystkimi formalnościami, dzięki czemu możesz skupić się na prowadzeniu swojego biznesu.",
  },
  {
    icon: Shield,
    title: "Pewność prawna",
    description:
      "Wszystkie dokumenty są przygotowywane zgodnie z aktualnymi przepisami prawa.",
  },
  {
    icon: Users,
    title: "Doświadczenie",
    description:
      "Wieloletnie doświadczenie w obsłudze KRS gwarantuje profesjonalną realizację zleceń.",
  },
]

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Profesjonalne usługi zmian wpisu w KRS",
  url: pageUrl,
  description:
    "Kompleksowa obsługa wniosków o zmianę wpisu w KRS wraz z zakładaniem spółek i przygotowaniem dokumentów zgromadzeń wspólników.",
  provider: organizationSchema,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Zakres usług KRS",
    itemListElement: mainServices.map((service) => ({
      "@type": "Offer",
      name: service.title,
      description: service.description,
    })),
  },
}

export const metadata: Metadata = {
  title: "Usługi zmian w KRS | ZmianaKRS",
  description:
    "Profesjonalna obsługa zmian wpisu w KRS, zakładania spółek oraz przygotowania dokumentów zgromadzeń wspólników.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Usługi zmian w KRS | ZmianaKRS",
    description:
      "Kompleksowa obsługa wniosków o zmianę wpisu w KRS, rejestracji spółek z o.o. oraz dokumentów zgromadzeń wspólników.",
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
    title: "Usługi zmian w KRS",
    description:
      "Dowiedz się, jak wspieramy spółki w zmianach wpisu w KRS, rejestracji spółek i przygotowaniu dokumentów zgromadzeń.",
    images: [`${siteUrl}/images/krs-services.png`],
  },
}

const seoSectionContent = `Nasze usługi – kompleksowa obsługa zmian w KRS dla spółek i biur rachunkowych

Świadczymy pełen zakres usług związanych ze zmianami danych w KRS dla spółek prawa handlowego, fundacji i stowarzyszeń. Pomagamy w przygotowaniu dokumentów, sporządzaniu uchwał i składaniu wniosków do sądu rejestrowego. Zapewniamy kompleksową obsługę wniosków KRS – od analizy potrzeb klienta, przez przygotowanie dokumentów, aż po złożenie wniosku i monitorowanie wpisu zmian do KRS.

Specjalizujemy się w profesjonalnej pomocy przy zmianie wpisu w KRS – niezależnie od zakresu zmian. Doradzamy, jak zmienić dane w KRS, przygotowujemy uchwały do KRS i pomagamy w prawidłowym sporządzeniu wniosku o zmianę w KRS. Naszym celem jest zapewnienie szybkiego, bezpiecznego i zgodnego z przepisami przeprowadzenia całego procesu.

Zakres naszych usług obejmuje między innymi:

przygotowanie i składanie wniosku o zmianę w KRS
zmianę zarządu w KRS
zmianę danych rejestracyjnych spółki w KRS
zmianę adresu siedziby, PKD, wspólników lub kapitału zakładowego
zgłoszenie zmian do KRS drogą elektroniczną lub tradycyjną
elektroniczne zgłoszenie zmian do KRS przez system S24
wpis zmian do KRS w rejestrze sądowym
przygotowanie uchwał i dokumentów do KRS
obsługę wniosków KRS dla spółek i biur rachunkowych

Elektroniczne zgłoszenie zmian do KRS – system S24

Ułatwiamy również elektroniczne zgłoszenie zmian do KRS poprzez system S24. Przygotowujemy wszystkie wymagane dokumenty i pomagamy w ich poprawnym złożeniu online. System S24 to szybki i wygodny sposób na rejestrację zmian w KRS, oszczędzający czas i ograniczający formalności.

Współpraca z biurami rachunkowymi

Oferujemy dedykowaną obsługę zmian w KRS dla biur rachunkowych. Wspieramy ich klientów w procesie aktualizacji danych spółki w KRS, przygotowując kompletne dokumenty i wnioski. Proponujemy atrakcyjne warunki współpracy, indywidualne podejście i profesjonalne wsparcie na każdym etapie obsługi wniosków KRS.

Skontaktuj się z nami i poznaj szczegóły naszej oferty. Dzięki nam zmiana danych w KRS, zgłoszenie zmian sądowi rejestrowemu i przygotowanie dokumentów rejestrowych spółki przebiegają sprawnie, bezpiecznie i zgodnie z przepisami.`

export default function ServicesPage() {
  const popularService = mainServices[0]
  const PopularServiceIcon = popularService.icon
  const closingService = mainServices[3]

  return (
    <div className="relative min-h-screen text-white">
      <Script id="services-structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>

      <div
        className="fixed inset-0 -z-20"
        style={{
          backgroundImage: `url(${servicesBackground.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      <div className="fixed inset-0 -z-10 bg-slate-950/60" aria-hidden />

      <Navbar />

      <main className="relative">
        <section className="pt-32 pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Profesjonalne usługi zmian wpisu w KRS
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold text-amber-400 mb-4">
              Kompleksowa obsługa wniosków o zmianę wpisu w KRS
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Niezależnie od tego, czy potrzebujesz zmienić wpis w KRS czy założyć nową spółkę z ograniczoną odpowiedzialnością,
              zapewniamy kompleksową obsługę prawną dopasowaną do Twoich potrzeb.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Profesjonalne wsparcie w zakresie rejestracji spółek i zmian w Krajowym Rejestrze Sądowym.
            </p>
          </div>
        </section>

        <section className="pt-0 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-12">
              <div
                className={`relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/15 ${
                  popularService.popular ? "ring-2 ring-amber-400" : ""
                }`}
              >
                {popularService.popular && (
                  <span className="absolute top-4 right-4 rounded-full bg-amber-400 px-3 py-1 text-sm font-semibold text-black">
                    Najpopularniejsze
                  </span>
                )}
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                      <div className="flex items-center gap-3">
                        <div className="rounded-lg bg-amber-600 p-2">
                          <PopularServiceIcon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold text-white">{popularService.title}</h3>
                          <div className="mt-1 text-2xl font-bold text-amber-400">{popularService.price}</div>
                        </div>
                      </div>
                    </div>
                    <p className="mt-2 text-justify text-base leading-relaxed text-gray-300">
                      {popularService.description}
                    </p>
                  </div>

                  <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div>
                      <h4 className="mb-3 text-lg font-semibold text-white">Oferujemy pomoc w zakresie:</h4>
                      <ul className="space-y-2">
                        {popularService.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3 text-gray-200">
                            <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-400" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {popularService.included && (
                      <div>
                        <h4 className="mb-3 text-lg font-semibold text-white">W cenie usługi:</h4>
                        <ul className="space-y-2">
                          {popularService.included.map((item) => (
                            <li key={item} className="flex items-start gap-3 text-gray-200">
                              <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400" />
                              <span className="text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="mt-6">
                    <Link
                      href="/contact"
                      className="inline-flex w-full items-center justify-center rounded-lg bg-amber-600 px-8 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-amber-700 sm:w-auto"
                    >
                      Skontaktuj się w tej sprawie
                    </Link>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {mainServices.slice(1, 3).map((service) => {
                  const ServiceIcon = service.icon

                  return (
                    <div
                      key={service.title}
                      className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/15 sm:p-8"
                    >
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                          <div className="rounded-lg bg-amber-600 p-2">
                            <ServiceIcon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                          <div className="mt-1 text-2xl font-bold text-amber-400">{service.price}</div>
                        </div>
                      </div>
                      <p className="text-justify text-base leading-relaxed text-gray-300">{service.description}</p>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
                      <div>
                        <h4 className="mb-3 text-lg font-semibold text-white">Oferujemy pomoc w zakresie:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-3 text-gray-200">
                              <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-400" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {service.included && (
                        <div>
                          <h4 className="mb-3 text-lg font-semibold text-white">W cenie usługi:</h4>
                          <ul className="space-y-2">
                            {service.included.map((item) => (
                              <li key={item} className="flex items-start gap-3 text-gray-200">
                                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400" />
                                <span className="text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {service.note && (
                      <div className="mt-4 rounded-lg border border-amber-400/30 bg-amber-600/20 p-3">
                        <p className="text-sm text-amber-200">
                          <strong>Uwaga:</strong> {service.note}
                        </p>
                      </div>
                    )}

                    <div className="mt-6 space-y-4">
                      <Link
                        href="/contact"
                        className="inline-flex w-full items-center justify-center rounded-lg bg-amber-600 px-8 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-amber-700 sm:w-auto"
                      >
                        Skontaktuj się w tej sprawie
                      </Link>
                      <p className="text-sm text-gray-300">
                        Sprawdź również {" "}
                        <Link href="/cennik" className="text-amber-400 underline transition hover:text-amber-300">
                          cennik usług KRS
                        </Link>{" "}
                        lub przeczytaj {" "}
                        <Link href="/blog" className="text-amber-400 underline transition hover:text-amber-300">
                          artykuły o zmianach w KRS
                        </Link>{" "}
                        na naszym blogu.
                      </p>
                    </div>
                    </div>
                  )
                })}
              </div>

              <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/15 sm:p-8">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-amber-600 p-2">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="mb-1 text-lg font-semibold text-amber-300">Roczne sprawozdanie finansowe</div>
                      <h3 className="text-2xl font-semibold text-white">{closingService.title}</h3>
                      <div className="mt-1 text-2xl font-bold text-amber-400">{closingService.price}</div>
                    </div>
                  </div>
                  <p className="text-justify text-base leading-relaxed text-gray-300">{closingService.description}</p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
                  <div>
                    <h4 className="mb-3 text-lg font-semibold text-white">Oferujemy pomoc w zakresie:</h4>
                    <ul className="space-y-2">
                      {closingService.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-gray-200">
                          <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-400" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-3 text-lg font-semibold text-white">
                      Zamów i złóż dokumenty do KRS na czas – bez stresu
                    </h4>
                    <p className="mb-4 text-sm leading-relaxed text-gray-300">{closingService.note}</p>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                      <a
                        href="tel:+48572234779"
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700"
                      >
                        <Phone className="h-4 w-4" />
                        Zadzwoń
                      </a>
                      <a
                        href="mailto:biuro@zmianakrs.pl"
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                      >
                        <Mail className="h-4 w-4" />
                        Email
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center rounded-lg bg-amber-600 px-8 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-amber-700 sm:w-auto"
                  >
                    Skontaktuj się w tej sprawie
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm sm:p-8">
              <h2 className="mb-8 text-center text-3xl font-bold text-white">Jak działamy</h2>
              <p className="mb-8 text-lg leading-relaxed text-white/90">
                Zdajemy sobie sprawę, jak czasochłonne i skomplikowane mogą być formalności związane ze zgłaszaniem zmian do KRS lub zakładaniem spółki. Dlatego nasz proces obsługi jest przejrzysty, zdalny i wygodny, niezależnie od miejsca zamieszkania klienta. Poniżej opisujemy krok po kroku, jak wygląda współpraca z nami.
              </p>
              <div className="space-y-8">
                <div className="flex flex-col gap-4 sm:flex-row">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl font-semibold text-white">Kontakt z nami</h3>
                    <p className="leading-relaxed text-white/90">
                      Skontaktuj się z nami telefonicznie, mailowo lub przez formularz kontaktowy. Wstępnie przedstaw nam, czego potrzebujesz – np. czy chodzi o zmianę wpisu w KRS, przygotowanie dokumentów, czy może założenie spółki.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl font-semibold text-white">Ustalenie zakresu usługi</h3>
                    <p className="mb-3 leading-relaxed text-white/90">W odpowiedzi otrzymasz:</p>
                    <ul className="list-inside list-disc space-y-2 text-white/90">
                      <li>krótką analizę Twojej sytuacji</li>
                      <li>
                        rekomendację najlepszego rozwiązania (np. zmiana zarządu, adresu, umowy spółki, rejestracja spółki z o.o.)
                      </li>
                      <li>dokładną wycenę usługi w oparciu o rzeczywisty zakres czynności</li>
                    </ul>
                    <p className="mt-3 leading-relaxed text-white/90">
                      Wszystko klarownie i bez ukrytych kosztów – nasze przejrzyste zasady rozliczeń zaczynają się już od 799 zł netto za złożenie kompletnego wniosku do KRS.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl font-semibold text-white">Opłacenie faktury</h3>
                    <p className="leading-relaxed text-white/90">
                      Po potwierdzeniu zakresu usługi i akceptacji warunków przesyłamy Ci fakturę do opłacenia. Po zaksięgowaniu płatności – przystępujemy do działania.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-4 text-xl font-semibold text-white">Realizacja usługi – trzy możliwe ścieżki</h3>
                    <div className="space-y-6">
                      <div className="rounded-lg bg-white/5 p-4">
                        <h4 className="mb-2 text-lg font-semibold text-white">🔹 Opcja A: Rejestracja lub zmiana przez system S24</h4>
                        <p className="mb-2 text-sm text-white/90">Jeśli posiadasz konto w systemie S24 oraz profil zaufany lub podpis kwalifikowany:</p>
                        <ul className="list-inside list-disc space-y-1 text-sm text-white/90">
                          <li>przygotowujemy wniosek i dokumenty</li>
                          <li>konfigurujemy je w systemie S24 i udostępniamy Ci do podpisu</li>
                          <li>instruujemy krok po kroku, jak podpisać i opłacić wniosek</li>
                        </ul>
                        <p className="mt-2 text-sm text-white/90">Całość odbywa się online, bez konieczności wysyłania dokumentów pocztą.</p>
                      </div>
                      <div className="rounded-lg bg-white/5 p-4">
                        <h4 className="mb-2 text-lg font-semibold text-white">🔹 Opcja B: Masz już dokumenty – my składamy wniosek w PRS</h4>
                        <p className="mb-2 text-sm text-white/90">Jeśli posiadasz już komplet podpisanych dokumentów, wystarczy:</p>
                        <ul className="list-inside list-disc space-y-1 text-sm text-white/90">
                          <li>podpisać nasze pełnomocnictwo (wzór otrzymasz od nas)</li>
                          <li>przesłać komplet dokumentów wraz z pełnomocnictwem kurierem lub pocztą</li>
                        </ul>
                        <p className="mt-2 text-sm text-white/90">
                          My zajmiemy się resztą – przygotujemy wniosek i złożymy go w Twoim imieniu przez Portal Rejestrów Sądowych (PRS).
                        </p>
                      </div>
                      <div className="rounded-lg bg-white/5 p-4">
                        <h4 className="mb-2 text-lg font-semibold text-white">🔹 Opcja C: Potrzebujesz dokumentów – my je przygotujemy</h4>
                        <p className="mb-2 text-sm text-white/90">Jeśli potrzebujesz pomocy w przygotowaniu dokumentów:</p>
                        <ul className="list-inside list-disc space-y-1 text-sm text-white/90">
                          <li>przygotowujemy zamówione dokumenty zgodnie z Twoją sytuacją prawną</li>
                          <li>przesyłamy je elektronicznie do sprawdzenia i podpisania</li>
                          <li>po podpisaniu – odsyłasz nam komplet dokumentów i pełnomocnictwo</li>
                        </ul>
                        <p className="mt-2 text-sm text-white/90">Na podstawie otrzymanych materiałów przygotowujemy i składamy wniosek do KRS.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-lg bg-white/5 p-6">
                <h3 className="mb-4 text-xl font-semibold text-white">Profesjonalna obsługa, zdalnie, z dowolnego miejsca</h3>
                <p className="mb-3 text-white/90">Niezależnie od wybranej ścieżki, zapewniamy:</p>
                <ul className="list-inside list-disc space-y-2 text-white/90">
                  <li>kompletną obsługę zgłoszenia zmiany w KRS lub rejestracji spółki</li>
                  <li>dostępność zdalną – możesz skorzystać z naszych usług z dowolnego miejsca w Polsce</li>
                  <li>kontakt mailowy i telefoniczny na każdym etapie</li>
                  <li>pomoc w uzupełnieniu dokumentów w razie wezwania przez sąd</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm shadow-none">
              <h2 className="mb-8 text-center text-3xl font-bold text-white">🛡️ Dlaczego warto?</h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-600">
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="mb-3 text-xl font-semibold text-white">{benefit.title}</h4>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 text-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-amber-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-amber-700"
                >
                  Porozmawiajmy o Twoich potrzebach
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <SEOExpandableSection content={seoSectionContent} pageId="services" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
