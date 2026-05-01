import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.


const SLUG =
  '/apple/core-ai-framework-replaces-core-ml-wwdc-2026-bloomberg';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL =
  'https://www.objectwire.org/apple/apple-core-ai-framework-wwdc-2026-core-ml-replacement.jpg';

export const metadata: Metadata = {
  title:
    'Apple Plans Core AI Framework to Replace Core ML at WWDC',
  description:
    "Apple intends to introduce a new developer framework called Core AI at WWDC 2026 in June, replacing Core ML, the on-device machine learning toolkit Apple",
  keywords: [
    'Apple Core AI framework WWDC 2026',
    'Core ML replaced Core AI Apple 2026',
    'Apple WWDC 2026 developer framework announcement',
    'Mark Gurman Core AI Bloomberg March 2026',
    'iOS 27 Core AI on-device AI framework',
    'Apple on-device machine learning AI 2026',
    'Apple Intelligence Core AI developer tools',
    'Apple Foundation Models framework 3 billion parameters',
    'WWDC 2026 iOS 27 iPadOS 27 macOS 27',
    'Apple Core ML generative AI LLM optimization',
    'Apple Gemini Siri integration 2026',
    'Apple developer AI framework replacement 2026',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title:
      "Apple Is Replacing Core ML With 'Core AI' at WWDC 2026, Bloomberg",
    description:
      "Bloomberg's Mark Gurman reports Apple will introduce Core AI at WWDC 2026, replacing the Core ML developer framework shipped since 2017. The function",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-03-01T22:00:00Z',
    modifiedTime: '2026-03-01T22:00:00Z',
    section: 'Technology',
    tags: [
      'Apple',
      'Core AI',
      'Core ML',
      'WWDC 2026',
      'iOS 27',
      'Apple Intelligence',
      'Developer Tools',
      'On-Device AI',
      'Mark Gurman',
      'Bloomberg',
      'Technology',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      "Apple Rebrands Core ML as Core AI for WWDC 2026, Gurman",
    description:
      "Apple is replacing Core ML with Core AI at WWDC 2026. Same on-device model integration purpose, new branding. Bloomberg Power On March 1, 2026.",
    images: [IMAGE_URL],
  },
};

export default function AppleCoreAIWWDC2026Page() {
  return <JackArticleDB slug="apple-core-ai-framework-replaces-core-ml-wwdc-2026-bloomberg" />;
}
