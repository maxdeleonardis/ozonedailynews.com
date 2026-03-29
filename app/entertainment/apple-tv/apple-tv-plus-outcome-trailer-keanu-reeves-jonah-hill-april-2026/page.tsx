import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG =
  '/entertainment/apple-tv/apple-tv-plus-outcome-trailer-keanu-reeves-jonah-hill-april-2026';
const FULL_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = 'https://www.objectwire.org/apple/apple-tv-outcome-trailer-2026.jpg';

export const metadata: Metadata = {
  title: 'Apple TV+ "Outcome" Trailer: Keanu Reeves & Jonah Hill in Hollywood Satire | ObjectWire',
  description:
    'Apple TV+ released the first full trailer for "Outcome" on March 16, 2026. Directed by Jonah Hill, the dark comedy-drama stars Keanu Reeves as fictional Hollywood icon Reef Hawk, a global premiere is set for April 10, 2026.',
  keywords: [
    'Outcome Apple TV+',
    'Outcome trailer 2026',
    'Keanu Reeves Outcome Apple TV',
    'Jonah Hill director Outcome',
    'Reef Hawk Hollywood satire',
    'Outcome April 10 2026',
    'Apple TV+ new movies 2026',
    'Cameron Diaz Outcome film',
    'Martin Scorsese acting role',
    'Outcome cast ensemble',
    'Apple TV spring 2026',
    'Jonah Hill Strong Baby Productions',
    'dark comedy film 2026',
    'celebrity apology tour movie',
  ],
  openGraph: {
    title: 'Apple TV+ Unveils "Outcome" Trailer: Keanu Reeves as Hollywood\'s Reef Hawk',
    description:
      'The first full trailer for Jonah Hill\'s "Outcome" is here. Keanu Reeves plays extorted movie star Reef Hawk on an apology tour to save his legacy. Global premiere April 10, 2026 on Apple TV+.',
    url: FULL_URL,
    type: 'article',
    images: [{ url: IMAGE_URL, alt: 'Keanu Reeves in Outcome Apple TV+ 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Keanu Reeves Is Reef Hawk in Apple TV+\'s "Outcome" | Trailer & April 10 Premiere Date',
    description:
      'Jonah Hill\'s dark comedy-drama "Outcome" drops its first full trailer. Keanu Reeves, Cameron Diaz, Martin Scorsese, and a stacked ensemble. Premieres April 10, 2026.',
    images: [IMAGE_URL],
  },
  alternates: { canonical: FULL_URL },
};

export default function OutcomeTrailerAppleTVPage() {
  return <NewsArticleDB slug="entertainment-apple-tv-apple-tv-plus-outcome-trailer-keanu-reeves-jonah-hill-april-2026" />;
}
