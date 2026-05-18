import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/video-games/mha/ultra-rumble/season-16/cluster-bakugo-shop';
const ARTICLE_URL = `https://www.ozonenetwork.news${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://www.ozonenetwork.news/video-games/cluster_mhur.png';

export const metadata: Metadata = {
  title: 'Cluster Bakugo Shop Duration | MHUR Season 16 End Date',
  description:
    'Cluster Bakugo is in the My Hero Ultra Rumble shop until May 27, 2026 at 12:59 JST when Season 16 ends. Full breakdown of the shop window and what you get.',
  keywords: [
    'Cluster Bakugo shop',
    'how long is Cluster Bakugo in the shop',
    'My Hero Ultra Rumble Cluster Bakugo shop',
    'MHUR Season 16 end date',
    'Cluster Bakugo My Hero Ultra Rumble',
    'MHUR shop May 2026',
    'Cluster Bakugo available until',
    'My Hero Ultra Rumble Season 16',
    'Bakugo Cluster technique MHUR',
    'MHUR Season 16 May 27 2026',
    'My Hero Ultra Rumble shop rotation',
    'Bandai Namco MHUR 2026',
    'Cluster Bakugo season end',
    'My Hero Ultra Rumble battle royale',
    'MHA Ultra Rumble Bakugo',
  ],
  alternates: { canonical: 'https://www.ozonenetwork.news/video-games/mha/ultra-rumble/season-16/cluster-bakugo-shop' },
  openGraph: {
    title: 'Cluster Bakugo Shop Duration | MHUR Season 16 End Date',
    description:
      'Cluster Bakugo leaves the My Hero Ultra Rumble shop on May 27, 2026 when Season 16 closes. Here is exactly how long you have and how to get him.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Alfansa'],
    publishedTime: '2026-05-06T12:00:00Z',
    modifiedTime: '2026-05-06T12:00:00Z',
    section: 'Gaming',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Cluster Bakugo in My Hero Ultra Rumble shop' }],
    tags: ['My Hero Ultra Rumble', 'Bakugo', 'Season 16', 'Bandai Namco'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Long Is Cluster Bakugo in the Shop? | MHUR Season 16',
    description: 'Cluster Bakugo is in the MHUR shop until May 27, 2026 at 12:59 JST. Season 16 ends that day, so here is how long you have.',
    images: [OG_IMAGE],
  },
};

export default function VideoGamesMhaUltraRumbleSeason16ClusterBakugoShopPage() {
  return <NewsArticleDB slug="video-games-mha-ultra-rumble-season-16-cluster-bakugo-shop" />;
}
