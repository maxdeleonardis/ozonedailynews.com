import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/cloudflare/news/dynamic-workers-open-beta-ai-code-execution-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = '/default/cloudflare.PNG';

export const metadata: Metadata = {
  title: 'Cloudflare Launches Dynamic Workers Open Beta for AI Code Execution | ObjectWire',
  description:
    'Cloudflare has opened Dynamic Workers to all paid Workers users, offering V8 isolate-based execution that starts 100× faster and uses up to 100× less memory than conventional Linux containers, targeting AI-generated code workflows.',
  keywords: [
    'Cloudflare Dynamic Workers 2026',
    'Cloudflare Workers open beta',
    'AI code execution Cloudflare',
    'V8 isolates vs containers',
    'Cloudflare serverless AI',
    'Dynamic Workers performance',
    'Cloudflare Workers AI',
    'serverless containers alternative',
    'Cloudflare 2026',
    'AI infrastructure Cloudflare',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Cloudflare Launches Dynamic Workers Open Beta for AI Code Execution',
    description:
      'Dynamic Workers uses V8 JavaScript isolates instead of Linux containers, achieving startup speeds 100× faster and memory efficiency up to 100× better, now available to all paid Cloudflare Workers customers.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-03-25T14:00:00Z',
    modifiedTime: '2026-03-25T14:00:00Z',
    section: 'Technology',
    tags: ['Cloudflare', 'Dynamic Workers', 'AI', 'Serverless', 'V8', 'Code Execution', 'Cloud Infrastructure'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cloudflare Opens Dynamic Workers Beta | 100× Faster Than Containers for AI Code',
    description:
      'V8 isolate-based execution replaces Linux containers for AI-generated code workflows. Available now to all paid Cloudflare Workers users.',
    images: [IMAGE_URL],
  },
};

export default function CloudflareDynamicWorkersPage() {
  return <JackArticleDB slug="cloudflare-news-dynamic-workers-open-beta-ai-code-execution-2026" />;
}
