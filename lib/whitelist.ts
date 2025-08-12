export const BASE_URL = "https://www.zmianakrs.pl";

export const ALLOWED_PATHS = [
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
] as const;

export type AllowedPath = typeof ALLOWED_PATHS[number];

export function isPathAllowed(path: string): path is AllowedPath {
  return (ALLOWED_PATHS as readonly string[]).includes(path);
}

export async function getAllBlogSlugs(): Promise<string[]> {
  return [];
}

export async function getAllAllowedPaths(): Promise<string[]> {
  const blogSlugs = await getAllBlogSlugs();
  return [...ALLOWED_PATHS, ...blogSlugs.map((s) => `/blog/${s}`)];
}
