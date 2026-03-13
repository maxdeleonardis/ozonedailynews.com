import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';
// Page renders dynamically — content fetched from Supabase at request time.
export const dynamic = 'force-dynamic';

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
  alternates: { canonical: 'https://www.objectwire.org/video-games/news/arc-raiders-discord-plaintext-security' },
  openGraph: {
    title: 'Arc Raiders Logged Discord DMs and Tokens in Plaintext',
    description:
      'Embark Studios\' extraction shooter was writing private Discord messages and auth tokens to unencrypted local files. Emergency hotfix announced.',
    type: 'article',
    url: 'https://www.objectwire.org/video-games/news/arc-raiders-discord-plaintext-security',
    siteName: 'ObjectWire',
    authors: ['Alfansa'],
    publishedTime: '2026-03-06T22:00:00Z',
    modifiedTime: '2026-03-06T22:00:00Z',
    section: 'Gaming',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arc Raiders Logged Discord DMs in Plaintext — Hotfix Incoming',
    description:
      'Private Discord messages and auth tokens stored unencrypted on player PCs. Embark Studios responds with emergency patch.',
  },
};

export default function ArcRaidersDiscordPlaintextSecurityPage() {
  return <WikiArticle slug="/video-games/news/arc-raiders-discord-plaintext-security" />;
}
