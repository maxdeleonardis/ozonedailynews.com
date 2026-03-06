/**
 * Hub.tsx
 *
 * Reusable hub-page layout component.
 * Themeable background, semantic HTML, and SEO-friendly heading hierarchy.
 *
 * Sub-components:
 *   Hub.Section      — titled section with id for jump links
 *   Hub.InfoGrid     — key-value stat grid
 *   Hub.StatBar      — horizontal accent stat strip
 *   Hub.Card         — news/link card with optional thumbnail & <time>
 *   Hub.CardGrid     — responsive grid wrapper for Cards
 *   Hub.LinkGrid     — icon navigation grid (<nav>)
 *   Hub.Table        — data table with optional footer
 *   Hub.Prose        — rich-text body block
 *   Hub.Banner       — full-width CTA / announcement banner
 *   Hub.TOC          — sticky table of contents
 *   Hub.LiveDot      — animated live indicator
 *   Hub.Breadcrumbs  — breadcrumb bar inside the gradient
 */

import Link from 'next/link';
import Image from 'next/image';
import type { ReactNode } from 'react';

// ─── Heading helper (renders h2–h4 by level) ────────────────────────────────

type HeadingLevel = 2 | 3 | 4;

function Heading({
  level = 2,
  className,
  children,
}: {
  level?: HeadingLevel;
  className?: string;
  children: ReactNode;
}) {
  const Tag = `h${level}` as const;
  return <Tag className={className}>{children}</Tag>;
}

// ─── Root ────────────────────────────────────────────────────────────────────

interface HubProps {
  children: ReactNode;
  badge?: string;
  badgeColor?: string; // Tailwind gradient, e.g. "from-blue-600 to-cyan-600"
  /** Tailwind gradient classes for the page background.
   *  When omitted the page uses the site-wide eggshell-white (#faf9f6) default. */
  bgGradient?: string;
  title: string;
  subtitle?: string;
  /** Optional ISO date string shown as "Last updated" under the subtitle */
  updatedAt?: string;
  meta?: ReactNode; // flags, dates, etc. below subtitle
  /** JSON-LD structured data object — rendered as a <script> in <main> */
  jsonLd?: Record<string, unknown>;
}

export function Hub({
  children,
  badge,
  badgeColor = 'from-blue-600 to-cyan-600',
  bgGradient,
  title,
  subtitle,
  updatedAt,
  meta,
  jsonLd,
}: HubProps) {
  return (
    <div
      className={`min-h-screen ${
        bgGradient
          ? `bg-gradient-to-br ${bgGradient}`
          : 'bg-[#faf9f6]'
      }`}
    >
      {/* JSON-LD structured data */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero */}
        <header className="mb-12 text-center">
          {badge && (
            <div
              className={`inline-block bg-gradient-to-r ${badgeColor} text-white px-6 py-2 rounded-full text-sm font-semibold mb-4`}
            >
              {badge}
            </div>
          )}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">{title}</h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
              {subtitle}
            </p>
          )}
          {updatedAt && (
            <p className="text-sm text-gray-500 mb-4">
              Last updated:{' '}
              <time dateTime={updatedAt}>
                {new Date(updatedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </p>
          )}
          {meta && (
            <div className="flex flex-wrap justify-center gap-4 text-lg text-gray-600">
              {meta}
            </div>
          )}
        </header>

        {children}
      </main>
    </div>
  );
}

// ─── InfoGrid ─────────────────────────────────────────────────────────────────

interface InfoItem {
  label: string;
  value: string;
}

interface InfoGridProps {
  title?: string;
  icon?: string;
  items: InfoItem[];
  columns?: 2 | 3 | 4;
  /** Heading level for the title. Defaults to 3 so it nests under Section h2. */
  level?: HeadingLevel;
}

