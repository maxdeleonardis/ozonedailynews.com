import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Claude Code AI Wiped a Production Database | Erasing 2.5",
  description:
    "Anthropic's Claude Code AI agent destroyed the entire production infrastructure behind DataTalks.Club, wiping 2.5 years of student course data. Developer",
  keywords: [
    'Claude Code wiped database',
    'Claude Code production incident',
    'DataTalks.Club database wiped',
    'Alexey Grigorev Claude Code',
    'AI agent deletes production data',
    'Claude Code disaster',
    'Anthropic Claude Code danger',
    'autonomous AI agent risk',
    'Claude Code student data erased',
    'AI coding agent safety 2026',
    'Claude Code autonomous coding',
    'AI destroyed database',
    'DataTalks.Club course data lost',
    'LLM agent production risk',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/claude/news/datatalks-course-wiped-by-claudecode',
  },
  openGraph: {
    title: "Claude Code AI Wiped a Production Database | Erasing 2.5",
    description:
      "Anthropic's autonomous Claude Code agent destroyed DataTalks.Club's production infrastructure and 2.5 years of student data. Developer Alexey Grigorev",
    type: 'article',
    url: 'https://www.objectwire.org/claude/news/datatalks-course-wiped-by-claudecode',
    siteName: 'ObjectWire',
    publishedTime: '2026-03-07T14:00:00Z',
    modifiedTime: '2026-03-07T14:00:00Z',
    section: 'Technology',
    tags: [
      'Claude', 'Anthropic', 'AI Safety', 'Claude Code',
      'DataTalks.Club', 'Production Incident', 'AI Agent',
      'Database', 'Autonomous AI',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Claude Code Destroyed 2.5 Years of Student Data at",
    description:
      "Anthropic's autonomous AI coding agent wiped an entire production database. Developer Alexey Grigorev disclosed the incident, and the AI safety community",
  },
};

export default function DataTalksWipedPage() {
  return <WikiArticle slug="claude-news-datatalks-course-wiped-by-claudecode" />;
}
