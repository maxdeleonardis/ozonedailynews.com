import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { Breadcrumb } from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Novartis Becomes Sixth Drugmaker to Challenge Medicare Price Negotiations at Supreme Court | ObjectWire',
  description: 'Swiss pharmaceutical giant Novartis joins five other drugmakers in asking the U.S. Supreme Court to block Medicare drug price negotiations, arguing the Inflation Reduction Act is unconstitutional.',
  keywords: [
    'Novartis Supreme Court',
    'Medicare price negotiations',
    'Inflation Reduction Act',
    'drug pricing',
    'pharmaceutical lawsuit',
    'Medicare negotiation',
    'prescription drug costs',
    'Novartis lawsuit',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/news/novartis-sixth-drugmaker-supreme-court-medicare-negotiations',
  },
  openGraph: {
    title: 'Novartis Becomes Sixth Drugmaker to Challenge Medicare Price Negotiations',
    description: 'Novartis joins legal challenge against Medicare drug price negotiations under the Inflation Reduction Act.',
    type: 'article',
    url: 'https://www.objectwire.org/news/novartis-sixth-drugmaker-supreme-court-medicare-negotiations',
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Novartis Challenges Medicare Price Negotiations at Supreme Court',
    description: 'Sixth pharmaceutical company to legally challenge Medicare drug pricing authority.',
  },
};

