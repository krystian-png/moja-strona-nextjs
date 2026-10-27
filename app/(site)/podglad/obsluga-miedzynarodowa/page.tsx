import type { Metadata } from "next"
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  ClipboardCheck,
  FileCheck2,
  FilePenLine,
  FileText,
  Mail,
  MapPin,
  Scale,
  Users,
} from "lucide-react"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import InlineContactForm from "../../uslugi/_components/InlineContactForm"

export const metadata: Metadata = {
  title: "Podgląd — Obsługa zmian w KRS | ZmianaKRS",
  description:
    "Roboczy podgląd polskiej strony usługowej ZmianaKRS — wersja demonstracyjna, nieprzeznaczona do indeksowania.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
}

const services = [
  {
    icon: Users,
    title: "Zmiana zarządu i reprezentacji",
    description:
      "Przygotowanie dokumentów związanych z powołaniem lub odwołaniem członków zarządu oraz aktualizacją sposobu reprezentacji spółki.",
  },
  {
    icon: FileCheck2,
    title: "Zmiany dotyczące wspólników",
    description:
      "Przygotowujemy dokumenty niezbędne do zbycia udziałów, w tym wymagane uchwały i umowy zbycia udziałów. Obsługujemy również związane z tym zmiany danych wspólników podlegające zgłoszeniu do KRS.",
  },
  {
    icon: MapPin,
    title: "Zmiana adresu lub siedziby",
    description:
      "Przygotowanie dokumentacji i zgłoszenie nowego adresu albo zmiany siedziby spółki, z uwzględnieniem wymaganego trybu postępowania.",
  },
  {
    icon: FilePenLine,
    title: "Zmiana umowy spółki",
    description:
      "Pomoc w przygotowaniu zmian umowy spółki oraz dokumentów niezbędnych do ich zgłoszenia i rejestracji, z uwzględnieniem wymaganej formy czynności.",
  },
  {
    icon: Building2,
    title: "Aktualizacja kodów PKD",
    description:
      "Analiza przedmiotu działalności spółki, dobór właściwych kodów PKD oraz przygotowanie i zgłoszenie zmian do KRS.",
  },
  {
    icon: ClipboardCheck,
    title: "Prokura i pozostałe dane",
    description:
      "Zgłaszanie ustanowienia i odwołania prokury oraz innych zmian dotyczących danych spółki ujawnianych w rejestrze.",
  },
]

const steps = [
  {
    number: "01",
    title: "Opisujesz planowane zmiany",
    description:
      "Przekazujesz nam numer KRS spółki i krótki opis sprawy. W razie potrzeby prosimy o dodatkowe informacje lub dokumenty.",
  },
  {
    number: "02",
    title: "Ustalamy procedurę i koszty",
    description:
      "Sprawdzamy, jakie uchwały, oświadczenia, pełnomocnictwa lub inne dokumenty są potrzebne. Ustalamy wymagany sposób ich przygotowania i podpisania oraz przedstawiamy zakres obsługi i wycenę.",
  },
  {
    number: "03",
    title: "Przygotowujemy dokumenty i obsługujemy wniosek",
    description:
      "Po uzgodnieniu warunków współpracy przygotowujemy dokumentację i organizujemy czynności niezbędne do zgłoszenia zmian. Składamy wniosek w odpowiednim trybie oraz prowadzimy sprawę przed sądem rejestrowym w uzgodnionym zakresie.",
  },
]

const questions = [
  {
    question: "Czy muszę osobiście uczestniczyć we wszystkich czynnościach?",
    answer:
      "Nie zawsze. W wielu sprawach możliwe jest działanie przez pełnomocnika albo wykorzystanie dopuszczalnych form podejmowania uchwał i podpisywania dokumentów. Wymagania zależą od rodzaju zmiany i przepisów właściwych dla danej czynności.",
  },
  {
    question: "Czy całą sprawę można załatwić przez Internet?",
    answer:
      "Kontakt z kancelarią i przekazywanie wielu informacji mogą odbywać się elektronicznie. Nie oznacza to jednak, że wszystkie dokumenty można sporządzić lub podpisać w ten sposób. W niektórych sprawach konieczne są dodatkowe formalności, w tym czynności notarialne.",
  },
  {
    question: "Czy muszę posiadać polski podpis elektroniczny?",
    answer:
      "Nie w każdej sprawie. Zależy to od tego, jakie dokumenty mają zostać podpisane, kto podejmuje uchwały i w jaki sposób będzie składany wniosek. Możliwość działania przez pełnomocnika i wymagania dotyczące podpisów sprawdzamy indywidualnie.",
  },
  {
    question: "Czy mogę kontaktować się z kancelarią w innym języku?",
    answer:
      "Tak. Zapytanie możesz przesłać w swoim języku i prowadzić korespondencję pisemną. Dokumenty przeznaczone do wykorzystania przed polskimi organami przygotowujemy zgodnie z obowiązującymi wymaganiami. W razie potrzeby ustalamy również przygotowanie dokumentów dwujęzycznych lub tłumaczeń.",
  },
]

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <header className="mb-8 max-w-3xl md:mb-10">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#A86C24]/90">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-semibold leading-tight tracking-tight text-[#193047] sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg md:leading-8">
          {description}
        </p>
      ) : null}
    </header>
  )
}

