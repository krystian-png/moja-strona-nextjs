import Image from "next/image";
import Link from "next/link";

const highlights = [
  {
    title: "Eksperci od zmian w KRS",
    description:
      "Od kilkunastu lat wspieramy spółki w przygotowaniu i składaniu wniosków dotyczących każdej zmiany w rejestrze przedsiębiorców.",
  },
  {
    title: "Transparentna komunikacja",
    description:
      "Na każdym etapie prac otrzymujesz jasne informacje o wymaganych dokumentach, kosztach i terminach złożenia wniosku.",
  },
  {
    title: "Kompleksowa obsługa",
    description:
      "Zajmujemy się pełnym procesem – od analizy uchwał, przez przygotowanie dokumentów, po monitoring statusu sprawy w sądzie rejestrowym.",
  },
];

export default function About() {
  return (
    <section
      id="o-nas"
      className="relative isolate overflow-hidden bg-slate-900 py-24 sm:py-32"
    >
      <div className="mx-auto grid w-4/5 max-w-6xl gap-16 lg:grid-cols-2">
        <div className="relative h-[340px] overflow-hidden rounded-3xl shadow-2xl lg:h-full">
          <Image
            src="/images/solidne-fundamenty-prawne-eksperci-KRS-z-wieloletnim-doświadczeniem-w-obsłudze-wniosków-o-zmianę-wpi.webp"
            alt="Zespół specjalistów KRS omawia dokumenty dotyczące zmian w rejestrze"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 90vw"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/30" />
        </div>

        <div className="flex flex-col justify-center gap-6 text-slate-100">
          <p className="text-sm uppercase tracking-widest text-amber-300">
            O nas
          </p>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            Zmieniamy wpisy w KRS szybciej i bezpieczniej niż tradycyjne kancelarie
          </h2>
          <p className="text-lg text-slate-200/90">
            W ZmianaKRS łączymy doświadczenie prawników i doradców gospodarczych z
            nowoczesnymi narzędziami automatyzującymi przygotowanie dokumentów.
            Dzięki temu nasi klienci otrzymują poprawnie sporządzone wnioski już w
            ciągu kilku dni roboczych.
          </p>

          <ul className="space-y-4">
            {highlights.map((item) => (
              <li key={item.title} className="rounded-xl bg-slate-800/70 p-4">
                <h3 className="text-xl font-semibold text-amber-200">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-200/80">{item.description}</p>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/kontakt"
              className="rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-gray-900 shadow transition hover:bg-amber-300"
            >
              Umów konsultację
            </Link>
            <Link
              href="/uslugi"
              className="rounded-full border border-amber-400 px-5 py-3 text-sm font-semibold text-amber-300 transition hover:bg-amber-400 hover:text-gray-900"
            >
              Zobacz pełną ofertę
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
