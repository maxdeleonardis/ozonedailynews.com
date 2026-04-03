import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Nvidia Corporation: AI Computing, Graphics Processing & Data Center Technology | ObjectWire",
  description: "Comprehensive overview of Nvidia Corporation, world leader in graphics processing units (GPUs), artificial intelligence computing, data centers, and accelerated computing technology.",
  keywords: [
    "Nvidia",
    "GPU",
    "artificial intelligence",
    "data center",
    "Jensen Huang",
    "CUDA",
    "GeForce",
    "AI computing",
    "graphics cards",
    "semiconductor",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/nvidia',
  },
  openGraph: {
    title: "Nvidia Corporation: AI Computing & Graphics Processing Leader",
    description: "Complete guide to Nvidia, covering GPU technology, AI computing platforms, market dominance, and data center solutions.",
    type: "article",
    url: "https://www.objectwire.org/nvidia",
    images: [
      {
        url: "https://www.objectwire.org/images/nvidia-og.jpg",
        width: 1200,
        height: 630,
        alt: "Nvidia Corporation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nvidia Corporation: AI Computing Leader",
    description: "Comprehensive overview of Nvidia GPU and AI technology.",
    images: ["https://www.objectwire.org/images/nvidia-twitter.jpg"],
  },
};

export default function NvidiaPage() {
  return <WikiArticle slug="nvidia" />;
}
