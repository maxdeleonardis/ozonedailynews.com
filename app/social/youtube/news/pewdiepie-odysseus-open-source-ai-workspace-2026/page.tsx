import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/social/youtube/news/pewdiepie-odysseus-open-source-ai-workspace-2026';

export const metadata: Metadata = {
  title: 'PewDiePie Launches Odysseus | Free Open-Source AI App',
  description: 'PewDiePie released Odysseus, a free open-source local AI workspace. Docker setup, hardware-aware model scanning, autonomous agents, no subscriptions.',
  keywords: [
    'PewDiePie Odysseus',
    'Odysseus AI workspace',
    'PewDiePie open source project',
    'local AI workspace 2026',
    'self-hosted AI app',
    'open-source AI chat',
    'Odysseus Docker install',
    'PewDiePie GitHub project',
    'local LLM frontend',
    'free ChatGPT alternative',
    'Ollama frontend open source',
    'AI agent workspace open source',
    'Felix Kjellberg AI project',
  ],
  alternates: { canonical: `https://www.ozonenetwork.news${SLUG}` },
  openGraph: {
    title: 'PewDiePie Launches Odysseus | Free Open-Source AI App',
    description: 'PewDiePie released Odysseus, a Docker-based local AI workspace with hardware scanning, autonomous agents, and zero subscriptions. MIT licensed.',
    type: 'article',
    url: `https://www.ozonenetwork.news${SLUG}`,
    siteName: 'OzoneNews',
    authors: ['OzoneNews Editorial Team'],
    publishedTime: '2026-06-04T12:00:00-05:00',
    modifiedTime: '2026-06-04T12:00:00-05:00',
    section: 'Tech',
    tags: ['PewDiePie', 'Odysseus', 'Open Source AI', 'Local LLM', 'Felix Kjellberg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PewDiePie Just Released a Free Open-Source AI Workspace',
    description: 'Odysseus runs locally via Docker. No subscriptions, no data sent to cloud. Hardware scanner picks models your GPU can actually handle.',
  },
};

export default function PewdiepieOdysseusPage() {
  return <NewsArticleDB slug="youtube-news-pewdiepie-odysseus-open-source-ai-workspace-2026" />;
}
