// =============================================================================
// ARTICLE TEMPLATE
// Copy this file, rename it to your-slug.ts, fill it in, then run:
//   npm run content:publish
// =============================================================================

import type { Article } from '../../content/types';

const article: Article = {
  // ── Required ──────────────────────────────────────────────────────────────
  title: 'Article Title Goes Here',
  slug: 'article-slug-goes-here',   // must be globally unique
  category: 'tech',                 // crypto | tech | finance | politics | etc.
  status: 'draft',                  // change to 'published' when ready

  // ── Meta ──────────────────────────────────────────────────────────────────
  subtitle: 'Optional deck / subheadline',
  excerpt: 'One or two sentences summarizing the story for cards and meta descriptions.',
  tags: ['tag1', 'tag2'],
  topic_tag: 'Topic Tag',
  category_color: '#6366f1',        // hex color shown on the badge
  read_time: '4 min read',
  published_at: '2026-03-07',       // ISO date — "2026-03-07" or "2026-03-07T14:00:00Z"

  // ── Author ────────────────────────────────────────────────────────────────
  author_name: 'Jack',
  author_role: 'Staff Writer',
  author_slug: 'jack',
  author_avatar: '',
  author_twitter: '',
  author_bio: '',

  // ── Hero image ────────────────────────────────────────────────────────────
  image_url: 'https://example.com/your-hero-image.jpg',
  image_alt: 'Description of the image',
  image_caption: '',
  image_credit: '',
  thumbnail_url: '',

  // ── Flags ─────────────────────────────────────────────────────────────────
  featured: false,
  trending: false,
  breaking: false,
  exclusive: false,

  // ── Content blocks ────────────────────────────────────────────────────────
  // Each block needs a unique id. Use short strings like 'p1', 'h1', 'q1', etc.
  content: [
    {
      id: 'h1',
      type: 'heading',
      content: 'First Section Heading',
      level: 2,
    },
    {
      id: 'p1',
      type: 'paragraph',
      content:
        'Your article body starts here. You can use <strong>bold</strong>, <em>italic</em>, and <a href="https://example.com">links</a> inline.',
    },
    {
      id: 'q1',
      type: 'quote',
      content: 'A relevant quote goes here.',
      author: 'Source Name',
      role: 'Title, Organization',
    },
    {
      id: 'p2',
      type: 'paragraph',
      content: 'Continue the article here.',
    },
    {
      id: 'div1',
      type: 'divider',
    },
    {
      id: 'h2',
      type: 'heading',
      content: 'Second Section',
      level: 2,
    },
    {
      id: 'p3',
      type: 'paragraph',
      content: 'More content.',
    },
    {
      id: 'src1',
      type: 'sources',
      items: [
        { label: 'Source One', url: 'https://example.com/source-1' },
        { label: 'Source Two', url: 'https://example.com/source-2' },
      ],
    },
  ],
};

export default article;
