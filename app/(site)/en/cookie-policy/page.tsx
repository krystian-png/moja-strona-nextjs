import type { Metadata } from "next"
import Script from "next/script"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import backgroundImage from "@/public/images/solidne-fundamenty-prawne-eksperci-krs-doswiadczenie-wnioski-zmiana-wpisu.webp"
import { brandName, organizationSchema, siteUrl } from "@/lib/seo"

const pagePath = "/en/cookie-policy"
const pageUrl = `${siteUrl}${pagePath}`

const pageTitle = "Privacy and Cookies Policy | ZmianaKRS"
const pageDescription =
  "Privacy and Cookies Policy for the ZmianaKRS website, describing personal data processing and cookie usage."

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Privacy and Cookies Policy",
  description: pageDescription,
  url: pageUrl,
  mainEntity: organizationSchema,
  inLanguage: "en",
}

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pagePath },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: brandName,
  },
}

export default function CookiePolicyPage() {
  return (
    <div className="relative min-h-screen text-white">
      <Script id="cookie-policy-structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>

      <div
        className="fixed inset-0 -z-20"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      <div className="fixed inset-0 -z-10 bg-slate-950/70" aria-hidden />

      <Navbar />

      <main className="relative z-10 flex-1">
        <section className="relative overflow-hidden pb-20 pt-20">
          <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="rounded-lg border border-white/20 bg-white/10 p-8 backdrop-blur-sm">
                <h1 className="mb-6 text-3xl font-bold text-white">
                  Privacy and Cookies Policy
                </h1>
                <p className="mb-6 text-sm text-gray-300">
                  This English version of the Privacy and Cookies Policy is
                  provided for informational purposes. The Polish version is
                  legally binding.
                </p>

                <div className="prose prose-invert max-w-none">
                  <h2 className="mb-4 mt-8 text-xl font-semibold text-white">
                    §1. General information
                  </h2>
                  <p className="mb-4 text-gray-300">
                    This Privacy and Cookies Policy sets out the rules for the
                    processing of personal data and the use of cookies on the
                    website www.zmianakrs.pl (hereinafter: the “Website”),
                    operated by Krystian Karpiuk Kancelaria Radcy Prawnego, ul.
                    Wschodnia 24/3, 62-030 Luboń, Poland, NIP: 669-217-69-58
                    (hereinafter: the “Controller”).
                  </p>
                  <p className="mb-4 text-gray-300">
                    The Website and the services provided are intended
                    exclusively for entrepreneurs within the meaning of Article
                    43 of the Polish Civil Code. The Controller does not
                    provide services to consumers.
                  </p>
                  <p className="mb-4 text-gray-300">
                    The Controller does not provide electronic services within
                    the meaning of the Act of 18 July 2002 on the provision of
                    electronic services.
                  </p>
                  <p className="mb-4 text-gray-300">
                    Use of the Website constitutes acceptance of this Privacy
                    and Cookies Policy.
                  </p>

                  <h2 className="mb-4 mt-8 text-xl font-semibold text-white">
                    §2. Personal data controller and contact details
                  </h2>
                  <p className="mb-4 text-gray-300">
                    The controller of personal data is Krystian Karpiuk
                    Kancelaria Radcy Prawnego, ul. Wschodnia 24/3, 62-030
                    Luboń, Poland, NIP: 669-217-69-58, e-mail:
                    biuro@zmianakrs.pl, telephone: +48 572 234 779.
                  </p>
                  <p className="mb-4 text-gray-300">
                    In matters related to the protection of personal data,
                    contact may be made using the above e-mail address or by
                    telephone.
                  </p>

                  <h2 className="mb-4 mt-8 text-xl font-semibold text-white">
                    §3. Purposes and legal bases for data processing
                  </h2>
                  <p className="mb-4 text-gray-300">
                    The Controller processes personal data for the purpose of:
                  </p>
                  <ul className="mb-4 list-disc pl-6 text-gray-300">
                    <li>
                      performance of services related to handling entries and
                      changes in the National Court Register (KRS),
                      incorporation of companies and preparation of
                      documentation (Article 6(1)(b) GDPR),
                    </li>
                    <li>
                      compliance with legal obligations (Article 6(1)(c) GDPR),
                    </li>
                    <li>
                      contact and communication with the User (Article 6(1)(b)
                      and (f) GDPR),
                    </li>
                    <li>
                      direct marketing of the Controller’s own services (with
                      consent – Article 6(1)(a) GDPR),
                    </li>
                    <li>
                      ensuring security and administration of the Website
                      (Article 6(1)(f) GDPR).
                    </li>
                  </ul>
                  <p className="mb-4 text-gray-300">
                    Data are processed solely to the extent necessary to
                    achieve the above purposes.
                  </p>

                  <h2 className="mb-4 mt-8 text-xl font-semibold text-white">
                    §4. Types of processed data
                  </h2>
                  <p className="mb-4 text-gray-300">
                    Personal data include: first and last name, company name,
                    e-mail address, telephone number, company registration
                    data, registered office address, power of attorney data, IP
                    address, technical data of the device and browser, as well
                    as other data necessary for the provision of services.
                  </p>
                  <p className="mb-4 text-gray-300">
                    Data may be provided directly by the User or obtained
                    automatically during use of the Website (e.g. cookies).
                  </p>

                  <h2 className="mb-4 mt-8 text-xl font-semibold text-white">
                    §5. Data recipients and transfer of data outside the EEA
                  </h2>
                  <p className="mb-4 text-gray-300">
                    Data may be transferred to:
                  </p>
                  <ul className="mb-4 list-disc pl-6 text-gray-300">
                    <li>
                      entities processing data on behalf of the Controller (IT
                      service providers, hosting providers, accounting offices,
                      law firms, notaries, etc.),
                    </li>
                    <li>public authorities on the basis of applicable legal provisions,</li>
                    <li>
                      technological partners (including Google, Meta, Hotjar,
                      Smartsupp) to the extent necessary for the provision of
                      services.
                    </li>
                  </ul>
                  <p className="mb-4 text-gray-300">
                    Transfer of data outside the European Economic Area takes
                    place exclusively on the basis of a European Commission
                    adequacy decision or standard contractual clauses.
                  </p>

                  <h2 className="mb-4 mt-8 text-xl font-semibold text-white">
                    §6. Transfer of personal data to registry systems and registry courts
                  </h2>
                  <p className="mb-4 text-gray-300">
                    In the course of providing services, the Controller
                    transfers personal data to registry systems, including the
                    S24 electronic platform operated by the Ministry of
                    Justice, the Court Registers Portal (PRS), and directly to
                    registry courts, in order to submit applications and
                    perform obligations arising from legal provisions, in
                    particular the Act on the National Court Register.
                  </p>
                  <p className="mb-4 text-gray-300">
                    Transfer of such data is necessary for the performance of
                    the agreement and provision of services and is not possible
                    without making such data available to the competent
                    registry authorities.
                  </p>
                  <p className="mb-4 text-gray-300">
                    The Ministry of Justice and registry courts are personal
                    data controllers with respect to the processing of personal
                    data in the S24 and PRS systems and in registry courts.
                  </p>

                  <h2 className="mb-4 mt-8 text-xl font-semibold text-white">
                    §7. Data retention period
                  </h2>
                  <p className="mb-4 text-gray-300">
                    Personal data are stored for the period necessary to
                    achieve the purposes of processing, including the duration
                    of the agreement and periods required by applicable law.
                  </p>
                  <p className="mb-4 text-gray-300">
                    After expiry of the retention period, data are deleted or
                    anonymized.
                  </p>

                  <h2 className="mb-4 mt-8 text-xl font-semibold text-white">
                    §8. Rights of data subjects
                  </h2>
                  <p className="mb-4 text-gray-300">
                    The User has the right to:
                  </p>
                  <ul className="mb-4 list-disc pl-6 text-gray-300">
                    <li>access their data,</li>
                    <li>rectify data,</li>
                    <li>erase data,</li>
                    <li>restrict processing,</li>
                    <li>data portability,</li>
                    <li>object to processing,</li>
                    <li>withdraw consent at any time,</li>
                    <li>
                      lodge a complaint with the supervisory authority
                      (President of the Polish Personal Data Protection Office
                      – UODO).
                    </li>
                  </ul>
                  <p className="mb-4 text-gray-300">
                    Requests regarding the exercise of rights may be submitted
                    by e-mail to: biuro@zmianakrs.pl.
                  </p>

                  <h2 className="mb-4 mt-8 text-xl font-semibold text-white">
                    §9. Data security
                  </h2>
                  <p className="mb-4 text-gray-300">
                    The Controller applies technical and organizational
                    measures ensuring data security, including SSL encryption,
                    access control and audits.
                  </p>
                  <p className="mb-4 text-gray-300">
                    Personal data are not used for profiling or automated
                    decision-making.
                  </p>

                  <h2 className="mb-4 mt-8 text-xl font-semibold text-white">
                    §10. Cookies and tracking technologies
                  </h2>
                  <p className="mb-4 text-gray-300">
                    The Website uses cookies for the following purposes:
                  </p>
                  <ul className="mb-4 list-disc pl-6 text-gray-300">
                    <li>necessary for the proper functioning of the Website (do not require consent),</li>
                    <li>analytical,</li>
                    <li>marketing.</li>
                  </ul>
                  <p className="mb-4 text-gray-300">
                    The User gives informed consent to the use of cookies other
                    than necessary ones through an active action (e.g. clicking
                    “Accept” in the cookie banner).
                  </p>
                  <p className="mb-4 text-gray-300">
                    The User may change cookie settings at any time in the
                    browser or via the panel available on the Website – footer
                    link “Change cookie settings”.
                  </p>

                  <h2 className="mb-4 mt-8 text-xl font-semibold text-white">
                    §11. Changes to the Privacy and Cookies Policy
                  </h2>
                  <p className="mb-4 text-gray-300">
                    The Controller reserves the right to amend this Policy for
                    important reasons. Users will be informed of any changes on
                    the Website.
                  </p>
                  <p className="mb-4 text-gray-300">
                    The current version of the Policy is always available on
                    the Website.
                  </p>

                  <h2 className="mb-4 mt-8 text-xl font-semibold text-white">
                    §12. Contact
                  </h2>
                  <p className="mb-4 text-gray-300">
                    Any questions regarding the protection of personal data and
                    cookies should be directed to the following e-mail address:
                    biuro@zmianakrs.pl.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="english" />
    </div>
  )
}
