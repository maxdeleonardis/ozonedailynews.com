import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Meta Platforms May Ditch NVIDIA for Google's Parent Company TPUs: Custom Compute Chips for AI | ObjectWire",
  description: "Meta explores switching from NVIDIA GPUs to Google Tensor Processing Units (TPUs) for AI workloads, potentially reshaping the AI chip market and reducing dependency on NVIDIA.",
  keywords: ["Meta", "NVIDIA", "Google TPU", "AI chips", "artificial intelligence", "custom silicon", "data center", "machine learning", "Tensor Processing Unit"],
  alternates: {
    canonical: 'https://www.objectwire.org/meta-platforms-may-ditch-nvidia-for-googles-parent-company-tpus-custom-compute-chips-for-ai',
  },
};

export default function MetaDitchingNVIDIAPage() {
  return <WikiArticle slug="social-meta-news-meta-platforms-may-ditch-nvidia-for-googles-parent-company-tpus-custom-compute-chips-for-ai" />;
}
