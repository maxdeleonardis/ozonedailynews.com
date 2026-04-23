import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/entertainment/news/wbd-paramount-shareholder-vote-cnn-cbs-merger-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = '';

export const metadata: Metadata = {
  title: 'WBD Paramount Shareholder Vote | CNN, CBS, $110B Merger Analysis',
  description: 'Warner Bros Discovery shareholders vote April 23 on a $110B Paramount Skydance merger that would merge CNN and CBS News, create a $50B debt load, and reshape American media.',
  keywords: [
    'Warner Bros Discovery Paramount merger 2026',
    'WBD shareholder vote April 2026',
    'CNN CBS News merger integration',
    'Paramount Skydance $110 billion deal',
    'David Ellison Skydance media',
    'WBD $31 per share premium',
    'Warner Bros Discovery debt load',
    'Nexstar Tegna merger blocked 2026',
    'media consolidation 2026',
    'FCC antitrust Warner Bros CBS',
    'HBO Max Paramount Plus streaming merger',
    'CNN CBS newsroom redundancies',
    'Warner Bros Discovery ticking fee',
    'American media consolidation 2026',
    'Big Four broadcast ownership rules',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'WBD Paramount Shareholder Vote | CNN + CBS Merger, $110B Media Shakeup',
    description: 'Shareholders vote today on a deal that would put CNN and CBS News under one roof, pile $50B in debt onto the combined entity, and cut up to 7,000 jobs. Here is what is at stake.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Sterling'],
    publishedTime: '2026-04-23T08:00:00Z',
    modifiedTime: '2026-04-23T08:00:00Z',
    section: 'Entertainment',
    tags: ['Warner Bros Discovery', 'Paramount Skydance', 'CNN', 'CBS News', 'Media Consolidation'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Today\'s Vote Could Merge CNN and CBS News Inside a $110B Media Giant',
    description: '$50B debt, 7,000 potential job cuts, FCC antitrust scrutiny. The WBD-Paramount shareholder vote is the most consequential media event in a decade.',
  },
};

export default function EntertainmentNewsWbdParamountShareholderVoteCnnCbsMerger2026Page() {
  return <JackArticleDB slug="entertainment-news-wbd-paramount-shareholder-vote-cnn-cbs-merger-2026" />;
}
