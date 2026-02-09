'use server';

import { revalidatePath } from 'next/cache';
import { createClient } from '@/lib/supabase/server';

interface ArticleBlock {
  id: string;
  type: 'paragraph' | 'heading' | 'image';
  content: string;
}

interface SaveArticleData {
  title: string;
  slug: string;
  excerpt: string;
  content: ArticleBlock[];
  category: string;
  author: string;
  featured?: boolean;
  image_url?: string | null;
}

/**
 * Save article as draft (does NOT publish)
 * This keeps status = 'draft' and does NOT trigger revalidation
 */
export async function saveArticleDraft(id: string, data: SaveArticleData) {
  const supabase = await createClient();

  try {
    if (id === 'new') {
      // Create new article as draft
      const { data: newArticle, error } = await supabase
        .from('articles')
        .insert({
          slug: data.slug,
          title: data.title,
          excerpt: data.excerpt,
          content: data.content,
          category: data.category,
          author: data.author,
          featured: data.featured || false,
          image_url: data.image_url || null,
          status: 'draft',
          published_at: null,
        })
        .select()
        .single();

      if (error) throw error;

      return { success: true, article: newArticle };
    } else {
      // Update existing article, keep as draft
      const { error } = await supabase
        .from('articles')
        .update({
          title: data.title,
          slug: data.slug,
          excerpt: data.excerpt,
          content: data.content,
          category: data.category,
          author: data.author,
          featured: data.featured || false,
          image_url: data.image_url || null,
          updated_at: new Date().toISOString(),
          // Keep status as draft, don't set published_at
        })
        .eq('id', id);

      if (error) throw error;

      return { success: true };
    }
  } catch (error) {
    console.error('Failed to save draft:', error);
    return { success: false, error: 'Failed to save article draft' };
  }
}

/**
 * Publish article (flips status to 'published' and triggers revalidation)
 * This is the ONLY function that refreshes the public site
 */
export async function publishArticle(id: string) {
  const supabase = await createClient();

  try {
    const { error } = await supabase
      .from('articles')
      .update({
        status: 'published',
        published_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .eq('id', id);

    if (error) throw error;

    // CRITICAL: Revalidate the public blog routes so Next.js knows to refresh
    revalidatePath('/blog');
    revalidatePath('/(public)/blog', 'layout');

    return { success: true };
  } catch (error) {
    console.error('Failed to publish article:', error);
    return { success: false, error: 'Failed to publish article' };
  }
}

/**
 * Unpublish article (reverts to draft status)
 */
export async function unpublishArticle(id: string) {
  const supabase = await createClient();

  try {
    const { error } = await supabase
      .from('articles')
      .update({
        status: 'draft',
        updated_at: new Date().toISOString(),
      })
      .eq('id', id);

    if (error) throw error;

    // Revalidate to remove from public site
    revalidatePath('/blog');
    revalidatePath('/(public)/blog', 'layout');

    return { success: true };
  } catch (error) {
    console.error('Failed to unpublish article:', error);
    return { success: false, error: 'Failed to unpublish article' };
  }
}

/**
 * Delete article permanently
 */
export async function deleteArticle(id: string) {
  const supabase = await createClient();

  try {
    const { error } = await supabase
      .from('articles')
      .delete()
      .eq('id', id);

    if (error) throw error;

    // Revalidate to remove from all views
    revalidatePath('/blog');
    revalidatePath('/(public)/blog', 'layout');

    return { success: true };
  } catch (error) {
    console.error('Failed to delete article:', error);
    return { success: false, error: 'Failed to delete article' };
  }
}
