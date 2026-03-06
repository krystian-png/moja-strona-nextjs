import Link from "next/link"
import { ArrowRight, FileText, MapPin, Settings, Users } from "lucide-react"

type LandingServicesProps = {
  title?: string
  description?: string
  className?: string
}

const serviceCards = [
  {
    title: "Zmiana zarządu spółki z o.o.",
    description: "Powołanie, odwołanie lub rezygnacja członka zarządu oraz zgłoszenie zmiany do KRS.",
    href: "/uslugi/zmiana-zarzadu-spolki-zoo",
    ariaLabel: "Zmiana zarządu spółki z o.o. – usługa obsługi wniosku KRS",
    icon: Users,
    iconBgClassName: "bg-indigo-500/20 text-indigo-300",
  },
  {
    title: "Zmiana adresu spółki z o.o.",
    description: "Zmiana siedziby lub adresu spółki wraz z przygotowaniem dokumentów i zgłoszeniem do KRS.",
    href: "/uslugi/zmiana-adresu-spolki-zoo",
    ariaLabel: "Zmiana adresu spółki z o.o. – usługa obsługi wniosku KRS",
    icon: MapPin,
    iconBgClassName: "bg-emerald-500/20 text-emerald-300",
  },
  {
    title: "Zmiana wspólnika spółki z o.o.",
    description: "Zbycie udziałów oraz aktualizacja listy wspólników i zgłoszenie zmiany do KRS.",
    href: "/uslugi/zmiana-wspolnika-spolki-zoo",
    ariaLabel: "Zmiana wspólnika spółki z o.o. – usługa obsługi wniosku KRS",
    icon: Users,
    iconBgClassName: "bg-amber-500/20 text-amber-300",
  },
  {
    title: "Zmiana umowy spółki z o.o.",
    description: "Zmiana treści umowy spółki wraz z przygotowaniem dokumentów i wpisem do KRS.",
    href: "/uslugi/zmiana-umowy-spolki-zoo",
    ariaLabel: "Zmiana umowy spółki z o.o. – usługa obsługi wniosku KRS",
    icon: FileText,
    iconBgClassName: "bg-sky-500/20 text-sky-300",
  },
] as const

export default function LandingServices({
  title = "Najczęściej wybierane zmiany danych spółki w KRS",
  description = "Obsługujemy najczęstsze zmiany wpisów w KRS dla spółek z o.o. – od przygotowania dokumentów po złożenie wniosku do sądu rejestrowego.",
  className,
}: LandingServicesProps) {
  return (
    <section className={className}>
      <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
        <div className="mb-8 space-y-3">
          <h2 className="text-2xl font-bold text-amber-400 sm:text-3xl">{title}</h2>
          <p className="text-lg text-white/90">{description}</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {serviceCards.map((card) => {
            const Icon = card.icon

            return (
              <Link
                key={card.href}
                href={card.href}
                aria-label={card.ariaLabel}
                className="group flex h-full flex-col rounded-xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm transition hover:bg-white/15"
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className={`rounded-lg p-2.5 ${card.iconBgClassName}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <Settings className="h-5 w-5 text-white/30 transition group-hover:text-white/50" />
                </div>

                <h3 className="mb-2 text-lg font-semibold text-white">{card.title}</h3>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-white/80">{card.description}</p>

                <div className="mt-auto inline-flex items-center justify-between text-sm font-medium text-amber-300">
                  <span>Sprawdź usługę</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
