import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = 'meta';
const PAGE_URL = 'https://www.objectwire.org/meta';
const IMAGE_URL =
  'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Meta Platforms Inc. | ObjectWire',
  description:
    'Meta Platforms (formerly Facebook Inc.) owns Facebook, Instagram, WhatsApp, and Threads, serving 3.35 billion daily active users. Full profile: Mark Zuckerberg, AI infrastructure, Reality Labs, advertising business, and legal controversies.',
  keywords: [
    'Meta Platforms',
    'Meta Platforms Inc',
    'Facebook company profile',
    'Mark Zuckerberg',
    'Instagram company',
    'WhatsApp company',
    'Threads social media',
    'Meta AI 2026',
    'Reality Labs VR',
    'META stock NASDAQ',
    'Meta advertising revenue',
    'Meta 3.35 billion daily users',
    'Meta Llama AI model',
    'Meta Ray-Ban smart glasses',
    'Meta company headquarters Menlo Park',
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: 'article',
    title: 'Meta Platforms Inc. | ObjectWire',
    description:
      'Full company profile of Meta Platforms Inc. Facebook, Instagram, WhatsApp, Threads, Reality Labs, AI infrastructure, and legal controversies.',
    url: PAGE_URL,
    siteName: 'ObjectWire',
    images: [{ url: IMAGE_URL, width: 1200, height: 675, alt: 'Meta Platforms headquarters, Menlo Park, California' }],
    publishedTime: '2026-03-31T00:00:00Z',
    section: 'Tech',
    tags: ['Meta Platforms', 'Mark Zuckerberg', 'Facebook', 'Instagram'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meta Platforms Inc. | ObjectWire',
    description:
      'Full company profile of Meta Platforms. Facebook, Instagram, WhatsApp, Threads, Llama AI, Reality Labs, and the largest digital advertising business on Earth.',
    images: [IMAGE_URL],
  },
};

export default function MetaPage() {
  return <ArticlePageDB slug="meta" />;
}
