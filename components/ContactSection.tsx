import Image from "next/image";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="kontakt" className="relative isolate overflow-hidden bg-slate-900">
      <div className="absolute inset-0">
        <Image
          src="/images/contact-bg.webp"
          alt="Kontakt z zespołem ZmianaKRS"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-slate-900/70" />
      </div>

      <div className="relative mx-auto w-4/5 max-w-5xl py-24 sm:py-32">
        <div className="rounded-3xl bg-white/10 p-10 text-slate-100 shadow-2xl backdrop-blur">
          <p className="text-sm uppercase tracking-widest text-amber-300">
            Porozmawiajmy
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
            Zarezerwuj konsultację w sprawie zmian w KRS
          </h2>
          <p className="mt-4 text-base text-slate-200/90">
            Odpowiadamy tego samego dnia roboczego. Możesz napisać, zadzwonić lub
            zostawić swoje dane – oddzwonimy w dogodnym terminie.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="space-y-4 text-sm text-slate-200/80">
              <div>
                <p className="text-xs uppercase tracking-wider text-amber-300">Telefon</p>
                <a
                  href="tel:572234779"
                  className="text-lg font-semibold text-white transition hover:text-amber-300"
                >
                  572&nbsp;234&nbsp;779
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-amber-300">E-mail</p>
                <a
                  href="mailto:kontakt@zmianakrs.pl"
                  className="text-lg font-semibold text-white transition hover:text-amber-300"
                >
                  kontakt@zmianakrs.pl
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-amber-300">Adres biura</p>
                <p>ul. Marszałkowska 58, Warszawa</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-slate-200/80">
                Preferujesz wiadomość pisemną? Skorzystaj z formularza kontaktowego –
                oddzwonimy w wybranym przez Ciebie terminie.
              </p>
              <Link
                href="https://calendly.com/zmianakrs/konsultacja"
                className="inline-flex items-center justify-center rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-gray-900 transition hover:bg-amber-300"
              >
                Zarezerwuj termin online
              </Link>
              <Link
                href="mailto:kontakt@zmianakrs.pl"
                className="inline-flex items-center justify-center rounded-full border border-amber-400 px-5 py-3 text-sm font-semibold text-amber-300 transition hover:bg-amber-400 hover:text-gray-900"
              >
                Napisz wiadomość
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
