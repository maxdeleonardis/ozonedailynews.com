import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/clothing/new-balance/energy-arc-fuelcell-supercomp';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&h=675&fit=crop&auto=format';

export const metadata: Metadata = {
  title: 'New Balance Energy Arc | FuelCell SuperComp 2026 Guide',
  description: 'New Balance Energy Arc explained: how the arched carbon plate and geometric void midsole work, SC Elite v5 75% energy return, and 2026 SuperComp lineup vs Nike Vaporfly.',
  keywords: [
    'New Balance Energy Arc',
    'FuelCell SuperComp Elite v5',
    'New Balance SC Elite v5 2026',
    'New Balance carbon plate technology',
    'Energy Arc vs traditional carbon plate',
    'New Balance SC Trainer v3',
    'New Balance SC Pacer v2',
    'FuelCell foam PEBA 2026',
    'New Balance super shoes 2026',
    'SC Elite v5 energy return',
    'New Balance wide fit carbon plate',
    'New Balance vs Nike Vaporfly 2026',
    'New Balance marathon shoes 2026',
    'carbon plate running shoes 2026',
    'New Balance FuelCell SuperComp lineup',
    'best carbon plate shoes 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'New Balance Energy Arc | FuelCell SuperComp 2026 Guide',
    description: 'How Energy Arc\'s arched carbon plate and hollow void midsole produce 75% energy return in the SC Elite v5, and where it sits vs Nike Alphafly 4 and Adizero Adios Pro Evo.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Tech Desk'],
    publishedTime: '2026-04-28T16:00:00Z',
    modifiedTime: '2026-04-28T16:00:00Z',
    section: 'Tech',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'New Balance FuelCell SuperComp running shoe Energy Arc carbon plate' }],
    tags: ['New Balance', 'Running Shoes', 'Carbon Plate', 'FuelCell'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New Balance Energy Arc | 75% Energy Return, 2026 Lineup',
    description: 'The SC Elite v5 hits 75% energy return. Here is how the arched plate and hollow void work, and how the full SuperComp lineup stacks up in 2026.',
    images: [OG_IMAGE],
  },
};

export default function ClothingNewBalanceEnergyArcFuelcellSupercompPage() {
  return <NewsArticleDB slug="clothing-new-balance-energy-arc-fuelcell-supercomp" />;
}
