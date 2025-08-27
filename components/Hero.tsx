import React from 'react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="flex items-center justify-center text-center py-32 px-4 sm:py-40">
      <div className="max-w-4xl mx-auto text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Zmiana wpisu w KRS bez stresu i błędów – zrobimy to za Ciebie
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-200">
          Wiemy, jak uciążliwe, czasochłonne i stresujące potrafi być
          samodzielne przygotowanie wniosku do KRS. Formalności, poprawki i
          urzędowy język zniechęcają już na starcie. Dlatego zrobimy to za
          Ciebie – przygotujemy i złożymy wniosek, a Ty dowiesz się od nas,
          jakie dokumenty będą potrzebne.
        </p>
        <p className="mt-4 text-lg sm:text-xl text-gray-200">
          Nie ma znaczenia, gdzie mieszkasz — działamy zdalnie w całej Polsce i
          prowadzimy Cię przez każdy etap procesu.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/uslugi"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-medium"
          >
            Co robimy?
          </Link>
          <Link
            href="#jak-dzialamy"
            className="px-8 py-3 border border-white/20 rounded-md text-white font-medium hover:bg-white/10"
          >
            Jak działamy?
          </Link>
          <Link
            href="/cennik"
            className="px-8 py-3 bg-white text-blue-600 hover:bg-gray-100 rounded-md font-medium"
          >
            Ile to kosztuje?
          </Link>
        </div>
      </div>
    </section>
  )
}
