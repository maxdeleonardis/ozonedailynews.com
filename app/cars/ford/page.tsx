import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/cars/ford';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE =
  'https://images.unsplash.com/photo-1612825173281-9a193378527e?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Ford Motor Company | Perfect Storm Warning, Q1 2026',
  description:
    'Ford CEO Jim Farley warns of a "perfect storm" threatening US automakers. Q1 2026 sales fell 9%, F-Series down 16%, EV sales dropped 70%. Ford\'s $30K EV target and 2027 pivot explained.',
  keywords: [
    'Ford Motor Company 2026',
    'Jim Farley Ford CEO',
    'Ford perfect storm warning',
    'Ford Q1 2026 sales',
    'Ford EV strategy 2026',
    'Ford F-Series sales decline',
    'Ford Universal Electric Vehicle UEV',
    'Ford vs BYD',
    'Ford tariff shield domestic assembly',
    'Ford hybrid record 2026',
    'Ford 2027 electric pickup',
    'Ford $30000 EV',
    'Ford Novelis aluminum supply disruption',
    'BYD US market threat',
    'Ford China tariff 100 percent',
    'Ford clean sheet EV approach',
    'American automaker reckoning 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    type: 'article',
    title: 'Ford Motor Company | Perfect Storm Warning & Q1 2026',
    description:
      'CEO Jim Farley calls 2026 a "come to Jesus" moment for US automakers. Sales down 9%, F-Series hit by Novelis fire, EVs down 70%. The $30K UEV platform is Ford\'s answer.',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Auto Desk'],
    publishedTime: '2026-04-25T14:00:00Z',
    modifiedTime: '2026-04-25T14:00:00Z',
    section: 'Cars',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Ford pickup truck on American highway representing domestic manufacturing' }],
    tags: ['Ford', 'Jim Farley', 'Electric Vehicles', 'US Auto Industry'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ford CEO Farley Warns of "Perfect Storm" | Q1 Sales Down 9%',
    description:
      'F-Series down 16%, EV sales down 70%, hybrids at record highs. Farley\'s 2027 bet: a $30K clean-sheet electric pickup to match BYD\'s cost structure.',
    images: [OG_IMAGE],
  },
};

export default function CarsFordPage() {
  return <ArticlePageDB slug="cars-ford" />;
}
