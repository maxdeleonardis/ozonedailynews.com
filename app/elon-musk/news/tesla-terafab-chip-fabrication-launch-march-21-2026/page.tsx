import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/elon-musk/news/tesla-terafab-chip-fabrication-launch-march-21-2026';
const FULL_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = 'https://www.objectwire.org/elon-musk/terafab-tesla-chip-fab.jpg';

export const metadata: Metadata = {
  title: 'BREAKING: Elon Musk Announces Tesla "Terafab" Chip Fab Will Launch in 7 Days',
  description:
    'Elon Musk announced on March 14, 2026 that Tesla\'s "Terafab", a next-generation chip fabrication facility targeting 2nm and 100,000 wafer starts per',
  keywords: [
    'Tesla Terafab',
    'Elon Musk chip factory',
    'Tesla semiconductor',
    'Terafab launch March 2026',
    'Tesla vertical integration',
    'AI5 processor',
    'Tesla FSD chip',
    'Optimus robot chip',
    '2nm process node',
    'Intel foundry partnership Tesla',
    'TSMC alternative',
    'Tesla AI factory',
    'Elon Musk semiconductor',
    'Tesla chip manufacturing',
  ],
  openGraph: {
    title: 'BREAKING: Elon Musk Announces Tesla "Terafab" Chip Fab Launches in 7 Days',
    description:
      'Elon Musk sets a March 21 deadline for the launch of Tesla\'s Terafab, a domestic 2nm chip fabrication facility designed to handle logic chips, HBM',
    url: FULL_URL,
    type: 'article',
    images: [{ url: IMAGE_URL, alt: 'Tesla Terafab chip fabrication facility announcement' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BREAKING: Elon Musk Says Tesla Terafab Launches in 7 Days',
    description:
      'Tesla\'s "Terafab", targeting 2nm chips, 100k WSPM, and full vertical integration, officially launches March 21, per Elon Musk\'s post on X.',
    images: [IMAGE_URL],
  },
  alternates: { canonical: FULL_URL },
};

export default function TeslaTerafabLaunchPage() {
  return <NewsArticleDB slug="elon-musk-news-tesla-terafab-chip-fabrication-launch-march-21-2026" />;
}
