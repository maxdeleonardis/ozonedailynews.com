import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/trump/musk-pay-tsa-workers-shutdown';
const FULL_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = '/trump/musk-tsa-shutdown.PNG';

export const metadata: Metadata = {
  title: "Trump Backs Musk's Offer to Personally Pay TSA Workers During Shutdown",
  description:
    "Elon Musk offered via X to personally cover TSA worker salaries during the partial DHS shutdown. Trump endorsed the offer, saying 'Yeah, I'd love it.' Legal experts warn the plan faces steep hurdles under federal law.",
  openGraph: {
    title: "Trump Backs Musk's Offer to Personally Pay TSA Workers During Shutdown",
    description:
      "Musk offered to personally cover TSA salaries during the DHS partial shutdown. Trump endorsed it. Legal experts say federal law likely prohibits private payment of government employees.",
    url: FULL_URL,
    images: [{ url: IMAGE_URL }],
  },
};

export default function MuskPayTSAWorkersPage() {
  return <NewsArticleDB slug="trump-musk-pay-tsa-workers-shutdown" />;
}
