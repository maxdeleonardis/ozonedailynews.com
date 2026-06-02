'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// =============================================================================
// SOURCES INTERLINK COMPONENT
//
// Named exports in this file:
//
//  1. <SourcesInterlink />   — Bottom-of-article sources + internal cross-links grid.
//  2. <CitationRef n={1} />  — Inline superscript citation [1] that scrolls to source.
//  3. <ReadMoreBlock />       — Mid-article contextual callout linking to one related article.
//  4. <HubBanner />           — Full-width hub backlink strip (every article needs one).
//  5. <RelatedTagLinks />     — Row of clickable topic tag pills → /tags/[slug].
//
// ---------------------------------------------------------------------------
// INLINE CITATION PATTERN (in raw content_html JSON):
//   <sup id="cite-ref-1"><a href="#source-1" class="text-blue-600 underline font-mono text-[10px]">[1]</a></sup>
//
// HUB BANNER (in content_html JSON — place near top, first 3 paragraphs):
//   <HubBanner href="/youtube" label="YouTube Coverage Hub" description="All OzoneNews YouTube reporting" accentColor="blue" />
//
// READ MORE (in content_html JSON — drop between sections):
//   <ReadMoreBlock href="/youtube/adsense-cpm-rates-may-2026" label="YouTube AdSense CPM Rates May 2026" description="Personal finance hits $68 CPM. Full niche leaderboard." category="YouTube" />
//
// SOURCES INTERLINK (bottom of article):
//   <SourcesInterlink
//     sources={[{ number: 1, url: "https://...", title: "...", author: "Jane Doe", date: "May 7, 2026" }]}
//     internalLinks={[{ href: "/youtube", label: "YouTube Hub", category: "Hub" }]}
//     relatedTags={[{ label: "Creator Economy", slug: "creator-economy" }, { label: "YouTube", slug: "youtube" }]}
//     accentColor="blue"
//   />
// =============================================================================

// ---------------------------------------------------------------------------
// Shared accent maps
// ---------------------------------------------------------------------------
const ACCENT_BORDER: Record<string, string> = {
  blue:   'border-blue-500',
  green:  'border-green-600',
  orange: 'border-orange-500',
  purple: 'border-purple-500',
  red:    'border-red-500',
  gray:   'border-gray-400',
  cyan:   'border-cyan-500',
  yellow: 'border-yellow-500',
};

const ACCENT_TEXT: Record<string, string> = {
  blue:   'text-blue-600',
  green:  'text-green-600',
  orange: 'text-orange-600',
  purple: 'text-purple-600',
  red:    'text-red-600',
  gray:   'text-gray-600',
  cyan:   'text-cyan-600',
  yellow: 'text-yellow-600',
};

const ACCENT_BG: Record<string, string> = {
  blue:   'bg-blue-600',
  green:  'bg-green-700',
  orange: 'bg-orange-600',
  purple: 'bg-purple-700',
  red:    'bg-red-600',
  gray:   'bg-gray-700',
  cyan:   'bg-cyan-600',
  yellow: 'bg-yellow-500',
};

const ACCENT_PILL: Record<string, string> = {
  blue:   'bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800',
  green:  'bg-green-50 hover:bg-green-100 text-green-700 border-green-200 dark:bg-green-950/40 dark:text-green-300 dark:border-green-800',
  orange: 'bg-orange-50 hover:bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-950/40 dark:text-orange-300 dark:border-orange-800',
  purple: 'bg-purple-50 hover:bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-800',
  red:    'bg-red-50 hover:bg-red-100 text-red-700 border-red-200 dark:bg-red-950/40 dark:text-red-300 dark:border-red-800',
  gray:   'bg-gray-100 hover:bg-gray-200 text-gray-700 border-gray-200 dark:bg-gray-800/60 dark:text-gray-300 dark:border-gray-700',
  cyan:   'bg-cyan-50 hover:bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-950/40 dark:text-cyan-300 dark:border-cyan-800',
  yellow: 'bg-yellow-50 hover:bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-950/40 dark:text-yellow-300 dark:border-yellow-800',
};

type AccentColor = 'blue' | 'green' | 'orange' | 'purple' | 'red' | 'gray' | 'cyan' | 'yellow';

function getDomain(url: string): string {
  try { return new URL(url).hostname.replace(/^www\./, ''); } catch { return url; }
}

// ---------------------------------------------------------------------------
// 1. CitationRef — inline superscript [n] for use inside JSX article content.
// ---------------------------------------------------------------------------
export function CitationRef({ n }: { n: number }) {
  return (
    <sup id={`cite-ref-${n}`}>
      <a
        href={`#source-${n}`}
        className="text-blue-600 hover:text-blue-800 underline font-mono text-[10px] ml-0.5 align-super"
      >
        [{n}]
      </a>
    </sup>
  );
}

