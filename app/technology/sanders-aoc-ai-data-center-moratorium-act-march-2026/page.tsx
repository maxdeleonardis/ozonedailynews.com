import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/technology/sanders-aoc-ai-data-center-moratorium-act-march-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = 'https://www.objectwire.org/default/pawel-czerwinski-fpZZEV0uQwA-unsplash.jpg';

export const metadata: Metadata = {
  title: 'Sanders and AOC Unveil "AI Data Center Moratorium Act" to Pause Infrastructure Boom',
  description:
    'Senator Bernie Sanders and Representative Alexandria Ocasio-Cortez introduced the AI Data Center Moratorium Act on March 25, 2026, seeking an immediate',
  keywords: [
    'AI Data Center Moratorium Act 2026',
    'Bernie Sanders AI bill',
    'AOC AI legislation',
    'AI data center regulation',
    'AI infrastructure freeze',
    'federal AI oversight',
    'AI power grid impact',
    'AI water usage',
    'AI chip export ban',
    'Sanders AOC technology bill',
    'Congress AI regulation 2026',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: 'Sanders and AOC Unveil "AI Data Center Moratorium Act" to Pause Infrastructure Boom',
    description:
      'The new bill would freeze all AI data center construction nationwide until Congress passes safeguards on electricity costs, water use, labor protections,',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-03-25T15:00:00Z',
    modifiedTime: '2026-03-25T15:00:00Z',
    section: 'Technology',
    tags: ['AI', 'Legislation', 'Bernie Sanders', 'AOC', 'Data Centers', 'Congress', 'Tech Regulation', 'AI Policy'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sanders & AOC Introduce Bill to Freeze AI Data Center Construction',
    description:
      'The AI Data Center Moratorium Act would halt all new AI infrastructure until Congress passes rules on electricity costs, water, labor, and safety, plus a',
    images: [IMAGE_URL],
  },
};

export default function SandersAOCMoratoriumActPage() {
  return <JackArticleDB slug="technology-sanders-aoc-ai-data-center-moratorium-act-march-2026" />;
}
