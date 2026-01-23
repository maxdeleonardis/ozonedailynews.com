import { supabase, isSupabaseConfigured, BlogPost } from './supabase';

// Type alias for backwards compatibility
type Article = BlogPost;

// Fetch all featured articles
export async function getFeaturedArticles(): Promise<Article[]> {
  if (!isSupabaseConfigured || !supabase) {
    console.warn('Supabase is not configured');
    return [];
  }

  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('featured', true)
    .order('published_at', { ascending: false })
    .limit(5);

  if (error) throw error;
  return data || [];
}

// Fetch articles by category
export async function getArticlesByCategory(category: string): Promise<Article[]> {
  if (!isSupabaseConfigured || !supabase) {
    console.warn('Supabase is not configured');
    return [];
  }

  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('category', category)
    .order('published_at', { ascending: false });

  if (error) throw error;
  return data || [];
}

// Fetch single article by slug
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  if (!isSupabaseConfigured || !supabase) {
    console.warn('Supabase is not configured');
    return null;
  }

  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) throw error;
  return data;
}

// Track article view
export async function trackArticleView(articleId: string, userId?: string) {
  if (!isSupabaseConfigured || !supabase) {
    console.warn('Supabase is not configured');
    return;
  }

  const { error } = await supabase.rpc('increment_view_count', {
    article_id: articleId,
  });

  if (!error && userId) {
    // Save to user's read articles
    await supabase
      .from('user_preferences')
      .update({
        read_articles: 'array_append(read_articles, $1)',
      })
      .eq('user_id', userId);
  }

  return !error;
}

// Save article for later
export async function saveArticle(userId: string, articleId: string) {
  if (!isSupabaseConfigured || !supabase) {
    console.warn('Supabase is not configured');
    return false;
  }

  const { error } = await supabase
    .from('user_preferences')
    .update({
      saved_articles: 'array_append(saved_articles, $1)',
    })
    .eq('user_id', userId);

  return !error;
}

// Subscribe to article changes (real-time)
export function subscribeToArticles(callback: (article: Article) => void) {
  if (!isSupabaseConfigured || !supabase) {
    console.warn('Supabase is not configured');
    return () => {}; // Return no-op function
  }

  const channel = supabase
    .channel('articles-changes')
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'articles' },
      (payload) => {
        callback(payload.new as Article);
      }
    )
    .subscribe();

  return () => {
    if (supabase) {
      supabase.removeChannel(channel);
    }
  };
}
