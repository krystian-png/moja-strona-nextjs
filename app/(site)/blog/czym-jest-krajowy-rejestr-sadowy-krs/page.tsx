import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Czym jest Krajowy Rejestr Sądowy (KRS) i jakie dane ujawnia? | ZmianaKRS",
  description:
    "Kompletny przewodnik po Krajowym Rejestrze Sądowym: czym jest KRS, jakie dane ujawnia, jak działa PRS i S24 oraz dlaczego aktualizacja danych spółki w KRS jest obowiązkowa.",
  alternates: {
    canonical: "https://zmianakrs.pl/blog/czym-jest-krajowy-rejestr-sadowy-krs",
  },
}

export default function BlogArticle() {
  return (
    <div className="prose prose-invert mx-auto px-4 py-10">
      <h1>Czym jest Krajowy Rejestr Sądowy (KRS)?</h1>

      <Image
        src="/images/budynek-krs-tablica-przy-wejsciu.webp"
        alt="Tablica Krajowy Rejestr Sądowy przy wejściu do budynku – symbol jawności rejestrów przedsiębiorców"
        width={1200}
        height={700}
        priority
      />

      <p>
        <strong>Krajowy Rejestr Sądowy (KRS)</strong> to centralny, jawny rejestr publiczny prowadzony przez sądy rejestrowe zgodnie z ustawą o KRS. Rejestr ten stanowi fundament przejrzystości i bezpieczeństwa obrotu gospodarczego w Polsce.
      </p>

      <h2>Zakres rejestrów w KRS</h2>
      <ul>
        <li>Rejestr przedsiębiorców</li>
        <li>Rejestr stowarzyszeń, fundacji i organizacji społecznych</li>
        <li>Krajowy Rejestr Zadłużonych</li>
      </ul>

      <h2>Jawność wpisów i domniemania prawne</h2>
      <p>
        Zgodnie z art. 8 ust. 1 uKRS, rejestr jest jawny. Wpisy korzystają z domniemania prawdziwości (art. 17 uKRS) i są dostępne przez wyszukiwarkę eKRS.
      </p>

      <Link href="/uslugi" className="text-amber-400 underline">
        Profesjonalna obsługa zmian w KRS
      </Link>

      <h2>Jakie dane ujawnia się w KRS?</h2>

      <Image
        src="/images/dokumenty-finansowe-repozytorium-krs.webp"
        alt="Repozytorium dokumentów finansowych spółek w KRS – przejrzystość danych rejestrowych"
        width={1200}
        height={700}
        loading="lazy"
      />

      <p>
        W zależności od podmiotu, KRS ujawnia m.in.: firmę, organy, adresy, PKD, kapitał zakładowy, wspólników, pełnomocników, kuratorów, dokumenty finansowe i postępowania upadłościowe.
      </p>

      <h2>Kto podlega obowiązkowi rejestracji w KRS?</h2>
      <p>
        W rejestrze przedsiębiorców ujmuje się spółki osobowe i kapitałowe, spółdzielnie, jednostki zagraniczne i inne organizacje na podstawie przepisów szczególnych.
      </p>

      <h2>Tryby elektroniczne: PRS i S24</h2>
      <p>
        Wnioski do KRS składa się wyłącznie elektronicznie: przez PRS (pełny zakres) lub S24 (uproszczone procedury).
      </p>

      <Image
        src="/images/budynek-urzedu-osoby-z-teczkami-przy-wejsciu-do-krs.webp"
        alt="Osoby składające wniosek do sądu rejestrowego KRS – elektroniczne systemy PRS i S24"
        width={1200}
        height={700}
        loading="lazy"
      />

      <h2>Repozytorium dokumentów KRS</h2>
      <p>
        Na podstawie art. 19e uKRS, spółki składają sprawozdania finansowe, uchwały i opinie biegłych. Brak ich złożenia grozi sankcjami.
      </p>

      <h2>Aktualizacja danych w KRS – dlaczego to ważne?</h2>
      <ul>
        <li>Chroni bezpieczeństwo obrotu gospodarczego</li>
        <li>Zapewnia wiarygodność danych ujawnionych w rejestrze</li>
        <li>Brak aktualizacji grozi odpowiedzialnością zarządu</li>
      </ul>

      <p>
        Jeśli potrzebujesz pomocy w aktualizacji danych w KRS,{" "}
        <Link href="/kontakt" className="text-amber-400 underline">
          skontaktuj się z nami
        </Link>
        .
      </p>
    </div>
  )
}
