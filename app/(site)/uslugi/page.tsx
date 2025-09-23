import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Process from "@/components/Process";
import ContactSection from "@/components/ContactSection";

export default function Page() {
  return (
    <div className="bg-slate-900/80">
      <Navbar />
      <main>
        <Services />
        <Process />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
