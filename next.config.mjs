import { withContentlayer } from "next-contentlayer"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { mdxRs: true },
  async headers() {
    // Vercel sets VERCEL_ENV at build time; production receives no such rule.
    return process.env.VERCEL_ENV === "preview"
      ? [{ source: "/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] }]
      : []
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.zmianakrs.pl" }],
        destination: "https://zmianakrs.pl/:path*",
        permanent: true,
      },
      { source: "/contact", destination: "/kontakt", permanent: true },
      { source: "/dla-ksiegowych", destination: "/ksiegowi", permanent: true },
      { source: "/artykul/zmiana-kodow-pkd-2025", destination: "/artykul/jak-sprawdzic-kody-pkd-spolki-w-krs", permanent: true },
    ]
  },
}

nextConfig.images = { unoptimized: true }
nextConfig.experimental = {
  ...nextConfig.experimental,
  optimizeCss: false,
}

export default withContentlayer(nextConfig)
