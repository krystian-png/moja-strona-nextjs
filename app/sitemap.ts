import type { MetadataRoute } from "next";
import { getAllAllowedPaths, BASE_URL } from "@/lib/whitelist";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const paths = await getAllAllowedPaths();
  return paths.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path.startsWith("/blog/") ? "weekly" : "monthly",
    priority: path === "/" ? 1.0 : path.startsWith("/blog/") ? 0.7 : 0.8,
  }));
}
