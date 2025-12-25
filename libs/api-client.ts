const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export interface Article {
  id: string;
  slug: string;
  title: string;
  content: string;
  excerpt?: string;
  author?: string;
  category_id?: string;
  category?: {
    id: string;
    name: string;
    slug: string;
  };
  hero_image?: string;
  read_time?: number;
  status: 'draft' | 'in_review' | 'approved' | 'published' | 'archived';
  published_at?: string;
  created_at: string;
  updated_at: string;
  view_count: number;
  is_featured: boolean;
  tags: Array<{
    id: string;
    name: string;
    slug: string;
  }>;
}

export interface ArticleListResponse {
  items: Article[];
  total: number;
  page: number;
  page_size: number;
  total_pages: number;
}

export async function fetchArticles(params?: {
  page?: number;
  page_size?: number;
  status?: string;
  category_id?: string;
  is_featured?: boolean;
}): Promise<ArticleListResponse> {
  const query = new URLSearchParams();
  if (params?.page) query.append('page', params.page.toString());
  if (params?.page_size) query.append('page_size', params.page_size.toString());
  if (params?.status) query.append('status', params.status);
  if (params?.category_id) query.append('category_id', params.category_id);
  if (params?.is_featured !== undefined) query.append('is_featured', params.is_featured.toString());

  const res = await fetch(`${API_URL}/api/articles?${query.toString()}`, {
    next: { revalidate: 60 },
    headers: { 'Content-Type': 'application/json' }
  });

  if (!res.ok) throw new Error('Failed to fetch articles');
  return res.json();
}

export async function fetchArticleBySlug(slug: string): Promise<Article> {
  const res = await fetch(`${API_URL}/api/articles/slug/${slug}`, {
    next: { revalidate: 3600 },
    headers: { 'Content-Type': 'application/json' }
  });

  if (!res.ok) throw new Error('Article not found');
  return res.json();
}
interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  created_at: string;
  updated_at: string;
}

export async function fetchCategories(): Promise<Category[]> {
  const res = await fetch(`${API_URL}/api/categories`, {
    next: { revalidate: 3600 },
    headers: { 'Content-Type': 'application/json' }
  });

  if (!res.ok) throw new Error('Failed to fetch categories');
  return res.json();
}

export async function createArticle(article: {
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  hero_image?: string;
  category_id?: string;
  author?: string;
  read_time?: number;
  tag_ids?: string[];
}): Promise<Article> {
  const res = await fetch(`${API_URL}/api/articles`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(article),
  });

  if (!res.ok) throw new Error('Failed to create article');
  return res.json();
}

export async function updateArticle(id: string, updates: Partial<Article>): Promise<Article> {
  const res = await fetch(`${API_URL}/api/articles/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates),
  });

  if (!res.ok) throw new Error('Failed to update article');
  return res.json();
}

export async function deleteArticle(id: string): Promise<void> {
  const res = await fetch(`${API_URL}/api/articles/${id}`, {
    method: 'DELETE',
  });

  if (!res.ok) throw new Error('Failed to delete article');
}

export async function transitionWorkflow(
  articleId: string,
  toStatus: 'draft' | 'in_review' | 'approved' | 'published' | 'archived',
  comment?: string
): Promise<void> {
  const res = await fetch(`${API_URL}/api/editorial/${articleId}/transition`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ to_status: toStatus, comment }),
  });

  if (!res.ok) throw new Error('Failed to transition workflow');
  return res.json();
}

export async function fetchEditorialStats(): Promise<{
  total: number;
  by_status: Record<string, number>;
}> {
  const res = await fetch(`${API_URL}/api/editorial/stats`, {
    next: { revalidate: 60 },
    headers: { 'Content-Type': 'application/json' }
  });

  if (!res.ok) throw new Error('Failed to fetch editorial stats');
  return res.json();
}

export async function subscribeNewsletter(email: string) {
  const res = await fetch(`${API_URL}/api/newsletter/subscribe`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  });

  if (!res.ok) throw new Error('Subscription failed');
  return res.json();
}
