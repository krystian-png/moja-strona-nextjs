export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://zmianakrs.pl"

export const canonicalSiteUrl = "https://zmianakrs.pl"

export const brandName = "zmianakrs.pl"

export const organizationId = `${canonicalSiteUrl}/#organization`
export const websiteId = `${canonicalSiteUrl}/#website`

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": organizationId,
  name: "Krystian Karpiuk Kancelaria Radcy Prawnego",
  alternateName: brandName,
  url: canonicalSiteUrl,
  logo: `${canonicalSiteUrl}/images/krs-logo.png`,
  telephone: "+48572234779",
  email: "biuro@zmianakrs.pl",
  taxID: "669-217-69-58",
  areaServed: {
    "@type": "Country",
    name: "PL",
  },
  sameAs: [
    "https://www.google.com/maps/place/zmianakrs.pl/",
    "https://www.facebook.com/profile.php?id=61588617781836",
    "https://www.linkedin.com/company/zmianakrs-pl/",
  ],
} as const

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": websiteId,
  url: canonicalSiteUrl,
  name: brandName,
  publisher: {
    "@id": organizationId,
  },
} as const