Hub.InfoGrid = function HubInfoGrid({
  title,
  icon,
  items,
  columns = 4,
  level = 3,
}: InfoGridProps) {
  const colClass =
    columns === 2
      ? 'grid-cols-1 sm:grid-cols-2'
      : columns === 3
      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
      : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';

  return (
    <div className="bg-gray-50 rounded-xl p-8 mb-12 border border-gray-200">
      {title && (
        <Heading level={level} className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          {icon && <span className="text-3xl">{icon}</span>}
          {title}
        </Heading>
      )}
      <div className={`grid ${colClass} gap-6 text-gray-800`}>
        {items.map((item) => (
          <div key={item.label}>
            <p className="text-gray-500 text-sm mb-1">{item.label}</p>
            <p className="text-xl font-semibold">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── Section ──────────────────────────────────────────────────────────────────

interface SectionProps {
  children: ReactNode;
  title?: string;
  icon?: string;
  /** HTML id for anchor linking / TOC jump targets */
  id?: string;
  /** "card" = bg-white/10 (Quick Facts style), "default" = bg-white/5 */
  variant?: 'default' | 'card' | 'highlight';
  /** Heading level (2–4). Defaults to 2. */
  level?: HeadingLevel;
  className?: string;
}

Hub.Section = function HubSection({
  children,
  title,
  icon,
  id,
  variant = 'default',
  level = 2,
  className = '',
}: SectionProps) {
  const base =
    variant === 'card'
      ? 'bg-gray-50 border-gray-200'
      : variant === 'highlight'
      ? 'bg-blue-50 border-blue-200'
      : 'bg-white border-gray-200';

  return (
    <section
      id={id}
      className={`${base} backdrop-blur-sm rounded-xl p-8 mb-8 border ${className}`}
    >
      {title && (
        <Heading level={level} className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          {icon && <span className="text-3xl">{icon}</span>}
          {title}
        </Heading>
      )}
      {children}
    </section>
  );
};

// ─── Card (news/link card) ────────────────────────────────────────────────────

type BadgeStyle = 'breaking' | 'historic' | 'default';

interface CardProps {
  href: string;
  title: string;
  description?: string;
  badge?: string;
  badgeStyle?: BadgeStyle;
  emoji?: string;
  /** Thumbnail image URL — rendered as a Next.js Image when provided */
  thumbnail?: string;
  meta?: string; // e.g. "2 hours ago • Alpine Skiing"
  /** ISO 8601 date string — rendered as a <time> element for freshness signals */
  publishedAt?: string;
  children?: ReactNode;
}

Hub.Card = function HubCard({
  href,
  title,
  description,
  badge,
  badgeStyle = 'default',
  emoji,
  thumbnail,
  meta,
  publishedAt,
  children,
}: CardProps) {
  const badgeCls =
    badgeStyle === 'breaking'
      ? 'bg-red-600 animate-pulse text-white'
      : badgeStyle === 'historic'
      ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
      : 'bg-blue-600/80 text-white';

  const cardCls =
    badgeStyle === 'breaking'
      ? 'bg-gradient-to-r from-red-600/30 to-rose-600/30 hover:from-red-600/40 hover:to-rose-600/40 border-2 border-red-500'
      : badgeStyle === 'historic'
      ? 'bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/30 hover:to-pink-600/30 border-2 border-purple-500/50'
      : badge
      ? 'bg-gradient-to-r from-blue-600/20 to-cyan-600/20 hover:from-blue-600/30 hover:to-cyan-600/30 border-2 border-blue-500/50'
      : 'bg-white hover:bg-gray-50 border border-gray-200';

  return (
    <Link
      href={href}
      className={`block p-6 ${cardCls} rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg group`}
    >
      <div className="flex items-start gap-4">
        {/* Thumbnail image (preferred) or emoji fallback */}
        {thumbnail ? (
          <div className="relative w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-lg overflow-hidden">
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-cover"
              sizes="96px"
            />
          </div>
        ) : emoji ? (
          <div className="text-3xl shrink-0">{emoji}</div>
        ) : null}
        <div className="flex-1">
          {(badge || meta || publishedAt) && (
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              {badge && (
                <span
                  className={`inline-flex items-center px-2 py-1 rounded text-xs font-black uppercase tracking-wider ${badgeCls}`}
                >
                  {badge}
                </span>
              )}
              {publishedAt && (
                <time dateTime={publishedAt} className="text-sm text-gray-500">
                  {new Date(publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </time>
              )}
              {meta && <span className="text-sm text-gray-600">{meta}</span>}
            </div>
          )}
          <h3
            className={`text-xl font-semibold text-gray-900 mb-2 ${
              badgeStyle === 'breaking'
                ? 'text-2xl group-hover:text-red-700'
                : badgeStyle === 'historic'
                ? 'group-hover:text-purple-700'
                : 'group-hover:text-blue-600'
            }`}
          >
            {title}
          </h3>
          {description && (
            <p className="text-gray-600">{description}</p>
          )}
          {children}
        </div>
      </div>
    </Link>
  );
};

// ─── LinkGrid (icon link cards) ───────────────────────────────────────────────

interface LinkGridItem {
  href: string;
  emoji: string;
  label: string;
  sub?: string;
}

interface LinkGridProps {
  items: LinkGridItem[];
  columns?: 2 | 3 | 4;
}

Hub.LinkGrid = function HubLinkGrid({ items, columns = 4 }: LinkGridProps) {
  const colClass =
    columns === 2
      ? 'grid-cols-1 sm:grid-cols-2'
      : columns === 3
      ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
      : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';

  return (
    <nav aria-label="Related topics" className={`grid ${colClass} gap-4`}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="bg-white rounded-lg p-6 hover:bg-gray-50 transition-colors border border-gray-200 group"
        >
          <div className="text-4xl mb-3">{item.emoji}</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600">
            {item.label}
          </h3>
          {item.sub && <p className="text-sm text-gray-500">{item.sub}</p>}
        </Link>
      ))}
    </nav>
  );
};

// ─── Table ────────────────────────────────────────────────────────────────────

interface TableColumn {
  key: string;
  label: string;
  align?: 'left' | 'center' | 'right';
  bold?: boolean;
}

interface TableRow {
  [key: string]: ReactNode;
}

interface TableProps {
  columns: TableColumn[];
  rows: TableRow[];
  footer?: ReactNode;
}

Hub.Table = function HubTable({ columns, rows, footer }: TableProps) {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={`py-3 px-4 text-gray-600 font-semibold text-${col.align ?? 'left'}`}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {rows.map((row, i) => (
              <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className={`py-3 px-4 text-${col.align ?? 'left'} ${
                      col.bold ? 'font-bold' : ''
                    }`}
                  >
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {footer && <div className="mt-4 text-center">{footer}</div>}
    </>
  );
};

// ─── Prose (rich text block) ──────────────────────────────────────────────────

Hub.Prose = function HubProse({ children }: { children: ReactNode }) {
  return (
    <div className="text-gray-700 leading-relaxed space-y-4 text-lg">
      {children}
    </div>
  );
};

// ─── StatBar (horizontal accent stat strip) ──────────────────────────────────

interface StatBarItem {
  value: string;
  label: string;
}

interface StatBarProps {
  items: StatBarItem[];
  /** Accent color for values. @default "text-blue-400" */
  accentColor?: string;
}

Hub.StatBar = function HubStatBar({ items, accentColor = 'text-blue-400' }: StatBarProps) {
  return (
    <div className="bg-gray-50 border-y border-gray-200 py-8 mb-8 -mx-4 px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {items.map((item) => (
          <div key={item.label} className="text-center">
            <div className={`text-4xl md:text-5xl font-black ${accentColor} mb-1`}>
              {item.value}
            </div>
            <div className="text-xs uppercase tracking-widest text-gray-500 font-semibold">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── CardGrid (responsive grid wrapper for Cards) ────────────────────────────

interface CardGridProps {
  children: ReactNode;
  columns?: 1 | 2 | 3;
}

Hub.CardGrid = function HubCardGrid({ children, columns = 2 }: CardGridProps) {
  const colClass =
    columns === 1
      ? 'grid-cols-1'
      : columns === 3
      ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
      : 'grid-cols-1 md:grid-cols-2';

  return <div className={`grid ${colClass} gap-4`}>{children}</div>;
};

// ─── Banner (full-width CTA / announcement) ──────────────────────────────────

interface BannerProps {
  children: ReactNode;
  /** Tailwind gradient for the banner background */
  gradient?: string;
  className?: string;
}

Hub.Banner = function HubBanner({
  children,
  gradient = 'from-blue-600 to-cyan-600',
  className = '',
}: BannerProps) {
  return (
    <div
      className={`bg-gradient-to-r ${gradient} rounded-xl p-8 mb-8 text-white text-center ${className}`}
    >
      {children}
    </div>
  );
};

// ─── Breadcrumbs (bar inside the gradient) ───────────────────────────────────

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

Hub.Breadcrumbs = function HubBreadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-gray-200 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-4 py-3">
        <ol className="flex items-center gap-2 text-sm text-gray-500">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-center gap-2">
              {idx > 0 && <span className="text-gray-400">/</span>}
              {item.href ? (
                <Link href={item.href} className="hover:text-gray-900 transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-800">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

// ─── LiveDot (animated live indicator) ───────────────────────────────────────

Hub.LiveDot = function HubLiveDot() {
  return (
    <span className="relative flex h-3 w-3" role="status" aria-label="Live coverage">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
    </span>
  );
};

// ─── TOC (sticky table of contents) ──────────────────────────────────────────

interface TOCItem {
  id: string;
  label: string;
}

interface TOCProps {
  items: TOCItem[];
  /** Label shown above the list. @default "On this page" */
  title?: string;
}

Hub.TOC = function HubTOC({ items, title = 'On this page' }: TOCProps) {
  return (
    <nav
      aria-label="Table of contents"
      className="sticky top-24 bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8"
    >
      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
        {title}
      </p>
      <ol className="space-y-2">
        {items.map((item, idx) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="text-gray-700 hover:text-gray-900 transition-colors text-sm flex items-baseline gap-2"
            >
              <span className="text-gray-400 tabular-nums">{idx + 1}.</span>
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Hub;
