import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { Phone } from "lucide-react"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { brandName, organizationSchema, siteUrl } from "@/lib/seo"
import servicesBackground from "@/public/images/profesjonalne-biuro-obslugi-krs-eksperci-zmiany-wpisu-rejestr-sadowy-doswiadczenie.webp"

import InlineContactForm from "./InlineContactForm"

const pagePath = "/uslugi/zmiana-zarzadu-sp-z-oo"
const pageUrl = `${siteUrl}${pagePath}`

const legalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Zmiana zarządu sp. z o.o. – powołanie, odwołanie, rezygnacja",
  url: pageUrl,
  description:
    "Zmiana zarządu sp. z o.o. – powołanie, odwołanie lub rezygnacja członka zarządu. Dokumenty, koszty PRS/S24 i zgłoszenie do KRS. Obsługa od 799 zł.",
  provider: organizationSchema,
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Czy każdą zmianę zarządu trzeba zgłaszać do KRS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak. Każde powołanie, odwołanie lub rezygnacja członka zarządu powoduje zmianę składu organu spółki i wymaga zgłoszenia do KRS.",
      },
    },
    {
      "@type": "Question",
      name: "Ile trwa wpis zmiany zarządu sp. z o.o.?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Przy poprawnie przygotowanych dokumentach wpis może zostać dokonany nawet w ciągu kilku dni roboczych, jednak czas zależy od obciążenia sądu rejestrowego.",
      },
    },
    {
      "@type": "Question",
      name: "Czy powołanie lub odwołanie członka zarządu to zmiana zarządu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak. Zarówno powołanie nowego członka zarządu, jak i odwołanie dotychczasowego powodują zmianę składu zarządu spółki.",
      },
    },
    {
      "@type": "Question",
      name: "Czy rezygnacja członka zarządu wymaga zgłoszenia do KRS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak. Rezygnacja powoduje wygaśnięcie mandatu i powinna zostać zgłoszona do KRS, aby dane w rejestrze odpowiadały rzeczywistemu stanowi spółki.",
      },
    },
    {
      "@type": "Question",
      name: "Czy zmiana zarządu może wymagać notariusza?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zasadniczo nie, chyba że zmiana wiąże się ze zmianą sposobu reprezentacji i wymaga zmiany umowy spółki w formie aktu notarialnego.",
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
      name: "Zmiana zarządu sp. z o.o.",
      item: pageUrl,
    },
  ],
}

