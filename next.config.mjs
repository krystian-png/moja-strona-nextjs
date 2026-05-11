import { withContentlayer } from "next-contentlayer"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { mdxRs: true },
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
    ]
  },
}

nextConfig.images = { unoptimized: true }
nextConfig.experimental = {
  ...nextConfig.experimental,
  optimizeCss: false,
}

export default withContentlayer(nextConfig)
