import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/trump/japan-36-billion-us-energy-critical-minerals';

export const metadata: Metadata = {
  title: 'Japan Commits $36 Billion to US Energy & Critical Minerals Under Trump Trade Pact | ObjectWire',
  description:
    'Japan announced the first investments under its landmark US trade deal on February 17, 2026 — committing $36 billion across three projects: a $33B natural gas plant in Ohio, a $2.1B crude export terminal in Texas, and a $600M synthetic diamond plant in Georgia.',
  keywords: [
    'Japan US trade deal',
    'Japan $36 billion investment',
    'Trump Japan trade pact',
    'SoftBank Ohio power plant',
    'GulfLink Texas crude export terminal',
    'Element Six Georgia diamond plant',
    'Japan $550 billion investment',
    'US Japan energy agreement 2026',
    'Howard Lutnick Japan',
    'Sanae Takaichi Washington',
    'critical minerals supply chain',
    'Trump tariffs trade deal',
    'US energy independence',
    'natural gas Ohio AI data centers',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: 'Japan Commits $36 Billion to US Energy & Critical Minerals Under Trump Trade Pact',
    description:
      'The first tranche of Japan\'s $550B US investment pledge: a record-breaking $33B Ohio gas plant, a Texas deepwater crude terminal, and a Georgia synthetic diamond facility. Full breakdown on ObjectWire.',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Editorial'],
    publishedTime: '2026-02-18T10:00:00Z',
    modifiedTime: '2026-02-18T10:00:00Z',
    section: 'Politics & Trade',
    tags: ['Trump', 'Japan', 'Trade Deal', 'Energy', 'Critical Minerals', 'SoftBank', 'Ohio', 'Texas', 'Georgia'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Japan\'s $36B US Investment Is Live — Ohio Gas Plant, Texas Crude Terminal, Georgia Diamonds',
    description:
      'First tranche of Japan\'s $550B US pledge: the largest natural gas plant in US history plus critical minerals and energy infrastructure. Under Trump\'s trade framework.',
  },
};

export default function JapanUSEnergyPage() {
  return <NewsArticleDB slug="trump-japan-36-billion-us-energy-critical-minerals" />;
}
