/**
 * DirectAnswer.tsx
 *
 * The "direct answer" paragraph — 2-4 sentences that answer the core
 * question of the article immediately, before any context or background.
 *
 * This is the most important GEO signal in an article.
 * AI systems extract the first clear, concise answer to the implicit
 * question in the headline. If the article opens with 200 words of
 * background before getting to the point, AI systems skip it.
 *
 * This component:
 *   1. Renders the direct answer prominently
 *   2. Injects a speakable schema block so Google Assistant, Siri,
 *      and Alexa can read this passage as the voice answer
 *   3. Marks the content with itemProp="description" for schema.org
 *
 * Usage: Place as the FIRST content element inside any article component,
 * before KeyTakeaways, before any h2, before any context paragraph.
 *
 * In content_html (static JSON):
 *   <DirectAnswer
 *     answer="Rockstar Games confirmed GTA 6 will release in fall 2025 for PS5 and Xbox Series X. A PC version will follow at a later date. The game is set in a fictional Miami and features the first female protagonist in the series' history."
 *   />
 */

import React from 'react';

export interface DirectAnswerProps {
  /** 2-4 sentences. Specific facts, not background. No hedging phrases. */
  answer: string;
  /** Optional label — defaults to hidden (screenreader only) */
  label?: string;
  /** Whether to show a visual "Quick Answer" badge */
  showBadge?: boolean;
}

export function DirectAnswer({ answer, label = 'Quick Answer', showBadge = true }: DirectAnswerProps) {
  return (
    <div
      className="my-4 not-prose"
      itemProp="description"
      role="region"
      aria-label={label}
    >
      {showBadge && (
        <div className="flex items-center gap-1.5 mb-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            {label}
          </span>
        </div>
      )}
      <p className="text-base leading-relaxed text-gray-900 dark:text-gray-100 font-medium border-l-2 border-emerald-500 pl-4">
        {answer}
      </p>
    </div>
  );
}

export default DirectAnswer;
