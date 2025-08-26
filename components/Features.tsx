import React from 'react'

export default function Features() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-12">
          Dlaczego warto z nami współpracować?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <img
              src="/images/konsultacja-w-zakresie-zmiany-wpisu-do-krs.webp"
              alt="Konsultacja w zakresie zmian KRS"
              loading="lazy"
              className="mx-auto mb-4 rounded-lg"
            />
            <h3 className="font-semibold mb-2">Eksperckie doradztwo</h3>
            <p className="text-sm text-gray-600">
              Doświadczony zespół specjalistów przeprowadzi Cię przez cały
              proces zmian.
            </p>
          </div>
          <div className="text-center">
            <img
              src="/images/archiwum-dokumenty-spolek-zmiana-wpisu-krs.webp"
              alt="Archiwum dokumentów spółek"
              loading="lazy"
              className="mx-auto mb-4 rounded-lg"
            />
            <h3 className="font-semibold mb-2">Kompleksowa obsługa</h3>
            <p className="text-sm text-gray-600">
              Zadbamy o przygotowanie dokumentów i ich prawidłowe złożenie w
              sądzie.
            </p>
          </div>
          <div className="text-center">
            <img
              src="/images/outsourcing-zmian-krs-kompleksowa-obsluga-dla-przedsiebiorcow-i-ksiegowych.webp"
              alt="Outsourcing zmian KRS"
              loading="lazy"
              className="mx-auto mb-4 rounded-lg"
            />
            <h3 className="font-semibold mb-2">Oszczędność czasu</h3>
            <p className="text-sm text-gray-600">
              Skup się na prowadzeniu biznesu, a formalności zostaw nam.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
