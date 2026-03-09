import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox } from '@/components/NewsArticle';

const SLUG = '/earth/why-cobalt-is-the-new-oil';

export const metadata: Metadata = {
  title: "Why Cobalt Is the New Oil: The Battery Metal Crunch Reshaping Global Power | ObjectWire",
  description:
    "Cobalt is the essential ingredient in every EV battery — and nearly 70% of it comes from a single conflict-torn country. As demand explodes and ethics scrutiny deepens, the deep sea is emerging as an alternative no one is fully ready for.",
  keywords: [
    'cobalt new oil battery metal 2026',
    'DRC cobalt mining human rights issues',
    'cobalt supply chain EV battery critical mineral',
    'deep sea cobalt alternative polymetallic nodules',
    'cobalt shortage electric vehicle supply chain',
    'artisanal cobalt mining Congo child labor',
    'battery metal crunch clean energy transition',
    'cobalt price forecast 2026 demand',
    'ocean floor cobalt deposits Clarion Clipperton Zone',
    'ethical cobalt sourcing EV manufacturers',
    'critical mineral supply chain geopolitics',
    'cobalt dependence China processing refining',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: "Why Cobalt Is the New Oil: The Battery Metal Crunch Reshaping Global Power",
    description:
      "Nearly 70% of the world's cobalt comes from mines in the DRC — many linked to child labor and environmental destruction. The deep sea offers an alternative. The tradeoffs are just as complicated.",
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    images: ['/earth/pexels-george-desipris-726478.jpg'],
    authors: ['ObjectWire Editorial'],
    publishedTime: '2026-02-20T10:30:00Z',
    modifiedTime: '2026-02-20T10:30:00Z',
    section: 'Earth & Environment',
    tags: ['Cobalt', 'EV Batteries', 'DRC', 'Deep Sea Mining', 'Critical Minerals', 'Supply Chain', 'Clean Energy'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Cobalt Is the New Oil — and the DRC Is the New Middle East",
    description:
      "One country supplies 70% of the cobalt powering every EV on the road. The human cost is staggering. The deep-sea alternative comes with its own reckoning.",
  },
};

export default function CobaltNewOilPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Why Cobalt Is the New Oil: The Battery Metal Crunch Reshaping Global Power"
        description="Cobalt is the essential ingredient in every EV battery — and nearly 70% of it comes from a single conflict-torn country. As demand explodes and ethics scrutiny deepens, the deep sea is emerging as an alternative no one is fully ready for."
        author="ObjectWire Editorial"
        publishedTime="2026-02-20T10:30:00Z"
        modifiedTime="2026-02-20T10:30:00Z"
        imageUrl="https://www.objectwire.org/earth/pexels-george-desipris-726478.jpg"
        articleUrl={`https://www.objectwire.org${SLUG}`}
        section="Earth & Environment"
        keywords={[
          'cobalt new oil battery metal',
          'DRC cobalt mining human rights',
          'deep sea cobalt alternative',
          'EV battery critical mineral supply chain',
          'polymetallic nodules ocean cobalt',
          'cobalt shortage clean energy transition',
        ]}
      />

      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'Earth', item: '/earth' },
              { name: 'Why Cobalt Is the New Oil', item: SLUG },
            ]}
          />
        </div>
      </div>

      <NewsArticle
        title='The "Battery Metal" Crunch: Why Cobalt Is the New Oil'
        subtitle="Nearly 70% of global cobalt supply flows through one conflict-ridden country. The clean energy revolution is dangerously hooked on it — and the alternatives come with their own costs."
        category="Earth & Environment"
        categoryColor="green"
        topicTag="science"
        publishDate="February 20, 2026"
        readTime="4 min read"
        author={{
          name: 'ObjectWire Editorial',
          role: 'Environment & Policy Desk',
        }}
        heroImage={{
          src: '/earth/pexels-toulouse-3098969.jpg',
          alt: 'Raw mineral deposits representing the cobalt supply crisis',
          caption: 'Cobalt has become the defining resource constraint of the clean energy era — a new kind of oil dependency hiding inside every EV battery.',
          credit: 'Toulouse / Pexels',
        }}
        tags={[
          'Cobalt', 'EV Batteries', 'DRC', 'Deep Sea Mining', 'Critical Minerals',
          'Supply Chain', 'Clean Energy', 'Human Rights', 'Battery Metal', 'Geopolitics',
        ]}
      >

        {/* Lede */}
        <p>
          Fifty years ago, the global economy ran on oil. Wars were fought over it. Alliances were built around it. Regimes survived — or collapsed — based on who controlled it. Today, a soft, silver-grey metal most people have never heard of is quietly assuming the same role. <strong>Cobalt is the new oil.</strong> And the world is not remotely prepared for what that means.
        </p>
        <p>
          Every lithium-ion battery in every electric vehicle, every grid-scale energy storage system, and virtually every smartphone contains cobalt. There is no mainstream substitute at scale. And <strong>nearly 70% of the world&apos;s cobalt supply comes from a single country</strong> — the Democratic Republic of Congo — where mining conditions have drawn some of the most serious human rights scrutiny of any supply chain on earth.
        </p>

        <HighlightBox type="stat" color="green">
          <strong>~70%</strong> of global cobalt supply originates in the DRC. China controls the refining of roughly <strong>80%</strong> of that raw material — giving Beijing effective dominance over the primary input for every EV battery manufactured in the West.
        </HighlightBox>

        {/* Section 1 */}
        <h2>The DRC Cobalt Crisis: Human Rights at the Heart of Clean Energy</h2>

        <p>
          The Katanga mining province in southern DRC produces more cobalt than any other region on the planet. It also produces some of the most extensively documented supply chain abuses in the minerals industry. A 2023 Amnesty International investigation, following years of earlier reporting by the Washington Post and UNICEF, confirmed that <strong>artisanal and small-scale mining (ASM) in the region still involves child labor</strong> — with children as young as seven working in hand-dug tunnels without protective equipment, earning less than $2 a day.
        </p>
        <p>
          Large industrial mines operated by multinational companies have improved formal labor conditions, but the ASM sector — which accounts for a significant portion of total output — remains nearly impossible to trace with confidence through existing supply chain auditing systems. Apple, Tesla, BMW, and Samsung have each faced pressure over cobalt sourcing. Most have committed to responsible sourcing frameworks. The gap between the commitment and the reality remains wide.
        </p>
        <p>
          The geopolitical dimension compounds the problem. China has over the past decade systematically acquired controlling stakes in DRC&apos;s largest cobalt operations. By controlling both the mining and the downstream refining infrastructure, Beijing holds leverage over the battery supply chains of every major Western automaker — a dependency that US and EU trade policy is now scrambling to reduce.
        </p>

        {/* Section 2 */}
        <h2>Deep-Sea Cobalt: A Cleaner Source — With Its Own Reckoning</h2>

        <div className="not-prose my-6 relative w-full aspect-video rounded-xl overflow-hidden shadow-md">
          <Image
            src="/earth/pexels-hungtran-3699436.jpg"
            alt="Ocean depths holding polymetallic nodule cobalt deposits"
            fill
            className="object-cover"
          />
          <p className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs px-3 py-1.5">
            The ocean floor holds cobalt deposits that dwarf known terrestrial reserves — untouched by labor exploitation, but home to ecosystems science has barely mapped. Credit: Hung Tran / Pexels
          </p>
        </div>

        <p>
          The deep-sea floor offers an apparent escape from both the geopolitical dependency and the human rights catastrophe of DRC cobalt. Polymetallic nodules — rock formations scattered across millions of square kilometers of the Pacific seafloor — contain cobalt concentrations comparable to, and in some deposits exceeding, the richest terrestrial seams. No child labor. No Chinese-controlled concessions. No artisanal tunnel collapses.
        </p>
        <p>
          That social calculus is real. But as covered in ObjectWire&apos;s analysis of{' '}
          <Link href="/finance/articles/the-trillion-dollar-treasure-trove-in-the-deep-sea" className="text-blue-600 font-medium hover:underline">
            the trillion-dollar polymetallic nodule deposits
          </Link>
          , the environmental costs of deep-sea extraction are their own category of serious. Industrial seabed harvesting destroys seafloor habitat that may take centuries to recover — assuming it recovers at all — and generates sediment plumes capable of smothering filter-feeding organisms across hundreds of kilometers. The species living in these ecosystems have not been fully identified. We may be trading one form of destruction for another.
        </p>

        {/* Section 3 */}
        <h2>Why the Cobalt Crunch Is Getting Worse, Not Better</h2>
        <p>
          Global EV sales are accelerating. The IEA projects that by 2030, the world will need <strong>three to four times the current cobalt supply</strong> to meet battery demand alone — before accounting for grid storage and aerospace applications. Recycling programs are improving but are nowhere near the scale needed to close that gap. Cobalt-reduced battery chemistries (like LFP) are gaining ground in lower-performance applications, but high-density batteries for long-range vehicles continue to depend on cobalt-rich cathode formulations.
        </p>
        <p>
          Meanwhile, the regulatory environment in the US is shifting. As{' '}
          <Link href="/earth/news/trump-epa-move-green-paradox" className="text-blue-600 font-medium hover:underline">
            ObjectWire reported
          </Link>
          , the Trump administration&apos;s rollback of Obama-era EPA protections has accelerated offshore and deep-sea extraction permitting timelines — compressing the window for scientific assessment of exactly the deep-sea ecosystems that hold the most cobalt. The race to the ocean floor is not hypothetical anymore. It is a policy trajectory.
        </p>

        {/* Closing */}
        <h2>The Uncomfortable Bottom Line</h2>
        <p>
          The clean energy transition has a cobalt problem that no press release about responsible sourcing fully resolves. The DRC option carries an undeniable human cost that supply chain audits only partially address. The deep-sea option carries an ecological cost that science is not yet equipped to fully quantify. And demand is rising faster than either alternative can scale.
        </p>
        <p>
          Cobalt is the new oil — not just because the world runs on it, but because the pursuit of it generates exactly the same category of moral compromises that oil extraction always did. The only difference is that this time, the resource is powering vehicles we call clean.
        </p>

        {/* Related */}
        <h2>Related Coverage</h2>
        <ul>
          <li>
            <Link href="/finance/articles/the-trillion-dollar-treasure-trove-in-the-deep-sea" className="text-blue-600 hover:underline font-medium">
              The Trillion-Dollar Treasure: Polymetallic Nodules and the Deep-Sea Mineral Frontier →
            </Link>
          </li>
          <li>
            <Link href="/earth/news/trump-epa-move-green-paradox" className="text-blue-600 hover:underline font-medium">
              Trump&apos;s EPA Rollback and the Green Paradox: Deep-Sea Mining vs. Undiscovered Ecosystems →
            </Link>
          </li>
          <li>
            <Link href="/trump/japan-36-billion-us-energy-critical-minerals" className="text-blue-600 hover:underline font-medium">
              Trump Trade Pact: Japan Commits $36B to US Energy and Critical Minerals →
            </Link>
          </li>
          <li>
            <Link href="/news" className="text-blue-600 hover:underline font-medium">
              ObjectWire News Hub →
            </Link>
          </li>
        </ul>

      </NewsArticle>
    </SEOWrapper>
  );
}
