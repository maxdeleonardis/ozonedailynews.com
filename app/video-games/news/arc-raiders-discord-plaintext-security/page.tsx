import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/video-games/news/arc-raiders-discord-plaintext-security';
const CANONICAL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Arc Raiders Logged Discord DMs and Tokens in Plaintext — Embark Says Hotfix Coming | ObjectWire',
  description:
    'Security researcher Timothy Meadows disclosed that Arc Raiders logged private Discord DMs and authentication tokens to plaintext files when Discord integration was enabled. Embark Studios announced an emergency hotfix.',
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
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Arc Raiders Logged Discord DMs and Tokens in Plaintext',
    description:
      'Embark Studios\' extraction shooter was writing private Discord messages and auth tokens to unencrypted local files. Emergency hotfix announced.',
    type: 'article',
    url: CANONICAL,
    siteName: 'ObjectWire',
    authors: ['Connan Boyle'],
    publishedTime: PUBLISH_ISO,
    modifiedTime: PUBLISH_ISO,
    section: 'Gaming',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arc Raiders Logged Discord DMs in Plaintext — Hotfix Incoming',
    description:
      'Private Discord messages and auth tokens stored unencrypted on player PCs. Embark Studios responds with emergency patch.',
  },
};

export default function ArcRaidersDiscordSecurityPage() {
  return <NewsArticleDB slug="video-games-news-arc-raiders-discord-plaintext-security" />;
}
