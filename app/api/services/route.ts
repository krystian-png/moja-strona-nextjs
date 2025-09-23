import { NextResponse } from "next/server";

interface Service {
  id: number;
  name: string;
  description: string;
}

const services: Service[] = [
  {
    id: 1,
    name: "Zmiana danych zarządu",
    description:
      "Przygotowanie uchwał, aktualizacja danych w KRS oraz koordynacja podpisów elektronicznych dla nowych członków zarządu.",
  },
  {
    id: 2,
    name: "Aktualizacja umowy spółki",
    description:
      "Kompleksowa obsługa zmian w umowie spółki, w tym rozszerzenie PKD, zmiana siedziby oraz dostosowanie zapisów do aktualnych przepisów.",
  },
  {
    id: 3,
    name: "Przekształcenia i reorganizacje",
    description:
      "Wsparcie przy przekształceniach formy prawnej, aportach i zmianach struktury kapitałowej wraz z dokumentacją dla sądu rejestrowego.",
  },
  {
    id: 4,
    name: "Rejestracja prokury i pełnomocnictw",
    description:
      "Opracowanie pełnomocnictw, zgłoszenie prokury w KRS oraz zapewnienie kompletnej dokumentacji dla banków i kontrahentów.",
  },
];

export async function GET() {
  return NextResponse.json(services);
}
