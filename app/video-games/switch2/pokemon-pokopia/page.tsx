import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/video-games/switch2/pokemon-pokopia';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = 'https://www.objectwire.org/entertainment/new_pokemon_game.PNG';

export const metadata: Metadata = {
  title:
    'Pokémon Pokopia Achieves Highest Review Scores in Pokémon Franchise History on Nintendo Switch 2 | ObjectWire',
  description:
    'Pokémon Pokopia scored 93 on OpenCritic and 90 on Metacritic from early reviews — the highest marks ever recorded for a Pokémon title. The life simulation game launches exclusively on Nintendo Switch 2 on March 5, 2026.',
  keywords: [
    'Pokémon Pokopia review scores 2026',
    'Pokémon Pokopia Nintendo Switch 2',
    'Pokémon Pokopia 93 OpenCritic',
    'Pokémon Pokopia 90 Metacritic',
    'Game Freak Omega Force Pokopia',
    'highest rated Pokémon game ever',
    'Pokémon Pokopia March 2026',
    'Pokémon Pokopia Ditto sandbox',
    'BenDavid Grabinski Hulu film 2026',
    'Nintendo Switch 2 exclusive 2026',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title:
      'Pokémon Pokopia — Franchise-High 93 on OpenCritic, 90 on Metacritic. Launches March 5, 2026 on Switch 2.',
    description:
      'Game Freak and Omega Force\'s sandbox Pokémon game scores higher than any title in franchise history. No battles — just rebuilding a post-apocalyptic Kanto as a shape-shifting Ditto.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-03-02T12:00:00Z',
    modifiedTime: '2026-03-02T12:00:00Z',
    section: 'Gaming',
    tags: [
      'Pokémon Pokopia', 'Nintendo Switch 2', 'Game Freak', 'Omega Force',
      'Pokémon', 'Gaming', 'Nintendo', 'Review', 'OpenCritic', 'Metacritic',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pokémon Pokopia: 93 OpenCritic. 90 Metacritic. Highest in Franchise History.',
    description:
      'No battles. Play as Ditto rebuilding post-apocalyptic Kanto. Game Freak × Omega Force. Switch 2 exclusive. March 5, 2026.',
    images: [IMAGE_URL],
  },
};

export default function PokemonPokopiaPage() {
  return <JackArticleDB slug="video-games-switch2-pokemon-pokopia" />;
}
