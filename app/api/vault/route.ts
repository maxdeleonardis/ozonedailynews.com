// =============================================================================
// GET /api/vault
//
// Returns comprehensive user engagement data for the /account "Digital Vault":
//   - Total likes, saves, views, comments
//   - Category breakdown (interest map)
//   - Tag frequency (top interests)
//   - Liked articles (all, newest first)
//   - Reading streak info
// =============================================================================

import { NextResponse }      from 'next/server';
import { createAuthClient }  from '@/lib/supabase/server';
import { sha256hex }         from '@/lib/hash';

export async function GET() {
  const supabase = await createAuthClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user?.email) {
    return NextResponse.json({ error: 'Unauthenticated' }, { status: 401 });
  }

  const userHash = await sha256hex(user.email);

  // Parallel fetch all engagement data
  const [likes, saves, views, comments] = await Promise.all([
    supabase
      .from('article_likes')
      .select('article_slug, article_title, article_url, liked_at')
      .eq('user_hash', userHash)
      .order('liked_at', { ascending: false }),

    supabase
      .from('article_saves')
      .select('article_slug, article_title, article_url, article_image, article_category, saved_at')
      .eq('user_hash', userHash)
      .order('saved_at', { ascending: false }),

    supabase
      .from('article_view_history')
      .select('article_slug, article_title, article_url, article_image, article_category, viewed_at')
      .eq('user_hash', userHash)
      .order('viewed_at', { ascending: false }),

    supabase
      .from('discord_comments')
      .select('id, slug, body, created_at')
      .eq('discord_id', user.id)
      .order('created_at', { ascending: false })
      .limit(50),
  ]);

  // Build category breakdown from all interactions
  const categoryMap = new Map<string, number>();
  const tagFromSlug = (slug: string): string => {
    // Extract category hint from slug: "/tech/foo" => "Tech"
    const parts = slug.replace(/^\//, '').split('/');
    if (parts.length > 1) {
      return parts[0].charAt(0).toUpperCase() + parts[0].slice(1).replace(/-/g, ' ');
    }
    return 'General';
  };

  // Count categories from saves (has explicit category) and views
  for (const s of saves.data ?? []) {
    const cat = s.article_category || tagFromSlug(s.article_slug);
    categoryMap.set(cat, (categoryMap.get(cat) || 0) + 2); // saves weighted 2x
  }
  for (const l of likes.data ?? []) {
    const cat = tagFromSlug(l.article_slug);
    categoryMap.set(cat, (categoryMap.get(cat) || 0) + 3); // likes weighted 3x
  }
  for (const v of views.data ?? []) {
    const cat = v.article_category || tagFromSlug(v.article_slug);
    categoryMap.set(cat, (categoryMap.get(cat) || 0) + 1);
  }

  // Sort categories by weight
  const interests = [...categoryMap.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 12)
    .map(([name, weight]) => ({ name, weight }));

  // Reading streak: count unique days with views in the last 30 days
  const viewDates = new Set<string>();
  for (const v of views.data ?? []) {
    viewDates.add(new Date(v.viewed_at).toISOString().slice(0, 10));
  }

  // Calculate current streak
  let streak = 0;
  const today = new Date();
  for (let i = 0; i < 30; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    if (viewDates.has(key)) {
      streak++;
    } else if (i > 0) {
      break; // streak broken
    }
  }

  return NextResponse.json({
    stats: {
      totalLikes:    (likes.data ?? []).length,
      totalSaves:    (saves.data ?? []).length,
      totalViews:    (views.data ?? []).length,
      totalComments: (comments.data ?? []).length,
      readingStreak: streak,
      uniqueDaysRead: viewDates.size,
    },
    interests,
    likes:    likes.data    ?? [],
    saves:    saves.data    ?? [],
    views:    views.data    ?? [],
    comments: comments.data ?? [],
  });
}
