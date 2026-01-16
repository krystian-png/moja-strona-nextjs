import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { brandName, organizationSchema, siteUrl } from "@/lib/seo";
import servicesBackground from "@/public/images/solidne-fundamenty-prawne-eksperci-krs-doswiadczenie-wnioski-zmiana-wpisu.webp";

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

function SectionCard({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      aria-labelledby={id}
      className="rounded-2xl border border-white/10 bg-white/10 p-6 shadow-sm backdrop-blur-md md:p-8"
    >
      <div>
        <h2 id={id} className="text-2xl font-bold text-white md:text-3xl">
          {title}
        </h2>
      </div>
      <div className="mt-4 text-white/85">{children}</div>
    </section>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/8 p-5 backdrop-blur-md">
      <div>
        <h3 className="text-lg font-semibold text-amber-400">{title}</h3>
        <p className="mt-1 text-sm text-gray-300">{description}</p>
      </div>
    </div>
  );
}

function StepCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-md">
      <div className="text-2xl font-semibold text-amber-400">{number}</div>
      <h3 className="mt-2 text-lg font-semibold text-amber-400">{title}</h3>
      <p className="mt-2 text-sm text-gray-300">{description}</p>
    </div>
  );
}

export default function EnglishLandingPage() {
  return (
    <div className="relative min-h-screen text-white">
      <Script id="en-structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>

      <div
        className="fixed inset-0 -z-20"
        style={{
          backgroundImage: `url(${servicesBackground.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      <div className="fixed inset-0 -z-10 bg-slate-950/60" aria-hidden />

      <Navbar />

      <main className="relative">
        <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          {/* HERO (service-like) */}
          <div className="mx-auto max-w-4xl text-center">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-7 shadow-sm backdrop-blur-md md:p-10">
              <header className="space-y-5">
                <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
                  Changes in the Polish Company Register{" "}
                  <span className="text-amber-400">(KRS)</span>
                </h1>

                <p className="text-base text-gray-200 md:text-lg">
                  Professional assistance for companies registered in Poland
                </p>

                <div className="flex flex-wrap justify-center gap-2 pt-1">
                  <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur">
                    Remote support
                  </span>
                  <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur">
                    English communication
                  </span>
                  <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur">
                    KRS filings & documentation
                  </span>
                </div>
              </header>

              {/* Quick value row */}
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/8 p-5 backdrop-blur-md">
                  <div className="text-sm font-semibold text-amber-400">
                    Clear process
                  </div>
                  <p className="mt-2 text-sm text-gray-300">
                    We focus on formal steps, documentation and reliable
                    communication.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/8 p-5 backdrop-blur-md">
                  <div className="text-sm font-semibold text-amber-400">
                    Remote cooperation
                  </div>
                  <p className="mt-2 text-sm text-gray-300">
                    Cooperation can be carried out remotely based on a power of
                    attorney.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/8 p-5 backdrop-blur-md">
                  <div className="text-sm font-semibold text-amber-400">
                    Companies in Poland
                  </div>
                  <p className="mt-2 text-sm text-gray-300">
                    Services dedicated to companies registered in Poland,
                    including those with foreign shareholders or management.
                  </p>
                </div>
              </div>
            </div>

            {/* CONTENT SECTIONS (cards & grids like services) */}
            <div className="mt-10 space-y-6">
              <SectionCard id="en-overview" title="Overview">
                <p>
                  The Polish National Court Register (Krajowy Rejestr Sądowy –
                  KRS) is the official register of companies operating in
                  Poland. Any changes concerning a company’s structure,
                  management board or registered details must be properly
                  documented and reported to the register.
                </p>
                <p className="mt-4">
                  We provide professional assistance with preparing
                  documentation and handling formal procedures related to
                  changes in the Polish Company Register. Our services are
                  addressed to companies registered in Poland, including those
                  with foreign shareholders or management.
                </p>
                <p className="mt-4">
                  Cooperation can be carried out remotely, without the need to
                  visit Poland.
                </p>
              </SectionCard>

              <section className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-sm backdrop-blur-md md:p-8">
                <div>
                  <h2
                    id="en-trust-experience"
                    className="text-2xl font-bold text-white md:text-3xl"
                  >
                    Trust & experience
                  </h2>
                </div>
                <p className="mt-4 text-lg text-white/90">
                  We handle KRS-related formalities in a structured and reliable
                  way, with a strong focus on documentation quality and
                  procedural correctness.
                </p>
                <p className="mt-4 text-white/85">
                  Over the years, we have successfully supported several
                  hundred company-related changes and registration processes in
                  the Polish Company Register, including cases involving
                  foreign shareholders or management board members.
                </p>
                <p className="mt-4 text-white/85">
                  Our work focuses on clear communication, practical
                  registration requirements and a well-organised process — from
                  identifying the scope of changes to preparing and filing the
                  required documentation. Cooperation can be carried out
                  remotely based on a power of attorney. Communication in
                  English is available.
                </p>
              </section>

              {/* Scope as service tiles */}
              <section className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-sm backdrop-blur-md md:p-8">
                <div>
                  <h2
                    id="en-scope"
                    className="text-2xl font-bold text-white md:text-3xl"
                  >
                    Scope of services
                  </h2>
                </div>
                <p className="mt-4 text-white/85">
                  We assist companies with the preparation and handling of
                  formal documentation related to entries and changes in the
                  Polish Company Register, including in particular:
                </p>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <FeatureCard
                    title="Management board changes"
                    description="Changes in the management board and representation of the company."
                  />
                  <FeatureCard
                    title="Updates of company details"
                    description="Updates of company details disclosed in the register."
                  />
                  <FeatureCard
                    title="Amendments to articles of association"
                    description="Formal preparation of documentation for amendments and related filings."
                  />
                  <FeatureCard
                    title="KRS applications"
                    description="Preparation and filing of applications to the Polish Company Register (KRS)."
                  />
                  <FeatureCard
                    title="Company incorporation (S24 or notarial)"
                    description="Incorporation of companies using the S24 system or through a notarial route."
                  />
                  <FeatureCard
                    title="Individual scope"
                    description="The scope is always determined individually depending on the situation and the type of change."
                  />
                </div>
              </section>

              {/* PESEL highlighted callout */}
              <section className="rounded-lg border border-amber-400/30 bg-amber-600/20 p-6 backdrop-blur-md md:p-8">
                <div>
                  <h2
                    id="en-remote"
                    className="text-2xl font-bold text-white md:text-3xl"
                  >
                    Remote cooperation and PESEL number
                  </h2>
                </div>
                <div className="mt-4 text-gray-100">
                  <p>
                    <strong>Important:</strong> Remote cooperation is possible
                    based on a power of attorney and the exchange of documents
                    by electronic means.
                  </p>
                  <p className="mt-4">
                    Please note that in certain cases, in order to complete
                    specific registration or filing procedures in Poland,
                    obtaining a Polish PESEL number may be required. This
                    applies in particular to some electronic procedures and
                    signing methods used in the registration systems.
                  </p>
                  <p className="mt-4">
                    Each case is assessed individually, and the required formal
                    steps depend on the circumstances of the company and the
                    persons involved.
                  </p>
                </div>
              </section>

              {/* Process as 3 steps */}
              <section className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-sm backdrop-blur-md md:p-8">
                <div>
                  <h2
                    id="en-process"
                    className="text-2xl font-bold text-white md:text-3xl"
                  >
                    How we work
                  </h2>
                </div>
                <p className="mt-4 text-white/85">
                  The cooperation process is straightforward and transparent:
                </p>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  <StepCard
                    number="01"
                    title="Contact"
                    description="You contact us and describe your situation."
                  />
                  <StepCard
                    number="02"
                    title="Assessment"
                    description="We review the scope of the required changes and formal requirements."
                  />
                  <StepCard
                    number="03"
                    title="Documentation & guidance"
                    description="We prepare the necessary documentation and guide you through the registration process."
                  />
                </div>
                <p className="mt-6 text-white/85">
                  All activities are carried out in compliance with applicable
                  Polish regulations.
                </p>
              </section>

              {/* Audience as tiles */}
              <section className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-sm backdrop-blur-md md:p-8">
                <div>
                  <h2
                    id="en-audience"
                    className="text-2xl font-bold text-white md:text-3xl"
                  >
                    Who we work with
                  </h2>
                </div>
                <p className="mt-4 text-white/85">
                  Our services are addressed in particular to:
                </p>
                <ul className="mt-6 grid gap-4 md:grid-cols-2">
                  {[
                    {
                      title: "Foreign shareholders",
                      description:
                        "Foreign shareholders of Polish companies who need support with KRS procedures.",
                    },
                    {
                      title: "Board members & directors",
                      description:
                        "Members of management boards and company directors responsible for formal changes.",
                    },
                    {
                      title: "Remote owners",
                      description:
                        "Entrepreneurs managing Polish entities remotely, without regular presence in Poland.",
                    },
                    {
                      title: "Accounting firms & advisors",
                      description:
                        "Accounting firms and advisors working with international clients.",
                    },
                  ].map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-green-400" />
                      <span className="text-gray-300">
                        <span className="block text-lg font-semibold text-amber-400">
                          {item.title}
                        </span>
                        <span className="mt-1 block text-sm text-gray-300">
                          {item.description}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-white/85">
                  Communication in English is available.
                </p>
              </section>

              {/* Why us */}
              <SectionCard id="en-why" title="Why work with us">
                <ul className="space-y-3">
                  {[
                    "experience in handling procedures related to the Polish Company Register (KRS),",
                    "clear and structured communication,",
                    "possibility of remote cooperation,",
                    "documentation prepared in accordance with Polish law and registration practice.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-green-400" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4">
                  Our role is to support companies in navigating formal
                  registration requirements efficiently and reliably.
                </p>
              </SectionCard>

              {/* CTA -> /contact (EN copy) */}
              <section className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-sm backdrop-blur-md md:p-8">
                <div>
                  <h2
                    id="en-cta"
                    className="text-2xl font-bold text-white md:text-3xl"
                  >
                    Contact
                  </h2>
                </div>
                <p className="mt-4 text-white/85">
                  Contact us. You can write to us in English.
                </p>
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg bg-amber-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-amber-700"
                  >
                    Contact us in English
                  </Link>
                  <p className="mt-3 text-sm text-white/75">
                    You will be redirected to the contact page.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
