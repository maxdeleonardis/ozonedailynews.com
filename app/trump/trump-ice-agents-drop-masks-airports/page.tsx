import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const revalidate = 3600;

const SLUG = '/trump/trump-ice-agents-drop-masks-airports';
const FULL_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = '/trump/trump-ice-agents-drop-masks-airports.PNG';

export const metadata: Metadata = {
  title: "Trump Tells ICE Agents to Drop Masks at Airports as",
  description:
    "President Trump directed ICE agents to stop wearing face coverings during airport enforcement operations, saying agents should be identifiable to the",
  openGraph: {
    title: "Trump Tells ICE Agents to Drop Masks at Airports as",
    description:
      "Trump directed ICE agents to remove face coverings during airport operations, a visibility-first posture as the administration's nationwide airport ICE",
    url: FULL_URL,
    images: [{ url: IMAGE_URL }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trump Tells ICE Agents to Drop Masks at Airports as',
    description: 'Trump directed ICE agents to remove face coverings during airport operations, a visibility-first posture as the administration',
  },
  alternates: {
    canonical: 'https://www.objectwire.org/trump/trump-ice-agents-drop-masks-airports',
  },
};

export default function TrumpICEMasksAirportsPage() {
  return <NewsArticleDB slug="trump-trump-ice-agents-drop-masks-airports" />;
}
