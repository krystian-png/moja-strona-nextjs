import React from 'react'
import Head from 'next/head'

interface HeadMetaProps {
  title: string
  description?: string
  keywords?: string
  canonicalUrl?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  locale?: string
  siteName?: string
  robots?: string
  twitterCard?: string
  structuredData?: Record<string, any>
  locale?: string
  siteName?: string
  robots?: string
  twitterCard?: string
}

export default function HeadMeta({
  title,
  description,
  keywords,
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogImage,
  locale,
  siteName,
  robots,
  twitterCard,
  structuredData,
  locale,
  siteName,
  robots,
  twitterCard,
}: HeadMetaProps) {
  return (
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {ogTitle && <meta property="og:title" content={ogTitle} />}
      {ogDescription && <meta property="og:description" content={ogDescription} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      {locale && <meta property="og:locale" content={locale} />}
      {siteName && <meta property="og:site_name" content={siteName} />}
      {robots && <meta name="robots" content={robots} />}
      {twitterCard && <meta name="twitter:card" content={twitterCard} />}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  )
}
