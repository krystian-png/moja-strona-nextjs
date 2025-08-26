import { withContentlayer } from "next-contentlayer";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
    ];
  },
};

export default withContentlayer(nextConfig);
