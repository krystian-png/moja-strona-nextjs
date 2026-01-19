import type { Metadata } from "next"
import Script from "next/script"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import contactBackground from "@/public/images/contact-bg.webp"
import { brandName, organizationSchema, siteUrl } from "@/lib/seo"

import ContactPageContent from "./contact-content"

const pagePath = "/en/contact"
const pageUrl = `${siteUrl}${pagePath}`

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact – Experts in Polish Company Register (KRS) filings",
  url: pageUrl,
  publisher: organizationSchema,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+48572234779",
    email: "kontakt@zmianakrs.pl",
    contactType: "customer service",
    areaServed: "PL",
    availableLanguage: ["en"],
  },
}

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch about updating an entry in the Polish Company Register (KRS). We respond promptly to enquiries about KRS filings.",
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: "Contact | ZmianaKRS",
    description:
      "Need help with KRS? Contact our experts and receive prompt support for Polish Company Register filings.",
    url: pageUrl,
    siteName: brandName,
    images: [
      {
        url: `${siteUrl}/images/krs-services.png`,
        width: 1200,
        height: 630,
        alt: "Contact – Experts in Polish Company Register (KRS) filings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact ZmianaKRS",
    description:
      "Contact our experts for support with Polish Company Register (KRS) updates.",
    images: [`${siteUrl}/images/krs-services.png`],
  },
}

export default function EnglishContactPage() {
  return (
    <div className="relative min-h-screen text-white">
      <Script id="contact-structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>

      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.6)), url(${contactBackground.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <Navbar />
      <ContactPageContent />
      <Footer variant="english" />
    </div>
  )
}
