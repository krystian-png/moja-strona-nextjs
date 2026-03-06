import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { Phone } from "lucide-react"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { brandName, organizationSchema, siteUrl } from "@/lib/seo"
import servicesBackground from "@/public/images/profesjonalne-biuro-obslugi-krs-eksperci-zmiany-wpisu-rejestr-sadowy-doswiadczenie.webp"

import InlineContactForm from "../_components/InlineContactForm"

const pagePath = "/uslugi/zmiana-wspolnika-spolki-zoo"
const pageUrl = `${siteUrl}${pagePath}`

const legalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Zmiana wspólnika spółki z o.o. – sprzedaż udziałów, wejście inwestora, zgłoszenie do KRS",
  url: pageUrl,
  description:
    "Zmiana wspólnika spółki z o.o.: sprzedaż udziałów, darowizna, wejście inwestora, podwyższenie kapitału, dziedziczenie. Analiza umowy spółki (ograniczenia zbywalności), dokumenty oraz zgłoszenie zmian do KRS w PRS lub S24. Obsługa od 799 zł.",
  provider: organizationSchema,
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Czy każda zmiana wspólnika w spółce z o.o. wymaga zgłoszenia do KRS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nie w każdym przypadku. Obowiązek złożenia wniosku o zmianę wpisu w rejestrze przedsiębiorców powstaje wtedy, gdy w wyniku transakcji zmieniają się dane podlegające ujawnieniu w KRS, w szczególności w zakresie wspólników posiadających co najmniej 10% kapitału zakładowego oraz danych dotyczących liczby i wartości nominalnej udziałów ujawnionego wspólnika.",
      },
    },
    {
      "@type": "Question",
      name: "Czy sprzedaż udziałów w spółce z o.o. zawsze wymaga notarialnego poświadczenia podpisów?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Co do zasady tak – umowa zbycia udziałów wymaga formy pisemnej z podpisami notarialnie poświadczonymi. Wyjątek dotyczy spółek obsługiwanych w S24, gdzie przy wykorzystaniu wzorca systemowego zbycie udziałów może zostać dokonane w trybie przewidzianym w systemie teleinformatycznym i podpisane elektronicznie.",
      },
    },
    {
      "@type": "Question",
      name: "Czy umowa spółki może ograniczać sprzedaż udziałów?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak. Umowa spółki może uzależnić zbycie udziałów od zgody spółki albo w inny sposób ograniczyć możliwość ich zbycia. Przed transakcją konieczna jest analiza postanowień umowy spółki, aby uniknąć nieważności albo sporu co do skuteczności zbycia.",
      },
    },
    {
      "@type": "Question",
      name: "Ile trwa wpis zmiany wspólnika w KRS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Czas rozpoznania wniosku zależy od obciążenia sądu rejestrowego oraz poprawności wniosku i załączników. Najczęściej największe opóźnienia wynikają z braków formalnych i wezwań do uzupełnienia, w tym z niespójności dokumentów lub braku wymaganej zgody spółki na zbycie udziałów.",
      },
    },
    {
      "@type": "Question",
      name: "Jakie dokumenty są potrzebne do zmiany wspólnika spółki z o.o.?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dokumenty zależą od scenariusza. W typowej sprzedaży udziałów są to w szczególności umowa zbycia udziałów w wymaganej formie oraz ewentualna zgoda spółki, jeżeli wymaga tego umowa spółki. Przy wejściu inwestora i podwyższeniu kapitału występują dodatkowo uchwały i dokumenty dotyczące objęcia udziałów oraz – co do zasady – zmiana umowy spółki. Przy dziedziczeniu podstawą są dokumenty potwierdzające nabycie spadku.",
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
      name: "Zmiana wspólnika spółki z o.o.",
      item: pageUrl,
    },
  ],
}

