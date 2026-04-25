import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/tech/news/palantir-manifesto-ai-arms-race-shares-slide-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Palantir Manifesto | AI Arms Race Doctrine Triggers',
  description: 'Palantir published a 22-point manifesto on April 18 calling for AI deterrence, German and Japanese remilitarization, and national service. Shares fell',
  keywords: [
    'Palantir manifesto April 2026',
    'Palantir AI arms race doctrine',
    'Alex Karp Technological Republic manifesto',
    'Palantir shares slide April 2026',
    'Palantir remilitarization Germany Japan',
    'Palantir national service manifesto',
    'Palantir protest die-in Manhattan 2026',
    'Purge Palantir campaign AFSC',
    'Palantir ICE Israeli military contracts',
    'Palantir AI deterrence atomic age',
    'Palantir manifesto backlash Engadget',
    'Palantir headquarters Denver Miami 2026',
    'Iyad el-Baghdadi Palantir defense markets',
    'Palantir 22-point manifesto X post',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Palantir Manifesto | AI Arms Race Doctrine, Backlash',
    description: 'Palantir\'s 22-point manifesto calls the atomic age over and the era of AI deterrence begun. Critics, protesters, and the market responded within 48 hours.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Alfasa'],
    publishedTime: '2026-04-22T20:00:00Z',
    modifiedTime: '2026-04-22T20:00:00Z',
    section: 'Tech',
    tags: ['Palantir', 'Alex Karp', 'AI Arms Race', 'Defense Tech', 'Protests'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Palantir Published a 22-Point AI Arms Race Manifesto.',
    description: 'The manifesto calls for AI deterrence, German remilitarization, and national service. Critics called it a comic book villain\'s ramblings. The market',
  },
};

export default function TechNewsPalantirManifestoAiArmsRaceSharesSlide2026Page() {
  return <NewsArticleDB slug="tech-news-palantir-manifesto-ai-arms-race-shares-slide-2026" />;
}
