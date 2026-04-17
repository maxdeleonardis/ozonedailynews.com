import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/tech/asml-euv-lithography-profile';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = '';

export const metadata: Metadata = {
  title: 'ASML | EUV Lithography Monopoly, High-NA Machines, Chip Equipment',
  description: 'ASML holds a global monopoly on EUV lithography machines required for sub-7nm chips. Q1 2026 revenue €8.8B, raised full-year guidance to €36B-€40B.',
  keywords: [
    'ASML profile',
    'ASML EUV lithography',
    'ASML High-NA EUV',
    'ASML Veldhoven Netherlands',
    'ASML Christophe Fouquet',
    'ASML chip equipment monopoly',
    'ASML export controls China',
    'ASML 2026 revenue guidance',
    'ASML TSMC relationship',
    'Extreme Ultraviolet lithography',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'ASML | The Only Maker of EUV Lithography Machines',
    description: 'Company profile: ASML holds a global monopoly on EUV machines ($200M-$400M each). Q1 2026 sales €8.8B. Raised guidance to €36B-€40B.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Tech Desk'],
    publishedTime: '2026-04-17T22:00:00Z',
    modifiedTime: '2026-04-17T22:00:00Z',
    section: 'Tech',
    tags: ['ASML', 'Semiconductors', 'EUV', 'Netherlands'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ASML company profile | The monopoly behind every advanced chip',
    description: 'Global monopoly on EUV. $200M-$400M per machine. Q1 2026 sales €8.8B. China revenue dropped to 19% under export controls.',
  },
};

export default function TechAsmlEuvLithographyProfilePage() {
  return <ArticlePageDB slug="tech-asml-euv-lithography-profile" />;
}
