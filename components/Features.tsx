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
              src="/icons/dostepnosc.svg"
              alt="Ikona dostępności"
              width={64}
              height={64}
              className="mx-auto mb-4"
            />
            <h3 className="font-semibold mb-2">Dostępność</h3>
            <p className="text-sm text-gray-600">
              Jesteśmy do Twojej dyspozycji, gdy tylko nas potrzebujesz.
            </p>
          </div>
          <div className="text-center">
            <Image
              src="/icons/profesjonalizm.svg"
              alt="Ikona profesjonalizmu"
              width={64}
              height={64}
              className="mx-auto mb-4"
            />
            <h3 className="font-semibold mb-2">Profesjonalizm</h3>
            <p className="text-sm text-gray-600">
              Zapewniamy rzetelną obsługę opartą na doświadczeniu.
            </p>
          </div>
          <div className="text-center">
            <Image
              src="/icons/prosty-cennik.svg"
              alt="Ikona prostego cennika"
              width={64}
              height={64}
              className="mx-auto mb-4"
            />
            <h3 className="font-semibold mb-2">Prosty cennik</h3>
            <p className="text-sm text-gray-600">
              Przejrzyste stawki bez ukrytych kosztów.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
