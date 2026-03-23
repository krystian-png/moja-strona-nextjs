import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { Phone } from "lucide-react"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { brandName, organizationSchema, siteUrl } from "@/lib/seo"
import servicesBackground from "@/public/images/profesjonalne-biuro-obslugi-krs-eksperci-zmiany-wpisu-rejestr-sadowy-doswiadczenie.webp"

import InlineContactForm from "../_components/InlineContactForm"

const pagePath = "/uslugi/zmiana-adresu-spolki-zoo"
const pageUrl = `${siteUrl}${pagePath}`

const legalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Zmiana adresu i siedziby sp. z o.o. – zgłoszenie do KRS (PRS/S24)",
  url: pageUrl,
  description:
    "Zmiana adresu spółki z o.o. i zmiana siedziby w KRS: różnice prawne, dokumenty, wniosek przez PRS/S24, opłaty 250/200 zł, terminy, najczęstsze błędy i ryzyka doręczeń. Obsługa od 799 zł.",
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
      name: "Czym różni się zmiana adresu od zmiany siedziby spółki z o.o.?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Siedziba to miejscowość (art. 41 k.c.). Zmiana ulicy/numeru/lokalu w tej samej miejscowości to zmiana adresu, a zmiana miejscowości to zmiana siedziby.",
      },
    },
    {
      "@type": "Question",
      name: "Jaki jest termin na zgłoszenie zmiany adresu lub siedziby do KRS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wniosek o wpis do rejestru składa się nie później niż w terminie 7 dni od zdarzenia uzasadniającego wpis (art. 22 ust. 1 ustawy o KRS).",
      },
    },
    {
      "@type": "Question",
      name: "Czy zmiana siedziby zawsze oznacza zmianę umowy spółki?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak, zmiana siedziby (miejscowości) to zmiana umowy spółki i wymaga uchwały wspólników oraz wpisu do KRS (art. 255 § 1 KSH).",
      },
    },
    {
      "@type": "Question",
      name: "Ile kosztuje zgłoszenie zmiany adresu lub siedziby do KRS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Opłata sądowa wynosi 250 zł przy wniosku przez PRS albo 200 zł w ustawowych przypadkach przy S24 (art. 55 pkt 2–3 u.k.s.c.).",
      },
    },
    {
      "@type": "Question",
      name: "Jakie ryzyko wiąże się z brakiem aktualizacji danych adresowych?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Brak aktualizacji może powodować ryzyka doręczeń i skutki procesowe (art. 133 § 2² k.p.c.) oraz ryzyka obrotowe wynikające z zasady zaufania do rejestru (art. 17 ust. 1–2 ustawy o KRS).",
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
      name: "Zmiana adresu i siedziby sp. z o.o.",
      item: pageUrl,
    },
  ],
}

