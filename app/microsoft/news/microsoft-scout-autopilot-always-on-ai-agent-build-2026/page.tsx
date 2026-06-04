import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/microsoft/news/microsoft-scout-autopilot-always-on-ai-agent-build-2026';

export const metadata: Metadata = {
  title: 'Microsoft Scout | Always-On AI Autopilot Revealed at Build',
  description: 'Microsoft unveiled Scout at Build 2026, an autonomous always-on AI agent that triages emails, tracks deadlines, and coordinates meetings without',
  keywords: [
    'Microsoft Scout',
    'Microsoft Scout AI agent',
    'Microsoft Scout Build 2026',
    'Microsoft Autopilot AI',
    'Microsoft Scout always-on agent',
    'Microsoft Scout Outlook Teams',
    'Microsoft Scout vs Google Gemini Spark',
    'Microsoft Scout OpenClaw Work IQ',
    'Microsoft Build 2026 AI announcements',
    'Microsoft Copilot Scout difference',
    'agentic AI workplace 2026',
    'Microsoft 365 AI agent',
    'Microsoft Scout Frontier program',
    'Microsoft Scout enterprise identity',
  ],
  alternates: { canonical: `https://www.OzoneNews.org${SLUG}` },
  openGraph: {
    title: 'Microsoft Scout | Always-On AI Agent Revealed at Build 2026',
    description: 'Scout does not wait for prompts. It triages emails, drafts responses, tracks stalled decisions, and preps your meetings automatically. Built on OpenClaw',
    type: 'article',
    url: `https://www.OzoneNews.org${SLUG}`,
    siteName: 'OzoneNews',
    authors: ['Tina Boyle'],
    publishedTime: '2026-06-02T12:00:00-05:00',
    modifiedTime: '2026-06-02T12:00:00-05:00',
    section: 'Tech',
    tags: ['Microsoft Scout', 'Microsoft Build 2026', 'AI Agent', 'Microsoft 365', 'Agentic AI'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Microsoft Scout | The AI Agent That Works Without Being',
    description: 'Announced at Build 2026. Scout runs in the background, triages your inbox, spots stalled decisions, and preps your meetings. No prompt required.',
  },
};

export default function MicrosoftScoutPage() {
  return <NewsArticleDB slug="microsoft-news-microsoft-scout-autopilot-always-on-ai-agent-build-2026" />;
}
