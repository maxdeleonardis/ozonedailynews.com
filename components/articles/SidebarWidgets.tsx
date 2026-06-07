// components/articles/SidebarWidgets.tsx
// Shared sidebar widgets for all article DB components.
// Server-component-safe — no 'use client', no browser APIs.
// Used by: NewsArticleDB, ArticlePageDB, CreatorArticleDB.
// JackArticle.tsx (client component) has its own equivalent inline JSX.

import Link from 'next/link';
import type { TocHeading } from '@/lib/toc-utils';

export interface AuthorCardData {
  slug: string;
  name: string;
  jobTitle?: string;
  initials?: string;
  avatarUrl?: string;
}

/** Clickable author card — full card links to /authors/[slug]. */
export function AuthorCard({ author }: { author: AuthorCardData }) {
  const initials =
    author.initials ??
    author.name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();

  return (
    <Link
      href={`/authors/${author.slug}`}
      className="flex items-center gap-3 border border-gray-200 p-4 mb-6 hover:bg-gray-50 transition-colors group"
    >
      <div className="shrink-0">
        {author.avatarUrl ? (
          <img
            src={author.avatarUrl}
            alt={author.name}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center">
            <span className="text-white font-bold text-sm">{initials}</span>
          </div>
        )}
      </div>
      <div className="min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-0.5">
          Written by
        </p>
        <p className="font-bold text-sm group-hover:underline leading-tight">{author.name}</p>
        {author.jobTitle && (
          <p className="text-xs text-gray-500 mt-0.5 truncate">{author.jobTitle}</p>
        )}
      </div>
    </Link>
  );
}

/** Table of contents — numbered H2 anchor list. Renders nothing if < 2 headings. */
export function TocNav({ headings }: { headings: TocHeading[] }) {
  if (headings.length < 2) return null;
  return (
    <div className="border border-gray-200 mb-8">
      <div className="bg-black text-white px-4 py-2">
        <h3 className="font-bold text-sm tracking-wider">IN THIS ARTICLE</h3>
      </div>
      <nav className="p-4" aria-label="Table of contents">
        <ol className="space-y-2.5">
          {headings.map((h, i) => (
            <li key={h.id} className="flex items-start gap-2.5">
              <span className="text-gray-400 font-mono text-[11px] mt-0.5 shrink-0 tabular-nums">
                {String(i + 1).padStart(2, '0')}
              </span>
              <a
                href={`#${h.id}`}
                className="text-sm text-gray-700 hover:text-black hover:underline leading-snug"
              >
                {h.text}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
