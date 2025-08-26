import { withContentlayer } from "next-contentlayer"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { mdxRs: true },
  async redirects() {
    return [
      { source: "/kontakt", destination: "/contact", permanent: true },
      { source: "/dla-ksiegowych", destination: "/ksiegowi", permanent: true },
    ]
  },
}

export default withContentlayer(nextConfig)

