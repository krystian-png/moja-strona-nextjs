import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="flex items-center justify-center text-center py-32 px-4 sm:py-40">
      <div className="max-w-4xl mx-auto text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Zmiana wpisu w KRS bez stresu i zbędnych formalności
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-200">
          Kompleksowa obsługa wniosków o zmianę danych spółki – szybko,
          bezpiecznie i online.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/cennik"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-medium"
          >
            Sprawdź cennik
          </Link>
          <Link
            href="/uslugi"
            className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-md text-white font-medium"
          >
            Nasze usługi
          </Link>
          <Link
            href="/kontakt"
            className="px-8 py-3 bg-white text-blue-600 hover:bg-gray-100 rounded-md font-medium"
          >
            Skontaktuj się
          </Link>
        </div>
      </div>
    </section>
  )
}
