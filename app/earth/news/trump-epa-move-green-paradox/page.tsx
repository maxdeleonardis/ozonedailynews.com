import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox } from '@/components/NewsArticle';

const SLUG = '/earth/news/trump-epa-move-green-paradox';

export const metadata: Metadata = {
  title: "Trump's EPA Rollback and the Green Paradox: Deep-Sea Mining, Rare Earth Minerals, and the EV Battery Dilemma | ObjectWire",
  description:
    "Rare earth minerals are essential for EV batteries and wind turbines — but mining them from the ocean floor could destroy undiscovered ecosystems. Trump's repeal of Obama-era EPA protections may accelerate that gamble.",
  keywords: [
    'Trump EPA rollback ocean mining 2026',
    'deep sea mining rare earth minerals EV batteries',
    'Obama era environmental policy repeal Trump',
    'rare earth minerals wind turbine battery supply chain',
    'polymetallic nodules deep ocean environmental risk',
    'green energy transition deep sea destruction',
    'Clarion Clipperton Zone rare earth deposits',
    'Trump EPA deregulation fossil fuels environment',
    'electric vehicle battery minerals ocean floor',
    'deep sea mining ecosystem destruction undiscovered species',
    'critical minerals clean energy Trump policy',
    'EPA rule repeal offshore mining 2026',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: "Trump's EPA Move and the Green Paradox: Can We Mine the Deep Sea Without Destroying It?",
    description:
      "The minerals powering your EV battery may come from the world's least-explored ecosystems. And with the Trump administration rolling back Obama-era EPA protections, the race to the ocean floor just got faster.",
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    images: ['/earth/pexels-george-desipris-726478.jpg'],
    authors: ['ObjectWire Editorial'],
    publishedTime: '2026-02-20T09:00:00Z',
    modifiedTime: '2026-02-20T09:00:00Z',
    section: 'Earth & Environment',
    tags: ['Trump', 'EPA', 'Deep Sea Mining', 'Rare Earth Minerals', 'EV Batteries', 'Environment', 'Ocean', 'Climate'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "The Green Paradox: Mining the Ocean Floor to Power Clean Energy — and What Trump's EPA Rollback Changes",
    description:
      'Rare earth minerals are essential for the energy transition. The problem: the richest deposits sit on ocean floors that science has barely touched. Trump just made protecting them harder.',
  },
};

export default function TrumpEPAGreenParadoxPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Trump's EPA Rollback and the Green Paradox: Deep-Sea Mining, Rare Earth Minerals, and the EV Battery Dilemma"
        description="Rare earth minerals are essential for EV batteries and wind turbines — but mining them from the ocean floor could destroy undiscovered ecosystems. Trump's repeal of Obama-era EPA protections may accelerate that gamble."
        author="ObjectWire Editorial"
        publishedTime="2026-02-20T09:00:00Z"
        modifiedTime="2026-02-20T09:00:00Z"
        imageUrl="https://www.objectwire.org/earth/pexels-george-desipris-726478.jpg"
        articleUrl={`https://www.objectwire.org${SLUG}`}
        section="Earth & Environment"
        keywords={[
          'Trump EPA rollback deep sea mining',
          'rare earth minerals EV batteries wind turbines',
          'polymetallic nodules ocean floor ecosystem',
          'Obama era environmental policy repeal',
          'deep sea mining undiscovered species',
          'green energy paradox critical minerals',
        ]}
      />

      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'Earth', item: '/earth' },
              { name: 'News', item: '/earth/news' },
              { name: 'The Green Paradox', item: SLUG },
            ]}
          />
        </div>
      </div>

      <NewsArticle
        title="Trump's EPA Move and the Green Paradox: Deep-Sea Mining, Rare Earth Minerals, and the Future of Clean Energy"
        subtitle="The minerals powering the energy transition sit at the bottom of the ocean — in ecosystems that scientists have barely mapped. The Trump administration just made protecting them harder."
        category="Earth & Environment"
        categoryColor="green"
        topicTag="science"
        publishDate="February 20, 2026"
        readTime="5 min read"
        breaking={false}
        author={{
          name: 'ObjectWire Editorial',
          role: 'Environment & Policy Desk',
        }}
        heroImage={{
          src: '/earth/pexels-george-desipris-726478.jpg',
          alt: 'Deep ocean waves representing the deep sea mining debate',
          caption: 'The deep ocean holds trillions in critical minerals — and ecosystems that science has barely begun to understand.',
          credit: 'George Desipris / Pexels',
        }}
        tags={[
          'Trump', 'EPA', 'Deep Sea Mining', 'Rare Earth Minerals',
          'EV Batteries', 'Wind Turbines', 'Environment', 'Ocean Floor',
          'Obama Era Policy', 'Green Paradox', 'Critical Minerals', 'Clean Energy',
        ]}
      >

        {/* Lede */}
        <p>
          There is a bitter irony at the heart of the clean energy transition. The electric vehicles being hailed as the solution to fossil fuel dependency — and the wind turbines reshaping power grids worldwide — require rare earth minerals and critical metals that are increasingly difficult to source on land. The richest known deposits of cobalt, manganese, nickel, and rare earth elements don&apos;t sit in a mine in Nevada or a pit in the Democratic Republic of Congo. They sit <strong>three to five kilometers below the ocean surface</strong>, scattered across the Pacific seafloor in potato-sized rocks called polymetallic nodules.
        </p>
        <p>
          Now, as the Trump administration moves to repeal a suite of Obama-era EPA environmental protections, the regulatory guardrails that once slowed commercial deep-sea mining are being systematically dismantled. The result is a collision course between the demand for green technology and the potential destruction of the world&apos;s least-understood ecosystems — before science has even had the chance to fully document what lives there.
        </p>

        <HighlightBox type="key-point" color="green">
          <strong>The Green Paradox:</strong> Building the clean energy future requires rare earth minerals. The most accessible deposits are on ocean floors home to undiscovered species. And the EPA rollbacks accelerating access to those deposits could make the environmental cost of &quot;green&quot; energy higher than anyone is accounting for.
        </HighlightBox>

        {/* Section 1 */}
        <h2>Why Rare Earth Minerals Are Non-Negotiable for the Energy Transition</h2>

        <div className="not-prose my-6 relative w-full aspect-video rounded-xl overflow-hidden shadow-md">
          <Image
            src="/earth/pexels-toulouse-3098969.jpg"
            alt="Rare earth mineral deposits critical for clean energy technology"
            fill
            className="object-cover"
          />
          <p className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs px-3 py-1.5">
            Rare earth mineral deposits are the backbone of modern clean energy technology. Credit: Toulouse / Pexels
          </p>
        </div>

        <p>
          The International Energy Agency estimates that a single electric vehicle battery requires roughly <strong>eight kilograms of lithium, 35kg of nickel, and 14kg of cobalt</strong>. Scale that across the hundreds of millions of EVs projected to be on global roads by 2040, and the mineral math becomes staggering. Wind turbines are similarly demanding — offshore wind farms require large quantities of <strong>neodymium and dysprosium</strong> for their permanent magnets, rare earth elements with limited terrestrial supply chains.
        </p>
        <p>
          Current land-based mining operations are already struggling to meet demand. Reserve depletion, geopolitical concentration (over 60% of cobalt is mined in the DRC under conditions that have drawn widespread human rights scrutiny), and permitting delays have led major EV manufacturers and governments to look elsewhere. Increasingly, they are looking down — at the ocean floor.
        </p>
        <p>
          As explored in ObjectWire&apos;s deep-dive on{' '}
          <Link href="/finance/articles/the-trillion-dollar-treasure-trove-in-the-deep-sea" className="text-blue-600 font-medium hover:underline">
            polymetallic nodules and the deep-sea mineral frontier
          </Link>
          , the Clarion-Clipperton Zone (CCZ) — a 4.5 million square kilometer stretch of the Pacific — holds nodule deposits estimated to contain more nickel, cobalt, and manganese than all terrestrial reserves combined.
        </p>

        {/* Section 2 */}
        <h2>What Deep-Sea Ocean Floor Mining Could Destroy — Before We Even Know It Exists</h2>

        <div className="not-prose my-6 grid grid-cols-2 gap-4">
          <div className="relative aspect-square rounded-xl overflow-hidden shadow-md">
            <Image
              src="/earth/pexels-hungtran-3699436.jpg"
              alt="Ocean ecosystem threatened by deep sea mining"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square rounded-xl overflow-hidden shadow-md">
            <Image
              src="/earth/pexels-sliceisop-1894353.jpg"
              alt="Deep sea environment at risk from mineral extraction"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <p className="text-xs text-gray-500 -mt-2 mb-4 italic">Left: Ocean ecosystems face existential risk from industrial-scale nodule harvesting. Right: The sediment plumes created by seabed mining can smother filter-feeding organisms across vast distances. Credit: Hung Tran / Pexels; Sliceisop / Pexels</p>

        <p>
          The problem is not simply that extracting these minerals is technically difficult. It is that the deep-sea ecosystems surrounding polymetallic nodule fields may be the most biodiverse — and the most fragile — environments on the planet. Scientists estimate that less than <strong>20% of the ocean floor has been mapped at high resolution</strong>. In the CCZ alone, researchers have identified hundreds of species new to science in limited survey areas. Most of the zone remains entirely unexplored.
        </p>
        <p>
          Commercial nodule harvesting operates by dragging collector vehicles across the seabed, vacuuming up nodules along with the sediment layer beneath them. The sediment plume that results can travel hundreds of kilometers, settling on and smothering filter-feeding organisms — including corals, sponges, and sea cucumbers that may take centuries to recover, if they recover at all. For species that evolved over millions of years around individual nodule formations, industrial harvesting is not disruption. It is extinction.
        </p>
        <p>
          The critical — and deeply uncomfortable — scientific reality is this: <strong>we don&apos;t know what we&apos;d be destroying</strong>. Peer-reviewed studies from MBARI and the Natural History Museum have consistently found that disturbed deep-sea test sites from 1980s mining experiments still show no meaningful ecological recovery 40 years later.
        </p>

        {/* Section 3 */}
        <h2>Trump's EPA Rollbacks: What Obama-Era Ocean Protections Are Being Repealed</h2>
        <p>
          Against this scientific backdrop, the Trump administration has moved aggressively to repeal environmental protections established under President Obama. The rollbacks are wide-ranging, but several have direct implications for deep-sea and offshore resource extraction:
        </p>
        <ul>
          <li><strong>Waters of the United States (WOTUS) rule revision</strong> — The Obama EPA&apos;s 2015 Clean Water Rule, which extended federal oversight to wetlands, tributaries, and offshore transition zones connected to navigable waters, has been substantially scaled back. The effect is to reduce the regulatory perimeter around ocean and coastal extraction activities.</li>
          <li><strong>National Environmental Policy Act (NEPA) streamlining</strong> — Executive orders have cut environmental review timelines for resource extraction permitting, limiting the window for scientific assessment of deep-sea mining impacts before licenses are granted.</li>
          <li><strong>Offshore mineral leasing expansion</strong> — The administration has signaled intent to accelerate offshore leasing, including in areas of the Exclusive Economic Zone (EEZ) that were previously off-limits pending further environmental study.</li>
        </ul>
        <p>
          The practical result: projects that might have spent years in environmental review under the Obama framework can now move faster. For deep-sea mining operators, that is a competitive accelerant. For ocean biologists, it is an alarm. See also:{' '}
          <Link href="/trump/japan-36-billion-us-energy-critical-minerals" className="text-blue-600 font-medium hover:underline">
            how Trump&apos;s trade framework is reshaping critical mineral supply chains with Japan&apos;s $36 billion investment deal
          </Link>
          .
        </p>

        {/* Video Embed */}
        <h2>Watch: The Green Dilemma — EV Batteries and the Deep Sea</h2>
        <div className="not-prose my-6">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/VIXbKptKSs4"
              title="The Green Dilemma: EV Batteries and the Deep Sea"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <p className="text-xs text-gray-500 mt-2 italic">
            The green dilemma: how the push for EV batteries and clean energy is driving the race to the deep sea — and what&apos;s at stake. Via YouTube.
          </p>
        </div>

        {/* Section 4 */}
        <h2>The Real Cost of Clean Energy: A Policy Contradiction No One Wants to Confront</h2>
        <p>
          The Trump administration&apos;s position on deep-sea resources is coherent on its own terms: accelerating domestic and allied critical mineral access reduces dependence on China, which currently processes over 80% of the world&apos;s rare earth elements. That strategic logic is legitimate, and it is the same logic driving Japan&apos;s multi-billion dollar investment in US critical mineral supply chains.
        </p>
        <p>
          But the environmental accounting rarely follows. The clean energy transition is being marketed to the public as a solution to ecological destruction — yet the mineral supply chains underpinning it may be generating a different category of ecological destruction, one hidden from view three miles below the surface of the Pacific. Removing the regulatory friction that once forced those tradeoffs into the open does not make the tradeoffs disappear. It just makes them invisible.
        </p>
        <p>
          The question that policymakers, automakers, and consumers are all quietly avoiding is a simple one: <em>if the price of a zero-emissions vehicle is a permanently strip-mined ocean floor full of species that never got a scientific name — is that still green?</em>
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
            <Link href="/trump/japan-36-billion-us-energy-critical-minerals" className="text-blue-600 hover:underline font-medium">
              Trump Trade Pact: Japan Commits $36 Billion to US Energy and Critical Minerals →
            </Link>
          </li>
          <li>
            <Link href="/trump" className="text-blue-600 hover:underline font-medium">
              Trump Policy Hub — Latest coverage →
            </Link>
          </li>
          <li>
            <Link href="/news" className="text-blue-600 hover:underline font-medium">
              ObjectWire News — Breaking stories →
            </Link>
          </li>
        </ul>

      </NewsArticle>
    </SEOWrapper>
  );
}