export default function InternationalLandingPreview() {
  return (
    <div className="relative min-h-screen bg-[#F8F9F7] text-[#25384A]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 90% 7%, rgba(219,232,242,.72) 0%, transparent 36%), radial-gradient(ellipse at 3% 45%, rgba(249,226,194,.23) 0%, transparent 37%), linear-gradient(180deg, #FCFBF7 0%, #EFF5FA 54%, #FAF9F7 100%)",
        }}
      />

      <Navbar />

      <main className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pt-20">
        <section
          aria-labelledby="glowny-naglowek"
          className="grid items-start gap-10 border-b border-[#DCE4EB] pb-16 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-14 lg:pb-20"
        >
          <div className="max-w-2xl lg:pt-8">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#A86C24] sm:text-sm">
              Zmiany w KRS · obsługa prawna spółek
            </p>
            <h1
              id="glowny-naglowek"
              className="max-w-2xl text-3xl font-semibold leading-[1.13] tracking-tight text-[#193047] sm:text-4xl lg:text-[3.25rem]"
            >
              Zmiany w KRS Twojej spółki.
              <span className="mt-2 block text-[#A86C24]">
                Dokumenty i wniosek pod opieką radcy prawnego.
              </span>
            </h1>

            <div className="mt-7 max-w-xl space-y-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              <p>
                Prowadzisz spółkę zarejestrowaną w Polsce i potrzebujesz
                zgłosić zmiany do Krajowego Rejestru Sądowego?
              </p>
              <p>
                Pomagamy przygotować wymagane dokumenty, ustalić właściwy sposób
                przeprowadzenia zmian oraz złożyć i obsłużyć wniosek przed
                sądem rejestrowym.
              </p>
              <p>
                Możesz przedstawić nam sprawę pisemnie, również w swoim języku.
                Po zapoznaniu się z dokumentami określimy zakres czynności
                i przedstawimy wycenę.
              </p>
            </div>

            <ul className="mt-8 flex flex-wrap gap-2.5" aria-label="Najważniejsze informacje">
              {[
                "Obsługa przez radcę prawnego",
                "Kontakt elektroniczny",
                "Wycena przed rozpoczęciem",
              ].map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-[#D8E2E9] bg-white/85 px-3.5 py-2 text-sm text-[#405269] shadow-sm"
                >
                  <Check aria-hidden="true" className="h-4 w-4 shrink-0 text-[#A86C24]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <section
            id="formularz"
            aria-labelledby="naglowek-formularza"
            className="scroll-mt-28 rounded-3xl border border-[#20354B] bg-gradient-to-br from-[#172940] to-[#263C55] p-5 text-white shadow-[0_20px_50px_rgba(30,51,78,0.18)] sm:p-7"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-300">
              Kontakt z kancelarią
            </p>
            <h2
              id="naglowek-formularza"
              className="mt-2 text-2xl font-semibold text-white sm:text-3xl"
            >
              Opisz nam swoją sprawę
            </h2>
            <p className="mb-6 mt-3 text-sm leading-6 text-slate-300 sm:text-base">
              Napisz, jakiej zmiany potrzebuje Twoja spółka. Jeśli znasz numer
              KRS, podaj go w wiadomości.
            </p>
            <InlineContactForm className="max-w-none border-0 bg-transparent p-0 shadow-none backdrop-blur-none" />
          </section>
        </section>

        <section aria-labelledby="zakres-uslug" className="py-16 md:py-20">
          <SectionHeading
            eyebrow="Zakres pomocy"
            title="Jakie zmiany zgłaszamy do KRS?"
            description="Obsługujemy zmiany danych spółek ujawnianych w Krajowym Rejestrze Sądowym. Zakres dokumentów i sposób przeprowadzenia procedury zależą od rodzaju zmiany, treści umowy spółki oraz sytuacji wspólników i zarządu."
          />
          <div id="zakres-uslug" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-2xl border border-[#DDE5EC] bg-white p-6 shadow-[0_10px_26px_rgba(28,50,73,0.055)] transition-all hover:border-[#D8B582] hover:shadow-[0_14px_32px_rgba(28,50,73,0.09)]"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#EFDABD] bg-[#FBF0DF]">
                  <Icon aria-hidden="true" className="h-5 w-5 text-[#A86C24]" strokeWidth={1.8} />
                </span>
                <h3 className="mt-5 text-lg font-semibold leading-snug text-[#193047]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="wspolpraca"
          className="rounded-3xl border border-[#D8E2EB] bg-[#EAF1F6] px-5 py-10 sm:px-8 md:py-14 lg:px-12"
        >
          <SectionHeading
            eyebrow="Przebieg sprawy"
            title="Jak przebiega obsługa zmian w KRS?"
          />
          <div id="wspolpraca" className="grid gap-7 md:grid-cols-3 md:gap-8">
            {steps.map((step) => (
              <article key={step.number} className="border-t border-[#CEAC79] pt-5">
                <p className="text-3xl font-light tracking-tight text-[#A86C24]">
                  {step.number}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-[#193047]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-9 flex items-start gap-3 rounded-xl border border-[#D6E1E9] bg-white/75 px-4 py-4 sm:px-5">
            <FileText aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#A86C24]" />
            <p className="text-sm leading-7 text-slate-600">
              Znaczną część komunikacji i obsługi dokumentów można przeprowadzić
              elektronicznie. Niektóre czynności wymagają jednak szczególnej
              formy dokumentów, odpowiedniego sposobu podpisania lub udziału
              w czynnościach w Polsce. Wymagania ustalamy indywidualnie.
            </p>
          </div>
        </section>

        <section className="grid gap-8 py-16 md:py-20 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-16">
          <div>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[#ECD9BC] bg-[#FBF0DF]">
              <Scale aria-hidden="true" className="h-6 w-6 text-[#A86C24]" strokeWidth={1.7} />
            </span>
            <h2 className="mt-5 text-2xl font-semibold leading-tight text-[#193047] sm:text-3xl">
              Twoja sprawa pod opieką radcy prawnego
            </h2>
          </div>
          <div className="space-y-4 text-base leading-8 text-slate-600">
            <p>
              Sprawami zajmują się radcy prawni, którzy wspierają przedsiębiorców
              w sprawach dotyczących funkcjonowania spółek oraz postępowań
              przed Krajowym Rejestrem Sądowym.
            </p>
            <p>
              Pomagamy ustalić, jakie dokumenty są potrzebne do konkretnej
              zmiany i jak prawidłowo przeprowadzić procedurę rejestrową.
            </p>
            <p>
              Dbamy o przejrzystą komunikację, prawidłowe przygotowanie
              dokumentów i bieżącą obsługę sprawy przed sądem rejestrowym.
            </p>
          </div>
        </section>

        <section
          aria-labelledby="wycena"
          className="rounded-3xl border border-[#E9DACA] bg-gradient-to-br from-[#FBF1E5] to-[#F3F7FA] p-6 sm:p-8 lg:p-10"
        >
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-12">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#A86C24]">
                Jasne zasady
              </p>
              <h2 id="wycena" className="text-2xl font-semibold leading-tight text-[#193047] sm:text-3xl">
                Ile kosztuje obsługa zmian w KRS?
              </h2>
            </div>
            <div className="space-y-4 text-base leading-8 text-slate-600">
              <p>
                Koszt obsługi zależy od rodzaju planowanych zmian, liczby
                wymaganych dokumentów i stopnia złożoności sprawy.
              </p>
              <p>
                Inny zakres czynności jest potrzebny przy złożeniu wniosku
                na podstawie gotowych dokumentów, a inny przy przygotowaniu
                uchwał, pełnomocnictw, dokumentów dwujęzycznych lub czynności
                wymagających udziału notariusza.
              </p>
              <p>
                Po zapoznaniu się ze sprawą przedstawiamy indywidualną wycenę.
                Wynagrodzenie kancelarii oraz ewentualne opłaty sądowe,
                skarbowe i notarialne są określane oddzielnie.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="pytania" className="py-16 md:py-20">
          <SectionHeading eyebrow="Warto wiedzieć" title="Najczęściej zadawane pytania" />
          <div id="pytania" className="grid gap-4 md:grid-cols-2">
            {questions.map(({ question, answer }) => (
              <article
                key={question}
                className="rounded-2xl border border-[#DDE5EC] bg-white p-6 shadow-[0_8px_25px_rgba(28,50,73,0.05)] sm:p-7"
              >
                <h3 className="flex items-start gap-3 text-lg font-semibold leading-snug text-[#193047]">
                  <BadgeCheck aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#A86C24]" strokeWidth={1.8} />
                  <span>{question}</span>
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {answer}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="kontakt-koncowy"
          className="flex flex-col items-start justify-between gap-7 rounded-3xl border border-[#273F58] bg-gradient-to-r from-[#1B2F48] to-[#263E56] px-6 py-9 shadow-[0_18px_36px_rgba(28,50,73,0.12)] sm:px-9 md:flex-row md:items-center md:py-10"
        >
          <div className="max-w-2xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.17em] text-amber-300">
              Porozmawiajmy o Twojej spółce
            </p>
            <h2 id="kontakt-koncowy" className="text-2xl font-semibold leading-tight text-white sm:text-3xl">
              Potrzebujesz zgłosić zmianę w KRS?
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-300">
              Opisz nam swoją sprawę i podaj numer KRS spółki. Sprawdzimy zakres
              potrzebnych czynności i przedstawimy propozycję obsługi.
            </p>
          </div>
          <a
            href="#formularz"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 text-base font-semibold text-slate-950 transition-colors hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
          >
            Opisz swoją sprawę
            <ArrowRight aria-hidden="true" className="h-5 w-5" />
          </a>
        </section>
      </main>

      <Footer className="relative z-10 mt-0" />
    </div>
  )
}
