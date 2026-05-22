import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/copyright/news/take-it-down-act-first-arrests-shannon-hernandez-deepfake-pornography-2026';
const ARTICLE_URL = `https://www.ozonenetwork.news${SLUG}`;
const OG_IMAGE = `https://www.ozonenetwork.news/api/og?title=${encodeURIComponent('First TAKE IT DOWN Act Arrests | DOJ Charges Two in AI Deepfake Pornography Case')}&category=Politics&desc=${encodeURIComponent('Cornelius Shannon and Arturo Hernandez posted thousands of nonconsensual AI deepfake images viewed millions of times')}&author=${encodeURIComponent('OzoneNews Editorial Team')}&date=${encodeURIComponent('May 20, 2026')}&breaking=true`;

export const metadata: Metadata = {
  title: 'First TAKE IT DOWN Act Arrests | DOJ Charges Two in Deepfake Case',
  description:
    'DOJ unsealed the first TAKE IT DOWN Act complaints May 20, 2026. Cornelius Shannon and Arturo Hernandez face up to 2 years for AI deepfake pornography.',
  keywords: [
    'TAKE IT DOWN Act',
    'TAKE IT DOWN Act first arrests',
    'Cornelius Shannon arrested',
    'Arturo Hernandez deepfake',
    'DOJ AI deepfake pornography',
    'EDNY deepfake case',
    'FBI deepfake arrests 2026',
    'AI deepfake federal prosecution',
    'nonconsensual deepfake law',
    'Joseph Nocella deepfake',
    'James Barnacle FBI deepfake',
    'Brooklyn federal court deepfake',
    'deepfake pornography arrest May 2026',
    'TAKE IT DOWN Act enforcement',
    'AI deepfake celebrity victims',
    'AI deepfake elected officials',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'First TAKE IT DOWN Act Arrests | DOJ Charges Two in AI Deepfake Pornography Case',
    description:
      'Federal prosecutors in Brooklyn unsealed the first complaints under the TAKE IT DOWN Act. Two men face up to 2 years in prison for AI deepfake pornography.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'OzoneNews',
    authors: ['OzoneNews Editorial Team'],
    publishedTime: '2026-05-20T20:00:00-04:00',
    modifiedTime: '2026-05-20T20:00:00-04:00',
    section: 'Copyright',
    tags: ['TAKE IT DOWN Act', 'DOJ', 'AI Deepfakes', 'EDNY', 'FBI', 'Cybercrime'],
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'DOJ TAKE IT DOWN Act first arrests | AI deepfake pornography prosecution' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DOJ Makes First TAKE IT DOWN Act Arrests | Two Charged in AI Deepfake Case',
    description: 'Shannon, 51, and Hernandez, 20, allegedly published thousands of deepfake images viewed millions of times. Up to 2 years each if convicted.',
    images: [OG_IMAGE],
  },
};

export default function TakeItDownActFirstArrestsPage() {
  return <NewsArticleDB slug="copyright-news-take-it-down-act-first-arrests-shannon-hernandez-deepfake-pornography-2026" />;
}
