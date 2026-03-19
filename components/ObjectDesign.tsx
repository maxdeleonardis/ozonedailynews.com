import Link from "next/link";
import React from "react";

// =============================================================================
// OBJECTDESIGN.TSX
// Premium hybrid of ArticlePage (Wikipedia structure) + NewsArticle (editorial
// design). Use for long-form profiles, deep-dives, and flagship articles that
// need both structured reference content AND a visually compelling hero.
//
// EXPORTS (sub-components):
//   ObjectDesign         – main layout wrapper
//   ObjInfoBox           – dark-header sidebar infobox with thumbnail
//   ObjTOC               – sleek numbered table of contents
//   ObjSection           – content section with styled heading
//   ObjHighlight         – pull-quote / key-point / stat callout card
//   ObjQuote             – large editorial pull-quote
//   ObjCallout           – alert / insight / breaking callout box
//   ObjTimeline          – vertical event timeline
//   ObjStat              – inline stat highlight
//   ObjStatGrid          – grid of stat cards
//   ObjImageGallery      – hover-zoom image gallery
//   ObjEmbed             – social media embed placeholder
//   ObjTags              – hashtag tag cloud
//   ObjRelated           – related articles card grid
//   ObjExternalLinks     – external links list
// =============================================================================

// =============================================================================
// RE-EXPORTS (shared types already in NewsArticle)
// =============================================================================
export type { TopicTagType, AuthorInfo } from "./NewsArticle";
export { TopicTag, inferTopicTag } from "./NewsArticle";

// =============================================================================
// TYPES
// =============================================================================

export type ObjCategoryColor =
  | "red" | "blue" | "green" | "purple" | "orange" | "pink" | "yellow" | "cyan" | "slate";

export interface ObjInfoBoxItem {
  label: string;
  value: string | React.ReactNode;
}

export interface ObjInfoBoxProps {
  title?: string;
  image?: {
    src: string;
    alt: string;
    caption?: string;
  };
  items: ObjInfoBoxItem[];
  accentColor?: ObjCategoryColor;
}

export interface ObjTOCItem {
  id: string;
  label: string;
  level?: 1 | 2;
}

export interface ObjRelatedLink {
  href: string;
  label: string;
  description?: string;
  category?: string;
}

export interface ObjectDesignProps {
  // Header
  title: string;
  subtitle?: string;
  category: string;
  categoryColor?: ObjCategoryColor;
  publishDate: string;
  readTime?: string;
  lastUpdated?: string;
  // Badges
  breaking?: boolean;
  trending?: boolean;
  exclusive?: boolean;
  // Author
  author?: {
    name: string;
    role?: string;
    avatar?: string;
    twitter?: string;
    bio?: string;
  };
  // Hero
  heroImage?: {
    src: string;
    alt: string;
    caption?: string;
    credit?: string;
  };
  // Breadcrumbs
  breadcrumbs?: Array<{ href: string; label: string }>;
  // Sidebar
  infoBox?: ObjInfoBoxProps;
  // Content structure
  tableOfContents?: ObjTOCItem[];
  children: React.ReactNode;
  // Footer
  relatedLinks?: ObjRelatedLink[];
  externalLinks?: Array<{ href: string; label: string }>;
  tags?: string[];
}

// =============================================================================
// ACCENT COLOR MAPS
// =============================================================================

const accentBorder: Record<ObjCategoryColor, string> = {
  red:    "border-red-500",
  blue:   "border-blue-500",
  green:  "border-green-500",
  purple: "border-purple-500",
  orange: "border-orange-500",
  pink:   "border-pink-500",
  yellow: "border-yellow-500",
  cyan:   "border-cyan-500",
  slate:  "border-slate-500",
};

const accentText: Record<ObjCategoryColor, string> = {
  red:    "text-red-600",
  blue:   "text-blue-600",
  green:  "text-green-600",
  purple: "text-purple-600",
  orange: "text-orange-600",
  pink:   "text-pink-600",
  yellow: "text-yellow-600",
  cyan:   "text-cyan-600",
  slate:  "text-slate-600",
};

