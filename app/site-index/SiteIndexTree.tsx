'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import type { SiteIndexArticle, SiteIndexCategory } from './page';

/* ── Category color map ────────────────────────────────────────────────── */
const CATEGORY_COLORS: Record<string, string> = {
  News:           'bg-blue-600',
  Technology:     'bg-red-600',
  Gaming:         'bg-purple-600',
  Finance:        'bg-emerald-600',
  Politics:       'bg-orange-600',
  Sports:         'bg-sky-600',
  Entertainment:  'bg-pink-600',
  Science:        'bg-teal-600',
  'World Affairs':'bg-amber-700',
  Investigations: 'bg-yellow-700',
  YouTube:        'bg-red-500',
  Lifestyle:      'bg-rose-500',
  Business:       'bg-indigo-600',
  Automotive:     'bg-zinc-700',
  Events:         'bg-violet-600',
  Education:      'bg-cyan-600',
  History:        'bg-stone-600',
  Research:       'bg-lime-700',
  'AI Research':  'bg-fuchsia-600',
};

function getCategoryColor(cat: string): string {
  return CATEGORY_COLORS[cat] ?? 'bg-gray-700';
}

/* ── Chevron icon ──────────────────────────────────────────────────────── */
function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 flex-shrink-0 ${open ? 'rotate-90' : ''}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

