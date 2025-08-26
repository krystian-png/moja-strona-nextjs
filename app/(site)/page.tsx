import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ZmianaKRS - Strona główna",
  description:
    "Profesjonalna obsługa zmian w KRS. Skorzystaj z naszej pomocy przy aktualizacji danych spółki.",
  openGraph: {
    title: "ZmianaKRS - Strona główna",
    description:
      "Profesjonalna obsługa zmian w KRS. Skorzystaj z naszej pomocy przy aktualizacji danych spółki.",
    url: "/",
    siteName: "ZmianaKRS",
    images: [
      {
        url: "/images/krs-logo.png",
        width: 1200,
        height: 630,
        alt: "ZmianaKRS",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main>
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl font-semibold">Zmiany w KRS bez stresu</h1>
            <p className="mt-4 text-gray-600">
              Aktualizacja danych spółki nigdy nie była prostsza. Zapewniamy
              profesjonalne wsparcie na każdym etapie.
            </p>
            <div className="mt-6 flex gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Skontaktuj się
              </Link>
              <Link
                href="/uslugi"
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50"
              >
                Poznaj usługi
              </Link>
            </div>
          </div>
          <div>
            <img
              src="/images/Profesjonalna-poczekalnia-prawnicza-z-eleganckimi-krzeslami-atmosfera-zaufania.webp"
              alt=""
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-12">
            Dlaczego warto z nami współpracować?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="/images/konsultacja-w-zakresie-zmiany-wpisu-do-krs.webp"
                alt="Konsultacja w zakresie zmian KRS"
                loading="lazy"
                className="mx-auto mb-4 rounded-lg"
              />
              <h3 className="font-semibold mb-2">Eksperckie doradztwo</h3>
              <p className="text-sm text-gray-600">
                Doświadczony zespół specjalistów przeprowadzi Cię przez cały
                proces zmian.
              </p>
            </div>
            <div className="text-center">
              <img
                src="/images/archiwum-dokumenty-spolek-zmiana-wpisu-krs.webp"
                alt="Archiwum dokumentów spółek"
                loading="lazy"
                className="mx-auto mb-4 rounded-lg"
              />
              <h3 className="font-semibold mb-2">Kompleksowa obsługa</h3>
              <p className="text-sm text-gray-600">
                Zadbamy o przygotowanie dokumentów i ich prawidłowe złożenie w
                sądzie.
              </p>
            </div>
            <div className="text-center">
              <img
                src="/images/outsourcing-zmian-krs-kompleksowa-obsluga-dla-przedsiebiorcow-i-ksiegowych.webp"
                alt="Outsourcing zmian KRS"
                loading="lazy"
                className="mx-auto mb-4 rounded-lg"
              />
              <h3 className="font-semibold mb-2">Oszczędność czasu</h3>
              <p className="text-sm text-gray-600">
                Skup się na prowadzeniu biznesu, a formalności zostaw nam.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="/images/prawniczka-analizuje-dokumenty-aktualizacja-krs.webp"
              alt="Prawniczka analizująca dokumenty"
              loading="lazy"
              className="rounded-lg shadow-md"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Proces krok po kroku</h2>
            <p className="text-sm text-gray-600 mb-4">
              Od pierwszej konsultacji po finalne złożenie wniosku - jesteśmy z
              Tobą.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 list-disc pl-5">
              <li>Analiza potrzeb i dokumentów</li>
              <li>Przygotowanie odpowiednich formularzy</li>
              <li>Weryfikacja i wysyłka do sądu</li>
              <li>Monitorowanie postępu sprawy</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <h2 className="text-2xl font-semibold mb-4">Gotowy na zmianę?</h2>
        <p className="text-sm text-gray-600 mb-8">
          Skontaktuj się z nami i dowiedz się, jak możemy pomóc Twojej spółce.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Skontaktuj się
        </Link>
      </section>
    </main>
  );
}
