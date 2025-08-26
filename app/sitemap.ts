import type { MetadataRoute } from "next";
import { allPosts } from "contentlayer/generated";

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL;

  if (!BASE_URL) {
    throw new Error("NEXT_PUBLIC_SITE_URL env variable is not set");
  }

  const baseUrl = BASE_URL.replace(/\/$/, "");

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
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  const posts = allPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...routes, ...posts];
}
