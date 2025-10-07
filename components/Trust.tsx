import Link from "next/link"

export default function Trust() {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
            Profesjonalna obsługa wniosków o zmianę wpisu w KRS
          </h2>

          <h3 className="text-xl sm:text-2xl font-semibold text-amber-400 mb-4 text-center">
            Aktualizacja danych w KRS – obowiązek, którego nie warto odkładać
          </h3>

          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p className="text-base sm:text-lg">
              Zmiana danych w KRS to nie tylko formalność – to prawny obowiązek każdej spółki wpisanej do rejestru. Niedopełnienie go może skutkować poważnymi konsekwencjami: grzywną, odpowiedzialnością członków zarządu, a nawet odmową wykonania czynności przez kontrahenta czy notariusza.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-amber-400 mt-6 mb-4">
              Kompleksowa obsługa zmian w KRS
            </h3>

            <p className="text-base sm:text-lg">
              Nasza firma specjalizuje się w {" "}
              <Link href="/uslugi" className="text-amber-400 hover:text-amber-300 underline">
                kompleksowej obsłudze wniosków KRS
              </Link>{" "}
              – od przygotowania uchwał i dokumentów, przez złożenie elektronicznego wniosku w systemie PRS lub S24, aż po uzyskanie postanowienia sądu. Pomagamy zarówno przy {" "}
              <Link href="/uslugi" className="text-amber-400 hover:text-amber-300 underline">
                zmianie zarządu w KRS
              </Link>
              , zmianie adresu, siedziby, PKD czy kapitału zakładowego, jak i przy aktualizacji {" "}
              <Link href="/uslugi" className="text-amber-400 hover:text-amber-300 underline">
                umowy spółki KRS
              </Link>{" "}
              lub dopisaniu prokurenta.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-amber-400 mt-6 mb-4">
              Profesjonalne wsparcie w procesie zmiany wpisu w KRS
            </h3>

            <p className="text-base sm:text-lg">
              Działamy sprawnie, bez zbędnych formalności i w pełnej zgodzie z obowiązującymi przepisami. Jeśli potrzebujesz pomocy w zgłoszeniu zmiany do KRS – sprawdź {" "}
              <Link href="/cennik" className="text-amber-400 hover:text-amber-300 underline">
                nasz cennik usług KRS
              </Link>{" "}
              lub {" "}
              <Link href="/kontakt" className="text-amber-400 hover:text-amber-300 underline">
                skontaktuj się z nami
              </Link>
              . Poznaj także {" "}
              <Link href="/o-nas" className="text-amber-400 hover:text-amber-300 underline">
                nasze doświadczenie
              </Link>{" "}
              i przeczytaj {" "}
              <Link href="/blog" className="text-amber-400 hover:text-amber-300 underline">
                artykuły o zmianach w KRS
              </Link>
              .
            </p>

            <div className="text-center mt-8">
              <p className="text-lg sm:text-xl font-semibold text-amber-400 mb-6">
                Skorzystaj z doświadczenia i uniknij błędów – powierz wpis zmian do KRS profesjonalistom.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <Link href="/blog" className="text-amber-400 hover:text-amber-300 underline text-lg">
                  Blog
                </Link>
                <span className="hidden sm:inline text-gray-500">•</span>
                <Link href="/o-nas" className="text-amber-400 hover:text-amber-300 underline text-lg">
                  O nas
                </Link>
                <span className="hidden sm:inline text-gray-500">•</span>
                <Link href="/ksiegowi" className="text-amber-400 hover:text-amber-300 underline text-lg">
                  Współpraca z księgowymi
                </Link>
              </div>

              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Skontaktuj się z nami
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