const accentBg: Record<ObjCategoryColor, string> = {
  red:    "bg-red-600",
  blue:   "bg-blue-600",
  green:  "bg-green-600",
  purple: "bg-purple-600",
  orange: "bg-orange-600",
  pink:   "bg-pink-600",
  yellow: "bg-yellow-500",
  cyan:   "bg-cyan-600",
  slate:  "bg-slate-600",
};

const accentGradient: Record<ObjCategoryColor, string> = {
  red:    "from-red-500/15 to-rose-500/5",
  blue:   "from-blue-500/15 to-cyan-500/5",
  green:  "from-green-500/15 to-emerald-500/5",
  purple: "from-purple-500/15 to-pink-500/5",
  orange: "from-orange-500/15 to-yellow-500/5",
  pink:   "from-pink-500/15 to-rose-500/5",
  yellow: "from-yellow-400/15 to-amber-400/5",
  cyan:   "from-cyan-500/15 to-sky-500/5",
  slate:  "from-slate-500/15 to-gray-500/5",
};

// =============================================================================
// OBJ INFO BOX — Premium dark-header sidebar card
// =============================================================================

export function ObjInfoBox({
  title,
  image,
  items,
  accentColor = "blue",
}: ObjInfoBoxProps) {
  return (
    <aside className="bg-white border border-gray-200 shadow-sm overflow-hidden sticky top-6">
      {/* Dark header bar */}
      {title && (
        <div className="bg-gray-900 px-4 py-3">
          <h3 className="font-black text-xs uppercase tracking-widest text-center text-white">
            {title}
          </h3>
        </div>
      )}

      {/* Thumbnail */}
      {image && (
        <div className={`border-b-2 ${accentBorder[accentColor]}`}>
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-auto block"
          />
          {image.caption && (
            <p className="text-[11px] text-gray-500 text-center px-3 py-2 italic leading-snug">
              {image.caption}
            </p>
          )}
        </div>
      )}

      {/* Data rows */}
      <dl className="divide-y divide-gray-100">
        {items.map((item, index) => (
          <div key={index} className="px-4 py-2.5 flex gap-3">
            <dt className="text-[11px] font-bold text-gray-400 uppercase tracking-wide min-w-[90px] pt-0.5 shrink-0">
              {item.label}
            </dt>
            <dd className="text-sm text-gray-900 font-medium leading-snug">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}

// =============================================================================
// OBJ TOC — Sleek numbered table of contents
// =============================================================================

export function ObjTOC({
  items,
  accentColor = "blue",
}: {
  items: ObjTOCItem[];
  accentColor?: ObjCategoryColor;
}) {
  return (
    <nav className={`mb-10 border border-gray-200 bg-gray-50 overflow-hidden`}>
      {/* Header */}
      <div className={`bg-gray-900 px-5 py-3 flex items-center gap-2`}>
        <span className="text-gray-400 text-xs">☰</span>
        <span className="text-xs font-black uppercase tracking-widest text-white">
          Contents
        </span>
      </div>
      {/* Items */}
      <ol className="px-5 py-4 space-y-1">
        {items.map((item, index) => (
          <li
            key={item.id}
            className={item.level === 2 ? "ml-5" : ""}
          >
            <a
              href={`#${item.id}`}
              className={`flex items-baseline gap-2.5 text-sm py-0.5 group`}
            >
              <span className={`font-mono text-[11px] font-bold tabular-nums ${accentText[accentColor]} group-hover:opacity-80`}>
                {item.level === 2 ? `  ${index + 1}` : `${index + 1}`}
              </span>
              <span className="text-gray-700 group-hover:text-gray-900 group-hover:underline underline-offset-2 decoration-gray-300 font-medium leading-snug transition-colors">
                {item.label}
              </span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

// =============================================================================
// OBJ SECTION — Content section with styled heading
// =============================================================================

export function ObjSection({
  id,
  title,
  children,
  level = 2,
  accentColor = "blue",
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  level?: 2 | 3;
  accentColor?: ObjCategoryColor;
}) {
  const Tag = level === 2 ? "h2" : "h3";
  const headingSize = level === 2
    ? "text-2xl md:text-3xl font-black"
    : "text-xl md:text-2xl font-bold";

  return (
    <section id={id} className="mb-12 scroll-mt-24">
      <Tag
        className={`${headingSize} text-gray-900 mb-5 pb-3 border-b-2 ${accentBorder[accentColor]}`}
      >
        {title}
      </Tag>
      <div
        className={`
          prose prose-lg prose-gray max-w-none
          prose-headings:font-black prose-headings:text-gray-900
          prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
          prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-5
          prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
          prose-strong:text-gray-900
          prose-ul:space-y-1 prose-li:text-gray-700
          prose-img:rounded-lg prose-img:shadow-md
        `}
      >
        {children}
      </div>
    </section>
  );
}

// =============================================================================
// OBJ HIGHLIGHT — Pull-quote / key-point / stat callout
// =============================================================================

export function ObjHighlight({
  children,
  type = "key-point",
  color = "blue",
}: {
  children: React.ReactNode;
  type?: "quote" | "key-point" | "stat" | "breaking";
  color?: ObjCategoryColor;
}) {
  const icons: Record<string, string> = {
    quote: "❝",
    "key-point": "◆",
    stat: "▲",
    breaking: "●",
  };

  const labels: Record<string, string> = {
    quote: "Quote",
    "key-point": "Key Point",
    stat: "By The Numbers",
    breaking: "Breaking",
  };

  return (
    <div
      className={`my-8 rounded-none border-l-[3px] ${accentBorder[color]} bg-gradient-to-r ${accentGradient[color]} px-6 py-5`}
    >
      <div className="flex items-center gap-2 mb-3">
        <span className={`text-xs font-black uppercase tracking-widest ${accentText[color]}`}>
          {icons[type]} {labels[type]}
        </span>
      </div>
      <div className="text-[17px] font-medium text-gray-800 leading-relaxed">
        {children}
      </div>
    </div>
  );
}

// =============================================================================
// OBJ QUOTE — Large editorial pull-quote
// =============================================================================

export function ObjQuote({
  children,
  source,
  sourceRole,
}: {
  children: React.ReactNode;
  source?: string;
  sourceRole?: string;
}) {
  return (
    <blockquote className="my-10 relative">
      <span
        aria-hidden
        className="absolute -top-4 -left-2 text-[80px] leading-none text-gray-200 font-serif select-none"
      >
        &ldquo;
      </span>
      <p className="relative text-xl md:text-2xl font-bold text-gray-900 leading-snug italic pl-6 border-l-4 border-gray-900">
        {children}
      </p>
      {source && (
        <footer className="mt-4 pl-6 flex items-center gap-3">
          <div className="w-8 h-0.5 bg-gray-400" />
          <div>
            <cite className="text-sm font-bold text-gray-900 not-italic">
              {source}
            </cite>
            {sourceRole && (
              <span className="text-xs text-gray-500 ml-2">{sourceRole}</span>
            )}
          </div>
        </footer>
      )}
    </blockquote>
  );
}

// =============================================================================
// OBJ CALLOUT — Alert / insight / breaking callout box
// =============================================================================

export function ObjCallout({
  children,
  type = "insight",
  title,
}: {
  children: React.ReactNode;
  type?: "insight" | "warning" | "breaking" | "note" | "exclusive";
  title?: string;
}) {
  const styles: Record<string, { bar: string; bg: string; icon: string; label: string }> = {
    insight:   { bar: "bg-blue-600",   bg: "bg-blue-50 border-blue-200",   icon: "💡", label: "Insight" },
    warning:   { bar: "bg-orange-500", bg: "bg-orange-50 border-orange-200", icon: "⚠️", label: "Warning" },
    breaking:  { bar: "bg-red-600",    bg: "bg-red-50 border-red-200",     icon: "🔴", label: "Breaking" },
    note:      { bar: "bg-gray-600",   bg: "bg-gray-50 border-gray-200",   icon: "📌", label: "Note" },
    exclusive: { bar: "bg-yellow-500", bg: "bg-yellow-50 border-yellow-200", icon: "⭐", label: "Exclusive" },
  };

  const s = styles[type];

  return (
    <div className={`my-8 border rounded-none overflow-hidden ${s.bg}`}>
      <div className={`${s.bar} px-4 py-2 flex items-center gap-2`}>
        <span className="text-sm">{s.icon}</span>
        <span className="text-xs font-black uppercase tracking-widest text-white">
          {title || s.label}
        </span>
      </div>
      <div className="px-5 py-4 text-sm text-gray-800 leading-relaxed">
        {children}
      </div>
    </div>
  );
}

// =============================================================================
// OBJ TIMELINE — Vertical event timeline
// =============================================================================

export function ObjTimeline({
  events,
  accentColor = "blue",
}: {
  events: Array<{ time: string; title: string; description?: string }>;
  accentColor?: ObjCategoryColor;
}) {
  return (
    <div className="my-8 relative pl-6">
      {/* Vertical line */}
      <div className={`absolute left-[9px] top-2 bottom-2 w-0.5 bg-gray-200`} />
      <div className="space-y-5">
        {events.map((event, index) => (
          <div key={index} className="relative">
            {/* Dot */}
            <div
              className={`absolute -left-[25px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-white shadow-sm ${accentBg[accentColor]}`}
            />
            <div className="border border-gray-200 bg-white px-4 py-3 hover:border-gray-400 transition-colors">
              <span className={`text-[11px] font-black uppercase tracking-wider ${accentText[accentColor]}`}>
                {event.time}
              </span>
              <p className="font-bold text-gray-900 mt-0.5 text-sm leading-snug">
                {event.title}
              </p>
              {event.description && (
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  {event.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// =============================================================================
// OBJ STAT — Single stat display
// =============================================================================

export function ObjStat({
  value,
  label,
  description,
  accentColor = "blue",
}: {
  value: string;
  label: string;
  description?: string;
  accentColor?: ObjCategoryColor;
}) {
  return (
    <div className={`border-t-4 ${accentBorder[accentColor]} bg-white border border-gray-200 border-t-0 px-5 py-4`}>
      <div className={`text-3xl font-black ${accentText[accentColor]} leading-none mb-1`}>
        {value}
      </div>
      <div className="text-sm font-bold text-gray-900 uppercase tracking-wide">
        {label}
      </div>
      {description && (
        <div className="text-xs text-gray-500 mt-1 leading-snug">
          {description}
        </div>
      )}
    </div>
  );
}

// =============================================================================
// OBJ STAT GRID — Grid of stat cards
// =============================================================================

export function ObjStatGrid({
  stats,
  accentColor = "blue",
  columns = 3,
}: {
  stats: Array<{ value: string; label: string; description?: string }>;
  accentColor?: ObjCategoryColor;
  columns?: 2 | 3 | 4;
}) {
  const colClass: Record<number, string> = {
    2: "grid-cols-2",
    3: "grid-cols-2 md:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-4",
  };

  return (
    <div className={`my-8 grid ${colClass[columns]} gap-4`}>
      {stats.map((stat, i) => (
        <ObjStat key={i} {...stat} accentColor={accentColor} />
      ))}
    </div>
  );
}

// =============================================================================
// OBJ IMAGE GALLERY
// =============================================================================

export function ObjImageGallery({
  images,
}: {
  images: Array<{ src: string; alt: string; caption?: string }>;
}) {
  return (
    <div className="my-8 grid grid-cols-2 md:grid-cols-3 gap-2">
      {images.map((img, index) => (
        <figure
          key={index}
          className="relative group overflow-hidden bg-gray-100"
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {img.caption && (
            <figcaption className="absolute bottom-0 left-0 right-0 bg-black/75 text-white text-[11px] px-3 py-1.5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              {img.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}

// =============================================================================
// OBJ EMBED — Social media embed placeholder
// =============================================================================

export function ObjEmbed({
  platform,
  handle,
  description,
  link,
}: {
  platform: "twitter" | "instagram" | "youtube" | "tiktok";
  handle: string;
  description?: string;
  link?: string;
}) {
  const platforms = {
    twitter:   { icon: "𝕏", label: "X / Twitter", barBg: "bg-black" },
    instagram: { icon: "📸", label: "Instagram", barBg: "bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400" },
    youtube:   { icon: "▶", label: "YouTube", barBg: "bg-red-600" },
    tiktok:    { icon: "♪", label: "TikTok", barBg: "bg-black" },
  };
  const p = platforms[platform];

  return (
    <div className="my-6 border border-gray-200 overflow-hidden">
      <div className={`${p.barBg} text-white px-4 py-2.5 flex items-center gap-3`}>
        <span className="font-bold text-sm">{p.icon}</span>
        <span className="text-xs font-bold uppercase tracking-wider">{p.label}</span>
        <span className="text-white/60 text-xs ml-auto">@{handle}</span>
      </div>
      {description && (
        <div className="px-5 py-4 bg-gray-50">
          <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-sm font-semibold text-blue-600 hover:underline"
            >
              View on {p.label} →
            </a>
          )}
        </div>
      )}
    </div>
  );
}

// =============================================================================
// OBJ TAGS — Hashtag tag cloud
// =============================================================================

export function ObjTags({ tags }: { tags: string[] }) {
  return (
    <div className="mt-10 pt-6 border-t border-gray-200">
      <h3 className="text-[11px] font-black uppercase tracking-widest text-gray-400 mb-3">
        Tags
      </h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-sm text-gray-700 font-medium cursor-pointer transition-colors"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}

// =============================================================================
// OBJ RELATED — Related articles card grid
// =============================================================================

export function ObjRelated({
  links,
}: {
  links: Array<{ href: string; label: string; description?: string; category?: string }>;
}) {
  return (
    <section className="mt-12 pt-8 border-t-2 border-gray-900">
      <h2 className="text-lg font-black uppercase tracking-widest text-gray-900 mb-5">
        Related Coverage
      </h2>
      <div className="grid md:grid-cols-2 gap-3">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="group block p-4 border border-gray-200 hover:border-gray-900 transition-colors bg-white"
          >
            {link.category && (
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-1">
                {link.category}
              </span>
            )}
            <h3 className="font-bold text-gray-900 group-hover:underline underline-offset-2 leading-snug">
              {link.label}
            </h3>
            {link.description && (
              <p className="text-sm text-gray-500 mt-1 leading-snug">{link.description}</p>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}

// =============================================================================
// OBJ EXTERNAL LINKS
// =============================================================================

export function ObjExternalLinks({
  links,
}: {
  links: Array<{ href: string; label: string }>;
}) {
  return (
    <section className="mt-8 pt-6 border-t border-gray-200">
      <h2 className="text-[11px] font-black uppercase tracking-widest text-gray-400 mb-3">
        External Links
      </h2>
      <ul className="space-y-1.5">
        {links.map((link, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-gray-300 mt-0.5">↗</span>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:text-blue-800 hover:underline font-medium"
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
// MAIN LAYOUT — ObjectDesign
// =============================================================================

export function ObjectDesign({
  title,
  subtitle,
  category,
  categoryColor = "blue",
  publishDate,
  readTime,
  lastUpdated,
  breaking,
  trending,
  exclusive,
  author,
  heroImage,
  breadcrumbs,
  infoBox,
  tableOfContents,
  children,
  relatedLinks,
  externalLinks,
  tags,
}: ObjectDesignProps) {
  return (
    <main className="min-h-screen bg-white">

      {/* ===================================================================
          HERO HEADER
      =================================================================== */}
      {heroImage ? (
        /* — Hero with image — */
        <header className="relative">
          <div className="relative h-[52vh] md:h-[62vh] overflow-hidden">
            <img
              src={heroImage.src}
              alt={heroImage.alt}
              className="w-full h-full object-cover"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10" />

            {/* Hero content */}
            <div className="absolute bottom-0 left-0 right-0 px-6 pb-8 md:pb-12">
              <div className="container mx-auto max-w-7xl">
                {/* Breadcrumbs */}
                {breadcrumbs && breadcrumbs.length > 0 && (
                  <nav className="flex items-center gap-2 text-xs text-white/60 mb-4 flex-wrap">
                    {breadcrumbs.map((crumb, i) => (
                      <span key={i} className="flex items-center gap-2">
                        <Link href={crumb.href} className="hover:text-white transition-colors font-medium">
                          {crumb.label}
                        </Link>
                        {i < breadcrumbs.length - 1 && <span className="text-white/30">›</span>}
                      </span>
                    ))}
                  </nav>
                )}

                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {breaking && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm text-[11px] font-black uppercase tracking-wider bg-red-600 text-white animate-pulse">
                      🔴 Breaking
                    </span>
                  )}
                  {exclusive && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm text-[11px] font-black uppercase tracking-wider bg-yellow-500 text-black">
                      ⭐ Exclusive
                    </span>
                  )}
                  {trending && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm text-[11px] font-black uppercase tracking-wider bg-white/20 backdrop-blur text-white">
                      🔥 Trending
                    </span>
                  )}
                  <span className={`inline-flex items-center px-3 py-1 rounded-sm text-[11px] font-bold uppercase tracking-wider ${accentBg[categoryColor]} text-white`}>
                    {category}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-4 max-w-5xl drop-shadow-lg tracking-tight">
                  {title}
                </h1>

                {/* Subtitle */}
                {subtitle && (
                  <p className="text-base md:text-xl text-white/85 mb-5 max-w-3xl leading-relaxed">
                    {subtitle}
                  </p>
                )}

                {/* Meta row */}
                <div className="flex flex-wrap items-center gap-3 text-sm text-white/70">
                  {author && (
                    <>
                      <div className="flex items-center gap-2">
                        {author.avatar ? (
                          <img src={author.avatar} alt={author.name} className="w-7 h-7 rounded-full border border-white/40" />
                        ) : (
                          <div className={`w-7 h-7 rounded-full ${accentBg[categoryColor]} flex items-center justify-center text-white font-bold text-xs`}>
                            {author.name.charAt(0)}
                          </div>
                        )}
                        <span className="text-white font-medium text-sm">{author.name}</span>
                      </div>
                      <span className="text-white/30">·</span>
                    </>
                  )}
                  <span>{publishDate}</span>
                  {readTime && (
                    <>
                      <span className="text-white/30">·</span>
                      <span>{readTime} read</span>
                    </>
                  )}
                  {heroImage.credit && (
                    <>
                      <span className="text-white/30">·</span>
                      <span className="text-white/50 text-xs">Photo: {heroImage.credit}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>
      ) : (
        /* — No hero image: dark masthead — */
        <header className="bg-gray-950 text-white">
          <div className="container mx-auto px-6 max-w-7xl py-12 md:py-16">
            {/* Breadcrumbs */}
            {breadcrumbs && breadcrumbs.length > 0 && (
              <nav className="flex items-center gap-2 text-xs text-white/50 mb-6 flex-wrap">
                {breadcrumbs.map((crumb, i) => (
                  <span key={i} className="flex items-center gap-2">
                    <Link href={crumb.href} className="hover:text-white/80 transition-colors font-medium">
                      {crumb.label}
                    </Link>
                    {i < breadcrumbs.length - 1 && <span className="text-white/20">›</span>}
                  </span>
                ))}
              </nav>
            )}

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-5">
              {breaking && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-black uppercase tracking-wider bg-red-600 text-white animate-pulse">
                  🔴 Breaking
                </span>
              )}
              {exclusive && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-black uppercase tracking-wider bg-yellow-500 text-black">
                  ⭐ Exclusive
                </span>
              )}
              {trending && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-black uppercase tracking-wider bg-white/15 text-white backdrop-blur">
                  🔥 Trending
                </span>
              )}
              <span className={`inline-flex items-center px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${accentBg[categoryColor]} text-white`}>
                {category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.05] mb-4 max-w-5xl tracking-tight">
              {title}
            </h1>

            {/* Subtitle */}
            {subtitle && (
              <p className={`text-lg md:text-xl text-white/75 mb-6 max-w-3xl leading-relaxed border-l-2 ${accentBorder[categoryColor]} pl-4`}>
                {subtitle}
              </p>
            )}

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-white/50 pt-4 border-t border-white/10">
              {author && (
                <>
                  <div className="flex items-center gap-2">
                    {author.avatar ? (
                      <img src={author.avatar} alt={author.name} className="w-6 h-6 rounded-full opacity-80" />
                    ) : (
                      <div className={`w-6 h-6 rounded-full ${accentBg[categoryColor]} flex items-center justify-center text-white font-bold text-[10px]`}>
                        {author.name.charAt(0)}
                      </div>
                    )}
                    <span className="text-white/80 font-medium">{author.name}</span>
                  </div>
                  <span className="text-white/20">·</span>
                </>
              )}
              <span>{publishDate}</span>
              {readTime && (
                <>
                  <span className="text-white/20">·</span>
                  <span>{readTime} read</span>
                </>
              )}
              {lastUpdated && (
                <>
                  <span className="text-white/20">·</span>
                  <span>Updated {lastUpdated}</span>
                </>
              )}
            </div>
          </div>
        </header>
      )}

      {/* ===================================================================
          BODY — TWO-COLUMN LAYOUT
      =================================================================== */}
      <div className="container mx-auto px-4 md:px-6 py-10 md:py-14 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">

          {/* — MAIN CONTENT — */}
          <article className="md:col-span-8 order-2 md:order-1 min-w-0">
            {/* Table of Contents */}
            {tableOfContents && tableOfContents.length > 0 && (
              <ObjTOC items={tableOfContents} accentColor={categoryColor} />
            )}

            {/* Content */}
            <div>{children}</div>

            {/* Tags */}
            {tags && tags.length > 0 && <ObjTags tags={tags} />}

            {/* Related links */}
            {relatedLinks && relatedLinks.length > 0 && (
              <ObjRelated links={relatedLinks} />
            )}

            {/* External links */}
            {externalLinks && externalLinks.length > 0 && (
              <ObjExternalLinks links={externalLinks} />
            )}
          </article>

          {/* — SIDEBAR — */}
          <aside className="md:col-span-4 order-1 md:order-2 min-w-0">
            {infoBox && (
              <ObjInfoBox
                {...infoBox}
                accentColor={infoBox.accentColor ?? categoryColor}
              />
            )}
          </aside>
        </div>
      </div>

      {/* ===================================================================
          FOOTER
      =================================================================== */}
      <footer className="border-t border-gray-200 bg-gray-50 mt-8">
        <div className="container mx-auto px-6 py-10 max-w-7xl">
          {/* Author card */}
          {author && (
            <div className="flex items-start gap-4 p-5 bg-white border border-gray-200 mb-8 max-w-lg">
              {author.avatar ? (
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="w-14 h-14 rounded-full shrink-0"
                />
              ) : (
                <div className={`w-14 h-14 rounded-full shrink-0 ${accentBg[categoryColor]} flex items-center justify-center text-white font-black text-xl`}>
                  {author.name.charAt(0)}
                </div>
              )}
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-0.5">
                  Written by
                </p>
                <p className="font-black text-gray-900">{author.name}</p>
                {author.role && (
                  <p className="text-sm text-gray-500">{author.role}</p>
                )}
                {author.bio && (
                  <p className="text-sm text-gray-600 mt-1 leading-snug">{author.bio}</p>
                )}
                {author.twitter && (
                  <a
                    href={`https://twitter.com/${author.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm font-medium hover:underline mt-1 inline-block ${accentText[categoryColor]}`}
                  >
                    @{author.twitter}
                  </a>
                )}
              </div>
            </div>
          )}

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Part of</span>
            <Link href="/" className="font-black text-gray-900 hover:underline">
              ObjectWire
            </Link>
            <span>coverage</span>
            {lastUpdated && (
              <>
                <span className="text-gray-300">·</span>
                <span>Last updated {lastUpdated}</span>
              </>
            )}
          </div>
        </div>
      </footer>
    </main>
  );
}

export default ObjectDesign;
