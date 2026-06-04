'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { ProfilePageSchema } from '@/components/articles/ProfilePageSchema';
import { Breadcrumb } from '@/components/nav/Breadcrumb';
import ArticleFooter from '@/components/articles/ArticleFooter';
import ArticleViewTracker from '@/components/articles/ArticleViewTracker';

// =============================================================================
// CREATOR ARTICLE — Quick Article layout for OzoneDaily
//
// Optimized for: Space, science, and technology quick-read pieces (300-500 words)
// Editorial identity: OzoneDaily — science journalism, space exploration,
//   atmospheric science, global sustainability
//
// All export names are preserved from the original for Supabase/import compat.
// When Max says "Quick Article" he means this component.
// =============================================================================

export type CreatorBadgeStyle = 'default' | 'achievement' | 'secondary';

export interface CreatorBadge {
  label: string;
  style?: CreatorBadgeStyle;
}

export interface CreatorInfoRow {
  label: string;
  value: string | React.ReactNode;
  href?: string;
}

export interface CreatorTimelineItem {
  year: string;
  event: string;
}

export interface CreatorTableColumn {
  key: string;
  header: string;
  render?: (value: string) => React.ReactNode;
}

export interface CreatorTableRow {
  [key: string]: string;
}

export interface CreatorCalloutItem {
  label: string;
  detail: string;
}

export interface CreatorCTAButton {
  href: string;
  label: string;
  icon?: string;
  variant?: 'primary' | 'secondary' | 'accent';
}

export interface CreatorRelatedLink {
  href: string;
  label: string;
}

export type CreatorCalloutColor = 'yellow' | 'blue' | 'green' | 'red' | 'purple';

export interface CreatorSidebarCallout {
  title: string;
  body: string | React.ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
  color?: CreatorCalloutColor;
}

export interface CreatorSchema {
  title: string;
  description: string;
  publishedTime: string;
  modifiedTime: string;
  author: string;
  authorUrl?: string;
  articleUrl: string;
  imageUrl?: string;
  section: string;
  keywords: string[];
}

export interface CreatorHero {
  image: { src: string; alt: string };
  gradient?: string;
  badges: CreatorBadge[];
  name: string;
  subtitle: string;
  description: string;
  ctaButtons?: CreatorCTAButton[];
}

export interface CreatorSidebar {
  infobox: {
    image: { src: string; alt: string };
    name: string;
    subtitle: string;
    rows: CreatorInfoRow[];
  };
  callout?: CreatorSidebarCallout;
  timeline?: CreatorTimelineItem[];
  relatedLinks?: CreatorRelatedLink[];
  meta: {
    publishedDate: string;
    updatedDate?: string;
    author: string;
    category: string;
  };
}

export interface CreatorArticleProps {
  schema: CreatorSchema;
  breadcrumbs: Array<{ name: string; item: string }>;
  hero: CreatorHero;
  sidebar: CreatorSidebar;
  tiktokEmbed?: boolean;
  tags?: string[];
  relatedCreators?: Array<{
    name: string;
    subtitle: string;
    imageSrc: string;
    imageAlt: string;
    href: string;
  }>;
  children: React.ReactNode;
}

// Badge styles
const badgeStyleMap: Record<CreatorBadgeStyle, React.CSSProperties> = {
  default: {
    background: 'rgba(14, 165, 233, 0.18)',
    color: '#38bdf8',
    fontSize: '0.65rem',
    fontWeight: 800,
    padding: '3px 10px',
    borderRadius: 3,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    border: '1px solid rgba(56,189,248,0.3)',
  },
  secondary: {
    background: 'rgba(255,255,255,0.08)',
    color: 'rgba(255,255,255,0.7)',
    fontSize: '0.65rem',
    fontWeight: 600,
    padding: '3px 10px',
    borderRadius: 3,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    border: '1px solid rgba(255,255,255,0.15)',
  },
  achievement: {
    background: '#0ea5e9',
    color: '#fff',
    fontSize: '0.65rem',
    fontWeight: 800,
    padding: '3px 10px',
    borderRadius: 3,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
  },
};

