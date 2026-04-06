import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/blackrock/news/blackrock-57-million-iqm-quantum-computers-us-listing-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL =
  'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'BlackRock Invests $57M in IQM Quantum Computers Ahead of U.S. Listing',
  description:
    'BlackRock has committed a €50 million ($57.6M) financing package to Finnish quantum computing company IQM Quantum Computers, bolstering its balance sheet',
  keywords: [
    'BlackRock IQM Quantum Computers investment 2026',
    'IQM Quantum Computers SPAC listing Nasdaq 2026',
    'IQM Real Asset Acquisition Corp RAAQ merger',
    'BlackRock quantum computing investment',
    'IQM $57 million financing BlackRock',
    'European quantum computing US listing first',
    'IQM €50 million funding round 2026',
    'IQM Helsinki Stock Exchange dual listing',
    'quantum computing IPO 2026',
    'IQM $1.8 billion valuation SPAC',
    'BlackRock alternative investments quantum',
    'IQM Quantum Computers Finland',
    'quantum computing public market debut 2026',
    'RAAQ Nasdaq SPAC quantum',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: 'BlackRock Invests $57M in IQM Quantum Ahead of Historic U.S. Listing',
    description:
      'A €50M BlackRock financing package lands five weeks after IQM announced a SPAC merger with RAAQ at a $1.8B pre-money valuation. The deal would make IQM',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Sterling'],
    publishedTime: '2026-03-31T12:00:00Z',
    modifiedTime: '2026-03-31T12:00:00Z',
    section: 'Finance',
    tags: ['BlackRock', 'IQM', 'Quantum Computing', 'Finance', 'SPAC', 'Nasdaq'],
    images: [{ url: IMAGE_URL, width: 1200, height: 675, alt: 'Quantum computing processor array in a cryogenic cooling chamber' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BlackRock Puts $57M Into IQM Before Its Nasdaq Debut',
    description:
      '$57.6M from BlackRock. $1.8B pre-money SPAC valuation. June 2026 target close. IQM would be the first European quantum company on a U.S. major exchange.',
    images: [IMAGE_URL],
  },
};

export default function BlackrockNewsBlackrock57MillionIqmQuantumComputersUsListing2026Page() {
  return <JackArticleDB slug="blackrock-news-blackrock-57-million-iqm-quantum-computers-us-listing-2026" />;
}
