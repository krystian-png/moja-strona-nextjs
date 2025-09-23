import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Trust from "@/components/Trust";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Accountants from "@/components/Accountants";
import ContactSection from "@/components/ContactSection";
import professionalWaitingRoomImage from "@/public/images/Profesjonalna-poczekalnia-prawnicza-z-eleganckimi-krzeslami-atmosfera-zaufania.webp";

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
      <div
        className="fixed inset-0 -z-10 bg-slate-900/75"
        style={{
          backgroundImage: `url(${professionalWaitingRoomImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Services />
        <Pricing />
        <Trust />
        <Accountants />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
