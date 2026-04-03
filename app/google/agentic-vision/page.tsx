import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Google Launches Agentic Vision for Gemini 3 Flash: AI That Actively Investigates Images | ObjectWire",
  description: "Google unveils Agentic Vision for Gemini 3 Flash, transforming static image analysis into active, iterative investigation. Revolutionary AI feature enables dynamic visual reasoning and multi-step problem solving.",
  keywords: [
    "Google Agentic Vision",
    "Gemini 3 Flash",
    "Google AI",
    "computer vision AI",
    "agentic AI",
    "visual reasoning",
    "Google Gemini",
    "AI image analysis",
    "multimodal AI",
    "Google DeepMind",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/google/agentic-vision',
  },
  openGraph: {
    title: "Google Launches Agentic Vision for Gemini 3 Flash",
    description: "Revolutionary AI feature transforms static visual processing into active, iterative investigation. Gemini 3 Flash can now reason about images like humans do.",
    type: "article",
    url: "https://www.objectwire.org/google/agentic-vision",
    images: [
      {
        url: "https://www.objectwire.org/images/google-agentic-vision-og.jpg",
        width: 1200,
        height: 630,
        alt: "Google Agentic Vision for Gemini 3 Flash",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Launches Agentic Vision for Gemini 3 Flash",
    description: "AI that actively investigates images through iterative reasoning and multi-step analysis.",
    images: ["https://www.objectwire.org/images/google-agentic-vision-twitter.jpg"],
  },
};

export default function AgenticVisionPage() {
  return <WikiArticle slug="google-agentic-vision" />;
}
