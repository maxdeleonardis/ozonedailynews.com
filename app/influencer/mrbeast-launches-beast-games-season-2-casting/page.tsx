import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "MrBeast Announces Beast Games Season 2 Casting: Everything You Need to Know | ObjectWire",
  description:
    "MrBeast has officially opened casting for Beast Games Season 2. Here's how to apply, what to expect, and why this season could be even bigger.",
  keywords: [
    "MrBeast",
    "Beast Games",
    "Season 2",
    "casting",
    "Prime Video",
    "reality TV",
    "audition",
    "game show",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/influencer/mrbeast-launches-beast-games-season-2-casting',
  },
};

export default function BeastGamesSeason2CastingPage() {
  return <NewsArticleDB slug="influencer-mrbeast-launches-beast-games-season-2-casting" />;
}
