import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Winter Olympics 2026 Milano Cortina | Complete Coverage",
  description: "Complete coverage of the 2026 Winter Olympics in Milano Cortina, Italy. News, schedules, athletes, results, and analysis from February 6-22, 2026.",
  keywords: [
    "Winter Olympics 2026",
    "Milano Cortina 2026",
    "Winter Games",
    "Olympic coverage",
    "Italy Olympics",
    "Olympic sports",
    "Olympic athletes",
    "Olympic schedule",
  ],
  openGraph: {
    title: "Winter Olympics 2026: Milano Cortina Complete Coverage",
    description: "Your hub for Winter Olympics 2026 news, schedules, results, and athlete stories from Milano Cortina, Italy.",
    type: "website",
    url: "https://www.objectwire.org/winter-olympics",
    images: [
      {
        url: "https://www.objectwire.org/winter-olympics-2026-og.jpg",
        width: 1200,
        height: 630,
        alt: "Winter Olympics 2026 Milano Cortina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Winter Olympics 2026: Milano Cortina Complete Coverage",
    description: "Live updates, schedules, and stories from the Winter Olympics 2026.",
  },
  alternates: {
    canonical: 'https://www.objectwire.org/winter-olympics',
  },
};

export default function WinterOlympicsPage() {
  return <WikiArticle slug="winter-olympics" />;
}
