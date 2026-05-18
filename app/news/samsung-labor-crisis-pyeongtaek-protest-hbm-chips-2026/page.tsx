import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const revalidate = 3600;

const SLUG = '/news/samsung-labor-crisis-pyeongtaek-protest-hbm-chips-2026';
const ARTICLE_URL = `https://www.ozonenetwork.news${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1591189824294-f9a64b5e5d15?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Samsung Labor Crisis 2026 | 40,000 Workers Protest HBM Chip Supply',
  description: 'The largest protest in Samsung Electronics history erupted April 23, 2026 in Pyeongtaek, South Korea, as 40,000 workers demand pay parity with SK Hynix and threaten an 18-day strike that could cripple global AI chip supply.',
  keywords: [
    'Samsung labor crisis 2026',
    'Samsung workers protest Pyeongtaek',
    'Samsung Electronics Labour Union NSEU',
    'Samsung HBM chips strike 2026',
    'Samsung SK Hynix bonus gap',
    'Samsung 40000 workers protest',
    'HBM3e AI chip supply disruption',
    'Samsung semiconductor strike May 2026',
    'Samsung bonus cap abolish 2026',
    'Samsung operating profit bonus 15 percent',
    'Pyeongtaek Samsung semiconductor complex',
    'AI chip shortage NVIDIA HBM',
    'Samsung vs SK Hynix compensation',
    'Samsung strike 676 million per day',
    'South Korea semiconductor GDP strike',
    'Samsung AI performance bonus 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Samsung Labor Crisis 2026 | 40,000 Workers Protest as AI Chip Supply Hangs in the Balance',
    description: '40,000 Samsung workers flooded Pyeongtaek demanding triple bonuses matching SK Hynix. An 18-day strike threat could cost $676M/day and delay AI servers for months.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Wang'],
    publishedTime: '2026-04-23T21:00:00Z',
    modifiedTime: '2026-04-23T21:00:00Z',
    section: 'News',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Protest crowd representing Samsung workers labor demonstration Pyeongtaek 2026' }],
    tags: ['Samsung', 'Labor', 'HBM Chips', 'South Korea', 'AI Supply Chain'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Samsung Labor Crisis | 40,000 Workers Could Shut Down the World\'s AI Chip Supply',
    description: 'An 18-day strike threat at Pyeongtaek would cost $676M/day and delay NVIDIA AI servers for months. The biggest labor standoff in semiconductor history.',
    images: [OG_IMAGE],
  },
};

export default function NewsSamsungLaborCrisisPyeongtaekProtestHbmChips2026Page() {
  return <NewsArticleDB slug="news-samsung-labor-crisis-pyeongtaek-protest-hbm-chips-2026" />;
}
