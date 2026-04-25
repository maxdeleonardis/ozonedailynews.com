import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/trump/trump-totalenergies-928m-offshore-wind-exit';
const FULL_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = '/trump/trump-totalenergies-offshore-wind.PNG';

export const metadata: Metadata = {
  title: "Trump Admin Pays TotalEnergies $928M to Exit Offshore",
  description:
    "The Trump administration announced a deal to pay French energy giant TotalEnergies nearly $1 billion to abandon two offshore wind projects off the East",
  openGraph: {
    title: "Trump Admin Pays TotalEnergies $928M to Exit Offshore Wind",
    description:
      "The Trump administration will pay French energy giant TotalEnergies $928 million to walk away from two East Coast offshore wind projects, marking one of",
    url: FULL_URL,
    images: [{ url: IMAGE_URL }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trump Admin Pays TotalEnergies $928M to Exit Offshore Wind',
    description: 'The Trump administration will pay French energy giant TotalEnergies $928 million to walk away from two East Coast offshore wind projects, marking one of',
  },
  alternates: {
    canonical: 'https://www.objectwire.org/trump/trump-totalenergies-928m-offshore-wind-exit',
  },
};

export default function TrumpTotalEnergiesOffshoreWindPage() {
  return <NewsArticleDB slug="trump-trump-totalenergies-928m-offshore-wind-exit" />;
}
