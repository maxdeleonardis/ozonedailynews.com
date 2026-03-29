// =============================================================================
// ARTICLE BLOCK TYPES
// Full TypeScript types for writing articles in the codebase.
// Every block type has autocomplete in VS Code.
// =============================================================================

export interface ParagraphBlock {
  id: string;
  type: 'paragraph';
  content: string; // supports inline HTML like <strong>, <em>, <a href="">
}

export interface HeadingBlock {
  id: string;
  type: 'heading';
  content: string;
  level?: 2 | 3 | 4;
}

export interface QuoteBlock {
  id: string;
  type: 'quote';
  content: string;
  author?: string;
  role?: string;
}

export interface ListBlock {
  id: string;
  type: 'list';
  items: string[];
  ordered?: boolean;
}

export interface ImageBlock {
  id: string;
  type: 'image';
  src: string;
  alt?: string;
  caption?: string;
  credit?: string;
  width?: number;
  height?: number;
}

export interface DividerBlock {
  id: string;
  type: 'divider';
}

export interface CalloutBlock {
  id: string;
  type: 'callout';
  content: string;
  style?: 'info' | 'warning' | 'tip' | 'danger';
}

export interface StatGridBlock {
  id: string;
  type: 'stat-grid';
  stats: { value: string; label: string; note?: string }[];
}

export interface TimelineBlock {
  id: string;
  type: 'timeline';
  events: { date: string; title: string; description: string }[];
}

export interface TableBlock {
  id: string;
  type: 'table';
  headers: string[];
  rows: string[][];
  caption?: string;
}

export interface EmbedBlock {
  id: string;
  type: 'embed';
  url: string;
  caption?: string;
  provider?: 'youtube' | 'twitter' | 'instagram' | 'tiktok';
}

export interface SourcesBlock {
  id: string;
  type: 'sources';
  items: { label: string; url: string }[];
}

export type ContentBlock =
  | ParagraphBlock
  | HeadingBlock
  | QuoteBlock
  | ListBlock
  | ImageBlock
  | DividerBlock
  | CalloutBlock
  | StatGridBlock
  | TimelineBlock
  | TableBlock
  | EmbedBlock
  | SourcesBlock;

// =============================================================================
// ARTICLE
// This is what you export from each file in content/articles/
// =============================================================================

export interface Article {
  // Required
  title: string;
  slug: string;           // unique URL, e.g. "bitcoin-etf-approved-2026"
  category: string;       // e.g. "crypto", "tech", "finance"
  status: 'published' | 'draft';
  content: ContentBlock[];

  // Recommended
  excerpt?: string;
  author_name?: string;
  published_at?: string;  // ISO date string: "2026-03-07" or "2026-03-07T14:30:00Z"
  image_url?: string;
  tags?: string[];

  // Author details
  author_role?: string;
  author_avatar?: string;
  author_twitter?: string;
  author_slug?: string;
  author_bio?: string;

  // Category display
  subtitle?: string;
  category_color?: string;   // hex or tailwind class
  topic_tag?: string;        // short tag shown next to category
  read_time?: string;        // e.g. "4 min read"

  // Image metadata
  image_alt?: string;
  image_caption?: string;
  image_credit?: string;
  thumbnail_url?: string;

  // New columns (articles table v2 schema)
  content_html?: string;      // Full serialised HTML body rendered by NewsArticleDB
  publish_date?: string;      // Display date string e.g. "March 19, 2026"
  hero_image_src?: string;    // Replaces image_url for NewsArticle hero
  hero_image_alt?: string;
  hero_image_caption?: string;
  hero_image_credit?: string;
  thumbnail_src?: string;     // Replaces thumbnail_url for NewsArticle
  thumbnail_alt?: string;
  url?: string;               // Canonical path e.g. "/california/my-article"

  // Flags
  featured?: boolean;
  trending?: boolean;
  breaking?: boolean;
  exclusive?: boolean;
}
