import type { MetadataRoute } from "next";
import { allPosts } from "contentlayer/generated";
import { execSync } from "child_process";
import fs from "fs";
import path from "path";

export default function sitemap(): MetadataRoute.Sitemap {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL || "https://zmianakrs.pl";

  const baseUrl = base.replace(/\/$/, "");

  const routeFileMap: Record<string, string> = {
    "": "app/(site)/page.tsx",
    "/blog": "app/blog/page.tsx",
    "/polityka-prywatnosci": "app/(site)/polityka-prywatnosci/page.tsx",
    "/regulamin": "app/(site)/regulamin/page.tsx",
    "/kontakt": "app/(site)/kontakt/page.tsx",
    "/ksiegowi": "app/(site)/ksiegowi/page.tsx",
    "/rodo": "app/(site)/rodo/page.tsx",
    "/o-nas": "app/(site)/o-nas/page.tsx",
    "/cennik": "app/(site)/cennik/page.tsx",
    "/uslugi": "app/(site)/uslugi/page.tsx",
    "/uslugi/zmiana-zarzadu-spolki-zoo": "app/(site)/uslugi/zmiana-zarzadu-spolki-zoo/page.tsx",
    "/uslugi/zmiana-umowy-spolki-zoo": "app/(site)/uslugi/zmiana-umowy-spolki-zoo/page.tsx",
    "/uslugi/zmiana-adresu-spolki-zoo": "app/(site)/uslugi/zmiana-adresu-spolki-zoo/page.tsx",
    "/uslugi/zmiana-wspolnika-spolki-zoo": "app/(site)/uslugi/zmiana-wspolnika-spolki-zoo/page.tsx",
    "/uslugi/prokurent-krs": "app/(site)/uslugi/prokurent-krs/page.tsx",
    "/uslugi/zmiana-kodow-pkd": "app/(site)/uslugi/zmiana-kodow-pkd/page.tsx",
    "/uk": "pages/uk/index.tsx",
    "/uk/regulamin": "pages/uk/regulamin.tsx",
    "/uk/polityka-prywatnosci": "pages/uk/polityka-prywatnosci.tsx",
    "/en": "pages/en/index.tsx",
    "/zh": "pages/zh/index.tsx",
    "/zh/regulamin": "pages/zh/regulamin.tsx",
    "/zh/polityka-prywatnosci": "pages/zh/polityka-prywatnosci.tsx",
    "/ru": "pages/ru/index.tsx",
    "/ru/regulamin": "pages/ru/regulamin.tsx",
    "/ru/polityka-prywatnosci": "pages/ru/polityka-prywatnosci.tsx",
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
    url: `${baseUrl}/artykul/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...routes, ...posts];
}
