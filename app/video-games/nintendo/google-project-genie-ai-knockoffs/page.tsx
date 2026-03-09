import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Google\'s Project Genie AI Tool Generates Nintendo Game Knockoffs | ObjectWire',
  description: 'Google launches Project Genie AI tool that generates playable Nintendo knockoffs including Super Mario and Zelda worlds without copyright safeguards, raising legal and ethical concerns.',
  keywords: [
    'Google Project Genie',
    'AI gaming',
    'Nintendo knockoffs',
    'copyright concerns',
    'AI-generated games',
    'Super Mario AI',
    'Zelda AI',
    'gaming copyright',
    'generative AI',
    'Google AI',
    'Jay Peters',
    'The Verge',
    'intellectual property',
    'AI ethics',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/nintendo/google-project-genie-ai-knockoffs',
  },
  openGraph: {
    title: 'Google\'s Project Genie AI Creates Nintendo Game Knockoffs',
    description: 'AI tool generates playable worlds resembling Mario, Zelda without restrictions.',
    type: 'article',
    url: 'https://www.objectwire.org/nintendo/google-project-genie-ai-knockoffs',
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google AI Tool Makes Nintendo Knockoffs',
    description: 'Project Genie generates playable Mario and Zelda clones without safeguards.',
  },
};

export default function ProjectGeniePage() {
  return <WikiArticle slug="video-games-nintendo-google-project-genie-ai-knockoffs" />;
}
