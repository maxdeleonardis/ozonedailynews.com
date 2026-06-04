import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/video-games/forza-horizon6/leak-ban-may-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Forza Horizon 6 Leak May 2026 | Playground Games Issues',
  description: 'Playground Games confirmed a 155GB Forza Horizon 6 build leaked on May 11, 2026. The studio announced permanent franchise-wide and hardware-level bans for',
  keywords: [
    'Forza Horizon 6 leak',
    'Forza Horizon 6 leak May 2026',
    'Forza Horizon 6 hardware ban',
    'Forza Horizon 6 ban',
    'Playground Games ban',
    'Forza Horizon 6 piracy',
    'Forza Horizon 6 release date',
    'Forza Horizon 6 Game Pass',
    'Forza Horizon 6 May 19',
    'Forza Horizon 6 early access',
    'Forza Horizon 6 premium edition',
    'Forza Horizon 6 Japan',
    'Forza Horizon 6 PC ban',
    'Xbox hardware ban 2026',
    'Forza Horizon 6 cracked build',
    'Microsoft anti-piracy 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Forza Horizon 6 Leak May 2026 | Playground Games Issues',
    description: '155GB full build leaked May 11. Playground Games confirmed permanent franchise-wide and hardware-level bans. Launch: May 19, 2026 on Xbox, PC, and Game',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Sterling'],
    publishedTime: '2026-05-11T16:00:00Z',
    modifiedTime: '2026-05-11T16:00:00Z',
    section: 'Gaming',
    tags: ['Forza Horizon 6', 'Playground Games', 'Xbox', 'Microsoft', 'Game Pass'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forza Horizon 6 Full Build Leaked. Playground Games',
    description: '155GB build confirmed leaked May 11. Hardware-level bans already issued. Launch: May 19 on Xbox, PC, Game Pass.',
  },
};

export default function ForzaHorizon6LeakPage() {
  return <JackArticleDB slug="video-games-forza-horizon6-leak-ban-may-2026" />;
}
