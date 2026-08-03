'use client';

import { useState, useEffect, useCallback, useRef, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

interface SearchResult {
  slug: string;
  title: string;
  description: string;
  category: string;
  author: string;
  authorSlug?: string;
  publishDate: string;
  imageUrl?: string;
  tags: string[];
}

function SearchContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') ?? '';
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Keyboard shortcut: Cmd+K / Ctrl+K
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
        inputRef.current?.select();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const doSearch = useCallback(async (q: string) => {
    const trimmed = q.trim();
    if (trimmed.length < 2) {
      setResults([]);
      setTotal(0);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(trimmed)}&limit=20`);
      const data = await res.json();
      setResults(data.results);
      setTotal(data.total);
    } catch {
      setResults([]);
      setTotal(0);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => doSearch(query), 200);
    return () => clearTimeout(timeout);
  }, [query, doSearch]);

  const handleInput = (val: string) => {
    setQuery(val);
    const url = val.trim() ? `/search?q=${encodeURIComponent(val.trim())}` : '/search';
    router.replace(url, { scroll: false });
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setTotal(0);
    router.replace('/search', { scroll: false });
    inputRef.current?.focus();
  };

  const hasResults = results.length > 0;
  const hasSearched = query.trim().length >= 2 && !loading;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Search bar */}
      <div className="relative mb-8">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => handleInput(e.target.value)}
          placeholder="Search articles, topics, authors..."
          className="w-full pl-12 pr-20 py-4 text-lg bg-white border border-gray-300 rounded-xl
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                     placeholder-gray-400 shadow-sm"
          aria-label="Search articles"
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute inset-y-0 right-4 flex items-center text-gray-400 hover:text-gray-600"
            aria-label="Clear search"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Shortcut hint */}
      <div className="flex items-center gap-2 text-xs text-gray-400 mb-8">
        <kbd className="px-2 py-0.5 rounded bg-gray-100 border border-gray-200 font-mono text-gray-500">Cmd+K</kbd>
        <span>to search from anywhere</span>
      </div>

      {/* Loading */}
      {loading && (
        <div className="flex items-center justify-center py-12">
          <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* No results */}
      {hasSearched && !hasResults && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No results found for &ldquo;<strong>{query.trim()}</strong>&rdquo;</p>
          <p className="text-gray-400 text-sm mt-2">Try a different search term or browse our <Link href="/space" className="text-blue-600 hover:text-blue-800 underline">Space</Link>, <Link href="/science" className="text-blue-600 hover:text-blue-800 underline">Science</Link>, or <Link href="/rockets" className="text-blue-600 hover:text-blue-800 underline">Rockets</Link> sections.</p>
        </div>
      )}

      {/* Results */}
      {hasResults && (
        <>
          <p className="text-sm text-gray-500 mb-6">{total} result{total !== 1 ? 's' : ''} for &ldquo;{query.trim()}&rdquo;</p>
          <ul className="space-y-6">
            {results.map((r) => (
              <li key={r.slug}>
                <Link
                  href={r.slug}
                  className="block group"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[0.65rem] font-bold uppercase tracking-wide bg-gray-100 text-gray-500">
                          {r.category}
                        </span>
                        {r.publishDate && (
                          <time className="text-xs text-gray-400" dateTime={r.publishDate}>
                            {new Date(r.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </time>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">
                        {r.title}
                      </h3>
                      {r.description && (
                        <p className="text-sm text-gray-500 mt-1 line-clamp-2">{r.description}</p>
                      )}
                      <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
                        {r.author && (
                          <span>
                            By{' '}
                            <span className="text-gray-600 font-medium">{r.author}</span>
                          </span>
                        )}
                        {r.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="text-gray-400">#{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="w-full h-14 bg-gray-100 rounded-xl animate-pulse" />
      </div>
    }>
      <SearchContent />
    </Suspense>
  );
}
