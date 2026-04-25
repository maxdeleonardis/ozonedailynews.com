import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/world-cup/news/fifa-world-cup-2026-five-major-issues-50-days';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'FIFA World Cup 2026 | 5 Major Issues With 50 Days to Go',
  description:
    'Iran participation uncertainty, $150 train fares, $10,990 tickets, ICE immigration fears, and a shooting at Teotihuacan are the five biggest crises facing',
  keywords: [
    'FIFA World Cup 2026 issues',
    'World Cup 2026 50 days',
    'Iran World Cup 2026 participation',
    'World Cup 2026 ticket prices',
    'World Cup 2026 transit prices New Jersey',
    'ICE raids World Cup 2026',
    'Mexico World Cup security Teotihuacan',
    'FIFA World Cup 2026 controversy',
    'World Cup 2026 problems',
    'Gianni Infantino World Cup 2026',
    'World Cup 2026 immigration crackdown',
    'NJ Transit $150 World Cup train',
    'World Cup 2026 ticket prices $10990',
    'Trump Iran World Cup war ceasefire',
    'World Cup 2026 June 11 opener',
    'Mexico Canada USA World Cup host',
    'World Cup 2026 fan outrage',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'FIFA World Cup 2026 | 5 Major Issues With 50 Days to Go',
    description:
      'Iran war ceasefire, $150 train fares, $10,990 tickets, ICE raids, and a shooting in Mexico. Five crises FIFA and the host nations must resolve before June',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Sports Desk'],
    publishedTime: '2026-04-22T14:00:00Z',
    modifiedTime: '2026-04-22T14:00:00Z',
    section: 'Sports',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Protest banner against World Cup 2026 rising rents in Mexico City' }],
    tags: ['World Cup 2026', 'FIFA', 'Iran', 'ICE', 'Mexico', 'Tickets', 'Transit'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '5 crises facing the World Cup with 50 days to go',
    description: 'Iran participation in doubt, $150 train ride to the final, $10,990 tickets, ICE at stadiums, and a shooting at a UNESCO site in Mexico.',
    images: [OG_IMAGE],
  },
};

export default function WorldCupNewsFifaWorldCup2026FiveMajorIssues50DaysPage() {
  return <NewsArticleDB slug="world-cup-news-fifa-world-cup-2026-five-major-issues-50-days" />;
}
