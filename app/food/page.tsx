import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';
import { SITE_CONFIG } from '@/lib/site-config';

const SLUG = 'food';
const PAGE_URL = `${SITE_CONFIG.url}/food`;

export const metadata: Metadata = {
  title: 'Food Safety | FDA Enforcement, Additives, Recalls & School Meals',
  description: 'HoneyNewspaper food safety coverage: FDA recalls, the GRAS loophole, Red Dye No. 3 phase-out, ultra-processed food research, and school nutrition standards.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Food Safety | FDA Enforcement, Additives, Recalls & School Meals',
    description: 'HoneyNewspaper food safety coverage: FDA recalls, the GRAS loophole, Red Dye No. 3 phase-out, ultra-processed food research, and school nutrition standards.',
    type: 'website',
    url: PAGE_URL,
    siteName: SITE_CONFIG.publisherName,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Food Safety | FDA Enforcement, Additives, Recalls & School Meals',
    description: 'HoneyNewspaper food safety coverage: FDA recalls, the GRAS loophole, Red Dye No. 3 phase-out, ultra-processed food research, and school nutrition standards.',
  },
};

export default function FoodPage() {
  return <ArticlePageDB slug={SLUG} />;
}
