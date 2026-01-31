import Link from "next/link";
import React from "react";

// =============================================================================
// DYNAMIC NEWS ARTICLE COMPONENT - SEO-Optimized, Reusable Template
// Based on ObjectWire's Minnesota Fraud Article Structure
// For: Investigations, breaking news, in-depth reports, case studies
// =============================================================================

// =============================================================================
// TYPES
// =============================================================================

export interface Breadcrumb {
  href: string;
  label: string;
}

export interface ArticleAuthor {
  name: string;
  department?: string;
  avatar?: string;
  initials?: string;
}

export interface CategoryBadge {
  label: string;
  color?: "red" | "blue" | "green" | "purple" | "orange" | "yellow" | "black";
}

export interface TimelineEvent {
  date: string;
  description: string;
  highlight?: boolean;
}

export interface RelatedArticle {
  href: string;
  category: string;
  categoryColor?: string;
  title: string;
}

export interface DocumentLink {
  href: string;
  label: string;
  icon?: string;
}

export interface SourceReference {
  number: number;
  url: string;
  title: string;
  description: string;
}

export interface HeroImage {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
}

export interface DynamicNewsArticleProps {
  // Header
  breadcrumbs?: Breadcrumb[];
  categories: CategoryBadge[];
  readTime?: string;
  title: string;
  subtitle?: string;
  author: ArticleAuthor;
  publishDate: string;
  updatedDate?: string;
  heroImage?: HeroImage;
  
  // Main Content
  children: React.ReactNode;
  
  // Sidebar
  relatedArticles?: RelatedArticle[];
  timeline?: TimelineEvent[];
  documents?: DocumentLink[];
  newsletterTitle?: string;
  newsletterDescription?: string;
  showNewsletter?: boolean;
  
  // Footer
  sources?: SourceReference[];
  showCorrections?: boolean;
  showEditorialStandards?: boolean;
}

// =============================================================================
// COLOR UTILITIES
// =============================================================================

const categoryColorClasses = {
  red: "bg-red-600",
  blue: "bg-blue-600",
  green: "bg-green-600",
  purple: "bg-purple-600",
  orange: "bg-orange-600",
  yellow: "bg-yellow-500",
  black: "bg-black",
};

const categoryTextColorClasses = {
  red: "text-red-600",
  blue: "text-blue-600",
  green: "text-green-600",
  purple: "text-purple-600",
  orange: "text-orange-600",
  yellow: "text-yellow-600",
  black: "text-black",
};

// =============================================================================
// MAIN COMPONENT
// =============================================================================

