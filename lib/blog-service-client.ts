/**
 * Client-side blog service — safe to import in 'use client' components.
 * Uses the browser Supabase client (no next/headers).
 */
import { createBrowserClient } from '@/lib/supabase/client';
import type { BlogPost, BlogPostFull } from '@/lib/blog-service';

export type { BlogPost, BlogPostFull };

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export function calculateReadTime(blocks: any[]): number {
  const wordCount = blocks.reduce((total: number, block: any) => {
    const text = typeof block.content === 'string' ? block.content : JSON.stringify(block);
    return total + text.split(/\s+/).filter(Boolean).length;
  }, 0);
  return Math.max(1, Math.ceil(wordCount / 200));
}

function toSupabaseRow(post: Partial<BlogPostFull>, status: 'published' | 'draft' = 'draft') {
  return {
    title: post.title || '',
    slug: post.slug || generateSlug(post.title || ''),
    subtitle: post.subtitle || null,
    excerpt: post.excerpt || '',
    author_name: post.author_name || post.author || 'ObjectWire Editorial',
    author_role: post.author_role || null,
    author_avatar: post.author_avatar || null,
    author_twitter: post.author_twitter || null,
    author_slug: post.author_slug || null,
    author_bio: post.author_bio || null,
    category: post.category || 'News',
    category_color: post.category_color || 'blue',
    topic_tag: post.topic_tag || null,
    content: post.blocks ?? post.content ?? [],
    image_url: post.featured_image || post.image_url || null,
    image_alt: post.image_alt || null,
    image_caption: post.image_caption || null,
    image_credit: post.image_credit || null,
    thumbnail_url: post.thumbnail_url || null,
    thumbnail_alt: post.thumbnail_alt || null,
    tags: post.tags || [],
    read_time: post.read_time != null ? String(post.read_time) : null,
    featured: post.featured ?? false,
    trending: post.trending ?? false,
    breaking: post.breaking ?? false,
    exclusive: post.exclusive ?? false,
    status,
    published_at: status === 'published' ? new Date().toISOString() : null,
  };
}

export async function getBlogPostById(id: string): Promise<BlogPostFull | null> {
  try {
    const supabase = createBrowserClient();
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('id', id)
      .single();

    if (error || !data) return null;
    return {
      id: data.id,
      title: data.title,
      slug: data.slug,
      subtitle: data.subtitle,
      content: data.content,
      blocks: data.content,
      excerpt: data.excerpt,
      author: data.author_name,
      author_name: data.author_name,
      author_role: data.author_role,
      author_avatar: data.author_avatar,
      author_twitter: data.author_twitter,
      author_slug: data.author_slug,
      author_bio: data.author_bio,
      category: data.category,
      category_color: data.category_color,
      topic_tag: data.topic_tag,
      featured_image: data.image_url,
      image_url: data.image_url,
      image_alt: data.image_alt,
      image_caption: data.image_caption,
      image_credit: data.image_credit,
      thumbnail_url: data.thumbnail_url,
      thumbnail_alt: data.thumbnail_alt,
      tags: data.tags,
      read_time: data.read_time,
      featured: data.featured,
      trending: data.trending,
      breaking: data.breaking,
      exclusive: data.exclusive,
      status: data.status,
      publishedAt: data.published_at || data.created_at,
      published_at: data.published_at,
      created_at: data.created_at,
      updated_at: data.updated_at,
    } as any;
  } catch { return null; }
}

export async function createBlogPost(post: Partial<BlogPostFull>): Promise<BlogPost> {
  const supabase = createBrowserClient();
  const row = toSupabaseRow(post, (post.status as any) || 'draft');

  const { data, error } = await supabase
    .from('articles')
    .insert(row)
    .select('id, title, slug, published_at, created_at')
    .single();

  if (error) throw new Error(`createBlogPost: ${error.message}`);

  return {
    id: data!.id,
    title: data!.title,
    slug: data!.slug,
    content: row.content,
    publishedAt: data!.published_at || data!.created_at,
    category: post.category,
  };
}

export async function updateBlogPost(id: string, post: Partial<BlogPostFull>): Promise<BlogPost> {
  const supabase = createBrowserClient();
  const row = toSupabaseRow(post, (post.status as any) || 'draft');

  const { data, error } = await supabase
    .from('articles')
    .update({ ...row, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select('id, title, slug, published_at, created_at')
    .single();

  if (error) throw new Error(`updateBlogPost: ${error.message}`);

  return {
    id: data!.id,
    title: data!.title,
    slug: data!.slug,
    content: row.content,
    publishedAt: data!.published_at || data!.created_at,
  };
}
