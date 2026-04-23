import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/world-cup/news/fifa-world-cup-2026-final-halftime-show-chris-martin';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'FIFA World Cup 2026 Halftime Show | Chris Martin, Global Citizen Confirmed',
  description: 'FIFA President Gianni Infantino confirmed the 2026 World Cup Final will feature the tournament\'s first-ever Super Bowl-style halftime show, curated by Coldplay\'s Chris Martin and Global Citizen.',
  keywords: [
    'FIFA World Cup 2026 halftime show',
    'World Cup 2026 final halftime show',
    'Chris Martin World Cup 2026',
    'Gianni Infantino halftime show',
    'World Cup 2026 MetLife Stadium',
    'FIFA 2026 entertainment show',
    'World Cup final July 19 2026',
    'Global Citizen World Cup',
    'World Cup Super Bowl halftime',
    'FIFA halftime show artists 2026',
    'World Cup 2026 New Jersey final',
    'Coldplay World Cup 2026',
    'World Cup 2026 Times Square',
    'FIFA 2026 Americanization',
    'World Cup 2026 final date',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'FIFA Confirms World Cup 2026 Final Halftime Show | Chris Martin, Global Citizen',
    description: 'The 2026 World Cup Final at MetLife Stadium will feature a Super Bowl-style halftime show curated by Coldplay\'s Chris Martin. Infantino: "It will be the biggest in the world."',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Sports Desk'],
    publishedTime: '2026-04-17T20:30:00Z',
    modifiedTime: '2026-04-17T20:30:00Z',
    section: 'Sports',
    tags: ['World Cup 2026', 'FIFA', 'Chris Martin', 'MetLife Stadium'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World Cup 2026 Final gets first-ever halftime show — Chris Martin curating',
    description: 'Infantino confirms Super Bowl-style show at MetLife, July 19. "It\'s not one, it\'s more than one" artist. Global Citizen producing.',
  },
};

export default function WorldCupNewsFifaWorldCup2026FinalHalftimeShowChrisMartinPage() {
  return <NewsArticleDB slug="world-cup-news-fifa-world-cup-2026-final-halftime-show-chris-martin" />;
}
