import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Trust from "@/components/Trust";
import ContactSection from "@/components/ContactSection";

export default function Page() {
  return (
    <div className="about-background relative min-h-screen">
      <div className="absolute inset-0 bg-slate-900/60 -z-10" />
      <main>
        <About />
        <Trust />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
