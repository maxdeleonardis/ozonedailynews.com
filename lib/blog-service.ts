import { supabase, BlogPost } from './supabase';
import { ArticleBlock } from './articles-context';

// Helper to check supabase availability
function ensureSupabase() {
  if (!supabase) {
    console.warn('⚠️ Supabase is not configured. Database features will be disabled.');
    return null;
  }
  return supabase;
}

export interface BlogPostInput {
  title: string;
  slug: string;
  excerpt?: string;
  author?: string;
  category?: string;
  tags?: string[];
  read_time?: string;
  blocks: ArticleBlock[];
  sidebar_blocks?: ArticleBlock[];
  layout_columns?: 1 | 2;
  status: 'draft' | 'published';
  featured_image?: string;
  meta_title?: string;
  meta_description?: string;
}

export interface BlogPostFull {
  id: string;
  created_at: string;
  updated_at: string;
  published_at: string | null;
  title: string;
  slug: string;
  excerpt: string | null;
  author: string;
  category: string;
  tags: string[];
  read_time: string;
  blocks: ArticleBlock[];
  sidebar_blocks: ArticleBlock[];
  layout_columns: 1 | 2;
  status: 'draft' | 'published';
  featured_image: string | null;
  meta_title: string | null;
  meta_description: string | null;
}

// Create a new blog post
export async function createBlogPost(post: BlogPostInput): Promise<{ data: BlogPostFull | null; error: Error | null }> {
  try {
    const db = ensureSupabase();
    if (!db) {
      return { data: null, error: new Error('Supabase not configured') };
    }
    
    const { data, error } = await db
      .from('blog_posts')
      .insert({
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt || '',
        author: post.author || 'ObjectWire Editorial Team',
        category: post.category || 'Technology',
        tags: post.tags || [],
        read_time: post.read_time || '5 min read',
        blocks: post.blocks,
        sidebar_blocks: post.sidebar_blocks || [],
        layout_columns: post.layout_columns || 1,
        status: post.status,
        featured_image: post.featured_image || null,
        meta_title: post.meta_title || post.title,
        meta_description: post.meta_description || post.excerpt,
        published_at: post.status === 'published' ? new Date().toISOString() : null,
      })
      .select()
      .single();

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Error creating blog post:', error);
    return { data: null, error: error as Error };
  }
}

// Update an existing blog post
export async function updateBlogPost(id: string, post: Partial<BlogPostInput>): Promise<{ data: BlogPostFull | null; error: Error | null }> {
  try {
    const db = ensureSupabase();
    if (!db) {
      return { data: null, error: new Error('Supabase not configured') };
    }
    
    const updateData: any = { ...post };
    
    // Set published_at if publishing for the first time
    if (post.status === 'published') {
      const { data: existing } = await db
        .from('blog_posts')
        .select('published_at')
        .eq('id', id)
        .single();
      
      if (!existing?.published_at) {
        updateData.published_at = new Date().toISOString();
      }
    }

    const { data, error } = await db
      .from('blog_posts')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Error updating blog post:', error);
    return { data: null, error: error as Error };
  }
}

// Delete a blog post
export async function deleteBlogPost(id: string): Promise<{ error: Error | null }> {
  try {
    const db = ensureSupabase();
    if (!db) {
      return { error: new Error('Supabase not configured') };
    }
    
    const { error } = await db
      .from('blog_posts')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return { error: null };
  } catch (error) {
    console.error('Error deleting blog post:', error);
    return { error: error as Error };
  }
}

// Get all blog posts (for admin)
export async function getAllBlogPosts(): Promise<{ data: BlogPostFull[] | null; error: Error | null }> {
  try {
    const db = ensureSupabase();
    if (!db) {
      return { data: [], error: null }; // Return empty array if Supabase not configured
    }
    
    const { data, error } = await db
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return { data: [], error: error as Error };
  }
}

// Get published blog posts only
export async function getPublishedBlogPosts(): Promise<{ data: BlogPostFull[] | null; error: Error | null }> {
  try {
    const db = ensureSupabase();
    if (!db) {
      return { data: [], error: null }; // Return empty array if Supabase not configured
    }
    
    const { data, error } = await db
      .from('blog_posts')
      .select('*')
      .eq('status', 'published')
      .order('published_at', { ascending: false });

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Error fetching published posts:', error);
    return { data: [], error: error as Error };
  }
}

// Get a single blog post by ID
export async function getBlogPostById(id: string): Promise<{ data: BlogPostFull | null; error: Error | null }> {
  try {
    const db = ensureSupabase();
    if (!db) {
      return { data: null, error: new Error('Supabase not configured') };
    }
    
    const { data, error } = await db
      .from('blog_posts')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return { data: null, error: error as Error };
  }
}

// Get a single blog post by slug (supports nested slugs)
export async function getBlogPostBySlug(slug: string): Promise<{ data: BlogPostFull | null; error: Error | null }> {
  try {
    const db = ensureSupabase();
    if (!db) {
      return { data: null, error: null }; // Gracefully return null if Supabase not configured
    }
    
    const { data, error } = await db
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .eq('status', 'published')
      .single();

    if (error && error.code !== 'PGRST116') throw error; // PGRST116 = no rows found
    return { data: data || null, error: null };
  } catch (error) {
    console.error('Error fetching blog post by slug:', error);
    return { data: null, error: error as Error };
  }
}

// Check if a slug is available
export async function isSlugAvailable(slug: string, excludeId?: string): Promise<boolean> {
  try {
    const db = ensureSupabase();
    if (!db) {
      return false; // If Supabase not configured, assume slug not available
    }
    
    let query = db
      .from('blog_posts')
      .select('id')
      .eq('slug', slug);
    
    if (excludeId) {
      query = query.neq('id', excludeId);
    }

    const { data, error } = await query;
    if (error) throw error;
    return !data || data.length === 0;
  } catch (error) {
    console.error('Error checking slug availability:', error);
    return false;
  }
}

// Generate a unique slug from title
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Calculate read time from blocks
export function calculateReadTime(blocks: ArticleBlock[]): string {
  const wordCount = blocks.reduce((count, block) => {
    const text = block.content || '';
    return count + text.split(/\s+/).filter(Boolean).length;
  }, 0);
  
  const minutes = Math.ceil(wordCount / 200);
  return `${minutes} min read`;
}
