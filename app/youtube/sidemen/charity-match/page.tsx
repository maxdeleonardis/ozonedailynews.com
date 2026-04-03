import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Sidemen Charity Match 2026: History, Players & Event Guide | YouTube's Biggest Football Match",
  description: "Complete guide to the Sidemen Charity Match 2026 - The world's biggest YouTube football event featuring KSI, MrBeast, Logan Paul, IShowSpeed, and 100+ creators. History, confirmed players, and live coverage.",
  keywords: [
    "Sidemen Charity Match 2026",
    "YouTube charity football",
    "KSI charity match",
    "Sidemen FC",
    "YouTube All-Stars",
    "MrBeast football",
    "IShowSpeed soccer",
    "Logan Paul match",
    "charity football match",
    "Sidemen event",
  ],
  openGraph: {
    title: "Sidemen Charity Match 2026: YouTube's Biggest Football Event",
    description: "The world's biggest YouTube charity football match returns! 100+ creators, millions raised, and the match of the year.",
    type: "article",
    url: "https://objectwire.com/youtube/sidemen/charity-match",
    images: [
      {
        url: "https://objectwire.com/og-sidemen-charity-match-2026.jpg",
        width: 1200,
        height: 630,
        alt: "Sidemen Charity Match 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sidemen Charity Match 2026: YouTube's Biggest Football Event",
    description: "100+ creators. Millions raised. The match of the year returns.",
    images: ["https://objectwire.com/og-sidemen-charity-match-2026.jpg"],
  },
};

export default function SidemenCharityMatchPage() {
  return <WikiArticle slug="youtube-sidemen-charity-match" />;
}
