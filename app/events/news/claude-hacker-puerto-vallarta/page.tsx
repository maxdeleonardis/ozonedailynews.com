import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/events/news/claude-hacker-puerto-vallarta';

export const metadata: Metadata = {
  title: 'How a Hacker Used Claude AI to Breach Mexican Government',
  description:
    'A hacker exploited Anthropic\'s Claude AI chatbot between December 2025 and January 2026 to steal 150 gigabytes of sensitive data from Mexican government',
  keywords: [
    'Claude AI hacker Mexico government',
    'Anthropic Claude jailbreak 2026',
    'Mexican government data breach 2026',
    'Puerto Vallarta cartel violence 2026',
    'El Mencho death CJNG',
    'CJNG Jalisco reprisals February 2026',
    'Claude AI role-play jailbreak hacker',
    '150GB Mexico government data stolen',
    '195 million records Mexico breach',
    'Mexico tax authority hack',
    'INE electoral records breach',
    'Puerto Vallarta flight cancellations 2026',
    'bug bounty jailbreak Claude',
    'AI cybersecurity misuse 2026',
    'Anthropic AI safety breach',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: 'Claude AI Used to Breach Mexican Government Networks',
    description:
      'A hacker jailbroke Anthropic\'s Claude to steal 150GB of Mexican government data -- 195 million records -- while CJNG reprisals for El Mencho\'s death',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['Connan Boyle'],
    publishedTime: '2026-02-25T10:00:00Z',
    modifiedTime: '2026-02-25T10:00:00Z',
    section: 'Investigations',
    tags: [
      'Claude AI', 'Anthropic', 'Mexico Hack', 'CJNG', 'El Mencho',
      'Puerto Vallarta', 'Cybersecurity', 'Cartel Violence', 'Jalisco',
      'Data Breach', 'AI Safety', 'Jailbreak',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude AI Jailbroken to Steal 150GB from Mexico Gov -',
    description:
      '195 million Mexican government records stolen via a Claude jailbreak. Days later, CJNG launched 252 violent reprisals across 20+ states after El Mencho',
  },
};

export default function ClaudeHackerPuertoVallartaPage() {
  return <NewsArticleDB slug="events-news-claude-hacker-puerto-vallarta" />;
}
