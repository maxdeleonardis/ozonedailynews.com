import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/tech/digital-realty/digital-realty-3-25-billion-hyperscale-data-center-fund-2026';
const OG_IMAGE = '';

export const metadata: Metadata = {
  title: 'Digital Realty $3.25B Hyperscale Data Center Fund | Final Close 2026',
  description:
    'Digital Realty closed its first U.S. hyperscale data center fund at $3.25 billion, backed by sovereign wealth funds, pensions, and endowments. The fund targets Tier I markets including Northern Virginia, Dallas, and Santa Clara.',
  keywords: [
    'Digital Realty hyperscale data center fund 2026',
    'Digital Realty $3.25 billion fund close',
    'Digital Realty institutional investor fund',
    'hyperscale data center investment 2026',
    'Digital Realty Northern Virginia data center',
    'Digital Realty Santa Clara Dallas Atlanta',
    'DLR hyperscale fund sovereign wealth',
    'data center private equity fund 2026',
    'cloud AI data center infrastructure investment',
    'Digital Realty fund manager 20 percent stake',
    'Tier I data center markets United States',
    'hyperscale AI data center demand 2026',
    'Digital Realty fund institutional capital',
    'data center REIT fund structure',
    'Digital Realty carrier neutral cloud fund',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: 'Digital Realty Closes $3.25B Hyperscale Data Center Fund',
    description:
      'Sovereign wealth funds, pensions, and endowments backed Digital Realty\'s first U.S. hyperscale fund. The $3.25B vehicle targets six Tier I metros as AI infrastructure demand pushes capital into data centers at record pace.',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['Connan Boyle'],
    publishedTime: '2026-03-31T14:00:00Z',
    modifiedTime: '2026-03-31T14:00:00Z',
    section: 'Tech',
    tags: [
      'Digital Realty',
      'Data Centers',
      'Hyperscale',
      'Infrastructure',
      'Institutional Investment',
      'AI Infrastructure',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Realty just closed a $3.25B hyperscale data center fund. Here\'s who backed it.',
    description:
      'Sovereign wealth funds, public pensions, and endowments are betting on AI-driven data center demand across six Tier I U.S. metros.',
  },
};

export default function TechDigitalRealtyDigitalRealty325BillionHyperscaleDataCenterFund2026Page() {
  return <NewsArticleDB slug="tech-digital-realty-digital-realty-3-25-billion-hyperscale-data-center-fund-2026" />;
}
