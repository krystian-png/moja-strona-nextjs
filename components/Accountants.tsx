import Image from "next/image";
import Link from "next/link";

const benefits = [
  "Stały dostęp do statusu spraw i dokumentów do pobrania w jednym miejscu",
  "Możliwość zamówienia ekspresowego przygotowania dokumentów",
  "Wsparcie merytoryczne zespołu prawnego podczas kontroli i audytów",
];

export default function Accountants() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-900 py-24 sm:py-32">
      <div className="absolute inset-0">
        <Image
          src="/images/profesjonalna-obsluga-zmian-krs-dla-biur-rachunkowych.webp"
          alt="Specjaliści KRS współpracują z biurem rachunkowym"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-slate-900/70" />
      </div>

      <div className="relative mx-auto flex w-4/5 max-w-6xl flex-col gap-10 lg:flex-row lg:items-center">
        <div className="flex-1 text-slate-100">
          <p className="text-sm uppercase tracking-widest text-amber-300">
            Dla biur rachunkowych
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
            Outsourcing zmian KRS dla księgowych i doradców
          </h2>
          <p className="mt-6 text-lg text-slate-200/90">
            Wspieramy dziesiątki biur rachunkowych w obsłudze ich klientów. Możesz
            zlecić nam wybrane zadanie lub stałą obsługę zmian w KRS – pozostając
            pierwszym kontaktem dla spółki.
          </p>
          <ul className="mt-8 space-y-4 text-sm text-slate-200/80">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-amber-400" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-1 flex-col gap-4 rounded-2xl bg-white/10 p-8 text-slate-100 backdrop-blur">
          <h3 className="text-2xl font-semibold">Jak przebiega współpraca?</h3>
          <ol className="space-y-3 text-sm text-slate-200/90">
            <li>
              <span className="font-semibold text-amber-300">1.</span> Przekazujesz nam
              zakres zmian wraz z uchwałami i danymi spółki.
            </li>
            <li>
              <span className="font-semibold text-amber-300">2.</span> Przygotowujemy
              komplet dokumentów, a Ty otrzymujesz je w panelu klienta.
            </li>
            <li>
              <span className="font-semibold text-amber-300">3.</span> Po akceptacji
              wysyłamy wniosek oraz monitorujemy wpis.
            </li>
          </ol>
          <Link
            href="/kontakt"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-gray-900 transition hover:bg-amber-300"
          >
            Dołącz do partnerów
          </Link>
        </div>
      </div>
    </section>
  );
}