export function DynamicNewsArticle({
  breadcrumbs,
  categories,
  readTime,
  title,
  subtitle,
  author,
  publishDate,
  updatedDate,
  heroImage,
  children,
  relatedArticles,
  timeline,
  documents,
  newsletterTitle = "Investigation Updates",
  newsletterDescription = "Get updates on this case and other ObjectWire investigations.",
  showNewsletter = true,
  sources,
  showCorrections = true,
  showEditorialStandards = true,
}: DynamicNewsArticleProps) {
  return (
    <article className="min-h-screen bg-white">
      {/* Hero Image (optional) */}
      {heroImage && (
        <div className="w-full">
          <img
            src={heroImage.src}
            alt={heroImage.alt}
            className="w-full h-[40vh] md:h-[60vh] object-cover"
          />
          {(heroImage.caption || heroImage.credit) && (
            <div className="container py-2 border-b border-gray-200">
              {heroImage.caption && (
                <p className="text-sm text-gray-600 italic">{heroImage.caption}</p>
              )}
              {heroImage.credit && (
                <p className="text-xs text-gray-500 mt-1">Credit: {heroImage.credit}</p>
              )}
            </div>
          )}
        </div>
      )}

      {/* Article Header */}
      <header className="border-b-2 border-black">
        <div className="container py-8 md:py-12">
          {/* Breadcrumb Navigation */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  <Link href={crumb.href} className="hover:text-black">
                    {crumb.label}
                  </Link>
                  {index < breadcrumbs.length - 1 && <span>/</span>}
                </React.Fragment>
              ))}
            </nav>
          )}

          {/* Category Badges & Read Time */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {categories.map((category, index) => (
              <span
                key={index}
                className={`${categoryColorClasses[category.color || "red"]} text-white text-xs font-bold px-3 py-1`}
              >
                {category.label}
              </span>
            ))}
            {readTime && <span className="text-sm text-gray-500">{readTime}</span>}
          </div>

          {/* Article Title */}
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-6 max-w-4xl">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mb-6">
              {subtitle}
            </p>
          )}

          {/* Author & Date */}
          <div className="flex flex-wrap items-center gap-4 text-sm border-t border-gray-200 pt-6">
            <div className="flex items-center gap-3">
              {author.avatar ? (
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="w-10 h-10 rounded-full"
                />
              ) : (
                <div className={`w-10 h-10 ${categoryColorClasses[categories[0]?.color || "red"]} rounded-full flex items-center justify-center`}>
                  <span className="text-white font-bold">
                    {author.initials || author.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              )}
              <div>
                <p className="font-semibold">{author.name}</p>
                {author.department && <p className="text-gray-500">{author.department}</p>}
              </div>
            </div>
            <div className="text-gray-500">
              <time dateTime={publishDate}>{publishDate}</time>
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

      {/* Main Content Grid */}
      <div className="container py-8 md:py-12">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Article Body */}
          <div className="lg:col-span-8">
            <div className="prose prose-lg max-w-none">
              {children}
              
              {/* Source Citations */}
              {sources && sources.length > 0 && (
                <div className="border-t-2 border-black pt-6 mt-10 not-prose">
                  <h3 className="font-bold text-sm tracking-wider mb-4">SOURCES & REFERENCES</h3>
                  <ul className="text-sm space-y-3 text-gray-600">
                    {sources.map((source) => (
                      <li key={source.number}>
                        <span className="font-semibold">[{source.number}]</span>{" "}
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {source.title}
                        </a>
                        {source.description && <> — {source.description}</>}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            
            {/* Related Articles */}
            {relatedArticles && relatedArticles.length > 0 && (
              <div className="border border-gray-200 mb-8">
                <div className="bg-black text-white px-4 py-2">
                  <h3 className="font-bold text-sm">RELATED COVERAGE</h3>
                </div>
                <div className="p-4 space-y-4">
                  {relatedArticles.map((article, index) => (
                    <Link key={index} href={article.href} className="block group">
                      <span className={`text-xs ${article.categoryColor || 'text-red-600'} font-bold`}>
                        {article.category}
                      </span>
                      <h4 className="font-semibold text-sm group-hover:underline mt-1">
                        {article.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Timeline */}
            {timeline && timeline.length > 0 && (
              <div className="bg-gray-50 p-6 mb-8">
                <h3 className="font-bold text-sm tracking-wider mb-4">CASE TIMELINE</h3>
                <div className="space-y-4 text-sm">
                  {timeline.map((event, index) => (
                    <div key={index} className="flex gap-3">
                      <div
                        className={`w-2 h-2 ${event.highlight ? 'bg-red-600' : 'bg-gray-400'} rounded-full mt-2`}
                      ></div>
                      <div>
                        <p className="font-bold">{event.date}</p>
                        <p className="text-gray-500">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Documents */}
            {documents && documents.length > 0 && (
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
                        <span>{doc.icon || "📄"}</span>
                        <span>{doc.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Newsletter Signup */}
            {showNewsletter && (
              <div className="bg-black text-white p-6">
                <h3 className="font-bold mb-2">{newsletterTitle}</h3>
                <p className="text-sm text-gray-300 mb-4">
                  {newsletterDescription}
                </p>
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full px-3 py-2 text-black text-sm mb-2"
                  aria-label="Email address"
                />
                <button className="w-full bg-red-600 py-2 text-sm font-bold hover:bg-red-700 transition-colors">
                  SUBSCRIBE
                </button>
              </div>
            )}
          </aside>
        </div>
      </div>

      {/* Article Footer */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="container py-8">
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
              {showCorrections && (
                <Link href="/corrections" className="text-sm text-gray-500 hover:underline">
                  Report a correction
                </Link>
              )}
              {showEditorialStandards && (
                <Link href="/editorial-standards" className="text-sm text-gray-500 hover:underline">
                  Editorial Standards
                </Link>
              )}
            </div>
          </div>
        </div>
      </footer>
    </article>
  );
}

// =============================================================================
// REUSABLE SUB-COMPONENTS FOR ARTICLE CONTENT
// =============================================================================

// Case Overview / Key Facts Box
export function CaseOverview({
  title = "CASE OVERVIEW",
  items,
  color = "red",
}: {
  title?: string;
  items: Array<{ label: string; value: string }>;
  color?: "red" | "blue" | "yellow" | "black" | "green" | "purple" | "orange";
}) {
  const bgColors = {
    red: "bg-red-50 border-red-600",
    blue: "bg-blue-50 border-blue-600",
    yellow: "bg-yellow-50 border-yellow-600",
    black: "bg-gray-100 border-black",
    green: "bg-green-50 border-green-600",
    purple: "bg-purple-50 border-purple-600",
    orange: "bg-orange-50 border-orange-600",
  };

  const bulletColors = {
    red: "text-red-600",
    blue: "text-blue-600",
    yellow: "text-yellow-600",
    black: "text-black",
    green: "text-green-600",
    purple: "text-purple-600",
    orange: "text-orange-600",
  };

  return (
    <div className={`${bgColors[color]} border-l-4 p-6 mb-8 not-prose`}>
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

// Process Diagram with Numbered Steps
export function ProcessDiagram({
  title,
  steps,
  color = "red",
}: {
  title: string;
  steps: Array<{ title: string; description: string }>;
  color?: "red" | "blue" | "black" | "green" | "purple" | "orange";
}) {
  const bgColors = {
    red: "bg-red-600",
    blue: "bg-blue-600",
    black: "bg-black",
    green: "bg-green-600",
    purple: "bg-purple-600",
    orange: "bg-orange-600",
  };

  return (
    <div className="bg-gray-50 p-6 my-8 not-prose">
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

// Key Figures Grid
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
    <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
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

// Statistics Box
export function StatisticsBox({
  title = "BY THE NUMBERS",
  stats,
  color = "red",
}: {
  title?: string;
  stats: Array<{ value: string; label: string }>;
  color?: "red" | "blue" | "yellow" | "black" | "green" | "purple" | "orange";
}) {
  const bgColors = {
    red: "bg-yellow-50 border-yellow-200",
    blue: "bg-blue-50 border-blue-200",
    yellow: "bg-yellow-50 border-yellow-200",
    black: "bg-gray-50 border-gray-200",
    green: "bg-green-50 border-green-200",
    purple: "bg-purple-50 border-purple-200",
    orange: "bg-orange-50 border-orange-200",
  };

  return (
    <div className={`${bgColors[color]} border p-6 my-8 not-prose`}>
      <h4 className="font-bold text-sm mb-3">📊 {title}</h4>
      <div className={`grid grid-cols-2 ${stats.length > 2 ? 'md:grid-cols-4' : 'md:grid-cols-2'} gap-4 text-center`}>
        {stats.map((stat, index) => (
          <div key={index}>
            <p className={`text-3xl font-black ${categoryTextColorClasses[color]}`}>
              {stat.value}
            </p>
            <p className="text-xs text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Blockquote Component
export function ArticleQuote({
  quote,
  author,
  title,
}: {
  quote: string;
  author?: string;
  title?: string;
}) {
  return (
    <blockquote className="border-l-4 border-black pl-6 italic my-8 text-xl">
      {quote}
      {(author || title) && (
        <footer className="text-sm text-gray-500 mt-2 not-italic">
          {author && <span>— {author}</span>}
          {title && <span>, {title}</span>}
        </footer>
      )}
    </blockquote>
  );
}

// Video Embed Component
export function VideoEmbed({
  videoId,
  title,
  caption,
  provider = "youtube",
}: {
  videoId: string;
  title: string;
  caption?: string;
  provider?: "youtube" | "vimeo";
}) {
  const embedUrls = {
    youtube: `https://www.youtube.com/embed/${videoId}`,
    vimeo: `https://player.vimeo.com/video/${videoId}`,
  };

  return (
    <div className="my-12">
      <div className="relative aspect-video w-full bg-black border-4 border-black shadow-lg">
        <iframe
          width="100%"
          height="100%"
          src={embedUrls[provider]}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0"
        ></iframe>
      </div>
      {caption && (
        <p className="text-center text-sm mt-2 text-gray-600 italic border-b border-gray-300 pb-2">
          {caption}
        </p>
      )}
    </div>
  );
}

// Image with Caption
export function ArticleImage({
  src,
  alt,
  caption,
  credit,
}: {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
}) {
  return (
    <figure className="my-8">
      <img
        src={src}
        alt={alt}
        className="w-full border-4 border-black shadow-lg"
      />
      {(caption || credit) && (
        <figcaption className="text-center text-sm mt-2 text-gray-600">
          {caption && <span className="italic">{caption}</span>}
          {credit && <span className="block text-xs text-gray-500 mt-1">Credit: {credit}</span>}
        </figcaption>
      )}
    </figure>
  );
}
