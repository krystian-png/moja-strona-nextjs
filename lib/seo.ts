export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://zmianakrs.pl"

export const brandName = "ZmianaKRS"

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: brandName,
  url: siteUrl,
  logo: `${siteUrl}/images/krs-logo.png`,
  sameAs: [
    "https://www.facebook.com/zmianakrs",
    "https://www.linkedin.com/company/zmianakrs",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+48572234779",
    contactType: "customer service",
    areaServed: "PL",
    availableLanguage: ["pl-PL"],
  },
}
