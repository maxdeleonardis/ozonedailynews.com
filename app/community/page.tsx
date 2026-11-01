import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';
import { SITE_CONFIG } from '@/lib/site-config';

const SLUG = 'community';
const PAGE_URL = `${SITE_CONFIG.url}/community`;

export const metadata: Metadata = {
  title: 'Community Impact | Environmental Justice, School Food & Local Stories',
  description: 'HoneyNewspaper community desk: environmental justice, Cancer Alley, school lunch policy, Superfund sites near schools, farmworker pesticide exposure, and housing health.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Community Impact | Environmental Justice, School Food & Local Stories',
    description: 'HoneyNewspaper community desk: environmental justice, Cancer Alley, school lunch policy, Superfund sites near schools, and housing health.',
    type: 'website',
    url: PAGE_URL,
    siteName: SITE_CONFIG.publisherName,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Community Impact | Environmental Justice, School Food & Local Stories',
    description: 'HoneyNewspaper community desk: environmental justice, Cancer Alley, school lunch policy, Superfund sites near schools, and housing health.',
  },
};

export default function CommunityPage() {
  return <ArticlePageDB slug={SLUG} />;
}
