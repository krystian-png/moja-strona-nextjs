import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Accountants from "@/components/Accountants";
import ContactSection from "@/components/ContactSection";

export default function Page() {
  return (
    <div className="bg-slate-900/80">
      <Navbar />
      <main>
        <Accountants />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
