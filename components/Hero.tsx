import React from 'react'
import Link from 'next/link'

export default function Hero() {
  return (
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
  )
}
