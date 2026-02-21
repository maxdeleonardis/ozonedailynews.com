import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox } from '@/components/NewsArticle';

const SLUG = '/earth/news/who-owns-the-ocean-floor';

export const metadata: Metadata = {
  title: "Who Owns the Ocean Floor? The Legal Battle Over Deep-Sea Mining Rights | ObjectWire",
  description:
    "No single country owns the deep ocean floor — but that hasn't stopped nations and corporations from racing to claim it. Here's how international law governs the seabed, who has the power to mine it, and why the rules are breaking down.",
  keywords: [
    'who owns the ocean floor international law',
    'deep sea mining rights UNCLOS 2026',
    'International Seabed Authority deep sea mining',
    'which country owns the deep ocean floor',
    'UNCLOS exclusive economic zone seabed rights',
    'deep sea mining legal framework international waters',
    'common heritage of mankind ocean floor law',
    'ISA mining license deep sea polymetallic nodules',
    'US deep sea mining UNCLOS not ratified',
    'deep ocean floor ownership national jurisdiction',
    'Clarion Clipperton Zone mining rights treaty',
    'Trump deep sea mining executive order 2026',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: "Who Owns the Ocean Floor? The Legal Battle Over Deep-Sea Mining Rights",
    description:
      "The deep ocean is technically nobody's — and everybody's. As the race to mine it intensifies, the international legal framework governing the seabed is facing its biggest stress test since it was written.",
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    images: ['/earth/pexels-george-desipris-726478.jpg'],
    authors: ['ObjectWire Editorial'],
    publishedTime: '2026-02-20T12:00:00Z',
    modifiedTime: '2026-02-20T12:00:00Z',
    section: 'Earth & Environment',
    tags: ['Ocean Floor', 'Deep Sea Mining', 'UNCLOS', 'International Law', 'ISA', 'Seabed Rights', 'Critical Minerals'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Who Owns the Ocean Floor? Nobody. Everybody. That's the Problem.",
    description:
      "The deep seabed is governed by a 1982 treaty the US never ratified. As corporations and nations race to mine it, the legal framework is under serious strain.",
  },
};

export default function WhoOwnsOceanFloorPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Who Owns the Ocean Floor? The Legal Battle Over Deep-Sea Mining Rights"
        description="No single country owns the deep ocean floor — but that hasn't stopped nations and corporations from racing to claim it. Here's how international law governs the seabed, who has the power to mine it, and why the rules are breaking down."
        author="ObjectWire Editorial"
        publishedTime="2026-02-20T12:00:00Z"
        modifiedTime="2026-02-20T12:00:00Z"
        imageUrl="https://www.objectwire.org/earth/pexels-george-desipris-726478.jpg"
        articleUrl={`https://www.objectwire.org${SLUG}`}
        section="Earth & Environment"
        keywords={[
          'who owns the ocean floor',
          'deep sea mining rights UNCLOS',
          'International Seabed Authority ISA',
          'common heritage of mankind seabed law',
          'US deep sea mining legal framework',
          'Clarion Clipperton Zone mining rights',
        ]}
      />

      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'Earth', item: '/earth' },
              { name: 'News', item: '/earth/news' },
              { name: 'Who Owns the Ocean Floor', item: SLUG },
            ]}
          />
        </div>
      </div>

      <NewsArticle
        title="Who Owns the Ocean Floor? The Legal Battle Over Deep-Sea Mining Rights"
        subtitle="The deep seabed is technically the 'common heritage of mankind.' But as demand for rare earth minerals explodes, that idealistic legal principle is colliding with hard geopolitical reality."
        category="Earth & Environment"
        categoryColor="blue"
        topicTag="world"
        publishDate="February 20, 2026"
        readTime="3 min read"
        author={{
          name: 'ObjectWire Editorial',
          role: 'Environment & Policy Desk',
        }}
        heroImage={{
          src: '/earth/pexels-george-desipris-726478.jpg',
          alt: 'Ocean waves above the contested deep seabed',
          caption: "Below every ocean surface lies a legal grey zone that no country formally owns — but many are racing to control.",
          credit: 'George Desipris / Pexels',
        }}
        tags={[
          'Ocean Floor', 'Deep Sea Mining', 'UNCLOS', 'International Law',
          'ISA', 'Seabed Rights', 'Critical Minerals', 'Geopolitics', 'Trump',
        ]}
      >

        <p>
          The short answer: <strong>nobody owns the deep ocean floor.</strong> The longer answer is the one that matters — and it explains why the coming decade of deep-sea mineral extraction could trigger the most consequential international legal dispute since the Law of the Sea was written.
        </p>

        <HighlightBox type="key-point" color="blue">
          Under the <strong>UN Convention on the Law of the Sea (UNCLOS, 1982)</strong>, the deep seabed beyond national jurisdiction is designated the <em>&quot;common heritage of mankind&quot;</em> — meaning no country can claim sovereignty over it. Mining rights are administered by the <strong>International Seabed Authority (ISA)</strong>, a UN body based in Jamaica. The United States has never ratified UNCLOS.
        </HighlightBox>

        {/* Section 1 */}
        <h2>How International Seabed Law Actually Works: UNCLOS, the ISA, and the 200-Mile Line</h2>

        <p>
          Ocean jurisdiction operates in concentric rings from the coastline. A country controls its <strong>territorial sea</strong> (12 nautical miles), has sovereign resource rights over its <strong>Exclusive Economic Zone</strong> (200 nautical miles), and may extend seabed rights further via a <strong>continental shelf claim</strong>. Beyond those limits lies the Area — international seabed that falls under UNCLOS jurisdiction and is administered by the ISA.
        </p>
        <p>
          The ISA issues exploration and exploitation licenses to both state-sponsored entities and private companies sponsored by member states. As of 2026, the ISA has issued <strong>31 exploration contracts</strong> covering approximately 1.3 million square kilometers of the Pacific, Atlantic, and Indian Ocean floors — primarily targeting the cobalt- and manganese-rich polymetallic nodule fields of the{' '}
          <Link href="/finance/articles/the-trillion-dollar-treasure-trove-in-the-deep-sea" className="text-blue-600 font-medium hover:underline">
            Clarion-Clipperton Zone
          </Link>
          .
        </p>

        {/* Section 2 */}
        <h2>The US Problem: Why America Is Mining Without the Rules Everyone Else Follows</h2>

        <div className="not-prose my-6 relative w-full aspect-video rounded-xl overflow-hidden shadow-md">
          <Image
            src="/earth/pexels-sliceisop-1894353.jpg"
            alt="Deep ocean floor mineral deposits and international jurisdiction"
            fill
            className="object-cover"
          />
          <p className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs px-3 py-1.5">
            The legal status of deep-sea mineral deposits depends on where exactly they sit — and whose rules apply. Credit: Sliceisop / Pexels
          </p>
        </div>

        <p>
          The United States signed UNCLOS in 1994 but the Senate has never ratified it — making the US one of the only major economies operating outside the treaty framework. In practice, this means American companies seeking deep-sea mining rights cannot be sponsored through the ISA system. Instead, they operate under the <strong>Deep Seabed Hard Mineral Resources Act of 1980</strong>, a domestic law that predates UNCLOS and gives the US government unilateral authority to license seabed mining in international waters — a position most other nations consider legally contested.
        </p>
        <p>
          The Trump administration has leaned into this posture. Executive orders signed in early 2026 directed federal agencies to accelerate domestic critical mineral extraction permitting, including in offshore and deep-ocean zones. Combined with the{' '}
          <Link href="/earth/news/trump-epa-move-green-paradox" className="text-blue-600 font-medium hover:underline">
            rollback of Obama-era EPA environmental protections
          </Link>
          , the practical effect is to position the US to pursue seabed extraction on its own legal terms — outside the ISA process that governs every other country.
        </p>

        {/* Section 3 */}
        <h2>Why the "Common Heritage" Principle Is Failing Under Commercial Pressure</h2>

        <p>
          The &quot;common heritage of mankind&quot; designation was a 1970s idealist construct — it assumed that the deep seabed&apos;s resources would be developed cooperatively, with benefits shared globally, before commercial extraction was technologically feasible. That window has closed. The technology to harvest polymetallic nodules at commercial scale now exists. The financial incentives — driven by the surging demand for{' '}
          <Link href="/earth/why-cobalt-is-the-new-oil" className="text-blue-600 font-medium hover:underline">
            cobalt, nickel, and manganese for EV batteries
          </Link>{' '}
          — are enormous. And the multilateral consensus required to enforce the ISA&apos;s authority over powerful state actors simply does not exist.
        </p>
        <p>
          The result is a legal framework designed for a world that no longer exists, stretched over a commercial reality it was never built to handle. The ocean floor is nobody&apos;s. Which, in practice, is starting to mean it belongs to whoever gets there first with the biggest machine and the most permissive domestic law.
        </p>

        {/* Related */}
        <h2>Related Coverage</h2>
        <ul>
          <li>
            <Link href="/finance/articles/the-trillion-dollar-treasure-trove-in-the-deep-sea" className="text-blue-600 hover:underline font-medium">
              The Trillion-Dollar Treasure: Polymetallic Nodules and the Deep-Sea Frontier →
            </Link>
          </li>
          <li>
            <Link href="/earth/why-cobalt-is-the-new-oil" className="text-blue-600 hover:underline font-medium">
              Why Cobalt Is the New Oil: The Battery Metal Crunch →
            </Link>
          </li>
          <li>
            <Link href="/earth/news/trump-epa-move-green-paradox" className="text-blue-600 hover:underline font-medium">
              Trump&apos;s EPA Rollback and the Green Paradox →
            </Link>
          </li>
          <li>
            <Link href="/trump/japan-36-billion-us-energy-critical-minerals" className="text-blue-600 hover:underline font-medium">
              Trump Trade Pact: Japan&apos;s $36B Critical Minerals Investment →
            </Link>
          </li>
        </ul>

      </NewsArticle>
    </SEOWrapper>
  );
}
