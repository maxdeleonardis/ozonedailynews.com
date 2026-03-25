import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/cursor/automations-event-driven-ai-coding';

export const metadata: Metadata = {
  title: 'Cursor Launches Automations: Event-Driven AI Agents Replace Prompt-Based Coding | ObjectWire',
  description: 'Anysphere launched Cursor Automations on March 4, 2026, enabling AI agents that trigger from Slack, GitHub, PagerDuty, and cron schedules without manual prompts. The feature arrives as Cursor surpasses $2 billion ARR.',
  keywords: [
    'Cursor Automations',
    'Cursor AI event-driven agents',
    'Cursor Slack GitHub integration',
    'Anysphere Automations launch',
    'Cursor autonomous coding',
    'AI code editor automations',
    'Cursor $2 billion ARR',
    'Cursor vs GitHub Copilot',
    'Cursor PagerDuty Sentry',
    'AI software development 2026',
    'Cursor cron agents',
    'Anysphere $29 billion valuation',
  ],
  alternates: { canonical: `https://www.objectwire.org${SLUG}` },
  openGraph: {
    title: 'Cursor Launches Automations: AI Agents That Trigger Without Prompts',
    description: 'Cursor removes the human starting gun. Slack messages, GitHub PRs, and production alerts now trigger autonomous coding agents.',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['Alfanasa'],
    publishedTime: '2026-03-05T18:00:00Z',
    modifiedTime: '2026-03-05T18:00:00Z',
    section: 'Technology',
    tags: ['Cursor', 'Anysphere', 'Automations', 'AI', 'Developer Tools'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cursor Launches Automations: No Prompt Required',
    description: 'AI agents now trigger from Slack, GitHub, PagerDuty, and cron jobs. Cursor moves from assistant to autonomous factory.',
  },
};

export default function CursorAutomationsPage() {
  return <NewsArticleDB slug="cursor-automations-event-driven-ai-coding" />;
}
