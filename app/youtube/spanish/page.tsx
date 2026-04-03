import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Top Spanish YouTubers 2026 | Ibai, AuronPlay, ElRubius & More | ObjectWire",
  description: "Complete guide to the biggest Spanish-language YouTubers and streamers of 2026. Rankings, profiles, subscriber counts, and content breakdowns for Spain's top creators.",
  alternates: {
    canonical: 'https://www.objectwire.org/youtube/spanish',
  },
  keywords: [
    'Spanish YouTubers',
    'Ibai Llanos',
    'AuronPlay',
    'ElRubius',
    'TheGrefg',
    'Vegetta777',
    'Alana Flores',
    'Spanish streamers',
    'top Spanish creators',
    'YouTube España',
  ],
  openGraph: {
    title: "Top Spanish YouTubers 2026 | ObjectWire",
    description: "Rankings and profiles of the biggest Spanish-language YouTube creators, from Ibai Llanos to Alana Flores.",
    type: "article",
    url: "https://www.objectwire.org/youtube/spanish",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Spanish YouTubers 2026 | Ibai, AuronPlay, ElRubius & More",
    description: "Full rankings and profiles of Spain's biggest YouTube creators.",
  },
};

export default function SpanishYouTubersPage() {
  return <WikiArticle slug="youtube-spanish" />;
}
