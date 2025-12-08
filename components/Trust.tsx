import Link from "next/link"

export default function Trust() {
  return (
    <section className="relative py-16 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 sm:p-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
          Profesjonalna obsługa zmian w KRS
        </h2>

        <h3 className="text-xl sm:text-2xl font-semibold text-amber-400 mb-4 text-center">
          Aktualizacja danych w KRS – obowiązek, którego nie warto odkładać
        </h3>

        <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-6">
          Zmiana danych w Krajowym Rejestrze Sądowym to prawny obowiązek każdej spółki ujawnionej w rejestrze.
          Brak aktualizacji może skutkować grzywną, odpowiedzialnością zarządu oraz odmową dokonania czynności
          przez kontrahentów, bank czy notariusza.
        </p>

        <h3 className="text-lg sm:text-xl font-semibold text-amber-400 mb-3">
          Kompleksowa obsługa zmian w KRS
        </h3>

        <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-6">
          Oferujemy pełne wsparcie przy aktualizacji wpisu w KRS – od przygotowania uchwał i wymaganych dokumentów,
          przez złożenie elektronicznego wniosku w PRS lub S24, aż po uzyskanie postanowienia sądu. Obsługujemy m.in.
          zmianę zarządu, adresu, PKD, wspólników, danych rejestrowych oraz{" "}
          <Link href="/uslugi" className="text-amber-400 hover:text-amber-300 underline">
            zmianę umowy spółki KRS
          </Link>.
        </p>

        <h3 className="text-lg sm:text-xl font-semibold text-amber-400 mb-4">
          Profesjonalne wsparcie bez formalności i stresu
        </h3>

        <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-6">
          Działamy szybko, rzetelnie i zgodnie z obowiązującymi przepisami. Jeśli potrzebujesz pomocy w przygotowaniu
          lub złożeniu wniosku o zmianę wpisu, sprawdź{" "}
          <Link href="/cennik" className="text-amber-400 hover:text-amber-300 underline">
            cennik usług KRS
          </Link>{" "}
          lub{" "}
          <Link href="/kontakt" className="text-amber-400 hover:text-amber-300 underline">
            skontaktuj się z nami
          </Link>.
        </p>

        <p className="text-center text-xl text-amber-400 font-semibold mb-6">
          Skorzystaj z naszego doświadczenia i uniknij błędów – powierz wpis zmian w KRS specjalistom.
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

        <div className="text-center">
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            Skontaktuj się z nami
          </Link>
        </div>
      </div>
    </section>
  )
}

