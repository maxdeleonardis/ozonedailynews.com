import Link from "next/link";
import React from "react";

// =============================================================================
// NEWS ARTICLE COMPONENT - Flashy, engaging article layout
// For: News stories, influencer coverage, entertainment, trending topics
// =============================================================================

// =============================================================================
// TYPES
// =============================================================================

export interface AuthorInfo {
  name: string;
  role?: string;
  avatar?: string;
  twitter?: string;
  authorSlug?: string; // For linking to author page (e.g., "conan-boyle")
  bio?: string; // Optional short bio for author card
}

export type TopicTagType = 
  | "technology" | "news" | "finance" | "sports" | "entertainment" 
  | "lifestyle" | "investigations" | "world" | "politics" | "science"
  | "gaming" | "crypto" | "ai" | "automotive" | "education" | "culture";

export interface NewsArticleProps {
  title: string;
  subtitle?: string;
  category: string;
  categoryColor?: "red" | "blue" | "green" | "purple" | "orange" | "pink" | "yellow";
  topicTag?: TopicTagType;
  publishDate: string;
  readTime?: string;
  author?: AuthorInfo;
  heroImage?: {
    src: string;
    alt: string;
    caption?: string;
    credit?: string;
  };
  tags?: string[];
  children: React.ReactNode;
  trending?: boolean;
  breaking?: boolean;
  exclusive?: boolean;
}

// =============================================================================
// TOPIC TAG — Prominent colored badge for article categorization
// =============================================================================

const topicTagStyles: Record<TopicTagType, { bg: string; text: string; icon: string }> = {
  technology:      { bg: 'bg-blue-100',    text: 'text-blue-800',    icon: '💻' },
  news:            { bg: 'bg-red-100',     text: 'text-red-800',     icon: '📰' },
  finance:         { bg: 'bg-green-100',   text: 'text-green-800',   icon: '💰' },
  sports:          { bg: 'bg-indigo-100',  text: 'text-indigo-800',  icon: '🏆' },
  entertainment:   { bg: 'bg-purple-100',  text: 'text-purple-800',  icon: '🎬' },
  lifestyle:       { bg: 'bg-pink-100',    text: 'text-pink-800',    icon: '👕' },
  investigations:  { bg: 'bg-orange-100',  text: 'text-orange-800',  icon: '🔍' },
  world:           { bg: 'bg-sky-100',     text: 'text-sky-800',     icon: '🌍' },
  politics:        { bg: 'bg-rose-100',    text: 'text-rose-800',    icon: '🏛️' },
  science:         { bg: 'bg-teal-100',    text: 'text-teal-800',    icon: '🔬' },
  gaming:          { bg: 'bg-violet-100',  text: 'text-violet-800',  icon: '🎮' },
  crypto:          { bg: 'bg-amber-100',   text: 'text-amber-800',   icon: '₿' },
  ai:              { bg: 'bg-cyan-100',    text: 'text-cyan-800',    icon: '🤖' },
  automotive:      { bg: 'bg-slate-100',   text: 'text-slate-800',   icon: '🚗' },
  education:       { bg: 'bg-lime-100',    text: 'text-lime-800',    icon: '🎓' },
  culture:         { bg: 'bg-fuchsia-100', text: 'text-fuchsia-800', icon: '🎨' },
};

/**
 * TopicTag — Reusable colored badge that identifies article topic.
 * Use this on every article, card, and listing for consistent categorization.
 */
export function TopicTag({ topic, size = 'sm', showIcon = true }: { topic: TopicTagType; size?: 'xs' | 'sm' | 'md'; showIcon?: boolean }) {
  const style = topicTagStyles[topic] || topicTagStyles.news;
  const sizeClasses = {
    xs: 'text-[10px] px-2 py-0.5',
    sm: 'text-xs px-2.5 py-1',
    md: 'text-sm px-3 py-1.5',
  };
  return (
    <span className={`inline-flex items-center gap-1 rounded-full font-bold tracking-wide uppercase ${style.bg} ${style.text} ${sizeClasses[size]}`}>
      {showIcon && <span>{style.icon}</span>}
      {topic}
    </span>
  );
}

/**
 * Infer a TopicTagType from an article's category string or slug.
 * Useful for auto-tagging content discovered by the scanner.
 */
