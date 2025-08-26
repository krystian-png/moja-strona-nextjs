import type { MetadataRoute } from "next";
import { allPosts } from "contentlayer/generated";

const BASE_URL = "https://www.zmianakrs.pl";
const STATIC_PATHS = [
  "/",
  "/o-nas",
  "/uslugi",
  "/cennik",
  "/contact",
  "/ksiegowi",
  "/polityka-prywatnosci",
  "/regulamin",
  "/rodo",
  "/blog",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [...STATIC_PATHS, ...allPosts.map((p) => `/blog/${p.slug}`)];
  return paths.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path.startsWith("/blog/") ? "weekly" : "monthly",
    priority: path === "/" ? 1.0 : path.startsWith("/blog/") ? 0.7 : 0.8,
  }));
}
