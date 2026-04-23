import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/tech/tsmc-semiconductor-foundry-profile';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'TSMC | Semiconductor Foundry Profile, 3nm Leadership, AI Chip Demand',
  description: 'TSMC is the world\'s largest independent semiconductor foundry, manufacturing 3nm and 5nm chips for Apple, Nvidia, and AMD. Record $18.12B profit in Q1 2026.',
  keywords: [
    'TSMC profile',
    'TSMC semiconductor foundry',
    'TSMC 3nm production',
    'TSMC CC Wei',
    'TSMC Hsinchu Taiwan',
    'TSMC AI chip manufacturing',
    'TSMC CoWoS packaging',
    'TSMC capex 2026',
    'TSMC Apple Nvidia AMD',
    'TSMC record profit 2026',
    'Taiwan Semiconductor Manufacturing Company',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'TSMC | World\'s Largest Semiconductor Foundry',
    description: 'Company profile: TSMC manufactures 74% of revenue from ≤7nm chips. Record $18.12B Q1 2026 profit. 3nm sold out through 2027.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Tech Desk'],
    publishedTime: '2026-04-17T22:00:00Z',
    modifiedTime: '2026-04-17T22:00:00Z',
    section: 'Tech',
    tags: ['TSMC', 'Semiconductors', 'AI', 'Taiwan'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TSMC company profile | The foundry behind every AI chip',
    description: 'Record $18.12B profit. 3nm sold out through 2027. 61% of revenue from AI/HPC. CoWoS packaging bottleneck. $52-56B capex.',
  },
};

export default function TechTsmcSemiconductorFoundryProfilePage() {
  return <ArticlePageDB slug="tech-tsmc-semiconductor-foundry-profile" />;
}
