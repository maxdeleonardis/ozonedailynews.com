import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Beast Games - MrBeast's Reality Competition Series | ObjectWire",
  description: "Complete coverage of Beast Games, the groundbreaking reality competition show by MrBeast. Latest news, episodes, contestants, prizes, and behind-the-scenes insights.",
  keywords: ["Beast Games", "MrBeast", "Jimmy Donaldson", "reality competition", "game show", "Amazon Prime Video"],
  alternates: {
    canonical: 'https://www.objectwire.org/beastgames',
  },
};

export default function BeastGamesPage() {
  return <WikiArticle slug="entertainment-beastgames" />;
}
