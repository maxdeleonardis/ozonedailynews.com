// Finance scanner placeholder
export interface FinanceArticle {
  title: string;
  slug: string;
  publishDate: string;
  category: string;
  isPinned?: boolean;
  excerpt?: string;
  author?: string;
  readTime?: string;
  date?: string;
}

export async function scanFinanceArticles(): Promise<FinanceArticle[]> {
  return [];
}
