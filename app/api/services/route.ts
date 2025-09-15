import { NextResponse } from "next/server";

interface Service {
  id: number;
  name: string;
  description: string;
}

const services: Service[] = [
  {
    id: 1,
    name: "Rejestracja spółki",
    description: "Pomoc w rejestracji spółki w KRS.",
  },
  {
    id: 2,
    name: "Zmiany w KRS",
    description: "Obsługa wniosków o zmianę w KRS.",
  },
];

export async function GET() {
  return NextResponse.json(services);
}
