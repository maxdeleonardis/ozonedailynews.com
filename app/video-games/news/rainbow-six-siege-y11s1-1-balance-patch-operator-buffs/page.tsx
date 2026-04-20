import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/video-games/news/rainbow-six-siege-y11s1-1-balance-patch-operator-buffs';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Rainbow Six Siege Y11S1.1 Patch | Flores, Jäger, Rook, Nøkk Buffs',
  description:
    'Siege Y11S1.1 buffs Flores, Iana, Jäger, Nøkk, Rook, Wamai, Caveira M12, and Sens POF-9. Full breakdown of every operator and weapon change in the',
  keywords: [
    'Rainbow Six Siege Y11S1.1 patch notes',
    'Siege Y11S1.1 balance patch',
    'Siege Flores buff',
    'Siege Jäger Mag-NET cooldown',
    'Siege Rook 25 health buff',
    'Siege Nøkk ability duration',
    'Siege Wamai deploy speed',
    'Siege M12 damage buff Caveira',
    'Siege POF-9 buff Sens',
    'R6 Siege operator buffs March 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Siege Y11S1.1 | Mid-Season Operator Buffs and Weapon Tuning',
    description:
      'Y11S1.1 buffs eight operators and two weapons, fixes Wamai Mag-NET and Solid Snake radar bugs, and tightens the entry-fragging meta Ubisoft set in Silent',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Gaming Desk'],
    publishedTime: '2026-03-31T14:30:00Z',
    modifiedTime: '2026-03-31T14:30:00Z',
    section: 'Video Games',
    tags: ['Rainbow Six Siege', 'Patch Notes', 'Ubisoft', 'Operator Buffs', 'Gaming'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Siege Y11S1.1 | Rook Gets +25 HP, Jäger Cooldown Drops, M12 Buffed',
    description:
      'Full breakdown of every operator and weapon change in the Y11S1.1 mid-season balance patch for Rainbow Six Siege.',
  },
};

export default function VideoGamesNewsRainbowSixSiegeY11s11BalancePatchOperatorBuffsPage() {
  return <NewsArticleDB slug="video-games-news-rainbow-six-siege-y11s1-1-balance-patch-operator-buffs" />;
}
