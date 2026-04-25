import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/tech/cloudflare-dynamic-workers-open-beta-ai-code-execution-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = '/default/cloudflare.PNG';

export const metadata: Metadata = {
  title: "Cloudflare Launches Dynamic Workers Open Beta for AI",
  description:
    "Cloudflare has opened its Dynamic Workers feature to all paid Workers users, offering a lightweight alternative to containers for executing AI-generated",
  keywords: [
    'Cloudflare Dynamic Workers 2026',
    'Cloudflare open beta AI',
    'Dynamic Workers V8 isolates',
    'AI code execution Cloudflare',
    'Cloudflare Workers containers',
    'serverless AI 2026',
    'V8 JavaScript isolates',
    'Cloudflare AI platform',
    'edge computing AI',
    'Cloudflare paid Workers',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: "Cloudflare Launches Dynamic Workers Open Beta for AI",
    description:
      "Cloudflare's Dynamic Workers uses V8 JavaScript engine isolates instead of Linux containers, achieving startup speeds roughly 100x faster and memory usage",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-03-25T12:00:00Z',
    modifiedTime: '2026-03-25T12:00:00Z',
    section: 'Technology',
    tags: ['Cloudflare', 'Dynamic Workers', 'AI', 'Serverless', 'V8', 'Edge Computing', 'Developer Tools', 'Cloud Infrastructure'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Cloudflare Dynamic Workers Now in Open Beta | 100x Faster",
    description:
      "Cloudflare's new Dynamic Workers feature uses V8 isolates to run AI-generated code with near-instant cold starts and a fraction of the memory overhead of",
    images: [IMAGE_URL],
  },
};

export default function CloudflareDynamicWorkersPage() {
  return <JackArticleDB slug="tech-cloudflare-dynamic-workers-open-beta-ai-code-execution-2026" />;
}
