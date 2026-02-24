import React from 'react';
import Link from 'next/link';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { Breadcrumb } from '@/components/Breadcrumb';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface MHASchemaProps {
  title: string;
  description: string;
  publishedTime: string;
  modifiedTime: string;
  author?: string;
  imageUrl?: string;
  articleUrl: string;
  section?: string;
  keywords?: string[];
}

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export interface MHARelatedLink {
  href: string;
  title: string;
  description: string;
  /** Tailwind gradient classes e.g. "from-blue-900/50 to-purple-900/50" */
  gradient?: string;
  /** Tailwind hover gradient classes e.g. "hover:from-blue-800/50 hover:to-purple-800/50" */
  hoverGradient?: string;
  /** Tailwind border class e.g. "border-blue-500/30" */
  borderColor?: string;
  /** Tailwind text colour for the title e.g. "text-blue-400" */
  titleColor?: string;
}

export interface MHAExternalLink {
  href: string;
  label: string;
}

export interface MHAArticleProps {
  /** Schema / structured data for SEO */
  schema: MHASchemaProps;
  /** Breadcrumb navigation items */
  breadcrumbItems: BreadcrumbItem[];
  /** Large hero title displayed at the top of the article */
  title: string;
  /** Subtitle displayed beneath the hero title */
  subtitle?: string;
  /** Optional related-content cards shown near the bottom */
  relatedLinks?: MHARelatedLink[];
  /** Optional external resource links shown at the very bottom */
  externalLinks?: MHAExternalLink[];
  /** The article body — pass your <MHASection> blocks here */
  children: React.ReactNode;
}

// ─── MHASection ───────────────────────────────────────────────────────────────
// Reusable frosted-glass card used for every content block in an MHA article.

export interface MHASectionProps {
  /** Optional heading rendered above the card */
  heading?: string;
  /** Tailwind colour class for the section heading e.g. "text-blue-400" */
  headingColor?: string;
  /** When true, the heading renders outside/above the card instead of inside */
  headingOutside?: boolean;
  /** Optional highlight box at the bottom of the card */
  highlight?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

export function MHASection({
  heading,
  headingColor = 'text-white',
  headingOutside = false,
  highlight,
  className = '',
  children,
}: MHASectionProps) {
  const headingEl = heading ? (
    <h3 className={`text-2xl font-semibold ${headingColor} mb-4`}>{heading}</h3>
  ) : null;

  return (
    <div className={`mb-12 ${className}`}>
      {headingOutside && headingEl}
      <div className="bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm">
        {!headingOutside && headingEl}
        {children}
        {highlight && (
          <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-6 mt-6">
            {highlight}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── MHAArticle ───────────────────────────────────────────────────────────────
// Full-page wrapper. Drop <MHASection> blocks as children.

export function MHAArticle({
  schema,
  breadcrumbItems,
  title,
  subtitle,
  relatedLinks,
  externalLinks,
  children,
}: MHAArticleProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Structured data */}
      <NewsArticleSchema
        title={schema.title}
        description={schema.description}
        publishedTime={schema.publishedTime}
        modifiedTime={schema.modifiedTime}
        author={schema.author ?? 'ObjectWire Editorial Team'}
        imageUrl={schema.imageUrl ?? ''}
        articleUrl={schema.articleUrl}
        section={schema.section ?? 'Gaming'}
        keywords={schema.keywords ?? []}
      />

      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero header */}
        <header className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">{subtitle}</p>
          )}
        </header>

        {/* Article body (MHASection blocks) */}
        <div className="prose prose-invert prose-lg max-w-none">
          {children}

          {/* Related content cards */}
          {relatedLinks && relatedLinks.length > 0 && (
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Related Content</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={[
                      'bg-gradient-to-br rounded-lg p-6 transition-all border',
                      link.gradient ?? 'from-blue-900/50 to-purple-900/50',
                      link.hoverGradient ?? 'hover:from-blue-800/50 hover:to-purple-800/50',
                      link.borderColor ?? 'border-blue-500/30',
                    ].join(' ')}
                  >
                    <h3 className={`text-xl font-semibold mb-2 ${link.titleColor ?? 'text-blue-400'}`}>
                      {link.title}
                    </h3>
                    <p className="text-gray-300 text-sm">{link.description}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* External resources */}
          {externalLinks && externalLinks.length > 0 && (
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">External Resources</h2>
              <div className="bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm">
                <ul className="space-y-3">
                  {externalLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 underline"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}
        </div>
      </article>
    </div>
  );
}
