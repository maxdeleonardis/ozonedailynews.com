import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/JackArticleDB';

// Page renders via ISR — HTML cached at CDN edge, refreshed at most every hour.
// Run 'npm run wiki:migrate' to update content in Supabase, then redeploy to bust cache.
export const revalidate = 3600;

const SLUG = '/trump/ice-arrest-sfo-airport-nationwide-deployment';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = 'https://www.objectwire.org/trump/ice-arrest-sfo-airport.jpg';

export const metadata: Metadata = {
  title: 'ICE Agents Arrest Woman at SFO as Nationwide Airport Deployment Begins | ObjectWire',
  description:
    'ICE agents arrested a woman in the secure boarding area of San Francisco International Airport on Sunday night. Bystanders filmed the detention as it unfolded, even as officials clarified the arrest was unrelated to Trump\'s directive to deploy ICE to airports nationwide.',
  keywords: [
    'ICE arrest SFO airport 2026',
    'ICE San Francisco International Airport',
    'Trump ICE airport deployment',
    'ICE nationwide airport operations 2026',
    'immigration enforcement airports',
    'SFO ICE arrest video',
    'ICE boarding area arrest San Francisco',
    'Trump immigration enforcement airports',
    'ICE airport operations nationwide',
    'immigration arrests airports 2026',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: 'ICE Agents Arrest Woman at SFO as Nationwide Airport Deployment Begins',
    description:
      'ICE arrested a woman in SFO\'s secure boarding area Sunday night. Bystanders filmed the detention. Officials say the arrest was unrelated to Trump\'s directive sending ICE agents to airports nationwide, but the timing has amplified public alarm.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-03-24T10:00:00Z',
    modifiedTime: '2026-03-24T10:00:00Z',
    section: 'Politics',
    tags: ['ICE', 'SFO', 'Immigration', 'Trump', 'Airport', 'Deportation', 'DHS', 'Nationwide Deployment'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ICE Arrests Woman at SFO | Nationwide Airport Deployment Underway',
    description:
      'ICE agents detained a woman inside SFO\'s secure boarding area. Videos spread across social media. Officials: unrelated to Trump\'s airport ICE directive, but the national deployment is real.',
    images: [IMAGE_URL],
  },
};

export default function IceSFOArrestPage() {
  return <JackArticleDB slug="trump-ice-arrest-sfo-airport-nationwide-deployment" />;
}
