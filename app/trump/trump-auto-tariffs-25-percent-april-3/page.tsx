import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/trump/trump-auto-tariffs-25-percent-april-3';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = 'https://www.objectwire.org/trump/trump-auto-tariffs-april.jpg';

export const metadata: Metadata = {
  title: 'Trump 25% Auto Tariff Order | Global Carmakers Brace for',
  description:
    'President Trump signed an executive order imposing 25% tariffs on all imported automobiles and auto parts, effective April 3. Analysts project a $3,000 to',
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
    title: 'Trump 25% Auto Tariff Order | Global Carmakers Face April 3',
    description:
      'A 25% tariff on every imported car and auto part hits April 3. Toyota, BMW, Stellantis and Hyundai are scrambling. Ford and GM see a short window to gain,',
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
    title: 'Trump 25% Auto Tariff Order | Effective April 3',
    description:
      'Every imported car and major auto part faces a 25% tariff starting April 3. Analysts project $3K–$10K price hikes on foreign-built vehicles. Here\'s who',
  },
};

export default function TrumpAutoTariffs25PercentApril3Page() {
  return <JackArticleDB slug="trump-trump-auto-tariffs-25-percent-april-3" />;
}
