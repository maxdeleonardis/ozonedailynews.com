'use client';

import { useState, useEffect } from 'react';

interface Props {
  /** Article slug, e.g. "/tech/some-article" */
  slug: string;
}

function formatViews(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return n.toLocaleString();
}

/**
 * Fetches the 7-day GA4 pageview count for a single article slug and
 * renders a small pill badge. Renders nothing if views = 0 or fetch fails.
 *
 * Usage:
 *   <ArticleViews slug="/tech/some-article" />
 */
export default function ArticleViews({ slug }: Props) {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    if (!slug) return;

    fetch(`/api/article-views?slug=${encodeURIComponent(slug)}`)
      .then((r) => r.json())
      .then((data: { views: number; source: string }) => {
        if (data.source === 'ga4' && data.views > 0) {
          setViews(data.views);
        }
      })
      .catch(() => {
        // Silent fail — don't show badge if analytics unavailable
      });
  }, [slug]);

  if (views === null) return null;

  return (
    <span
      className="inline-flex items-center gap-1 text-[11px] font-semibold text-gray-500 bg-gray-100 border border-gray-200 rounded-full px-2.5 py-0.5 select-none"
      title="Views in the last 7 days"
    >
      {/* Eye icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-3 h-3 text-gray-400"
        aria-hidden="true"
      >
        <path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
        <path
          fillRule="evenodd"
          d="M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41Z"
          clipRule="evenodd"
        />
      </svg>
      <span>{formatViews(views)}</span>
      <span className="text-gray-400 font-normal">7d</span>
    </span>
  );
}
