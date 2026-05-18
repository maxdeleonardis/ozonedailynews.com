import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/creator/news/logan-paul-sells-pokemon-card-16-million';

export const metadata: Metadata = {
  title: 'Logan Paul Sells 1/1 Pikachu Illustrator for $16 Million',
  description:
    'Logan Paul has sold his ultra-rare 1/1 Pikachu Illustrator PSA 9 Pokémon card at auction for $16 million, setting a new world record. Full story, card',
  keywords: [
    'Logan Paul Pokemon card',
    'Pikachu Illustrator',
    'Logan Paul sells Pokemon card',
    '$16 million Pokemon card',
    'most expensive Pokemon card',
    'Pikachu Illustrator PSA 9',
    'Logan Paul auction',
    'Pokemon card record',
    '1/1 Pikachu',
    'Logan Paul collectibles',
  ],
  alternates: {
    canonical: 'https://www.owire.org/creator/news/logan-paul-sells-pokemon-card-16-million',
  },
  openGraph: {
    title: 'Logan Paul Sells 1/1 Pikachu Illustrator for $16 Million',
    description:
      'Logan Paul sells the world\'s rarest Pokémon card for $16 million at auction, nearly tripling the $5.275M he paid in 2022. Full breakdown of the iconic',
    type: 'article',
    url: 'https://www.owire.org/creator/news/logan-paul-sells-pokemon-card-16-million',
    siteName: 'OzoneNews',
    authors: ['OzoneNews Editorial'],
    section: 'Creator',
    tags: ['Logan Paul', 'Pokemon', 'Pikachu Illustrator', 'Auction', 'Collectibles', 'Record'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logan Paul Sells Pikachu Illustrator (1/1) for $16M | World',
    description:
      'The most expensive Pokémon card ever sold. Logan Paul flips his $5.275M Pikachu Illustrator for $16 million at auction.',
  },
};

export default function LoganPaulPokemonCardPage() {
  return <WikiArticle slug="creator-news-logan-paul-sells-pokemon-card-16-million" />;
}
