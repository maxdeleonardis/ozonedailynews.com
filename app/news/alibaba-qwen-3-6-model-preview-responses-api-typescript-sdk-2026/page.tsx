import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/news/alibaba-qwen-3-6-model-preview-responses-api-typescript-sdk-2026';
const OG_IMAGE = '';

export const metadata: Metadata = {
  title: 'Alibaba Qwen 3.6 Preview | Responses API, TypeScript SDK',
  description:
    'Alibaba previewed Qwen 3.6 in March 2026 alongside a new OpenAI-compatible Responses API, a TypeScript SDK, and frequent Qwen Code agent updates — all aimed at lowering the barrier for developers building on Qwen.',
  keywords: [
    'Qwen 3.6 model preview',
    'Alibaba Qwen 2026',
    'Qwen Responses API',
    'Qwen TypeScript SDK',
    'Qwen Code agent update',
    'Alibaba AI developer tools',
    'OpenAI-compatible Qwen API',
    'Qwen open-source model',
    'Alibaba AI model March 2026',
    'Qwen API developer tooling',
    'Alibaba AI SDK 2026',
    'Qwen model series',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: 'Alibaba Previews Qwen 3.6 | New Responses API & TypeScript SDK for Developers',
    description:
      'Alibaba rolled out a Qwen 3.6 model preview, an OpenAI-compatible Responses API, a TypeScript SDK, and steady Qwen Code agent updates throughout March 2026.',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['Connan Boyle'],
    publishedTime: '2026-03-31T12:00:00Z',
    modifiedTime: '2026-03-31T12:00:00Z',
    section: 'Tech',
    tags: ['Alibaba', 'Qwen', 'AI Models', 'Developer Tools', 'TypeScript'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alibaba previews Qwen 3.6 with a new Responses API and TypeScript SDK',
    description:
      'Qwen 3.6 model preview, an OpenAI-compatible API, and a TypeScript SDK — all dropped in March 2026 as Alibaba pushes hard on developer adoption.',
  },
};

export default function NewsAlibabaQwen36ModelPreviewResponsesApiTypescriptSdk2026Page() {
  return <NewsArticleDB slug="news-alibaba-qwen-3-6-model-preview-responses-api-typescript-sdk-2026" />;
}
