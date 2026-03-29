import { createClient } from '@/lib/supabase/server';

// =============================================================================
// TYPES
// =============================================================================

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: any;           // JSONB array of ArticleBlocks
  publishedAt: string;
  category?: string;
  status?: string;
}

export interface BlogPostFull extends BlogPost {
  // Author fields — table uses author_name not author
  author?: string;        // alias kept for backward compat in editor state
  author_name?: string;
  author_role?: string;
  author_avatar?: string;
  author_twitter?: string;
  author_slug?: string;
  author_bio?: string;
  // Content
  subtitle?: string;
  excerpt?: string;
  tags?: string[];
  read_time?: string | number;
  blocks?: any[];
  sidebar_blocks?: any[];
  layout_columns?: number;
  // Status flags
  status?: 'published' | 'draft';
  featured?: boolean;
  trending?: boolean;
  breaking?: boolean;
  exclusive?: boolean;
  // Image
  featured_image?: string;
  image_url?: string;
  image_alt?: string;
  image_caption?: string;
  image_credit?: string;
  thumbnail_url?: string;
  thumbnail_alt?: string;
  // Category
  category_color?: string;
  topic_tag?: string;
  // Timestamps
  created_at?: string;
  published_at?: string;
  updated_at?: string;
}

// =============================================================================
// HELPERS
// =============================================================================

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

// Map block-editor payload to Supabase columns
function toSupabaseRow(post: Partial<BlogPostFull>, status: 'published' | 'draft' = 'draft') {
  return {
    title: post.title || '',
    slug: post.slug || generateSlug(post.title || ''),
    subtitle: post.subtitle || null,
    excerpt: post.excerpt || '',
    // author_name is the actual column — editor passes it as post.author
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

// =============================================================================
// READ
// =============================================================================

export async function getBreakingHeadlines(): Promise<string[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('articles')
      .select('title')
      .eq('breaking', true)
      .order('created_at', { ascending: false })
      .limit(8);
    if (error) { return []; }
    return (data || []).map(r => r.title as string);
  } catch { return []; }
}

export async function getAllBlogPosts(): Promise<BlogPostFull[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('articles')
      .select('id, title, slug, content, published_at, created_at, category, status, author_name, excerpt, image_url, tags, featured, trending, breaking, exclusive')
      .order('created_at', { ascending: false });

    if (error) { console.error('[blog-service] getAllBlogPosts:', error.message); return []; }
    return (data || []).map(row => ({
      id: row.id,
      title: row.title,
      slug: row.slug,
      content: row.content,
      publishedAt: row.published_at || row.created_at,
      category: row.category,
      status: row.status,
      author: row.author_name,
      author_name: row.author_name,
      excerpt: row.excerpt,
      image_url: row.image_url,
      tags: row.tags,
      featured: row.featured,
      trending: row.trending,
      breaking: row.breaking,
      exclusive: row.exclusive,
    } as any));
  } catch { return []; }
}

export async function getPublishedBlogPosts(): Promise<BlogPost[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('articles')
      .select('id, title, slug, content, published_at, category, author_name, excerpt, image_url, tags')
      .eq('status', 'published')
      .order('published_at', { ascending: false });

    if (error) { console.error('[blog-service] getPublishedBlogPosts:', error.message); return []; }
    return (data || []).map(row => ({
      id: row.id,
      title: row.title,
      slug: row.slug,
      content: row.content,
      publishedAt: row.published_at,
      category: row.category,
      author: row.author_name,
      author_name: row.author_name,
      excerpt: row.excerpt,
      image_url: row.image_url,
      tags: row.tags,
    }));
  } catch { return []; }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPostFull | null> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('slug', slug)
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
    };
  } catch { return null; }
}

export async function getBlogPostById(id: string): Promise<BlogPostFull | null> {
  try {
    const supabase = await createClient();
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
    };
  } catch { return null; }
}

// =============================================================================
// WRITE
// =============================================================================

export async function createBlogPost(post: Partial<BlogPostFull>): Promise<BlogPost> {
  const supabase = await createClient();
  const row = toSupabaseRow(post, (post.status as any) || 'draft');

  const { data, error } = await supabase
    .from('articles')
    .insert(row)
    .select('id, title, slug, published_at, created_at')
    .single();

  if (error) throw new Error(`[blog-service] createBlogPost: ${error.message}`);

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
  const supabase = await createClient();
  const row = toSupabaseRow(post, (post.status as any) || 'draft');

  const { data, error } = await supabase
    .from('articles')
    .update({ ...row, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select('id, title, slug, published_at, created_at')
    .single();

  if (error) throw new Error(`[blog-service] updateBlogPost: ${error.message}`);

  return {
    id: data!.id,
    title: data!.title,
    slug: data!.slug,
    content: row.content,
    publishedAt: data!.published_at || data!.created_at,
  };
}

export async function deleteBlogPost(id: string): Promise<void> {
  const supabase = await createClient();
  const { error } = await supabase.from('articles').delete().eq('id', id);
  if (error) throw new Error(`[blog-service] deleteBlogPost: ${error.message}`);
}
