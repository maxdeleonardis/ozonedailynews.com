import { supabase, Article } from './supabase';

// Fetch all featured articles
export async function getFeaturedArticles(): Promise<Article[]> {
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
    supabase.removeChannel(channel);
  };
}
