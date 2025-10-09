import type { Metadata } from "next"
import Script from "next/script"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import contactBackground from "@/public/images/contact-bg.webp"
import { brandName, organizationSchema, siteUrl } from "@/lib/seo"

import ContactPageContent from "./contact-content"

const pageUrl = `${siteUrl}/contact`

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Kontakt z zespołem ZmianaKRS",
  url: pageUrl,
  publisher: organizationSchema,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+48572234779",
    email: "kontakt@zmianakrs.pl",
    contactType: "customer service",
    areaServed: "PL",
    availableLanguage: ["pl-PL"],
  },
}

export const metadata: Metadata = {
  title: "Kontakt | ZmianaKRS",
  description:
    "Skontaktuj się z zespołem ZmianaKRS. Konsultacja telefoniczna, spotkanie online lub wsparcie mailowe w zakresie zmian w KRS.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Kontakt | ZmianaKRS",
    description:
      "Porozmawiaj z ekspertem ds. zmian w KRS. Telefon, e-mail oraz formularz konsultacyjny dostępny w jednym miejscu.",
    url: pageUrl,
    siteName: brandName,
    images: [
      {
        url: `${siteUrl}/images/krs-services.png`,
        width: 1200,
        height: 630,
        alt: "Kontakt z zespołem ZmianaKRS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt ZmianaKRS",
    description: "Zarezerwuj konsultację i dowiedz się, jak możemy wesprzeć Twoją spółkę przy zmianach w KRS.",
    images: [`${siteUrl}/images/krs-services.png`],
  },
}

export default function ContactPage() {
  return (
    <div className="relative min-h-screen text-white">
      <Script id="contact-structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>

      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `linear-gradient(rgba(2, 6, 23, 0.7), rgba(2, 6, 23, 0.7)), url(${contactBackground.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <Navbar />
      <ContactPageContent />
      <Footer />
    </div>
  )
}
