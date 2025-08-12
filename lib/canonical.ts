import { BASE_URL, getAllAllowedPaths } from "@/lib/whitelist";

export async function getCanonicalUrl(path: string): Promise<string | null> {
  const allowed = await getAllAllowedPaths();
  if (allowed.includes(path)) {
    return `${BASE_URL}${path}`;
  }
  return null;
}
