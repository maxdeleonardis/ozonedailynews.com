import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const revalidate = 3600;

const SLUG = '/video-games/valve-corporation/cs2-animation-overhaul-not-cs3-april-2026';
const OG_IMAGE = '/influncer/valve-ceo-Gabe-Newell.PNG';

export const metadata: Metadata = {
  title: 'Valve Ships CS2 Animation Overhaul | Not CS3',
  description:
    'Valve released a beta build overhauling Counter-Strike 2\'s entire animation system on April 1, 2026. Reports of a CS3 built on Unreal Engine 5 are false, confirmed directly by Valve.',
  keywords: [
    'CS2 animation update',
    'Counter-Strike 2 animation overhaul',
    'CS3 rumor false',
    'Valve CS2 update April 2026',
    'Counter-Strike 3 Unreal Engine 5',
    'CS3 April Fools',
    'CS2 beta update',
    'Valve Counter-Strike 2026',
    'CS2 movement animation',
    'Counter-Strike 2 update',
    'Valve Steam update',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    type: 'article',
    title: 'Valve Ships CS2 Animation Overhaul | CS3 Reports Are False',
    description:
      'Valve\'s April 1 beta overhauled CS2\'s entire animation system. The CS3 on Unreal Engine 5 rumor originated from April Fools\' jokes referencing a "March',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['Conan Boyle'],
    publishedTime: '2026-04-03T10:00:00Z',
    modifiedTime: '2026-04-03T10:00:00Z',
    section: 'Gaming',
    images: [
      {
        url: `https://www.objectwire.org${OG_IMAGE}`,
        width: 1200,
        height: 675,
        alt: 'Valve CEO Gabe Newell',
      },
    ],
    tags: ['Counter-Strike 2', 'Valve', 'CS2', 'Animation Update'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Valve Ships CS2 Animation Overhaul, CS3 Rumors Are April Fools Jokes",
    description:
      'The "CS3 on Unreal Engine 5" story is fake. What Valve actually shipped on April 1 is a major CS2 animation system beta.',
    images: [`https://www.objectwire.org${OG_IMAGE}`],
  },
};

export default function VideoGamesValveCorporationCs2AnimationOverhaulNotCs3April2026Page() {
  return <NewsArticleDB slug="video-games-valve-corporation-cs2-animation-overhaul-not-cs3-april-2026" />;
}
