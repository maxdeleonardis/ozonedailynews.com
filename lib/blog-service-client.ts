'use client';

import { createBrowserClient } from '@/lib/supabase/client';
import { ArticleBlock } from '@/lib/article-types';

interface BlogPostInput {
  title: string;
  slug: string;
  excerpt?: string;
  author?: string;
  category?: string;
  tags?: string[];
  read_time?: string;
  blocks?: ArticleBlock[];
  sidebar_blocks?: ArticleBlock[];
  layout_columns?: 1 | 2;
  status?: 'draft' | 'published';
  featured_image?: string;
}

export async function createBlogPost(post: BlogPostInput): Promise<void> {
  const supabase = createBrowserClient();

  const payload = {
    ...post,
    published_at: post.status === 'published' ? new Date().toISOString() : null,
    updated_at: new Date().toISOString(),
  };

  const { error } = await supabase
    .from('articles')
    .upsert(payload, { onConflict: 'slug' });

  if (error) {
    throw new Error(`Supabase upsert failed: ${error.message}`);
  }
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export function calculateReadTime(blocks: ArticleBlock[]): string {
  const wordCount = blocks.reduce((total, block) => {
    const text =
      typeof block.content === 'string'
        ? block.content
        : JSON.stringify(block.content ?? '');
    return total + text.split(/\s+/).filter(Boolean).length;
  }, 0);

  const minutes = Math.max(1, Math.round(wordCount / 200));
  return `${minutes} min read`;
}