// ---------------------------------------------------------------------------
// 2. HubBanner — full-width hub backlink strip.
//    Place inside the first 3 paragraphs of every article.
//    Every sub-article MUST link back to its parent hub.
//
//    Props:
//      href         — internal hub path, e.g. "/youtube"
//      label        — hub display name, e.g. "YouTube Coverage Hub"
//      description  — optional one-liner, e.g. "All OzoneNews YouTube reporting"
//      accentColor  — matches the topic vertical
//      eyebrow      — optional small label above, default "Coverage Hub"
// ---------------------------------------------------------------------------
export interface HubBannerProps {
  href: string;
  label: string;
  description?: string;
  accentColor?: AccentColor;
  eyebrow?: string;
}

export function HubBanner({
  href,
  label,
  description,
  accentColor = 'blue',
  eyebrow = 'Coverage Hub',
}: HubBannerProps) {
  const bgClass     = ACCENT_BG[accentColor]     ?? ACCENT_BG.blue;
  const borderClass = ACCENT_BORDER[accentColor] ?? ACCENT_BORDER.blue;

  return (
    <div className={`not-prose my-6 border-l-4 ${borderClass} rounded-r-lg overflow-hidden`}>
      <Link
        href={href}
        className="flex items-center justify-between gap-4 px-5 py-4 bg-gray-50 dark:bg-gray-900/60 hover:bg-gray-100 dark:hover:bg-gray-800/70 transition-colors group no-underline"
      >
        <div className="flex items-center gap-3 min-w-0">
          <span className={`shrink-0 inline-flex items-center justify-center w-8 h-8 rounded ${bgClass} text-white text-[10px] font-black uppercase tracking-wider`}>
            HUB
          </span>
          <div className="min-w-0">
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-0.5">
              {eyebrow}
            </p>
            <p className="font-bold text-sm text-gray-900 dark:text-gray-100 group-hover:underline truncate">
              {label}
            </p>
            {description && (
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 truncate">{description}</p>
            )}
          </div>
        </div>
        <span className="shrink-0 text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors text-lg font-light">
          →
        </span>
      </Link>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 3. ReadMoreBlock — mid-article contextual callout to one related article.
//    Drop between major sections to keep readers on-site.
//    Supports optional thumbnail image for visual weight.
//
//    In content_html JSON:
//      <ReadMoreBlock href="/path" label="Article Title" description="One sentence." category="Tech" />
// ---------------------------------------------------------------------------
export interface ReadMoreBlockProps {
  href: string;
  label: string;
  description?: string;
  category?: string;
  thumbnailSrc?: string;
  thumbnailAlt?: string;
  accentColor?: AccentColor;
}

export function ReadMoreBlock({
  href,
  label,
  description,
  category,
  thumbnailSrc,
  thumbnailAlt,
  accentColor = 'blue',
}: ReadMoreBlockProps) {
  const borderClass = ACCENT_BORDER[accentColor] ?? ACCENT_BORDER.blue;
  const textClass   = ACCENT_TEXT[accentColor]   ?? ACCENT_TEXT.blue;

  return (
    <div className={`not-prose my-7 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:border-blue-300 dark:hover:border-blue-600 transition-colors`}>
      <Link href={href} className="flex items-stretch gap-0 group no-underline">
        {/* Accent stripe */}
        <div className={`w-1 shrink-0 ${borderClass.replace('border-', 'bg-').replace('-500', '-500').replace('-600', '-600')}`} />

        {/* Text */}
        <div className="flex-1 min-w-0 px-5 py-4">
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">
            {category ? `Read More · ${category}` : 'Read More on OzoneNews'}
          </p>
          <p className={`font-bold text-sm text-gray-900 dark:text-gray-100 group-hover:${textClass} transition-colors leading-snug`}>
            {label}
          </p>
          {description && (
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1.5 leading-relaxed line-clamp-2">
              {description}
            </p>
          )}
        </div>

        {/* Optional thumbnail */}
        {thumbnailSrc && (
          <div className="shrink-0 w-24 h-full relative hidden sm:block">
            <Image
              src={thumbnailSrc}
              alt={thumbnailAlt ?? label}
              fill
              className="object-cover"
              sizes="96px"
            />
          </div>
        )}

        {/* Arrow */}
        <div className="shrink-0 flex items-center px-4 text-gray-300 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors text-xl font-light">
          →
        </div>
      </Link>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 4. RelatedTagLinks — horizontal row of topic tag pills.
//    Each tag links to /tags/[slug] for topical depth browsing.
//    Place at the bottom of articles above or inside SourcesInterlink.
//
//    In content_html JSON:
//      <RelatedTagLinks tags={[{"label":"Creator Economy","slug":"creator-economy"},{"label":"YouTube","slug":"youtube"}]} />
// ---------------------------------------------------------------------------
export interface TagItem {
  label: string;
  /** URL slug used in /tags/[slug] — lowercase, hyphen-separated */
  slug: string;
}

export interface RelatedTagLinksProps {
  tags: TagItem[];
  heading?: string;
  accentColor?: AccentColor;
}

export function RelatedTagLinks({
  tags,
  heading = 'Filed Under',
  accentColor = 'blue',
}: RelatedTagLinksProps) {
  if (!tags.length) return null;
  const pillClass = ACCENT_PILL[accentColor] ?? ACCENT_PILL.blue;

  return (
    <div className="not-prose mt-8 pt-5 border-t border-gray-200 dark:border-gray-700">
      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
        {heading}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Link
            key={tag.slug}
            href={`/tags/${tag.slug}`}
            className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full border text-[11px] font-bold transition-colors no-underline ${pillClass}`}
          >
            <span className="opacity-60">#</span>{tag.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 5. SourcesInterlink — full bottom-of-article block.
//    Numbered external sources + internal OzoneNews card grid.
// ---------------------------------------------------------------------------
export interface SourceItem {
  number: number;
  url: string;
  title: string;
  author?: string;
  date?: string;
  description?: string;
}

export interface InternalLinkItem {
  href: string;
  label: string;
  description?: string;
  /** Category chip shown above the label, e.g. "Gaming", "Tech", "Hub" */
  category?: string;
}

export interface SourcesInterlinkProps {
  sources?: SourceItem[];
  internalLinks?: InternalLinkItem[];
  /** Tag pills appended below the internal links — links to /tags/[slug] */
  relatedTags?: TagItem[];
  heading?: string;
  accentColor?: AccentColor;
}

export function SourcesInterlink({
  sources = [],
  internalLinks = [],
  relatedTags = [],
  heading = 'Sources',
  accentColor = 'blue',
}: SourcesInterlinkProps) {
  const borderClass = ACCENT_BORDER[accentColor] ?? ACCENT_BORDER.blue;
  const textClass   = ACCENT_TEXT[accentColor]   ?? ACCENT_TEXT.blue;

  if (!sources.length && !internalLinks.length && !relatedTags.length) return null;

  return (
    <div className={`mt-12 border-t-2 ${borderClass} pt-6 not-prose text-gray-900 dark:text-gray-100`}>

      {/* Section heading */}
      {(sources.length > 0 || heading !== 'Sources') && (
        <h2 className="text-xl font-bold mb-4">{heading}</h2>
      )}

      {/* External sources — numbered list, citation back-links */}
      {sources.length > 0 && (
        <ol className="list-none pl-0 space-y-3 mb-10 text-sm leading-relaxed">
          {sources.map((src) => (
            <li
              key={src.number}
              id={`source-${src.number}`}
              className="scroll-mt-24 flex gap-2"
            >
              <div className="shrink-0 flex items-start gap-1 pt-px">
                <a
                  href={`#cite-ref-${src.number}`}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 no-underline text-xs font-mono"
                  title="Back to citation"
                  aria-label={`Back to inline citation ${src.number}`}
                >
                  ↑
                </a>
                <span className="font-mono text-gray-500 dark:text-gray-400 text-xs">
                  [{src.number}]
                </span>
              </div>
              <div className="min-w-0">
                {src.author && (
                  <span className="text-gray-700 dark:text-gray-300">{src.author}. </span>
                )}
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${textClass} underline hover:opacity-80 break-words`}
                >
                  {src.title}
                </a>
                <span className="ml-1.5 text-[10px] font-mono text-gray-400 bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">
                  {getDomain(src.url)}
                </span>
                {src.date && (
                  <span className="text-gray-500 dark:text-gray-400"> ({src.date})</span>
                )}
                {src.description && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{src.description}</p>
                )}
              </div>
            </li>
          ))}
        </ol>
      )}

      {/* Internal OzoneNews cross-links — card grid */}
      {internalLinks.length > 0 && (
        <div className="mb-6">
          <h3 className="text-base font-bold mb-3 text-gray-900 dark:text-gray-100">Further Reading on OzoneNews</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {internalLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="group flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 bg-gray-50 dark:bg-gray-800/40 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all no-underline"
              >
                <div className="flex-1 min-w-0">
                  {link.category && (
                    <span className="block text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-0.5">
                      {link.category}
                    </span>
                  )}
                  <div className={`font-semibold text-sm text-gray-900 dark:text-gray-100 group-hover:${textClass} transition-colors truncate`}>
                    {link.label}
                  </div>
                  {link.description && (
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-1">
                      {link.description}
                    </div>
                  )}
                </div>
                <span className={`ml-3 text-gray-400 group-hover:${textClass} transition-colors flex-shrink-0 text-base`}>
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Related tag pills */}
      {relatedTags.length > 0 && (
        <RelatedTagLinks tags={relatedTags} accentColor={accentColor} />
      )}
    </div>
  );
}
