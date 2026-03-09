import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title:
    'Hulu Releases Red Band Trailer for Mike & Nick & Nick & Alice — Vince Vaughn & James Marsden Time-Travel Comedy | ObjectWire',
  description:
    'Hulu published the official red band trailer for Mike & Nick & Nick & Alice on March 1, 2026, starring Vince Vaughn and James Marsden in an R-rated action-comedy about two criminal best friends, a time machine, and a cannibal assassin. Theatrical release April 18, 2026.',
  keywords: [
    'Mike Nick Nick Alice Hulu trailer',
    'Vince Vaughn James Marsden time travel comedy 2026',
    'Mike Nick Nick Alice red band trailer',
    'BenDavid Grabinski Hulu film 2026',
    'Hulu April 2026 release',
    'Eiza Gonzalez Vince Vaughn film',
    'Stephen Root cannibal assassin comedy',
    'time loop action comedy 2026',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/entertainment/hulu',
  },
  openGraph: {
    title: 'Hulu Red Band Trailer: Mike & Nick & Nick & Alice — Vince Vaughn & James Marsden',
    description:
      'Hulu dropped the red band trailer for Mike & Nick & Nick & Alice on March 1, 2026. Two criminal best friends, a time machine, a cannibal assassin, and Eiza González. In theaters April 18, 2026.',
    type: 'article',
    url: 'https://www.objectwire.org/entertainment/hulu',
    siteName: 'ObjectWire',
    images: ['https://www.objectwire.org/entertainment/vaughn-marsden.PNG'],
    publishedTime: '2026-03-02T12:00:00Z',
    modifiedTime: '2026-03-02T12:00:00Z',
    section: 'Entertainment',
    tags: [
      'Hulu', 'Mike Nick Nick Alice', 'Vince Vaughn', 'James Marsden',
      'Eiza González', 'Stephen Root', 'Time Travel', 'Comedy', 'Entertainment',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hulu Drops Red Band Trailer for Mike & Nick & Nick & Alice',
    description:
      'Vince Vaughn. James Marsden. A time machine. A cannibal assassin. Hulu\'s R-rated time-loop comedy hits theaters April 18, 2026.',
    images: ['https://www.objectwire.org/entertainment/vaughn-marsden.PNG'],
  },
};

export default function HuluMikeNickPage() {
  return <WikiArticle slug="entertainment-hulu" />;
}
