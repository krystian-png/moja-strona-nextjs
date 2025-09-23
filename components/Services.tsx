import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Zmiany w zarządzie i wspólnikach",
    description:
      "Przygotowujemy komplet dokumentów do zgłoszenia nowych członków zarządu, prokurentów i zmian w strukturze właścicielskiej.",
    image:
      "/images/zmiana-zarzadu-w-krs-przez-portal-rejestrow-sadowych.webp",
  },
  {
    title: "Aktualizacja umowy spółki",
    description:
      "Opracowujemy uchwały, teksty jednolite oraz niezbędne załączniki przy każdej zmianie zapisów umowy spółki.",
    image: "/images/zmiana-umowy-spolki-zgloszenie-KRS.webp",
  },
  {
    title: "Rejestracja zmian PKD i adresów",
    description:
      "Zgłaszamy zmiany kodów PKD, siedziby oraz adresów prowadzenia działalności, dbając o spójność danych w rejestrach państwowych.",
    image:
      "/images/aktualizacja-wpisu-do-krs-przez-system-s24.webp",
  },
];

export default function Services() {
  return (
    <section id="uslugi" className="bg-white py-24 sm:py-32">
      <div className="mx-auto w-4/5 max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
            Usługi
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Kompleksowa obsługa zmian w KRS
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Współpracujemy z przedsiębiorcami i biurami rachunkowymi przy każdej zmianie wymagającej zgłoszenia w Krajowym Rejestrze
            Sądowym – od prostych aktualizacji po reorganizacje spółek.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-56">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 90vw"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                <p className="text-sm text-slate-600">{service.description}</p>
                <div className="mt-auto">
                  <Link
                    href="/kontakt"
                    className="text-sm font-semibold text-amber-600 transition hover:text-amber-500"
                  >
                    Zapytaj o wycenę →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
