import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/copyright/nicole-daedone-sentenced-9-years-onetaste-forced-labor-2026';
const OG_IMAGE = 'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Nicole Daedone Sentenced 9 Years | OneTaste Forced Labor',
  description:
    'OneTaste co-founder Nicole Daedone was sentenced to 9 years in federal prison on March 30, 2026, for forced labor conspiracy. Judge Pamela Chen also',
  keywords: [
    'Nicole Daedone sentenced 9 years 2026',
    'OneTaste forced labor conviction',
    'Nicole Daedone prison sentence',
    'OneTaste orgasmic meditation cult',
    'Nicole Daedone $12 million forfeiture',
    'OneTaste forced labor conspiracy federal',
    'Rachel Cherwitz OneTaste sentencing',
    'Judge Pamela Chen OneTaste verdict',
    'Breon Peace Eastern District New York OneTaste',
    'OneTaste Institute of OM rebrand',
    'orgasmic meditation labor exploitation',
    'OneTaste Bloomberg exposé FBI investigation',
    '18 USC 1594 forced labor conspiracy',
    'OneTaste cult recruitment scheme',
    'Nicole Daedone victim impact statement 2026',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: 'Nicole Daedone Sentenced to 9 Years for OneTaste Forced',
    description:
      'A federal judge sentenced OneTaste co-founder Nicole Daedone to 9 years and ordered $12M in forfeiture on March 30, 2026, closing a years-long forced',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['Connan Boyle'],
    publishedTime: '2026-03-31T16:00:00Z',
    modifiedTime: '2026-03-31T16:00:00Z',
    section: 'News',
    tags: [
      'Nicole Daedone',
      'OneTaste',
      'Forced Labor',
      'Federal Sentencing',
      'Eastern District New York',
      'Orgasmic Meditation',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OneTaste founder Nicole Daedone gets 9 years. Judge',
    description:
      'Federal prosecutors called OneTaste "a sophisticated labor mill." Daedone targeted trauma survivors, loaded them with six-figure debt, and forced them to',
  },
};

export default function CopyrightNicoleDaedoneSentenced9YearsOnetasteForcedLabor2026Page() {
  return <NewsArticleDB slug="copyright-nicole-daedone-sentenced-9-years-onetaste-forced-labor-2026" />;
}
