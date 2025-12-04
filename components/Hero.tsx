import React from 'react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-4 sm:py-24 bg-transparent">
      <div className="w-4/5 mx-auto text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 sm:mb-6 leading-tight">
          Zmiana wpisu w <span className="text-amber-400">KRS</span>{' '}
          <br className="hidden md:block" />
          dla spółek – bez stresu, błędów i zwrotów wniosku
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 text-gray-300 leading-relaxed text-justify">
          Wiemy, jak uciążliwe, czasochłonne i frustrujące bywa samodzielne składanie wniosku o zmianę wpisu w KRS. Przez ostatnie lata pomogliśmy setkom klientów z całej Polski skutecznie przejść przez ten proces — bez błędów, bez zwrotów i bez nerwów.
        </p>

        <p className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 text-gray-300 leading-relaxed text-justify">
          Nie ma znaczenia, gdzie mieszkasz — działamy zdalnie, profesjonalnie i kompleksowo. Od przygotowania dokumentów po złożenie kompletnego wniosku elektronicznego i uzyskanie prawomocnego wpisu.
        </p>

        <p className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-8 text-gray-300 leading-relaxed text-justify">
          Zrobimy to za Ciebie kompleksowo i bezpiecznie: przygotujemy wszystkie dokumenty, wypełnimy i złożymy elektroniczny wniosek o zmianę wpisu w KRS, dopilnujemy podpisów i zadbamy o kontakt z sądem rejestrowym, tak aby Twoja zmiana danych w KRS przeszła bez zwrotów, poprawek i niepotrzebnego stresu.
        </p>
      </div>
      <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/uslugi"
          className="w-full sm:w-auto bg-amber-800 hover:bg-amber-900 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg transition-colors duration-150 text-center"
        >
          Co robimy?
        </Link>
        <Link
          href="/o-nas"
          className="w-full sm:w-auto bg-amber-800 hover:bg-amber-900 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg transition-colors duration-150 text-center"
        >
          Jak działamy?
        </Link>
        <Link
          href="/cennik"
          className="w-full sm:w-auto bg-amber-800 hover:bg-amber-900 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg transition-colors duration-150 text-center"
        >
          Ile to kosztuje?
        </Link>
      </div>
    </section>
  )
}

