import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import ContactSection from "@/components/ContactSection";

export default function Page() {
  return (
    <div className="bg-slate-900/80">
      <Navbar />
      <main>
        <Pricing />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
