import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox } from '@/components/NewsArticle';

const SLUG = '/nvidia/news/nvidia-4-billion-photonics-lumentum-coherent-ai-bottleneck';
const AUTHOR_NAME = 'ObjectWire Tech Desk';
const PUBLISH_DATE = '2026-03-06';
const PUBLISH_ISO = '2026-03-06T09:00:00Z';
const CANONICAL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = 'https://www.objectwire.org/images/nvidia-photonics-investment.jpg';
const IMAGE_WIDTH = 1200;
const IMAGE_HEIGHT = 675;
const IMAGE_ALT = 'Nvidia silicon photonics chip with laser interconnects in a data center rack';

// ─── Metadata (Google Search + OG + Twitter) ──────────────────────────────────
export const metadata: Metadata = {
  title: 'Nvidia Invests $4 Billion in Photonics — Lumentum & Coherent Deal to Solve AI Bottlenecks | ObjectWire',
  description:
    'Nvidia announced a $4 billion investment into silicon photonics leaders Lumentum and Coherent on March 2, 2026, aiming to replace copper interconnects with light-based data links to eliminate AI data center bottlenecks.',
  keywords: [
    'Nvidia photonics investment $4 billion',
    'Nvidia Lumentum Coherent deal 2026',
    'silicon photonics AI data center',
    'Nvidia copper interconnect bottleneck',
    'co-packaged optics Nvidia GPUs',
    'Lumentum 1.6T laser Nvidia',
    'Coherent Nvidia photonics partnership',
    'AI data center optical interconnect',
    'Nvidia scale-out networking photonics',
    'optical transceiver GPU data center',
    'Nvidia $2 billion Lumentum investment',
    'Nvidia $2 billion Coherent investment',
    'silicon photonics semiconductor 2026',
    'AI bottleneck copper vs fiber optics',
    'Nvidia AI factory networking',
  ],
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    title: 'Nvidia Pours $4B into Photonics to Shatter AI Bottlenecks — Lumentum & Coherent',
    description:
      'Nvidia splits $4 billion equally between Lumentum and Coherent, securing capacity rights for next-gen 1.6T lasers and co-packaged optics to replace copper in AI data centers.',
    type: 'article',
    url: CANONICAL,
    siteName: 'ObjectWire',
    authors: [AUTHOR_NAME],
    publishedTime: PUBLISH_ISO,
    modifiedTime: PUBLISH_ISO,
    section: 'Technology',
    tags: [
      'Nvidia', 'Photonics', 'Lumentum', 'Coherent',
      'AI', 'Data Centers', 'Silicon Photonics', 'Semiconductors',
    ],
    images: [
      {
        url: IMAGE_URL,
        width: IMAGE_WIDTH,
        height: IMAGE_HEIGHT,
        alt: IMAGE_ALT,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nvidia Invests $4B in Photonics — Light Replaces Copper in AI Data Centers',
    description:
      '$2B to Lumentum, $2B to Coherent. Nvidia locks in capacity rights for 1.6T lasers and co-packaged optics as copper hits its physical wall.',
  },
};

// ─── Deal breakdown ───────────────────────────────────────────────────────────
const dealBreakdown = [
  {
    company: 'Lumentum',
    amount: '$2 Billion',
    focus: '1.6T lasers, co-packaged optics modules',
    extra: 'New U.S. fabrication facility announced',
    color: 'bg-green-500',
  },
  {
    company: 'Coherent',
    amount: '$2 Billion',
    focus: '1.6T transceivers, advanced optical components',
    extra: 'Multi-billion-dollar purchase commitments secured',
    color: 'bg-blue-500',
  },
];

// ─── Timeline ─────────────────────────────────────────────────────────────────
const timeline = [
  {
    date: '2024',
    event: 'Nvidia begins evaluating optical interconnect partners as GPU cluster sizes exceed 10,000 units and copper latency becomes measurable.',
    color: 'border-gray-500 bg-gray-50',
    dot: 'bg-gray-500',
  },
  {
    date: 'Q3 2025',
    event: 'Industry reports surface showing copper interconnects consume up to 30% of total rack power in large-scale AI training runs.',
    color: 'border-orange-500 bg-orange-50',
    dot: 'bg-orange-500',
  },
  {
    date: 'Jan 2026',
    event: 'Nvidia enters exclusive negotiations with Lumentum and Coherent for capacity rights on next-gen 1.6T optical components.',
    color: 'border-blue-500 bg-blue-50',
    dot: 'bg-blue-500',
  },
  {
    date: 'Mar 2, 2026',
    event: 'Nvidia announces $4 billion investment — $2B each to Lumentum and Coherent — with multi-billion-dollar purchase commitments and first-in-line capacity rights.',
    color: 'border-green-500 bg-green-50',
    dot: 'bg-green-500',
  },
];

// ─── Copper vs. Photonics comparison ──────────────────────────────────────────
const copperVsPhotonics = [
  { metric: 'Bandwidth per link', copper: '100–400 Gbps', photonics: '800 Gbps – 1.6 Tbps' },
  { metric: 'Max distance (no repeater)', copper: '~5 meters (high-speed)', photonics: '2+ km (single-mode)' },
  { metric: 'Power per Gbps', copper: '~15 pJ/bit', photonics: '~5 pJ/bit' },
  { metric: 'Heat generation', copper: 'High (resistive)', photonics: 'Low (photonic)' },
  { metric: 'Cross-talk / EMI', copper: 'Significant at scale', photonics: 'Near zero' },
  { metric: 'Scale-out suitability', copper: 'Limited (rack-level)', photonics: 'Excellent (cross-DC)' },
];

export default function NvidiaPhotonicsInvestmentPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Nvidia Invests $4 Billion in Photonics — Lumentum & Coherent Deal to Solve AI Bottlenecks"
        description="Nvidia announced a $4 billion investment into silicon photonics leaders Lumentum and Coherent on March 2, 2026, aiming to replace copper interconnects with light-based data links to eliminate AI data center bottlenecks."
        author={AUTHOR_NAME}
        authorUrl="https://www.objectwire.org/team"
        publishedTime={PUBLISH_ISO}
        modifiedTime={PUBLISH_ISO}
        imageUrl={IMAGE_URL}
        articleUrl={CANONICAL}
        section="Technology"
        keywords={[
          'Nvidia photonics', 'silicon photonics', 'Lumentum', 'Coherent',
          'AI data center', 'co-packaged optics', '1.6T laser', 'GPU interconnect',
          'copper bottleneck', 'optical transceiver',
        ]}
      />

      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'Nvidia', item: '/nvidia' },
              { name: 'News', item: '/nvidia/news' },
              { name: 'Nvidia $4B Photonics Investment', item: SLUG },
            ]}
          />
        </div>
      </div>

      <NewsArticle
        title="Nvidia Pours $4 Billion into Photonics to Shatter AI Bottlenecks"
        subtitle="$2 billion to Lumentum, $2 billion to Coherent — the chip giant is pre-booking the future of light-based data transmission to keep its AI factories from grinding to a halt."
        category="TECH BREAKING"
        categoryColor="green"
        topicTag="technology"
        publishDate="March 2, 2026"
        readTime="7 min read"
        breaking
        author={{
          name: AUTHOR_NAME,
          role: 'Technology & Semiconductors',
        }}
        tags={[
          'Nvidia',
          'Photonics',
          'Lumentum',
          'Coherent',
          'Silicon Photonics',
          'AI Data Centers',
          'Co-Packaged Optics',
          'GPU Interconnect',
          'Semiconductors',
        ]}
        slug="nvidia-4-billion-photonics-lumentum-coherent-ai-bottleneck"
        url={SLUG}
      >
        {/* ── THE LEAD ────────────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            The Lead: Moving Beyond Copper
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In a move that signals a structural shift in the AI industry, <strong>Nvidia announced on Monday, March 2, 2026</strong>, that it is investing a staggering <strong>$4 billion</strong> into the silicon photonics sector. The chip giant is splitting the investment equally, injecting <strong>$2 billion each</strong> into industry leaders <strong>Lumentum</strong> and <strong>Coherent</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The deal is not just a financial bet — it is a strategic land grab for the "arteries" of the AI revolution. As GPUs become faster, the copper wires connecting them have become a congested, power-hungry bottleneck. Nvidia is now pre-booking the future of light-based data transmission to ensure its AI "factories" do not grind to a halt.
          </p>

          <HighlightBox type="stat" color="green">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-green-400">$4B</div>
                <div className="text-sm text-gray-300">Total Investment</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400">$2B</div>
                <div className="text-sm text-gray-300">To Lumentum</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400">$2B</div>
                <div className="text-sm text-gray-300">To Coherent</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400">1.6T</div>
                <div className="text-sm text-gray-300">Target Laser Speed</div>
              </div>
            </div>
          </HighlightBox>
        </section>

        {/* ── DEAL BREAKDOWN ──────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Deal Structure: $2B + $2B + Capacity Rights
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Beyond the $4 billion cash injection, Nvidia has signed <strong>multi-billion-dollar purchase commitments</strong> and secured <strong>capacity rights</strong>. This effectively ensures that when Lumentum and Coherent produce their next-generation 1.6T lasers, Nvidia is first in line — leaving competitors like AMD and Intel to scramble for what remains.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            {dealBreakdown.map((deal) => (
              <div key={deal.company} className="bg-gray-900 rounded-xl border border-gray-700 p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-3 h-3 rounded-full ${deal.color}`} />
                  <h3 className="text-lg font-bold text-white">{deal.company}</h3>
                  <span className="ml-auto text-xl font-bold text-green-400">{deal.amount}</span>
                </div>
                <p className="text-gray-300 text-sm mb-2"><strong>Focus:</strong> {deal.focus}</p>
                <p className="text-gray-400 text-sm">{deal.extra}</p>
              </div>
            ))}
          </div>

          <HighlightBox type="key-point" color="blue">
            <strong>Domestic Boost:</strong> Both companies have committed to expanding U.S.-based manufacturing, with Lumentum specifically announcing plans for a new state-of-the-art fabrication facility to support the partnership.
          </HighlightBox>
        </section>

        {/* ── WHY OPTICS IS THE NEW GPU ───────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Why Optics Is the New "GPU"
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Industry analysts are calling this the "structural admission that the networking wall is real." For years, Nvidia has relied on copper interconnects for its rack-scale systems. But as clusters grow to include <strong>hundreds of thousands of GPUs</strong>, copper has hit a physical wall in terms of distance, bandwidth, and heat.
          </p>

          <HighlightBox type="quote" color="purple">
            "Photonics is to the data center what the highway system was to the American economy — the infrastructure layer that unlocks everything else."
            <br />
            <span className="text-sm text-gray-400 mt-2 block">— Industry analyst on the Nvidia deal</span>
          </HighlightBox>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Scale-Out vs. Scale-Up
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            While copper still works for short distances within a single rack (scale-up), the <strong>scale-out networks</strong> that stitch multiple data centers together now require advanced optical links to maintain performance. As AI training jobs span thousands of GPUs across multiple buildings — sometimes across campuses — photonics becomes the only viable option.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Co-Packaged Optics (CPO): Light on the Chip
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The ultimate goal is <strong>co-packaged optics</strong> — moving the optical transceiver directly onto the chip package itself. By integrating laser-driven data links into the switch (and eventually the GPU), Nvidia can slash power consumption by eliminating bulky pluggable modules that currently sit at the front of every switch.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            CPO is expected to reduce interconnect power by up to <strong>60%</strong> compared to current pluggable transceiver designs, while simultaneously increasing bandwidth density by an order of magnitude.
          </p>
        </section>

        {/* ── COPPER VS PHOTONICS TABLE ───────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Copper vs. Photonics: Head-to-Head
          </h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border border-gray-700 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Metric</th>
                  <th className="px-4 py-3 text-left font-semibold">Copper</th>
                  <th className="px-4 py-3 text-left font-semibold">Photonics</th>
                </tr>
              </thead>
              <tbody>
                {copperVsPhotonics.map((row, i) => (
                  <tr key={row.metric} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-4 py-3 font-medium text-gray-900">{row.metric}</td>
                    <td className="px-4 py-3 text-red-600">{row.copper}</td>
                    <td className="px-4 py-3 text-green-600 font-semibold">{row.photonics}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── TIMELINE ────────────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Timeline: How We Got Here
          </h2>
          <div className="space-y-4 my-6">
            {timeline.map((entry) => (
              <div key={entry.date} className={`border-l-4 ${entry.color} rounded-r-lg p-4`}>
                <div className="flex items-center gap-2 mb-1">
                  <div className={`w-2.5 h-2.5 rounded-full ${entry.dot}`} />
                  <span className="font-bold text-gray-900 text-sm">{entry.date}</span>
                </div>
                <p className="text-gray-700 text-sm">{entry.event}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── COMPETITIVE IMPLICATIONS ────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Competitive Implications: AMD, Intel Left Scrambling
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            By locking in capacity rights with both Lumentum and Coherent, Nvidia has effectively cornered a significant portion of the global 1.6T optical component supply chain. Competitors face a critical question: where will they source their photonics?
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div className="bg-gray-900 rounded-xl border border-gray-700 p-4">
              <h3 className="text-lg font-bold text-green-400 mb-2">Nvidia</h3>
              <p className="text-gray-300 text-sm">First-in-line capacity from the two largest photonics suppliers. Multi-year purchase commitments lock supply.</p>
            </div>
            <div className="bg-gray-900 rounded-xl border border-gray-700 p-4">
              <h3 className="text-lg font-bold text-red-400 mb-2">AMD</h3>
              <p className="text-gray-300 text-sm">Must find alternative suppliers or negotiate for remaining Lumentum/Coherent capacity at higher prices and longer lead times.</p>
            </div>
            <div className="bg-gray-900 rounded-xl border border-gray-700 p-4">
              <h3 className="text-lg font-bold text-blue-400 mb-2">Intel</h3>
              <p className="text-gray-300 text-sm">Has internal silicon photonics R&D but lacks the scale of Lumentum/Coherent. May accelerate in-house production or seek M&A.</p>
            </div>
          </div>

          <HighlightBox type="key-point" color="orange">
            <strong>Supply Chain Lock-In:</strong> Nvidia&apos;s capacity rights mean the company does not just get priority pricing — it gets priority access to production lines. In a market where lead times for 1.6T components stretch 12–18 months, this is a decisive advantage.
          </HighlightBox>
        </section>

        {/* ── WHAT THIS MEANS FOR AI ──────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            What This Means for AI Training at Scale
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The $4 billion investment is ultimately about removing the last physical constraint on scaling AI training. Today&apos;s largest models — GPT-5-class systems with trillions of parameters — require clusters of 100,000+ GPUs working in lockstep. The interconnect between those GPUs determines how fast the model trains.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            With copper, cross-rack communication adds latency and consumes up to <strong>30% of total rack power</strong>. Photonics cuts that power draw dramatically while enabling <strong>4× higher bandwidth</strong> per link. The net effect: the same training job finishes faster, at lower cost, with less heat to manage.
          </p>

          <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl border border-green-700/50 p-5 my-6">
            <h3 className="text-lg font-bold text-green-400 mb-3">By the Numbers</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-xl font-bold text-white">30%</div>
                <div className="text-xs text-gray-400">Rack power consumed by copper interconnects</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white">4×</div>
                <div className="text-xs text-gray-400">Bandwidth increase with 1.6T photonics</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white">60%</div>
                <div className="text-xs text-gray-400">Power reduction via co-packaged optics</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white">100K+</div>
                <div className="text-xs text-gray-400">GPUs in largest training clusters</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white">2+ km</div>
                <div className="text-xs text-gray-400">Optical link range (vs. 5m copper)</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white">~5 pJ/bit</div>
                <div className="text-xs text-gray-400">Photonics power efficiency</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── THE BIGGER PICTURE ──────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            The Bigger Picture: Nvidia as a Systems Company
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            This investment underscores Nvidia&apos;s transformation from a chip company into a <strong>full-stack AI infrastructure provider</strong>. With GPUs (Blackwell), networking (Spectrum-X, InfiniBand), software (CUDA, NeMo), and now optical interconnects, Nvidia controls every layer of the AI data center.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Jensen Huang has repeatedly described Nvidia&apos;s vision as building "AI factories" — purpose-built facilities that produce intelligence the way power plants produce electricity. Photonics is the wiring inside those factories.
          </p>

          <HighlightBox type="quote" color="blue">
            "We are not a GPU company. We are an accelerated computing company. And the network is the computer."
            <br />
            <span className="text-sm text-gray-400 mt-2 block">— Jensen Huang, Nvidia CEO</span>
          </HighlightBox>
        </section>

        {/* ── WHAT TO WATCH ───────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            What to Watch Next
          </h2>
          <ul className="space-y-3 my-4">
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1">▸</span>
              <span className="text-gray-700"><strong>GTC 2026 (March):</strong> Nvidia is expected to showcase early 1.6T optical demo hardware and reveal its CPO roadmap at the annual GPU Technology Conference.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1">▸</span>
              <span className="text-gray-700"><strong>Lumentum Fab Announcement:</strong> Location and timeline for the new U.S. fabrication facility — expected Q2 2026.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1">▸</span>
              <span className="text-gray-700"><strong>AMD / Intel Response:</strong> Whether competitors accelerate their own photonics strategies through acquisitions or partnerships.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1">▸</span>
              <span className="text-gray-700"><strong>Coherent Earnings (Q2):</strong> Financial impact of the Nvidia deal on Coherent&apos;s guidance and capacity expansion plans.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1">▸</span>
              <span className="text-gray-700"><strong>Hyperscaler Adoption:</strong> Whether Microsoft Azure, Google Cloud, and AWS follow Nvidia&apos;s lead with their own massive photonics investments.</span>
            </li>
          </ul>
        </section>

        {/* ── SOURCES ─────────────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Sources &amp; Methodology
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            This report is based on Nvidia&apos;s official announcement dated March 2, 2026, supplemented by filings from Lumentum Holdings Inc. and Coherent Corp., analyst notes from major investment banks, and interviews with industry experts in silicon photonics and data center networking. ObjectWire independently verified the investment figures and capacity commitment terms.
          </p>
        </section>

        {/* ── INTERLINKS ──────────────────────────────────────────────────── */}
        <section className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Coverage</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/nvidia" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <span className="text-xs font-semibold text-green-600 uppercase">Hub</span>
              <h3 className="font-semibold text-gray-900 mt-1">Nvidia Coverage</h3>
              <p className="text-sm text-gray-600 mt-1">All ObjectWire reporting on Nvidia — GPUs, AI hardware, and data center strategy.</p>
            </Link>
            <Link href="/nvidia/news/JensenHuang-AI-Agent-Will-Boost-Enterprise-Software-Value" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <span className="text-xs font-semibold text-green-600 uppercase">Nvidia</span>
              <h3 className="font-semibold text-gray-900 mt-1">Jensen Huang: AI Agents Will Boost Enterprise Software Value</h3>
              <p className="text-sm text-gray-600 mt-1">Nvidia CEO on the next wave of AI-driven enterprise transformation.</p>
            </Link>
            <Link href="/nvidia/news/qualcomm-nvidia-6g-coalitions-mwc-2026" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <span className="text-xs font-semibold text-green-600 uppercase">Nvidia</span>
              <h3 className="font-semibold text-gray-900 mt-1">Qualcomm & Nvidia 6G Coalitions at MWC 2026</h3>
              <p className="text-sm text-gray-600 mt-1">How Nvidia and Qualcomm are shaping the future of 6G infrastructure.</p>
            </Link>
            <Link href="/nvidia/nvidia-groq-lpu-inference-platform-gtc-2026-20-billion-licensing-deal" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <span className="text-xs font-semibold text-green-600 uppercase">Nvidia</span>
              <h3 className="font-semibold text-gray-900 mt-1">Nvidia & Groq LPU Inference Platform — GTC 2026</h3>
              <p className="text-sm text-gray-600 mt-1">The $20 billion licensing deal reshaping AI inference hardware.</p>
            </Link>
            <Link href="/neurophos-ai-hardware-startup" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <span className="text-xs font-semibold text-green-600 uppercase">AI Hardware</span>
              <h3 className="font-semibold text-gray-900 mt-1">Neurophos: AI Hardware Startup</h3>
              <p className="text-sm text-gray-600 mt-1">The photonics-based AI chip startup challenging conventional GPU architectures.</p>
            </Link>
            <Link href="/tech" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <span className="text-xs font-semibold text-green-600 uppercase">Tech</span>
              <h3 className="font-semibold text-gray-900 mt-1">Technology Hub</h3>
              <p className="text-sm text-gray-600 mt-1">Breaking tech news, AI coverage, and semiconductor industry updates.</p>
            </Link>
          </div>
        </section>
      </NewsArticle>
    </SEOWrapper>
  );
}
