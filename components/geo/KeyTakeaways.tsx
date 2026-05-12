/**
 * KeyTakeaways.tsx
 *
 * A structured "Key Takeaways" section optimized for AI extraction.
 *
 * AI systems scan for summary blocks near the top of articles.
 * This component renders a visually prominent takeaways list
 * AND injects an ItemList schema that explicitly marks these
 * points as the article's core claims — making them directly
 * extractable by ChatGPT, Perplexity, Copilot, and Google SGE.
 *
 * Placement: Immediately after the opening paragraph (or lede),
 * before the first <h2>. This is the GEO equivalent of a subhed.
 *
 * Usage in content_html (static JSON):
 *   <KeyTakeaways items={[
 *     "GTA 6 has an official fall 2025 release window confirmed by Rockstar",
 *     "The game will launch on PS5 and Xbox Series X first — PC later",
 *     "Take-Two CEO confirmed the trailer had 93 million views in 24 hours",
 *   ]} />
 *
 * Usage in TSX pages:
 *   <KeyTakeaways
 *     items={['...', '...', '...']}
 *     label="Key Takeaways"    // optional override
 *     color="blue"             // optional accent
 *   />
 */

import React from 'react';

export interface KeyTakeawaysProps {
  items: string[];
  /** Override the heading label */
  label?: string;
  /** Accent color */
  color?: 'blue' | 'green' | 'purple' | 'amber' | 'rose';
  /** Article title — used in schema for context */
  articleTitle?: string;
}

const COLOR_MAP = {
  blue:   { border: 'border-blue-500',  icon: 'text-blue-500',  bg: 'bg-blue-50 dark:bg-blue-950/20' },
  green:  { border: 'border-emerald-500', icon: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-950/20' },
  purple: { border: 'border-violet-500', icon: 'text-violet-500', bg: 'bg-violet-50 dark:bg-violet-950/20' },
  amber:  { border: 'border-amber-500', icon: 'text-amber-500',  bg: 'bg-amber-50 dark:bg-amber-950/20' },
  rose:   { border: 'border-rose-500',  icon: 'text-rose-500',   bg: 'bg-rose-50 dark:bg-rose-950/20' },
};

export function KeyTakeaways({
  items,
  label = 'Key Takeaways',
  color = 'blue',
  articleTitle,
}: KeyTakeawaysProps) {
  const styles = COLOR_MAP[color];

  // ItemList schema — tells AI systems these are the article's core claims
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    ...(articleTitle ? { name: `Key Takeaways: ${articleTitle}` } : {}),
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className={`my-6 rounded-xl border-l-4 ${styles.border} ${styles.bg} px-5 py-4 not-prose`}>
        <div className="flex items-center gap-2 mb-3">
          {/* Bookmark icon */}
          <svg className={`w-4 h-4 ${styles.icon} flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
          </svg>
          <span className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
            {label}
          </span>
        </div>
        <ul className="space-y-2">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className={`mt-1 flex-shrink-0 w-4 h-4 rounded-full ${styles.icon} flex items-center justify-center`}>
                <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" r="3" />
                </svg>
              </span>
              <span className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default KeyTakeaways;
