import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox } from '@/components/NewsArticle';

const SLUG = '/crypto/hbar/rba-cbdc-hashsphere-hedera-project-acacia';
const AUTHOR_NAME = 'Aflansa';
const PUBLISH_DATE = '2026-03-06';
const PUBLISH_ISO = '2026-03-06T10:00:00Z';
const CANONICAL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'RBA Completes Real-Money CBDC Trials via Hedera-Linked HashSphere — Project Acacia | ObjectWire',
  description:
    'The Reserve Bank of Australia confirmed March 5, 2026, that Project Acacia successfully settled real-world assets using HashSphere, a private permissioned network built on Hedera technology, across 24 use cases.',
  keywords: [
    'RBA CBDC Project Acacia 2026',
    'HashSphere Hedera wholesale CBDC',
    'Reserve Bank Australia digital currency',
    'Hedera HBAR central bank',
    'Project Acacia real money trials',
    'Australian Payments Plus HashSphere',
    'wholesale CBDC blockchain Australia',
    'Hedera Hashgraph RBA settlement',
    'tokenized assets R3 Corda Canvas Connect',
    'DFCRC digital finance Australia',
    'HBAR institutional adoption',
    'central bank digital currency 2026',
    'Hgraph interoperability layer',
    'RBA Payments System Board CBDC',
    'Hedera council member CBDC',
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'RBA Completes Real-Money CBDC Trials via Hedera-Linked HashSphere',
    description:
      'Project Acacia tested 24 use cases — 19 with real money — on a private HashSphere network built on Hedera tech. The RBA Payments System Board met March 5 to review findings ahead of the April final report.',
    type: 'article',
    url: CANONICAL,
    siteName: 'ObjectWire',
    authors: [AUTHOR_NAME],
    publishedTime: PUBLISH_ISO,
    modifiedTime: PUBLISH_ISO,
    section: 'Finance',
    tags: ['Hedera', 'HBAR', 'CBDC', 'RBA', 'HashSphere', 'Project Acacia', 'Digital Currency', 'Australia'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RBA Completes Real-Money CBDC Trials on Hedera-Linked HashSphere Network',
    description:
      '24 use cases, 19 with real money. Project Acacia proves wholesale CBDC can settle real assets on a private Hedera-based network. Final report due late April 2026.',
  },
};

// ─── Key project stats ────────────────────────────────────────────────────────
const projectStats = [
  { label: 'Use Cases Tested', value: '24' },
  { label: 'Real-Money Trials', value: '19' },
  { label: 'Network Type', value: 'Private (HashSphere)' },
  { label: 'Consensus', value: 'Hashgraph' },
];

// ─── Timeline ─────────────────────────────────────────────────────────────────
const timeline = [
  {
    date: 'Mid-2025',
    event: 'RBA and DFCRC launch Project Acacia experimental phase. Australian Payments Plus deploys private HashSphere network.',
    color: 'border-blue-500 bg-blue-50',
    dot: 'bg-blue-500',
  },
  {
    date: 'Q3–Q4 2025',
    event: '24 use cases tested across tokenized deposits, bond settlement, cross-border payments, and DvP scenarios. 19 involve real money and real assets.',
    color: 'border-green-500 bg-green-50',
    dot: 'bg-green-500',
  },
  {
    date: 'Mar 5, 2026',
    event: 'RBA Payments System Board meets to review Project Acacia findings. Experimental phase declared complete.',
    color: 'border-purple-500 bg-purple-50',
    dot: 'bg-purple-500',
  },
  {
    date: 'Late Apr 2026',
    event: 'Project Acacia Final Report scheduled for publication — expected to shape Australian digital asset policy.',
    color: 'border-orange-500 bg-orange-50',
    dot: 'bg-orange-500',
  },
];

