import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/intel/news/intel-joins-musk-terafab-ai-chip-project-texas';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = '';

export const metadata: Metadata = {
  title: 'Intel Joins Musk Terafab AI Chip Project in Texas',
  description: 'Intel announced it is joining Elon Musk\'s Terafab AI chip complex in Austin, Texas, bringing advanced 18A process technology and 3D packaging to the $20-25 billion joint venture.',
  keywords: [
    'Intel Terafab',
    'Intel Elon Musk',
    'Terafab AI chip project',
    'Intel foundry Terafab',
    'Intel 18A Terafab',
    'Musk Terafab Intel partnership',
    'Intel semiconductor Austin Texas',
    'Terafab chip fabrication 2026',
    'Intel Tesla xAI chip',
    'Intel 3D packaging Foveros',
    'Intel foundry services 2026',
    'Terafab terawatt computing',
    'Intel advanced packaging',
    'Elon Musk AI chip factory',
    'Intel stock Terafab announcement',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Intel Joins Musk Terafab AI Chip Project in Texas',
    description: 'Intel brings 18A process tech and advanced 3D packaging to Elon Musk\'s $20-25 billion Terafab AI chip complex in Austin, Texas.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Alfanasa'],
    publishedTime: '2026-04-08T10:00:00Z',
    modifiedTime: '2026-04-08T10:00:00Z',
    section: 'Tech',
    tags: ['Intel', 'Elon Musk', 'Terafab', 'Semiconductors', 'xAI', 'Tesla'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Intel Joins Elon Musk\'s Terafab AI Chip Complex',
    description: 'Intel adds 18A process technology and Foveros 3D packaging to the $20-25B Terafab venture. Shares rose on the announcement.',
  },
};

export default function IntelNewsIntelJoinsMuskTerafabAiChipProjectTexasPage() {
  return <NewsArticleDB slug="intel-news-intel-joins-musk-terafab-ai-chip-project-texas" />;
}
