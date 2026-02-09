// Placeholder for article registry
export interface StaticArticleMetadata {
  id: string;
  title: string;
  slug: string;
  publishDate: string;
  author: string;
  excerpt?: string;
  category?: string;
  tags?: string[];
  featuredImage?: string;
  heroImage?: string;
  status?: string;
  filePath?: string;
  seoTitle?: string;
  seoDescription?: string;
}

export function getAllArticles(): StaticArticleMetadata[] {
  return [];
}

export function updateArticleMetadata(id: string, metadata: Partial<StaticArticleMetadata>): void {
  console.log('Update article:', id, metadata);
}
