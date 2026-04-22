import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/austin/michael-dell-750-million-ut-austin-ai-hospital-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE =
  'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&q=80';

export const metadata: Metadata = {
  title: 'Michael Dell $750M Gift | UT Austin AI-Native Hospital 2026',
  description:
    'Michael and Susan Dell donate $750 million to UT Austin on April 21, 2026, funding the first AI-native hospital in the United States and a 300-acre campus in Northwest Austin. Groundbreaking expected Fall 2026.',
  keywords: [
    'Michael Dell $750 million UT Austin donation 2026',
    'UT Dell Medical Center AI hospital Austin',
    'UT Austin AI-native hospital 2026',
    'Michael Dell billion dollar donation University of Texas',
    'UT Dell Campus Advanced Research Northwest Austin',
    'MD Anderson Austin cancer center expansion',
    'Texas Advanced Computing Center TACC supercomputer Dell',
    'UT Austin medical center groundbreaking 2026',
    'AI hospital ambient intelligence patient care',
    'Michael Dell UT Austin dorm room 1984',
    'UT Austin $10 billion fundraising campaign',
    'precision medicine AI oncology Austin Texas',
    'UT Austin hospital 2030 completion',
    'Michael Susan Dell Foundation UT Austin',
    'Silicon Valley of Health Austin Texas',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Michael Dell Donates $750M to UT Austin | First AI-Native Hospital in America',
    description:
      'The Dells become UT Austin\'s first billion-dollar donors. A 300-acre AI-native medical campus breaks ground Fall 2026, opens 2030, and launches a $10B decade-long fundraising campaign.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Alfasa'],
    publishedTime: '2026-04-21T20:00:00Z',
    modifiedTime: '2026-04-21T20:00:00Z',
    section: 'Tech',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 675,
        alt: 'Modern hospital facility with futuristic AI-integrated architecture',
      },
    ],
    tags: ['Michael Dell', 'UT Austin', 'AI Hospital', 'Austin', 'Healthcare'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Michael Dell\'s $750M Gift Will Build America\'s First AI-Native Hospital',
    description:
      'Started his company in a UT dorm in 1984. Now the Dells are the university\'s first billion-dollar donors. Groundbreaking Fall 2026.',
    images: [OG_IMAGE],
  },
};

export default function AustinMichaelDell750MillionUtAustinAiHospital2026Page() {
  return <JackArticleDB slug="austin-michael-dell-750-million-ut-austin-ai-hospital-2026" />;
}
