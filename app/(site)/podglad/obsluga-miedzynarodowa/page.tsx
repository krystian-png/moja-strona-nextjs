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
  MapPin,
  Scale,
  Users,
} from "lucide-react"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import InlineContactForm from "../../uslugi/_components/InlineContactForm"

export const metadata: Metadata = {
  title: "Zmiana danych w KRS spółki | Dokumenty i wniosek – ZmianaKRS",
  description:
    "Zmiany w KRS spółki: zarząd, wspólnicy, adres, siedziba, umowa i PKD. Przygotowanie dokumentów i wniosku do KRS, indywidualna wycena.",
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
    title: "Zmiana adresu lub siedziby spółki",
    description:
      "Zmiana adresu spółki z o.o. w KRS lub przeniesienie siedziby spółki. Przygotowujemy dokumenty i ustalamy właściwy tryb zgłoszenia.",
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
  {
    question: "Czym różni się zmiana adresu od zmiany siedziby spółki z o.o.?",
    answer:
      "Siedzibą spółki jest miejscowość, a adres wskazuje konkretną lokalizację. Zmiana adresu w tej samej miejscowości i zmiana siedziby na inną miejscowość mogą wymagać innych dokumentów. Sprawdzamy treść umowy spółki i ustalamy właściwy sposób zgłoszenia zmiany do KRS.",
  },
  {
    question: "Jak złożyć wniosek o zmianę danych w KRS — przez PRS czy S24?",
    answer:
      "Wnioski dotyczące zmian w rejestrze przedsiębiorców składa się elektronicznie. To, czy właściwy będzie Portal Rejestrów Sądowych (PRS), czy system S24, zależy od historii i dokumentów spółki. Sprawdzamy to przed przygotowaniem wniosku.",
  },
]

