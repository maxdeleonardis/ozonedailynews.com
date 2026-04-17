import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/bio-hacking/news/rockefeller-crispr-stem-cell-living-drug-factory-hiv-malaria-influenza';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = '';

export const metadata: Metadata = {
  title: 'Rockefeller CRISPR Stem Cell Study | Living Drug Factory for HIV, Malaria',
  description: 'Rockefeller University researchers used CRISPR to engineer hematopoietic stem cells into permanent antibody factories. One injection. Three diseases. Indefinite protection.',
  keywords: [
    'CRISPR stem cell therapy 2026',
    'programmable B cells',
    'hematopoietic stem cell gene editing',
    'self-sustaining antibody production',
    'Rockefeller University CRISPR study Science',
    'broadly neutralizing antibodies HIV 2026',
    'in vivo protein factories',
    'non-antibody protein secretion B cells',
    'single-injection genome impact',
    'AAV vector compact CRISPR delivery',
    'Harald Hartweger CRISPR',
    'Michel Nussenzweig Rockefeller',
    'CRISPR HIV malaria influenza cure',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Rockefeller CRISPR Study | One Injection to Fight HIV, Malaria, Influenza',
    description: 'Engineered stem cells become permanent antibody factories. Only 7,000 edited cells needed. Proven against HIV-1, malaria, and lethal influenza in mice.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Conan Doyle'],
    publishedTime: '2026-04-18T00:00:00Z',
    modifiedTime: '2026-04-18T00:00:00Z',
    section: 'Science',
    tags: ['CRISPR', 'Rockefeller University', 'Gene Editing', 'HIV'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CRISPR turns stem cells into living drug factories | Rockefeller study',
    description: '7,000 edited cells. One vaccine trigger. Permanent protection against HIV, malaria, and influenza. Human trials next.',
  },
};

export default function BioHackingNewsRockefellerCrisprStemCellLivingDrugFactoryHivMalariaInfluenzaPage() {
  return <NewsArticleDB slug="bio-hacking-news-rockefeller-crispr-stem-cell-living-drug-factory-hiv-malaria-influenza" />;
}
