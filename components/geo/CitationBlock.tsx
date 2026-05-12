/**
 * CitationBlock.tsx
 *
 * A structured "answer block" designed for AI extraction and citation.
 *
 * When AI systems like ChatGPT, Perplexity, and Copilot scan a page,
 * they look for clearly structured, extractable units of information.
 * A CitationBlock is exactly that — a self-contained answer to one question,
 * marked up with semantic HTML and schema.org markup so AI systems can:
 *   1. Identify it as a definitive answer
 *   2. Extract the key facts without ambiguity
 *   3. Attribute it correctly to ObjectWire
 *
 * Usage in content_html (static JSON):
 *   <CitationBlock
 *     question="What is the GTA 6 release date?"
 *     answer="Rockstar Games has confirmed GTA 6 will release in fall 2025..."
 *     type="definition"
 *     source="Rockstar Games"
 *     sourceUrl="https://rockstargames.com/..."
 *     stat="Fall 2025"
 *     statLabel="Confirmed Release Window"
 *   />
 *
 * Types:
 *   definition — defines a term or answers "what is X?"
 *   stat       — surfaces a key number, date, or data point
 *   comparison — pros/cons, A vs B
 *   timeline   — ordered sequence of events
 *   verdict    — editorial conclusion backed by evidence
 */

import React from 'react';

export type CitationBlockType = 'definition' | 'stat' | 'comparison' | 'timeline' | 'verdict';

export interface CitationBlockProps {
  /** The question this block answers — becomes the visible heading */
  question: string;
  /** The direct answer — 2-4 sentences max. Be specific. */
  answer: string;
  /** Block type — controls visual style */
  type?: CitationBlockType;
  /** Primary stat, figure, or date to highlight */
  stat?: string;
  /** Label for the stat (e.g. "Confirmed Release Window") */
  statLabel?: string;
  /** Source attribution (publication or org name) */
  source?: string;
  /** URL to the primary source — opens in new tab */
  sourceUrl?: string;
  /** Additional data points, shown as a bullet list */
  keyFacts?: string[];
  /** Optional updated date — important for freshness signals */
  updatedAt?: string;
}

const TYPE_STYLES: Record<CitationBlockType, { border: string; bg: string; badge: string; badgeText: string }> = {
  definition: {
    border: 'border-blue-500',
    bg:     'bg-blue-50 dark:bg-blue-950/30',
    badge:  'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
    badgeText: 'DEFINITION',
  },
  stat: {
    border: 'border-emerald-500',
    bg:     'bg-emerald-50 dark:bg-emerald-950/30',
    badge:  'bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200',
    badgeText: 'KEY STAT',
  },
  comparison: {
    border: 'border-violet-500',
    bg:     'bg-violet-50 dark:bg-violet-950/30',
    badge:  'bg-violet-100 dark:bg-violet-900 text-violet-800 dark:text-violet-200',
    badgeText: 'COMPARISON',
  },
  timeline: {
    border: 'border-amber-500',
    bg:     'bg-amber-50 dark:bg-amber-950/30',
    badge:  'bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200',
    badgeText: 'TIMELINE',
  },
  verdict: {
    border: 'border-rose-500',
    bg:     'bg-rose-50 dark:bg-rose-950/30',
    badge:  'bg-rose-100 dark:bg-rose-900 text-rose-800 dark:text-rose-200',
    badgeText: 'VERDICT',
  },
};

export function CitationBlock({
  question,
  answer,
  type = 'definition',
  stat,
  statLabel,
  source,
  sourceUrl,
  keyFacts,
  updatedAt,
}: CitationBlockProps) {
  const styles = TYPE_STYLES[type];

  // JSON-LD for this specific Q&A pair (FAQPage item)
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: answer + (source ? ` Source: ${source}.` : ''),
        },
      },
    ],
  };

  return (
    <>
      {/* JSON-LD — machine-readable answer block */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Visual citation block */}
      <div
        className={`my-6 rounded-xl border-l-4 ${styles.border} ${styles.bg} p-5 not-prose`}
        itemScope
        itemType="https://schema.org/Question"
      >
        {/* Block type badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className={`inline-block rounded px-2 py-0.5 text-xs font-bold tracking-wider ${styles.badge}`}>
            {styles.badgeText}
          </span>
          {updatedAt && (
            <span className="text-xs text-gray-400">Updated {updatedAt}</span>
          )}
        </div>

        {/* Question heading */}
        <h3
          className="text-base font-bold text-gray-900 dark:text-gray-100 mb-2"
          itemProp="name"
        >
          {question}
        </h3>

        {/* Stat callout */}
        {stat && (
          <div className="mb-3 flex items-baseline gap-2">
            <span className="text-2xl font-black text-gray-900 dark:text-white">{stat}</span>
            {statLabel && (
              <span className="text-sm text-gray-500 dark:text-gray-400">{statLabel}</span>
            )}
          </div>
        )}

        {/* Direct answer */}
        <div
          className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
          itemScope
          itemType="https://schema.org/Answer"
          itemProp="acceptedAnswer"
        >
          <span itemProp="text">{answer}</span>
        </div>

        {/* Key facts list */}
        {keyFacts && keyFacts.length > 0 && (
          <ul className="mt-3 space-y-1">
            {keyFacts.map((fact, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                <span className="mt-0.5 text-xs text-gray-400">▸</span>
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Source attribution */}
        {source && (
          <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
            <span className="text-xs text-gray-400">Source: </span>
            {sourceUrl ? (
              <a
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-600 hover:text-blue-800 underline"
              >
                {source}
              </a>
            ) : (
              <span className="text-xs text-gray-500">{source}</span>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default CitationBlock;
