import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

export const dynamic = 'force-dynamic';

const SLUG = '/microsoft/news/microsoft-build-2026-san-francisco-agentic-ai-hub';

export const metadata: Metadata = {
  title: 'Microsoft Build 2026 | Dates, Location, Announcements & History',
  description: 'Full hub for Microsoft Build 2026. Dates June 2-3 in San Francisco, 2,500 attendees, Scout AI agent reveal, and a complete history of the Build conference from 2011 to the AI era.',
  keywords: [
    'Microsoft Build 2026',
    'Microsoft Build 2026 dates',
    'Microsoft Build 2026 San Francisco',
    'Microsoft Build 2026 announcements',
    'Microsoft Build 2026 Satya Nadella',
    'Microsoft Build conference history',
    'Microsoft Build agentic AI 2026',
    'Microsoft Build 2026 tickets',
    'Microsoft Build 2026 keynote',
    'Microsoft Scout Build 2026',
    'Microsoft Build developer conference',
    'Build 2026 Azure AI',
    'Microsoft Build 2026 GitHub',
    'Microsoft developer conference 2026',
  ],
  alternates: { canonical: `https://www.OzoneNews.org${SLUG}` },
  openGraph: {
    title: 'Microsoft Build 2026 | Full Event Hub, Announcements & History',
    description: 'June 2-3, San Francisco. 2,500 developers, $1,100 tickets, Scout AI agent reveal. Full logistics, keynote breakdown, and 15-year conference history.',
    type: 'article',
    url: `https://www.OzoneNews.org${SLUG}`,
    siteName: 'OzoneNews',
    authors: ['Tina Boyle'],
    section: 'Tech',
    tags: ['Microsoft Build 2026', 'Microsoft', 'AI', 'Developer Conference', 'San Francisco'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Microsoft Build 2026 | Everything That Happened in San Francisco',
    description: 'Dates, location, Scout AI reveal, 2,500 attendees, and 15 years of Build history. Full hub.',
  },
};

export default function MicrosoftBuild2026HubPage() {
  return <ArticlePageDB slug="microsoft-news-microsoft-build-2026-san-francisco-agentic-ai-hub" />;
}
