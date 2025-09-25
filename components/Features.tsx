import Link from 'next/link'

const features = [
  {
    icon: '🕒',
    title: 'Dostępność',
    description:
      'Jesteśmy tuż obok, gdy tylko Twoja firma potrzebuje wsparcia – zarówno w sprawach pilnych, jak i przy codziennych formalnościach.',
    href: '/uslugi',
  },
  {
    icon: '🤝',
    title: 'Profesjonalizm',
    description:
      'Każde zlecenie prowadzą eksperci z wieloletnim doświadczeniem, dbając o terminowość i najwyższą jakość obsługi.',
    href: '/o-nas',
  },
  {
    icon: '📄',
    title: 'Prosty cennik',
    description:
      'Przejrzyste warunki współpracy i brak ukrytych kosztów – od początku wiesz, za co płacisz.',
    href: '/cennik',
  },
]

export default function Features() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Dlaczego Wybierają Nas Klienci
          </h2>
          <p className="mt-4 text-lg text-gray-200">
            Ponad 10 lat doświadczenia w obsłudze firm. Zaufały nam już setki
            przedsiębiorców.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map(({ icon, title, description, href }) => (
            <div
              key={title}
              className="flex h-full flex-col justify-between rounded-2xl border border-white/20 bg-white/10 p-8 text-left backdrop-blur"
            >
              <div>
                {icon ? (
                  <span className="text-4xl" aria-hidden="true">
                    {icon}
                  </span>
                ) : null}
                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-200">
                  {description}
                </p>
              </div>
              <Link
                href={href}
                className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-white/20 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/30"
              >
                Poznaj szczegóły
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
