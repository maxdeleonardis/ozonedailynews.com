/**
 * blog-service.ts — type definitions and shared helpers for the admin editor.
 * Client-side Supabase operations live in lib/blog-service-client.ts.
 */

export interface BlogPostFull {
  id: string;
  title: string;
  slug: string;
  content?: string;
  publishedAt?: string;
  published_at?: string;
  category?: string;
  status?: 'draft' | 'published';
  author?: string;
  author_name?: string;
  excerpt?: string;
  image_url?: string;
  featured_image?: string;
  tags?: string[];
  featured?: boolean;
  trending?: boolean;
  breaking?: boolean;
  exclusive?: boolean;
  read_time?: string;
  blocks?: unknown[];
  sidebar_blocks?: unknown[];
  layout_columns?: 1 | 2;
  created_at?: string;
  updated_at?: string;
}
