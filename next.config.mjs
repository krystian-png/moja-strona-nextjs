import { withContentlayer } from 'next-contentlayer'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { typedRoutes: false },
  async redirects() {
    return [
      {
        source: '/kontakt',
        destination: '/contact',
        statusCode: 301,
      },
      {
        source: '/dla-ksiegowych',
        destination: '/ksiegowi',
        statusCode: 301,
      },
    ]
  },
}

export default withContentlayer(nextConfig)
