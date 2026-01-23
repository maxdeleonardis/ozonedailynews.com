import Link from "next/link";
import React from "react";

// =============================================================================
// INVESTIGATIVE ARTICLE COMPONENT - Serious, document-focused journalism
// For: Investigations, fraud cases, deep dives, legal coverage, exposés
// =============================================================================

// =============================================================================
// TYPES
// =============================================================================

export interface InvestigativeArticleProps {
  title: string;
  subtitle: string;
  category: string;
  secondaryCategory?: string;
  readTime: string;
  author: {
    name: string;
    department?: string;
  };
  publishDate: string;
  updatedDate?: string;
  breadcrumbs?: Array<{ href: string; label: string }>;
  children: React.ReactNode;
  sidebar?: React.ReactNode;
}

// =============================================================================
// CASE OVERVIEW BOX
// =============================================================================

export function CaseOverview({
  title = "CASE OVERVIEW",
  items,
  color = "red",
}: {
  title?: string;
  items: Array<{ label: string; value: string }>;
  color?: "red" | "blue" | "yellow" | "black";
}) {
  const colors = {
    red: "bg-red-50 border-red-600",
    blue: "bg-blue-50 border-blue-600",
    yellow: "bg-yellow-50 border-yellow-600",
    black: "bg-gray-100 border-black",
  };

  const bulletColors = {
    red: "text-red-600",
    blue: "text-blue-600",
    yellow: "text-yellow-600",
    black: "text-black",
  };

  return (
    <div className={`${colors[color]} border-l-4 p-6 mb-8`}>
      <h3 className="font-bold text-sm tracking-wider mb-3">{title}</h3>
      <ul className="space-y-2 text-sm">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className={`${bulletColors[color]} font-bold`}>•</span>
            <span>
              <strong>{item.label}</strong> {item.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// =============================================================================
// PROCESS/STRUCTURE DIAGRAM (Numbered Steps)
// =============================================================================

export function ProcessDiagram({
  title,
  steps,
  color = "red",
}: {
  title: string;
  steps: Array<{ title: string; description: string }>;
  color?: "red" | "blue" | "black";
}) {
  const bgColors = {
    red: "bg-red-600",
    blue: "bg-blue-600",
    black: "bg-black",
  };

  return (
    <div className="bg-gray-50 p-6 my-8">
      <h4 className="font-bold text-sm mb-4">{title}</h4>
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-4">
            <div
              className={`${bgColors[color]} text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0`}
            >
              {index + 1}
            </div>
            <div>
              <p className="font-semibold">{step.title}</p>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// =============================================================================
// KEY FIGURES GRID
// =============================================================================

export function KeyFigures({
  figures,
}: {
  figures: Array<{
    name: string;
    role: string;
    description: string;
    status?: string;
  }>;
}) {
  return (
    <div className="grid md:grid-cols-2 gap-6 my-8">
      {figures.map((figure, index) => (
        <div key={index} className="border-2 border-black p-6">
          <h4 className="font-bold mb-2">{figure.name}</h4>
          <p className="text-sm text-gray-500 mb-2">{figure.role}</p>
          <p className="text-sm text-gray-600">{figure.description}</p>
          {figure.status && (
            <div className="mt-3 pt-3 border-t border-gray-200">
              <span className="text-xs font-bold text-red-600 uppercase">
                Status: {figure.status}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// =============================================================================
// STATISTICS BOX
// =============================================================================

export function StatisticsBox({
  title = "BY THE NUMBERS",
  stats,
  color = "yellow",
}: {
  title?: string;
  stats: Array<{ value: string; label: string }>;
  color?: "yellow" | "red" | "blue" | "gray";
}) {
  const bgColors = {
    yellow: "bg-yellow-50 border-yellow-200",
    red: "bg-red-50 border-red-200",
    blue: "bg-blue-50 border-blue-200",
    gray: "bg-gray-50 border-gray-200",
  };

  const valueColors = {
    yellow: "text-red-600",
    red: "text-red-600",
    blue: "text-blue-600",
    gray: "text-black",
  };

  return (
    <div className={`${bgColors[color]} border p-6 my-8`}>
      <h4 className="font-bold text-sm mb-3">📊 {title}</h4>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <p className={`text-3xl font-black ${valueColors[color]}`}>
              {stat.value}
            </p>
            <p className="text-xs text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// =============================================================================
// INVESTIGATION QUOTE (Blockquote)
// =============================================================================

export function InvestigationQuote({
  children,
  source,
  context,
}: {
  children: React.ReactNode;
  source: string;
  context?: string;
}) {
  return (
    <blockquote className="border-l-4 border-black pl-6 italic my-8 text-xl">
      {children}
      <footer className="text-sm text-gray-500 mt-2 not-italic">
        — {source}
        {context && <span className="text-gray-400">, {context}</span>}
      </footer>
    </blockquote>
  );
}

// =============================================================================
// DOCUMENT EMBED / EVIDENCE BOX
// =============================================================================

export function DocumentEmbed({
  title,
  type = "document",
  description,
  source,
  href,
}: {
  title: string;
  type?: "document" | "video" | "audio" | "image";
  description?: string;
  source: string;
  href?: string;
}) {
  const icons = {
    document: "📄",
    video: "🎬",
    audio: "🎙️",
    image: "📸",
  };

  return (
    <div className="border-2 border-gray-300 bg-gray-50 p-4 my-6">
      <div className="flex items-start gap-3">
        <span className="text-2xl">{icons[type]}</span>
        <div className="flex-1">
          <h4 className="font-bold text-sm">{title}</h4>
          {description && (
            <p className="text-sm text-gray-600 mt-1">{description}</p>
          )}
          <p className="text-xs text-gray-400 mt-2">Source: {source}</p>
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-sm text-blue-600 hover:underline font-medium"
            >
              View Document →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// =============================================================================
// SOURCES & REFERENCES
// =============================================================================

export function SourcesCited({
  sources,
}: {
  sources: Array<{ label: string; href?: string; description?: string }>;
}) {
  return (
    <div className="border-t-2 border-black pt-6 mt-10">
      <h3 className="font-bold text-sm tracking-wider mb-4">
        SOURCES & REFERENCES
      </h3>
      <ul className="text-sm space-y-3 text-gray-600">
        {sources.map((source, index) => (
          <li key={index}>
            <span className="font-semibold">[{index + 1}]</span>{" "}
            {source.href ? (
              <a
                href={source.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {source.label}
              </a>
            ) : (
              <span>{source.label}</span>
            )}
            {source.description && <span> — {source.description}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

// =============================================================================
// SIDEBAR: CASE TIMELINE
// =============================================================================

export function CaseTimeline({
  events,
}: {
  events: Array<{
    date: string;
    description: string;
    highlight?: boolean;
    current?: boolean;
  }>;
}) {
  return (
    <div className="bg-gray-50 p-6 mb-8">
      <h3 className="font-bold text-sm tracking-wider mb-4">CASE TIMELINE</h3>
      <div className="space-y-4 text-sm">
        {events.map((event, index) => (
          <div key={index} className="flex gap-3">
            <div
              className={`w-2 h-2 rounded-full mt-2 ${
                event.current
                  ? "bg-black"
                  : event.highlight
                  ? "bg-red-600"
                  : "bg-gray-400"
              }`}
            />
            <div>
              <p className="font-bold">{event.date}</p>
              <p className="text-gray-500">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// =============================================================================
// SIDEBAR: RELATED COVERAGE
// =============================================================================

export function RelatedCoverage({
  stories,
}: {
  stories: Array<{
    href: string;
    category: string;
    categoryColor?: string;
    title: string;
  }>;
}) {
  return (
    <div className="border border-gray-200 mb-8">
      <div className="bg-black text-white px-4 py-2">
        <h3 className="font-bold text-sm">RELATED COVERAGE</h3>
      </div>
      <div className="p-4 space-y-4">
        {stories.map((story, index) => (
          <Link key={index} href={story.href} className="block group">
            <span
              className={`text-xs font-bold ${
                story.categoryColor || "text-red-600"
              }`}
            >
              {story.category}
            </span>
            <h4 className="font-semibold text-sm group-hover:underline mt-1">
              {story.title}
            </h4>
          </Link>
        ))}
      </div>
    </div>
  );
}

// =============================================================================
// SIDEBAR: KEY DOCUMENTS
// =============================================================================

export function KeyDocuments({
  documents,
}: {
  documents: Array<{ label: string; href: string }>;
}) {
  return (
    <div className="border border-gray-200 p-6 mb-8">
      <h3 className="font-bold text-sm tracking-wider mb-4">KEY DOCUMENTS</h3>
      <ul className="space-y-3 text-sm">
        {documents.map((doc, index) => (
          <li key={index}>
            <a
              href={doc.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline flex items-center gap-2"
            >
              <span>📄</span>
              <span>{doc.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

// =============================================================================
// SIDEBAR: NEWSLETTER SIGNUP
// =============================================================================

export function InvestigationNewsletter({
  title = "Investigation Updates",
  description = "Get updates on this case and other investigations.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="bg-black text-white p-6">
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-300 mb-4">{description}</p>
      <input
        type="email"
        placeholder="Enter email"
        className="w-full px-3 py-2 text-black text-sm mb-2"
      />
      <button className="w-full bg-red-600 py-2 text-sm font-bold hover:bg-red-700 transition-colors">
        SUBSCRIBE
      </button>
    </div>
  );
}

// =============================================================================
// SECTION HEADING
// =============================================================================

export function InvestigationSection({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20">
      <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
        {title}
      </h2>
      {children}
    </section>
  );
}

// =============================================================================
// DROP CAP PARAGRAPH (First paragraph style)
// =============================================================================

export function LeadParagraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:leading-none">
      {children}
    </p>
  );
}

// =============================================================================
// MAIN INVESTIGATIVE ARTICLE LAYOUT
// =============================================================================

export function InvestigativeArticle({
  title,
  subtitle,
  category,
  secondaryCategory,
  readTime,
  author,
  publishDate,
  updatedDate,
  breadcrumbs,
  children,
  sidebar,
}: InvestigativeArticleProps) {
  return (
    <article className="min-h-screen bg-white">
      {/* Article Header */}
      <header className="border-b-2 border-black">
        <div className="container mx-auto px-4 py-8 md:py-12 max-w-6xl">
          {/* Breadcrumb */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
              <Link href="/" className="hover:text-black">
                Home
              </Link>
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  <span>/</span>
                  <Link href={crumb.href} className="hover:text-black">
                    {crumb.label}
                  </Link>
                </React.Fragment>
              ))}
            </nav>
          )}

          {/* Category & Date */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-red-600 text-white text-xs font-bold px-3 py-1">
              {category}
            </span>
            {secondaryCategory && (
              <span className="bg-black text-white text-xs font-bold px-3 py-1">
                {secondaryCategory}
              </span>
            )}
            <span className="text-sm text-gray-500">{readTime}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-6 max-w-4xl">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mb-6">
            {subtitle}
          </p>

          {/* Author & Date */}
          <div className="flex flex-wrap items-center gap-4 text-sm border-t border-gray-200 pt-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">OW</span>
              </div>
              <div>
                <p className="font-semibold">{author.name}</p>
                {author.department && (
                  <p className="text-gray-500">{author.department}</p>
                )}
              </div>
            </div>
            <div className="text-gray-500">
              <time>{publishDate}</time>
              {updatedDate && (
                <>
                  <span className="mx-2">•</span>
                  <span>Updated {updatedDate}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Article Body */}
          <div className="lg:col-span-8">
            <div className="prose prose-lg max-w-none">{children}</div>
          </div>

          {/* Sidebar */}
          {sidebar && <aside className="lg:col-span-4">{sidebar}</aside>}
        </div>
      </div>

      {/* Article Footer */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm text-gray-500">
                <strong>Originally Published:</strong> {publishDate}
              </p>
              {updatedDate && (
                <p className="text-sm text-gray-500">
                  <strong>Last Updated:</strong> {updatedDate}
                </p>
              )}
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/corrections"
                className="text-sm text-gray-500 hover:underline"
              >
                Report a correction
              </Link>
              <Link
                href="/editorial-standards"
                className="text-sm text-gray-500 hover:underline"
              >
                Editorial Standards
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </article>
  );
}

// =============================================================================
// UTILITY EXPORTS
// =============================================================================

export default InvestigativeArticle;
