import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/nvidia/news/JensenHuang-AI-Agent-Will-Boost-Enterprise-Software-Value';

export const metadata: Metadata = {
  title: "Jensen Huang Says AI Will Boost Enterprise Software's Inherent Value",
  description:
    'Nvidia CEO Jensen Huang told a Goldman Sachs conference on February 24, 2026 that markets have misjudged AI agents, arguing the technology will increase',
  keywords: [
    'Jensen Huang AI enterprise software',
    'Nvidia CEO Goldman Sachs 2026',
    'AI agents ServiceNow Snowflake SAP Oracle',
    'enterprise software AI value',
    'Jensen Huang software stocks',
    'AI agents not replacing software',
    'ServiceNow AI agents 2026',
    'Snowflake data cloud AI',
    'SAP Oracle AI agents',
    'enterprise software market trillion',
    'Jensen Huang Goldman Sachs February 2026',
    'Nvidia AI enterprise strategy',
    'software stocks AI recovery',
    'agentic AI enterprise platforms',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: "Jensen Huang: AI Agents Will Boost Enterprise Software Value, Not Destroy It",
    description:
      'At a Goldman Sachs conference, Jensen Huang called the market sell-off in software stocks a misreading. He argues AI agents sit on top of ServiceNow,',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['Connan Boyle'],
    publishedTime: '2026-02-25T08:00:00Z',
    modifiedTime: '2026-02-25T08:00:00Z',
    section: 'Technology',
    tags: [
      'Jensen Huang', 'Nvidia', 'AI Agents', 'ServiceNow', 'Snowflake',
      'SAP', 'Oracle', 'Enterprise Software', 'Goldman Sachs', 'Technology',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Jensen Huang: Markets Got It Wrong on AI and Enterprise Software",
    description:
      "Nvidia's CEO says AI agents will act as intelligent users layered on top of ServiceNow, Snowflake, SAP, and Oracle -- not replace them. ServiceNow jumped",
  },
};

export default function JensenHuangAIEnterprisePage() {
  return <NewsArticleDB slug="nvidia-news-JensenHuang-AI-Agent-Will-Boost-Enterprise-Software-Value" />;
}
