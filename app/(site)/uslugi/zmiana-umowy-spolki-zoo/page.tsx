import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { Phone } from "lucide-react"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { brandName, organizationSchema, siteUrl } from "@/lib/seo"
import servicesBackground from "@/public/images/profesjonalne-biuro-obslugi-krs-eksperci-zmiany-wpisu-rejestr-sadowy-doswiadczenie.webp"

import InlineContactForm from "../_components/InlineContactForm"

const pagePath = "/uslugi/zmiana-umowy-spolki-zoo"
const pageUrl = `${siteUrl}${pagePath}`

const legalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Zmiana umowy sp. z o.o. – S24 lub notariusz, zgłoszenie do KRS",
  url: pageUrl,
  description:
    "Zmiana umowy sp. z o.o. – uchwała wspólników, tekst jednolity, zgłoszenie do KRS w PRS lub S24. Dobór trybu: S24 vs notariusz. Obsługa od 799 zł.",
  offers: {
    "@type": "Offer",
    price: "799",
    priceCurrency: "PLN",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      description: "cena netto od",
    },
  },
  provider: organizationSchema,
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Czy zmiana umowy sp. z o.o. zawsze wymaga wpisu do KRS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak. Zmiana umowy spółki z o.o. wymaga uchwały wspólników oraz wpisu do rejestru przedsiębiorców KRS. Wpis tej zmiany ma charakter konstytutywny – zmiana jest skuteczna dopiero z chwilą dokonania wpisu w KRS.",
      },
    },
    {
      "@type": "Question",
      name: "Czy zmianę umowy spółki można zrobić w systemie S24?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "W wielu przypadkach tak, jeżeli spółka jest obsługiwana w S24 i zakres zmian mieści się we wzorcach udostępnionych przez system. W pozostałych sytuacjach zmiana wymaga aktu notarialnego i zgłoszenia przez PRS.",
      },
    },
    {
      "@type": "Question",
      name: "Czy akt notarialny ma wpływ na późniejsze zmiany w S24?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jeżeli spółka była obsługiwana w modelu S24, a zmiana umowy zostanie dokonana notarialnie poza wzorcem, w praktyce kolejne zmiany umowy dokonuje się już w trybie PRS.",
      },
    },
    {
      "@type": "Question",
      name: "Ile trwa wpis zmiany umowy sp. z o.o. do KRS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Czas zależy od obciążenia sądu rejestrowego oraz poprawności dokumentów. Najczęściej największe opóźnienia wynikają z braków formalnych i wezwań do uzupełnienia.",
      },
    },
    {
      "@type": "Question",
      name: "Jakie dokumenty są potrzebne do zmiany umowy spółki?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Najczęściej uchwała wspólników, tekst jednolity umowy spółki, potwierdzenie opłaty sądowej oraz ewentualne pełnomocnictwo, jeżeli działa pełnomocnik.",
      },
    },
  ],
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Strona główna",
      item: `${siteUrl}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Usługi",
      item: `${siteUrl}/uslugi`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Zmiana umowy sp. z o.o.",
      item: pageUrl,
    },
  ],
}

export const metadata: Metadata = {
  title: "Zmiana umowy spółki z o.o. – S24 lub notariusz, od 799 zł | ZmianaKRS.pl",
  description:
    "Zmiana umowy sp. z o.o. – uchwała wspólników, tekst jednolity, zgłoszenie do KRS w PRS lub S24. Pomagamy dobrać tryb (S24 vs notariusz) i przeprowadzić wpis zmian. Obsługa od 799 zł.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Zmiana umowy spółki z o.o. – S24 lub notariusz, od 799 zł | ZmianaKRS.pl",
    description:
      "Zmiana umowy sp. z o.o. – uchwała wspólników, tekst jednolity, zgłoszenie do KRS w PRS lub S24. Pomagamy dobrać tryb (S24 vs notariusz) i przeprowadzić wpis zmian. Obsługa od 799 zł.",
    url: pageUrl,
    siteName: brandName,
    images: [
      {
        url: `${siteUrl}/images/krs-services.png`,
        width: 1200,
        height: 630,
        alt: "Zmiana umowy sp. z o.o. – obsługa ZmianaKRS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zmiana umowy spółki z o.o. – S24 lub notariusz, od 799 zł | ZmianaKRS.pl",
    description:
      "Zmiana umowy sp. z o.o. – uchwała wspólników, tekst jednolity, zgłoszenie do KRS w PRS lub S24. Pomagamy dobrać tryb (S24 vs notariusz) i przeprowadzić wpis zmian. Obsługa od 799 zł.",
    images: [`${siteUrl}/images/krs-services.png`],
  },
}

export default function ZmianaUmowySpZooPage() {
  return (
    <div className="relative min-h-screen text-white">
      <Script id="zmiana-umowy-structured-data" type="application/ld+json">
        {JSON.stringify([legalServiceSchema, faqSchema, breadcrumbSchema])}
      </Script>

      <div
        className="fixed inset-0 -z-20"
        style={{
          backgroundImage: `url(${servicesBackground.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="fixed inset-0 -z-10 bg-slate-950/60" />

      <Navbar />

      <main className="relative px-4 pb-14 pt-24 sm:px-6 lg:px-8">
        {/* HERO */}
        <section className="mx-auto mb-12 max-w-7xl">
          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
              <div className="space-y-6">
                <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                  Zmiana umowy sp. z o.o. – S24 lub notariusz, zgłoszenie do KRS
                </h1>

                <p className="text-lg text-white/90">
                  Zmiana umowy spółki z ograniczoną odpowiedzialnością to procedura, która wymaga prawidłowego przygotowania uchwały
                  wspólników, sporządzenia tekstu jednolitego umowy oraz zgłoszenia zmian do Krajowego Rejestru Sądowego.
                </p>

                <p className="text-lg text-white/90">
                  W zależności od zakresu zmian możliwe jest przeprowadzenie procedury w systemie S24 lub w formie aktu notarialnego.
                  Dobór właściwego trybu ma znaczenie zarówno dla kosztów, jak i dla tego, jak sprawnie spółka będzie mogła
                  przeprowadzać kolejne zmiany w przyszłości.
                </p>

                <p className="text-lg text-white/90">
                  Oferujemy kompleksową obsługę zmiany umowy sp. z o.o. – od analizy umowy spółki i planowanych modyfikacji, przez
                  przygotowanie uchwał i dokumentów, po elektroniczne złożenie wniosku w PRS lub S24 oraz monitorowanie sprawy aż do
                  dokonania wpisu w KRS.
                </p>

                <p className="text-lg text-white/90">
                  Na naszej stronie znajdziesz również inne{" "}
                  <Link href="/uslugi" className="text-amber-400 underline transition hover:text-amber-300">
                    usługi związane ze zmianami w KRS
                  </Link>
                  .
                </p>

                <p className="text-xl">
                  <a
                    href="tel:+48572234779"
                    className="inline-flex items-center gap-2 underline underline-offset-2 hover:text-amber-300"
                  >
                    <Phone className="h-5 w-5 text-amber-400" />
                    572 234 779
                  </a>
                </p>
              </div>

              <div className="w-full lg:pt-2">
                <InlineContactForm className="max-w-md" />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl space-y-10">
          {/* PODSTAWA PRAWNA */}
          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <div className="space-y-4">
              <h2 className="mb-4 text-center text-2xl font-bold text-amber-400 sm:text-3xl">
                Podstawa prawna zmiany umowy spółki z o.o.
              </h2>

              <p className="text-lg text-white/90">
                Zmiana umowy spółki z ograniczoną odpowiedzialnością jest jedną z kluczowych czynności korporacyjnych w spółce.
                Wymaga podjęcia uchwały wspólników oraz ujawnienia zmian w rejestrze przedsiębiorców KRS.
              </p>

              <p className="text-lg text-white/90">
                Zgodnie z art. 255 § 1 Kodeksu spółek handlowych, zmiana umowy spółki z o.o. wymaga uchwały wspólników oraz wpisu
                zmiany do rejestru przedsiębiorców KRS.
              </p>

              <p className="text-lg text-white/90">
                Istotne znaczenie mają także przepisy dotyczące większości wymaganej do podjęcia uchwały. Zgodnie z art. 246 § 1 KSH,
                uchwała o zmianie umowy spółki wymaga co do zasady większości 2/3 głosów, a w przypadku istotnej zmiany przedmiotu
                działalności spółki – większości 3/4 głosów, o ile umowa spółki nie przewiduje surowszych warunków. W praktyce
                dotyczy to w szczególności uchwał odnoszących się do zmiany przedmiotu działalności, istotnego rozszerzenia zakresu
                działalności spółki albo ograniczenia działalności, które w sposób znaczący wpływa na funkcjonowanie spółki.
              </p>

              <p className="text-lg text-white/90">
                Po podjęciu uchwały zarząd ma obowiązek zgłosić zmianę do KRS. Zgodnie z art. 22 ustawy o Krajowym Rejestrze
                Sądowym, wniosek o wpis zmiany do rejestru powinien zostać złożony w terminie 7 dni od dnia zdarzenia
                uzasadniającego dokonanie wpisu.
              </p>
            </div>
          </div>

          {/* KOSZTY + CZAS */}
          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <div className="space-y-4">
              <h2 className="mb-4 text-center text-2xl font-bold text-amber-400 sm:text-3xl">
                Koszty zmiany umowy sp. z o.o.
              </h2>

              <p className="text-lg text-white/90">Koszt zgłoszenia zmiany umowy zależy od sposobu złożenia wniosku:</p>

              <div className="overflow-x-auto rounded-lg border border-white/20 bg-white/5">
                <table className="w-full min-w-[420px] border-collapse text-left text-base">
                  <thead>
                    <tr className="border-b border-white/20 bg-white/10">
                      <th className="px-5 py-3.5">Tryb złożenia wniosku</th>
                      <th className="px-5 py-3.5">Opłata sądowa</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/20 bg-white/5">
                      <td className="px-5 py-3.5">Portal Rejestrów Sądowych (PRS)</td>
                      <td className="px-5 py-3.5">250 zł</td>
                    </tr>
                    <tr className="bg-white/[0.03]">
                      <td className="px-5 py-3.5">System S24</td>
                      <td className="px-5 py-3.5">200 zł</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-lg text-white/90">
                Opłata skarbowa za pełnomocnictwo wynosi 17 zł (jeżeli wniosek składa pełnomocnik).
              </p>

              <p className="text-lg text-white/90">
                Jeżeli zmiana umowy wymaga aktu notarialnego (bo wykracza poza wzorzec S24), należy uwzględnić również koszty
                notarialne.
              </p>

              <p className="text-lg text-white/90">
                Koszt naszej obsługi zmiany umowy sp. z o.o. zaczyna się od 799 zł, w zależności od zakresu zmian oraz liczby
                przygotowywanych dokumentów.
              </p>

              <h3 className="mt-6 text-xl font-semibold sm:text-2xl">Ile trwa wpis zmiany umowy sp. z o.o. do KRS?</h3>
              <p className="text-lg text-white/90">
                Czas rozpoznania wniosku zależy przede wszystkim od obciążenia sądu rejestrowego oraz od tego, czy dokumenty i wniosek
                są przygotowane bezbłędnie. W praktyce największe opóźnienia wynikają z wezwań do uzupełnienia braków formalnych.
                Dlatego prowadzimy sprawę w sposób, który minimalizuje ryzyko zwrotu wniosku i monitorujemy postępowanie aż do wpisu.
              </p>

              <p className="text-lg text-white/90">
                👉{" "}
                <Link href="/cennik" className="text-amber-400 underline transition hover:text-amber-300">
                  Poznaj koszt innych zmian w KRS
                </Link>
                .
              </p>
            </div>
          </div>

          {/* DOKUMENTY */}
          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <div className="space-y-4">
              <h2 className="mb-4 text-center text-2xl font-bold text-amber-400 sm:text-3xl">
                Dokumenty do zmiany umowy sp. z o.o.
              </h2>

              <p className="text-lg text-white/90">
                Do zgłoszenia zmiany umowy spółki z o.o. w KRS przygotowuje się dokumenty potwierdzające uchwałę wspólników oraz
                aktualną treść umowy po zmianach.
              </p>

              <p className="text-lg text-white/90">Najczęściej są to:</p>

              <ul className="list-disc space-y-2 pl-6 text-lg text-white/90">
                <li>uchwała wspólników o zmianie umowy spółki,</li>
                <li>tekst jednolity umowy spółki uwzględniający wprowadzone zmiany,</li>
                <li>potwierdzenie uiszczenia opłaty sądowej,</li>
                <li>pełnomocnictwo (jeżeli działa pełnomocnik) + opłata skarbowa 17 zł.</li>
              </ul>

              <p className="text-lg text-white/90">
                Brak tekstu jednolitego albo niespójność pomiędzy uchwałą, wnioskiem i załącznikami to jedna z najczęstszych przyczyn
                wezwania do uzupełnienia braków formalnych lub zwrotu wniosku.
              </p>
            </div>
          </div>

          {/* PROCEDURA */}
          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <div className="space-y-5">
              <h2 className="mb-4 text-center text-2xl font-bold text-amber-400 sm:text-3xl">
                Jak zgłosimy zmianę umowy Twojej spółki
              </h2>

              <ol className="space-y-4 text-lg text-white/90">
                <li>
                  <p className="font-semibold text-white">1. Analiza umowy spółki i planowanej zmiany</p>
                  <p>Sprawdzamy zakres zmian i ustalamy właściwy tryb: S24 (w ramach wzorca) albo akt notarialny.</p>
                </li>
                <li>
                  <p className="font-semibold text-white">2. Przygotowanie uchwał i dokumentów</p>
                  <p>Sporządzamy uchwałę zmieniającą umowę oraz przygotowujemy tekst jednolity umowy po zmianach.</p>
                </li>
                <li>
                  <p className="font-semibold text-white">3. Weryfikacja poprawności dokumentacji</p>
                  <p>Sprawdzamy spójność uchwały, tekstu jednolitego oraz danych spółki z treścią wniosku do KRS.</p>
                </li>
                <li>
                  <p className="font-semibold text-white">4. Złożenie wniosku w PRS lub S24</p>
                  <p>Składamy wniosek o wpis zmian do KRS w odpowiednim systemie.</p>
                </li>
                <li>
                  <p className="font-semibold text-white">5. Monitorowanie sprawy do momentu wpisu</p>
                  <p>Nadzorujemy postępowanie przed sądem rejestrowym aż do dokonania wpisu.</p>
                </li>
              </ol>

              <InlineContactForm className="max-w-md" />
            </div>
          </div>

          {/* TYPOWE SYTUACJE */}
          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <div className="space-y-4">
              <h2 className="mb-4 text-center text-2xl font-bold text-amber-400 sm:text-3xl">
                Typowe sytuacje klientów – kiedy potrzebna jest zmiana umowy sp. z o.o.
              </h2>

              <p className="text-lg text-white/90">
                W praktyce zmiana umowy spółki jest potrzebna zawsze wtedy, gdy zmianie ulegają postanowienia zawarte w samej umowie
                spółki. Poniżej przedstawiamy najczęstsze sytuacje, z którymi zgłaszają się klienci.
              </p>

              <div className="mt-6 space-y-4">
                <h3 className="text-xl font-semibold sm:text-2xl">Zmiana siedziby spółki z o.o.</h3>
                <p className="text-lg text-white/90">
                  Zmiana siedziby spółki (czyli miejscowości wskazanej w umowie spółki) wymaga zmiany umowy oraz wpisu zmiany do KRS.
                  Należy odróżnić ją od zmiany adresu w obrębie tej samej miejscowości – taka zmiana zazwyczaj nie wymaga zmiany
                  umowy spółki, lecz aktualizacji danych ujawnianych w KRS.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-semibold sm:text-2xl">Zmiana przedmiotu działalności (PKD) w spółce z o.o.</h3>
                <p className="text-lg text-white/90">
                  Zmiana lub rozszerzenie przedmiotu działalności spółki wymaga zmiany umowy spółki i zgłoszenia zmian do KRS. W
                  praktyce oznacza to również konieczność prawidłowego wskazania kodów PKD ujawnianych w rejestrze.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-semibold sm:text-2xl">Zmiana kapitału zakładowego spółki z o.o.</h3>
                <p className="text-lg text-white/90">
                  Podwyższenie albo obniżenie kapitału zakładowego co do zasady wiąże się ze zmianą postanowień umowy spółki
                  dotyczących kapitału oraz udziałów, a następnie z ujawnieniem zmiany w KRS.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-semibold sm:text-2xl">Zmiana zasad reprezentacji spółki z o.o.</h3>
                <p className="text-lg text-white/90">
                  Zmiana sposobu reprezentacji spółki (np. przejście z reprezentacji jednoosobowej na reprezentację łączną) wymaga
                  zmiany postanowień umowy spółki oraz zgłoszenia zmian do Krajowego Rejestru Sądowego.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <p className="text-lg text-white/90">Chcesz wejść w szczegóły i zobaczyć procedurę krok po kroku?</p>
                <p className="text-lg text-white/90">
                  👉{" "}
                  <Link
                    href="/artykul/zmiana-umowy-spolki-portal-s24-instrukcja"
                    className="text-amber-300 underline underline-offset-2 hover:text-amber-200"
                  >
                    https://zmianakrs.pl/artykul/zmiana-umowy-spolki-portal-s24-instrukcja
                  </Link>
                </p>

                <p className="text-lg text-white/90">Jeżeli dotyczy Cię zmiana PKD / przedmiotu działalności, przeczytaj też:</p>
                <p className="text-lg text-white/90">
                  👉{" "}
                  <Link
                    href="/artykul/zmiana-przedmiotu-dzialalnosci-spolka-zoo"
                    className="text-amber-300 underline underline-offset-2 hover:text-amber-200"
                  >
                    https://zmianakrs.pl/artykul/zmiana-przedmiotu-dzialalnosci-spolka-zoo
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* BŁĘDY */}
          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <div className="space-y-4">
              <h2 className="mb-4 text-center text-2xl font-bold text-amber-400 sm:text-3xl">
                Najczęstsze błędy przy zmianie umowy sp. z o.o.
              </h2>

              <p className="text-lg text-white/90">Najczęstsze problemy pojawiające się przy zmianie umowy spółki to:</p>

              <ul className="list-disc space-y-2 pl-6 text-lg text-white/90">
                <li>brak tekstu jednolitego umowy spółki w załącznikach,</li>
                <li>niezgodność uchwały z treścią wniosku do KRS,</li>
                <li>próba wprowadzenia zmian wykraczających poza wzorzec S24 w trybie S24,</li>
                <li>błędy formalne podpisów (w tym brak wymaganych podpisów elektronicznych),</li>
                <li>brak opłaty lub nieprawidłowe potwierdzenie płatności.</li>
              </ul>

              <p className="text-lg text-white/90">
                Skutkiem takich błędów może być wezwanie do uzupełnienia braków formalnych, zwrot wniosku i wydłużenie całej
                procedury.
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <div className="space-y-5">
              <h2 className="mb-4 text-center text-2xl font-bold text-amber-400 sm:text-3xl">
                Najczęściej zadawane pytania
              </h2>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Czy zmiana umowy sp. z o.o. zawsze wymaga wpisu do KRS?</h3>
                <p className="text-lg text-white/90">
                  Tak. Zmiana umowy spółki z o.o. wymaga uchwały wspólników oraz wpisu do rejestru przedsiębiorców KRS. Wpis tej
                  zmiany ma charakter konstytutywny – zmiana jest skuteczna dopiero z chwilą dokonania wpisu w KRS.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Czy zmianę umowy spółki można zrobić w systemie S24?</h3>
                <p className="text-lg text-white/90">
                  W wielu przypadkach tak, jeżeli spółka jest obsługiwana w S24 i zakres zmian mieści się we wzorcach udostępnionych
                  przez system. W pozostałych sytuacjach zmiana wymaga aktu notarialnego i zgłoszenia przez PRS.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Czy akt notarialny ma wpływ na późniejsze zmiany w S24?</h3>
                <p className="text-lg text-white/90">
                  Jeżeli spółka była obsługiwana w modelu S24, a zmiana umowy zostanie dokonana notarialnie poza wzorcem, w praktyce
                  kolejne zmiany umowy dokonuje się już w trybie PRS.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Ile trwa wpis zmiany umowy sp. z o.o. do KRS?</h3>
                <p className="text-lg text-white/90">
                  Czas zależy od obciążenia sądu rejestrowego oraz poprawności dokumentów. Najczęściej największe opóźnienia wynikają
                  z braków formalnych i wezwań do uzupełnienia.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Jakie dokumenty są potrzebne do zmiany umowy spółki?</h3>
                <p className="text-lg text-white/90">
                  Najczęściej uchwała wspólników, tekst jednolity umowy spółki, potwierdzenie opłaty sądowej oraz ewentualne
                  pełnomocnictwo, jeżeli działa pełnomocnik.
                </p>
              </div>
            </div>
          </div>

          {/* CTA + linki */}
          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <div className="space-y-4">
              <h2 className="mb-2 text-center text-2xl font-bold text-amber-400 sm:text-3xl">Zobacz także</h2>
              <p className="text-lg text-white/90">Sprawdź również inne najczęściej wybierane usługi związane ze zmianami w KRS.</p>
              <ul className="list-disc space-y-2 pl-6 text-lg text-white/90">
                <li>
                  <Link href="/uslugi/zmiana-zarzadu-spolki-zoo" className="text-amber-400 underline transition hover:text-amber-300">
                    zmiana zarządu spółki z o.o.
                  </Link>
                </li>
                <li>
                  <Link href="/uslugi/zmiana-adresu-spolki-zoo" className="text-amber-400 underline transition hover:text-amber-300">
                    zmiana adresu spółki z o.o.
                  </Link>
                </li>
                <li>
                  <Link href="/uslugi/zmiana-wspolnika-spolki-zoo" className="text-amber-400 underline transition hover:text-amber-300">
                    zmiana wspólnika spółki z o.o.
                  </Link>
                </li>
                <li>
                  <Link href="/uslugi" className="text-amber-400 underline transition hover:text-amber-300">
                    wszystkie usługi zmian w KRS
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <div className="space-y-4">
              <h2 className="mb-4 text-center text-2xl font-bold text-amber-400 sm:text-3xl">
                Zleć zmianę umowy sp. z o.o.
              </h2>

              <p className="text-lg text-white/90">
                Jeżeli chcesz przeprowadzić zmianę umowy spółki szybko i bez ryzyka błędów formalnych, skontaktuj się z nami.
                Dobierzemy właściwy tryb (S24 lub notariusz), przygotujemy dokumenty i doprowadzimy sprawę do wpisu w KRS.
              </p>

              <p className="text-lg text-white/90">
                Zobacz też inne{" "}
                <Link href="/uslugi" className="text-amber-400 underline transition hover:text-amber-300">
                  usługi dotyczące zmian wpisów w KRS
                </Link>{" "}
                oraz{" "}
                <Link href="/cennik" className="text-amber-400 underline transition hover:text-amber-300">
                  poznaj koszt innych zmian
                </Link>
                .
              </p>

              <p className="text-xl">
                <a
                  href="tel:+48572234779"
                  className="inline-flex items-center gap-2 underline underline-offset-2 hover:text-amber-300"
                >
                  <Phone className="h-5 w-5 text-amber-400" />
                  572 234 779
                </a>
              </p>

              <InlineContactForm className="max-w-md" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
