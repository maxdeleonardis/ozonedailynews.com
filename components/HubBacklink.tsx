import Link from 'next/link';
import type { TopicTagType } from '@/components/articles/NewsArticle';

// ─────────────────────────────────────────────────────────────────────────────
// HUB MAP
// Maps category + topicTag → hub URL, display label, accent color classes
// ─────────────────────────────────────────────────────────────────────────────

interface HubEntry {
  href: string;
  label: string;
  /** Tailwind border + text color classes */
  accent: string;
  emoji: string;
}

const TOPIC_TAG_MAP: Partial<Record<TopicTagType, HubEntry>> = {
  space:         { href: '/space',        label: 'Space',         accent: 'border-indigo-500 text-indigo-600 dark:text-indigo-400', emoji: '🚀' },
  rockets:       { href: '/rockets',      label: 'Rockets',       accent: 'border-blue-500   text-blue-600   dark:text-blue-400',   emoji: '🛰️' },
  earth:         { href: '/earth',        label: 'Earth',         accent: 'border-teal-500   text-teal-600   dark:text-teal-400',   emoji: '🌍' },
  oceans:        { href: '/oceans',       label: 'Oceans',        accent: 'border-cyan-500   text-cyan-600   dark:text-cyan-400',   emoji: '🌊' },
  climate:       { href: '/climate',      label: 'Climate',       accent: 'border-emerald-500 text-emerald-600 dark:text-emerald-400', emoji: '🌡️' },
  geology:       { href: '/geology',      label: 'Geology',       accent: 'border-violet-500 text-violet-600 dark:text-violet-400', emoji: '⛰️' },
  archaeology:   { href: '/archaeology',  label: 'Archaeology',   accent: 'border-rose-500   text-rose-600   dark:text-rose-400',   emoji: '🏛️' },
  physics:       { href: '/science',      label: 'Physics',       accent: 'border-purple-500 text-purple-600 dark:text-purple-400', emoji: '⚛️' },
  astronomy:     { href: '/science',      label: 'Astronomy',     accent: 'border-sky-500    text-sky-600    dark:text-sky-400',    emoji: '🔭' },
  science:       { href: '/science',      label: 'Science',       accent: 'border-gray-500   text-gray-600   dark:text-gray-400',   emoji: '🔬' },
};

/** Category string → hub. Used as fallback when topicTag is absent or unmapped. */
const CATEGORY_MAP: Record<string, HubEntry> = {
  'Space':         TOPIC_TAG_MAP.space!,
  'space':         TOPIC_TAG_MAP.space!,
  'Earth':         TOPIC_TAG_MAP.earth!,
  'earth':         TOPIC_TAG_MAP.earth!,
  'Oceans':        TOPIC_TAG_MAP.oceans!,
  'oceans':        TOPIC_TAG_MAP.oceans!,
  'Climate':       TOPIC_TAG_MAP.climate!,
  'climate':       TOPIC_TAG_MAP.climate!,
  'Geology':       TOPIC_TAG_MAP.geology!,
  'geology':       TOPIC_TAG_MAP.geology!,
  'Archaeology':   TOPIC_TAG_MAP.archaeology!,
  'archaeology':   TOPIC_TAG_MAP.archaeology!,
  'Science':       TOPIC_TAG_MAP.science!,
  'science':       TOPIC_TAG_MAP.science!,
};

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

interface HubBacklinkProps {
  category: string;
  topicTag?: TopicTagType;
}

/**
 * HubBacklink — compact sidebar banner linking the current article back to its
 * parent hub page. Renders above <RelatedArticles> in the sticky sidebar.
 * Returns null if no hub exists for this category/topicTag so it's always safe
 * to render unconditionally.
 */
export function HubBacklink({ category, topicTag }: HubBacklinkProps) {
  const hub =
    (topicTag && TOPIC_TAG_MAP[topicTag]) ??
    CATEGORY_MAP[category] ??
    null;

  if (!hub) return null;

  return (
    <div className={`mb-4 border-l-4 ${hub.accent.split(' ')[0]} bg-white dark:bg-gray-900 rounded-r-lg p-3 shadow-sm`}>
      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">
        Coverage Hub
      </p>
      <Link
        href={hub.href}
        className={`flex items-center gap-1.5 ${hub.accent.split(' ').slice(1).join(' ')} font-semibold text-sm hover:underline`}
      >
        <span className="text-base leading-none">{hub.emoji}</span>
        <span>All {hub.label} Coverage</span>
        <svg className="w-3 h-3 ml-auto flex-shrink-0 opacity-60" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 6h8M7 3l3 3-3 3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </div>
  );
}
