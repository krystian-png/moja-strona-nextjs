import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"

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

      <main className="relative">
        <section className="px-4 pb-14 pt-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-6">
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Zmiana zarządu sp. z o.o. – powołanie, odwołanie lub rezygnacja członka zarządu
            </h1>
            <p className="text-gray-200">
              Zmiana zarządu sp. z o.o. to jeden z najważniejszych momentów w funkcjonowaniu spółki. Powołanie nowego członka
              zarządu, odwołanie dotychczasowego albo rezygnacja z pełnienia funkcji wymaga prawidłowego przygotowania dokumentów
              oraz terminowego zgłoszenia zmian do Krajowego Rejestru Sądowego.
            </p>
            <p className="text-gray-200">
              Oferujemy kompleksową obsługę zmiany zarządu sp. z o.o. – od analizy umowy spółki i przygotowania uchwał, po
              elektroniczne złożenie wniosku w PRS lub S24 oraz monitorowanie sprawy aż do dokonania wpisu w KRS.
            </p>
            <p className="text-lg">📞 572 234 779</p>
            <p>
              <a href="#formularz" className="text-amber-300 underline underline-offset-2 hover:text-amber-200">
                [formularz kontaktowy – oddzwonimy]
              </a>
            </p>
            <div id="formularz" className="pt-2">
              <InlineContactForm />
            </div>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-10">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold sm:text-3xl">Podstawa prawna zmiany zarządu w spółce z o.o.</h2>
              <p className="text-gray-200">
                Zmiana zarządu sp. z o.o. wynika z przepisów Kodeksu spółek handlowych regulujących funkcjonowanie zarządu oraz z
                ustawy o Krajowym Rejestrze Sądowym, która określa obowiązek aktualizacji danych ujawnionych w rejestrze
                przedsiębiorców.
              </p>
              <p className="text-gray-200">
                Najważniejsze zasady praktyczne są dwie: zmiana składu zarządu wymaga odpowiedniej uchwały lub oświadczenia, a
                zgłoszenie zmiany zarządu sp. z o.o. do KRS należy złożyć w terminie 7 dni od jej dokonania.
              </p>
              <p className="text-gray-200">
                Terminowa aktualizacja danych jest istotna także z perspektywy praktyki obrotu – banki, leasingodawcy i kontrahenci
                bardzo często oczekują potwierdzenia aktualnego składu zarządu ujawnionego w KRS.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold sm:text-3xl">Koszty zmiany zarządu sp. z o.o.</h2>
              <p className="text-gray-200">Koszt zgłoszenia zmiany zarządu zależy od sposobu złożenia wniosku:</p>
              <div className="overflow-x-auto rounded-lg border border-white/20 bg-white/5">
                <table className="w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-white/20 bg-white/10">
                      <th className="px-4 py-3">Tryb złożenia wniosku</th>
                      <th className="px-4 py-3">Opłata sądowa</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="px-4 py-3">Portal Rejestrów Sądowych (PRS)</td>
                      <td className="px-4 py-3">250 zł</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">System S24</td>
                      <td className="px-4 py-3">200 zł</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-200">
                Opłata skarbowa za pełnomocnictwo wynosi 17 zł (jeżeli wniosek składa pełnomocnik).
              </p>
              <p className="text-gray-200">Nie pobiera się już opłaty za ogłoszenie wpisu w Monitorze Sądowym i Gospodarczym.</p>
              <p className="text-gray-200">
                Jeżeli zmiana zarządu wiąże się jednocześnie ze zmianą sposobu reprezentacji wymagającą zmiany umowy spółki w formie
                aktu notarialnego, należy uwzględnić również koszty notarialne.
              </p>
              <p className="text-gray-200">
                Koszt naszej obsługi zmiany zarządu sp. z o.o. zaczyna się od około 799 zł, w zależności od zakresu zmian oraz liczby
                przygotowywanych dokumentów.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold sm:text-3xl">Dokumenty do zmiany zarządu sp. z o.o.</h2>
              <p className="text-gray-200">
                Do zgłoszenia zmiany zarządu sp. z o.o. w KRS należy przygotować komplet dokumentów potwierdzających dokonanie zmian
                w organie spółki.
              </p>
              <p className="text-gray-200">Najczęściej są to:</p>
              <ul className="list-disc space-y-2 pl-6 text-gray-200">
                <li>uchwała o powołaniu lub odwołaniu członka zarządu,</li>
                <li>zgoda na pełnienie funkcji członka zarządu,</li>
                <li>oświadczenie o adresie do doręczeń,</li>
                <li>wykaz aktualnego składu zarządu,</li>
                <li>pełnomocnictwo (jeżeli działa pełnomocnik),</li>
                <li>potwierdzenie uiszczenia opłaty sądowej.</li>
              </ul>
              <p className="text-gray-200">
                Brak któregokolwiek z wymaganych dokumentów lub rozbieżności między uchwałą a wnioskiem są jedną z najczęstszych
                przyczyn wezwań sądu do uzupełnienia braków formalnych.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold sm:text-3xl">Jak zgłosimy zmianę zarządu Twojej spółki</h2>
              <ol className="space-y-4 text-gray-200">
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
              <p>
                <a href="#formularz" className="text-amber-300 underline underline-offset-2 hover:text-amber-200">
                  [formularz – zleć zmianę zarządu]
                </a>
              </p>
              <InlineContactForm />
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold sm:text-3xl">Zdarzenia w ramach zmiany zarządu sp. z o.o.</h2>
              <p className="text-gray-200">
                Zmiana zarządu sp. z o.o. obejmuje najczęściej powołanie nowego członka zarządu, odwołanie dotychczasowego albo
                rezygnację z pełnienia funkcji.
              </p>

              <h3 className="pt-2 text-xl font-semibold sm:text-2xl">Powołanie członka zarządu sp. z o.o.</h3>
              <p className="text-gray-200">
                Powołanie członka zarządu sp. z o.o. następuje na podstawie uchwały właściwego organu spółki, najczęściej
                zgromadzenia wspólników. Do zgłoszenia powołania przygotowuje się dokumenty potwierdzające zgodę na pełnienie
                funkcji oraz dane do doręczeń nowego członka zarządu. Po powołaniu nowej osoby spółka powinna zgłosić zmianę zarządu
                sp. z o.o. do KRS w terminie 7 dni.
              </p>

              <h3 className="pt-2 text-xl font-semibold sm:text-2xl">Odwołanie członka zarządu sp. z o.o.</h3>
              <p className="text-gray-200">
                Odwołanie członka zarządu sp. z o.o. polega na podjęciu uchwały o zakończeniu pełnienia funkcji przez daną osobę. W
                praktyce kluczowe jest prawidłowe określenie daty odwołania oraz aktualnego składu zarządu po dokonanej zmianie.
                Odwołanie członka zarządu sp. z o.o. wymaga zgłoszenia zmiany zarządu spółki do KRS.
              </p>

              <h3 className="pt-2 text-xl font-semibold sm:text-2xl">Rezygnacja członka zarządu sp. z o.o.</h3>
              <p className="text-gray-200">
                Rezygnacja członka zarządu sp. z o.o. powoduje wygaśnięcie mandatu i również wymaga zgłoszenia zmiany w KRS. W
                praktyce istotne jest prawidłowe złożenie oświadczenia o rezygnacji oraz uporządkowanie dokumentacji spółki po
                wygaśnięciu mandatu, zwłaszcza gdy rezygnacja wpływa na sposób reprezentacji.
              </p>
              <p className="text-gray-200">
                Czytaj więcej:{" "}
                <Link
                  href="/artykul/rezygnacja-czlonka-zarzadu-spolka-zoo-wpis-krs"
                  className="text-amber-300 underline underline-offset-2 hover:text-amber-200"
                >
                  rezygnacja członka zarządu sp. z o.o. – formalności i wpis do KRS.
                </Link>
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold sm:text-3xl">Konsekwencje nieterminowego zgłoszenia</h2>
              <p className="text-gray-200">
                Nieterminowe zgłoszenie zmiany zarządu może skutkować sankcjami finansowymi oraz problemami organizacyjnymi. W
                praktyce brak aktualnego wpisu często powoduje trudności w relacjach z bankami, leasingodawcami i kontrahentami,
                którzy oczekują potwierdzenia umocowania do reprezentacji spółki.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold sm:text-3xl">Najczęstsze błędy przy zmianie zarządu</h2>
              <p className="text-gray-200">Najczęstsze problemy pojawiające się przy zmianie zarządu spółki to:</p>
              <ul className="list-disc space-y-2 pl-6 text-gray-200">
                <li>brak wymaganych załączników,</li>
                <li>niezgodność uchwały z treścią wniosku,</li>
                <li>podpisanie dokumentów przez osoby nieuprawnione,</li>
                <li>błędne oznaczenie zakresu zmian,</li>
                <li>nieprawidłowe zgłoszenie elektroniczne,</li>
                <li>brak opłaty lub niewłaściwe potwierdzenie opłaty.</li>
              </ul>
              <p className="text-gray-200">
                Skutkiem takich błędów może być odrzucenie wniosku przez sąd rejestrowy oraz wydłużenie całej procedury.
              </p>
            </div>

            <div className="space-y-5">
              <h2 className="text-2xl font-bold sm:text-3xl">Najczęściej zadawane pytania</h2>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Czy każdą zmianę zarządu trzeba zgłaszać do KRS?</h3>
                <p className="text-gray-200">
                  Tak. Każde powołanie, odwołanie lub rezygnacja członka zarządu powoduje zmianę składu organu spółki i wymaga
                  zgłoszenia do KRS.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Ile trwa wpis zmiany zarządu sp. z o.o.?</h3>
                <p className="text-gray-200">
                  Przy poprawnie przygotowanych dokumentach wpis może zostać dokonany nawet w ciągu kilku dni roboczych, jednak czas
                  zależy od obciążenia sądu rejestrowego.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Czy powołanie lub odwołanie członka zarządu to zmiana zarządu?</h3>
                <p className="text-gray-200">
                  Tak. Zarówno powołanie nowego członka zarządu, jak i odwołanie dotychczasowego powodują zmianę składu zarządu
                  spółki.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Czy rezygnacja członka zarządu wymaga zgłoszenia do KRS?</h3>
                <p className="text-gray-200">
                  Tak. Rezygnacja powoduje wygaśnięcie mandatu i powinna zostać zgłoszona do KRS, aby dane w rejestrze odpowiadały
                  rzeczywistemu stanowi spółki.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Czy zmiana zarządu może wymagać notariusza?</h3>
                <p className="text-gray-200">
                  Zasadniczo nie, chyba że zmiana wiąże się ze zmianą sposobu reprezentacji i wymaga zmiany umowy spółki w formie
                  aktu notarialnego.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold sm:text-3xl">Chcesz wiedzieć więcej?</h2>
              <p className="text-gray-200">Jeżeli interesują Cię szczegółowe formalności i procedura krok po kroku, przeczytaj:</p>
              <p>
                👉{" "}
                <Link
                  href="/artykul/zmiana-zarzadu-spolka-zoo-krok-po-kroku-najwazniejsze-formalnosci"
                  className="text-amber-300 underline underline-offset-2 hover:text-amber-200"
                >
                  https://zmianakrs.pl/artykul/zmiana-zarzadu-spolka-zoo-krok-po-kroku-najwazniejsze-formalnosci
                </Link>
              </p>
              <p className="text-gray-200">Jeżeli dotyczy Cię rezygnacja członka zarządu, przeczytaj także:</p>
              <p>
                👉{" "}
                <Link
                  href="/artykul/rezygnacja-czlonka-zarzadu-spolka-zoo-wpis-krs"
                  className="text-amber-300 underline underline-offset-2 hover:text-amber-200"
                >
                  https://zmianakrs.pl/artykul/rezygnacja-czlonka-zarzadu-spolka-zoo-wpis-krs
                </Link>
              </p>
            </div>

            <div className="space-y-4 pb-6">
              <h2 className="text-2xl font-bold sm:text-3xl">Zleć zmianę zarządu sp. z o.o.</h2>
              <p className="text-gray-200">
                Jeżeli chcesz przeprowadzić zmianę zarządu spółki szybko i bez ryzyka błędów formalnych, skontaktuj się z nami.
              </p>
              <p className="text-lg">📞 572 234 779</p>
              <p>
                <a href="#formularz" className="text-amber-300 underline underline-offset-2 hover:text-amber-200">
                  [formularz kontaktowy]
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
