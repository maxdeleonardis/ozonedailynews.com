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
}

export interface BlogPostFull extends BlogPost {
  author?: string;
  excerpt?: string;
  tags?: string[];
  status?: 'published' | 'draft';
  read_time?: number;
  blocks?: any[];         // block editor output — saved into `content`
  created_at?: string;
  featured_image?: string;
  image_url?: string;
  sidebar_blocks?: any[];
  layout_columns?: number;
  meta_title?: string;
  meta_description?: string;
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
    excerpt: post.excerpt || null,
    author: post.author || 'ObjectWire Editorial',
    category: post.category || 'News',
    // Store blocks array directly in content (ArticleRenderer reads content as blocks[])
    content: post.blocks ?? post.content ?? [],
    image_url: post.featured_image || post.image_url || null,
    status,
    featured: (post as any).featured ?? false,
    published_at: status === 'published' ? new Date().toISOString() : null,
  };
}

// =============================================================================
// READ
// =============================================================================

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('articles')
      .select('id, title, slug, content, published_at, created_at, category, status')
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
    } as any));
  } catch { return []; }
}

export async function getPublishedBlogPosts(): Promise<BlogPost[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('articles')
      .select('id, title, slug, content, published_at, category')
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
      content: data.content,
      blocks: data.content,     // same field, different alias
      excerpt: data.excerpt,
      author: data.author,
      category: data.category,
      featured_image: data.image_url,
      image_url: data.image_url,
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
      content: data.content,
      blocks: data.content,
      excerpt: data.excerpt,
      author: data.author,
      category: data.category,
      featured_image: data.image_url,
      image_url: data.image_url,
      status: data.status,
      publishedAt: data.published_at || data.created_at,
      published_at: data.published_at,
      created_at: data.created_at,
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
