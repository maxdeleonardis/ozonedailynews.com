import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const revalidate = 3600;

const SLUG = '/video-games/mha/ultra-rumble/season-16/cluster-bakugo';
const ARTICLE_URL = `https://www.ozonenetwork.news${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Cluster Bakugo Season 16 | My Hero Ultra Rumble Skill Set',
  description:
    'Cluster Bakugo arrives in My Hero Ultra Rumble Season 16 as a Technical Class overhaul. Full skill breakdown, meta tier list, team synergies, and gacha',
  keywords: [
    'Cluster Bakugo My Hero Ultra Rumble',
    'My Hero Ultra Rumble Season 16 Cluster Bakugo',
    'MHUR Cluster Bakugo skill set',
    'Bakugo Technical class Ultra Rumble',
    'My Hero Ultra Rumble Cluster skill',
    'MHUR Season 16 new skill set',
    'Cluster Bakugo tier list 2026',
    'Strafe Panzer MHUR',
    'Howitzer Impact Cluster Ultra Rumble',
    'My Hero Ultra Rumble gacha pity 2026',
    'MHUR Bakugo vs Strike vs Technical',
    'My Hero Ultra Rumble Season 16 meta',
    'Bandai Namco MHUR April 2026',
    'MHA final arc Cluster move game',
    'My Hero Ultra Rumble best character 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Cluster Bakugo Season 16 | My Hero Ultra Rumble Skill Set',
    description:
      'Season 16 brings Bakugo\'s Cluster super move to My Hero Ultra Rumble. Technical Class overhaul, S-Tier stun-lock potential, and a 1% drop rate gacha trap.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Sterling'],
    publishedTime: '2026-04-22T12:00:00Z',
    modifiedTime: '2026-04-22T12:00:00Z',
    section: 'Video Games',
    tags: ['My Hero Ultra Rumble', 'Bakugo', 'Season 16', 'Bandai Namco', 'Battle Royale', 'Gaming', 'Anime Games'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cluster Bakugo is Here | S-Tier or Overhyped? Season 16',
    description: '1% drop rate, Strafe Panzer repositioning, and stun-lock combos. Full breakdown of Cluster Bakugo in My Hero Ultra Rumble Season 16.',
  },
};

export default function VideoGamesMhaUltraRumbleSeason16ClusterBakugoPage() {
  return <JackArticleDB slug="video-games-mha-ultra-rumble-season-16-cluster-bakugo" />;
}