export default function NovartisSupremeCourtPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <NewsArticleSchema
        title="Novartis Becomes Sixth Drugmaker to Ask Supreme Court to Block Medicare Price Negotiations"
        description="Swiss pharmaceutical giant Novartis joins five other drugmakers in asking the U.S. Supreme Court to block Medicare drug price negotiations, arguing the Inflation Reduction Act is unconstitutional."
        publishedTime="2026-01-27T17:00:00Z"
        modifiedTime="2026-01-27T17:00:00Z"
        author="ObjectWire Healthcare Desk"
        imageUrl="https://www.objectwire.org/novartis-supreme-court.jpg"
        articleUrl="https://www.objectwire.org/news/novartis-sixth-drugmaker-supreme-court-medicare-negotiations"
        section="Healthcare"
        keywords={["Novartis", "Medicare", "Supreme Court", "drug pricing", "Inflation Reduction Act"]}
      />

      <Breadcrumb
        items={[
          { name: 'Home', item: '/' },
          { name: 'News', item: '/news' },
          { name: 'Novartis Supreme Court Challenge', item: '/news/novartis-sixth-drugmaker-supreme-court-medicare-negotiations' },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="mb-12">
          <div className="inline-block bg-gradient-to-r from-red-600 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            PHARMACEUTICAL POLICY
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Novartis Becomes Sixth Drugmaker to Ask Supreme Court to Block Medicare Price Negotiations
          </h1>
          <div className="flex items-center text-gray-400 text-sm mb-6">
            <time dateTime="2026-01-27">January 27, 2026</time>
            <span className="mx-2">•</span>
            <span>7 min read</span>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed">
            Swiss pharmaceutical giant Novartis has petitioned the U.S. Supreme Court to overturn Medicare's authority to negotiate drug prices under the Inflation Reduction Act, becoming the sixth major drugmaker to challenge the landmark legislation on constitutional grounds.
          </p>
        </header>

        {/* Main Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <section className="mb-10">
            <p className="text-gray-300 leading-relaxed mb-6">
              <Link href="/novartis" className="text-blue-400 hover:text-blue-300 underline">Novartis AG</Link>, one of the world's largest pharmaceutical companies, filed an emergency petition with the Supreme Court on January 27, 2026, asking the justices to block the Centers for Medicare & Medicaid Services (CMS) from enforcing drug price negotiation provisions that the company argues violate constitutional protections against government coercion.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              The Basel-based drugmaker joins Johnson & Johnson, Merck, Bristol Myers Squibb, Boehringer Ingelheim, and AstraZeneca in seeking judicial intervention against the Inflation Reduction Act's (IRA) Medicare Drug Price Negotiation Program, which empowers the federal government to negotiate prices for certain high-cost prescription drugs covered under Medicare Part D.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Novartis's petition specifically challenges CMS's authority to compel the company to negotiate prices for its heart failure drug <strong>Entresto</strong> (sacubitril/valsartan), which generated $7.2 billion in global sales in 2025 and is among the first 20 drugs selected for Medicare price negotiations beginning in 2026.
            </p>
          </section>

          {/* Legal Arguments */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-white mb-6">Constitutional Arguments</h2>
            <div className="bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm">
              <p className="text-gray-300 leading-relaxed mb-6">
                Novartis's 127-page petition to the Supreme Court presents three primary constitutional challenges to the Medicare Drug Price Negotiation Program:
              </p>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-lg p-6 border border-red-500/30">
                  <h3 className="text-xl font-semibold text-red-400 mb-3">1. Fifth Amendment "Takings" Violation</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    Novartis argues that the mandatory price negotiation system constitutes an unconstitutional "taking" of private property without just compensation. The company contends that forcing manufacturers to accept government-determined prices below market value effectively seizes intellectual property rights protected by the Fifth Amendment.
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    "The government cannot simply commandeer billions of dollars in private property by declaring that pharmaceutical innovation is now subject to price controls," the petition states. "This represents a fundamental violation of property rights that have underpinned American innovation for over two centuries."
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg p-6 border border-purple-500/30">
                  <h3 className="text-xl font-semibold text-purple-400 mb-3">2. First Amendment Compelled Speech</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    The petition argues that requiring pharmaceutical companies to sign "agreements" accepting negotiated prices constitutes compelled speech in violation of the First Amendment. Companies face excise taxes of up to 95% of gross sales if they refuse to participate in negotiations.
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Novartis claims this coercive structure forces companies to publicly endorse government pricing determinations they fundamentally disagree with, violating constitutional protections against compelled expression.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-lg p-6 border border-blue-500/30">
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">3. Separation of Powers & Non-Delegation</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    Novartis contends that Congress improperly delegated legislative authority to the executive branch by granting CMS broad discretion to determine "fair" drug prices without clear standards or guidelines. This, the company argues, violates the non-delegation doctrine central to constitutional separation of powers.
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    The petition emphasizes that CMS has "virtually unlimited authority" to set prices based on vague criteria like "clinical benefit" and "cost-effectiveness"—standards the company argues are too ambiguous to constitute proper legislative guidance.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-900/30 border border-yellow-500/30 rounded-lg p-6 mt-6">
                <h4 className="text-lg font-semibold text-yellow-400 mb-3">Financial Stakes for Novartis</h4>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  Entresto, Novartis's blockbuster heart failure medication, faces potential price reductions of 40-60% under Medicare negotiations according to independent healthcare economists. With Medicare accounting for approximately 35% of Entresto's U.S. sales, price cuts could reduce the drug's annual revenue by $800 million to $1.2 billion.
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  The company warns that such reductions would significantly impact research and development budgets, potentially delaying or canceling clinical trials for next-generation cardiovascular therapies.
                </p>
              </div>
            </div>
          </section>

          {/* Growing Legal Coalition */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-white mb-6">Growing Industry Legal Challenge</h2>
            <div className="bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm">
              <p className="text-gray-300 leading-relaxed mb-6">
                Novartis joins an expanding coalition of pharmaceutical manufacturers seeking judicial relief from Medicare price negotiations. The six companies now challenging the program represent over $150 billion in annual pharmaceutical revenue and manufacture some of the most widely prescribed medications in the United States.
              </p>

              <h3 className="text-2xl font-semibold text-purple-400 mb-4">Companies Challenging Medicare Negotiations</h3>
              
              <div className="space-y-4 mb-6">
                <div className="bg-slate-700/50 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">1. Johnson & Johnson</h4>
                  <p className="text-gray-300 text-sm mb-2"><strong>Drug at Risk:</strong> Stelara (psoriasis/Crohn's disease) – $9.1B annual sales</p>
                  <p className="text-gray-300 text-sm"><strong>Filing Date:</strong> August 2023 (U.S. District Court, New Jersey)</p>
                </div>

                <div className="bg-slate-700/50 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-green-400 mb-2">2. Merck & Co.</h4>
                  <p className="text-gray-300 text-sm mb-2"><strong>Drug at Risk:</strong> Januvia (diabetes) – $4.3B annual sales</p>
                  <p className="text-gray-300 text-sm"><strong>Filing Date:</strong> June 2023 (U.S. District Court, D.C.)</p>
                </div>

                <div className="bg-slate-700/50 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-purple-400 mb-2">3. Bristol Myers Squibb</h4>
                  <p className="text-gray-300 text-sm mb-2"><strong>Drug at Risk:</strong> Eliquis (blood thinner) – $11.8B annual sales</p>
                  <p className="text-gray-300 text-sm"><strong>Filing Date:</strong> August 2023 (U.S. District Court, New Jersey)</p>
                </div>

                <div className="bg-slate-700/50 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-pink-400 mb-2">4. Boehringer Ingelheim</h4>
                  <p className="text-gray-300 text-sm mb-2"><strong>Drug at Risk:</strong> Jardiance (diabetes/heart failure) – $7.2B annual sales</p>
                  <p className="text-gray-300 text-sm"><strong>Filing Date:</strong> September 2023 (U.S. District Court, Connecticut)</p>
                </div>

                <div className="bg-slate-700/50 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-yellow-400 mb-2">5. AstraZeneca</h4>
                  <p className="text-gray-300 text-sm mb-2"><strong>Drug at Risk:</strong> Farxiga (diabetes/heart failure) – $5.8B annual sales</p>
                  <p className="text-gray-300 text-sm"><strong>Filing Date:</strong> October 2023 (U.S. District Court, Delaware)</p>
                </div>

                <div className="bg-slate-700/50 rounded-lg p-5 border-2 border-red-500">
                  <h4 className="text-lg font-semibold text-red-400 mb-2">6. Novartis (New)</h4>
                  <p className="text-gray-300 text-sm mb-2"><strong>Drug at Risk:</strong> Entresto (heart failure) – $7.2B annual sales</p>
                  <p className="text-gray-300 text-sm"><strong>Filing Date:</strong> January 27, 2026 (Direct Supreme Court petition)</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-4">
                Combined, these six drugs generated over $45 billion in global sales in 2025, with Medicare representing the single largest payer for each medication. Analysts estimate Medicare price negotiations could reduce revenues for these drugs by $15-20 billion annually once fully implemented.
              </p>

              <h3 className="text-2xl font-semibold text-blue-400 mb-4 mt-6">Lower Court Rulings</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                All previous legal challenges have been unsuccessful at the district court level. Federal judges in New Jersey, Delaware, Connecticut, and Washington D.C. have uniformly rejected pharmaceutical companies' constitutional arguments, ruling that:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Medicare participation is voluntary, negating compelled speech claims</li>
                <li>Price negotiations don't constitute property takings but rather market regulation</li>
                <li>Congress provided sufficient guidance for CMS's pricing determinations</li>
                <li>The government's interest in controlling healthcare costs justifies regulatory intervention</li>
              </ul>

              <p className="text-gray-300 leading-relaxed">
                Several of these cases are currently pending before federal appeals courts, with oral arguments scheduled for early 2026. Novartis's direct petition to the Supreme Court represents an attempt to bypass the lengthy appellate process.
              </p>
            </div>
          </section>

          {/* Government Response */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-white mb-6">Government & Advocacy Group Responses</h2>
            <div className="bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">Biden Administration Position</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                The Department of Health and Human Services (HHS) issued a statement defending Medicare's negotiation authority and criticizing pharmaceutical companies' legal strategy. HHS Secretary Xavier Becerra stated:
              </p>

              <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-6 mb-6">
                <p className="text-gray-300 text-sm leading-relaxed italic mb-3">
                  "For decades, American seniors have paid the highest prescription drug prices in the world while pharmaceutical companies reap record profits. The Inflation Reduction Act finally gives Medicare the same negotiating power that the VA and private insurers have long exercised. These lawsuits are a transparent attempt to protect excessive profits at the expense of seniors who need affordable medications."
                </p>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                The Centers for Medicare & Medicaid Services (CMS) emphasized that pharmaceutical companies remain free to exit the Medicare market entirely if they object to negotiated prices—undermining claims of unconstitutional compulsion.
              </p>

              <h3 className="text-2xl font-semibold text-green-400 mb-4">Patient Advocacy Groups</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                AARP, representing 38 million Americans over age 50, strongly condemned Novartis's legal challenge. Executive Vice President Nancy LeaMond stated:
              </p>

              <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-6 mb-6">
                <p className="text-gray-300 text-sm leading-relaxed italic">
                  "Novartis is asking the Supreme Court to protect their ability to charge Medicare whatever they want for life-saving drugs. Meanwhile, millions of seniors are forced to ration medications or choose between prescriptions and groceries. This lawsuit is a slap in the face to every American who has struggled to afford their medications."
                </p>
              </div>

              <p className="text-gray-300 leading-relaxed mb-4">
                The Patients For Affordable Drugs advocacy group noted that Entresto—the Novartis drug subject to Medicare negotiations—costs approximately $6,200 annually for Medicare beneficiaries before subsidies, compared to under $2,000 in Canada and Europe for the same medication.
              </p>

              <h3 className="text-2xl font-semibold text-purple-400 mb-4">Industry Trade Groups</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Pharmaceutical Research and Manufacturers of America (PhRMA), the industry's primary lobbying organization, released a statement supporting Novartis's constitutional arguments:
              </p>

              <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-6">
                <p className="text-gray-300 text-sm leading-relaxed italic">
                  "The IRA's price-setting scheme undermines the innovation ecosystem that has made America the global leader in pharmaceutical research. Without adequate financial incentives, companies cannot justify the $2.6 billion average cost and 10-15 year timeline required to bring new medicines to market. Today's blockbusters fund tomorrow's breakthrough therapies."
                </p>
              </div>
            </div>
          </section>

          {/* Economic Impact */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-white mb-6">Economic & Policy Implications</h2>
            <div className="bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Projected Medicare Savings</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                The Congressional Budget Office (CBO) estimates that Medicare drug price negotiations will reduce federal spending by $98.5 billion over 10 years (2026-2035). For the first 20 drugs subject to negotiation, average price reductions of 38-56% are projected, translating to:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gradient-to-br from-green-900/30 to-blue-900/30 rounded-lg p-6 border border-green-500/30">
                  <h4 className="text-lg font-semibold text-green-400 mb-3">Patient Savings</h4>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Average annual savings: $1,500-$2,200 per Medicare beneficiary</li>
                    <li>• Estimated 3.2 million seniors affected by first round of negotiations</li>
                    <li>• Total out-of-pocket reduction: $4.8-$7.0 billion annually</li>
                    <li>• Reduced medication non-adherence projected at 15-20%</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 rounded-lg p-6 border border-red-500/30">
                  <h4 className="text-lg font-semibold text-red-400 mb-3">Industry Revenue Impact</h4>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Pharmaceutical sector revenue reduction: $18-25B annually</li>
                    <li>• Affected companies: Top 15 drugmakers by U.S. sales</li>
                    <li>• R&D budget impact: Estimated 8-12% reduction industry-wide</li>
                    <li>• Clinical trial delays: 50-100 programs potentially affected</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-blue-400 mb-4">Innovation Debate</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                The central policy debate centers on whether Medicare price negotiations will meaningfully reduce pharmaceutical innovation. Industry advocates argue that reduced revenues will force companies to cut R&D spending, delaying breakthrough therapies. Critics counter that pharmaceutical companies spend more on marketing and executive compensation than research, and that price negotiations in other developed countries haven't stifled innovation.
              </p>

              <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-purple-400 mb-3">Academic Research Perspectives</h4>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  A 2025 study published in <em>Health Affairs</em> examining pharmaceutical innovation in countries with government price negotiations found no statistically significant reduction in new drug approvals compared to the United States over a 20-year period. The research suggested that innovation is driven primarily by disease burden and scientific opportunity rather than pricing policy.
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  However, industry-funded research from the National Bureau of Economic Research (NBER) reached opposite conclusions, projecting 30-50 fewer new drug approvals over the next decade if Medicare negotiations proceed as scheduled.
                </p>
              </div>
            </div>
          </section>

          {/* Supreme Court Outlook */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-white mb-6">Supreme Court Outlook</h2>
            <div className="bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm">
              <p className="text-gray-300 leading-relaxed mb-6">
                Legal experts are divided on whether the Supreme Court will grant certiorari (agree to hear) Novartis's case or the appeals from other pharmaceutical companies working through lower courts.
              </p>

              <h3 className="text-2xl font-semibold text-blue-400 mb-4">Factors Favoring Supreme Court Review</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li><strong>Major Constitutional Questions:</strong> Cases present significant issues regarding property rights, compelled speech, and delegation of legislative authority</li>
                <li><strong>Economic Magnitude:</strong> Nearly $100 billion in federal spending and pharmaceutical revenue at stake</li>
                <li><strong>Circuit Splits Possible:</strong> If appellate courts reach conflicting decisions, Supreme Court intervention becomes more likely</li>
                <li><strong>Public Importance:</strong> Affects millions of Medicare beneficiaries and addresses government's role in healthcare markets</li>
              </ul>

              <h3 className="text-2xl font-semibold text-purple-400 mb-4">Factors Against Supreme Court Review</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li><strong>Consistent Lower Court Rulings:</strong> All district courts have rejected pharmaceutical companies' arguments</li>
                <li><strong>Political Sensitivity:</strong> Court may avoid inserting itself into highly politicized healthcare policy</li>
                <li><strong>Weak Legal Precedents:</strong> Previous challenges to government price regulations have generally failed</li>
                <li><strong>Alternative Relief Available:</strong> Companies can withdraw from Medicare market if objections are genuine</li>
              </ul>

              <p className="text-gray-300 leading-relaxed mb-4">
                Georgetown Law Professor Mary Woolford, a healthcare law expert, told ObjectWire: "The Court has historically been reluctant to overturn major federal healthcare legislation on constitutional grounds. While the pharmaceutical companies raise colorable arguments, the weight of precedent favors the government's position that Medicare participation is voluntary and that Congress has broad authority to regulate healthcare markets."
              </p>

              <div className="bg-yellow-900/30 border border-yellow-500/30 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-yellow-400 mb-3">Timeline Expectations</h4>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  If the Supreme Court grants certiorari, oral arguments would likely occur in late 2026 or early 2027, with a decision expected by June 2027. In the interim, Medicare drug price negotiations will proceed as scheduled, with the first negotiated prices taking effect in 2026.
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  The Court could also decline to intervene, allowing lower court rulings to stand and effectively ending the pharmaceutical industry's legal challenge to Medicare negotiations.
                </p>
              </div>
            </div>
          </section>

          {/* About Novartis */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-white mb-6">About Novartis</h2>
            <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-lg p-8 border border-indigo-500/30">
              <p className="text-gray-300 leading-relaxed mb-4">
                <Link href="/novartis" className="text-blue-400 hover:text-blue-300 underline">Novartis AG</Link> is a Swiss multinational pharmaceutical corporation headquartered in Basel, Switzerland. Founded in 1996 through the merger of Ciba-Geigy and Sandoz, Novartis is one of the world's largest pharmaceutical companies by revenue, generating $49.2 billion in net sales in 2025.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                The company specializes in cardiovascular, oncology, immunology, and ophthalmology therapeutics. Entresto, the heart failure drug subject to Medicare price negotiations, represents Novartis's top-selling medication and accounts for approximately 15% of the company's total pharmaceutical revenue.
              </p>
              <p className="text-gray-300 leading-relaxed">
                For more information about Novartis's history, drug pipeline, and business operations, visit our comprehensive <Link href="/novartis" className="text-blue-400 hover:text-blue-300 underline">Novartis company profile</Link>.
              </p>
            </div>
          </section>

          {/* Related Coverage */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-white mb-6">Related Coverage</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link 
                href="/novartis"
                className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-lg p-6 hover:from-blue-800/50 hover:to-purple-800/50 transition-all border border-blue-500/30"
              >
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Novartis: Complete Company Profile</h3>
                <p className="text-gray-300 text-sm">
                  Full history, drug portfolio, and business overview of the Swiss pharmaceutical giant.
                </p>
              </Link>

              <Link 
                href="/news"
                className="bg-gradient-to-br from-red-900/50 to-orange-900/50 rounded-lg p-6 hover:from-red-800/50 hover:to-orange-800/50 transition-all border border-red-500/30"
              >
                <h3 className="text-xl font-semibold text-red-400 mb-2">Latest Healthcare Policy News</h3>
                <p className="text-gray-300 text-sm">
                  Breaking coverage of pharmaceutical regulation, drug pricing, and healthcare legislation.
                </p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
