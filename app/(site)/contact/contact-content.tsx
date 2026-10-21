import Link from "next/link"
import { Clock, Mail, MapPin, Phone } from "lucide-react"

import InlineContactForm from "../uslugi/_components/InlineContactForm"

const contactDetails = [
  {
    icon: Phone,
    title: "Telefon",
    value: "+48 572 234 779",
    href: "tel:+48572234779",
  },
  {
    icon: Mail,
    title: "E-mail",
    value: "biuro@zmianakrs.pl",
    href: "mailto:biuro@zmianakrs.pl",
  },
  {
    icon: Clock,
    title: "Godziny kontaktu",
    value: "Pon.–pt. 8:00–18:00",
  },
  {
    icon: MapPin,
    title: "Adres kancelarii",
    value: "ul. Wschodnia 24/3, 62-030 Luboń",
    helper: "Krystian Karpiuk Kancelaria Radcy Prawnego, NIP: 669-217-69-58",
  },
]

export default function ContactPageContent() {
  return (
    <main className="relative px-4 pb-14 pt-28 text-white sm:px-6 sm:pt-32 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
            Skontaktuj się z nami
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-200 sm:text-lg">
            Potrzebujesz pomocy w sprawach KRS? Opisz swoją sprawę — odpowiemy
            i przedstawimy możliwe rozwiązania.
          </p>
        </header>

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-12">
          <section aria-labelledby="contact-form-heading" className="min-w-0">
            <h2 id="contact-form-heading" className="mb-4 text-xl font-semibold sm:text-2xl">
              Wyślij zapytanie
            </h2>
            <InlineContactForm className="max-w-none p-5 sm:p-7" />
          </section>

          <aside className="min-w-0 pt-1 lg:pt-12" aria-labelledby="contact-details-heading">
            <h2 id="contact-details-heading" className="text-xl font-semibold sm:text-2xl">
              Porozmawiajmy o Twojej sprawie
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-200 sm:text-base">
              Pomagamy przedsiębiorcom i biurom rachunkowym w zmianach wpisów
              KRS, przygotowaniu dokumentów spółek i obowiązkach rejestrowych.
            </p>

            <div className="mt-8 space-y-7">
              {contactDetails.map(({ icon: Icon, title, value, href, helper }) => (
                <div key={title} className="flex items-start gap-4">
                  <Icon aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-white">{title}</h3>
                    {href ? (
                      <a
                        href={href}
                        className="mt-1 inline-block break-words text-sm text-slate-200 transition-colors hover:text-amber-300 sm:text-base"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm text-slate-200 sm:text-base">{value}</p>
                    )}
                    {helper ? (
                      <p className="mt-2 text-xs leading-relaxed text-slate-300">{helper}</p>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <section aria-label="Zakres pomocy" className="mt-12 border-t border-white/15 pt-6">
          <p className="max-w-5xl text-sm leading-relaxed text-slate-300">
            Wspieramy spółki m.in. przy zmianie zarządu, adresu, umowy spółki,
            aktualizacji danych w KRS i przygotowaniu wniosków rejestrowych.
            Poznaj nasze{" "}
            <Link href="/uslugi" className="text-amber-400 underline underline-offset-4 hover:text-amber-300">
              usługi zmian wpisu w KRS
            </Link>{" "}
            lub sprawdź{" "}
            <Link href="/cennik" className="text-amber-400 underline underline-offset-4 hover:text-amber-300">
              cennik obsługi KRS
            </Link>.
          </p>
        </section>
      </div>
    </main>
  )
}
