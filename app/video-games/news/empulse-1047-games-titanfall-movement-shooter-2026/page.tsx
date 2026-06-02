import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/video-games/news/empulse-1047-games-titanfall-movement-shooter-2026';

export const metadata: Metadata = {
  title: 'EMPULSE | 1047 Games Reveals Titanfall-Style Movement Shooter',
  description: 'EMPULSE is a new 6v6 movement shooter from 1047 Games, the studio behind Splitgate. Under $30 on Early Access, no microtransactions, full gameplay reveal at PC Gaming Show June 7.',
  keywords: [
    'EMPULSE',
    'EMPULSE 1047 Games',
    'EMPULSE release date',
    'EMPULSE Steam Early Access',
    'EMPULSE gameplay',
    'EMPULSE Titanfall movement shooter',
    'EMPULSE mechs',
    'EMPULSE PS5 Xbox',
    '1047 Games new game',
    'Splitgate studio new game',
    'EMPULSE PC Gaming Show 2026',
    'EMPULSE price under 30',
    'EMPULSE wall running grapple',
    'new movement shooter 2026',
  ],
  alternates: { canonical: `https://www.OzoneNews.org${SLUG}` },
  openGraph: {
    title: 'EMPULSE | 1047 Games New 6v6 Movement Shooter Revealed',
    description: 'Cinematic trailer just dropped. Under $30, no microtransactions, wall-running, mechs as map objectives. Full gameplay reveal at PC Gaming Show June 7.',
    type: 'article',
    url: `https://www.OzoneNews.org${SLUG}`,
    siteName: 'OzoneNews',
    authors: ['Max DeLeonardis'],
    publishedTime: '2026-06-01T12:00:00-05:00',
    modifiedTime: '2026-06-01T12:00:00-05:00',
    section: 'Gaming',
    tags: ['EMPULSE', '1047 Games', 'Movement Shooter', 'Steam Early Access', 'PC Gaming Show'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EMPULSE | Splitgate Dev Reveals $30 Titanfall-Style Shooter',
    description: 'Wall-running, grapple hooks, map-controlled mechs. 1047 Games is back and it looks wild.',
  },
};

export default function EmpulsePage() {
  return <NewsArticleDB slug="video-games-news-empulse-1047-games-titanfall-movement-shooter-2026" />;
}
