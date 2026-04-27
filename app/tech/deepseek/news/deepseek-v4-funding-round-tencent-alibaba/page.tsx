import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/tech/deepseek/news/deepseek-v4-funding-round-tencent-alibaba';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE =
  'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'DeepSeek V4 | $20B Valuation, Tencent Funding Talks',
  description:
    'DeepSeek is raising its first outside round at a $20B+ valuation with Tencent and Alibaba bidding. V4, a 1.6T-parameter open-source model, launched the same week as funding talks intensified.',
  keywords: [
    'DeepSeek V4 funding round',
    'DeepSeek $20 billion valuation',
    'Tencent DeepSeek investment',
    'Alibaba DeepSeek stake',
    'DeepSeek first external funding',
    'Liang Wenfeng High-Flyer Capital',
    'DeepSeek V4 model 2026',
    'DeepSeek 1.6 trillion parameter model',
    'DeepSeek Big Fund III China',
    'Guo Daya ByteDance Seed AI',
    'DeepSeek R1 successor',
    'China AI startup funding 2026',
    'DeepSeek open-source model release',
    'DeepSeek talent departure 2026',
    'DeepSeek yuan funding round',
    'Chinese AI valuation 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'DeepSeek V4 & First Funding Round | Tencent, Alibaba, $20B Valuation',
    description:
      'DeepSeek launches V4 — a 1.6T-parameter open-source model — while negotiating its first outside round at $20B+ with Tencent and Alibaba. Valuation doubled in days.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Sterling'],
    publishedTime: '2026-04-25T12:00:00Z',
    modifiedTime: '2026-04-25T12:00:00Z',
    section: 'Tech',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Abstract AI neural network visualization representing DeepSeek model architecture' }],
    tags: ['DeepSeek', 'Tencent', 'Alibaba', 'AI Funding', 'V4 Model', 'China AI'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DeepSeek V4 Launches | $20B Valuation, Tencent Stake Talks',
    description:
      '1.6T-parameter V4 drops the same week DeepSeek starts its first-ever outside fundraise. Valuation jumped from $10B to $20B+ in days.',
    images: [OG_IMAGE],
  },
};

export default function TechDeepseekNewsDeepseekV4FundingRoundTencentAlibabaPage() {
  return <JackArticleDB slug="tech-deepseek-news-deepseek-v4-funding-round-tencent-alibaba" />;
}
