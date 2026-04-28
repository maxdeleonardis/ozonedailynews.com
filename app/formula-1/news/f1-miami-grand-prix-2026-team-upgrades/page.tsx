import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/formula-1/news/f1-miami-grand-prix-2026-team-upgrades';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1504707748692-419802cf939d?w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'F1 Miami GP 2026 | Every Team Upgrade Package Explained',
  description:
    'Formula 1 teams bring sweeping upgrades to the Miami Grand Prix May 1-3 after a five-week break. Mercedes leads the championship, Red Bull scrambles to fix the RB22.',
  keywords: [
    'F1 Miami Grand Prix 2026',
    'F1 Miami 2026 upgrades',
    'Formula 1 Miami 2026',
    'Red Bull RB22 upgrade Miami',
    'Mercedes F1 2026 season dominance',
    'Kimi Antonelli championship lead 2026',
    'Max Verstappen Miami 2026',
    'F1 2026 team upgrades explained',
    'Formula 1 Miami International Autodrome',
    'F1 2026 new regulations Mercedes',
    'Laurent Mekies Red Bull second season',
    'George Russell F1 2026',
  ],
  alternates: { canonical: `https://www.objectwire.org${SLUG}` },
  openGraph: {
    title: 'F1 Miami GP 2026 | Team Upgrades, Mercedes Lead, Red Bull Crisis',
    description:
      'After five weeks off, F1 returns to Miami with the most significant mid-season upgrade wave in recent memory. Red Bull needs answers. Mercedes wants to extend its perfect record.',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['Conan Boyle'],
    publishedTime: '2026-04-28T16:00:00Z',
    modifiedTime: '2026-04-28T16:00:00Z',
    section: 'Sports',
    tags: ['Formula 1', 'Miami Grand Prix', 'Mercedes', 'Red Bull', 'Kimi Antonelli'],
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Formula 1 racing car on track at speed' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'F1 Miami 2026 | Biggest Upgrade Wave of the Season',
    description:
      'Mercedes perfect through 3 races. Red Bull adrift in 9th. Every team arriving in Miami with major upgrades after a five-week break.',
    images: [OG_IMAGE],
  },
};

export default function Formula1NewsF1MiamiGrandPrix2026TeamUpgradesPage() {
  return <NewsArticleDB slug="formula-1-news-f1-miami-grand-prix-2026-team-upgrades" />;
}
