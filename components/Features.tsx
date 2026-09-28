import Link from 'next/link'

type Feature = {
  icon: string
  title: string
  description: string
  href: string
}

const features: Feature[] = [
  {
    icon: '🕒',
    title: 'Dostępność',
    description:
      'Obsługujemy klientów z całej Polski i przeprowadzamy zmiany wpisu w KRS w pełni online – bez względu na miejsce siedziby Twojej spółki.',
    href: '/uslugi',
  },
  {
    icon: '🤝',
    title: 'Profesjonalizm',
    description:
      'Nasz zespół to osoby z wieloletnim doświadczeniem które z sukcesem przerejestrowały setki podmiotów w KRS.',
    href: '/o-nas',
  },
  {
    icon: '📄',
    title: 'Prosty cennik',
    description:
      'Stosujemy jasny system wynagradzania, wiesz ile i za co zapłacisz przed zleceniem usługi zmiany wpisu w KRS.',
    href: '/cennik',
  },
]

export default function Features() {
  return (
    <section className="py-16">
      <div className="mx-auto w-full px-6 sm:px-8">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Dlaczego przedsiębiorcy powierzają nam zmiany wpisów w KRS
          </h2>
          <p className="mt-3 text-lg text-gray-200">
            Od lat zajmujemy się zmianami danych spółek w KRS, rejestracją zmian zarządu, wspólników i adresów. Pomogliśmy setkom przedsiębiorców sprawnie przejść proces aktualizacji wpisu i ograniczyć ryzyko błędów formalnych.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {features.map(({ icon, title, description, href }) => (
            <div
              key={title}
              className="flex h-full flex-col items-center justify-between rounded-2xl border border-white/20 bg-white/10 p-6 text-center backdrop-blur-sm transition-colors duration-150 hover:bg-white/15 sm:p-8"
            >
              <div>
                {icon ? (
                  <span className="inline-flex h-12 w-12 items-center justify-center text-3xl" aria-hidden="true">
                    {icon}
                  </span>
                ) : null}
                <h3 className="mt-6 text-center text-2xl font-semibold text-white">
                  {title}
                </h3>
                <p className="mt-3 text-center text-sm leading-relaxed text-gray-200">
                  {description}
                </p>
              </div>
              <Link
                href={href}
                className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-amber-600 px-4 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-amber-700"
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
