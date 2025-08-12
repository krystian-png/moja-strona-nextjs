import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const isPreview = process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production";
  if (isPreview) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/admin/", "/api/"] }],
    sitemap: "https://www.zmianakrs.pl/sitemap.xml",
  };
}
