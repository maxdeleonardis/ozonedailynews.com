import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically â€” content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const revalidate = 3600;

const SLUG = '/video-games/news/arc-raiders-discord-plaintext-security';
const ARTICLE_URL = `https://www.ozonenetwork.news${SLUG}`;

export const metadata: Metadata = {
  title: 'Arc Raiders Logged Discord DMs and Tokens in Plaintext',
  description:
    'Security researcher Timothy Meadows disclosed that Arc Raiders logged private Discord DMs and auth tokens to local plaintext files when Discord was linked in-game. Embark Studios deployed an emergency hotfix the same day.',
  keywords: [
    'Arc Raiders security',
    'Arc Raiders Discord DMs',
    'Arc Raiders plaintext tokens',
    'Embark Studios Arc Raiders',
    'Arc Raiders hotfix',
    'Arc Raiders Discord integration',
    'gaming security vulnerability',
    'Discord authentication token leak',
    'Timothy Meadows Arc Raiders',
    'Arc Raiders privacy',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Arc Raiders Logged Discord DMs and Tokens in Plaintext',
    description:
      'Embark Studios\' extraction shooter was writing private Discord messages and auth tokens to unencrypted local files. Emergency hotfix announced.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'OzoneNews',
    authors: ['Connan Boyle'],
    publishedTime: '2026-03-01T00:00:00Z',
    modifiedTime: '2026-03-01T00:00:00Z',
    section: 'Gaming',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arc Raiders Logged Discord DMs in Plaintext | Emergency Hotfix',
    description:
      'Private Discord messages and auth tokens stored unencrypted on player PCs. Embark Studios responds with emergency patch.',
  },
};

export default function ArcRaidersDiscordSecurityPage() {
  return <NewsArticleDB slug="video-games-news-arc-raiders-discord-plaintext-security" />;
}