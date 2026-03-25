import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Team USA Wins Women's Hockey Gold: Megan Keller's OT Goal Beats Canada 2-1 at Milano Cortina 2026 | ObjectWire",
  description:
    "Team USA won the women's ice hockey gold medal at the 2026 Winter Olympics, defeating Canada 2-1 in overtime. Megan Keller scored the winner at 4:07 of OT after Hilary Knight's clutch tying goal with 2:04 left in regulation.",
  keywords: [
    "Team USA women's hockey gold",
    'Milano Cortina 2026',
    'Winter Olympics 2026',
    "women's ice hockey",
    'Megan Keller overtime goal',
    'Hilary Knight',
    'Hannah Bilka',
    'USA Canada hockey final',
    'Olympic gold medal hockey',
    'Aerin Frankel',
  ],
  openGraph: {
    title: "Team USA Wins Women's Hockey Gold — Keller's OT Goal Stuns Canada",
    description:
      "Megan Keller scored in overtime, Hilary Knight tied it with 2 minutes left, and Team USA captured the women's ice hockey gold medal at Milano Cortina 2026.",
    type: 'article',
    publishedTime: publishDate,
    authors: ['ObjectWire Sports Desk'],
    url: 'https://www.objectwire.org/news/team-usa-womens-hockey-gold-2026',
    images: [
      {
        url: 'https://www.objectwire.org/winter-olympics-womens-hockey-gold.jpg',
        width: 1200,
        height: 630,
        alt: "Team USA celebrates winning women's ice hockey gold at Milano Cortina 2026",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "USA Beats Canada in OT for Women's Hockey Gold | Milano Cortina 2026",
    description:
      "Megan Keller OT winner. Hilary Knight tying goal. Team USA wins gold. The full story.",
  },
  alternates: {
    canonical: 'https://www.objectwire.org/news/team-usa-womens-hockey-gold-2026',
  },
};

export default function WomensHockeyGoldPage() {
  return <NewsArticleDB slug="news-team-usa-womens-hockey-gold-2026" />;
}
