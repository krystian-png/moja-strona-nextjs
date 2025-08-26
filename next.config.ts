import { withContentlayer } from "next-contentlayer";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: { typedRoutes: false },
};

export default withContentlayer(nextConfig);
