import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/winter-olympics/lindsey-vonn/near-amputation-fasciotomy';

export const metadata: Metadata = {
  title:
    "Lindsey Vonn Reveals She Nearly Lost Her Leg to Amputation After Olympic Crash | ObjectWire",
  description:
    'Lindsey Vonn revealed on Monday that she came dangerously close to having her left leg amputated following her crash at the 2026 Winter Olympics. An emergency fasciotomy performed on the mountain by orthopedic surgeon Dr. Hackett saved her leg.',
  keywords: [
    'Lindsey Vonn leg amputation',
    'Lindsey Vonn fasciotomy',
    'Lindsey Vonn near amputation Winter Olympics 2026',
    'Lindsey Vonn crash leg',
    'Vonn emergency surgery leg',
    'fasciotomy skiing injury',
    'Lindsey Vonn Olympics injury',
    'Milano Cortina 2026 Vonn leg',
    'Dr Hackett Vonn surgery',
    'compartment syndrome skiing',
    'Lindsey Vonn leg saved',
    'Winter Olympics downhill crash amputation',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: "Lindsey Vonn Reveals She Nearly Lost Her Leg to Amputation After Olympic Crash",
    description:
      "Vonn disclosed on Monday that she came within hours of having her left leg amputated. An emergency fasciotomy, performed on the mountain by team surgeon Dr. Hackett, restored blood flow and saved her leg.",
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Sports Desk'],
    publishedTime: '2026-02-23T10:00:00Z',
    modifiedTime: '2026-02-23T10:00:00Z',
    section: 'Winter Olympics 2026',
    tags: ['Lindsey Vonn', 'Winter Olympics', 'Fasciotomy', 'Amputation', 'Alpine Skiing', 'Milano Cortina 2026'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Lindsey Vonn: Surgeon 'Filleted It Open' to Save Her Leg From Amputation After Olympic Crash",
    description:
      "Vonn reveals she came close to losing her left leg after her crash at the 2026 Winter Olympics. An emergency fasciotomy performed on the mountain restored blood flow and saved it.",
  },
};

export default function VonnNearAmputationPage() {
  return <NewsArticleDB slug="winter-olympics-lindsey-vonn-near-amputation-fasciotomy" />;
}
