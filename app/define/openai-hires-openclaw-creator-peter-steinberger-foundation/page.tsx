import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "OpenAI Hires OpenClaw Creator Peter Steinberger, Sets Up Foundation | ObjectWire",
  description: "OpenAI announces the hiring of Peter Steinberger, creator of OpenClaw robotics framework, and establishes the OpenAI Robotics Foundation to accelerate embodied AI research and open-source development.",
  keywords: [
    "OpenAI hires Peter Steinberger 2026",
    "OpenClaw robotics framework creator",
    "OpenAI Robotics Foundation announcement",
    "Peter Steinberger embodied AI researcher",
    "OpenAI robotics division hiring",
    "OpenClaw open-source robotic manipulation",
    "OpenAI foundation robotics research",
    "embodied AI talent acquisition 2026",
    "Peter Steinberger career OpenAI move",
    "OpenAI competing Boston Dynamics robotics",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/define/openai-hires-openclaw-creator-peter-steinberger-foundation',
  },
};

export default function OpenAIHiresPeterSteinbergerPage() {
  return <WikiArticle slug="define-openai-hires-openclaw-creator-peter-steinberger-foundation" />;
}
