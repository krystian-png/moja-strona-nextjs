import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import SEOExpandableSection from "@/components/seo-expandable-section";
import HeadMeta from "@/components/HeadMeta";
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
    <div className="min-h-screen relative">
      <HeadMeta
        title="Zmiana wpisu w KRS bez stresu - profesjonalna obsługa wniosków | ZmianaKRS"
        description="Potrzebujesz zmienić wpis w KRS? Oferujemy kompleksową obsługę wniosków o zmianę danych spółki w KRS. Szybko, bezpiecznie i w przystępnej cenie."
        canonicalUrl="https://zmianakrs.pl/"
        ogTitle="Zmiana wpisu w KRS bez stresu - profesjonalna obsługa wniosków | ZmianaKRS"
        ogDescription="Potrzebujesz zmienić wpis w KRS? Oferujemy kompleksową obsługę wniosków o zmianę danych spółki w KRS. Szybko, bezpiecznie i w przystępnej cenie."
        ogImage="https://zmianakrs.pl/images/krs-services.png"
        structuredData={homeJsonLd}
      />

      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/nowoczesne-biuro-profesjonalne-usługi-KRS-obsługa-wniosków-o-zmianę-wpisu-w-KRS.webp"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-900/60" />
      </div>

      <Navbar />

      <main>
        <Hero />
        <Features />

        {/* Sekcja: Profesjonalna obsługa wniosków o zmianę wpisu w KRS */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 sm:p-12">
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
          </div>
        </section>
      </main>

      {/* Sekcja o KRS */}
      <section className="w-full px-4 md:px-8 lg:px-16 py-12 space-y-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl lg:text-4xl font-bold mb-6 text-center text-white">
            Czym jest Krajowy Rejestr Sądowy (KRS)?
          </h1>

          <Image
            src="/images/budynek-krs-tablica-przy-wejsciu.webp"
            alt=""
            className="rounded-2xl shadow-md mb-6 mx-auto max-w-full h-auto"
            width={400}
            height={300}
            loading="lazy"
          />
          <p className="text-center text-sm text-gray-300 mb-8 sr-only">
            Wejście do budynku z tablicą „Krajowy Rejestr Sądowy" – symbol
            jawności i legalności rejestrów.
          </p>

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

          {/* Remaining informational sections... (omitted for brevity) */}
          {/* Ensure each <Image> below follows the same pattern: alt="" and loading="lazy" */}
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
