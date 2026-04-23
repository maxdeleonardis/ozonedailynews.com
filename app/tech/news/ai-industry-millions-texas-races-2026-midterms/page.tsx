import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/tech/news/ai-industry-millions-texas-races-2026-midterms';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'AI Industry Pours Millions Into Texas Races as 2026 Midterms Heat Up',
  description: 'Meta, xAI, and tech executives have funneled millions into Texas state campaigns as lawmakers face constituent anger over data center expansion. Observers call 2026 the "AI midterms."',
  keywords: [
    'AI midterms 2026 Texas',
    'Meta Forge the Future PAC Texas',
    'Elon Musk Texas Senate Leadership Fund',
    'AI industry political spending 2026',
    'Texas data center politics',
    'Greg Abbott tech donations 2026',
    'Meta $65 million state elections',
    'AI lobbying Texas legislature',
    'xAI Texas political contributions',
    'data center environmental backlash Texas',
    'tech PAC spending 2026 midterms',
    'AI industry campaign donations',
    'Texas Republican tech money',
    'AI data center water usage Texas',
    'tech industry state politics 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'AI Industry Pours Millions Into Texas Races as 2026 Midterms Heat Up',
    description: 'Meta spent $1.3M on Texas primaries. Musk gave $500K to a GOP Senate fund. Governor Abbott holds a $105M war chest backed by tech executives.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Alfanasa'],
    publishedTime: '2026-04-08T20:00:00Z',
    modifiedTime: '2026-04-08T20:00:00Z',
    section: 'Tech',
    tags: ['AI Industry', 'Texas Politics', 'Meta', 'xAI', 'Elon Musk', 'Greg Abbott'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Industry Spends Millions on Texas 2026 Midterms',
    description: 'Meta, Musk, and tech executives pour campaign cash into Texas as data center backlash grows. Welcome to the "AI midterms."',
  },
};

export default function TechNewsAiIndustryMillionsTexasRaces2026MidtermsPage() {
  return <NewsArticleDB slug="tech-news-ai-industry-millions-texas-races-2026-midterms" />;
}
