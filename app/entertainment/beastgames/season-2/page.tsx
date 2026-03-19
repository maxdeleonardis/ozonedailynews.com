import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Beast Games Season 2 - Latest News & Updates | ObjectWire",
  description: "Everything you need to know about Beast Games Season 2. Latest news, casting updates, release date predictions, and what to expect from MrBeast's next reality competition season.",
  keywords: ["Beast Games Season 2", "MrBeast", "reality competition", "Amazon Prime Video", "casting", "release date"],
  alternates: {
    canonical: 'https://www.objectwire.org/entertainment/beastgames/season-2',
  },
};

export default function BeastGamesSeason2Page() {
  return <WikiArticle slug="entertainment-beastgames-season-2" />;
}