export const metadata: Metadata = {
  title: "Zmiana zarządu sp. z o.o. – powołanie, odwołanie, rezygnacja | ZmianaKRS.pl",
  description:
    "Zmiana zarządu sp. z o.o. – powołanie, odwołanie lub rezygnacja członka zarządu. Dokumenty, koszty PRS/S24 i zgłoszenie do KRS. Obsługa od 799 zł.",
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: "Zmiana zarządu sp. z o.o. – powołanie, odwołanie, rezygnacja | ZmianaKRS.pl",
    description:
      "Zmiana zarządu sp. z o.o. – powołanie, odwołanie lub rezygnacja członka zarządu. Dokumenty, koszty PRS/S24 i zgłoszenie do KRS. Obsługa od 799 zł.",
    url: pageUrl,
    siteName: brandName,
    images: [
      {
        url: `${siteUrl}/images/krs-services.png`,
        width: 1200,
        height: 630,
        alt: "Zmiana zarządu sp. z o.o. – obsługa ZmianaKRS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zmiana zarządu sp. z o.o. – powołanie, odwołanie, rezygnacja | ZmianaKRS.pl",
    description:
      "Zmiana zarządu sp. z o.o. – powołanie, odwołanie lub rezygnacja członka zarządu. Dokumenty, koszty PRS/S24 i zgłoszenie do KRS. Obsługa od 799 zł.",
    images: [`${siteUrl}/images/krs-services.png`],
  },
}

export default function ZmianaZarzaduPage() {
  return (
    <div className="relative min-h-screen text-white">
      <Script id="zmiana-zarzadu-structured-data" type="application/ld+json">
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
                  Zmiana zarządu sp. z o.o. – powołanie, odwołanie lub rezygnacja członka zarządu
                </h1>
                <p className="text-lg text-white/90">
                  Zmiana zarządu sp. z o.o. to jeden z najważniejszych momentów w funkcjonowaniu spółki. Powołanie nowego członka
                  zarządu, odwołanie dotychczasowego albo rezygnacja z pełnienia funkcji wymaga prawidłowego przygotowania
                  dokumentów oraz terminowego zgłoszenia zmian do Krajowego Rejestru Sądowego.
                </p>
                <p className="text-lg text-white/90">
                  Oferujemy kompleksową obsługę zmiany zarządu sp. z o.o. – od analizy umowy spółki i przygotowania uchwał, po
                  elektroniczne złożenie wniosku w PRS lub S24 oraz monitorowanie sprawy aż do dokonania wpisu w KRS.
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
              <h2 className="mb-4 text-center text-2xl font-bold text-amber-400 sm:text-3xl">Podstawa prawna zmiany zarządu w spółce z o.o.</h2>
              <p className="text-lg text-white/90">
                Zmiana zarządu sp. z o.o. wynika z przepisów Kodeksu spółek handlowych regulujących funkcjonowanie zarządu oraz z
                ustawy o Krajowym Rejestrze Sądowym, która określa obowiązek aktualizacji danych ujawnionych w rejestrze
                przedsiębiorców.
              </p>
              <p className="text-lg text-white/90">
                Najważniejsze zasady praktyczne są dwie: zmiana składu zarządu wymaga odpowiedniej uchwały lub oświadczenia, a
                zgłoszenie zmiany zarządu sp. z o.o. do KRS należy złożyć w terminie 7 dni od jej dokonania.
              </p>
              <p className="text-lg text-white/90">
                Terminowa aktualizacja danych jest istotna także z perspektywy praktyki obrotu – banki, leasingodawcy i kontrahenci
                bardzo często oczekują potwierdzenia aktualnego składu zarządu ujawnionego w KRS.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <div className="space-y-4">
              <h2 className="mb-4 text-center text-2xl font-bold text-amber-400 sm:text-3xl">Koszty zmiany zarządu sp. z o.o.</h2>
              <p className="text-lg text-white/90">Koszt zgłoszenia zmiany zarządu zależy od sposobu złożenia wniosku:</p>
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
              <p className="text-lg text-white/90">Nie pobiera się już opłaty za ogłoszenie wpisu w Monitorze Sądowym i Gospodarczym.</p>
              <p className="text-lg text-white/90">
                Jeżeli zmiana zarządu wiąże się jednocześnie ze zmianą sposobu reprezentacji wymagającą zmiany umowy spółki w formie
                aktu notarialnego, należy uwzględnić również koszty notarialne.
              </p>
              <p className="text-lg text-white/90">
                Koszt naszej obsługi zmiany zarządu sp. z o.o. zaczyna się od około 799 zł, w zależności od zakresu zmian oraz liczby
                przygotowywanych dokumentów.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <div className="space-y-4">
              <h2 className="mb-4 text-center text-2xl font-bold text-amber-400 sm:text-3xl">Dokumenty do zmiany zarządu sp. z o.o.</h2>
              <p className="text-lg text-white/90">
                Do zgłoszenia zmiany zarządu sp. z o.o. w KRS należy przygotować komplet dokumentów potwierdzających dokonanie zmian
                w organie spółki.
              </p>
              <p className="text-lg text-white/90">Najczęściej są to:</p>
              <ul className="list-disc space-y-2 pl-6 text-lg text-white/90">
                <li>uchwała o powołaniu lub odwołaniu członka zarządu,</li>
                <li>zgoda na pełnienie funkcji członka zarządu,</li>
                <li>oświadczenie o adresie do doręczeń,</li>
                <li>wykaz aktualnego składu zarządu,</li>
                <li>pełnomocnictwo (jeżeli działa pełnomocnik),</li>
                <li>potwierdzenie uiszczenia opłaty sądowej.</li>
              </ul>
              <p className="text-lg text-white/90">
                Brak któregokolwiek z wymaganych dokumentów lub rozbieżności między uchwałą a wnioskiem są jedną z najczęstszych
                przyczyn wezwań sądu do uzupełnienia braków formalnych.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <div className="space-y-4">
              <h2 className="mb-4 text-center text-2xl font-bold text-amber-400 sm:text-3xl">Podstawa prawna zmiany zarządu spółki z o.o.</h2>
              <p className="text-lg text-white/90">
                Zmiana zarządu spółki z ograniczoną odpowiedzialnością (powołanie, odwołanie albo rezygnacja członka zarządu)
                wynika przede wszystkim z regulacji zawartych w Kodeksie spółek handlowych dotyczących funkcjonowania zarządu jako
                organu spółki.
              </p>
              <p className="text-lg text-white/90">
                Zgodnie z art. 201 § 1 Kodeksu spółek handlowych zarząd prowadzi sprawy spółki i reprezentuje ją na zewnątrz. W myśl
                art. 201 § 4 KSH członek zarządu jest co do zasady powoływany i odwoływany uchwałą wspólników, chyba że umowa spółki
                przewiduje inny tryb.
              </p>
              <p className="text-lg text-white/90">
                Po dokonaniu zmiany w strukturze organu spółki konieczne jest również ujawnienie tej zmiany w rejestrze
                przedsiębiorców KRS. Zgodnie z art. 22 ustawy o Krajowym Rejestrze Sądowym wniosek o wpis zmiany do rejestru
                powinien zostać złożony w terminie 7 dni od dnia zdarzenia uzasadniającego dokonanie wpisu.
              </p>
              <p className="text-lg text-white/90">
                W praktyce oznacza to, że zmiana zarządu spółki z o.o. wymaga zarówno prawidłowego przygotowania dokumentów
                korporacyjnych (np. uchwały wspólników lub oświadczenia o rezygnacji), jak i złożenia kompletnego wniosku do
                Krajowego Rejestru Sądowego.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <div className="space-y-5">
              <h2 className="mb-4 text-center text-2xl font-bold text-amber-400 sm:text-3xl">Jak zgłosimy zmianę zarządu Twojej spółki</h2>
              <ol className="space-y-4 text-lg text-white/90">
                <li>
                  <p className="font-semibold text-white">1. Analiza dokumentów spółki</p>
                  <p>Sprawdzamy umowę spółki oraz aktualny sposób reprezentacji, aby ustalić właściwy tryb dokonania zmian.</p>
                </li>
                <li>
                  <p className="font-semibold text-white">2. Przygotowanie uchwał i dokumentów</p>
                  <p>Sporządzamy komplet dokumentów wymaganych do powołania, odwołania lub zgłoszenia rezygnacji członka zarządu.</p>
                </li>
                <li>
                  <p className="font-semibold text-white">3. Weryfikacja poprawności dokumentacji</p>
                  <p>Sprawdzamy zgodność uchwał, danych spółki i zakresu zmian ze zgłoszeniem do KRS.</p>
                </li>
                <li>
                  <p className="font-semibold text-white">4. Złożenie wniosku elektronicznego</p>
                  <p>Składamy wniosek o zmianę wpisu w KRS w systemie PRS lub S24.</p>
                </li>
                <li>
                  <p className="font-semibold text-white">5. Monitorowanie sprawy</p>
                  <p>Nadzorujemy postępowanie przed sądem rejestrowym do momentu dokonania wpisu.</p>
                </li>
              </ol>
              <InlineContactForm className="max-w-md" />
            </div>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <div className="space-y-4">
              <h2 className="mb-4 text-center text-2xl font-bold text-amber-400 sm:text-3xl">Zdarzenia w ramach zmiany zarządu sp. z o.o.</h2>
              <p className="text-lg text-white/90">
                Zmiana zarządu sp. z o.o. obejmuje najczęściej powołanie nowego członka zarządu, odwołanie dotychczasowego albo
                rezygnację z pełnienia funkcji.
              </p>

              <div className="mt-6 space-y-4">
                <h3 className="text-xl font-semibold sm:text-2xl">Powołanie członka zarządu sp. z o.o.</h3>
                <p className="text-lg text-white/90">
                  Powołanie członka zarządu sp. z o.o. następuje na podstawie uchwały właściwego organu spółki, najczęściej
                  zgromadzenia wspólników. Do zgłoszenia powołania przygotowuje się dokumenty potwierdzające zgodę na pełnienie
                  funkcji oraz dane do doręczeń nowego członka zarządu. Po powołaniu nowej osoby spółka powinna zgłosić zmianę
                  zarządu sp. z o.o. do KRS w terminie 7 dni.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-semibold sm:text-2xl">Odwołanie członka zarządu sp. z o.o.</h3>
                <p className="text-lg text-white/90">
                  Odwołanie członka zarządu sp. z o.o. polega na podjęciu uchwały o zakończeniu pełnienia funkcji przez daną osobę. W
                  praktyce kluczowe jest prawidłowe określenie daty odwołania oraz aktualnego składu zarządu po dokonanej zmianie.
                  Odwołanie członka zarządu sp. z o.o. wymaga zgłoszenia zmiany zarządu spółki do KRS.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-semibold sm:text-2xl">Rezygnacja członka zarządu sp. z o.o.</h3>
                <p className="text-lg text-white/90">
                  Rezygnacja członka zarządu sp. z o.o. powoduje wygaśnięcie mandatu i również wymaga zgłoszenia zmiany w KRS. W
                  praktyce istotne jest prawidłowe złożenie oświadczenia o rezygnacji oraz uporządkowanie dokumentacji spółki po
                  wygaśnięciu mandatu, zwłaszcza gdy rezygnacja wpływa na sposób reprezentacji.
                </p>
                <p className="text-lg text-white/90">
                  Czytaj więcej:{" "}
                  <Link
                    href="/artykul/rezygnacja-czlonka-zarzadu-spolka-zoo-wpis-krs"
                    className="text-amber-300 underline underline-offset-2 hover:text-amber-200"
                  >
                    rezygnacja członka zarządu sp. z o.o. – formalności i wpis do KRS.
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <div className="space-y-4">
              <h2 className="mb-4 text-center text-2xl font-bold text-amber-400 sm:text-3xl">Konsekwencje nieterminowego zgłoszenia</h2>
              <p className="text-lg text-white/90">
                Nieterminowe zgłoszenie zmiany zarządu może skutkować sankcjami finansowymi oraz problemami organizacyjnymi. W
                praktyce brak aktualnego wpisu często powoduje trudności w relacjach z bankami, leasingodawcami i kontrahentami,
                którzy oczekują potwierdzenia umocowania do reprezentacji spółki.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <div className="space-y-4">
              <h2 className="mb-4 text-center text-2xl font-bold text-amber-400 sm:text-3xl">Najczęstsze błędy przy zmianie zarządu</h2>
              <p className="text-lg text-white/90">Najczęstsze problemy pojawiające się przy zmianie zarządu spółki to:</p>
              <ul className="list-disc space-y-2 pl-6 text-lg text-white/90">
                <li>brak wymaganych załączników,</li>
                <li>niezgodność uchwały z treścią wniosku,</li>
                <li>podpisanie dokumentów przez osoby nieuprawnione,</li>
                <li>błędne oznaczenie zakresu zmian,</li>
                <li>nieprawidłowe zgłoszenie elektroniczne,</li>
                <li>brak opłaty lub niewłaściwe potwierdzenie opłaty.</li>
              </ul>
              <p className="text-lg text-white/90">
                Skutkiem takich błędów może być odrzucenie wniosku przez sąd rejestrowy oraz wydłużenie całej procedury.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <div className="space-y-4">
              <h2 className="mb-4 text-center text-2xl font-bold text-amber-400 sm:text-3xl">Przykładowe sytuacje, w których konieczna jest zmiana zarządu spółki z o.o.</h2>
              <p className="text-lg text-white/90">
                W praktyce zmiana zarządu spółki z o.o. najczęściej jest elementem szerszego zdarzenia w spółce. Poniżej
                przedstawiamy przykładowe sytuacje, w których przedsiębiorcy decydują się na zmianę składu zarządu.
              </p>
              <p className="text-lg font-semibold text-white">Rezygnacja członka zarządu</p>
              <p className="text-lg text-white/90">
                Jednym z najczęstszych przypadków jest dobrowolna rezygnacja członka zarządu z pełnionej funkcji. W takiej sytuacji
                konieczne jest zarówno prawidłowe udokumentowanie rezygnacji, jak i powołanie nowej osoby do zarządu oraz zgłoszenie
                zmian do KRS.
              </p>
              <p className="text-lg font-semibold text-white">Sprzedaż udziałów i zmiana kontroli nad spółką</p>
              <p className="text-lg text-white/90">
                Po sprzedaży udziałów nowy właściciel spółki często decyduje się na zmianę składu zarządu lub powołanie nowego
                prezesa. W takich przypadkach zmiana zarządu jest elementem reorganizacji struktury zarządzania spółką.
              </p>
              <p className="text-lg font-semibold text-white">Odwołanie członka zarządu przez wspólników</p>
              <p className="text-lg text-white/90">
                Zgromadzenie wspólników może w każdej chwili odwołać członka zarządu uchwałą, jeżeli uzna to za konieczne dla
                prawidłowego funkcjonowania spółki.
              </p>
              <p className="text-lg font-semibold text-white">Zmiana prezesa zarządu</p>
              <p className="text-lg text-white/90">
                W wielu spółkach dochodzi do zmiany funkcji w ramach istniejącego zarządu, np. gdy dotychczasowy członek zarządu
                zostaje powołany na stanowisko prezesa.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <div className="space-y-5">
              <h2 className="mb-4 text-center text-2xl font-bold text-amber-400 sm:text-3xl">Najczęściej zadawane pytania</h2>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Czy każdą zmianę zarządu trzeba zgłaszać do KRS?</h3>
                <p className="text-lg text-white/90">
                  Tak. Każde powołanie, odwołanie lub rezygnacja członka zarządu powoduje zmianę składu organu spółki i wymaga
                  zgłoszenia do KRS.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Ile trwa wpis zmiany zarządu sp. z o.o.?</h3>
                <p className="text-lg text-white/90">
                  Przy poprawnie przygotowanych dokumentach wpis może zostać dokonany nawet w ciągu kilku dni roboczych, jednak czas
                  zależy od obciążenia sądu rejestrowego.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Czy powołanie lub odwołanie członka zarządu to zmiana zarządu?</h3>
                <p className="text-lg text-white/90">
                  Tak. Zarówno powołanie nowego członka zarządu, jak i odwołanie dotychczasowego powodują zmianę składu zarządu
                  spółki.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Czy rezygnacja członka zarządu wymaga zgłoszenia do KRS?</h3>
                <p className="text-lg text-white/90">
                  Tak. Rezygnacja powoduje wygaśnięcie mandatu i powinna zostać zgłoszona do KRS, aby dane w rejestrze odpowiadały
                  rzeczywistemu stanowi spółki.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Czy zmiana zarządu może wymagać notariusza?</h3>
                <p className="text-lg text-white/90">
                  Zasadniczo nie, chyba że zmiana wiąże się ze zmianą sposobu reprezentacji i wymaga zmiany umowy spółki w formie
                  aktu notarialnego.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Czy zmiana zarządu spółki z o.o. wymaga wizyty u notariusza?</h3>
                <p className="text-lg text-white/90">
                  Nie zawsze. W większości przypadków zmiana zarządu następuje na podstawie uchwały wspólników i nie wymaga aktu notarialnego, chyba że jednocześnie zmieniana jest umowa spółki.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Ile trwa wpis zmiany zarządu w KRS?</h3>
                <p className="text-lg text-white/90">
                  Czas rozpoznania wniosku zależy od obciążenia sądu rejestrowego, jednak w praktyce wpis zmiany zarządu najczęściej następuje w ciągu kilku tygodni od złożenia kompletnego wniosku.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Czy zmianę zarządu można zgłosić w systemie S24?</h3>
                <p className="text-lg text-white/90">
                  W niektórych przypadkach tak, jeżeli spółka została założona w systemie S24 i spełnione są wymagania tego systemu. W pozostałych sytuacjach wniosek składa się przez Portal Rejestrów Sądowych.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Czy brak zgłoszenia zmiany zarządu do KRS może mieć konsekwencje?</h3>
                <p className="text-lg text-white/90">
                  Tak. Nieaktualne dane w rejestrze mogą powodować problemy w kontaktach z bankami, kontrahentami lub urzędami, a także prowadzić do wezwań ze strony sądu rejestrowego do uzupełnienia wpisu.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <div className="space-y-4">
              <h2 className="mb-4 text-center text-2xl font-bold text-amber-400 sm:text-3xl">Chcesz wiedzieć więcej?</h2>
              <p className="text-lg text-white/90">Jeżeli interesują Cię szczegółowe formalności i procedura krok po kroku, przeczytaj:</p>
              <p className="text-lg text-white/90">
                👉{" "}
                <Link
                  href="/artykul/zmiana-zarzadu-spolka-zoo-krok-po-kroku-najwazniejsze-formalnosci"
                  className="text-amber-300 underline underline-offset-2 hover:text-amber-200"
                >
                  https://zmianakrs.pl/artykul/zmiana-zarzadu-spolka-zoo-krok-po-kroku-najwazniejsze-formalnosci
                </Link>
              </p>
              <p className="text-lg text-white/90">Jeżeli dotyczy Cię rezygnacja członka zarządu, przeczytaj także:</p>
              <p className="text-lg text-white/90">
                👉{" "}
                <Link
                  href="/artykul/rezygnacja-czlonka-zarzadu-spolka-zoo-wpis-krs"
                  className="text-amber-300 underline underline-offset-2 hover:text-amber-200"
                >
                  https://zmianakrs.pl/artykul/rezygnacja-czlonka-zarzadu-spolka-zoo-wpis-krs
                </Link>
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <div className="space-y-4">
              <h2 className="mb-4 text-center text-2xl font-bold text-amber-400 sm:text-3xl">Zleć zmianę zarządu sp. z o.o.</h2>
              <p className="text-lg text-white/90">
                Jeżeli chcesz przeprowadzić zmianę zarządu spółki szybko i bez ryzyka błędów formalnych, skontaktuj się z nami.
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
