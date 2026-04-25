import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Beast Games | MrBeast's Reality Competition Series",
  description: "Complete coverage of Beast Games, the groundbreaking reality competition show by MrBeast. Latest news, episodes, contestants, prizes, and",
  keywords: ["Beast Games", "MrBeast", "Jimmy Donaldson", "reality competition", "game show", "Amazon Prime Video"],
  alternates: {
    canonical: 'https://www.objectwire.org/beastgames',
  },
  openGraph: {
    title: "Beast Games | MrBeast",
    description: "Complete coverage of Beast Games, the groundbreaking reality competition show by MrBeast. Latest news, episodes, contestants, prizes, and",
    type: 'article',
    url: "https://www.objectwire.org/beastgames",
    siteName: 'ObjectWire',
    section: "Entertainment",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Beast Games | MrBeast",
    description: "Complete coverage of Beast Games, the groundbreaking reality competition show by MrBeast. Latest news, episodes, contestants, prizes, and",
  },
};

export default function BeastGamesPage() {
  return <WikiArticle slug="entertainment-beastgames" />;
}
