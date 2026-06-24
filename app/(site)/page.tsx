import type { Metadata } from "next"
import Script from "next/script"

import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import Trust from "@/components/Trust"
import FAQ from "@/components/FAQ"
import Footer from "@/components/Footer"
import LandingServices from "@/components/services/LandingServices"
import heroBackgroundImage from "@/public/images/zmiana-wpisu-w-krs-tlo-strony-glownej-profesjonalna-poczekalnia-prawnicza.webp"
import { brandName, siteUrl } from "@/lib/seo"

const pagePath = "/"
const pageUrl = siteUrl

export const metadata: Metadata = {
  title:
    "Zmiana wpisu w KRS dla spółek – od 799 zł, zdalnie | ZmianaKRS",
  description:
    "Profesjonalna zmiana zarządu, adresu, wspólnika lub umowy spółki w KRS. Przygotujemy dokumenty i złożymy wniosek za Ciebie. Szybko, bez błędów, od 799 zł netto.",
  alternates: {
    canonical: pageUrl,
    languages: {
      "pl": "https://zmianakrs.pl",
      "en": "https://zmianakrs.pl/en",
      "x-default": "https://zmianakrs.pl",
    },
  },
  openGraph: {
    title:
      "Zmiana wpisu w KRS dla spółek – od 799 zł, zdalnie | ZmianaKRS",
    description:
      "Profesjonalna zmiana zarządu, adresu, wspólnika lub umowy spółki w KRS. Przygotujemy dokumenty i złożymy wniosek za Ciebie. Szybko, bez błędów, od 799 zł netto.",
    url: pageUrl,
    type: "website",
    siteName: brandName,
    images: [
      {
        url: `${siteUrl}/images/zmiana-wpisu-w-krs-profesjonalna-obsluga-wnioskow.webp`,
        width: 1200,
        height: 630,
        alt: "Zmiana wpisu w KRS bez stresu – profesjonalna obsługa wniosków KRS dla spółek",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Zmiana wpisu w KRS dla spółek – od 799 zł, zdalnie | ZmianaKRS",
    description:
      "Profesjonalna zmiana zarządu, adresu, wspólnika lub umowy spółki w KRS. Przygotujemy dokumenty i złożymy wniosek za Ciebie. Szybko, bez błędów, od 799 zł netto.",
    images: [
      `${siteUrl}/images/zmiana-wpisu-w-krs-profesjonalna-obsluga-wnioskow.webp`,
    ],
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Czym jest zmiana wpisu w KRS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zmiana wpisu w Krajowym Rejestrze Sądowym (KRS) to aktualizacja danych ujawnionych w rejestrze przedsiębiorców – takich jak skład zarządu, sposób reprezentacji, umowa spółki (obejmująca m.in. firmę, siedzibę, kapitał zakładowy czy PKD), zmiana wspólników lub zgłoszenie prokury. Obowiązek aktualizacji wynika z ustawy o KRS i dotyczy każdej spółki wpisanej do rejestru.",
      },
    },
    {
      "@type": "Question",
      name: "Jakie zmiany najczęściej zgłasza się do KRS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Najczęściej aktualizowane dane to: zmiana zarządu, powołanie lub odwołanie prokurenta, zmiana umowy spółki obejmująca m.in. firmę (nazwę), siedzibę, wysokość kapitału zakładowego, zmianę PKD oraz zmiana wspólników. Zmiana tych danych wymaga zgłoszenia ich do KRS, tak aby rejestr odzwierciedlał aktualny stan prawny spółki.",
      },
    },
    {
      "@type": "Question",
      name: "Czy zmiana wpisu w KRS jest obowiązkowa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak. Każda zmiana danych ujawnionych w rejestrze przedsiębiorców musi zostać zgłoszona do KRS w terminie określonym przepisami. Brak zgłoszenia może prowadzić do odpowiedzialności osób reprezentujących spółkę. Więcej na ten temat przeczytasz w naszym artykule: Obowiązek aktualizacji danych KRS – ryzyka zaniechania",
      },
    },
    {
      "@type": "Question",
      name: "Jak wygląda proces zmiany wpisu w KRS z Waszym udziałem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Szczegółowy opis krok po kroku znajdziesz w sekcji „Jak działamy” na stronie Usługi – tam przedstawiamy cały proces od pierwszego kontaktu, przez analizę sytuacji, po złożenie kompletnego wniosku do KRS.",
      },
    },
    {
      "@type": "Question",
      name: "Czy mogę zgłosić zmianę w KRS samodzielnie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak, zmiany możesz dokonać samodzielnie przez system PRS lub – w określonych przypadkach – S24. Wymaga to jednak przygotowania poprawnych uchwał, wniosku i załączników, a także podpisania dokumentów podpisem kwalifikowanym lub Profilem Zaufanym. Błędny wniosek może skutkować zwrotem lub wezwaniem do uzupełnienia braków.",
      },
    },
    {
      "@type": "Question",
      name: "Jakie dokumenty są potrzebne do zmiany danych w KRS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "W zależności od rodzaju zmiany najczęściej wymagane są: uchwała wspólników lub odpowiedni dokument zarządu, tekst jednolity umowy spółki w przypadku zmian umowy oraz formularz PRS lub wniosek S24. Zakres dokumentacji zależy od rodzaju modyfikowanych danych.",
      },
    },
    {
      "@type": "Question",
      name: "Jakie są konsekwencje braku aktualizacji danych w KRS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Brak terminowego zgłoszenia zmiany danych spółki w KRS może mieć kilka skutków. Po pierwsze, sąd może nałożyć na członków zarządu grzywnę za niedopełnienie obowiązku zgłoszeniowego (art. 24 i n. uKRS). Po drugie, kontrahenci, bank lub notariusz mogą odmówić dokonania czynności, jeśli dane w KRS są nieaktualne. Więcej na ten temat przeczytasz tutaj: Obowiązek aktualizacji danych KRS – ryzyka zaniechania",
      },
    },
    {
      "@type": "Question",
      name: "Co składa się na całkowity koszt zmiany wpisu w rejestrze przedsiębiorców KRS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Na całkowity koszt zmiany wpisu w rejestrze przedsiębiorców KRS składają się: opłata sądowa, wynagrodzenie za naszą usługę, opłata skarbowa od pełnomocnictwa (jeżeli jest udzielane) oraz ewentualne opłaty notarialne. Szczegóły znajdziesz w zakładce Cennik.",
      },
    },
    {
      "@type": "Question",
      name: "Ile wynosi opłata sądowa za zmianę wpisu w rejestrze przedsiębiorców KRS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Opłata sądowa za zmianę wpisu w rejestrze przedsiębiorców KRS wynosi 250 zł.",
      },
    },
    {
      "@type": "Question",
      name: "Czy opłata skarbowa od pełnomocnictwa jest obowiązkowa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak, jeżeli zmiana wpisu jest dokonywana przez pełnomocnika, należy uiścić opłatę skarbową w wysokości 17 zł za pełnomocnictwo. Szczegóły znajdziesz w zakładce Cennik.",
      },
    },
    {
      "@type": "Question",
      name: "Jak ustalane jest wynagrodzenie za obsługę wniosku o zmianę wpisu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wysokość wynagrodzenia zależy od zakresu zmian i nakładu pracy, a szczegółowe stawki znajdziesz w zakładce Cennik.",
      },
    },
    {
      "@type": "Question",
      name: "Co jeszcze może wpływać na koszt zmiany wpisu w KRS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jeżeli dana czynność wymaga aktu notarialnego (np. zmiana umowy spółki poza S24), do opłaty sądowej i wynagrodzenia za naszą usługę dochodzą jeszcze opłaty notarialne. Są to odrębne koszty, które nie są częścią opłaty sądowej, ale wpływają na całkowity koszt całej operacji dla spółki.",
      },
    },
  ],
}

export default function HomePage() {
  return (
    <div className="relative pb-20">
      <Script id="faq-structured-data" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <div
        className="fixed inset-0 -z-20"
        style={{
          backgroundImage: `url(${heroBackgroundImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      <div className="fixed inset-0 -z-10 bg-slate-900/60" aria-hidden />

      <Navbar />
      <main className="py-32">
        <Hero />
        <LandingServices />
        <Features />
        <Trust />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
