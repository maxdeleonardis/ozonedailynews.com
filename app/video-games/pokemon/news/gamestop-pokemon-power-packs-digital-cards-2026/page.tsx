import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const revalidate = 3600;

const SLUG = '/video-games/pokemon/news/gamestop-pokemon-power-packs-digital-cards-2026';
const ARTICLE_URL = `https://www.ozonenetwork.news${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'GameStop Pokemon Power Packs | Digital Cards, PSA Vault 2026',
  description:
    'GameStop launched digital Pokemon Power Packs in April 2026: repacked cards held in a PSA vault, $25 to $2,500 per pack, a 6% transaction fee, and a',
  keywords: [
    'GameStop Pokemon Power Packs',
    'GameStop digital Pokemon cards',
    'GameStop Power Packs 2026',
    'Pokemon card PSA vault GameStop',
    'GameStop Pokemon cards price',
    'GameStop Pokemon $25 pack',
    'GameStop Pokemon $2500 pack',
    'GameStop digital card trading',
    'GameStop Charizard $29000',
    'Pokemon card repacking GameStop',
    'GameStop Pokemon buyback',
    'GameStop Pokemon fees',
    'Pokemon cards collector market 2026',
    'GameStop gaming collectibles',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'GameStop Pokemon Power Packs | Digital Cards, PSA Vault 2026',
    description:
      'GameStop repacks Pokemon cards into $25-$2,500 Power Packs, stores them in a PSA digital vault, charges 6% on every trade, and hid a $29,000 Charizard',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'OzoneNews',
    authors: ['OzoneNews Gaming Desk'],
    publishedTime: '2026-04-22T16:00:00Z',
    modifiedTime: '2026-04-22T16:00:00Z',
    section: 'Gaming',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Pokemon trading cards fanned out on a table' }],
    tags: ['Pokemon', 'GameStop', 'Power Packs', 'Trading Cards', 'Gaming'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GameStop hid a $29,000 Charizard in its new Pokemon',
    description: '$25 to $2,500 packs. PSA digital vault. 6% fees. Employees say $150 packs "flew off the cashwrap."',
    images: [OG_IMAGE],
  },
};

export default function VideoGamesPokemonNewsGamestopPokemonPowerPacksDigitalCards2026Page() {
  return <NewsArticleDB slug="video-games-pokemon-news-gamestop-pokemon-power-packs-digital-cards-2026" />;
}
