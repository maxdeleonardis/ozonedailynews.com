import type { Metadata } from 'next';
import { scanAllContent, filterByDateRange, groupByCategory, getUrgentArticles } from '@/lib/content-scanner';
import { getAllEntries } from '@/lib/registry-service';
import { getAllArticles, getJackArticles } from '@/lib/article-service';
import { compareDescending, getRelativeTime } from '@/lib/date-utils';
import { getPopularSlugs } from '@/lib/popular-lead';
import NewsLibrary, { type LibraryArticle, type LibraryCategory } from '@/components/discovery/NewsLibrary';

export const metadata: Metadata = {
  title: "ObjectWire | News That Matters",
  description: "Independent journalism covering technology, finance, investigations, and world events. Source-verified reporting you can trust.",
  alternates: {
    canonical: 'https://www.objectwire.org/news',
  },
  openGraph: {
    title: "ObjectWire | News That Matters",
    description: "Independent journalism covering technology, finance, investigations, and world events.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ObjectWire | News That Matters',
    description: 'Independent journalism covering technology, finance, investigations, and world events.',
  },
};

export const revalidate = 300;

function toRelativeDate(article: { publishedAt?: Date; updatedAt?: Date; date?: string }): string {
  if (article.updatedAt && article.publishedAt && article.updatedAt > article.publishedAt) {
    return getRelativeTime(article.updatedAt);
  }
  if (article.publishedAt) return getRelativeTime(article.publishedAt);
  return article.date ?? '';
}

function isUpdatedArticle(article: { publishedAt?: Date; updatedAt?: Date }): boolean {
  return !!(
    article.updatedAt &&
    article.publishedAt &&
    article.updatedAt > article.publishedAt &&
    article.updatedAt.getTime() - article.publishedAt.getTime() > 3_600_000
  );
}

export default async function NewsPage() {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const filesystemArticles = await scanAllContent();

  // Merge: registry entries override filesystem dates
  const contentRegistry = await getAllEntries();
  const registryMap = new Map(contentRegistry.map(e => [e.slug, e]));

  // Build image lookup from Supabase article tables
  const imageMap = new Map<string, string>();
  try {
    const [blogArticles, jackArticles] = await Promise.all([
      getAllArticles(),
      getJackArticles(),
    ]);
    for (const a of [...blogArticles, ...jackArticles]) {
      const img = a.imageUrl || a.thumbnail_url;
      if (img && a.slug) imageMap.set(a.slug, img);
    }
  } catch { /* Supabase unavailable — images will fall back to registry */ }

  const allArticles = filesystemArticles.map(a => {
    const reg = registryMap.get(a.slug);
    if (reg) {
      return {
        ...a,
        publishedAt: new Date(reg.publishDate),
        updatedAt: new Date(reg.modifiedDate),
        date: reg.publishDate,
        category: reg.category.toUpperCase(),
        author: reg.author,
      };
    }
    return a;
  });

  allArticles.sort((a, b) => {
    const dateA = a.updatedAt && a.updatedAt > a.publishedAt ? a.updatedAt : a.publishedAt;
    const dateB = b.updatedAt && b.updatedAt > b.publishedAt ? b.updatedAt : b.publishedAt;
    return compareDescending(dateA, dateB);
  });

  const thisWeekArticles = filterByDateRange(allArticles, 7);
  const urgentArticles = getUrgentArticles(allArticles);
  const categorizedArticles = groupByCategory(allArticles);

  // â”€â”€ Shape data for NewsLibrary â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

  const libraryArticles: LibraryArticle[] = allArticles.map(a => {
    const reg = registryMap.get(a.slug);
    const dbSlug = a.slug.replace(/^\//, '').replace(/\//g, '-');
    return {
      slug: a.slug,
      title: a.title,
      excerpt: a.excerpt ?? '',
      category: a.category,
      author: a.author ?? 'ObjectWire Editorial',
      date: a.publishedAt
        ? a.publishedAt.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
        : (a.date ?? ''),
      relativeDate: toRelativeDate(a),
      publishedAtISO: a.publishedAt ? a.publishedAt.toISOString() : undefined,
      readTime: a.readTime,
      urgent: a.urgent,
      isUpdated: isUpdatedArticle(a),
      imageUrl: imageMap.get(dbSlug) ?? reg?.imageUrl,
    };
  });

  const libraryCategories: LibraryCategory[] = Object.keys(categorizedArticles)
    .map(rawName => ({
      rawName,
      name: rawName.charAt(0) + rawName.slice(1).toLowerCase().replace(/_/g, ' '),
      count: categorizedArticles[rawName].length,
      isNew: categorizedArticles[rawName].some(a => {
        const checkDate =
          a.updatedAt && a.publishedAt && a.updatedAt > a.publishedAt
            ? a.updatedAt
            : a.publishedAt;
        return checkDate && checkDate.getTime() > Date.now() - 7 * 24 * 60 * 60 * 1000;
      }),
    }))
    .sort((a, b) => b.count - a.count);

  const urgentTicker = urgentArticles.map(a => a.title);
  const totalArticles = allArticles.length;
  const articlesThisWeek = thisWeekArticles.length;

  let popularSlugs: string[] = [];
  try { popularSlugs = await getPopularSlugs(100); } catch { /* graceful fallback */ }

  return (
    <NewsLibrary
      articles={libraryArticles}
      categories={libraryCategories}
      totalArticles={totalArticles}
      articlesThisWeek={articlesThisWeek}
      today={today}
      urgentTicker={urgentTicker}
      popularSlugs={popularSlugs}
    />
  );
}

