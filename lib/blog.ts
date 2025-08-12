import fs from 'node:fs/promises';

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  contentHtml: string;
  publishedAt: string;
  updatedAt?: string;
  cover?: string;
};

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const file = await fs.readFile(process.cwd() + '/public/blog/posts.json', 'utf8');
    const data = JSON.parse(file);
    if (Array.isArray(data)) {
      return data.filter(p => p && p.slug && p.title && p.description && p.contentHtml && p.publishedAt);
    }
    return [];
  } catch {
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const all = await getAllPosts();
  return all.find(p => p.slug === slug) || null;
}

export async function getAllSlugs(): Promise<string[]> {
  const all = await getAllPosts();
  return all.map(p => p.slug);
}
