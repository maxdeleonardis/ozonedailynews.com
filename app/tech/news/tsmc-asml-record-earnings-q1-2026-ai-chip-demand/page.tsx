import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/tech/news/tsmc-asml-record-earnings-q1-2026-ai-chip-demand';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1758549885116-c8bd6bc619e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=80';

export const metadata: Metadata = {
  title: 'TSMC ASML Record Earnings Q1 2026 | AI Chip Demand Soars',
  description: 'TSMC posted record quarterly profit of $18.12B while ASML raised full-year guidance to €40B. Back-to-back beats confirm AI silicon demand is accelerating',
  keywords: [
    'TSMC earnings Q1 2026',
    'TSMC record profit 2026',
    'ASML earnings Q1 2026',
    'ASML raised guidance 2026',
    'AI chip demand 2026',
    'TSMC 3nm production',
    'ASML EUV lithography',
    'semiconductor earnings 2026',
    'SK Hynix HBM',
    'Samsung Electronics rally',
    'agentic AI silicon demand',
    'TSMC CC Wei',
    'ASML Christophe Fouquet',
    'Philadelphia Semiconductor Index',
    'TSMC capex 2026',
    'semiconductor supply chain 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'TSMC & ASML Post Record Q1 2026 Results as AI Chip',
    description: 'TSMC net income hit $18.12B (+58% YoY). ASML raised 2026 guidance to €40B. 3nm sold out through 2027. SK Hynix at all-time highs. Hardware is king.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Sterling'],
    publishedTime: '2026-04-17T22:00:00Z',
    modifiedTime: '2026-04-17T22:00:00Z',
    section: 'Tech',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Semiconductor chip on circuit board' }],
    tags: ['TSMC', 'ASML', 'Semiconductors', 'AI', 'SK Hynix', 'Samsung'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TSMC record $18.12B profit, ASML raises guidance | AI chip',
    description: 'Back-to-back earnings beats from the heart of the chip supply chain. 3nm sold out through 2027. SK Hynix at ATH. Software volatile, hardware is king.',
    images: [OG_IMAGE],
  },
};

export default function TechNewsTsmcAsmlRecordEarningsQ12026AiChipDemandPage() {
  return <JackArticleDB slug="tech-news-tsmc-asml-record-earnings-q1-2026-ai-chip-demand" />;
}
