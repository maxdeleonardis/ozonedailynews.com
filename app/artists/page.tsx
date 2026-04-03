import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Top Artists in the United States | ObjectWire Music",
  description:
    "Explore the top 7 artists dominating the US music scene right now. Featuring chart-toppers, streaming giants, and cultural icons shaping modern music.",
  keywords: [
    "top artists",
    "music charts",
    "US artists",
    "popular musicians",
    "streaming charts",
    "Billboard artists",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/artists',
  },
};

export default function ArtistsPage() {
  return <WikiArticle slug="artists" />;
}
