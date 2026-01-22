import type { MetadataRoute } from "next";
import { allPosts } from "contentlayer/generated";
import { execSync } from "child_process";
import fs from "fs";
import path from "path";

export default function sitemap(): MetadataRoute.Sitemap {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL || "https://moja-strona-nextjs.vercel.app";

  const baseUrl = base.replace(/\/$/, "");

  const routeFileMap: Record<string, string> = {
    "": "app/(site)/page.tsx",
    "/blog": "app/blog/page.tsx",
    "/polityka-prywatnosci": "app/(site)/polityka-prywatnosci/page.tsx",
    "/regulamin": "app/(site)/regulamin/page.tsx",
    "/contact": "app/(site)/contact/page.tsx",
    "/ksiegowi": "app/(site)/ksiegowi/page.tsx",
    "/o-nas": "app/(site)/o-nas/page.tsx",
    "/cennik": "app/(site)/cennik/page.tsx",
    "/uslugi": "app/(site)/uslugi/page.tsx",
    "/en": "app/(site)/en/page.tsx",
    "/en/contact": "app/(site)/en/contact/page.tsx",
  };

  const routes = Object.entries(routeFileMap).map(([route, file]) => ({
    url: `${baseUrl}${route}`,
    lastModified: getLastModifiedDate(file),
  }));

  function getLastModifiedDate(relativePath: string): Date {
    const filePath = path.resolve(process.cwd(), relativePath);
    try {
      const gitDate = execSync(`git log -1 --format=%cI -- "${filePath}"`).toString().trim();
      if (gitDate) {
        return new Date(gitDate);
      }
    } catch {
      // ignorujemy błąd
    }

    try {
      const stats = fs.statSync(filePath);
      return stats.mtime;
    } catch {
      // ignorujemy błąd
    }

    return new Date("2024-01-01");
  }

  const posts = allPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...routes, ...posts];
}
