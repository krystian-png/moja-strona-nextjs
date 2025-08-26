import React from 'react'
import Image from 'next/image'

export default function Features() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-12">
          Dlaczego warto z nami współpracować?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <Image
              src="/images/konsultacja-w-zakresie-zmiany-wpisu-do-krs.webp"
              alt="Konsultacja w zakresie zmian KRS"
              width={1536}
              height={1024}
              className="mx-auto mb-4 rounded-lg"
            />
            <h3 className="font-semibold mb-2">Eksperckie doradztwo</h3>
            <p className="text-sm text-gray-600">
              Doświadczony zespół specjalistów przeprowadzi Cię przez cały
              proces zmian.
            </p>
          </div>
          <div className="text-center">
            <Image
              src="/images/archiwum-dokumenty-spolek-zmiana-wpisu-krs.webp"
              alt="Archiwum dokumentów spółek"
              width={1024}
              height={1536}
              className="mx-auto mb-4 rounded-lg"
            />
            <h3 className="font-semibold mb-2">Kompleksowa obsługa</h3>
            <p className="text-sm text-gray-600">
              Zadbamy o przygotowanie dokumentów i ich prawidłowe złożenie w
              sądzie.
            </p>
          </div>
          <div className="text-center">
            <Image
              src="/images/outsourcing-zmian-krs-kompleksowa-obsluga-dla-przedsiebiorcow-i-ksiegowych.webp"
              alt="Outsourcing zmian KRS"
              width={1536}
              height={1024}
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
