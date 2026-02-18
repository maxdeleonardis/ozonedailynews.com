import Link from 'next/link';
import type { Metadata } from 'next';
import CoverageMap from '@/components/CoverageMap';
import { contentRegistry, ContentEntry } from '@/lib/content-registry';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Site Index - Complete Sitemap | ObjectWire",
  description: "Comprehensive site index showing all pages and sections of ObjectWire. Navigate our complete content hierarchy.",
  keywords: ["sitemap", "site index", "navigation", "ObjectWire pages"],
  alternates: {
    canonical: 'https://www.objectwire.org/site-index',
  },
};

// ─── Category config: icon + colour per category ───────────────────────────
const CATEGORY_META: Record<string, { icon: string; gradient: string; border: string }> = {
  'YouTube':        { icon: '▶️',  gradient: 'from-red-50 to-rose-50',       border: 'border-red-200' },
  'Video Games':    { icon: '🎮',  gradient: 'from-green-50 to-emerald-50',   border: 'border-green-200' },
  'Gaming':         { icon: '🕹️', gradient: 'from-teal-50 to-green-50',      border: 'border-teal-200' },
  'Tech':           { icon: '💻',  gradient: 'from-orange-50 to-yellow-50',   border: 'border-orange-200' },
  'Finance':        { icon: '📈',  gradient: 'from-emerald-50 to-cyan-50',    border: 'border-emerald-200' },
  'News':           { icon: '📰',  gradient: 'from-blue-50 to-indigo-50',     border: 'border-blue-200' },
  'SaaS':           { icon: '🚀',  gradient: 'from-violet-50 to-purple-50',   border: 'border-violet-200' },
  'Entertainment':  { icon: '🎬',  gradient: 'from-purple-50 to-pink-50',     border: 'border-purple-200' },
  'Sports':         { icon: '⚽',  gradient: 'from-lime-50 to-green-50',      border: 'border-lime-200' },
  'Winter Olympics':{ icon: '🏅',  gradient: 'from-sky-50 to-blue-50',        border: 'border-sky-200' },
  'Crypto':         { icon: '₿',   gradient: 'from-amber-50 to-yellow-50',    border: 'border-amber-200' },
};

const DEFAULT_META = { icon: '📄', gradient: 'from-gray-50 to-slate-50', border: 'border-gray-200' };

function formatDate(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric', month: 'short', day: 'numeric',
    });
  } catch {
    return dateStr;
  }
}

