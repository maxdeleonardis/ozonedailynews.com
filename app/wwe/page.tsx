import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/wwe';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = '';

export const metadata: Metadata = {
  title: 'WWE | History, Champions, Shows, Events 2026',
  description:
    'Complete WWE reference: history from 1952 to 2026, current champions, Raw, SmackDown, NXT results, Backlash 2026 card, and upcoming pay-per-view events.',
  keywords: [
    'WWE',
    'WWE history',
    'WWE champions 2026',
    'WWE Raw',
    'WWE SmackDown',
    'WWE Backlash 2026',
    'WWE WrestleMania 42',
    'Roman Reigns',
    'WWE pay-per-view 2026',
    'WWE NXT',
    'TKO Group Holdings WWE',
    'World Heavyweight Championship',
    'WWE on Netflix',
    'WWE events 2026',
  ],
  alternates: { canonical: `https://www.objectwire.org${SLUG}` },
  openGraph: {
    title: 'WWE | History, Champions, Shows & Events 2026',
    description:
      'Full WWE reference: 70+ years of history, current title picture, Backlash 2026 card, Raw on Netflix, and the road to SummerSlam.',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Sports Desk'],
    publishedTime: '2026-04-28T12:00:00Z',
    modifiedTime: '2026-04-28T12:00:00Z',
    section: 'Sports',
    tags: ['WWE', 'Wrestling', 'Sports Entertainment', 'TKO'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WWE | Full History, Champions, Backlash 2026 Card',
    description:
      'Roman Reigns World Heavyweight Champion. Backlash 2026 set. Raw on Netflix. Full WWE hub with history, current shows, and event calendar.',
  },
};

export default function WwePage() {
  return <ArticlePageDB slug="wwe" />;
}
