import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/microsoft/news/claude-microsoft-apps-excel-powerpoint-word-outlook';
const ARTICLE_URL = `https://www.ozonenetwork.news${SLUG}`; // restored by wiki:publish
const OG_IMAGE = '';

export const metadata: Metadata = {
  title: 'Claude for Microsoft Apps | Excel, Word, PowerPoint GA',
  description: 'Claude for Excel, PowerPoint, and Word are now generally available. Claude for Outlook is in public beta. Context carries across all four apps.',
  keywords: [
    'Claude for Microsoft',
    'Claude for Excel',
    'Claude for PowerPoint',
    'Claude for Word',
    'Claude for Outlook beta',
    'Anthropic Microsoft integration',
    'Claude Microsoft 365',
    'Claude AI productivity',
    'Anthropic Claude GA May 2026',
    'Claude context across apps',
    'Microsoft AI assistant 2026',
    'Claude generally available',
  ],
  alternates: { canonical: `https://www.ozonenetwork.news${SLUG}` },
  openGraph: {
    title: 'Claude for Excel, Word & PowerPoint Now Generally Available',
    description: 'Anthropic confirms Claude GA in three Microsoft 365 apps. Outlook enters public beta. Context carries across the full suite.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'OzoneNews',
    authors: ['Max DeLeonardis'],
    publishedTime: '2026-05-07T12:00:00Z',
    modifiedTime: '2026-05-07T12:00:00Z',
    section: 'Tech',
    tags: ['Claude', 'Anthropic', 'Microsoft', 'Microsoft 365', 'AI'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude is now GA in Excel, Word, and PowerPoint. Outlook is in beta.',
    description: 'Context carries across all four apps. Anthropic confirms GA on May 7, 2026.',
  },
};

export default function MicrosoftNewsClaudeMicrosoftAppsExcelPowerpointWordOutlookPage() {
  return <JackArticleDB slug="microsoft-news-claude-microsoft-apps-excel-powerpoint-word-outlook" />;
}
