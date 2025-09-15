import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Trust from "@/components/Trust";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Zmiana wpisu w KRS bez stresu - profesjonalna obsługa wniosków | ZmianaKRS",
  description:
    "Potrzebujesz zmienić wpis w KRS? Oferujemy kompleksową obsługę wniosków o zmianę danych spółki w KRS. Szybko, bezpiecznie i w przystępnej cenie.",
  openGraph: {
    title:
      "Zmiana wpisu w KRS bez stresu - profesjonalna obsługa wniosków | ZmianaKRS",
    description:
      "Potrzebujesz zmienić wpis w KRS? Oferujemy kompleksową obsługę wniosków o zmianę danych spółki w KRS. Szybko, bezpiecznie i w przystępnej cenie.",
    url: "https://zmianakrs.pl/",
    images: [
      {
        url: "https://zmianakrs.pl/images/krs-services.png",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-slate-900/60 -z-10" />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Trust />
      </main>
      <Footer />
    </div>
  );
}
