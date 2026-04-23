import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/google/news/nvidia-google-cloud-vera-rubin-agentic-ai-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://www.objectwire.org/open-ai.PNG';

export const metadata: Metadata = {
  title: 'NVIDIA, Google Cloud | Vera Rubin A5X, Agentic AI 2026',
  description:
    'NVIDIA and Google Cloud announce Vera Rubin-powered A5X instances scaling to 960,000 GPUs, Gemini on Google Distributed Cloud, confidential Blackwell VMs, and agentic AI via Nemotron.',
  keywords: [
    'NVIDIA Google Cloud collaboration 2026',
    'NVIDIA Vera Rubin A5X instances Google Cloud',
    'Google Cloud Next 2026 NVIDIA',
    'NVIDIA Blackwell Google Cloud confidential VMs',
    'Gemini Google Distributed Cloud NVIDIA',
    'NVIDIA Nemotron agentic AI Gemini',
    'NVIDIA NeMo framework Google Cloud',
    'A5X bare-metal NVIDIA Rubin GPU',
    'NVIDIA ConnectX-9 SuperNIC Virgo networking',
    'agentic AI physical AI 2026',
    'NVIDIA Vera Rubin NVL72 inference cost',
    'Google Cloud AI Hypercomputer',
    'Gemini Enterprise Agent Platform NVIDIA',
    'NVIDIA Jensen Huang AI factory',
    'Google Cloud Next Las Vegas 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'NVIDIA & Google Cloud | Vera Rubin A5X, Agentic AI 2026',
    description:
      'A5X scales to 960,000 Rubin GPUs. Gemini on GDC. Confidential Blackwell VMs. Agentic AI on Nemotron. Full breakdown from Google Cloud Next, Las Vegas.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Sterling'],
    publishedTime: '2026-04-22T14:00:00Z',
    modifiedTime: '2026-04-22T14:00:00Z',
    section: 'Tech',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'NVIDIA and Google Cloud agentic AI partnership 2026' }],
    tags: ['NVIDIA', 'Google Cloud', 'Vera Rubin', 'Agentic AI', 'Gemini', 'Blackwell'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NVIDIA Vera Rubin A5X on Google Cloud scales to 960K GPUs. Gemini + Nemotron agentic AI live.',
    description: 'Full breakdown of the Google Cloud Next 2026 NVIDIA announcements: A5X, Blackwell confidential VMs, GDC, and agentic AI.',
    images: [OG_IMAGE],
  },
};

export default function GoogleNewsNvidiaGoogleCloudVeraRubinAgenticAi2026Page() {
  return <JackArticleDB slug="google-news-nvidia-google-cloud-vera-rubin-agentic-ai-2026" />;
}