function SectionHeading({
  eyebrow,
  title,
  description,
  inverse = false,
  id,
}: {
  eyebrow: string
  title: string
  description?: string
  inverse?: boolean
  id?: string
}) {
  return (
    <header className="mb-8 max-w-3xl md:mb-10">
      <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.18em] ${inverse ? "text-[#D9B885]" : "text-[#976020]"}`}>
        {eyebrow}
      </p>
      <h2 id={id} className={`text-2xl font-semibold leading-tight tracking-tight sm:text-3xl md:text-4xl ${inverse ? "text-[#F9F5EF]" : "text-[#18232C]"}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-7 md:text-lg md:leading-8 ${inverse ? "text-[#D9DBDC]" : "text-[#1E2730]"}`}>
          {description}
        </p>
      ) : null}
    </header>
  )
}

export default function InternationalLandingPreview() {
  return (
    <div className="relative min-h-screen bg-white text-[#18242D]">
      <Navbar />

      <main className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pt-20">
        <section
          aria-labelledby="glowny-naglowek"
          className="grid items-start gap-10 border-b border-[#D8DEE3] pb-16 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-14 lg:pb-20"
        >
          <div className="max-w-2xl lg:pt-8">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#956020] sm:text-sm">
              Zmiany w KRS · obsługa prawna spółek
            </p>
            <h1
              id="glowny-naglowek"
              className="max-w-2xl text-3xl font-semibold leading-[1.13] tracking-tight text-[#1B2D3C] sm:text-4xl lg:text-[3.25rem]"
            >
              Zmiany w KRS Twojej spółki.
              <span className="mt-2 block text-[#31475A]">
                Dokumenty i wniosek pod opieką radcy prawnego.
              </span>
            </h1>

            <div className="mt-7 max-w-xl space-y-4 text-base leading-7 text-[#1D252D] sm:text-lg sm:leading-8">
              <p>
                Prowadzisz spółkę z o.o. lub inną spółkę zarejestrowaną w Polsce?
                Pomagamy w zmianie danych w Krajowym Rejestrze Sądowym (KRS).
              </p>
              <p>
                Przygotowujemy dokumenty do zmian w KRS, ustalamy właściwą procedurę
                oraz sporządzamy i obsługujemy wniosek o zmianę wpisu
                w KRS przed sądem rejestrowym.
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
                  className="inline-flex items-center gap-2 rounded-full border border-[#CFD6DD] bg-[#F4F6F7] px-3.5 py-2 text-sm font-medium text-[#1D2934]"
                >
                  <Check aria-hidden="true" className="h-4 w-4 shrink-0 text-[#99601F]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <section
            id="formularz"
            aria-labelledby="naglowek-formularza"
            className="scroll-mt-28 rounded-2xl border border-[#263442] bg-gradient-to-br from-[#172B3D] to-[#253D51] p-5 text-white shadow-[0_20px_40px_rgba(40,42,45,0.17)] sm:p-7"
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
            <p className="mb-6 mt-3 text-base leading-7 text-[#E4EBF1]">
              Napisz, jakiej zmiany potrzebuje Twoja spółka. Jeśli znasz numer
              KRS, podaj go w wiadomości.
            </p>
            <InlineContactForm className="max-w-none border-0 bg-transparent p-0 shadow-none backdrop-blur-none" />
          </section>
        </section>

        <section aria-labelledby="zakres-uslug" className="my-5 rounded-2xl border border-[#E4E8EB] bg-[#F3F5F6] px-5 py-12 sm:px-8 md:py-16 lg:px-10">
          <SectionHeading
            eyebrow="Zakres pomocy"
            title="Jakie zmiany zgłaszamy do KRS?"
            id="zakres-uslug"
            description="Obsługujemy zmiany danych spółek ujawnianych w Krajowym Rejestrze Sądowym. Zakres dokumentów i sposób przeprowadzenia procedury zależą od rodzaju zmiany, treści umowy spółki oraz sytuacji wspólników i zarządu."
          />
          <div className="grid gap-x-9 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="border-t border-[#C5CDD3] px-1 pb-3 pt-5 transition-colors hover:border-[#B27B31]"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#E4E9ED]">
                  <Icon aria-hidden="true" className="h-5 w-5 text-[#995F22]" strokeWidth={1.8} />
                </span>
                <h3 className="mt-4 text-lg font-semibold leading-snug text-[#152433]">
                  {title}
                </h3>
                <p className="mt-3 text-base leading-7 text-[#1E252C]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="wspolpraca"
          className="rounded-2xl border border-[#21384E] bg-[#203447] px-5 py-10 shadow-[0_16px_42px_rgba(49,53,57,.12)] sm:px-8 md:py-14 lg:px-12"
        >
          <SectionHeading
            eyebrow="Przebieg sprawy"
            title="Jak przebiega zgłoszenie zmian do KRS?"
            id="wspolpraca"
            inverse
          />
          <div className="grid gap-7 md:grid-cols-3 md:gap-8">
            {steps.map((step) => (
              <article key={step.number} className="border-t border-[#9CA9B4] pt-5">
                <p className="text-3xl font-light tracking-tight text-[#E1B779]">
                  {step.number}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-[#FFF7E9]">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-[#EEF2F5]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-9 flex items-start gap-3 rounded-lg border border-[#8B9AA8]/40 bg-[#172A3C]/45 px-4 py-4 sm:px-5">
            <FileText aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#E1B779]" />
            <p className="text-base leading-7 text-[#EEF2F5]">
              Znaczną część komunikacji i obsługi dokumentów można przeprowadzić
              elektronicznie. Niektóre czynności wymagają jednak szczególnej
              formy dokumentów, odpowiedniego sposobu podpisania lub udziału
              w czynnościach w Polsce. Wymagania ustalamy indywidualnie.
            </p>
          </div>
        </section>

        <section className="grid gap-8 py-16 md:py-20 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-16">
          <div>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-[#B2BDC6] bg-[#D0D8DD]">
              <Scale aria-hidden="true" className="h-6 w-6 text-[#995F22]" strokeWidth={1.7} />
            </span>
            <h2 className="mt-5 text-2xl font-semibold leading-tight text-[#1B2D3C] sm:text-3xl">
              Twoja sprawa pod opieką radcy prawnego
            </h2>
          </div>
          <div className="space-y-4 text-base leading-8 text-[#202830]">
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
          className="rounded-2xl border border-[#DEE4E8] bg-[#F0F3F5] p-6 sm:p-8 lg:p-10"
        >
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-12">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#995F22]">
                Jasne zasady
              </p>
              <h2 id="wycena" className="text-2xl font-semibold leading-tight text-[#1B2D3C] sm:text-3xl">
                Ile kosztuje zmiana wpisu w KRS?
              </h2>
            </div>
            <div className="space-y-4 text-base leading-8 text-[#202830]">
              <p>
                Koszt zmiany danych w KRS zależy od rodzaju planowanych zmian, liczby
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
          <SectionHeading eyebrow="Warto wiedzieć" title="Najczęściej zadawane pytania" id="pytania" />
          <div className="grid gap-x-9 gap-y-6 md:grid-cols-2">
            {questions.map(({ question, answer }) => (
              <article
                key={question}
                className="border-t border-[#C7D0D6] px-1 pb-3 pt-5"
              >
                <h3 className="flex items-start gap-3 text-lg font-semibold leading-snug text-[#162330]">
                  <BadgeCheck aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#995F22]" strokeWidth={1.8} />
                  <span>{question}</span>
                </h3>
                <p className="mt-4 text-base leading-7 text-[#1C242C]">
                  {answer}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="kontakt-koncowy"
          className="flex flex-col items-start justify-between gap-7 rounded-2xl border border-[#263442] bg-gradient-to-r from-[#1B3043] to-[#263C4F] px-6 py-9 shadow-[0_18px_35px_rgba(40,42,45,.13)] sm:px-9 md:flex-row md:items-center md:py-10"
        >
          <div className="max-w-2xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.17em] text-amber-300">
              Porozmawiajmy o Twojej spółce
            </p>
            <h2 id="kontakt-koncowy" className="text-2xl font-semibold leading-tight text-white sm:text-3xl">
              Potrzebujesz zgłosić zmianę w KRS?
            </h2>
            <p className="mt-3 text-base leading-7 text-[#E5EDF3]">
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