const calloutColorMap: Record<CreatorCalloutColor, { wrapper: string; cta: string }> = {
  yellow: { wrapper: 'bg-amber-50 border-amber-300',     cta: 'bg-amber-500 hover:bg-amber-600 text-white' },
  blue:   { wrapper: 'bg-sky-50 border-sky-300',         cta: 'bg-sky-600 hover:bg-sky-700 text-white' },
  green:  { wrapper: 'bg-emerald-50 border-emerald-300', cta: 'bg-emerald-600 hover:bg-emerald-700 text-white' },
  red:    { wrapper: 'bg-red-50 border-red-300',         cta: 'bg-red-600 hover:bg-red-700 text-white' },
  purple: { wrapper: 'bg-violet-50 border-violet-300',   cta: 'bg-violet-600 hover:bg-violet-700 text-white' },
};

// =============================================================================
// MAIN COMPONENT
// =============================================================================

export function CreatorArticle({
  schema,
  breadcrumbs,
  hero,
  sidebar,
  tiktokEmbed = false,
  tags,
  relatedCreators,
  children,
}: CreatorArticleProps) {
  const articleSlug = schema.articleUrl.replace(/^https?:\/\/[^/]+/, '');

  const sectionColor = (() => {
    const cat = sidebar.meta.category.toLowerCase();
    if (cat.includes('space') || cat.includes('nasa') || cat.includes('rocket')) return '#0ea5e9';
    if (cat.includes('climate') || cat.includes('sustain') || cat.includes('earth')) return '#10b981';
    if (cat.includes('tech') || cat.includes('ai')) return '#6366f1';
    if (cat.includes('physics') || cat.includes('science')) return '#f59e0b';
    return '#0ea5e9';
  })();

  return (
    <>
      <ProfilePageSchema
        personName={hero.name}
        pageTitle={schema.title}
        description={schema.description}
        pageUrl={schema.articleUrl}
        imageUrl={schema.imageUrl}
        publishedTime={schema.publishedTime}
        modifiedTime={schema.modifiedTime}
        sameAs={sidebar.infobox.rows.map((r) => (typeof r.href === 'string' ? r.href : '')).filter(Boolean)}
        keywords={schema.keywords}
      />
      {tiktokEmbed && <Script src="https://www.tiktok.com/embed.js" strategy="lazyOnload" />}

      <div className="min-h-screen bg-white">

        {/* Breadcrumb */}
        <div className="border-b border-gray-100 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-3">
            <Breadcrumb items={breadcrumbs} />
          </div>
        </div>

        {/* Hero — cinematic full-width with overlay title */}
        <div className="relative w-full bg-gray-950" style={{ aspectRatio: '21/9', maxHeight: '520px' }}>
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(3,7,18,0.1) 0%, rgba(3,7,18,0.0) 25%, rgba(3,7,18,0.70) 75%, rgba(3,7,18,0.96) 100%)',
            }}
          />
          <div className="absolute inset-x-0 bottom-0 max-w-6xl mx-auto px-4 pb-6 sm:pb-10">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span
                className="text-xs font-black tracking-widest uppercase px-2.5 py-1"
                style={{ background: sectionColor, color: '#fff', borderRadius: 3 }}
              >
                {sidebar.meta.category}
              </span>
              {hero.badges.map((badge, i) => (
                <span key={i} style={badgeStyleMap[badge.style ?? 'secondary']}>{badge.label}</span>
              ))}
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight max-w-3xl mb-2">
              {hero.name}
            </h1>
            <p className="text-white/80 text-sm sm:text-base max-w-2xl leading-relaxed">
              {hero.subtitle}
            </p>
          </div>
        </div>

        {/* Dark byline bar */}
        <div className="bg-gray-950 border-b border-gray-800">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-400">
            <span>
              By{' '}
              <span className="text-sky-400 font-semibold">{sidebar.meta.author}</span>
            </span>
            <span className="text-gray-700" aria-hidden>|</span>
            <time dateTime={schema.publishedTime}>{sidebar.meta.publishedDate}</time>
            {sidebar.meta.updatedDate && (
              <>
                <span className="text-gray-700" aria-hidden>·</span>
                <span>Updated {sidebar.meta.updatedDate}</span>
              </>
            )}
            <span className="text-gray-700" aria-hidden>|</span>
            <span className="font-mono">{sidebar.meta.category}</span>
          </div>
        </div>

        {/* Key point bar */}
        <div className="border-b border-sky-100 bg-sky-50">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-start gap-3">
            <span
              className="shrink-0 text-xs font-black uppercase tracking-widest px-2 py-0.5 rounded mt-0.5"
              style={{ background: sectionColor, color: '#fff' }}
            >
              Key Point
            </span>
            <p className="text-sm text-gray-700 leading-relaxed font-medium">{hero.description}</p>
          </div>
        </div>

        {/* Main content grid */}
        <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">

            {/* Article body */}
            <article className="lg:col-span-8">
              <ArticleViewTracker
                slug={articleSlug}
                title={schema.title}
                url={schema.articleUrl}
                image={schema.imageUrl}
                category={schema.section}
              />
              <div className="prose prose-base max-w-none prose-headings:font-black prose-headings:text-gray-900 prose-headings:tracking-tight prose-h2:text-lg prose-h2:uppercase prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-2 prose-h2:mt-8 prose-a:text-sky-600 prose-a:underline hover:prose-a:text-sky-800 prose-strong:font-bold prose-blockquote:border-l-sky-400">
                {children}
              </div>
              <div className="mt-8">
                <ArticleFooter
                  slug={articleSlug}
                  title={schema.title}
                  url={schema.articleUrl}
                  image={schema.imageUrl}
                  category={schema.section}
                  tags={tags ?? schema.keywords.slice(0, 8)}
                  author={{ name: sidebar.meta.author }}
                />
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-6 space-y-5">

                {/* At a Glance infobox */}
                <div className="border border-gray-200 overflow-hidden">
                  <div className="px-4 py-2" style={{ background: sectionColor }}>
                    <span className="text-[10px] font-black uppercase tracking-widest text-white">At a Glance</span>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {sidebar.infobox.rows.map((row, i) => (
                      <div key={i} className="flex px-4 py-2.5 gap-3">
                        <span className="text-gray-400 text-xs font-semibold w-24 shrink-0">{row.label}</span>
                        {row.href ? (
                          <a
                            href={row.href}
                            target={row.href.startsWith('http') ? '_blank' : undefined}
                            rel={row.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-sky-600 hover:text-sky-800 underline text-xs break-all font-medium"
                          >
                            {row.value as React.ReactNode}
                          </a>
                        ) : (
                          <span className="text-gray-800 text-xs font-medium leading-relaxed">
                            {row.value as React.ReactNode}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Callout */}
                {sidebar.callout && (() => {
                  const c = sidebar.callout!;
                  const colors = calloutColorMap[c.color ?? 'blue'];
                  return (
                    <div className={`border p-4 ${colors.wrapper}`}>
                      <h3 className="font-black text-gray-900 mb-2 text-xs uppercase tracking-widest">{c.title}</h3>
                      <div className="text-xs text-gray-600 leading-relaxed mb-3">{c.body}</div>
                      {c.ctaLabel && c.ctaHref && (
                        <Link href={c.ctaHref} className={`block text-center font-bold text-xs py-2 px-4 rounded transition-colors ${colors.cta}`}>
                          {c.ctaLabel}
                        </Link>
                      )}
                    </div>
                  );
                })()}

                {/* Timeline */}
                {sidebar.timeline && sidebar.timeline.length > 0 && (
                  <div className="border border-gray-200 p-4">
                    <h3 className="font-black text-gray-900 mb-3 text-[10px] uppercase tracking-widest">Timeline</h3>
                    <div className="space-y-3 relative">
                      <div className="absolute left-[18px] top-2 bottom-2 w-px bg-gray-200" aria-hidden />
                      {sidebar.timeline.map((t, i) => (
                        <div key={i} className="flex gap-3 text-xs items-start relative">
                          <div
                            className="w-9 h-5 shrink-0 flex items-center justify-center z-10 text-[9px] font-black"
                            style={{ background: sectionColor, color: '#fff', borderRadius: 2 }}
                          >
                            {t.year}
                          </div>
                          <span className="text-gray-600 leading-relaxed pt-0.5">{t.event}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Related Coverage */}
                {sidebar.relatedLinks && sidebar.relatedLinks.length > 0 && (
                  <div className="border border-gray-200 overflow-hidden">
                    <div className="bg-gray-900 px-4 py-2">
                      <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400">Related Coverage</h3>
                    </div>
                    <ul className="divide-y divide-gray-100">
                      {sidebar.relatedLinks.map((link, i) => (
                        <li key={i}>
                          <Link href={link.href} className="flex px-4 py-2.5 text-xs font-medium text-sky-600 hover:text-sky-800 hover:bg-sky-50 underline transition-colors">
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Article meta */}
                <div className="border border-gray-100 bg-gray-50 text-xs divide-y divide-gray-100">
                  <div className="flex px-4 py-2.5 gap-3">
                    <span className="text-gray-400 font-semibold w-20 shrink-0">Published</span>
                    <span className="text-gray-700 font-medium">{sidebar.meta.publishedDate}</span>
                  </div>
                  {sidebar.meta.updatedDate && (
                    <div className="flex px-4 py-2.5 gap-3">
                      <span className="text-gray-400 font-semibold w-20 shrink-0">Updated</span>
                      <span className="text-gray-700 font-medium">{sidebar.meta.updatedDate}</span>
                    </div>
                  )}
                  <div className="flex px-4 py-2.5 gap-3">
                    <span className="text-gray-400 font-semibold w-20 shrink-0">Author</span>
                    <span className="text-gray-700 font-medium">{sidebar.meta.author}</span>
                  </div>
                  <div className="flex px-4 py-2.5 gap-3">
                    <span className="text-gray-400 font-semibold w-20 shrink-0">Section</span>
                    <span className="text-gray-700 font-medium">{sidebar.meta.category}</span>
                  </div>
                </div>

                {/* Related creator cards (kept for compat) */}
                {relatedCreators && relatedCreators.length > 0 && (
                  <div className="border border-gray-200 overflow-hidden">
                    <div className="bg-gray-50 border-b border-gray-100 px-4 py-2">
                      <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-500">More Articles</h3>
                    </div>
                    <ul className="divide-y divide-gray-100">
                      {relatedCreators.map((c) => (
                        <li key={c.href}>
                          <Link href={c.href} className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors group">
                            <div className="relative w-9 h-9 overflow-hidden border border-gray-200 shrink-0">
                              <Image src={c.imageSrc} alt={c.imageAlt} fill className="object-cover" sizes="36px" />
                            </div>
                            <div className="min-w-0">
                              <p className="text-xs font-bold text-gray-900 truncate group-hover:text-sky-600">{c.name}</p>
                              <p className="text-xs text-gray-400 truncate">{c.subtitle}</p>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}

// =============================================================================
// CREATOR IMAGE GALLERY
// =============================================================================

export interface CreatorGalleryImage { src: string; alt: string; caption?: string; }
export interface CreatorImageGalleryProps { images: CreatorGalleryImage[]; heading?: string; }

export function CreatorImageGallery({ images, heading }: CreatorImageGalleryProps) {
  const [lightbox, setLightbox] = React.useState<number | null>(null);
  return (
    <div className="not-prose my-8">
      {heading && <h3 className="text-xs font-black uppercase tracking-widest text-gray-500 mb-4">{heading}</h3>}
      <div className="grid grid-cols-3 gap-2">
        {images.map((img, i) => (
          <button key={i} type="button" onClick={() => setLightbox(i)}
            className="relative overflow-hidden border border-gray-200 hover:border-sky-400 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            style={{ aspectRatio: '16/10' }} aria-label={`View ${img.alt}`}>
            <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="200px" />
            {img.caption && (
              <div className="absolute inset-x-0 bottom-0 px-2 py-1 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white text-xs line-clamp-1">{img.caption}</p>
              </div>
            )}
          </button>
        ))}
      </div>
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.92)' }}
          onClick={() => setLightbox(null)} role="dialog" aria-modal aria-label="Image lightbox">
          <div className="relative w-full max-w-2xl" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="absolute -top-9 right-0 text-white/70 hover:text-white text-sm font-semibold"
              onClick={() => setLightbox(null)} aria-label="Close">Close ×</button>
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/10' }}>
              <Image src={images[lightbox].src} alt={images[lightbox].alt} fill className="object-cover" sizes="768px" priority />
            </div>
            {images[lightbox].caption && <p className="text-white/70 text-sm text-center mt-3">{images[lightbox].caption}</p>}
            <p className="text-white/40 text-xs text-center mt-1">{lightbox + 1} / {images.length}</p>
            {images.length > 1 && (
              <>
                <button type="button" aria-label="Previous"
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-9 h-9 flex items-center justify-center text-xl"
                  onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + images.length) % images.length); }}>‹</button>
                <button type="button" aria-label="Next"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-9 h-9 flex items-center justify-center text-xl"
                  onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % images.length); }}>›</button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// =============================================================================
// CREATOR SECTION
// =============================================================================

export interface CreatorSectionProps { heading: string; children: React.ReactNode; prose?: boolean; }

export function CreatorSection({ heading, children, prose = true }: CreatorSectionProps) {
  return (
    <section>
      <h2 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-3 border-b border-gray-200 pb-2">
        {heading}
      </h2>
      {prose ? <div className="prose prose-base max-w-none">{children}</div> : children}
    </section>
  );
}

// =============================================================================
// CREATOR TABLE
// =============================================================================

export interface CreatorTableProps {
  columns: CreatorTableColumn[];
  rows: CreatorTableRow[];
  highlightKey?: string;
  highlightValue?: string;
}

export function CreatorTable({ columns, rows, highlightKey, highlightValue }: CreatorTableProps) {
  return (
    <div className="overflow-x-auto border border-gray-200 mt-6">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-900 text-white">
            {columns.map((col) => (
              <th key={col.key} className="px-4 py-2.5 text-left text-xs font-black uppercase tracking-wider">{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {rows.map((row, i) => {
            const isHighlighted = highlightKey && highlightValue ? row[highlightKey] === highlightValue : false;
            return (
              <tr key={i} className={isHighlighted ? 'bg-sky-50' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                {columns.map((col) => (
                  <td key={col.key} className={`px-4 py-2 text-xs ${isHighlighted ? 'font-bold text-sky-900' : 'text-gray-700'}`}>
                    {col.render ? col.render(row[col.key] ?? '') : (row[col.key] ?? '')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// =============================================================================
// CREATOR CALLOUT BOX
// =============================================================================

export interface CreatorCalloutBoxProps { heading: string; items: CreatorCalloutItem[]; color?: 'blue' | 'yellow' | 'green' | 'red' | 'purple'; }

const calloutBoxColors = {
  blue:   { wrapper: 'bg-sky-50 border-sky-200',         arrow: 'text-sky-500' },
  yellow: { wrapper: 'bg-amber-50 border-amber-200',     arrow: 'text-amber-500' },
  green:  { wrapper: 'bg-emerald-50 border-emerald-200', arrow: 'text-emerald-500' },
  red:    { wrapper: 'bg-red-50 border-red-200',         arrow: 'text-red-500' },
  purple: { wrapper: 'bg-violet-50 border-violet-200',   arrow: 'text-violet-500' },
};

export function CreatorCalloutBox({ heading, items, color = 'blue' }: CreatorCalloutBoxProps) {
  const c = calloutBoxColors[color];
  return (
    <div className={`not-prose mt-6 border p-4 ${c.wrapper}`}>
      <h3 className="font-black text-gray-900 mb-3 text-xs uppercase tracking-widest">{heading}</h3>
      <div className="space-y-2.5">
        {items.map((item, i) => (
          <div key={i} className="flex gap-2.5 text-sm">
            <span className={`font-bold shrink-0 mt-0.5 ${c.arrow}`}>▸</span>
            <div>
              <span className="font-semibold text-gray-900">{item.label}: </span>
              <span className="text-gray-600">{item.detail}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// =============================================================================
// CREATOR QUOTE
// =============================================================================

export interface CreatorQuoteProps { quote: string; attribution?: string; role?: string; }

export function CreatorQuote({ quote, attribution, role }: CreatorQuoteProps) {
  return (
    <blockquote className="not-prose my-8 pl-4 border-l-4 border-sky-400">
      <p className="text-lg font-semibold text-gray-900 leading-relaxed italic">&ldquo;{quote}&rdquo;</p>
      {attribution && (
        <footer className="mt-2 text-sm text-gray-500">
          <span className="font-semibold text-gray-700">{attribution}</span>
          {role && <span className="text-gray-400">, {role}</span>}
        </footer>
      )}
    </blockquote>
  );
}

// =============================================================================
// CREATOR STAT
// =============================================================================

export interface CreatorStatProps { value: string; label: string; sub?: string; color?: 'blue' | 'yellow' | 'green' | 'red' | 'purple' | 'gray'; }

const statColors = {
  blue:   'bg-sky-600 text-white',
  yellow: 'bg-amber-400 text-gray-900',
  green:  'bg-emerald-600 text-white',
  red:    'bg-red-600 text-white',
  purple: 'bg-violet-600 text-white',
  gray:   'bg-gray-900 text-white',
};

export function CreatorStat({ value, label, sub, color = 'blue' }: CreatorStatProps) {
  return (
    <div className={`not-prose inline-flex flex-col items-center justify-center px-6 py-4 text-center min-w-[120px] ${statColors[color]}`}>
      <span className="text-3xl font-black leading-none">{value}</span>
      <span className="text-xs font-bold mt-1.5 uppercase tracking-wide opacity-90">{label}</span>
      {sub && <span className="text-xs opacity-60 mt-0.5">{sub}</span>}
    </div>
  );
}

// =============================================================================
// CREATOR TIKTOK — kept for compatibility
// =============================================================================

export interface CreatorTikTokProps { videoId: string; username: string; caption?: string; }

export function CreatorTikTok({ videoId, username, caption }: CreatorTikTokProps) {
  const videoUrl = `https://www.tiktok.com/@${username}/video/${videoId}`;
  const userUrl  = `https://www.tiktok.com/@${username}?refer=embed`;
  return (
    <div className="not-prose">
      {caption && <p className="text-gray-600 text-sm mb-4">{caption}</p>}
      <div className="flex justify-center">
        <blockquote className="tiktok-embed" cite={videoUrl} data-video-id={videoId} style={{ maxWidth: '605px', minWidth: '325px', width: '100%' }}>
          <section><a target="_blank" rel="noopener noreferrer" title={`@${username}`} href={userUrl}>@{username}</a></section>
        </blockquote>
      </div>
    </div>
  );
}

export default CreatorArticle;
