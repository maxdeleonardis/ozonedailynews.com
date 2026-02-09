// Placeholder for page scanner
export interface PageInfo {
  url: string;
  priority: number;
  changeFrequency: string;
  lastModified?: string;
  title?: string;
  description?: string;
  path?: string;
  category?: string;
  tags?: string[];
  publishDate?: string;
}

export async function getNewsArticlePages(): Promise<PageInfo[]> {
  return [];
}

export async function getSitemapPages(): Promise<PageInfo[]> {
  return [];
}

export function getSitemapPriority(url: string): number {
  return 0.5;
}

export function getChangeFrequency(url: string): string {
  return 'weekly';
}
