import React from 'react'

export default function Process() {
  return (
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
  )
}
