import React from 'react'
import Head from 'next/head'

interface HeadMetaProps {
  title: string
  description?: string
  keywords?: string
}

export default function HeadMeta({ title, description, keywords }: HeadMetaProps) {
  return (
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
    </Head>
  )
}
