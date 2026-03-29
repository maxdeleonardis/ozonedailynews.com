import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/trump/trump-auto-tariffs-25-percent-april-3';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = 'https://www.objectwire.org/trump/trump-auto-tariffs-april.jpg';

export const metadata: Metadata = {
  title: 'Trump Signs 25% Auto Tariff Order — Global Carmakers Brace for April 3 Shock | ObjectWire',
  description:
    'President Trump signed an executive order imposing 25% tariffs on all imported automobiles and auto parts, effective April 3. The move sends shockwaves through Detroit, Tokyo, Stuttgart, and Seoul — with analysts projecting a $3,000–$10,000 price increase on foreign-built vehicles.',
  keywords: [
    'Trump auto tariffs 25 percent April 2026',
    'Trump car tariffs executive order',
    'auto industry tariffs 2026',
    'imported car tariffs April 3 2026',
    'Trump tariffs Toyota Honda BMW',
    'US auto tariffs Detroit 2026',
    'Trump trade war cars',
    'car price increase tariffs 2026',
    'auto parts tariff impact',
    'Trump executive order automobiles',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Trump Signs 25% Auto Tariff Order — Global Carmakers Face April 3 Shock',
    description:
      'A 25% tariff on every imported car and auto part hits April 3. Toyota, BMW, Stellantis and Hyundai are scrambling. Ford and GM see a short window to gain — but their own supply chains run through Mexico and Canada.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-03-25T12:00:00Z',
    modifiedTime: '2026-03-25T12:00:00Z',
    section: 'Politics',
    tags: ['Trump', 'Auto Tariffs', 'Trade War', 'Automotive', 'Economy'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trump Signs 25% Auto Tariff Order — Effective April 3',
    description:
      'Every imported car and major auto part faces a 25% tariff starting April 3. Analysts project $3K–$10K price hikes on foreign-built vehicles. Here\'s who wins, who gets wrecked, and what it means for your next car purchase.',
  },
};

export default function TrumpAutoTariffs25PercentApril3Page() {
  return <JackArticleDB slug="trump-trump-auto-tariffs-25-percent-april-3" />;
}