/* ── Article row ───────────────────────────────────────────────────────── */
function ArticleRow({ article }: { article: SiteIndexArticle }) {
  const dateStr = new Date(article.publishDate).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <li className="group">
      <Link
        href={article.slug}
        className="block py-3 px-3 sm:px-4 -mx-3 sm:-mx-4 rounded-lg hover:bg-gray-50 transition-colors"
      >
        <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
          <div className="flex-1 min-w-0">
            <p className="text-sm sm:text-base font-medium text-gray-900 group-hover:text-blue-700 transition-colors leading-snug">
              {article.title}
            </p>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 line-clamp-2 leading-relaxed">
              {article.description}
            </p>
            {/* Tags — mobile: hidden, desktop: shown */}
            {article.tags.length > 0 && (
              <div className="hidden sm:flex flex-wrap gap-1.5 mt-2">
                {article.tags.slice(0, 5).map((tag) => (
                  <Link
                    key={tag}
                    href={`/tags/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-[10px] px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 hover:text-gray-900 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {tag}
                  </Link>
                ))}
                {article.tags.length > 5 && (
                  <span className="text-[10px] px-2 py-0.5 text-gray-400">
                    +{article.tags.length - 5}
                  </span>
                )}
              </div>
            )}
          </div>
          <div className="flex items-center gap-3 text-xs text-gray-400 flex-shrink-0">
            <span className="hidden sm:inline">{article.author}</span>
            <time className="tabular-nums">{dateStr}</time>
          </div>
        </div>
      </Link>
    </li>
  );
}

/* ── Category section ──────────────────────────────────────────────────── */
function CategorySection({
  category,
  isOpen,
  onToggle,
  activeTag,
}: {
  category: SiteIndexCategory;
  isOpen: boolean;
  onToggle: () => void;
  activeTag: string | null;
}) {
  const filteredArticles = activeTag
    ? category.articles.filter((a) => a.tags.some((t) => t.toLowerCase() === activeTag.toLowerCase()))
    : category.articles;

  if (filteredArticles.length === 0) return null;

  return (
    <section className="border-b border-gray-100 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-3 py-4 sm:py-5 px-4 sm:px-6 text-left hover:bg-gray-50 transition-colors group"
        aria-expanded={isOpen}
      >
        <ChevronIcon open={isOpen} />
        <span
          className={`inline-block w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full flex-shrink-0 ${getCategoryColor(category.name)}`}
        />
        <span className="text-base sm:text-lg font-semibold text-gray-900 flex-1 truncate">
          {category.name}
        </span>
        <span className="text-xs sm:text-sm text-gray-400 font-medium tabular-nums flex-shrink-0">
          {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'}
        </span>
      </button>

      {isOpen && (
        <div className="pb-4 px-4 sm:px-6">
          <ul className="ml-6 sm:ml-8 space-y-0 divide-y divide-gray-50">
            {filteredArticles.map((article) => (
              <ArticleRow key={article.slug} article={article} />
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

/* ── Main client component ─────────────────────────────────────────────── */
export function SiteIndexTree({
  categories,
  allTags,
}: {
  categories: SiteIndexCategory[];
  allTags: { tag: string; count: number }[];
}) {
  const [openCategories, setOpenCategories] = useState<Set<string>>(() => {
    // Open the first 3 categories by default
    return new Set(categories.slice(0, 3).map((c) => c.name));
  });
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllTags, setShowAllTags] = useState(false);

  /* Filter categories and articles by search */
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return categories;
    const q = searchQuery.toLowerCase();
    return categories
      .map((cat) => ({
        ...cat,
        articles: cat.articles.filter(
          (a) =>
            a.title.toLowerCase().includes(q) ||
            a.description.toLowerCase().includes(q) ||
            a.tags.some((t) => t.toLowerCase().includes(q)) ||
            a.author.toLowerCase().includes(q)
        ),
      }))
      .filter((cat) => cat.articles.length > 0);
  }, [categories, searchQuery]);

  /* Total visible articles */
  const totalVisible = filteredCategories.reduce((sum, cat) => {
    const arts = activeTag
      ? cat.articles.filter((a) => a.tags.some((t) => t.toLowerCase() === activeTag.toLowerCase()))
      : cat.articles;
    return sum + arts.length;
  }, 0);

  /* Tags to display */
  const visibleTags = showAllTags ? allTags : allTags.slice(0, 24);

  function toggleCategory(name: string) {
    setOpenCategories((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  }

  function expandAll() {
    setOpenCategories(new Set(filteredCategories.map((c) => c.name)));
  }

  function collapseAll() {
    setOpenCategories(new Set());
  }

  function handleTagClick(tag: string) {
    if (activeTag === tag) {
      setActiveTag(null);
    } else {
      setActiveTag(tag);
      // When filtering by tag, expand all categories that have matching articles
      const matching = new Set<string>();
      for (const cat of filteredCategories) {
        if (cat.articles.some((a) => a.tags.some((t) => t.toLowerCase() === tag.toLowerCase()))) {
          matching.add(cat.name);
        }
      }
      setOpenCategories(matching);
    }
  }

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
      {/* Search bar */}
      <div className="mb-6">
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search articles, tags, or authors…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg text-sm
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                       placeholder:text-gray-400"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Tags cloud */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Filter by Topic
          </h2>
          {activeTag && (
            <button
              onClick={() => setActiveTag(null)}
              className="text-xs text-blue-600 hover:text-blue-800 font-medium"
            >
              Clear filter
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {visibleTags.map(({ tag, count }) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all
                ${
                  activeTag === tag
                    ? 'bg-gray-900 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              {tag}
              <span
                className={`text-[10px] sm:text-xs ${
                  activeTag === tag ? 'text-gray-300' : 'text-gray-400'
                }`}
              >
                {count}
              </span>
            </button>
          ))}
          {!showAllTags && allTags.length > 24 && (
            <button
              onClick={() => setShowAllTags(true)}
              className="px-3 py-1.5 text-xs sm:text-sm font-medium text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-full transition-colors"
            >
              +{allTags.length - 24} more topics
            </button>
          )}
          {showAllTags && allTags.length > 24 && (
            <button
              onClick={() => setShowAllTags(false)}
              className="px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-full transition-colors"
            >
              Show less
            </button>
          )}
        </div>
      </div>

      {/* Controls bar */}
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
        <p className="text-sm text-gray-500">
          {activeTag ? (
            <>
              Showing <span className="font-semibold text-gray-900">{totalVisible}</span> articles tagged{' '}
              <span className="font-semibold text-gray-900">&ldquo;{activeTag}&rdquo;</span>
            </>
          ) : (
            <>
              <span className="font-semibold text-gray-900">{totalVisible}</span> articles
            </>
          )}
        </p>
        <div className="flex gap-2">
          <button
            onClick={expandAll}
            className="text-xs text-gray-500 hover:text-gray-900 font-medium px-2 py-1 rounded hover:bg-gray-100 transition-colors"
          >
            Expand all
          </button>
          <button
            onClick={collapseAll}
            className="text-xs text-gray-500 hover:text-gray-900 font-medium px-2 py-1 rounded hover:bg-gray-100 transition-colors"
          >
            Collapse all
          </button>
        </div>
      </div>

      {/* Category tree */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((cat) => (
            <CategorySection
              key={cat.name}
              category={cat}
              isOpen={openCategories.has(cat.name)}
              onToggle={() => toggleCategory(cat.name)}
              activeTag={activeTag}
            />
          ))
        ) : (
          <div className="py-16 text-center">
            <p className="text-gray-400 text-sm">No articles match your search.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveTag(null);
              }}
              className="mt-3 text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* Footer note */}
      <p className="mt-8 text-center text-xs text-gray-400">
        Index updated automatically from the OzoneNews content registry.
      </p>
    </main>
  );
}
