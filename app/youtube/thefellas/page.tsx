import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "The Fellas Studios | Podcast Network, Founders & Shows 2026",
  description: "Complete profile of The Fellas Studios, the UK podcast network founded by Calfreezy and TheBurntChip. Covers all shows including The Fellas, Saving Grace,",
  alternates: {
    canonical: 'https://www.objectwire.org/youtube/thefellas',
  },
  keywords: [
    'The Fellas Studios',
    'The Fellas Podcast',
    'Calfreezy',
    'TheBurntChip',
    'Callum Airey',
    'Joshua Larkin',
    'GK Barry',
    'ArthurTV',
    'Saving Grace',
    'Pitch Side podcast',
    'UK podcast network',
    'UK YouTubers',
  ],
  openGraph: {
    title: "The Fellas Studios | UK Podcast Network",
    description: "Full profile of The Fellas Studios: founders, flagship show, and every podcast in the network from Saving Grace to The History Diaries.",
    type: "article",
    url: "https://www.objectwire.org/youtube/thefellas",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Fellas Studios | Podcast Network, Founders & Shows 2026",
    description: "Complete guide to The Fellas Studios UK podcast network, founded by Calfreezy and TheBurntChip.",
  },
};

export default function TheFellasPage() {
  return <WikiArticle slug="youtube-thefellas" />;
}
