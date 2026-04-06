import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Alysa Liu's Top 5 Anime Shows: Olympic Gold Medalist Proves Her Anime Street Cred",
  description:
    "Olympic gold medalist Alysa Liu revealed her top five anime shows in a viral TikTok moment during the 2026 Winter Olympics. From Jujutsu Kaisen to",
  keywords: [
    "Alysa Liu anime",
    "Alysa Liu top 5 anime",
    "Alysa Liu Jujutsu Kaisen",
    "Alysa Liu Chainsaw Man",
    "Alysa Liu Attack on Titan",
    "Alysa Liu Soul Eater",
    "Alysa Liu Madoka Magica",
    "Olympic gold medalist anime",
    "figure skater anime fan",
    "Winter Olympics 2026 viral",
    "Alysa Liu TikTok",
  ],
  openGraph: {
    title: "Alysa Liu's Top 5 Anime: Olympic Champion Proves Her Street Cred",
    description:
      "Figure skating gold medalist Alysa Liu listed her five favorite anime shows during the 2026 Winter Olympics and the internet went wild.",
    type: 'article',
    publishedTime: '2026-02-13T16:00:00Z',
    authors: ['ObjectWire Olympic Bureau'],
    url: 'https://www.objectwire.org/winter-olympics/usa/alysa-liu/anime',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Alysa Liu's Top 5 Anime: JJK, Chainsaw Man, Attack on Titan and More",
    description:
      "Olympic gold medalist Alysa Liu just proved she has serious anime street cred. Here are her five favorites.",
  },
  alternates: {
    canonical: 'https://www.objectwire.org/winter-olympics/usa/alysa-liu/anime',
  },
};

export default function AlysaLiuAnimePage() {
  return <NewsArticleDB slug="winter-olympics-usa-alysa-liu-anime" />;
}
