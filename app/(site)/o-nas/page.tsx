import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div
      className="min-h-screen bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('/images/Solidne-fundamenty-prawne-eksperci-KRS-z-wieloletnim-doświadczeniem-w-obsłudze-wniosków-o-zmianę-wpi.webp')",
        backgroundSize: "auto 100%",
      }}
    >
      <Navbar />
      <main className="p-8">
        <h1 className="text-2xl font-semibold">O nas (placeholder)</h1>
      </main>
      <Footer />
    </div>
  );
}