export default function RBACBDCHashSpherePage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="RBA Completes Real-Money CBDC Trials via Hedera-Linked HashSphere — Project Acacia"
        description="The Reserve Bank of Australia confirmed March 5, 2026, that Project Acacia successfully settled real-world assets using HashSphere, a private permissioned network built on Hedera technology."
        author={AUTHOR_NAME}
        authorUrl="https://www.objectwire.org/team"
        publishedTime={PUBLISH_ISO}
        modifiedTime={PUBLISH_ISO}
        articleUrl={CANONICAL}
        section="Finance"
        keywords={[
          'RBA CBDC', 'HashSphere', 'Hedera', 'HBAR', 'Project Acacia',
          'wholesale CBDC', 'tokenized assets', 'Australian Payments Plus',
          'digital currency Australia', 'central bank blockchain',
        ]}
      />

      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'Crypto', item: '/crypto' },
              { name: 'HBAR', item: '/crypto/hbar' },
              { name: 'RBA CBDC HashSphere — Project Acacia', item: SLUG },
            ]}
          />
        </div>
      </div>

      <NewsArticle
        title="RBA Completes Real-Money CBDC Trials via Hedera-Linked HashSphere"
        subtitle="24 use cases tested, 19 with real money and real assets. Project Acacia proves a wholesale Central Bank Digital Currency can settle within Australia's regulatory framework on a private network built on Hedera technology."
        category="FINANCE"
        categoryColor="blue"
        topicTag="finance"
        publishDate="March 6, 2026"
        readTime="5 min read"
        breaking
        author={{
          name: AUTHOR_NAME,
          role: 'Finance & Digital Assets',
        }}
        tags={[
          'Hedera',
          'HBAR',
          'CBDC',
          'RBA',
          'HashSphere',
          'Project Acacia',
          'Digital Currency',
          'Australia',
          'Blockchain',
          'Tokenization',
        ]}
        slug="rba-cbdc-hashsphere-hedera-project-acacia"
        url={SLUG}
      >
        {/* ── THE LEAD ────────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            The Lead: &quot;Not a Sandbox&quot;
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Reserve Bank of Australia has reached a critical milestone in its quest to modernize the nation&apos;s financial plumbing. As of <strong>March 5, 2026</strong>, the RBA and the Digital Finance Cooperative Research Centre (DFCRC) confirmed the successful conclusion of the experimental phase for <strong>Project Acacia</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Unlike previous theoretical exercises, Project Acacia was a "live-fire" research initiative. Over the last year, <strong>24 use cases</strong> were tested, with <strong>19 involving real money and real assets</strong> — not simulated tokens or test-net placeholders.
          </p>

          <HighlightBox type="stat" color="blue">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {projectStats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-blue-400">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </HighlightBox>
        </section>

        {/* ── INFRASTRUCTURE ──────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            The Infrastructure: HashSphere on Hedera
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The RBA did not use a public blockchain. Instead, <strong>Australian Payments Plus (AP+)</strong>, a Hedera Council member, deployed a <strong>private HashSphere network</strong>. This allowed the central bank to maintain strict privacy and data sovereignty while benefiting from the speed of the Hashgraph consensus algorithm.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            HashSphere runs the same Hashgraph consensus that powers the public Hedera network but in a permissioned, air-gapped environment. Transaction finality is achieved in seconds — not minutes — and the network can process thousands of transactions per second without the gas-fee volatility of public chains.
          </p>

          <HighlightBox type="key-point" color="purple">
            <strong>Key distinction:</strong> HashSphere is a private, permissioned deployment of Hedera technology. The RBA is not transacting on the public HBAR network. However, the underlying consensus algorithm, tooling, and smart contract framework are Hedera-native.
          </HighlightBox>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Interoperability via Hgraph
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            A crucial component was the <strong>Hgraph layer</strong>, which allowed tokenized assets to move seamlessly between the private HashSphere environment and other distributed ledgers used in the pilot, including <strong>R3 Corda</strong> and <strong>Canvas Connect</strong>. This cross-chain bridge is what separates Project Acacia from single-network proofs of concept.
          </p>
        </section>

        {/* ── IS THE RBA "ON HBAR"? ───────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Breaking Down the Accuracy: Is the RBA &quot;on HBAR&quot;?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The news has sparked significant social media hype, but the reality is more nuanced than a simple "production rollout."
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border border-gray-700 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Claim</th>
                  <th className="px-4 py-3 text-left font-semibold">Reality</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-gray-900">&quot;The RBA is running on HBAR&quot;</td>
                  <td className="px-4 py-3 text-gray-700">The RBA used a <strong>private</strong> HashSphere network built on Hedera tech — not the public HBAR mainnet.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 text-gray-900">&quot;CBDC is launching in Australia&quot;</td>
                  <td className="px-4 py-3 text-gray-700">The <strong>experimental phase</strong> is complete. Policy decisions and any production rollout are still ahead.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-gray-900">&quot;This doesn&apos;t matter for HBAR&quot;</td>
                  <td className="px-4 py-3 text-gray-700">It very much does. A G20 central bank validating Hedera&apos;s consensus for real-money settlement is a <strong>major institutional signal</strong>.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <HighlightBox type="quote" color="blue">
            &quot;The fact that a central bank chose Hashgraph over every other consensus mechanism available — including Ethereum, Solana, and Hyperledger — tells you everything about where institutional trust is heading.&quot;
            <br />
            <span className="text-sm text-gray-400 mt-2 block">— Digital asset analyst on the Project Acacia results</span>
          </HighlightBox>
        </section>

        {/* ── TIMELINE ────────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            The Timeline: What Happens Next?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The RBA Payments System Board met yesterday to discuss the findings. While the technical trials are over, the policy work is just beginning.
          </p>

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

          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Late April 2026:</strong> The RBA is scheduled to publish the Project Acacia Final Report. This document will be the defining reference for Australian digital asset policy, determining if these private networks will become a permanent fixture of the national payments rail.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Board has already expressed support for an ongoing program of work, acknowledging that tokenized markets could "unlock significant benefits" for the financial system.
          </p>
        </section>

        {/* ── STRATEGIC IMPACT ────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Strategic Impact for Hedera (HBAR)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            For investors and tech analysts, the RBA&apos;s choice of HashSphere is a massive validation. It proves that Hedera&apos;s technology can meet the &quot;Gold Standard&quot; of central bank requirements:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="bg-gray-900 rounded-xl border border-gray-700 p-4">
              <h3 className="text-green-400 font-bold mb-2">Regulatory Compliance</h3>
              <p className="text-gray-300 text-sm">Private, permissioned deployment satisfies sovereignty and privacy requirements that no public chain can meet for central banks.</p>
            </div>
            <div className="bg-gray-900 rounded-xl border border-gray-700 p-4">
              <h3 className="text-green-400 font-bold mb-2">Performance</h3>
              <p className="text-gray-300 text-sm">Hashgraph consensus delivers sub-second finality and high throughput — critical for real-time gross settlement.</p>
            </div>
            <div className="bg-gray-900 rounded-xl border border-gray-700 p-4">
              <h3 className="text-green-400 font-bold mb-2">Interoperability</h3>
              <p className="text-gray-300 text-sm">Hgraph bridging to R3 Corda and Canvas Connect proves HashSphere is not a walled garden — it can plug into existing financial infrastructure.</p>
            </div>
            <div className="bg-gray-900 rounded-xl border border-gray-700 p-4">
              <h3 className="text-green-400 font-bold mb-2">Institutional Precedent</h3>
              <p className="text-gray-300 text-sm">A G20 central bank validating Hedera&apos;s tech stack opens doors for similar CBDC pilots in Europe, Asia, and the Middle East.</p>
            </div>
          </div>

          <HighlightBox type="key-point" color="green">
            <strong>The bottom line:</strong> The RBA is not &quot;on HBAR&quot; in the retail sense. But Hedera&apos;s consensus, tooling, and smart contract framework just passed the most rigorous institutional test any blockchain technology has faced in the southern hemisphere — with real money on the line.
          </HighlightBox>
        </section>

        {/* ── SOURCES ─────────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Sources &amp; Methodology
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            This report is based on the RBA&apos;s official Project Acacia communications, statements from the Digital Finance Cooperative Research Centre, Australian Payments Plus public disclosures, and Hedera Council meeting minutes. ObjectWire verified use-case counts and settlement details against DFCRC documentation.
          </p>
        </section>

        {/* ── INTERLINKS ──────────────────────────────────────────────── */}
        <section className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Coverage</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/saas/news/sam-altman-visits-hedera-team" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <span className="text-xs font-semibold text-blue-600 uppercase">Hedera</span>
              <h3 className="font-semibold text-gray-900 mt-1">Hedera Team Visits Sam Altman</h3>
              <p className="text-sm text-gray-600 mt-1">The intersection of AI and distributed ledger technology — what Hedera discussed with the OpenAI CEO.</p>
            </Link>
            <Link href="/define/hedera-vs-solana-for-dapps" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <span className="text-xs font-semibold text-purple-600 uppercase">Reference</span>
              <h3 className="font-semibold text-gray-900 mt-1">Hedera vs. Solana for Decentralized Apps</h3>
              <p className="text-sm text-gray-600 mt-1">How Hedera&apos;s Hashgraph consensus compares to Solana&apos;s proof-of-history for dApp development.</p>
            </Link>
            <Link href="/finance" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <span className="text-xs font-semibold text-green-600 uppercase">Finance</span>
              <h3 className="font-semibold text-gray-900 mt-1">Finance Hub</h3>
              <p className="text-sm text-gray-600 mt-1">Central banking, digital currency policy, and financial technology coverage from ObjectWire.</p>
            </Link>
            <Link href="/neurophos-ai-hardware-startup" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <span className="text-xs font-semibold text-green-600 uppercase">AI Hardware</span>
              <h3 className="font-semibold text-gray-900 mt-1">Neurophos: AI Hardware Startup</h3>
              <p className="text-sm text-gray-600 mt-1">How photonics-based computing intersects with next-gen financial infrastructure.</p>
            </Link>
            <Link href="/tech" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <span className="text-xs font-semibold text-green-600 uppercase">Tech</span>
              <h3 className="font-semibold text-gray-900 mt-1">Technology Hub</h3>
              <p className="text-sm text-gray-600 mt-1">Breaking technology news including blockchain, AI, and semiconductor updates.</p>
            </Link>
          </div>
        </section>
      </NewsArticle>
    </SEOWrapper>
  );
}
