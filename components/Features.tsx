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
      <div className="mx-auto w-full px-6 sm:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Dlaczego Wybierają Nas Klienci
          </h2>
          <p className="mt-4 text-lg text-gray-200">
            Ponad 10 lat doświadczenia w obsłudze firm. Zaufały nam już setki
            przedsiębiorców.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {features.map(({ icon, title, description, href }) => (
            <div
              key={title}
              className="flex h-full flex-col justify-between rounded-2xl border border-white/20 bg-white/10 p-5 text-left backdrop-blur-sm transition-colors duration-150 hover:bg-white/15 sm:p-6"
            >
              <div>
                {icon ? (
                  <span className="inline-flex h-12 w-12 items-center justify-center text-3xl" aria-hidden="true">
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
                className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-amber-600 px-4 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-amber-700"
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
