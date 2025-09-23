import Link from "next/link";

import { Card } from "@/components/ui/card";

const tiers = [
  {
    name: "Pakiet Start",
    price: "od 690 zł",
    description: "Dla spółek wymagających pojedynczej aktualizacji danych w KRS.",
    features: [
      "Analiza dokumentów i uchwał",
      "Przygotowanie wniosku KRS-Z3/KRS-ZM",
      "Wysyłka elektroniczna w systemie PRS/S24",
    ],
  },
  {
    name: "Pakiet Komfort",
    price: "od 1290 zł",
    description: "Dla firm wprowadzających kilka zmian jednocześnie lub wymagających reprezentacji.",
    features: [
      "Kompleksowe przygotowanie dokumentów",
      "Wsparcie notarialne i dodatkowe załączniki",
      "Monitoring sprawy do momentu wpisu",
    ],
    highlighted: true,
  },
  {
    name: "Pakiet Premium",
    price: "wycena indywidualna",
    description: "Dla reorganizacji kapitałowych, przekształceń oraz obsługi stałej.",
    features: [
      "Dedykowany opiekun oraz harmonogram działań",
      "Wielowątkowe projekty zmian i rejestracje",
      "Stały dostęp do statusów i raportowania",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="cennik" className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto w-4/5 max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
            Cennik
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Przejrzyste pakiety dopasowane do potrzeb Twojej spółki
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Każdy projekt wyceniamy indywidualnie, jednak przygotowaliśmy trzy najczęściej wybierane konfiguracje usług.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={`flex h-full flex-col justify-between gap-6 border-2 ${
                tier.highlighted
                  ? "border-amber-500 bg-white shadow-xl"
                  : "border-slate-200 bg-white"
              }`}
            >
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
                  {tier.name}
                </p>
                <h3 className="text-3xl font-bold text-slate-900">{tier.price}</h3>
                <p className="text-sm text-slate-600">{tier.description}</p>
                <ul className="space-y-3 text-sm text-slate-700">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-amber-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/kontakt"
                className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                  tier.highlighted
                    ? "bg-amber-500 text-gray-900 hover:bg-amber-400"
                    : "border border-amber-500 text-amber-600 hover:bg-amber-100"
                }`}
              >
                Porozmawiajmy o szczegółach
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
