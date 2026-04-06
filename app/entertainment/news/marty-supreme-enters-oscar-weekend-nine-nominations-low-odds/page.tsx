import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/entertainment/news/marty-supreme-enters-oscar-weekend-nine-nominations-low-odds';
const FULL_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = '/entertainment/marty_supreme';

export const metadata: Metadata = {
  title: "'Marty Supreme' Enters Oscar Weekend With Nine Nods but Low Odds",
  description:
    "Josh Safdie's A24 sports drama Marty Supreme carries nine Oscar nominations into the 98th Academy Awards, including Best Picture, Best Director, and Best",
  keywords: [
    'Marty Supreme Oscars',
    'Timothée Chalamet Best Actor',
    'Josh Safdie Oscar nomination',
    'A24 Oscars 2026',
    '98th Academy Awards nominees',
    'Marty Supreme nominations',
    'Sinners Ryan Coogler Oscars',
    'Michael B Jordan Best Actor',
    'Marty Supreme streaming',
    'Marty Supreme Prime Video',
    'Marty Supreme Apple TV',
    'Oscars 2026 Best Picture',
    'Timothée Chalamet third Oscar nomination',
    'Kalshi Polymarket Oscars odds',
    'awards season 2026',
  ],
  openGraph: {
    title: "'Marty Supreme' Enters Oscar Weekend With Nine Nods but Low Odds",
    description:
      "Timothée Chalamet's A24 film enters the 98th Oscars with nine nominations but faces long odds. Prediction markets favor Sinners and Michael B. Jordan as",
    url: FULL_URL,
    type: 'article',
    images: [{ url: IMAGE_URL, alt: "Timothée Chalamet in Marty Supreme" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "'Marty Supreme' Has Nine Oscar Noms | but the Odds Say Zero Wins",
    description:
      "Josh Safdie's A24 sports drama heads into the 98th Oscars with Best Picture, Director, and Actor nods. Kalshi and Polymarket bettors are betting on",
    images: [IMAGE_URL],
  },
  alternates: { canonical: FULL_URL },
};

export default function MartySupremeOscarsPage() {
  return <NewsArticleDB slug="entertainment-news-marty-supreme-enters-oscar-weekend-nine-nominations-low-odds" />;
}
