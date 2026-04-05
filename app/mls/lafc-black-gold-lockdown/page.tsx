import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/mls/lafc-black-gold-lockdown';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1706675780107-7c43cc487928?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'LAFC Defense 2026 | Best in the West Without Sacrificing Attack',
  description:
    'LAFC has conceded just 7 goals through 8 MLS matches in 2026, the fewest in the Western Conference, while still averaging 2.1 goals per game on offense.',
  keywords: [
    'LAFC 2026',
    'LAFC defense',
    'LAFC MLS 2026',
    'LAFC best defense MLS',
    'LAFC Western Conference',
    'MLS defensive stats 2026',
    'LAFC goals conceded',
    'LAFC attack 2026',
    'Major League Soccer 2026',
    'LAFC season analysis',
    'MLS Western Conference standings',
    'LAFC Banc of California',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'LAFC Defense 2026 | Best in the West Without Sacrificing Attack',
    description:
      'Just 7 goals conceded in 8 matches. LAFC are running the tightest defense in the Western Conference while still averaging 2.1 goals per game.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Sports Desk'],
    publishedTime: '2026-04-04T14:00:00Z',
    modifiedTime: '2026-04-04T14:00:00Z',
    section: 'Sports',
    tags: ['LAFC', 'MLS', 'Major League Soccer', 'Western Conference', 'Soccer'],
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Soccer match under stadium lights at night' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LAFC Built the West\'s Best Defense Without Losing Their Edge',
    description: '7 goals conceded in 8 games. 2.1 goals scored per match. LAFC are the real deal in 2026.',
  },
};

export default function MlsLafcBlackGoldLockdownPage() {
  return <NewsArticleDB slug="mls-lafc-black-gold-lockdown" />;
}