export const metadata: Metadata = {
  title: "Zmiana adresu spółki z o.o. – obsługa od 799 zł | ZmianaKRS.pl",
  description:
    "Zmiana adresu lub siedziby spółki z o.o. w KRS. Przygotujemy dokumenty i złożymy wniosek przez PRS lub S24 za Ciebie. Bez błędów, bez zwrotów. Od 799 zł netto.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Zmiana adresu spółki z o.o. – obsługa od 799 zł | ZmianaKRS.pl",
    description:
      "Zmiana adresu spółki z o.o. i zmiana siedziby w KRS: różnice prawne, dokumenty, wniosek przez PRS/S24, opłaty 250/200 zł, terminy, najczęstsze błędy i ryzyka doręczeń.",
    url: pageUrl,
    siteName: brandName,
    images: [
      {
        url: `${siteUrl}/images/krs-services.png`,
        width: 1200,
        height: 630,
        alt: "Zmiana adresu i siedziby spółki z o.o. – obsługa ZmianaKRS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zmiana adresu spółki z o.o. – obsługa od 799 zł | ZmianaKRS.pl",
    description:
      "Zmiana adresu spółki z o.o. i zmiana siedziby w KRS: różnice prawne, dokumenty, wniosek przez PRS/S24, opłaty 250/200 zł, terminy, najczęstsze błędy i ryzyka doręczeń.",
    images: [`${siteUrl}/images/krs-services.png`],
  },
}

export default function ZmianaAdresuSpolkiZooPage() {
  return (
    <div className="relative min-h-screen text-white">
      <Script id="zmiana-adresu-structured-data" type="application/ld+json">
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
                  Zmiana adresu i siedziby spółki z o.o. – zgłoszenie do KRS (PRS / S24)
                </h1>
                <p className="text-lg text-white/90">
                  Zmiana adresu spółki z o.o. w obrębie tej samej miejscowości oraz zmiana siedziby (czyli miejscowości) to dwa różne
                  zdarzenia rejestrowe, które w praktyce wymagają innej dokumentacji i innej kwalifikacji prawnej. W KRS ujawnia się
                  zarówno siedzibę, jak i adres, a spółka ma obowiązek zgłaszać zmiany danych w ustawowym terminie 7 dni (art. 22 ust.
                  1 ustawy o KRS). W tej usłudze prowadzimy sprawę od kwalifikacji do wpisu: ustalamy, czy masz zmianę adresu (ulica,
                  numer, lokal w tej samej miejscowości), czy zmianę siedziby (inna miejscowość), dobieramy właściwy tryb złożenia
                  wniosku (PRS albo – jeśli spełnione warunki – S24), przygotowujemy dokumenty i składamy wniosek elektronicznie,
                  pilnując spójności danych oraz podpisów. Jeżeli chcesz przeprowadzić zmianę adresu spółki z o.o. bez ryzyka braków
                  formalnych i wezwań sądu, możemy przeprowadzić całą procedurę w Twoim imieniu – pełna obsługa od 799 zł netto.
                </p>
                <p className="text-lg text-white/90">
                  <strong>Szukasz „zmiana adresu spółki z o.o.”?</strong> Zgłosimy zmianę adresu Twojej spółki z o.o. do KRS (PRS/S24)
                  i doprowadzimy sprawę do wpisu — pełna obsługa od <strong>799 zł netto</strong>.
                </p>
                <p className="text-lg text-white/90">Wyceń zmianę adresu spółki z o.o. – zostaw dane w formularzu albo zadzwoń: 572 234 779.</p>
                <p className="text-lg text-white/90">
                  W tej usłudze prowadzimy sprawę „od kwalifikacji do wpisu”: ustalamy, czy masz <strong>zmianę adresu</strong>
                  (ulica/numer/lokal w tej samej miejscowości), czy <strong>zmianę siedziby</strong> (inna miejscowość), dobieramy
                  właściwy tryb złożenia wniosku (PRS albo – jeśli spełnione warunki – S24), przygotowujemy dokumenty i składamy
                  wniosek elektronicznie, pilnując spójności danych oraz podpisów.
                </p>
                <p className="text-lg text-white/90">
                  Na naszej stronie znajdziesz również inne usługi związane ze zmianami w KRS – zobacz: <Link href="/uslugi" className="text-amber-400 underline transition hover:text-amber-300">usługi dotyczące zmian wpisów w KRS</Link>.
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
              <h2 className="mb-4 text-center text-2xl font-bold text-amber-400 sm:text-3xl">Podstawa prawna zmiany adresu i siedziby spółki z o.o.</h2>
              <p className="text-lg text-white/90">
                W rejestrze przedsiębiorców ujawnia się m.in. siedzibę i adres podmiotu, więc ich aktualizacja jest klasycznym
                obowiązkiem rejestrowym. Ustawa o KRS przewiduje krótki termin: <strong>wniosek o wpis do rejestru składa się nie
                później niż w terminie 7 dni od zdarzenia uzasadniającego wpis</strong> (art. 22 ust. 1 ustawy o KRS).
              </p>
              <p className="text-lg text-white/90">
                Rozróżnienie „adres vs siedziba” nie jest językowe, tylko prawne. Zgodnie z Kodeksem cywilnym <strong>siedzibą osoby
                prawnej jest miejscowość</strong> (art. 41 k.c.). To znaczy, że:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-lg text-white/90">
                <li>gdy zmieniasz <strong>ulicę/numer/lokal</strong> w tej samej miejscowości — aktualizujesz <strong>adres</strong>,</li>
                <li>gdy zmieniasz <strong>miejscowość</strong> — zmieniasz <strong>siedzibę</strong>.</li>
              </ul>
              <p className="text-lg text-white/90">
                W spółce z o.o. zmiana siedziby (miejscowości) wchodzi w reżim czynności korporacyjnej: <strong>jest to zmiana umowy
                spółki</strong> i wymaga <strong>uchwały wspólników oraz wpisu do rejestru</strong> (art. 255 § 1 KSH). W praktyce ma to
                „twardy” skutek: bez właściwej dokumentacji (uchwały/zmiany umowy) wniosek o zmianę siedziby będzie traktowany jak
                niekompletny.
              </p>
              <p className="text-lg text-white/90">
                Dodatkowo, aktualność danych ma znaczenie „obrotowe”. Ustawa o KRS wprowadza domniemania dotyczące danych ujawnionych
                w rejestrze oraz ogranicza możliwość powoływania się wobec osób trzecich na niezgodność wpisu ze stanem rzeczywistym,
                jeżeli podmiot zaniedbał zgłoszenia zmian (art. 17 ust. 1–2 ustawy o KRS). To jest jeden z powodów, dla których przy
                zmianach adresowych nie warto odkładać wniosku.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <div className="space-y-4">
              <h2 className="mb-4 text-center text-2xl font-bold text-amber-400 sm:text-3xl">Koszty zmiany adresu spółki z o.o. w KRS (PRS/S24) + czas wpisu</h2>
              <p className="text-lg text-white/90">Opłata sądowa za wpis zmiany w rejestrze przedsiębiorców zależy od trybu złożenia wniosku:</p>
              <div className="overflow-x-auto rounded-lg border border-white/20 bg-white/5">
                <table className="w-full min-w-[420px] border-collapse text-left text-base">
                  <thead>
                    <tr className="border-b border-white/20 bg-white/10">
                      <th className="px-5 py-3.5">Zakres zmiany</th>
                      <th className="px-5 py-3.5">Opłata sądowa</th>
                      <th className="px-5 py-3.5">Uwagi praktyczne</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/20 bg-white/5">
                      <td className="px-5 py-3.5">Zmiana adresu (ta sama miejscowość)</td>
                      <td className="px-5 py-3.5">250 zł (PRS) / 200 zł (S24)</td>
                      <td className="px-5 py-3.5">S24 tylko w sytuacjach ustawowych przy wykorzystaniu wzorca</td>
                    </tr>
                    <tr className="bg-white/[0.03]">
                      <td className="px-5 py-3.5">Zmiana siedziby (inna miejscowość)</td>
                      <td className="px-5 py-3.5">250 zł (PRS)</td>
                      <td className="px-5 py-3.5">Zwykle dochodzą dokumenty zmiany umowy spółki</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-lg text-white/90">Podstawa prawna opłat: <strong>250 zł</strong> (art. 55 pkt 2 u.k.s.c.) oraz <strong>200 zł</strong> w przypadkach ustawowych (art. 55 pkt 3 u.k.s.c.).</p>
              <p className="text-lg text-white/90">Jeżeli wniosek składa pełnomocnik, standardowo dochodzi opłata skarbowa od pełnomocnictwa.</p>
              <p className="text-lg text-white/90">Jeżeli mamy <strong>zmianę siedziby (miejscowości)</strong>, zwykle dochodzi też koszt przygotowania dokumentów „umownych” (uchwała/zmiana umowy) i – zależnie od trybu – ewentualne koszty notarialne, jeżeli dana zmiana wymaga formy aktu notarialnego.</p>
              <p className="text-lg text-white/90"><strong>Koszt naszej obsługi zmiany adresu/siedziby sp. z o.o. zaczyna się od 799 zł netto</strong> i zależy od tego, czy sprawa jest prostą aktualizacją adresu, czy zmianą siedziby wymagającą pełnego pakietu korporacyjnego oraz od liczby dokumentów i złożoności stanu faktycznego.</p>
              <h3 className="mt-6 text-xl font-semibold sm:text-2xl">Ile trwa wpis zmiany adresu/siedziby do KRS?</h3>
              <p className="text-lg text-white/90">Czas zależy od obciążenia sądu rejestrowego oraz od jakości wniosku i dokumentów. W praktyce opóźnienia wynikają najczęściej z wezwań do uzupełnienia braków formalnych: rozbieżności danych, braków w dokumentach stanowiących podstawę wpisu albo problemów z podpisami i załącznikami. Dlatego w tej usłudze nacisk kładziemy na kompletność i spójność dokumentacji „od razu”, zanim wniosek trafi do sądu.</p>
              <p className="text-lg text-white/90">Wiesz już, ile kosztuje zmiana adresu spółki z o.o. — zostaw dane, wycenimy Twoją sprawę.</p>
              <p className="text-lg text-white/90">Poznaj koszt innych zmian: <Link href="/cennik" className="text-amber-400 underline transition hover:text-amber-300"><strong>Poznaj koszt innych zmian</strong></Link>.</p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <div className="space-y-4">
              <h2 className="mb-4 text-center text-2xl font-bold text-amber-400 sm:text-3xl">Dokumenty do zmiany adresu i siedziby spółki z o.o.</h2>
              <p className="text-lg text-white/90">
                Dokumenty dobiera się przede wszystkim do tego, czy mamy zmianę <strong>adresu</strong> (w tej samej miejscowości),
                czy zmianę <strong>siedziby</strong> (inna miejscowość).
              </p>
              <p className="text-lg text-white/90">Przy <strong>zmianie adresu w tej samej miejscowości</strong> najczęściej potrzebne są:</p>
              <ul className="list-disc space-y-2 pl-6 text-lg text-white/90">
                <li>dokument korporacyjny potwierdzający decyzję o zmianie adresu (zwykle uchwała zarządu, chyba że umowa spółki przewiduje inny tryb),</li>
                <li>wniosek elektroniczny o zmianę danych w KRS (PRS albo – gdy to dopuszczalne – S24),</li>
                <li>prawidłowe podpisy elektroniczne pod wnioskiem i załącznikami (zgodnie z zasadami reprezentacji).</li>
              </ul>
              <p className="text-lg text-white/90">Przy <strong>zmianie siedziby (miejscowości)</strong> potrzebujesz dokumentów „umownych”:</p>
              <ul className="list-disc space-y-2 pl-6 text-lg text-white/90">
                <li>uchwały wspólników o zmianie umowy spółki w zakresie siedziby,</li>
                <li>dokumentu zmiany umowy w wymaganej formie (w zależności od trybu),</li>
                <li>w praktyce często także tekstu jednolitego umowy po zmianie – żeby uniknąć niespójności między dokumentami i wnioskiem,</li>
                <li>wniosku do KRS z właściwymi załącznikami.</li>
              </ul>
              <p className="text-lg text-white/90">
                Tu działa kluczowa reguła: <strong>zmiana umowy spółki wymaga uchwały i wpisu do rejestru</strong> (art. 255 § 1 KSH),
                więc przy zmianie miejscowości sąd będzie oczekiwał dokumentów potwierdzających zmianę umowy.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <div className="space-y-5">
              <h2 className="mb-4 text-center text-2xl font-bold text-amber-400 sm:text-3xl">Jak zgłosimy zmianę adresu / siedziby Twojej spółki</h2>
              <ol className="list-decimal space-y-3 pl-6 text-lg text-white/90">
                <li>
                  <strong>Kwalifikacja zmiany (adres czy siedziba)</strong>
                  <br />
                  Ustalamy, czy zmieniasz tylko elementy adresowe w tej samej miejscowości, czy zmieniasz miejscowość (siedzibę w
                  rozumieniu art. 41 k.c.). Od tego zależy cała dokumentacja.
                </li>
                <li>
                  <strong>Dobór trybu i komplet dokumentów</strong>
                  <br />
                  Dobieramy tryb złożenia wniosku (PRS albo – gdy spełnione warunki – S24) oraz listę dokumentów. Przy zmianie
                  siedziby przygotowujemy komplet korporacyjny (uchwała/zmiana umowy) zgodnie z art. 255 § 1 KSH.
                </li>
                <li>
                  <strong>Spójność danych i podpisów</strong>
                  <br />
                  Weryfikujemy, czy adres/siedziba są identycznie wpisane w dokumentach, wniosku i załącznikach (miejscowość, kod,
                  numer lokalu, format zapisu). W praktyce to właśnie niespójność danych jest najczęstszą przyczyną wezwań.
                </li>
                <li>
                  <strong>Złożenie wniosku elektronicznie</strong>
                  <br />
                  Składamy wniosek w systemie teleinformatycznym, dołączając dokumenty i wnosząc opłatę sądową adekwatną do trybu
                  (art. 55 pkt 2 albo pkt 3 u.k.s.c.).
                </li>
                <li>
                  <strong>Monitoring do wpisu</strong>
                  <br />
                  Pilnujemy sprawy i reagujemy, jeśli sąd wezwie do uzupełnienia braków, tak żeby nie tracić czasu na „drugie
                  podejście”.
                </li>
              </ol>
              <InlineContactForm className="max-w-md" />
            </div>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <div className="space-y-4">
              <h2 className="mb-4 text-center text-2xl font-bold text-amber-400 sm:text-3xl">Typowe sytuacje klientów – kiedy potrzebna jest zmiana adresu/siedziby w KRS</h2>
              <h3 className="text-xl font-semibold sm:text-2xl">Przeniesienie biura w tej samej miejscowości (zmiana adresu)</h3>
              <p className="text-lg text-white/90">
                To klasyczny przypadek aktualizacji adresu: zmienia się ulica/numer/lokal, ale miejscowość pozostaje ta sama. W
                takich sprawach kluczowe są spójność danych w dokumentach oraz poprawna forma i podpisy pod załącznikami.
              </p>
              <p className="text-lg text-white/90">
                Przykład praktyczny: uchwała wskazuje „ul. X 10/12”, a we wniosku wpisano „ul. X 10” bez lokalu. Dla spółki to
                drobiazg, ale dla sądu to rozbieżność danych rejestrowych i typowy powód wezwania.
              </p>
              <h3 className="text-xl font-semibold sm:text-2xl">Przeniesienie działalności do innego miasta (zmiana siedziby)</h3>
              <p className="text-lg text-white/90">
                To nie jest „zmiana adresu”. Zmienia się siedziba w rozumieniu prawa, czyli miejscowość (art. 41 k.c.), a w spółce z
                o.o. oznacza to <strong>zmianę umowy spółki</strong> wymagającą uchwały wspólników i wpisu (art. 255 § 1 KSH).
              </p>
              <p className="text-lg text-white/90">
                Tu dochodzi praktyczny wątek skuteczności i komunikacji „na zewnątrz”: przy zmianie siedziby ostrożnie planuje się
                moment, od którego spółka zaczyna posługiwać się nową miejscowością jako danymi „publicznymi” (umowy, banki,
                kontrahenci), bo formalnie funkcjonujesz w reżimie ujawnienia danych w rejestrze. Równolegle trzeba zadbać o ciągłość
                odbioru korespondencji pod starym adresem, bo w obrocie i w doręczeniach punkt odniesienia bywa adresem udostępnionym
                w rejestrze (art. 133 § 2² k.p.c.).
              </p>
              <p className="text-lg text-white/90">
                Chcesz pełną instrukcję techniczną PRS/S24 i przykłady wypełnienia wniosku? Zobacz poradnik:{" "}
                <Link
                  href="/artykul/zmiana-adresu-i-siedziby-spolki-w-krs-krok-po-kroku"
                  className="text-amber-300 underline underline-offset-2 hover:text-amber-200"
                >
                  https://zmianakrs.pl/artykul/zmiana-adresu-i-siedziby-spolki-w-krs-krok-po-kroku
                </Link>
              </p>
              {/* TODO: potwierdzić/podmienić slug artykułu, jeśli docelowa ścieżka będzie inna */}
            </div>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <div className="space-y-4">
              <h2 className="mb-4 text-center text-2xl font-bold text-amber-400 sm:text-3xl">Najczęstsze błędy przy zmianie adresu/siedziby spółki z o.o.</h2>
              <p className="text-lg text-white/90">Najczęściej problem nie wynika z „trudnego formularza”, tylko z klasycznych błędów formalnych:</p>
              <ul className="list-disc space-y-2 pl-6 text-lg text-white/90">
                <li><strong>Pomylenie adresu z siedzibą</strong>: we wniosku pojawia się nowa miejscowość, ale brak uchwały wspólników i dokumentów zmiany umowy — a w sp. z o.o. to obowiązkowe (art. 255 § 1 KSH).</li>
                <li><strong>Niespójność danych</strong>: różnice w numerze lokalu, kodzie pocztowym, zapisie miejscowości albo ulicy między uchwałą a wnioskiem.</li>
                <li><strong>Błędne podpisy</strong>: podpis niezgodny z ujawnioną w KRS reprezentacją.</li>
                <li><strong>Załączniki w nieprawidłowej formie</strong>: wniosek jest podpisany, ale podstawowe dokumenty są dołączone jako „skan papieru” bez właściwej formy i podpisu elektronicznego.</li>
                <li><strong>Zły dobór trybu</strong>: próba przeprowadzenia sprawy w S24 w sytuacji, gdy realnie trzeba złożyć wniosek w PRS.</li>
              </ul>
              <p className="text-lg text-white/90">Skutek jest zawsze ten sam: wezwanie, zwrot albo przeciągnięcie wpisu w czasie.</p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <div className="space-y-5">
              <h2 className="mb-4 text-center text-2xl font-bold text-amber-400 sm:text-3xl">FAQ – zmiana adresu i siedziby spółki z o.o. w KRS</h2>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Czym różni się zmiana adresu od zmiany siedziby spółki z o.o.?</h3>
                <p className="text-lg text-white/90">Siedziba to miejscowość (art. 41 k.c.). Zmiana ulicy/numeru/lokalu w tej samej miejscowości to zmiana adresu, a zmiana miejscowości to zmiana siedziby.</p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Jaki jest termin na zgłoszenie zmiany adresu lub siedziby do KRS?</h3>
                <p className="text-lg text-white/90">Wniosek o wpis do rejestru składa się nie później niż w terminie 7 dni od zdarzenia uzasadniającego wpis (art. 22 ust. 1 ustawy o KRS).</p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Czy zmiana siedziby zawsze oznacza zmianę umowy spółki?</h3>
                <p className="text-lg text-white/90">Tak, zmiana siedziby (miejscowości) to zmiana umowy spółki i wymaga uchwały wspólników oraz wpisu do KRS (art. 255 § 1 KSH).</p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Ile kosztuje zgłoszenie zmiany adresu lub siedziby do KRS?</h3>
                <p className="text-lg text-white/90">Opłata sądowa wynosi 250 zł przy wniosku przez PRS albo 200 zł w ustawowych przypadkach przy S24 (art. 55 pkt 2–3 u.k.s.c.).</p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Jakie ryzyko wiąże się z brakiem aktualizacji danych adresowych?</h3>
                <p className="text-lg text-white/90">Brak aktualizacji może powodować ryzyka doręczeń i skutki procesowe (art. 133 § 2² k.p.c.) oraz ryzyka obrotowe wynikające z zasady zaufania do rejestru (art. 17 ust. 1–2 ustawy o KRS).</p>
              </div>
            </div>
          </div>

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
                  <Link href="/uslugi/zmiana-umowy-spolki-zoo" className="text-amber-400 underline transition hover:text-amber-300">
                    zmiana umowy spółki z o.o.
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
              <h2 className="mb-4 text-center text-2xl font-bold text-amber-400 sm:text-3xl">Zleć zmianę adresu / siedziby spółki z o.o.</h2>
              <p className="text-lg text-white/90">
                Jeżeli chcesz zrobić zmianę adresu albo siedziby bez ryzyka braków formalnych, zleć to nam. Ustalimy prawidłową
                kwalifikację (adres vs siedziba), przygotujemy dokumenty, złożymy wniosek elektronicznie i przeprowadzimy procedurę
                zgłoszenia zmiany wpisu w KRS.
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
                <a href="tel:+48572234779" className="inline-flex items-center gap-2 underline underline-offset-2 hover:text-amber-300">
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
