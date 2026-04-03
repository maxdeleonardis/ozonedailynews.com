import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG =
  '/amazon/news/andy-jassy-ai-will-reduce-headcount-many-roles-cnbc-february-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL =
  'https://www.objectwire.org/amazon/andy-jassy-ai-workforce-headcount-cnbc-2026.jpg';

export const metadata: Metadata = {
  title:
    "Amazon CEO Andy Jassy: AI Will Reduce Headcount in Many Long-Standing Roles While Creating New Ones, February 2026 | ObjectWire",
  description:
    "Amazon CEO Andy Jassy told CNBC on February 27, 2026 that AI will mean fewer humans are needed for many jobs that have relied on human labor for 20–30 years, while new job categories will emerge. The comments followed a $110B OpenAI funding round and Jack Dorsey's announcement of 4,000+ Block layoffs tied to AI efficiency.",
  keywords: [
    'Andy Jassy AI workforce headcount CNBC 2026',
    'Amazon CEO AI jobs reduction February 2026',
    'Jassy AI most transformational technology shift',
    'Amazon layoffs AI automation 2026',
    'Block Jack Dorsey layoffs AI efficiency 2026',
    'OpenAI $110 billion funding round Amazon 2026',
    'AI job displacement tech sector 2026',
    'Andy Jassy Squawk Box February 27 2026',
    'Amazon 30000 layoffs corporate 2025 2026',
    'tech layoffs 26000 early 2026',
    'AI workforce transition new job categories',
    'Sam Altman Andy Jassy CNBC interview',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title:
      "Andy Jassy: AI Will Mean Fewer Humans for Jobs We've Thrown People at for 30 Years, New Ones Will Emerge",
    description:
      'Amazon CEO Andy Jassy told CNBC February 27, 2026 that AI will reduce headcount across many long-standing roles while creating new ones, hours after Jack Dorsey announced 4,000+ Block layoffs tied to AI efficiency gains.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-03-01T21:00:00Z',
    modifiedTime: '2026-03-01T22:00:00Z',
    section: 'Technology',
    tags: [
      'Amazon',
      'Andy Jassy',
      'AI',
      'Workforce',
      'Layoffs',
      'Block',
      'Jack Dorsey',
      'OpenAI',
      'Sam Altman',
      'CNBC',
      'Technology',
      'Labor',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      "Jassy on CNBC: AI Will Cut Headcount in Decades-Old Roles. 'But There Will Be Other Jobs Created.'",
    description:
      "Amazon CEO Andy Jassy said AI will reduce human labor in many long-standing jobs while new categories emerge, hours after Block CEO Jack Dorsey announced 4,000+ layoffs explicitly tied to AI efficiency. February 27, 2026.",
    images: [IMAGE_URL],
  },
};

export default function JassyAIWorkforcePage() {
  return <JackArticleDB slug="amazon-news-andy-jassy-ai-will-reduce-headcount-many-roles-cnbc-february-2026" />;
}
