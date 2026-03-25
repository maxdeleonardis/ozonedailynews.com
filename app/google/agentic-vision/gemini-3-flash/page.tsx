import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Gemini 3 Flash: The Model Behind Google's Agentic Vision Breakthrough | ObjectWire",
  description: "Deep dive into Gemini 3 Flash architecture and capabilities. How Google's latest multimodal AI model enables revolutionary Agentic Vision through advanced visual reasoning and iterative processing.",
  keywords: [
    "Gemini 3 Flash",
    "Google Gemini",
    "multimodal AI",
    "Google AI model",
    "Agentic Vision",
    "AI architecture",
    "Google DeepMind",
    "transformer model",
    "computer vision",
    "large language model",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/google/agentic-vision/gemini-3-flash',
  },
  openGraph: {
    title: "Gemini 3 Flash: The Model Behind Google's Agentic Vision",
    description: "Technical deep dive into Gemini 3 Flash architecture, capabilities, and performance benchmarks powering Google's revolutionary Agentic Vision feature.",
    type: "article",
    url: "https://www.objectwire.org/google/agentic-vision/gemini-3-flash",
    images: [
      {
        url: "https://www.objectwire.org/images/gemini-3-flash-og.jpg",
        width: 1200,
        height: 630,
        alt: "Gemini 3 Flash AI Model",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gemini 3 Flash: The Model Behind Agentic Vision",
    description: "Technical architecture and capabilities of Google's latest multimodal AI breakthrough.",
    images: ["https://www.objectwire.org/images/gemini-3-flash-twitter.jpg"],
  },
};

export default function Gemini3FlashPage() {
  return <WikiArticle slug="google-agentic-vision-gemini-3-flash" />;
}
