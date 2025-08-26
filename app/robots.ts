import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL;

  if (!BASE_URL) {
    throw new Error("NEXT_PUBLIC_SITE_URL env variable is not set");
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${BASE_URL.replace(/\/$/, "")}/sitemap.xml`,
  };
}
