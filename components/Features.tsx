import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const features = [
  {
    src: '/icons/dostepnosc.svg',
    alt: 'Ikona dostępności',
    title: 'Dostępność',
    description: 'Jesteśmy do Twojej dyspozycji, gdy tylko nas potrzebujesz.',
    href: '/contact',
  },
  {
    src: '/icons/profesjonalizm.svg',
    alt: 'Ikona profesjonalizmu',
    title: 'Profesjonalizm',
    description: 'Zapewniamy rzetelną obsługę opartą na doświadczeniu.',
    href: '/o-nas',
  },
  {
    src: '/icons/prosty-cennik.svg',
    alt: 'Ikona prostego cennika',
    title: 'Prosty cennik',
    description: 'Przejrzyste stawki bez ukrytych kosztów.',
    href: '/cennik',
  },
]

export default function Features() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Dlaczego warto z nami współpracować?
        </h2>
        <p className="text-sm text-gray-600 text-center mb-12">
          Ponad 10 lat doświadczenia w obsłudze firm. Zaufały nam już setki
          przedsiębiorców.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map(({ src, alt, title, description, href }) => (
            <div key={title} className="text-center">
              <Image
                src={src}
                alt={alt}
                width={64}
                height={64}
                className="mx-auto mb-4"
              />
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-sm text-gray-600">{description}</p>
              <Link
                href={href}
                className="mt-2 text-sm text-blue-600 hover:underline"
              >
                Dowiedz się więcej
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
