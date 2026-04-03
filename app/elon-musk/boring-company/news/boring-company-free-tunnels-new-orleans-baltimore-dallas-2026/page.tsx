import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/elon-musk/boring-company/news/boring-company-free-tunnels-new-orleans-baltimore-dallas-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = '/default/boring_company.png';

export const metadata: Metadata = {
  title: "Boring Company to Build Free Tunnels in New Orleans, Baltimore, and Dallas | ObjectWire",
  description:
    "The Boring Company has selected New Orleans, Baltimore, and Dallas to receive fully funded one-mile underground transit loops through its expanded Tunnel Vision Challenge, tripling its original commitment after 487 global submissions.",
  keywords: [
    'Boring Company New Orleans tunnel',
    'Boring Company Baltimore tunnel',
    'Boring Company Dallas tunnel',
    'Tunnel Vision Challenge 2026',
    'Boring Company free tunnels',
    'Boring Company expansion 2026',
    'Elon Musk tunnels 2026',
    'Vegas Loop expansion',
    'underground transit US cities',
    'Boring Company Thrilling Three',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: "Boring Company to Build Free Tunnels in New Orleans, Baltimore, and Dallas",
    description:
      "The Boring Company tripled its Tunnel Vision Challenge commitment, selecting three cities, New Orleans, Baltimore, and Dallas, to receive fully funded one-mile underground transit loops.",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-03-25T17:00:00Z',
    modifiedTime: '2026-03-25T17:00:00Z',
    section: 'Technology',
    tags: ['Boring Company', 'Elon Musk', 'Tunnels', 'New Orleans', 'Baltimore', 'Dallas', 'Infrastructure', 'Transit'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Boring Company Picks New Orleans, Baltimore, and Dallas for Free Tunnel Loops",
    description:
      "The Tunnel Vision Challenge had one winner, then The Boring Company tripled down. Three cities will now get a free one-mile underground transit loop.",
    images: [IMAGE_URL],
  },
};

export default function BoringCompanyTunnelVisionWinnersPage() {
  return <NewsArticleDB slug="elon-musk-boring-company-news-boring-company-free-tunnels-new-orleans-baltimore-dallas-2026" />;
}
