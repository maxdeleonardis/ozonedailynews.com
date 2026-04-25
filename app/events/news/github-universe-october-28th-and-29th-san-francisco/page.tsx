import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "GitHub Universe October 28th and 29th San Francisco",
  description: "GitHub Universe 2025 unfolds over two days, October 28 and 29, at the historic Fort Mason Center for Arts & Culture in San Francisco, California.",
  alternates: {
    canonical: 'https://www.objectwire.org/github-universe-october-28th-and-29th-san-francisco',
  },
  openGraph: {
    title: "GitHub Universe October 28th and 29th San Francisco",
    description: "GitHub Universe 2025 unfolds over two days, October 28 and 29, at the historic Fort Mason Center for Arts & Culture in San Francisco, California.",
    type: 'article',
    url: "https://www.objectwire.org/github-universe-october-28th-and-29th-san-francisco",
    siteName: 'ObjectWire',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "GitHub Universe October 28th and 29th San Francisco",
    description: "GitHub Universe 2025 unfolds over two days, October 28 and 29, at the historic Fort Mason Center for Arts & Culture in San Francisco, California.",
  },
};

export default function GitHubUniversePage() {
  return <WikiArticle slug="events-news-github-universe-october-28th-and-29th-san-francisco" />;
}
