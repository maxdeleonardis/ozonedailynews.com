import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "MY HERO ACADEMIA: All's Justice Review 2026 - Final War Arc 3v3 Fighting Game",
  description: "Complete guide to MY HERO ACADEMIA: All's Justice (Feb 6, 2026) - The epic 3v3 fighting game covering the Final War Arc. PS5, Xbox Series X/S, PC",
  keywords: [
    "My Hero Academia All's Justice",
    "MHA All's Justice",
    "My Hero Academia game 2026",
    "All's Justice review",
    "Final War Arc game",
    "3v3 fighting game",
    "Byking",
    "Bandai Namco",
    "Deku game",
    "MHA Final War",
    "Hero vs Villain game",
    "anime fighting game 2026",
  ],
  openGraph: {
    title: "MY HERO ACADEMIA: All's Justice Review 2026 - Final War Arc 3v3 Fighting Game",
    description: "SMASH through My Hero Academia's Final War Arc in spectacular 3v3 battles. Released Feb 6, 2026 on PS5, Xbox Series X/S, and PC.",
    type: "article",
    url: "https://objectwire.com/mha/alls-justice",
    images: [
      {
        url: "https://objectwire.com/og-mha-alls-justice.jpg",
        width: 1200,
        height: 630,
        alt: "MY HERO ACADEMIA: All's Justice",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MY HERO ACADEMIA: All's Justice Review 2026",
    description: "The Final War Arc comes to life in 3v3 battles. Released Feb 6, 2026.",
    images: ["https://objectwire.com/og-mha-alls-justice.jpg"],
  },
  alternates: {
    canonical: 'https://www.objectwire.org/video-games/mha/alls-justice',
  },
};

export default function AllsJusticePage() {
  return <WikiArticle slug="video-games-mha-alls-justice" />;
}
