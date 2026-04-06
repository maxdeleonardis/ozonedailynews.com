import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/elon-musk/boring-company';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = '/default/boring_company.png';

export const metadata: Metadata = {
  title: 'The Boring Company | Underground Transit, Vegas Loop & Tunnel Technology',
  description:
    'The Boring Company is an American tunnel construction company founded by Elon Musk in 2016. Its flagship Vegas Loop network transports passengers beneath',
  keywords: [
    'The Boring Company',
    'Boring Company Elon Musk',
    'Vegas Loop Las Vegas',
    'tunnel boring machine Prufrock',
    'underground transportation',
    'LVCC Loop',
    'Boring Company 2026',
    'Elon Musk tunnels',
    'Las Vegas underground transit',
    'hyperloop alternative',
    'Boring Company valuation',
    'Prufrock-3',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'The Boring Company | Underground Transit, Vegas Loop & Tunnel Technology',
    description:
      'Founded by Elon Musk in 2016, The Boring Company operates the Vegas Loop, a Tesla-powered underground transit network, and is developing tunnel projects',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Boring Company',
    description:
      'Elon Musk\'s tunnel company: Vegas Loop, Prufrock boring machines, and the push to put high-speed transit underground.',
    images: [IMAGE_URL],
  },
};

export default function BoringCompanyPage() {
  return <ArticlePageDB slug="elon-musk-boring-company" />;
}
