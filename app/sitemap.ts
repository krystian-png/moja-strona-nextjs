import type { MetadataRoute } from "next";
import { allPosts } from "contentlayer/generated";

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.zmianakrs.pl";

  const routes = [
    "",
    "/blog",
    "/polityka-prywatnosci",
    "/regulamin",
    "/contact",
    "/ksiegowi",
    "/rodo",
    "/o-nas",
    "/cennik",
    "/uslugi",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const posts = allPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...routes, ...posts];
}
