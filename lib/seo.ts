export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://zmianakrs.pl"

export const brandName = "zmianakrs.pl"

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": `${siteUrl}/#organization`,
  name: "Krystian Karpiuk Kancelaria Radcy Prawnego",
  alternateName: "zmianakrs.pl",
  telephone: "+48572234779",
  email: "biuro@zmianakrs.pl",
  taxID: "669-217-69-58",
  areaServed: {
    "@type": "Country",
    name: "Polska",
  },
  url: siteUrl,
  logo: `${siteUrl}/images/krs-logo.png`,
  sameAs: [
    "https://www.google.com/maps?cid=0x1f97e1d82be14018",
    "https://www.facebook.com/profile.php?id=61588617781836",
    "https://www.linkedin.com/company/zmianakrs-pl/",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+48572234779",
    contactType: "customer service",
    areaServed: "PL",
    availableLanguage: ["pl-PL"],
  },
}
