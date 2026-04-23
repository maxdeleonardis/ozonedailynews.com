import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/bio-hacking/news/oslo-patient-hiv-cure-ccr5-bone-marrow-transplant-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Oslo Patient HIV Cure | CCR5 Mutation Bone Marrow Transplant 2026',
  description: 'A 63-year-old Norwegian man becomes roughly the tenth person cured of HIV after a bone marrow transplant from his brother, who carried two copies of the rare CCR5Δ32 mutation.',
  keywords: [
    'Oslo patient HIV cure',
    'Oslo patient HIV cured 2026',
    'CCR5 delta 32 mutation HIV',
    'HIV cure bone marrow transplant',
    'HIV cure 2026',
    'CCR5 mutation HIV cure',
    'Oslo University Hospital HIV',
    'bone marrow transplant HIV',
    'myelodysplastic syndrome HIV',
    'HIV functional cure',
    'CRISPR HIV gene editing',
    'CCR5 receptor HIV',
    'tenth person cured HIV',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Oslo Patient Becomes ~10th Person Cured of HIV via CCR5 Mutation',
    description: 'A familial bone marrow match carrying the CCR5Δ32 mutation cured a 63-year-old Norwegian man of HIV. Five years post-transplant, no replicating virus found.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Science Desk'],
    publishedTime: '2026-04-17T23:59:00Z',
    modifiedTime: '2026-04-17T23:59:00Z',
    section: 'Science',
    tags: ['HIV Cure', 'Oslo Patient', 'CCR5', 'Gene Therapy'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oslo patient cured of HIV through brother\'s rare CCR5 mutation',
    description: '63-year-old Norwegian man, ~10th person ever cured. Brother carried CCR5Δ32 mutation. No virus in blood, marrow, or gut after 5 years off antiretrovirals.',
  },
};

export default function BioHackingNewsOsloPatientHivCureCcr5BoneMarrowTransplant2026Page() {
  return <NewsArticleDB slug="bio-hacking-news-oslo-patient-hiv-cure-ccr5-bone-marrow-transplant-2026" />;
}