export const metadata: Metadata = {
  title: "Zmiana wspólnika spółki z o.o. – sprzedaż udziałów, zgłoszenie do KRS | ZmianaKRS.pl",
  description:
    "Zmiana wspólnika spółki z o.o.: sprzedaż udziałów, darowizna, wejście inwestora, podwyższenie kapitału, dziedziczenie. Analiza umowy spółki, dokumenty oraz zgłoszenie zmian do KRS w PRS lub S24. Obsługa od 799 zł.",
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: "Zmiana wspólnika spółki z o.o. – sprzedaż udziałów, zgłoszenie do KRS | ZmianaKRS.pl",
    description:
      "Zmiana wspólnika spółki z o.o.: sprzedaż udziałów, darowizna, wejście inwestora, podwyższenie kapitału, dziedziczenie. Analiza umowy spółki, dokumenty oraz zgłoszenie zmian do KRS w PRS lub S24. Obsługa od 799 zł.",
    url: pageUrl,
    siteName: brandName,
    images: [
      {
        url: `${siteUrl}/images/krs-services.png`,
        width: 1200,
        height: 630,
        alt: "Zmiana wspólnika spółki z o.o. – obsługa ZmianaKRS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zmiana wspólnika spółki z o.o. – sprzedaż udziałów, zgłoszenie do KRS | ZmianaKRS.pl",
    description:
      "Zmiana wspólnika spółki z o.o.: sprzedaż udziałów, darowizna, wejście inwestora, podwyższenie kapitału, dziedziczenie. Analiza umowy spółki, dokumenty oraz zgłoszenie zmian do KRS w PRS lub S24. Obsługa od 799 zł.",
    images: [`${siteUrl}/images/krs-services.png`],
  },
}

export default function ZmianaWspolnikaSpolkiZooPage() {
  return (
    <div className="relative min-h-screen text-white">
      <Script id="zmiana-wspolnika-structured-data" type="application/ld+json">
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
        <section className="mx-auto mb-12 max-w-7xl">
          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
              <div className="space-y-6">
                <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                  Zmiana wspólnika spółki z o.o. – sprzedaż udziałów, wejście inwestora, zgłoszenie do KRS
                </h1>

                <p className="text-lg text-white/90">
                  Zmiana wspólnika w spółce z ograniczoną odpowiedzialnością najczęściej następuje w wyniku sprzedaży udziałów, darowizny udziałów, objęcia nowych udziałów przy podwyższeniu kapitału zakładowego albo przejścia udziałów w drodze dziedziczenia. W zależności od konkretnego przypadku zmiana taka wymaga przygotowania dokumentów korporacyjnych oraz – jeżeli wpływa na dane ujawniane w rejestrze przedsiębiorców – zgłoszenia zmian do Krajowego Rejestru Sądowego.
                </p>

                <p className="text-lg text-white/90">
                  Prawidłowo przygotowana zmiana wspólnika spółki z o.o. obejmuje analizę postanowień umowy spółki pod kątem ograniczeń zbywalności udziałów, przygotowanie dokumentów transakcyjnych oraz ustalenie, czy w danym stanie faktycznym powstaje obowiązek aktualizacji danych ujawnianych w KRS. W praktyce problemy rejestrowe wynikają najczęściej z pominięcia ograniczeń wynikających z umowy spółki albo z nieprawidłowej formy dokumentów.
                </p>

                <p className="text-lg text-white/90">
                  Oferujemy kompleksową obsługę zmiany wspólnika spółki z o.o. – od analizy dokumentów i struktury udziałowej, przez przygotowanie dokumentacji, po elektroniczne złożenie wniosku w PRS lub S24 oraz monitorowanie sprawy aż do dokonania wpisu w KRS, jeżeli zgłoszenie jest wymagane.
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
          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <div className="space-y-4">
              <h2 className="mb-4 text-center text-2xl font-bold text-amber-400 sm:text-3xl">
                Podstawa prawna zmiany wspólnika spółki z o.o.
              </h2>

              <p className="text-lg text-white/90">
                Najczęstszym mechanizmem zmiany wspólnika w spółce z o.o. jest zbycie udziałów w formie sprzedaży albo darowizny. Co do zasady zbycie udziału, jego części albo ułamkowej części udziału wymaga zachowania formy pisemnej z podpisami notarialnie poświadczonymi, co wynika z art. 180 § 1 Kodeksu spółek handlowych. W praktyce wyjątkiem jest obrót udziałami realizowany w trybie przewidzianym dla spółek obsługiwanych w systemie S24, gdzie czynność może zostać dokonana w ramach wzorca systemowego i podpisana elektronicznie.
              </p>

              <p className="text-lg text-white/90">
                Przed transakcją konieczna jest analiza umowy spółki, ponieważ może ona uzależniać zbycie udziałów od zgody spółki albo w inny sposób ograniczać obrót udziałami, zgodnie z art. 182 § 1 Kodeksu spółek handlowych. W szczególności spotykane są postanowienia o obowiązku uzyskania zgody organu spółki, prawie pierwszeństwa nabycia udziałów przez wspólników albo obowiązku zaoferowania udziałów przed sprzedażą osobie trzeciej.
              </p>

              <p className="text-lg text-white/90">
                Jeżeli w wyniku zmiany struktury udziałowej zmieniają się dane podlegające ujawnieniu w rejestrze przedsiębiorców, powstaje obowiązek zgłoszenia zmian do KRS. Zakres ujawnienia obejmuje w szczególności wspólników posiadających co najmniej 10% kapitału zakładowego wraz z informacją o liczbie i wartości nominalnej ich udziałów, co wynika z art. 38 ustawy o Krajowym Rejestrze Sądowym.
              </p>

              <p className="text-lg text-white/90">
                Zasadniczy termin zgłoszenia zdarzenia uzasadniającego wpis do rejestru przedsiębiorców wynosi 7 dni, zgodnie z art. 22 ustawy o Krajowym Rejestrze Sądowym. W praktyce kompletność i spójność dokumentów wpływa bezpośrednio na sprawność postępowania i ogranicza ryzyko wezwań do uzupełnienia braków formalnych.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <div className="space-y-4">
              <h2 className="mb-4 text-center text-2xl font-bold text-amber-400 sm:text-3xl">
                Koszty zmiany wspólnika spółki z o.o.
              </h2>

              <p className="text-lg text-white/90">Koszt zgłoszenia zmiany do KRS zależy od sposobu złożenia wniosku:</p>

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
                Jeżeli sprzedaż udziałów jest dokonywana poza wzorcem systemowym S24, wymagane jest notarialne poświadczenie podpisów, co wiąże się z dodatkowymi kosztami notarialnymi.
              </p>

              <p className="text-lg text-white/90">
                Koszt obsługi zmiany wspólnika spółki z o.o. zaczyna się od 799 zł. Cena zależy od scenariusza oraz zakresu dokumentów, w szczególności od tego, czy transakcja wymaga uwzględnienia ograniczeń zbywalności w umowie spółki oraz czy powstaje obowiązek zgłoszenia zmian do rejestru przedsiębiorców.
              </p>

              <h3 className="mt-6 text-xl font-semibold sm:text-2xl">Ile trwa wpis zmiany wspólnika w KRS?</h3>
              <p className="text-lg text-white/90">
                Czas rozpoznania wniosku zależy od obciążenia sądu rejestrowego oraz od tego, czy wniosek i załączniki są przygotowane bezbłędnie. Najczęstsze opóźnienia wynikają z wezwań do uzupełnienia braków formalnych, w tym z braku wymaganej zgody spółki na zbycie udziałów lub niespójności dokumentów.
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

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <div className="space-y-4">
              <h2 className="mb-4 text-center text-2xl font-bold text-amber-400 sm:text-3xl">
                Dokumenty do zmiany wspólnika spółki z o.o.
              </h2>

              <p className="text-lg text-white/90">
                Zakres dokumentów zależy od przyczyny zmiany wspólnika. W sprzedaży udziałów kluczowe znaczenie ma forma czynności oraz weryfikacja postanowień umowy spółki w zakresie ograniczeń zbywalności.
              </p>

              <p className="text-lg text-white/90">Najczęściej przygotowuje się:</p>

              <ul className="list-disc space-y-2 pl-6 text-lg text-white/90">
                <li>umowę sprzedaży udziałów albo umowę darowizny udziałów w wymaganej formie,</li>
                <li>zgodę spółki na zbycie udziałów albo dokumenty spełniające warunki zbycia, jeżeli wymaga tego umowa spółki,</li>
                <li>dokumenty dotyczące podwyższenia kapitału i objęcia udziałów, jeżeli wspólnik wchodzi do spółki jako inwestor,</li>
                <li>dokumenty potwierdzające nabycie spadku, jeżeli udziały przechodzą w drodze dziedziczenia,</li>
                <li>potwierdzenie uiszczenia opłaty sądowej,</li>
                <li>pełnomocnictwo (jeżeli działa pełnomocnik) + opłata skarbowa 17 zł.</li>
              </ul>

              <p className="text-lg text-white/90">
                Braki formalne w dokumentach, w szczególności nieprawidłowa forma umowy zbycia udziałów albo pominięcie wymaganej zgody spółki, są jednymi z najczęstszych przyczyn wezwań do uzupełnienia braków formalnych.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <div className="space-y-5">
              <h2 className="mb-4 text-center text-2xl font-bold text-amber-400 sm:text-3xl">
                Jak przeprowadzimy zmianę wspólnika spółki z o.o.
              </h2>

              <ol className="space-y-4 text-lg text-white/90">
                <li>
                  <p className="font-semibold text-white">1. Analiza umowy spółki i struktury udziałowej</p>
                  <p>Sprawdzamy ograniczenia zbywalności udziałów, wymagane zgody oraz strukturę udziałów przed i po planowanej transakcji.</p>
                </li>
                <li>
                  <p className="font-semibold text-white">2. Przygotowanie dokumentów transakcyjnych i korporacyjnych</p>
                  <p>Przygotowujemy umowę zbycia udziałów albo dokumenty objęcia udziałów oraz wymagane uchwały i zgody, zgodnie z umową spółki.</p>
                </li>
                <li>
                  <p className="font-semibold text-white">3. Weryfikacja spójności dokumentacji</p>
                  <p>Sprawdzamy zgodność dokumentów, danych udziałowych i podstaw wpisu pod kątem wymagań systemu PRS lub S24.</p>
                </li>
                <li>
                  <p className="font-semibold text-white">4. Złożenie wniosku w PRS lub S24, jeżeli jest wymagany</p>
                  <p>Jeżeli zmiana wpływa na dane ujawniane w rejestrze przedsiębiorców, składamy wniosek o wpis zmian do KRS w odpowiednim systemie.</p>
                </li>
                <li>
                  <p className="font-semibold text-white">5. Monitorowanie sprawy do momentu rozstrzygnięcia</p>
                  <p>Nadzorujemy postępowanie przed sądem rejestrowym oraz reagujemy na ewentualne wezwania do uzupełnienia braków formalnych.</p>
                </li>
              </ol>

              <InlineContactForm className="max-w-md" />
            </div>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <div className="space-y-4">
              <h2 className="mb-4 text-center text-2xl font-bold text-amber-400 sm:text-3xl">
                Typowe sytuacje klientów – zmiana wspólnika spółki z o.o.
              </h2>

              <p className="text-lg text-white/90">
                Zmiana wspólnika spółki z o.o. pojawia się najczęściej w kilku powtarzalnych scenariuszach. W każdym przypadku kluczowe jest ustalenie, czy umowa spółki przewiduje ograniczenia zbywalności oraz czy zmiana wpływa na dane ujawniane w rejestrze przedsiębiorców.
              </p>

              <div className="mt-6 space-y-4">
                <h3 className="text-xl font-semibold sm:text-2xl">Sprzedaż udziałów</h3>
                <p className="text-lg text-white/90">
                  Najczęściej zmiana wspólnika następuje w wyniku sprzedaży udziałów przez dotychczasowego wspólnika. Transakcja może dotyczyć całego pakietu albo części udziałów i może być zawierana zarówno z innym wspólnikiem, jak i z osobą trzecią. Przed sprzedażą należy zweryfikować, czy umowa spółki wymaga zgody spółki albo przewiduje prawo pierwszeństwa dla wspólników.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-semibold sm:text-2xl">Wejście inwestora i objęcie nowych udziałów</h3>
                <p className="text-lg text-white/90">
                  W praktyce wejście inwestora do spółki najczęściej następuje poprzez podwyższenie kapitału zakładowego i objęcie nowych udziałów. Taki scenariusz zwykle wiąże się z czynnościami korporacyjnymi oraz – co do zasady – ze zmianą postanowień umowy spółki dotyczących kapitału zakładowego i udziałów. W tym modelu szczególne znaczenie ma spójność uchwał, dokumentów objęcia udziałów oraz podstaw wpisu w KRS.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-semibold sm:text-2xl">Dziedziczenie udziałów</h3>
                <p className="text-lg text-white/90">
                  Zmiana wspólnika może nastąpić w wyniku śmierci wspólnika i przejścia udziałów na spadkobierców. W takim przypadku podstawą wprowadzenia zmian są dokumenty potwierdzające nabycie spadku. W praktyce istotne jest również ustalenie sposobu wykonywania praw z udziałów, zwłaszcza gdy udziały przechodzą na kilku spadkobierców.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <p className="text-lg text-white/90">
                  Jeżeli procedura obejmuje elementy związane z S24, zobacz również:
                </p>
                <p className="text-lg text-white/90">
                  👉{" "}
                  <Link
                    href="/artykul/zmiana-umowy-spolki-portal-s24-instrukcja"
                    className="text-amber-300 underline underline-offset-2 hover:text-amber-200"
                  >
                    https://zmianakrs.pl/artykul/zmiana-umowy-spolki-portal-s24-instrukcja
                  </Link>
                </p>

                <p className="text-lg text-white/90">
                  Jeżeli zmiany właścicielskie są elementem szerszych zmian w spółce (w tym zmian rejestrowych), przeczytaj też:
                </p>
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

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <div className="space-y-4">
              <h2 className="mb-4 text-center text-2xl font-bold text-amber-400 sm:text-3xl">
                Najczęstsze błędy przy zmianie wspólnika spółki z o.o.
              </h2>

              <p className="text-lg text-white/90">Najczęstsze problemy pojawiające się przy zmianie wspólnika spółki z o.o. to:</p>

              <ul className="list-disc space-y-2 pl-6 text-lg text-white/90">
                <li>pominięcie ograniczeń zbywalności udziałów wynikających z umowy spółki (w tym brak wymaganej zgody spółki),</li>
                <li>nieprawidłowa forma umowy zbycia udziałów albo brak wymaganego podpisu/poświadczenia,</li>
                <li>niespójność dokumentów transakcyjnych i korporacyjnych stanowiących podstawę wpisu,</li>
                <li>błędne dane dotyczące liczby lub wartości nominalnej udziałów ujawnionego wspólnika,</li>
                <li>brak opłaty lub nieprawidłowe potwierdzenie płatności za wniosek.</li>
              </ul>

              <p className="text-lg text-white/90">
                Skutkiem takich błędów może być wezwanie do uzupełnienia braków formalnych, zwrot wniosku i wydłużenie całej procedury.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <div className="space-y-5">
              <h2 className="mb-4 text-center text-2xl font-bold text-amber-400 sm:text-3xl">
                Najczęściej zadawane pytania
              </h2>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Czy każda zmiana wspólnika w spółce z o.o. wymaga zgłoszenia do KRS?</h3>
                <p className="text-lg text-white/90">
                  Nie w każdym przypadku. Obowiązek złożenia wniosku o zmianę wpisu w rejestrze przedsiębiorców powstaje wtedy, gdy w wyniku transakcji zmieniają się dane podlegające ujawnieniu w KRS, w szczególności w zakresie wspólników posiadających co najmniej 10% kapitału zakładowego oraz danych dotyczących liczby i wartości nominalnej udziałów ujawnionego wspólnika.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Czy sprzedaż udziałów zawsze wymaga notarialnego poświadczenia podpisów?</h3>
                <p className="text-lg text-white/90">
                  Co do zasady tak – umowa zbycia udziałów wymaga formy pisemnej z podpisami notarialnie poświadczonymi. Wyjątek dotyczy spółek obsługiwanych w S24, gdzie przy wykorzystaniu wzorca systemowego zbycie udziałów może zostać dokonane w trybie przewidzianym w systemie teleinformatycznym i podpisane elektronicznie.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Czy umowa spółki może ograniczać sprzedaż udziałów?</h3>
                <p className="text-lg text-white/90">
                  Tak. Umowa spółki może uzależnić zbycie udziałów od zgody spółki albo w inny sposób ograniczyć możliwość ich zbycia. Przed transakcją konieczna jest analiza postanowień umowy spółki, aby uniknąć ryzyka nieważności albo sporu co do skuteczności zbycia.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Ile trwa wpis zmiany wspólnika w KRS?</h3>
                <p className="text-lg text-white/90">
                  Czas zależy od obciążenia sądu rejestrowego oraz poprawności wniosku i załączników. Najczęściej największe opóźnienia wynikają z braków formalnych i wezwań do uzupełnienia, w tym z braku wymaganej zgody spółki na zbycie udziałów lub niespójności dokumentów.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Jakie dokumenty są potrzebne do zmiany wspólnika spółki z o.o.?</h3>
                <p className="text-lg text-white/90">
                  Dokumenty zależą od scenariusza. W typowej sprzedaży udziałów są to w szczególności umowa zbycia udziałów w wymaganej formie oraz ewentualna zgoda spółki, jeżeli wymaga tego umowa spółki. Przy wejściu inwestora i podwyższeniu kapitału występują dodatkowo uchwały i dokumenty dotyczące objęcia udziałów oraz – co do zasady – zmiana umowy spółki. Przy dziedziczeniu podstawą są dokumenty potwierdzające nabycie spadku.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <div className="space-y-4">
              <h2 className="mb-4 text-center text-2xl font-bold text-amber-400 sm:text-3xl">
                Zleć zmianę wspólnika spółki z o.o.
              </h2>

              <p className="text-lg text-white/90">
                Jeżeli chcesz przeprowadzić zmianę wspólnika spółki z o.o. w sposób sprawny i bez ryzyka błędów formalnych, skontaktuj się z nami. Przeanalizujemy umowę spółki i dokumenty transakcyjne, ustalimy, czy w danym stanie faktycznym powstaje obowiązek aktualizacji danych ujawnianych w rejestrze przedsiębiorców, a następnie przygotujemy i przeprowadzimy zgłoszenie w PRS lub S24, jeżeli jest wymagane.
              </p>

              <p className="text-lg text-white/90">
                Zobacz też inne{" "}
                <Link href="/uslugi" className="text-amber-400 underline transition hover:text-amber-300">
                  usługi dotyczące zmian wpisów w KRS
                </Link>{" "}
                oraz{" "}
                <Link href="/cennik" className="text-amber-400 underline transition hover:text-amber-300">
                  Poznaj koszt innych zmian
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
