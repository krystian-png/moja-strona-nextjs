"use client"

import Link from "next/link"
import { useState, type ReactNode } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"

interface FAQItem {
  question: string
  answer: ReactNode
}

const faqItems: FAQItem[] = [
  {
    question: "Czym jest zmiana wpisu w KRS?",
    answer: (
      <p>
        Zmiana wpisu w Krajowym Rejestrze Sądowym (KRS) to aktualizacja danych
        ujawnionych w rejestrze przedsiębiorców – takich jak skład zarządu,
        sposób reprezentacji, umowa spółki (obejmująca m.in. firmę, siedzibę,
        kapitał zakładowy czy PKD), zmiana wspólników lub zgłoszenie prokury.
        Obowiązek aktualizacji wynika z ustawy o KRS i dotyczy każdej spółki
        wpisanej do rejestru.
      </p>
    ),
  },
  {
    question: "Jakie zmiany najczęściej zgłasza się do KRS?",
    answer: (
      <p>
        Najczęściej aktualizowane dane to: zmiana zarządu, powołanie lub
        odwołanie prokurenta, zmiana umowy spółki obejmująca m.in. firmę
        (nazwę), siedzibę, wysokość kapitału zakładowego, zmianę PKD oraz zmiana
        wspólników. Zmiana tych danych wymaga zgłoszenia ich do KRS, tak aby
        rejestr odzwierciedlał aktualny stan prawny spółki.
      </p>
    ),
  },
  {
    question: "Czy zmiana wpisu w KRS jest obowiązkowa?",
    answer: (
      <>
        <p>
          Tak. Każda zmiana danych ujawnionych w rejestrze przedsiębiorców musi
          zostać zgłoszona do KRS w terminie określonym przepisami. Brak
          zgłoszenia może prowadzić do odpowiedzialności osób reprezentujących
          spółkę.
        </p>
        <p className="mt-2">
          Więcej na ten temat przeczytasz w naszym artykule:{" "}
          <Link
            href="/artykul/obowiazek-aktualizacji-danych-krs-ryzyka-zaniechania"
            className="text-amber-400 underline hover:text-amber-300"
          >
            Obowiązek aktualizacji danych KRS – ryzyka zaniechania
          </Link>
        </p>
      </>
    ),
  },
  {
    question: "Jak wygląda proces zmiany wpisu w KRS z Waszym udziałem?",
    answer: (
      <p>
        Szczegółowy opis krok po kroku znajdziesz w sekcji &bdquo;Jak
        działamy&rdquo; na stronie{" "}
        <Link
          href="/uslugi"
          className="text-amber-400 underline hover:text-amber-300"
        >
          Usługi
        </Link>{" "}
        – tam przedstawiamy cały proces od pierwszego kontaktu, przez analizę
        sytuacji, po złożenie kompletnego wniosku do KRS.
      </p>
    ),
  },
  {
    question: "Czy mogę zgłosić zmianę w KRS samodzielnie?",
    answer: (
      <p>
        Tak, zmiany możesz dokonać samodzielnie przez system PRS lub – w
        określonych przypadkach – S24. Wymaga to jednak przygotowania poprawnych
        uchwał, wniosku i załączników, a także podpisania dokumentów podpisem
        kwalifikowanym lub Profilem Zaufanym. Błędny wniosek może skutkować
        zwrotem lub wezwaniem do uzupełnienia braków.
      </p>
    ),
  },
  {
    question: "Jakie dokumenty są potrzebne do zmiany danych w KRS?",
    answer: (
      <p>
        W zależności od rodzaju zmiany najczęściej wymagane są: uchwała
        wspólników lub odpowiedni dokument zarządu, tekst jednolity umowy spółki
        w przypadku zmian umowy oraz formularz PRS lub wniosek S24. Zakres
        dokumentacji zależy od rodzaju modyfikowanych danych.
      </p>
    ),
  },
  {
    question: "Jakie są konsekwencje braku aktualizacji danych w KRS?",
    answer: (
      <>
        <p>
          Brak terminowego zgłoszenia zmiany danych spółki w KRS może mieć kilka
          skutków. Po pierwsze, sąd może nałożyć na członków zarządu grzywnę za
          niedopełnienie obowiązku zgłoszeniowego (art. 24 i n. uKRS). Po
          drugie, kontrahenci, bank lub notariusz mogą odmówić dokonania
          czynności, jeśli dane w KRS są nieaktualne.
        </p>
        <p className="mt-2">
          Więcej na ten temat przeczytasz tutaj:{" "}
          <Link
            href="/artykul/obowiazek-aktualizacji-danych-krs-ryzyka-zaniechania"
            className="text-amber-400 underline hover:text-amber-300"
          >
            Obowiązek aktualizacji danych KRS – ryzyka zaniechania
          </Link>
        </p>
      </>
    ),
  },
  {
    question:
      "Co składa się na całkowity koszt zmiany wpisu w rejestrze przedsiębiorców KRS?",
    answer: (
      <p>
        Na całkowity koszt zmiany wpisu w rejestrze przedsiębiorców KRS składają
        się: opłata sądowa, wynagrodzenie za naszą usługę, opłata skarbowa od
        pełnomocnictwa (jeżeli jest udzielane) oraz ewentualne opłaty
        notarialne. Szczegóły znajdziesz w zakładce{" "}
        <Link
          href="/cennik"
          className="text-amber-400 underline hover:text-amber-300"
        >
          Cennik
        </Link>
        .
      </p>
    ),
  },
  {
    question:
      "Ile wynosi opłata sądowa za zmianę wpisu w rejestrze przedsiębiorców KRS?",
    answer: (
      <p>
        Opłata sądowa za zmianę wpisu w rejestrze przedsiębiorców KRS wynosi 250
        zł.
      </p>
    ),
  },
  {
    question: "Czy opłata skarbowa od pełnomocnictwa jest obowiązkowa?",
    answer: (
      <p>
        Tak, jeżeli zmiana wpisu jest dokonywana przez pełnomocnika, należy
        uiścić opłatę skarbową w wysokości 17 zł za pełnomocnictwo. Szczegóły
        znajdziesz w zakładce{" "}
        <Link
          href="/cennik"
          className="text-amber-400 underline hover:text-amber-300"
        >
          Cennik
        </Link>
        .
      </p>
    ),
  },
  {
    question: "Jak ustalane jest wynagrodzenie za obsługę wniosku o zmianę wpisu?",
    answer: (
      <p>
        Wysokość wynagrodzenia zależy od zakresu zmian i nakładu pracy, a
        szczegółowe stawki znajdziesz w zakładce{" "}
        <Link
          href="/cennik"
          className="text-amber-400 underline hover:text-amber-300"
        >
          Cennik
        </Link>
        .
      </p>
    ),
  },
  {
    question: "Co jeszcze może wpływać na koszt zmiany wpisu w KRS?",
    answer: (
      <p>
        Jeżeli dana czynność wymaga aktu notarialnego (np. zmiana umowy spółki
        poza S24), do opłaty sądowej i wynagrodzenia za naszą usługę dochodzą
        jeszcze opłaty notarialne. Są to odrębne koszty, które nie są częścią
        opłaty sądowej, ale wpływają na całkowity koszt całej operacji dla
        spółki.
      </p>
    ),
  },
]

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left transition-colors hover:text-amber-400"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-white pr-4">
          {item.question}
        </span>
        <ChevronDown
          className={`h-5 w-5 text-amber-500 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 pb-5" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-gray-300 leading-relaxed">{item.answer}</div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20" data-testid="faq-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-600/20 mb-6">
            <HelpCircle className="h-8 w-8 text-amber-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Najczęściej zadawane pytania
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Odpowiedzi na pytania dotyczące zmian w KRS, kosztów i procesu
            zgłoszenia.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 sm:p-8">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
