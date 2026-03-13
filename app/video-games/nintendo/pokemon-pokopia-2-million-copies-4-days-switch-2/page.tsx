import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';
// Page renders dynamically — content fetched from Supabase at request time.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title:
    'Pokémon Pokopia Sells 2.2M Copies in 4 Days, Shattering Spin-Off Records | ObjectWire',
  description:
    'The Pokémon Company confirmed Pokémon Pokopia sold 2.2 million units in its first four days on Nintendo Switch 2, with over 1 million copies sold in Japan alone. Nintendo stock surged 15% in 48 hours. Full sales breakdown.',
  keywords: [
    'Pokémon Pokopia sales 2.2 million',
    'Pokémon Pokopia launch week sales Nintendo Switch 2',
    'Pokémon spin-off record best selling',
    'Pokémon Pokopia Japan sales 1 million',
    'Nintendo Switch 2 launch sales March 2026',
    'Pokémon Pokopia vs Pokémon Stadium record',
    'Pokémon Pokopia stock Nintendo surge',
    'Pokémon Pokopia sold out physical',
    'Pokémon Pokopia Jefferies analyst',
    'Game Freak Omega Force Pokopia sales',
    'Pokémon cozy game Switch 2 2026',
    'best selling Pokémon spin-off history',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/video-games/nintendo/pokemon-pokopia-2-million-copies-4-days-switch-2',
  },
  openGraph: {
    title: 'Pokémon Pokopia: 2.2M Sold in 4 Days — Nintendo Stock Up 15%',
    description:
      'The Pokémon Company confirms 2.2 million units sold in four days. Japan accounted for nearly 1 million copies. Physical stock sold out at Amazon, Currys, and Smyths. Analysts say it\'s on track to dethrone Pokémon Stadium as the best-selling spin-off in franchise history.',
    type: 'article',
    url: 'https://www.objectwire.org/video-games/nintendo/pokemon-pokopia-2-million-copies-4-days-switch-2',
    siteName: 'ObjectWire',
    publishedTime: '2026-03-12T10:00:00Z',
    modifiedTime: '2026-03-12T10:00:00Z',
    section: 'Video Games',
    tags: ['Pokémon Pokopia', 'Nintendo', 'Switch 2', 'Sales Record', 'Game Freak', 'Omega Force', 'Video Games'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pokémon Pokopia Sells 2.2M in 4 Days — On Track to Beat Pokémon Stadium All-Time',
    description:
      '45% of sales from Japan alone. Physical copies sold out worldwide. Nintendo stock +15%. Jefferies: on track for best-selling Pokémon spin-off ever.',
  },
};

export default function PokemonPokopia2MillionCopies4DaysSwitch2Page() {
  return <WikiArticle slug="/video-games/nintendo/pokemon-pokopia-2-million-copies-4-days-switch-2" />;
}