function groupByCategory(entries: ContentEntry[]): Record<string, ContentEntry[]> {
  const groups: Record<string, ContentEntry[]> = {};
  for (const entry of entries) {
    const cat = entry.category || 'Other';
    if (!groups[cat]) groups[cat] = [];
    groups[cat].push(entry);
  }
  for (const cat of Object.keys(groups)) {
    groups[cat].sort(
      (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    );
  }
  return groups;
}

export default function SiteIndexPage() {
  const sorted = [...contentRegistry].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );

  const grouped = groupByCategory(sorted);
  const categories = Object.keys(grouped).sort();
  const totalEntries = contentRegistry.length;
  const totalCategories = categories.length;
  const latestEntry = sorted[0];

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 max-w-7xl">

        {/* ── Page header ─────────────────────────────── */}
        <section className="mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Site Index</h1>
          <p className="text-gray-600 text-lg max-w-3xl">
            Every page on ObjectWire, organised by category and sorted newest first.
            This index is auto-populated from the content registry — no manual updates needed.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg px-5 py-3 text-center">
              <div className="text-2xl font-bold text-blue-700">{totalEntries}</div>
              <div className="text-xs text-blue-600 uppercase tracking-wide">Registered Pages</div>
            </div>
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg px-5 py-3 text-center">
              <div className="text-2xl font-bold text-indigo-700">{totalCategories}</div>
              <div className="text-xs text-indigo-600 uppercase tracking-wide">Categories</div>
            </div>
            {latestEntry && (
              <div className="bg-green-50 border border-green-200 rounded-lg px-5 py-3 text-center">
                <div className="text-sm font-bold text-green-700 max-w-[200px] truncate">{latestEntry.title}</div>
                <div className="text-xs text-green-600 uppercase tracking-wide">
                  Latest · {formatDate(latestEntry.publishDate)}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ── Category jump links ─────────────────────── */}
        <section className="mb-10">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const m = CATEGORY_META[cat] ?? DEFAULT_META;
              return (
                <a
                  key={cat}
                  href={`#cat-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-full transition-colors"
                >
                  {m.icon} {cat} <span className="text-gray-400 ml-1">({grouped[cat].length})</span>
                </a>
              );
            })}
          </div>
        </section>

        {/* ── All pages by category ───────────────────── */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-blue-600">
            All Pages by Category
          </h2>
          <div className="space-y-12">
            {categories.map((cat) => {
              const entries = grouped[cat];
              const m = CATEGORY_META[cat] ?? DEFAULT_META;
              const anchorId = `cat-${cat.toLowerCase().replace(/\s+/g, '-')}`;
              return (
                <div key={cat} id={anchorId}>
                  <div className={`bg-gradient-to-r ${m.gradient} border-2 ${m.border} rounded-xl px-6 py-4 mb-4 flex items-center justify-between`}>
                    <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                      <span className="text-2xl">{m.icon}</span>
                      {cat}
                    </h3>
                    <span className="text-sm text-gray-500 font-medium">
                      {entries.length} page{entries.length !== 1 ? 's' : ''}
                    </span>
                  </div>
                  <div className="divide-y divide-gray-100 border border-gray-200 rounded-xl overflow-hidden">
                    {entries.map((entry) => (
                      <div
                        key={entry.slug}
                        className="flex flex-col sm:flex-row sm:items-start gap-2 px-5 py-4 hover:bg-gray-50 transition-colors group"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <Link
                              href={entry.slug}
                              className="font-semibold text-blue-600 group-hover:text-blue-800 group-hover:underline leading-snug"
                            >
                              {entry.title}
                            </Link>
                            {entry.featured && (
                              <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full font-medium">
                                Featured
                              </span>
                            )}
                          </div>
                          {entry.description && (
                            <p className="text-sm text-gray-600 line-clamp-2">{entry.description}</p>
                          )}
                          {entry.tags && entry.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-1.5">
                              {entry.tags.slice(0, 5).map((tag) => (
                                <span key={tag} className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className="flex-shrink-0 flex sm:flex-col items-start sm:items-end gap-2 sm:gap-1 text-xs text-gray-400 whitespace-nowrap mt-1 sm:mt-0">
                          <span className="font-mono bg-gray-100 px-2 py-1 rounded text-gray-500">{entry.slug}</span>
                          <time dateTime={entry.publishDate}>{formatDate(entry.publishDate)}</time>
                          {entry.author && (
                            <span className="text-gray-400 italic hidden sm:block">{entry.author}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Coverage Map ────────────────────────────── */}
        <CoverageMap showLatest={true} />

        {/* ── Technical info ──────────────────────────── */}
        <section className="mb-12 mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-blue-600">
            How This Index Works
          </h2>
          <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-gray-900 mb-3">Content Registry</h3>
                <p className="text-sm text-gray-700 mb-3">
                  This index is driven by{' '}
                  <code className="bg-gray-200 px-1.5 py-0.5 rounded text-xs">lib/content-registry.ts</code> — 
                  a central array of every registered page. Adding a new entry there automatically 
                  surfaces it here, in the sitemap, and in related-article feeds.
                </p>
                <p className="text-sm text-gray-700">
                  Entries carry rich metadata: title, description, author, publish date, category, 
                  tags, and SEO priority.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-3">Features</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  {[
                    'Auto-populated from content-registry — zero manual updates',
                    'Grouped by category with article counts',
                    'Sorted newest-first within each category',
                    'Inline tags, descriptions, and publish dates',
                    'Jump-links to each category section',
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Footer CTA ──────────────────────────────── */}
        <section>
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Explore ObjectWire</h2>
            <p className="text-lg mb-8 text-blue-100">
              Use this index to navigate all our content, or start from the home page.
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg"
            >
              Back to Home →
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}

