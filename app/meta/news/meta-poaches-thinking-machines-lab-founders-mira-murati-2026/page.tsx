import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/meta/news/meta-poaches-thinking-machines-lab-founders-mira-murati-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Meta Poaches 7 Thinking Machines Founders | Mira Murati 2026',
  description: 'Meta recruited 7 founding members of Mira Murati\'s Thinking Machines Lab, including Andrew Tulloch at a reported $1.5B package. The talent raid follows a',
  keywords: [
    'Meta Thinking Machines Lab founders',
    'Mira Murati Meta talent raid 2026',
    'Andrew Tulloch Meta $1.5 billion',
    'Thinking Machines Lab Meta defections',
    'Meta Superintelligence Labs Alexandr Wang',
    'Mira Murati OpenAI CTO startup',
    'Joshua Gross Meta Tinker API',
    'Soumith Chintala Thinking Machines CTO',
    'Barret Zoph OpenAI return',
    'Thinking Machines $12 billion valuation',
    'Meta AI talent acquisition 2026',
    'Mira Murati AI startup 2026',
    'Meta Zuckerberg $1 billion acquisition rejected',
    'Silicon Valley talent war AI 2026',
    'Thinking Machines Tinker fine-tuning',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Meta Poaches 7 Thinking Machines Founders | The $1.5B',
    description: 'After Mira Murati rejected a $1B buyout from Zuckerberg, Meta began recruiting her founding team one by one. Seven are now at Meta. Andrew Tulloch\'s',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Alfasa'],
    publishedTime: '2026-04-21T21:00:00Z',
    modifiedTime: '2026-04-21T21:00:00Z',
    section: 'Tech',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Silicon Valley talent recruitment tech office AI researchers' }],
    tags: ['Meta', 'Mira Murati', 'Thinking Machines Lab', 'AI Talent'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meta rejected. Zuckerberg pivoted. Now 7 of Mira Murati\'s founders work for him.',
    description: 'Andrew Tulloch: $1.5B package. Joshua Gross. Mark Jen. Yinghai Lu. Tianyi Zhang. The most expensive talent raid in AI history.',
    images: [OG_IMAGE],
  },
};

export default function MetaNewsMetaPoachesThinkingMachinesLabFoundersMiraMurati2026Page() {
  return <JackArticleDB slug="meta-news-meta-poaches-thinking-machines-lab-founders-mira-murati-2026" />;
}
