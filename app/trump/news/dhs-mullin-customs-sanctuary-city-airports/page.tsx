import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/trump/news/dhs-mullin-customs-sanctuary-city-airports';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://www.objectwire.org/images/trump/dhs-mullin-customs-sanctuary.jpg';

export const metadata: Metadata = {
  title: 'DHS Mullin Threatens Customs Pullout | Sanctuary City Airports',
  description: 'DHS Secretary Markwayne Mullin told Fox News the Trump administration may withdraw CBP officers from sanctuary city airports, grounding international flights at major U.S. hubs.',
  keywords: [
    'Markwayne Mullin',
    'DHS sanctuary city airports',
    'Customs and Border Protection',
    'sanctuary city customs',
    'Trump sanctuary city',
    'Mullin Fox News interview',
    'international flights sanctuary cities',
    'CBP officers airports',
    'sanctuary jurisdiction airports 2026',
    'DHS customs threat',
    'Trump immigration enforcement',
    'Mullin homeland security',
    'sanctuary city federal funding',
    'William Orrick injunction sanctuary',
    'Kristi Noem replacement',
    'airport customs operations',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'DHS Mullin Threatens Customs Pullout From Sanctuary City Airports',
    description: 'Homeland Security Secretary Markwayne Mullin said the Trump administration could withdraw CBP officers from sanctuary city airports, effectively grounding international flights at hubs like JFK, LAX, and O\'Hare.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-04-08T16:00:00Z',
    modifiedTime: '2026-04-08T16:00:00Z',
    section: 'Politics',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'DHS Secretary Markwayne Mullin during Fox News interview on sanctuary city customs threat' }],
    tags: ['Markwayne Mullin', 'DHS', 'Sanctuary City', 'Customs', 'Trump', 'CBP', 'Airports'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DHS Mullin Threatens to Pull Customs From Sanctuary City Airports',
    description: 'Mullin told Fox News the administration may remove CBP from airports in sanctuary cities, potentially grounding international flights at JFK, LAX, SFO, and O\'Hare.',
    images: [OG_IMAGE],
  },
};

export default function TrumpNewsDhsMullinCustomsSanctuaryCityAirportsPage() {
  return <NewsArticleDB slug="trump-news-dhs-mullin-customs-sanctuary-city-airports" />;
}