export function inferTopicTag(category: string, slug?: string): TopicTagType {
  const cat = category.toLowerCase();
  const s = (slug || '').toLowerCase();
  
  if (cat.includes('tech') || s.startsWith('/google') || s.startsWith('/apple') || s.startsWith('/nvidia') || s.startsWith('/intel') || s.startsWith('/microsoft') || s.startsWith('/saas') || s.startsWith('/github')) return 'technology';
  if (cat.includes('investigation') || cat.includes('fraud')) return 'investigations';
  if (cat.includes('finance') || cat.includes('business') || s.startsWith('/finance') || s.startsWith('/bank')) return 'finance';
  if (cat.includes('sport') || s.startsWith('/winter-olympics') || s.startsWith('/world-cup')) return 'sports';
  if (cat.includes('entertainment') || s.startsWith('/disney') || s.startsWith('/entertainment')) return 'entertainment';
  if (cat.includes('gaming') || s.startsWith('/video-games')) return 'gaming';
  if (cat.includes('crypto') || s.startsWith('/crypto')) return 'crypto';
  if (cat.includes('politic') || cat.includes('government')) return 'politics';
  if (s.startsWith('/nasa') || s.startsWith('/technology/articles/dawn-of-orbital')) return 'science';
  if (s.startsWith('/clothing') || s.startsWith('/artists')) return 'lifestyle';
  if (s.startsWith('/youtube') || s.startsWith('/influencer') || s.startsWith('/podcasts') || s.startsWith('/beastgames')) return 'entertainment';
  if (s.startsWith('/cars')) return 'automotive';
  if (s.startsWith('/college')) return 'education';
  if (s.startsWith('/open-ai') || s.startsWith('/define') || cat.includes('ai') || cat.includes('software')) return 'ai';
  if (s.startsWith('/elon-musk')) return 'finance';
  if (cat.includes('world') || s.startsWith('/news/world') || s.startsWith('/news/canada')) return 'world';
  if (s.startsWith('/social')) return 'technology';
  if (s.startsWith('/events')) return 'news';
  return 'news';
}

// =============================================================================
// CATEGORY COLORS
// =============================================================================

const categoryColors = {
  red: "from-red-500 to-red-600",
  blue: "from-blue-500 to-blue-600",
  green: "from-green-500 to-green-600",
  purple: "from-purple-500 to-purple-600",
  orange: "from-orange-500 to-orange-600",
  pink: "from-pink-500 to-pink-600",
  yellow: "from-yellow-500 to-yellow-600",
};

const categoryBadgeColors = {
  red: "bg-red-500",
  blue: "bg-blue-500",
  green: "bg-green-500",
  purple: "bg-purple-500",
  orange: "bg-orange-500",
  pink: "bg-pink-500",
  yellow: "bg-yellow-500",
};

// =============================================================================
// NEWS HEADER WITH HERO
// =============================================================================

