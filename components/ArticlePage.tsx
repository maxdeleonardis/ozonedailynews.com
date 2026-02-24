import Link from "next/link";
import Image from "next/image";
import React from "react";

// =============================================================================
// TYPES
// =============================================================================

export interface InfoBoxItem {
  label: string;
  value: string | React.ReactNode;
}

export interface InfoBoxProps {
  title?: string;
  image?: {
    src: string;
    alt: string;
    caption?: string;
  };
  items: InfoBoxItem[];
}

export interface TableOfContentsItem {
  id: string;
  label: string;
  level?: 1 | 2;
}

export interface ArticleSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface RelatedLink {
  href: string;
  label?: string;
  text?: string; // alias for label (used by older pages)
  description?: string;
}

export interface ArticlePageProps {
  title: string;
  subtitle?: string;
  category?: string;
  lastUpdated?: string;
  infoBox?: InfoBoxProps;
  tableOfContents?: TableOfContentsItem[];
  children: React.ReactNode;
  relatedLinks?: RelatedLink[];
  backLink?: {
    href: string;
    label: string;
  };
}

// =============================================================================
// INFO BOX COMPONENT (News-style sidebar)
// =============================================================================

export function InfoBox({ title, image, items }: InfoBoxProps) {
  return (
    <aside className="bg-white border border-gray-200 rounded-none sticky top-4">
      {title && (
        <div className="bg-white px-4 py-3 border-b border-gray-200">
          <h3 className="font-black text-sm uppercase tracking-wider text-center text-gray-900">{title}</h3>
        </div>
      )}
      
      {image && (
        <div className="p-4 border-b border-gray-200">
          <img 
            src={image.src} 
            alt={image.alt} 
            className="w-full h-auto"
          />
          {image.caption && (
            <p className="text-xs text-gray-600 text-center mt-2 italic">{image.caption}</p>
          )}
        </div>
      )}
      
      <dl className="divide-y divide-gray-200">
        {items.map((item, index) => (
          <div key={index} className="px-4 py-3">
            <dt className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">{item.label}</dt>
            <dd className="text-sm text-gray-900 font-medium">{item.value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}

// =============================================================================
// TABLE OF CONTENTS
// =============================================================================

export function TableOfContents({ items }: { items: TableOfContentsItem[] }) {
  return (
    <nav className="bg-gray-50 border-l-2 border-gray-300 p-6 mb-8">
      <h2 className="font-black text-sm uppercase tracking-wider text-gray-900 mb-4">Contents</h2>
      <ol className="space-y-2 text-sm">
        {items.map((item, index) => (
          <li key={item.id} className={item.level === 2 ? "ml-4" : ""}>
            <a 
              href={`#${item.id}`} 
              className="text-gray-700 hover:text-black hover:underline font-medium"
            >
              {index + 1}. {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

// =============================================================================
// SECTION COMPONENT
// =============================================================================

export function Section({ 
  id, 
  title, 
  children,
  level = 2
}: { 
  id: string; 
  title: string; 
  children: React.ReactNode;
  level?: 2 | 3;
}) {
  const HeadingTag = level === 2 ? 'h2' : 'h3';
  const headingClass = level === 2 
    ? "text-3xl font-black text-gray-900 mb-6 pb-3 border-b border-gray-200"
    : "text-2xl font-bold text-gray-900 mb-4";

  return (
    <section id={id} className="mb-12 scroll-mt-20">
      <HeadingTag className={headingClass}>{title}</HeadingTag>
      <div className="prose prose-lg prose-gray max-w-none">
        {children}
      </div>
    </section>
  );
}

// =============================================================================
// RELATED LINKS / SEE ALSO
// =============================================================================

export function RelatedLinks({ links }: { links: RelatedLink[] }) {
  return (
    <section className="mt-12 pt-8 border-t border-gray-200">
      <h2 className="text-2xl font-black text-gray-900 mb-6">Related Coverage</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {links.map((link, index) => (
          <Link 
            key={index}
            href={link.href}
            className="block p-4 border border-gray-200 hover:border-black transition-colors group"
          >
            <h3 className="font-bold text-gray-900 group-hover:underline mb-1">
              {link.label ?? link.text}
            </h3>
            {link.description && (
              <p className="text-sm text-gray-600">{link.description}</p>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}

// =============================================================================
// REFERENCES SECTION
// =============================================================================

export function References({ children }: { children: React.ReactNode }) {
  return (
    <section className="mt-8 pt-6 border-t border-gray-300">
      <h2 className="text-xl font-bold text-gray-900 mb-4">References</h2>
      <div className="text-sm text-gray-700">
        {children}
      </div>
    </section>
  );
}

// =============================================================================
// EXTERNAL LINKS
// =============================================================================

export function ExternalLinks({ links }: { links: { href: string; label: string }[] }) {
  return (
    <section className="mt-8 pt-6 border-t border-gray-300">
      <h2 className="text-xl font-bold text-gray-900 mb-4">External Links</h2>
      <ul className="space-y-1">
        {links.map((link, index) => (
          <li key={index} className="flex items-start">
            <span className="text-gray-400 mr-2">•</span>
            <a 
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

// =============================================================================
// QUOTE / BLOCKQUOTE
// =============================================================================

export function Quote({ 
  children, 
  source,
  text,
  author,
  context,
}: { 
  children?: React.ReactNode; 
  source?: string;
  // Legacy prop aliases used by older pages
  text?: string;
  author?: string;
  context?: string;
}) {
  const body = children ?? text;
  const footer = source ?? (author && context ? `${author} — ${context}` : author ?? context);
  return (
    <blockquote className="border-l-2 border-gray-300 pl-4 my-4 italic text-gray-700">
      {body}
      {footer && (
        <footer className="text-sm text-gray-500 mt-2 not-italic">— {footer}</footer>
      )}
    </blockquote>
  );
}

// =============================================================================
// PAGE HEADER COMPONENT (Reusable Wikipedia-style header)
// =============================================================================

export interface PageHeaderProps {
  title: string;
  subtitle?: string;
  category?: string;
  lastUpdated?: string;
  backLink?: {
    href: string;
    label: string;
  };
  breadcrumbs?: Array<{ href: string; label: string }>;
}

export function PageHeader({
  title,
  subtitle,
  category,
  lastUpdated,
  backLink,
  breadcrumbs,
}: PageHeaderProps) {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-4 text-sm text-gray-600">
            <ol className="flex items-center gap-2">
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Link href={crumb.href} className="hover:text-black hover:underline font-medium">
                    {crumb.label}
                  </Link>
                  {index < breadcrumbs.length - 1 && <span className="text-gray-400">›</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}
        
        {/* Back Link (alternative to breadcrumbs) */}
        {backLink && !breadcrumbs && (
          <Link 
            href={backLink.href} 
            className="text-sm text-gray-600 hover:text-black hover:underline mb-4 inline-block font-medium"
          >
            ← {backLink.label}
          </Link>
        )}
        
        {/* Category Badge */}
        {category && (
          <div className="mb-4">
            <span className="inline-block bg-gray-100 text-gray-900 px-3 py-1 text-xs font-bold uppercase tracking-wider border border-gray-300">
              {category}
            </span>
          </div>
        )}
        
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-4 tracking-tight">
          {title}
        </h1>
        
        {/* Subtitle */}
        {subtitle && (
          <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed mb-4 max-w-4xl">
            {subtitle}
          </p>
        )}
        
        {/* Last Updated */}
        {lastUpdated && (
          <div className="flex items-center gap-2 text-sm text-gray-500 pt-4 border-t border-gray-200">
            <span className="font-medium">Last updated:</span>
            <span className="font-mono">{lastUpdated}</span>
          </div>
        )}
      </div>
    </header>
  );
}

// =============================================================================
// MAIN ARTICLE PAGE LAYOUT
// =============================================================================

export function ArticlePage({
  title,
  subtitle,
  category,
  lastUpdated,
  infoBox,
  tableOfContents,
  children,
  relatedLinks,
  backLink,
}: ArticlePageProps) {
  return (
    <main className="min-h-screen bg-white">
      {/* Use PageHeader component */}
      <PageHeader 
        title={title}
        subtitle={subtitle}
        category={category}
        lastUpdated={lastUpdated}
        backLink={backLink}
      />

      {/* Article Content */}
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Content Column */}
          <article className="md:col-span-8 order-2 md:order-1">
            {/* Table of Contents */}
            {tableOfContents && tableOfContents.length > 0 && (
              <TableOfContents items={tableOfContents} />
            )}
            
            {/* Main Content */}
            <div className="prose prose-lg prose-gray max-w-none">
              {children}
            </div>
            
            {/* Related Links */}
            {relatedLinks && relatedLinks.length > 0 && (
              <RelatedLinks links={relatedLinks} />
            )}
          </article>

          {/* Sidebar Column */}
          <aside className="md:col-span-4 order-1 md:order-2">
            {/* Info Box */}
            {infoBox && <InfoBox {...infoBox} />}
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 mt-16">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
            <span>Part of</span>
            <Link href="/" className="font-bold text-black hover:underline">ObjectWire</Link>
            <span>coverage</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

// =============================================================================
// UTILITY COMPONENTS
// =============================================================================

// Simple data table
export function DataTable({ 
  headers, 
  rows 
}: { 
  headers: string[]; 
  rows: (string | React.ReactNode)[][];
}) {
  return (
    <div className="overflow-x-auto my-4">
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-gray-100">
            {headers.map((header, i) => (
              <th key={i} className="border border-gray-300 px-4 py-2 text-left font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {row.map((cell, j) => (
                <td key={j} className="border border-gray-300 px-4 py-2">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Notice box (for warnings, notes, etc.)
export function Notice({ 
  type = 'note', 
  children 
}: { 
  type?: 'note' | 'warning' | 'info';
  children: React.ReactNode;
}) {
  const styles = {
    note: 'bg-blue-50 border-blue-300 text-blue-900',
    warning: 'bg-yellow-50 border-yellow-300 text-yellow-900',
    info: 'bg-gray-50 border-gray-300 text-gray-900',
  };
  
  const icons = {
    note: 'ℹ️',
    warning: '⚠️',
    info: '📌',
  };

  return (
    <div className={`border rounded-sm p-4 my-4 ${styles[type]}`}>
      <span className="mr-2">{icons[type]}</span>
      {children}
    </div>
  );
}

// Image with caption
export function Figure({ 
  src, 
  alt, 
  caption,
  width = 'full'
}: { 
  src: string; 
  alt: string; 
  caption?: string;
  width?: 'full' | 'half' | 'third';
}) {
  const widthClasses = {
    full: 'w-full',
    half: 'w-full md:w-1/2',
    third: 'w-full md:w-1/3',
  };

  return (
    <figure className={`my-4 ${widthClasses[width]}`}>
      <img src={src} alt={alt} className="w-full h-auto border border-gray-300" />
      {caption && (
        <figcaption className="text-sm text-gray-600 mt-2 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
