import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/ArticlePageDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/elon-musk/xai';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = '/default/xAI_company_history_profile.png';

export const metadata: Metadata = {
  title: 'xAI | Elon Musk\'s AI Company, Grok Models & Colossus Supercluster | ObjectWire',
  description:
    'xAI is an American artificial intelligence company founded by Elon Musk in July 2023. The company develops the Grok family of large language models and operates the Colossus supercluster in Memphis, Tennessee, one of the largest AI training clusters in the world.',
  keywords: [
    'xAI',
    'xAI Elon Musk',
    'Grok AI model',
    'Grok-3',
    'xAI Colossus supercluster',
    'xAI Series B funding',
    'Grok large language model',
    'xAI Memphis Tennessee',
    'xAI valuation 2026',
    'Elon Musk AI company',
    'xAI vs OpenAI',
    'Grok X Premium',
    'xAI Nvidia H100',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'xAI | Elon Musk\'s AI Company, Grok Models & Colossus Supercluster',
    description:
      'Founded in July 2023, xAI has raised $12 billion, built the 200,000-GPU Colossus supercluster, and released Grok-3, one of the most capable large language models available as of 2026.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'xAI | ObjectWire',
    description:
      'Elon Musk\'s AI lab: Grok models, the Colossus supercluster, and a mission to understand the true nature of the universe.',
    images: [IMAGE_URL],
  },
};

export default function XAIPage() {
  return <ArticlePageDB slug="elon-musk-xai" />;
}
