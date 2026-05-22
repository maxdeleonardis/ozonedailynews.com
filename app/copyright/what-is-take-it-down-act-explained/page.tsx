import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/copyright/what-is-take-it-down-act-explained';
const ARTICLE_URL = `https://www.ozonenetwork.news${SLUG}`;
const OG_IMAGE = `https://www.ozonenetwork.news/api/og?title=${encodeURIComponent('What Is the TAKE IT DOWN Act? | Federal Deepfake Law Explained')}&category=Politics&desc=${encodeURIComponent('Public Law 119-12 criminalizes nonconsensual intimate imagery and mandates 48-hour platform removal under FTC oversight')}&author=${encodeURIComponent('Jack Sterling')}&date=${encodeURIComponent('May 21, 2026')}`;

export const metadata: Metadata = {
  title: 'What Is the TAKE IT DOWN Act | Deepfake Law Explained 2026',
  description:
    'The TAKE IT DOWN Act (Public Law 119-12) criminalizes AI deepfake pornography and nonconsensual intimate imagery. Up to 3 years in prison. 48-hour platform removal. Full explainer.',
  keywords: [
    'what is the TAKE IT DOWN Act',
    'TAKE IT DOWN Act explained',
    'TAKE IT DOWN Act Public Law 119-12',
    'TAKE IT DOWN Act deepfake law',
    'nonconsensual intimate imagery federal law',
    'TAKE IT DOWN Act penalties',
    'TAKE IT DOWN Act platform requirements',
    'TAKE IT DOWN Act 48 hour removal',
    'AI deepfake pornography federal crime',
    'TAKE IT DOWN Act FTC enforcement',
    'TAKE IT DOWN Act exemptions',
    'TAKE IT DOWN Act first arrests 2026',
    'digital forgeries law United States',
    'deepfake pornography criminal penalties',
    'NCII federal law 2025',
    'TAKE IT DOWN Act Signal Protocol exemption',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'What Is the TAKE IT DOWN Act | Federal Deepfake and NCII Law Explained',
    description:
      'Complete explainer on Public Law 119-12: criminal penalties up to 3 years, 48-hour platform removal mandates, FTC enforcement, exemptions, and the first federal prosecutions filed May 20, 2026.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'OzoneNews',
    authors: ['Jack Sterling'],
    publishedTime: '2026-05-21T16:00:00-05:00',
    modifiedTime: '2026-05-21T16:00:00-05:00',
    section: 'Copyright',
    tags: ['TAKE IT DOWN Act', 'Public Law 119-12', 'AI Deepfakes', 'NCII', 'FTC', 'Federal Law'],
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'TAKE IT DOWN Act explainer | Federal deepfake law 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is the TAKE IT DOWN Act? | Every Provision Explained',
    description: 'Up to 3 years in prison. 48-hour platform removal. First arrests May 20, 2026. Full explainer on Public Law 119-12.',
    images: [OG_IMAGE],
  },
};

export default function WhatIsTakeItDownActPage() {
  return <JackArticleDB slug="copyright-what-is-take-it-down-act-explained-2026" />;
}
