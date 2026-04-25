import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/redbull/news/red-bull-racing-crisis-2026-verstappen-exit-brain-drain';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Red Bull Racing Crisis 2026 | Verstappen Exit, Brain Drain',
  description: 'Red Bull Racing sits 6th in the 2026 Constructors Standings with 16 points. Adrian Newey, Christian Horner, and Helmut Marko gone. Lambiase leaving for',
  keywords: [
    'Red Bull Racing 2026',
    'Red Bull crisis 2026',
    'Max Verstappen exit clause',
    'Verstappen McLaren 2027',
    'Red Bull RB22',
    'Gianpiero Lambiase McLaren',
    'Adrian Newey Red Bull departure',
    'Christian Horner Red Bull',
    'Red Bull Constructors 2026',
    'Isack Hadjar Red Bull',
    'Red Bull brain drain',
    'F1 2026 standings',
    'Red Bull Milton Keynes',
    'Verstappen Lambiase',
    'Daniel Ricciardo retirement',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Red Bull Racing in Freefall | 6th in Constructors',
    description: 'Brain drain, a "disaster" RB22, and a star driver eyeing the exit. Red Bull Racing faces a triple crisis in 2026 with only 16 points after three rounds.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Brenen'],
    publishedTime: '2026-04-17T23:59:00Z',
    modifiedTime: '2026-04-17T23:59:00Z',
    section: 'Sports',
    tags: ['Red Bull Racing', 'Max Verstappen', 'Formula 1', 'McLaren'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Red Bull Racing triple crisis | 6th in standings',
    description: 'Newey gone. Horner gone. Marko gone. Lambiase leaving for McLaren. RB22 called a "disaster." Verstappen reportedly has a summer exit clause. 16 points',
  },
};

export default function RedbullNewsRedBullRacingCrisis2026VerstappenExitBrainDrainPage() {
  return <NewsArticleDB slug="redbull-news-red-bull-racing-crisis-2026-verstappen-exit-brain-drain" />;
}
