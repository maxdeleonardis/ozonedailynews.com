import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/microsoft/news/microsoft-chevron-7b-texas-power-plant';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1750074905408-db3b0f29202a?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Microsoft in Talks with Chevron on $7B Texas Power Plant',
  description:
    'Microsoft is in exclusive negotiations with Chevron and Engine No. 1 to build a $7 billion natural gas power complex in West Texas to supply electricity to AI data centers.',
  keywords: [
    'Microsoft Chevron power plant Texas',
    'Microsoft $7 billion data center power',
    'Chevron Engine No 1 natural gas plant',
    'Microsoft AI data center energy',
    'West Texas power plant deal 2026',
    'Big Oil AI power supply',
    'natural gas power AI infrastructure',
    'Microsoft data center electricity',
    'Chevron energy transition AI',
    'Engine No 1 Microsoft power deal',
    'AI data center energy demand 2026',
    'Microsoft West Texas campus',
    'hyperscaler power procurement',
    'natural gas electricity AI boom',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: 'Microsoft in Talks with Chevron on $7B Texas Power Plant',
    description:
      'Microsoft is negotiating a $7B deal with Chevron and Engine No. 1 to build a natural gas power complex in West Texas for AI data center electricity.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Sterling'],
    publishedTime: '2026-04-02T14:00:00Z',
    modifiedTime: '2026-04-02T14:00:00Z',
    section: 'Tech',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Natural gas power plant towers at sunset' }],
    tags: ['Microsoft', 'Chevron', 'Engine No. 1', 'AI', 'Data Centers', 'Texas', 'Energy'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Microsoft in Talks with Chevron on $7B Texas Power Plant',
    description:
      '$7B natural gas power complex in West Texas. Chevron and Engine No. 1 would supply electricity to Microsoft AI data centers. Big Oil meets the AI boom.',
    images: [OG_IMAGE],
  },
};

export default function MicrosoftNewsMicrosoftChevron7bTexasPowerPlantPage() {
  return <JackArticleDB slug="microsoft-news-microsoft-chevron-7b-texas-power-plant" />;
}
