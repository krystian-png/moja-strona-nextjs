import type { Metadata } from "next"
import Script from "next/script"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import backgroundImage from "@/public/images/solidne-fundamenty-prawne-eksperci-krs-doswiadczenie-wnioski-zmiana-wpisu.webp"
import { brandName, organizationSchema, siteUrl } from "@/lib/seo"

const pagePath = "/en/terms-of-service"
const pageUrl = `${siteUrl}${pagePath}`

const pageTitle = "Terms of Service | ZmianaKRS"
const pageDescription =
  "Terms of Service for the ZmianaKRS website, including rules for KRS-related service provision for entrepreneurs in Poland."

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Terms of Service",
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

export default function TermsOfServicePage() {
  return (
    <div className="relative min-h-screen text-white">
      <Script id="terms-of-service-structured-data" type="application/ld+json">
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
                  Terms of Service
                </h1>
                <p className="mb-6 text-sm text-gray-300">
                  This English version of the Terms of Service is provided for
                  informational purposes. The Polish version is legally
                  binding.
                </p>

                <div className="prose prose-invert max-w-none">
                  <h2 className="mb-4 mt-8 text-xl font-semibold text-white">
                    § 1. General provisions
                  </h2>
                  <p className="mb-4 text-gray-300">
                    These Terms of Service set out the rules for using the
                    website available at www.zmianakrs.pl (hereinafter: the
                    “Website”) and the rules for the provision of services by
                    Krystian Karpiuk Kancelaria Radcy Prawnego, ul. Wschodnia
                    24/3, 62-030 Luboń, Poland, NIP: 669-217-69-58 (hereinafter:
                    the “Service Provider”).
                  </p>
                  <p className="mb-4 text-gray-300">
                    The Website presents an offer of services related to
                    handling applications submitted to the National Court
                    Register (Krajowy Rejestr Sądowy – KRS) and contains
                    publications of an exclusively informational and
                    educational nature.
                  </p>
                  <p className="mb-4 text-gray-300">
                    Use of the Website constitutes acceptance of these Terms of
                    Service in their entirety.
                  </p>
                  <p className="mb-4 text-gray-300">
                    These Terms of Service are available free of charge on the
                    Website in a form enabling their downloading, saving and
                    printing.
                  </p>
                  <p className="mb-4 text-gray-300">
                    The Service Provider operates the Website in accordance
                    with these Terms of Service and the applicable provisions
                    of law.
                  </p>

                  <h2 className="mb-4 mt-8 text-xl font-semibold text-white">
                    § 2. Definitions
                  </h2>
                  <p className="mb-4 text-gray-300">
                    <strong className="text-white">Service Provider</strong> –
                    the entity providing the services described in § 1(2).
                  </p>
                  <p className="mb-4 text-gray-300">
                    <strong className="text-white">Client</strong> –
                    exclusively an entrepreneur within the meaning of Article
                    43 of the Polish Civil Code, using the services of the
                    Website.
                  </p>
                  <p className="mb-4 text-gray-300">
                    <strong className="text-white">Website</strong> – the
                    website available at www.zmianakrs.pl.
                  </p>
                  <p className="mb-4 text-gray-300">
                    <strong className="text-white">Services</strong> – services
                    consisting in the preparation of documents for entries and
                    changes in the National Court Register (KRS), incorporation
                    of companies, and comprehensive formal handling related to
                    reporting changes in KRS entries, including the handling of
                    Shareholders’ Meetings and preparation of documentation for
                    such meetings, as well as other formal activities performed
                    by the Service Provider.
                  </p>
                  <p className="mb-4 text-gray-300">
                    <strong className="text-white">Terms of Service</strong> –
                    this document.
                  </p>
                  <p className="mb-4 text-gray-300">
                    <strong className="text-white">Contact Form</strong> – a
                    tool available on the Website enabling the submission of an
                    inquiry or an order for services.
                  </p>
                  <p className="mb-4 text-gray-300">
                    <strong className="text-white">
                      Organizational Information
                    </strong>
                    – details concerning a given Service available on the
                    Website or provided individually, including: scope of the
                    service, method of performance, payments and contact
                    person.
                  </p>

                  <h2 className="mb-4 mt-8 text-xl font-semibold text-white">
                    § 3. Exclusion of consumer services
                  </h2>
                  <p className="mb-4 text-gray-300">
                    The Website and the Services are available exclusively to
                    entrepreneurs, i.e. entities conducting business or
                    professional activity.
                  </p>
                  <p className="mb-4 text-gray-300">
                    The Service Provider does not provide services to consumers
                    within the meaning of Article 22¹ of the Polish Civil Code.
                  </p>
                  <p className="mb-4 text-gray-300">
                    Persons using the Website declare that they act as
                    entrepreneurs and conclude agreements within the scope of
                    their business activity.
                  </p>
                  <p className="mb-4 text-gray-300">
                    If it is established that the Client is a consumer, the
                    Service Provider reserves the right to refuse to provide
                    services or to terminate the agreement.
                  </p>

                  <h2 className="mb-4 mt-8 text-xl font-semibold text-white">
                    § 4. Type and scope of services
                  </h2>
                  <p className="mb-4 text-gray-300">
                    The Service Provider provides services consisting in:
                  </p>
                  <ul className="mb-4 list-disc pl-6 text-gray-300">
                    <li>
                      preparation of documents necessary for entries and
                      changes in the National Court Register (KRS),
                    </li>
                    <li>
                      incorporation of limited liability companies and other
                      entities using the S24 system or in a traditional form,
                    </li>
                    <li>
                      formal and legal advisory services related to registration
                      and changes in the KRS,
                    </li>
                    <li>submission of applications to the KRS on behalf of the Client,</li>
                    <li>
                      making prepared documents available for signature and
                      further handling by the Client.
                    </li>
                  </ul>
                  <p className="mb-4 text-gray-300">
                    The Services are provided on the basis of individual
                    arrangements, after the Client has supplied all required
                    documents, including signed powers of attorney, if
                    necessary.
                  </p>
                  <p className="mb-4 text-gray-300">
                    Information and materials published on the Website are of a
                    general and informational nature only and do not constitute
                    legal advice or an offer within the meaning of the Polish
                    Civil Code.
                  </p>

                  <h2 className="mb-4 mt-8 text-xl font-semibold text-white">
                    § 5. Conditions for using the services
                  </h2>
                  <p className="mb-4 text-gray-300">
                    In order to use the services, it is necessary to have a
                    device with Internet access and an active e-mail address.
                  </p>
                  <p className="mb-4 text-gray-300">
                    The Client is obliged to provide truthful data and to supply
                    the required documents.
                  </p>
                  <p className="mb-4 text-gray-300">
                    It is prohibited to provide unlawful content or content
                    infringing the rights of third parties.
                  </p>
                  <p className="mb-4 text-gray-300">
                    The Service Provider reserves the right to refuse to provide
                    services in the event of a breach of these Terms of Service
                    or in the event of a conflict of interest, violation of
                    professional ethics or other circumstances justifying
                    refusal to provide services.
                  </p>
                  <p className="mb-4 text-gray-300">
                    The Client undertakes to use the Website and the Services
                    solely for their own use, with respect for the intellectual
                    property rights of the Service Provider and third parties.
                  </p>

                  <h2 className="mb-4 mt-8 text-xl font-semibold text-white">
                    § 6. Technical conditions for using the Website and security
                  </h2>
                  <p className="mb-4 text-gray-300">
                    In order to use the Website properly, the Client must have
                    a terminal device (computer, smartphone or other device)
                    with Internet access and a current web browser supporting
                    the technical standards used by the Website.
                  </p>
                  <p className="mb-4 text-gray-300">
                    The Client is obliged to use the Website in accordance with
                    its intended purpose, applicable laws and principles of
                    social coexistence.
                  </p>
                  <p className="mb-4 text-gray-300">
                    Any actions that could disrupt, damage or limit the proper
                    functioning of the Website are prohibited.
                  </p>

                  <h2 className="mb-4 mt-8 text-xl font-semibold text-white">
                    § 7. Conclusion of the agreement and performance of services
                  </h2>
                  <p className="mb-4 text-gray-300">
                    An agreement for the provision of services is concluded upon
                    confirmation of acceptance of the order by the Service
                    Provider and payment of the invoice by the Client, unless
                    the parties agree otherwise.
                  </p>
                  <p className="mb-4 text-gray-300">
                    Performance of the service commences after receipt of all
                    required documents and posting of the payment.
                  </p>
                  <p className="mb-4 text-gray-300">
                    The Client consents to the commencement of service
                    performance immediately after conclusion of the agreement.
                  </p>
                  <p className="mb-4 text-gray-300">
                    The Client loses the right to withdraw from the agreement
                    after the commencement of service performance.
                  </p>

                  <h2 className="mb-4 mt-8 text-xl font-semibold text-white">
                    § 8. Payments
                  </h2>
                  <p className="mb-4 text-gray-300">
                    Remuneration for the services is specified in the price list
                    available on the Website or determined individually.
                  </p>
                  <p className="mb-4 text-gray-300">
                    Payment is made on the basis of an electronic invoice sent
                    to the Client’s e-mail address.
                  </p>
                  <p className="mb-4 text-gray-300">
                    The service is performed after the payment has been
                    credited.
                  </p>
                  <p className="mb-4 text-gray-300">
                    At the express request of the Client, a pro forma invoice
                    may be issued.
                  </p>

                  <h2 className="mb-4 mt-8 text-xl font-semibold text-white">
                    § 9. Personal data protection
                  </h2>
                  <p className="mb-4 text-gray-300">
                    The Service Provider is the controller of personal data.
                  </p>
                  <p className="mb-4 text-gray-300">
                    Personal data are processed in accordance with the GDPR for
                    the purpose of performing services and fulfilling legal
                    obligations.
                  </p>
                  <p className="mb-4 text-gray-300">
                    Detailed information is provided in the Privacy Policy
                    available on the Website.
                  </p>
                  <p className="mb-4 text-gray-300">
                    The Client is obliged to provide personal data of third
                    parties only to the extent and in accordance with
                    applicable law.
                  </p>

                  <h2 className="mb-4 mt-8 text-xl font-semibold text-white">
                    § 10. Clause regarding transfer of personal data
                  </h2>
                  <p className="mb-4 text-gray-300">
                    In the course of providing services, the Service Provider
                    transfers the Client’s personal data to registration
                    systems, including the S24 platform, the Court Registers
                    Portal (PRS), and directly to registry courts.
                  </p>
                  <p className="mb-4 text-gray-300">
                    The transfer of personal data is necessary for the
                    performance of the agreement and provision of services and
                    cannot be carried out without making such data available to
                    the competent registration authorities.
                  </p>
                  <p className="mb-4 text-gray-300">
                    The Ministry of Justice and registry courts are personal
                    data controllers with respect to the processing of personal
                    data in the S24 and PRS systems and in registry courts.
                  </p>

                  <h2 className="mb-4 mt-8 text-xl font-semibold text-white">
                    § 11. Limitation of liability
                  </h2>
                  <p className="mb-4 text-gray-300">
                    Materials, information and content made available on the
                    Website are of an informational and educational nature only.
                    They do not constitute professional legal, tax, financial
                    or other specialized advisory services provided by the
                    Service Provider.
                  </p>
                  <p className="mb-4 text-gray-300">
                    The Service Provider and entities cooperating with it in
                    operating the Website shall not be liable for the effects of
                    any use, interpretation or application of the information
                    contained on the Website by Clients or third parties.
                  </p>
                  <p className="mb-4 text-gray-300">
                    Each legal, tax, financial or other situation of interest to
                    the Client is individual and requires detailed analysis and
                    consultation with an appropriately qualified professional.
                  </p>
                  <p className="mb-4 text-gray-300">
                    The information and materials available on the Website
                    cannot replace professional advice and do not release the
                    Client from the obligation to obtain such advice before
                    taking any actions.
                  </p>
                  <p className="mb-4 text-gray-300">
                    Use of the Website and the information contained therein is
                    at the Client’s sole risk. The Service Provider shall not be
                    liable for decisions made on the basis of such information.
                  </p>
                  <p className="mb-4 text-gray-300">
                    Materials and information published on the Website do not
                    constitute a commercial offer or an obligation to provide
                    services.
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
