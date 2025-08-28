import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import SEOExpandableSection from "@/components/SEOExpandableSection";

export const metadata: Metadata = {
  title:
    "Zmiana wpisu w KRS bez stresu - profesjonalna obsługa wniosków | ZmianaKRS",
  description:
    "Potrzebujesz zmienić wpis w KRS? Oferujemy kompleksową obsługę wniosków o zmianę danych spółki w KRS. Szybko, bezpiecznie i w przystępnej cenie.",
  openGraph: {
    title:
      "Zmiana wpisu w KRS bez stresu - profesjonalna obsługa wniosków | ZmianaKRS",
    description:
      "Potrzebujesz zmienić wpis w KRS? Oferujemy kompleksową obsługę wniosków o zmianę danych spółki w KRS. Szybko, bezpiecznie i w przystępnej cenie.",
    url: "https://zmianakrs.pl/",
    images: [
      {
        url: "https://zmianakrs.pl/images/krs-services.png",
      },
    ],
  },
};
export default function HomePage() {
  const homeJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "ZmianaKRS",
    description:
      "Specjalistyczne usługi zmiany wpisów w Krajowym Rejestrze Sądowym",
    url: "https://zmianakrs.pl",
    serviceType: "Usługi prawne KRS",
    areaServed: "Polska",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Usługi KRS",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Zmiana wpisu w KRS",
            description:
              "Kompleksowa obsługa wniosków o zmianę wpisu w Krajowym Rejestrze Sądowym",
          },
        },
      ],
    },
  };
  return (
    <div className="min-h-screen bg-[url('/images/nowoczesne-biuro-profesjonalne-usługi-KRS-obsługa-wniosków-o-zmianę-wpisu-w-KRS.webp')] bg-center bg-cover bg-no-repeat">
      <Script
        id="home-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />

      <Navbar />

      <main>
        <Hero />
        <Features />

        {/* Sekcja: Profesjonalna obsługa wniosków o zmianę wpisu w KRS */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto p-8 sm:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
                Profesjonalna obsługa wniosków o zmianę wpisu w KRS
              </h2>

              <h3 className="text-xl sm:text-2xl font-semibold text-amber-400 mb-4 text-center">
                Aktualizacja danych w KRS – obowiązek, którego nie warto
                odkładać
              </h3>

              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-base sm:text-lg">
                  Zmiana danych w KRS to nie tylko formalność – to prawny
                  obowiązek każdej spółki wpisanej do rejestru. Niedopełnienie
                  go może skutkować poważnymi konsekwencjami: grzywną,
                  odpowiedzialnością członków zarządu, a nawet odmową wykonania
                  czynności przez kontrahenta czy notariusza.
                </p>

                <h3 className="text-lg sm:text-xl font-semibold text-amber-400 mt-6 mb-4">
                  Kompleksowa obsługa zmian w KRS
                </h3>

                <p className="text-base sm:text-lg">
                  Nasza firma specjalizuje się w{" "}
                  <Link
                    href="/uslugi"
                    className="text-amber-400 hover:text-amber-300 underline"
                  >
                    kompleksowej obsłudze wniosków KRS
                  </Link>{" "}
                  – od przygotowania uchwał i dokumentów, przez złożenie
                  elektronicznego wniosku w systemie PRS lub S24, aż po uzyskanie
                  postanowienia sądu. Pomagamy zarówno przy{" "}
                  <Link
                    href="/uslugi"
                    className="text-amber-400 hover:text-amber-300 underline"
                  >
                    zmianie zarządu w KRS
                  </Link>
                  , zmianie adresu, siedziby, PKD czy kapitału zakładowego, jak
                  i przy aktualizacji{" "}
                  <Link
                    href="/uslugi"
                    className="text-amber-400 hover:text-amber-300 underline"
                  >
                    umowy spółki KRS
                  </Link>{" "}
                  lub dopisaniu prokurenta.
                </p>

                <h3 className="text-lg sm:text-xl font-semibold text-amber-400 mt-6 mb-4">
                  Profesjonalne wsparcie w procesie zmiany wpisu w KRS
                </h3>

                <p className="text-base sm:text-lg">
                  Działamy sprawnie, bez zbędnych formalności i w pełnej zgodzie
                  z obowiązującymi przepisami. Jeśli potrzebujesz pomocy w
                  zgłoszeniu zmiany do KRS – sprawdź{" "}
                  <Link
                    href="/cennik"
                    className="text-amber-400 hover:text-amber-300 underline"
                  >
                    nasz cennik usług KRS
                  </Link>{" "}
                  lub{" "}
                  <Link
                    href="/kontakt"
                    className="text-amber-400 hover:text-amber-300 underline"
                  >
                    skontaktuj się z nami
                  </Link>
                  . Poznaj także{" "}
                  <Link
                    href="/o-nas"
                    className="text-amber-400 hover:text-amber-300 underline"
                  >
                    nasze doświadczenie
                  </Link>{" "}
                  i przeczytaj{" "}
                  <Link
                    href="/blog"
                    className="text-amber-400 hover:text-amber-300 underline"
                  >
                    artykuły o zmianach w KRS
                  </Link>
                  .
                </p>

                <div className="text-center mt-8">
                  <p className="text-lg sm:text-xl font-semibold text-amber-400 mb-6">
                    Skorzystaj z doświadczenia i uniknij błędów – powierz wpis
                    zmian do KRS profesjonalistom.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                    <Link
                      href="/blog"
                      className="text-amber-400 hover:text-amber-300 underline text-lg"
                    >
                      Blog
                    </Link>
                    <span className="hidden sm:inline text-gray-500">•</span>
                    <Link
                      href="/o-nas"
                      className="text-amber-400 hover:text-amber-300 underline text-lg"
                    >
                      O nas
                    </Link>
                    <span className="hidden sm:inline text-gray-500">•</span>
                    <Link
                      href="/ksiegowi"
                      className="text-amber-400 hover:text-amber-300 underline text-lg"
                    >
                      Współpraca z księgowymi
                    </Link>
                  </div>

                  <Link
                    href="/kontakt"
                    className="inline-block px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors duration-200"
                  >
                    Skontaktuj się z nami
                  </Link>
                </div>
              </div>
          </div>
        </section>
      </main>

      {/* Sekcja o KRS */}
      <section className="w-full px-4 md:px-8 lg:px-16 py-12 space-y-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl lg:text-4xl font-bold mb-6 text-center text-white">
            Czym jest Krajowy Rejestr Sądowy (KRS)?
          </h1>


          <p className="text-base sm:text-lg leading-relaxed mb-6 text-white">
            <strong>Krajowy Rejestr Sądowy (KRS)</strong> to centralny, jawny
            rejestr publiczny prowadzony przez sądy rejestrowe (działające w
            strukturze sądów okręgowych) zgodnie z ustawą z dnia 20 sierpnia 1997
            r. o Krajowym Rejestrze Sądowym (Dz.U. z 2023 r. poz. 685). Rejestr
            ten stanowi kluczowy filar przejrzystości i bezpieczeństwa obrotu
            prawnego i gospodarczego w Polsce.
          </p>

          <ul className="list-disc list-inside my-6 space-y-2 text-white text-base sm:text-lg">
            <li>Rejestr przedsiębiorców</li>
            <li>Rejestr stowarzyszeń, fundacji i organizacji</li>
            <li>Krajowy Rejestr Zadłużonych (KRZ)</li>
          </ul>

          <p className="text-base sm:text-lg leading-relaxed mb-6 text-white">
            Zgodnie z art. 8 ust. 1 uKRS, rejestr jest jawny – każdy ma prawo
            dostępu do danych bez wykazywania interesu prawnego. Wpisy korzystają
            z domniemania prawdziwości (art. 17 uKRS) i są dostępne przez
            wyszukiwarkę eKRS.{" "}
            <Link
              href="/uslugi"
              className="text-amber-400 hover:text-amber-300 font-semibold underline"
            >
              Profesjonalna obsługa zmian w KRS
            </Link>{" "}
            gwarantuje zgodność z wszystkimi wymogami prawnymi.
          </p>

          <h3 className="text-lg sm:text-xl font-semibold text-amber-400 mt-6 mb-4">
            Jakie informacje znajdują się w KRS?
          </h3>

          <p className="text-base sm:text-lg leading-relaxed mb-6 text-white">
            Rejestr zawiera <strong>dane identyfikacyjne spółki</strong>, skład
            organów oraz informacje o sposobie reprezentacji i kapitale. Każdy
            wpis opiera się na dokumentach złożonych w sądzie, dzięki czemu
            przedsiębiorcy i kontrahenci mogą w prosty sposób zweryfikować
            status podmiotu.
          </p>


          <ul className="list-disc list-inside my-6 space-y-2 text-white text-base sm:text-lg">
            <li>firma i siedziba spółki</li>
            <li>skład wspólników lub akcjonariuszy</li>
            <li>informacje o organach i prokurentach</li>
          </ul>

          <h3 className="text-lg sm:text-xl font-semibold text-amber-400 mt-6 mb-4">
            Dlaczego aktualność wpisu jest tak ważna?
          </h3>

          <p className="text-base sm:text-lg leading-relaxed mb-6 text-white">
            Nieaktualne dane w rejestrze mogą prowadzić do{" "}
            <strong>odpowiedzialności członków zarządu</strong> oraz utrudniać
            zawieranie umów. Terminowe zgłaszanie zmian chroni spółkę przed
            sankcjami i zapewnia przejrzystość wobec kontrahentów.
          </p>


          <ul className="list-disc list-inside my-6 space-y-2 text-white text-base sm:text-lg">
            <li>bezpieczeństwo obrotu gospodarczego</li>
            <li>pewność co do składu władz spółki</li>
            <li>uniknięcie kar finansowych</li>
          </ul>

          <h3 className="text-lg sm:text-xl font-semibold text-amber-400 mt-6 mb-4">
            Jak zgłosić zmianę do KRS?
          </h3>

          <p className="text-base sm:text-lg leading-relaxed mb-6 text-white">
            Wniosek można złożyć elektronicznie poprzez{" "}
            <strong>Portal Rejestrów Sądowych (PRS)</strong> albo system{" "}
            <strong>S24</strong>. Po przygotowaniu wymaganych dokumentów
            formularz podpisuje się podpisem kwalifikowanym lub profilem
            zaufanym i przesyła do sądu rejestrowego.
          </p>


          <ul className="list-disc list-inside my-6 space-y-2 text-white text-base sm:text-lg">
            <li>przygotowanie uchwał i załączników</li>
            <li>wypełnienie odpowiednich formularzy</li>
            <li>opłacenie wniosku i wysłanie przez PRS lub S24</li>
          </ul>

          <h3 className="text-lg sm:text-xl font-semibold text-amber-400 mt-6 mb-4">
            Konsekwencje braku zgłoszenia zmian
          </h3>

          <p className="text-base sm:text-lg leading-relaxed mb-6 text-white">
            Zaniedbanie obowiązku aktualizacji może skutkować nałożeniem{" "}
            <strong>grzywny przez sąd rejestrowy</strong>, a także
            odpowiedzialnością odszkodowawczą wobec osób trzecich. Regularna
            aktualizacja wpisów chroni przed tymi ryzykami.
          </p>

        </div>
      </section>

                    <SEOExpandableSection
        title="Profesjonalna obsługa zmian wpisu w KRS"
        content={`Profesjonalna obsługa zmian wpisu w KRS dla spółek i biur rachunkowych

Oferujemy kompleksową pomoc w zmianie wpisu w Krajowym Rejestrze Sądowym (KRS)...`}
        pageId="home"
      />

        <Footer />
      </div>
    );
  }
