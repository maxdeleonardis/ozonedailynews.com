import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/trump/news/trump-silicon-valley-dream-team-ai-advisory-council-pcast-march-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = 'https://www.objectwire.org/default/pawel-czerwinski-fpZZEV0uQwA-unsplash.jpg';

export const metadata: Metadata = {
  title: 'Trump Appoints Silicon Valley "Dream Team" to AI Advisory Council',
  description:
    'President Trump has officially appointed 13 technology leaders, including Mark Zuckerberg, Jensen Huang, Larry Ellison, and Sergey Brin, to the',
  keywords: [
    'Trump PCAST 2026',
    'Trump AI Advisory Council',
    'Trump Silicon Valley appointments',
    'David Sacks PCAST',
    'Jensen Huang White House',
    'Mark Zuckerberg Trump council',
    'Larry Ellison PCAST',
    'Sergey Brin Trump advisory',
    'Trump tech policy 2026',
    'President Council Advisors Science Technology',
    'Michael Kratsios OSTP',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: 'Trump Appoints Silicon Valley "Dream Team" to AI Advisory Council',
    description:
      'The White House confirmed 13 appointments to PCAST, Zuckerberg, Jensen Huang, Larry Ellison, Sergey Brin, Lisa Su, and more, co-chaired by AI Czar David',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-03-25T17:00:00Z',
    modifiedTime: '2026-03-25T17:00:00Z',
    section: 'Politics & Technology',
    tags: ['Trump', 'AI Policy', 'PCAST', 'David Sacks', 'Jensen Huang', 'Mark Zuckerberg', 'Silicon Valley', 'White House', 'Technology'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trump Appoints Zuckerberg, Jensen Huang, Ellison, Brin to AI Advisory Council',
    description:
      '13 Silicon Valley heavyweights, including Meta, NVIDIA, Oracle, Google co-founder, AMD, and Dell, now formally advise the White House on AI policy,',
    images: [IMAGE_URL],
  },
};

export default function TrumpPCASTSiliconValleyPage() {
  return <JackArticleDB slug="trump-news-trump-silicon-valley-dream-team-ai-advisory-council-pcast-march-2026" />;
}
