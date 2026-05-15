/**
 * ServicePage — Layout component for individual ObjectWire PI/journalism service pages.
 *
 * Provides: dark hero, stat bar, scrollable content with sidebar, related services grid, CTA.
 * Replace ArticlePage on all /service/* sub-pages for visual consistency.
 */

import Link from 'next/link';
import React from 'react';
import { Breadcrumb } from '@/components/nav/Breadcrumb';

// ── Types ─────────────────────────────────────────────────────────────────────

export interface ServiceStat {
  value: string;
  label: string;
}

export interface ServiceInfoRow {
  label: string;
  value: string;
}

export interface RelatedService {
  href: string;
  label: string;
  icon?: string;
  desc?: string;
}

export interface ServicePageProps {
  /** Display icon/emoji for the service */
  icon?: string;
  title: string;
  subtitle: string;
  category?: string;
  lastUpdated?: string;
  /** Breadcrumb trail */
  breadcrumbs?: Array<{ href: string; label: string }>;
  /** Key facts shown in the dark hero bar */
  stats?: ServiceStat[];
  /** Sidebar info rows (replaces old infoBox items) */
  infoRows?: ServiceInfoRow[];
  /** TOC anchor links shown in sidebar */
  tableOfContents?: Array<{ id: string; label: string }>;
  /** Related service cards shown at bottom */
  relatedServices?: RelatedService[];
  /** CTA override text */
  ctaHeading?: string;
  ctaBody?: string;
  /** Main article body */
  children: React.ReactNode;
}

// ── Component ─────────────────────────────────────────────────────────────────

export function ServicePage({
  icon = '🔍',
  title,
  subtitle,
  category = 'Investigative Services',
  lastUpdated,
  breadcrumbs,
  stats,
  infoRows,
  tableOfContents,
  relatedServices,
  ctaHeading = 'Start a Free Consultation',
  ctaBody = 'Initial consultations are free and confidential. We assess your case, explain what evidence is achievable, and quote cost before any work begins.',
  children,
}: ServicePageProps) {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">

      {/* ── HERO ── */}
      <section className="bg-gray-950 text-white">
        {breadcrumbs && (
          <div className="container mx-auto px-4 pt-6 max-w-6xl">
            <Breadcrumb
              items={breadcrumbs.map((b) => ({ name: b.label, item: b.href }))}
              className="text-gray-400"
            />
          </div>
        )}
        <div className="container mx-auto px-4 py-14 max-w-6xl">
          <div className="flex items-start gap-6">
            <div className="flex-1">
              <p className="text-xs uppercase tracking-[0.3em] font-black text-blue-400 mb-3 font-mono">
                {category} · Austin, Texas
              </p>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
                {title}
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl leading-relaxed mb-8">{subtitle}</p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/get-help"
                  className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-3 rounded-lg transition-colors"
                >
                  Free Consultation
                </Link>
                <Link
                  href="/service"
                  className="border border-gray-600 hover:border-white text-gray-300 hover:text-white font-semibold px-7 py-3 rounded-lg transition-colors"
                >
                  All Services
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stat bar */}
        {stats && stats.length > 0 && (
          <div className="border-t border-gray-800">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="flex flex-wrap divide-x divide-gray-800">
                {stats.map(({ value, label }) => (
                  <div key={label} className="px-8 py-4 first:pl-0">
                    <div className="text-xl font-black text-white">{value}</div>
                    <div className="text-xs text-gray-400 uppercase tracking-widest">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ── CONTENT + SIDEBAR ── */}
      <div className="container mx-auto px-4 max-w-6xl py-12">
        <div className="flex gap-10">

          {/* Main content */}
          <article className="flex-1 min-w-0 prose prose-lg dark:prose-invert max-w-none">
            {children}
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block w-72 shrink-0 space-y-6">

            {/* Info card */}
            {infoRows && infoRows.length > 0 && (
              <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden sticky top-6">
                <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="font-black text-sm text-gray-900 dark:text-white">Service Details</h2>
                </div>
                <dl className="divide-y divide-gray-200 dark:divide-gray-800">
                  {infoRows.map(({ label, value }) => (
                    <div key={label} className="px-4 py-3 flex justify-between gap-2 text-sm">
                      <dt className="font-semibold text-gray-600 dark:text-gray-400 shrink-0">{label}</dt>
                      <dd className="text-gray-900 dark:text-white text-right">{value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="px-4 py-4 border-t border-gray-200 dark:border-gray-700">
                  <Link
                    href="/get-help"
                    className="block w-full bg-blue-600 hover:bg-blue-500 text-white font-bold px-4 py-3 rounded-lg text-sm text-center transition-colors"
                  >
                    Start a Case →
                  </Link>
                </div>
              </div>
            )}

            {/* TOC */}
            {tableOfContents && tableOfContents.length > 0 && (
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
                <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="font-black text-sm text-gray-900 dark:text-white">On This Page</h2>
                </div>
                <nav className="px-4 py-3">
                  <ol className="space-y-2">
                    {tableOfContents.map(({ id, label }) => (
                      <li key={id}>
                        <a
                          href={`#${id}`}
                          className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                        >
                          {label}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </div>
            )}

            {/* Last updated */}
            {lastUpdated && (
              <p className="text-xs text-gray-400 px-1">Last updated: {lastUpdated}</p>
            )}
          </aside>
        </div>
      </div>

      {/* ── RELATED SERVICES ── */}
      {relatedServices && relatedServices.length > 0 && (
        <section className="bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-8">Related Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedServices.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 hover:border-blue-500 hover:shadow-md transition-all"
                >

                  <h3 className="font-black text-sm text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 transition-colors">
                    {s.label}
                  </h3>
                  {s.desc && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{s.desc}</p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="py-16 bg-gray-950 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-black mb-4">{ctaHeading}</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">{ctaBody}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/get-help"
              className="bg-blue-600 hover:bg-blue-500 text-white font-black px-10 py-4 rounded-lg transition-colors"
            >
              Get a Free Consultation
            </Link>
            <Link
              href="/service"
              className="border border-gray-600 hover:border-white text-gray-300 hover:text-white font-bold px-10 py-4 rounded-lg transition-colors"
            >
              All Services
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

// ── Section helper ─────────────────────────────────────────────────────────────

export interface ServiceSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export function ServiceSection({ id, title, children }: ServiceSectionProps) {
  return (
    <section id={id} className="mb-10 scroll-mt-20">
      <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-4 not-prose">{title}</h2>
      <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">{children}</div>
    </section>
  );
}
