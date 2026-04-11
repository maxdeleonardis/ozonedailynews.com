import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/indonesia/news/indonesia-5-5-percent-q1-growth-world-bank-cut';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1680244116826-467f252cf503?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Indonesia Claims 5.5% Q1 Growth, Shrugs Off World Bank Cut',
  description: 'Indonesia\'s Coordinating Minister Airlangga Hartarto said Q1 2026 GDP grew at least 5.5%, driven by household consumption and Ramadan spending, even as the World Bank trimmed its forecast to 4.7%.',
  keywords: [
    'Indonesia GDP Q1 2026',
    'Indonesia 5.5 percent growth',
    'Airlangga Hartarto economy',
    'World Bank Indonesia forecast',
    'Indonesia economic growth 2026',
    'Indonesia household consumption GDP',
    'Indonesia Ramadan spending GDP',
    'World Bank East Asia Pacific Update',
    'Indonesia tax revenue 2026',
    'Indonesia manufacturing growth',
    'Indonesia World Bank 4.7 percent',
    'Indonesia emerging market economy',
    'Indonesia Q1 GDP estimate',
    'Indonesia domestic demand 2026',
    'Indonesia Eid al-Fitr economic boost',
    'Indonesia Sri Mulyani budget',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Indonesia Claims 5.5% Q1 Growth as World Bank Trims Forecast to 4.7%',
    description: 'Airlangga Hartarto says household consumption and Ramadan spending drove at least 5.5% growth in Q1 2026. World Bank cut full-year forecast from 4.8% to 4.7%.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-04-11T22:00:00Z',
    modifiedTime: '2026-04-11T22:00:00Z',
    section: 'Finance',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Jakarta Indonesia skyline representing economic growth' }],
    tags: ['Indonesia', 'GDP', 'World Bank', 'Airlangga Hartarto', 'Emerging Markets', 'Southeast Asia'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Indonesia Claims 5.5% Q1 Growth | Dismisses World Bank Downgrade',
    description: 'Household consumption (54% of GDP) and Ramadan spending powered the quarter. Tax revenue up 14.3% YoY. World Bank trimmed to 4.7%.',
    images: [OG_IMAGE],
  },
};

export default function IndonesiaNewsIndonesia55PercentQ1GrowthWorldBankCutPage() {
  return <NewsArticleDB slug="indonesia-news-indonesia-5-5-percent-q1-growth-world-bank-cut" />;
}
