import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { brandName, organizationSchema, siteUrl } from "@/lib/seo";

const pagePath = "/en";
const pageUrl = `${siteUrl}${pagePath}`;

const pageTitle = "Changes in the Polish Company Register (KRS) | ZmianaKRS";
const pageDescription =
  "Professional assistance with changes and filings in the Polish Company Register (KRS) for companies registered in Poland, including remote support and English communication.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    type: "website",
    siteName: brandName,
    images: [
      {
        url: `${siteUrl}/images/solidne-fundamenty-prawne-eksperci-krs-doswiadczenie-wnioski-zmiana-wpisu.webp`,
        width: 1200,
        height: 630,
        alt: "Solid legal foundations for KRS services – change of entry in KRS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [
      `${siteUrl}/images/solidne-fundamenty-prawne-eksperci-krs-doswiadczenie-wnioski-zmiana-wpisu.webp`,
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Changes in the Polish Company Register (KRS)",
  url: pageUrl,
  description: pageDescription,
  publisher: organizationSchema,
  inLanguage: "en",
};

export default function EnglishLandingPage() {
  return (
    <div className="relative min-h-screen text-white">
      <Script id="en-structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>

      <Navbar />

      <main className="relative">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/solidne-fundamenty-prawne-eksperci-krs-doswiadczenie-wnioski-zmiana-wpisu.webp"
            alt="Solid legal foundations for KRS services – change of entry in KRS"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <section className="mx-auto max-w-5xl px-4 py-12 md:py-16">
          <div className="mx-auto max-w-4xl rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-md md:p-10">
            <header className="space-y-4">
              <h1 className="text-3xl font-semibold leading-tight md:text-4xl">
                Changes in the Polish Company Register (KRS)
              </h1>
              <p className="text-base text-white/85 md:text-lg">
                Professional assistance for companies registered in Poland
              </p>
            </header>

            <div className="mt-8 space-y-10">
              <section aria-labelledby="en-intro" className="space-y-4">
                <h2 id="en-intro" className="text-xl font-semibold md:text-2xl">
                  Overview
                </h2>
                <p className="text-white/85">
                  The Polish National Court Register (Krajowy Rejestr Sądowy – KRS) is the official register of companies operating in Poland.
                  Any changes concerning a company’s structure, management board or registered details must be properly documented and reported to the register.
                </p>
                <p className="text-white/85">
                  We provide professional assistance with preparing documentation and handling formal procedures related to changes in the Polish Company Register.
                  Our services are addressed to companies registered in Poland, including those with foreign shareholders or management.
                </p>
                <p className="text-white/85">
                  Cooperation can be carried out remotely, without the need to visit Poland.
                </p>
              </section>

              <section aria-labelledby="en-scope" className="space-y-4">
                <h2 id="en-scope" className="text-xl font-semibold md:text-2xl">
                  Scope of services
                </h2>
                <p className="text-white/85">
                  We assist companies with the preparation and handling of formal documentation related to entries and changes in the Polish Company Register, including in particular:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-white/85">
                  <li>changes in the management board and representation of the company,</li>
                  <li>updates of company details disclosed in the register,</li>
                  <li>amendments to the articles of association,</li>
                  <li>preparation and filing of applications to the Polish Company Register (KRS),</li>
                  <li>incorporation of companies using the S24 system or through a notarial route.</li>
                </ul>
                <p className="text-white/85">
                  The scope of services is always determined individually, depending on the specific situation of the company and the type of change to be reported.
                </p>
              </section>

              <section aria-labelledby="en-remote" className="space-y-4">
                <h2 id="en-remote" className="text-xl font-semibold md:text-2xl">
                  Remote cooperation and PESEL number
                </h2>
                <p className="text-white/85">
                  Remote cooperation is possible based on a power of attorney and the exchange of documents by electronic means.
                </p>
                <p className="text-white/85">
                  Please note that in certain cases, in order to complete specific registration or filing procedures in Poland, obtaining a Polish PESEL number may be required.
                  This applies in particular to some electronic procedures and signing methods used in the registration systems.
                </p>
                <p className="text-white/85">
                  Each case is assessed individually, and the required formal steps depend on the circumstances of the company and the persons involved.
                </p>
              </section>

              <section aria-labelledby="en-process" className="space-y-4">
                <h2 id="en-process" className="text-xl font-semibold md:text-2xl">
                  How we work
                </h2>
                <p className="text-white/85">
                  The cooperation process is straightforward and transparent:
                </p>
                <ol className="list-decimal space-y-2 pl-6 text-white/85">
                  <li>You contact us and describe your situation.</li>
                  <li>We review the scope of the required changes and formal requirements.</li>
                  <li>We prepare the necessary documentation and guide you through the registration process.</li>
                </ol>
                <p className="text-white/85">
                  All activities are carried out in compliance with applicable Polish regulations.
                </p>
              </section>

              <section aria-labelledby="en-audience" className="space-y-4">
                <h2 id="en-audience" className="text-xl font-semibold md:text-2xl">
                  Who we work with
                </h2>
                <p className="text-white/85">
                  Our services are addressed in particular to:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-white/85">
                  <li>foreign shareholders of Polish companies,</li>
                  <li>members of management boards and company directors,</li>
                  <li>entrepreneurs managing Polish entities remotely,</li>
                  <li>accounting firms and advisors working with international clients.</li>
                </ul>
                <p className="text-white/85">Communication in English is available.</p>
              </section>

              <section aria-labelledby="en-why" className="space-y-4">
                <h2 id="en-why" className="text-xl font-semibold md:text-2xl">
                  Why work with us
                </h2>
                <ul className="list-disc space-y-2 pl-6 text-white/85">
                  <li>experience in handling procedures related to the Polish Company Register (KRS),</li>
                  <li>clear and structured communication,</li>
                  <li>possibility of remote cooperation,</li>
                  <li>documentation prepared in accordance with Polish law and registration practice.</li>
                </ul>
                <p className="text-white/85">
                  Our role is to support companies in navigating formal registration requirements efficiently and reliably.
                </p>
              </section>

              <section aria-labelledby="en-cta" className="space-y-4">
                <h2 id="en-cta" className="text-xl font-semibold md:text-2xl">
                  Contact
                </h2>
                <p className="text-white/85">
                  Contact us. You can write to us in English.
                </p>
                {/* Na tym etapie NIE dodawaj /en/contact. Link dodamy w kolejnym kroku. */}
              </section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
