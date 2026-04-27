import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/nasa/news/esa-corrosion-lunar-gateway-halo-ihab-modules-cancelled-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE =
  'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'ESA Confirms Corrosion on Lunar Gateway HALO, I-HAB Modules',
  description:
    'ESA confirmed corrosion on both the HALO and I-HAB modules of NASA\'s cancelled Lunar Gateway, built by Thales Alenia Space. Isaacman told Congress the damage would have pushed operations past 2030.',
  keywords: [
    'ESA Lunar Gateway corrosion',
    'HALO module corrosion NASA',
    'I-HAB module ESA corrosion',
    'Lunar Gateway cancelled NASA 2026',
    'Jared Isaacman Gateway testimony',
    'Thales Alenia Space corrosion modules',
    'Northrop Grumman HALO Gilbert Arizona',
    'Gateway hardware repurposed lunar surface',
    'NASA Lunar Gateway cancellation 2026',
    'ESA HALO corrosion confirmation April 2026',
    'NASA budget cuts 2027 Brian Babin',
    'Gateway Power Propulsion Element nuclear fission',
    'lunar gateway station corrosion problem',
    'NASA House Science Committee Gateway hearing',
    'Eric Berger Gateway corrosion Ars Technica',
    'NASA lunar surface infrastructure 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'ESA Confirms Corrosion on Lunar Gateway HALO, I-HAB Modules',
    description:
      'ESA acknowledged corrosion on both Gateway habitation modules on April 24, two days after NASA chief Jared Isaacman told lawmakers the damage would have delayed any operational use of the station past 2030.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-04-26T12:00:00Z',
    modifiedTime: '2026-04-26T12:00:00Z',
    section: 'Science',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 675,
        alt: 'Moon surface representing the cancelled NASA Lunar Gateway space station program',
      },
    ],
    tags: ['NASA', 'Lunar Gateway', 'ESA', 'HALO Module', 'Space Exploration'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ESA Confirms Corrosion on NASA\'s Cancelled Lunar Gateway Modules | Station Could Not Have Operated Before 2030',
    description:
      'Both the HALO and I-HAB modules built by Thales Alenia Space show corrosion. Isaacman told Congress Gateway was already dead. The Power Propulsion Element survives for a nuclear fission demo.',
    images: [OG_IMAGE],
  },
};

export default function NasaNewsEsaCorrosionLunarGatewayHaloIhabModulesCancelled2026Page() {
  return <NewsArticleDB slug="nasa-news-esa-corrosion-lunar-gateway-halo-ihab-modules-cancelled-2026" />;
}
