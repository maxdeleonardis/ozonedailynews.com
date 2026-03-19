import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "World Cup Travel Bans: Trump's Foreign Policy Impact | ObjectWire",
  description: "Citizens from multiple qualified nations face entry restrictions as Trump's foreign policy creates unprecedented challenges for FIFA World Cup 2026.",
  keywords: ["Donald Trump", "World Cup 2026", "Travel Ban", "FIFA", "Foreign Policy", "USA", "Immigration"],
  authors: [{ name: "ObjectWire Editorial Team" }],
  alternates: {
    canonical: 'https://www.objectwire.org/news/world-cup-travel-bans-trump-policy',
  },
};

export default function WorldCupTravelBansPage() {
  return <WikiArticle slug="news-world-cup-travel-bans-trump-policy" />;
}
