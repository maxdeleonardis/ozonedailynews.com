/**
 * Hub.tsx
 *
 * Reusable hub-page layout component.
 * Matches the dark-gradient aesthetic of /winter-olympics/page.tsx exactly.
 *
 * Usage:
 *   <Hub badge="WINTER OLYMPICS 2026" title="..." subtitle="...">
 *     <Hub.Section title="..." icon="🏅">...</Hub.Section>
 *     <Hub.InfoGrid items={[...]} />
 *     <Hub.Card href="..." title="..." description="..." badge="Breaking" emoji="🥇" />
 *     <Hub.Table columns={[...]} rows={[...]} />
 *   </Hub>
 */

import Link from 'next/link';
import type { ReactNode } from 'react';

// ─── Root ────────────────────────────────────────────────────────────────────

interface HubProps {
  children: ReactNode;
  badge?: string;
  badgeColor?: string; // Tailwind gradient, e.g. "from-blue-600 to-cyan-600"
  title: string;
  subtitle?: string;
  meta?: ReactNode; // flags, dates, etc. below subtitle
}

export function Hub({
  children,
  badge,
  badgeColor = 'from-blue-600 to-cyan-600',
  title,
  subtitle,
  meta,
}: HubProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900">
      <article className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero */}
        <header className="mb-12 text-center">
          {badge && (
            <div
              className={`inline-block bg-gradient-to-r ${badgeColor} text-white px-6 py-2 rounded-full text-sm font-semibold mb-4`}
            >
              {badge}
            </div>
          )}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">{title}</h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
              {subtitle}
            </p>
          )}
          {meta && (
            <div className="flex flex-wrap justify-center gap-4 text-lg text-gray-300">
              {meta}
            </div>
          )}
        </header>

        {children}
      </article>
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
}

Hub.InfoGrid = function HubInfoGrid({
  title,
  icon,
  items,
  columns = 4,
}: InfoGridProps) {
  const colClass =
    columns === 2
      ? 'grid-cols-1 sm:grid-cols-2'
      : columns === 3
      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
      : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-12 border border-white/20">
      {title && (
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          {icon && <span className="text-3xl">{icon}</span>}
          {title}
        </h2>
      )}
      <div className={`grid ${colClass} gap-6 text-gray-200`}>
        {items.map((item) => (
          <div key={item.label}>
            <p className="text-gray-400 text-sm mb-1">{item.label}</p>
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
  /** "card" = bg-white/10 (Quick Facts style), "default" = bg-white/5 */
  variant?: 'default' | 'card' | 'highlight';
  className?: string;
}

Hub.Section = function HubSection({
  children,
  title,
  icon,
  variant = 'default',
  className = '',
}: SectionProps) {
  const base =
    variant === 'card'
      ? 'bg-white/10 backdrop-blur-md border-white/20'
      : variant === 'highlight'
      ? 'bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border-blue-500/30'
      : 'bg-white/5 border-white/10';

  return (
    <section
      className={`${base} backdrop-blur-sm rounded-xl p-8 mb-8 border ${className}`}
    >
      {title && (
        <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
          {icon && <span className="text-3xl">{icon}</span>}
          {title}
        </h2>
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
  meta?: string; // e.g. "2 hours ago • Alpine Skiing"
  children?: ReactNode;
}

Hub.Card = function HubCard({
  href,
  title,
  description,
  badge,
  badgeStyle = 'default',
  emoji,
  meta,
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
      : 'bg-white/5 hover:bg-white/10 border border-white/10';

  return (
    <Link
      href={href}
      className={`block p-6 ${cardCls} rounded-lg transition-colors group`}
    >
      <div className="flex items-start gap-4">
        {emoji && <div className="text-3xl shrink-0">{emoji}</div>}
        <div className="flex-1">
          {(badge || meta) && (
            <div className="flex items-center gap-3 mb-2">
              {badge && (
                <span
                  className={`inline-flex items-center px-2 py-1 rounded text-xs font-black uppercase tracking-wider ${badgeCls}`}
                >
                  {badge}
                </span>
              )}
              {meta && <span className="text-sm text-gray-300">{meta}</span>}
            </div>
          )}
          <h3
            className={`text-xl font-semibold text-white mb-2 ${
              badgeStyle === 'breaking'
                ? 'text-2xl group-hover:text-red-200'
                : badgeStyle === 'historic'
                ? 'group-hover:text-purple-300'
                : 'group-hover:text-blue-400'
            }`}
          >
            {title}
          </h3>
          {description && (
            <p className="text-gray-300">{description}</p>
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
    <div className={`grid ${colClass} gap-4`}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors border border-white/10 group"
        >
          <div className="text-4xl mb-3">{item.emoji}</div>
          <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-400">
            {item.label}
          </h3>
          {item.sub && <p className="text-sm text-gray-400">{item.sub}</p>}
        </Link>
      ))}
    </div>
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
            <tr className="border-b border-white/20">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={`py-3 px-4 text-gray-300 font-semibold text-${col.align ?? 'left'}`}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-gray-200">
            {rows.map((row, i) => (
              <tr key={i} className="border-b border-white/10 hover:bg-white/5">
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
    <div className="text-gray-300 leading-relaxed space-y-4 text-lg">
      {children}
    </div>
  );
};

// ─── LiveDot (animated live indicator) ───────────────────────────────────────

Hub.LiveDot = function HubLiveDot() {
  return (
    <span className="relative flex h-3 w-3">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
    </span>
  );
};

export default Hub;