export function NewsHeader({
  title,
  subtitle,
  category,
  categoryColor = "red",
  publishDate,
  readTime,
  author,
  heroImage,
  trending,
  breaking,
  exclusive,
}: Omit<NewsArticleProps, "children" | "tags">) {
  return (
    <header className="relative">
      {/* Hero Image with Gradient Overlay */}
      {heroImage && (
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <img
            src={heroImage.src}
            alt={heroImage.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          
          {/* Hero Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="container mx-auto max-w-4xl">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                {breaking && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-red-600 text-white animate-pulse">
                    🔴 Breaking
                  </span>
                )}
                {exclusive && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-yellow-500 text-black">
                    ⭐ Exclusive
                  </span>
                )}
                {trending && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-gradient-to-r from-pink-500 to-purple-500 text-white">
                    🔥 Trending
                  </span>
                )}
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${categoryBadgeColors[categoryColor]} text-white`}>
                  {category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4 drop-shadow-lg">
                {title}
              </h1>

              {/* Subtitle */}
              {subtitle && (
                <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-3xl">
                  {subtitle}
                </p>
              )}

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
                {author && (
                  <div className="flex items-center gap-2">
                    {author.avatar ? (
                      <img
                        src={author.avatar}
                        alt={author.name}
                        className="w-8 h-8 rounded-full border-2 border-white"
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
                        {author.name.charAt(0)}
                      </div>
                    )}
                    <span className="font-medium text-white">{author.name}</span>
                  </div>
                )}
                <span className="text-gray-400">•</span>
                <span>{publishDate}</span>
                {readTime && (
                  <>
                    <span className="text-gray-400">•</span>
                    <span>📖 {readTime}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* No Hero Image - Gradient Header */}
      {!heroImage && (
        <div className={`bg-gradient-to-r ${categoryColors[categoryColor]} py-16 md:py-24`}>
          <div className="container mx-auto px-6 max-w-4xl">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {breaking && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-white/20 text-white backdrop-blur animate-pulse">
                  🔴 Breaking
                </span>
              )}
              {exclusive && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-yellow-400 text-black">
                  ⭐ Exclusive
                </span>
              )}
              {trending && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-white/20 text-white backdrop-blur">
                  🔥 Trending
                </span>
              )}
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/30 text-white backdrop-blur">
                {category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
              {title}
            </h1>

            {/* Subtitle */}
            {subtitle && (
              <p className="text-lg md:text-xl text-white/90 mb-6 max-w-3xl">
                {subtitle}
              </p>
            )}

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
              {author && (
                <div className="flex items-center gap-2">
                  {author.avatar ? (
                    <img
                      src={author.avatar}
                      alt={author.name}
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center text-white font-bold text-sm">
                      {author.name.charAt(0)}
                    </div>
                  )}
                  <span className="font-medium text-white">{author.name}</span>
                </div>
              )}
              <span className="text-white/50">•</span>
              <span>{publishDate}</span>
              {readTime && (
                <>
                  <span className="text-white/50">•</span>
                  <span>📖 {readTime}</span>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

// =============================================================================
// HIGHLIGHT BOX (Pull Quote / Key Point)
// =============================================================================

export function HighlightBox({
  children,
  type = "quote",
  color = "purple",
}: {
  children: React.ReactNode;
  type?: "quote" | "key-point" | "stat";
  color?: "purple" | "blue" | "pink" | "orange" | "green";
}) {
  const bgColors = {
    purple: "from-purple-500/10 to-pink-500/10 border-purple-300",
    blue: "from-blue-500/10 to-cyan-500/10 border-blue-300",
    pink: "from-pink-500/10 to-rose-500/10 border-pink-300",
    orange: "from-orange-500/10 to-yellow-500/10 border-orange-300",
    green: "from-green-500/10 to-emerald-500/10 border-green-300",
  };

  const icons = {
    quote: "💬",
    "key-point": "⚡",
    stat: "📊",
  };

  return (
    <div
      className={`my-8 p-6 rounded-2xl bg-gradient-to-br ${bgColors[color]} border-l-4`}
    >
      <span className="text-2xl mb-2 block">{icons[type]}</span>
      <div className="text-lg font-medium text-gray-800 leading-relaxed">
        {children}
      </div>
    </div>
  );
}

// =============================================================================
// EMBED BOX (Social Media / Video Placeholder)
// =============================================================================

export function EmbedBox({
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
  const platformStyles = {
    twitter: { icon: "𝕏", bg: "bg-black", name: "X (Twitter)" },
    instagram: {
      icon: "📸",
      bg: "bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400",
      name: "Instagram",
    },
    youtube: { icon: "▶️", bg: "bg-red-600", name: "YouTube" },
    tiktok: { icon: "🎵", bg: "bg-black", name: "TikTok" },
  };

  const style = platformStyles[platform];

  return (
    <div className="my-6 rounded-xl overflow-hidden border border-gray-200 shadow-lg">
      <div className={`${style.bg} text-white px-4 py-3 flex items-center gap-3`}>
        <span className="text-xl">{style.icon}</span>
        <span className="font-bold">{style.name}</span>
        <span className="text-white/70">@{handle}</span>
      </div>
      {description && (
        <div className="p-4 bg-gray-50">
          <p className="text-gray-700">{description}</p>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-blue-600 hover:underline font-medium text-sm"
            >
              View on {style.name} →
            </a>
          )}
        </div>
      )}
    </div>
  );
}

// =============================================================================
// IMAGE GALLERY
// =============================================================================

export function ImageGallery({
  images,
}: {
  images: Array<{ src: string; alt: string; caption?: string }>;
}) {
  return (
    <div className="my-8 grid grid-cols-2 md:grid-cols-3 gap-3">
      {images.map((img, index) => (
        <figure key={index} className="relative group overflow-hidden rounded-lg">
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {img.caption && (
            <figcaption className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs p-2 opacity-0 group-hover:opacity-100 transition-opacity">
              {img.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}

// =============================================================================
// TIMELINE (For Story Progression)
// =============================================================================

export function Timeline({
  events,
}: {
  events: Array<{ time: string; title: string; description?: string }>;
}) {
  return (
    <div className="my-8 relative">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500" />
      <div className="space-y-6">
        {events.map((event, index) => (
          <div key={index} className="relative pl-12">
            <div className="absolute left-2 w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-4 border-white shadow" />
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-purple-300 transition-colors">
              <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">
                {event.time}
              </span>
              <h4 className="font-bold text-gray-900 mt-1">{event.title}</h4>
              {event.description && (
                <p className="text-sm text-gray-600 mt-1">{event.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// =============================================================================
// REACTION BAR (Social Engagement)
// =============================================================================

export function ReactionBar() {
  return (
    <div className="my-8 flex flex-wrap items-center justify-center gap-4 p-4 bg-gray-50 rounded-xl">
      <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 hover:border-red-300 hover:bg-red-50 transition-colors">
        <span>❤️</span>
        <span className="text-sm font-medium text-gray-700">Like</span>
      </button>
      <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
        <span>💬</span>
        <span className="text-sm font-medium text-gray-700">Comment</span>
      </button>
      <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-colors">
        <span>🔗</span>
        <span className="text-sm font-medium text-gray-700">Share</span>
      </button>
      <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 hover:border-yellow-300 hover:bg-yellow-50 transition-colors">
        <span>🔖</span>
        <span className="text-sm font-medium text-gray-700">Save</span>
      </button>
    </div>
  );
}

// =============================================================================
// TAGS SECTION
// =============================================================================

export function TagsSection({ tags }: { tags: string[] }) {
  return (
    <div className="mt-12 pt-6 border-t border-gray-200">
      <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">
        Tags
      </h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 cursor-pointer transition-colors"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}

// =============================================================================
// RELATED STORIES (Card Style)
// =============================================================================

export function RelatedStories({
  stories,
}: {
  stories: Array<{
    href: string;
    title: string;
    category: string;
    image?: string;
    date?: string;
  }>;
}) {
  return (
    <section className="mt-16 pt-8 border-t-2 border-gray-200">
      <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-2">
        <span>📰</span> Related Stories
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {stories.map((story, index) => (
          <Link
            key={index}
            href={story.href}
            className="group block rounded-xl overflow-hidden border border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300"
          >
            {story.image && (
              <div className="h-40 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            <div className="p-4">
              <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">
                {story.category}
              </span>
              <h3 className="font-bold text-gray-900 mt-1 group-hover:text-purple-600 transition-colors line-clamp-2">
                {story.title}
              </h3>
              {story.date && (
                <span className="text-xs text-gray-500 mt-2 block">{story.date}</span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

// =============================================================================
// MAIN NEWS ARTICLE LAYOUT
// =============================================================================

export function NewsArticle({
  title,
  subtitle,
  category,
  categoryColor = "red",
  publishDate,
  readTime,
  author,
  heroImage,
  tags,
  children,
  trending,
  breaking,
  exclusive,
}: NewsArticleProps) {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <NewsHeader
        title={title}
        subtitle={subtitle}
        category={category}
        categoryColor={categoryColor}
        publishDate={publishDate}
        readTime={readTime}
        author={author}
        heroImage={heroImage}
        trending={trending}
        breaking={breaking}
        exclusive={exclusive}
      />

      {/* Article Content */}
      <article className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Article Body */}
        <div className="prose prose-lg prose-gray max-w-none 
          prose-headings:font-black prose-headings:text-gray-900
          prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-l-4 prose-h2:border-purple-500 prose-h2:pl-4
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
          prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
          prose-a:text-purple-600 prose-a:font-medium prose-a:no-underline hover:prose-a:underline
          prose-blockquote:border-l-4 prose-blockquote:border-purple-300 prose-blockquote:bg-purple-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
          prose-strong:text-gray-900
          prose-img:rounded-xl prose-img:shadow-lg
          prose-ul:space-y-2 prose-li:text-gray-700
        ">
          {children}
        </div>

        {/* Reaction Bar */}
        <ReactionBar />

        {/* Tags */}
        {tags && tags.length > 0 && <TagsSection tags={tags} />}
      </article>

      {/* Footer */}
      <footer className="border-t-2 border-gray-200 bg-gradient-to-br from-gray-50 to-white mt-8">
        <div className="container mx-auto px-6 py-12 max-w-4xl">
          {/* Author Card */}
          {author && (
            <div className="flex items-center gap-4 p-6 bg-white rounded-xl border border-gray-200 shadow-sm mb-8">
              {author.avatar ? (
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="w-16 h-16 rounded-full"
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-white font-bold text-2xl">
                  {author.name.charAt(0)}
                </div>
              )}
              <div>
                <p className="text-sm text-gray-500">Written by</p>
                {author.authorSlug ? (
                  <Link
                    href={`/authors/${author.authorSlug}`}
                    className="font-bold text-gray-900 hover:text-purple-600 transition-colors"
                  >
                    {author.name}
                  </Link>
                ) : (
                  <p className="font-bold text-gray-900">{author.name}</p>
                )}
                {author.role && (
                  <p className="text-sm text-gray-600">{author.role}</p>
                )}
                {author.twitter && (
                  <a
                    href={`https://twitter.com/${author.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-purple-600 hover:underline"
                  >
                    @{author.twitter}
                  </a>
                )}
              </div>
            </div>
          )}

          <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
            <span>Part of</span>
            <Link href="/" className="font-bold text-black hover:underline">
              ObjectWire
            </Link>
            <span>coverage</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

// =============================================================================
// UTILITY EXPORTS
// =============================================================================

export default NewsArticle;
