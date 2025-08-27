import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center text-center py-32 px-4 sm:py-40 overflow-hidden">
      <Image
        src="/images/nowoczesne-biuro-z-praca-nad-dokumentem.webp"
        alt=""
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-slate-900/70" />

      <div className="relative z-10 max-w-3xl mx-auto text-white">
        <h1 className="text-4xl sm:text-5xl font-bold">
          Zmiana wpisu w KRS bez stresu
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-200">
          Kompleksowa obsługa wniosków o zmianę danych spółki – szybko,
          bezpiecznie i online.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/cennik"
            className="px-8 py-3 bg-amber-600 hover:bg-amber-700 rounded-md text-white font-medium"
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
            className="px-8 py-3 bg-white text-amber-600 hover:bg-gray-100 rounded-md font-medium"
          >
            Skontaktuj się
          </Link>
        </div>
      </div>
    </section>
  )
}
