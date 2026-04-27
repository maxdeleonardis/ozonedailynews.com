import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/google/news/alphabet-anthropic-40-billion-investment-350b-valuation-cloud-arms-race-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE =
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Google Leads $40B Anthropic Deal | $350B Valuation, Cloud Arms Race',
  description:
    'Alphabet committed up to $40 billion to Anthropic at a $350B valuation, days after Amazon pledged $25B. Google brings 5GW of power and millions of TPUs as the cloud compute arms race for Claude intensifies.',
  keywords: [
    'Google Anthropic $40 billion investment 2026',
    'Alphabet Anthropic deal $350 billion valuation',
    'Anthropic funding round April 2026',
    'Amazon Anthropic $25 billion AWS Bedrock',
    'Broadcom Anthropic custom silicon 2027',
    'Krishna Rao Anthropic CFO compute strategy',
    'Anthropic $30 billion annualized revenue',
    'Google TPU Anthropic compute deal',
    'Claude AI enterprise customers 2026',
    'Anthropic cloud arms race Google Amazon',
    'Google Vertex AI Anthropic Claude',
    'Anthropic $380 billion Series G valuation',
    'Anthropic compute for equity deal',
    'Google Alphabet AI investment 2026',
    'Anthropic cloud infrastructure deals 2026',
    'Anthropic vs Gemini frenemy relationship',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Google Leads $40B Anthropic Deal | $350B Valuation as Cloud Giants Race for AI Compute Control',
    description:
      'Google is committing $10B upfront and up to $40B total to Anthropic, with 5 gigawatts of power and millions of TPUs. Amazon pledged $25B days earlier. Broadcom joins with 3.5GW of custom silicon from 2027.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-04-26T18:00:00Z',
    modifiedTime: '2026-04-26T18:00:00Z',
    section: 'Tech',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 675,
        alt: 'Data visualization representing Alphabet\'s $40 billion investment in Anthropic and the cloud AI compute arms race',
      },
    ],
    tags: ['Google', 'Anthropic', 'Claude', 'Amazon', 'Broadcom', 'AI Investment'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Just Bet $40B on Anthropic at a $350B Valuation, Days After Amazon Did the Same',
    description:
      'Krishna Rao: "disciplined scaling." Google brings 5GW and millions of TPUs. Amazon brings AWS Bedrock. Broadcom adds 3.5GW in custom silicon from 2027. Anthropic turned down $800B private offers.',
    images: [OG_IMAGE],
  },
};

export default function GoogleNewsAlphabetAnthropic40BillionInvestment350bValuationCloudArmsRace2026Page() {
  return <NewsArticleDB slug="google-news-alphabet-anthropic-40-billion-investment-350b-valuation-cloud-arms-race-2026" />;
}
