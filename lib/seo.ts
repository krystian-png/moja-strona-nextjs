export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://zmianakrs.pl"

export const brandName = "ZmianaKRS"

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": `${siteUrl}/#organization`,
  name: "ZmianaKRS",
  legalName: "Krystian Karpiuk Kancelaria Radcy Prawnego",
  alternateName: ["zmianakrs.pl", "Zmiana KRS"],
  telephone: "+48572234779",
  email: "biuro@zmianakrs.pl",
  taxID: "669-217-69-58",
  areaServed: {
    "@type": "Country",
    name: "Poland",
  },
  url: siteUrl,
  logo: `${siteUrl}/images/krs-logo.png`,
  founder: {
    "@id": `${siteUrl}/#person`,
  },
  sameAs: [
    "https://www.google.com/maps?cid=0x1f97e1d82be14018",
    "https://www.facebook.com/profile.php?id=61588617781836",
    "https://www.linkedin.com/company/zmianakrs-pl/",
    "https://kancelaria-karpiuk.pl",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+48572234779",
    contactType: "customer service",
    areaServed: "PL",
    availableLanguage: ["pl-PL"],
  },
}

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: "Krystian Karpiuk",
  jobTitle: "Radca Prawny",
  url: "https://kancelaria-karpiuk.pl",
  sameAs: [
    "https://kancelaria-karpiuk.pl",
    "https://www.linkedin.com/in/krystian-karpiuk-77633b2b",
  ],
  worksFor: {
    "@id": `${siteUrl}/#organization`,
  },
}

export function pageMetadata({
  title,
  description,
  path = "/",
  image = `${siteUrl}/images/krs-services.png`,
}: {
  title: string
  description: string
  path?: string
  image?: string
}) {
  const url = path.startsWith("http") ? path : `${siteUrl}${path}`

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: brandName,
      locale: "pl_PL",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  }
}
