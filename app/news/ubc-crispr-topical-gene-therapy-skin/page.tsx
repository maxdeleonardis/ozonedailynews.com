import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'UBC Researchers Develop First Topical CRISPR-Based Gene Therapy for Skin Disorders',
  description:
    'Researchers at the University of British Columbia and Berlin Institute of Health at Charité have developed the first CRISPR base-editing therapy delivered',
  keywords: [
    'UBC CRISPR gene therapy',
    'topical gene therapy skin',
    'CRISPR base editor skin',
    'autosomal recessive congenital ichthyosis',
    'ARCI gene therapy',
    'lipid nanoparticles skin',
    'Sarah Hedtrich UBC',
    'Epithelica startup',
    'Cell Stem Cell 2026',
    'genetic skin disorders treatment',
    'epidermolysis bullosa',
    'Berlin Institute of Health Charité',
  ],
  openGraph: {
    title: 'UBC Develops First Topical CRISPR Gene Therapy for Skin | Applied Like a Cream',
    description:
      'UBC and Charité researchers used lipid nanoparticles to deliver a CRISPR base editor through skin, correcting ichthyosis mutations with no off-target',
    type: 'article',
    publishedTime: '2026-03-10T14:00:00Z',
    authors: ['ObjectWire Science Desk'],
    url: 'https://www.objectwire.org/news/ubc-crispr-topical-gene-therapy-skin',
    images: [
      {
        url: 'https://www.objectwire.org/ubc-crispr-topical-gene-therapy-skin.jpg',
        width: 1200,
        height: 630,
        alt: 'Lipid nanoparticle delivery of CRISPR base editor to human skin tissue',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'First Topical CRISPR Therapy for Skin | UBC & Charité Research',
    description:
      'A CRISPR base editor in a lipid nanoparticle cream corrects ichthyosis mutations in human skin models. Here&apos;s what it means.',
  },
  alternates: {
    canonical: 'https://www.objectwire.org/news/ubc-crispr-topical-gene-therapy-skin',
  },
};

export default function UBCCrisprTopicalGenePage() {
  return <NewsArticleDB slug="news-ubc-crispr-topical-gene-therapy-skin" />;
}
