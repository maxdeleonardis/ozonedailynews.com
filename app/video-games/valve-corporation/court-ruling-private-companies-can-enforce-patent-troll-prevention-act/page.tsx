import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/NewsArticle';

// ============================================================
// CONSTANTS
// ============================================================
const AUTHOR_NAME = 'Conan Boyle';
const AUTHOR_URL = 'https://www.objectwire.org/authors/conan-boyle';

// ============================================================
// METADATA
// ============================================================
export const metadata: Metadata = {
  title: 'Valve Wins Jury Verdict Under Washington Patent Troll Prevention Act | ObjectWire',
  description:
    'A federal jury in the Western District of Washington ruled for Valve on all counts against patent troll Display Technologies, LLC on February 17, 2026 -- the first U.S. jury verdict under a state patent troll prevention statute. Damages totaled $152,093.',
  keywords: [
    'Valve Corporation',
    'Patent Troll Prevention Act',
    'PTPA',
    'Display Technologies',
    'Washington state patent law',
    'Consumer Protection Act',
    'private right of action',
    'Gabe Newell',
    'patent troll',
    'jury verdict 2026',
    'RCW 19.350',
    'Western District of Washington',
  ],
  alternates: {
    canonical:
      'https://www.objectwire.org/video-games/valve-corporation/court-ruling-private-companies-can-enforce-patent-troll-prevention-act',
  },
  openGraph: {
    title: 'Valve Wins First U.S. Jury Verdict Under State Patent Troll Prevention Law',
    description:
      'Federal jury awards Valve $152,093 against patent troll Display Technologies, LLC. Court confirms private companies can sue under Washington PTPA via Consumer Protection Act.',
    type: 'article',
    url: 'https://www.objectwire.org/video-games/valve-corporation/court-ruling-private-companies-can-enforce-patent-troll-prevention-act',
    siteName: 'ObjectWire',
    images: [{ url: '/influncer/valve-ceo-Gabe-Newell.PNG' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Valve Wins First U.S. Jury Verdict Under State Patent Troll Law',
    description:
      '$152,093 in damages, personal liability via veil piercing, and a confirmed private right of action under Washington PTPA.',
  },
};

export default function ValvePatentTrollVerdictPage() {
  return (
    <div>
      <div className="hidden">
        <span itemProp="author" itemScope itemType="https://schema.org/Person">
          <span itemProp="name">{AUTHOR_NAME}</span>
          <link itemProp="url" href={AUTHOR_URL} />
        </span>
      </div>

      <NewsArticle
        title="Valve Wins Jury Verdict Under Washington Patent Troll Prevention Act -- Private Companies Can Enforce the Law"
        subtitle="A federal jury awarded Valve $152,093 against Display Technologies, LLC on February 17, 2026, marking the first U.S. jury verdict finding liability under a state patent troll prevention statute. The court confirmed private companies can sue without waiting for the state Attorney General."
        category="Court Ruling"
        categoryColor="blue"
        topicTag="investigations"
        publishDate="February 26, 2026"
        readTime="6 min read"
        thumbnail={{
          src: '/influncer/valve-ceo-Gabe-Newell.PNG',
          alt: 'Valve CEO Gabe Newell',
        }}
        author={{
          name: AUTHOR_NAME,
          role: 'Legal and Technology Reporter',
          authorSlug: 'conan-boyle',
        }}
        tags={[
          'Valve Corporation',
          'Patent Troll Prevention Act',
          'PTPA',
          'Display Technologies',
          'Consumer Protection Act',
          'Washington State',
          'Patent Law',
          'Jury Verdict',
          'Gabe Newell',
          'Private Right of Action',
          'Corporate Veil Piercing',
          'Patent Troll',
        ]}
      >

        {/* Lede */}
        <p>
          A federal jury in the Western District of Washington ruled in favor of{' '}
          <Link href="/video-games/valve-corporation" className="text-blue-600 font-medium hover:underline">
            Valve Corporation
          </Link>{' '}
          on all counts in its lawsuit against Display Technologies, LLC on February 17, 2026. The verdict found violations of Washington's Patent Troll Prevention Act (PTPA, RCW 19.350), the Consumer Protection Act (CPA, RCW 19.86), and breach of a 2016 global licensing agreement. Damages totaled approximately $152,093, with personal liability imposed on the principal individual through piercing the corporate veil.
        </p>

        <p>
          Prior to trial, the court ruled in January 2026 that the CPA provides a private right of action for PTPA violations, rejecting the argument that enforcement is limited to the state Attorney General. The case originated from a July 2023 complaint filed by Valve after receiving infringement demands over patents already covered by an existing license.
        </p>

        {/* Case Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="border-2 border-blue-600 p-4 bg-blue-50">
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">Damages Awarded</p>
            <p className="text-3xl font-black text-gray-900">$152,093</p>
            <p className="text-xs text-gray-500 mt-1">Jury verdict, February 17, 2026</p>
          </div>
          <div className="border-2 border-gray-900 p-4 bg-gray-50">
            <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">Historic First</p>
            <p className="text-3xl font-black text-gray-900">1st</p>
            <p className="text-xs text-gray-500 mt-1">U.S. jury verdict under a state patent troll prevention statute</p>
          </div>
          <div className="border-2 border-green-600 p-4 bg-green-50">
            <p className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-1">Statute Enacted</p>
            <p className="text-3xl font-black text-gray-900">2015</p>
            <p className="text-xs text-gray-500 mt-1">Washington Patent Troll Prevention Act (RCW 19.350)</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Background on the Washington Patent Troll Prevention Act
        </h2>

        <p>
          Enacted in 2015, the PTPA prohibits bad-faith assertions of patent infringement under{' '}
          <a
            href="https://app.leg.wa.gov/rcw/default.aspx?cite=19.350"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            RCW 19.350
          </a>
          . The statute lists factors courts may consider as evidence of bad faith, including demands lacking detailed infringement analysis, threats disproportionate to potential recovery, and assertions without a reasonable basis for infringement or patent validity.
        </p>

        <p>
          Violations constitute unfair or deceptive acts under the CPA, with the legislature declaring such practices as matters vitally affecting the public interest under RCW 19.350.030. The PTPA applies to assertions targeting Washington businesses or entities and is not limited to specific industries such as video games or software. Any Washington-based company receiving a bad-faith infringement demand may invoke the statute.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Case Timeline and Key Rulings
        </h2>

        <div className="space-y-4 my-6">
          {[
            {
              date: '2016',
              event: 'Valve enters Global Settlement and License Agreement (GSLA) with Display Technologies, LLC entities, granting a perpetual, irrevocable, royalty-free license to covered patents in exchange for a settlement payment.',
            },
            {
              date: '2022',
              event: 'Display Technologies, LLC sues Valve for infringement of a patent covered by the GSLA, then voluntarily dismisses the case.',
            },
            {
              date: 'June 2023',
              event: 'Additional demand letter asserts infringement of U.S. Patent No. 8,856,221, a patent claimed to be covered by the existing license.',
            },
            {
              date: 'July 2023',
              event: 'Valve files suit (No. 2:23-cv-01016-JNW, Western District of Washington) alleging breach of the GSLA and bad-faith assertions under the PTPA and CPA.',
            },
            {
              date: 'January 2026',
              event: 'Court denies motion for partial summary judgment, confirming that PTPA violations constitute unfair or deceptive acts under the CPA and that private parties may sue under RCW 19.86.090.',
            },
            {
              date: 'February 17, 2026',
              event: 'Jury returns verdict for Valve on all counts. Damages of $130,001 awarded for contract breach and $22,092 for PTPA/CPA violations. Personal liability imposed on the principal through corporate veil piercing.',
            },
          ].map(({ date, event }, i) => (
            <div key={i} className="flex gap-4 border-l-4 border-blue-600 pl-4">
              <div className="min-w-[110px]">
                <span className="text-sm font-bold text-blue-700">{date}</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">{event}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Private Enforcement Under the PTPA via Consumer Protection Act
        </h2>

        <p>
          The court's January 2026 ruling clarified that PTPA violations qualify as unfair or deceptive acts under the CPA, which explicitly provides a private right of action for injured persons under RCW 19.86.090. The PTPA incorporates the CPA and declares covered practices as vitally affecting the public interest, enabling private suits without requiring the Attorney General to initiate the action.
        </p>

        <p>
          This interpretation aligns with prior federal decisions applying similar logic to the statute, including{' '}
          <em>Microsoft Corp. v. MediaPointe</em>, 626 F. Supp. 3d 1129 (C.D. Cal. 2022). The ruling is significant for Washington businesses that receive patent troll demands: they now have a confirmed judicial path to sue for bad-faith assertions without waiting for state enforcement action. The decision does not change the text of the PTPA; it clarifies the mechanism through which private parties access existing rights.
        </p>

        <div className="border-2 border-gray-900 p-6 my-8 bg-gray-50">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
            Court Order Key Point -- January 2026
          </p>
          <p className="text-base font-medium text-gray-900 leading-relaxed">
            "PTPA violations constitute unfair or deceptive acts under the Consumer Protection Act. Private parties injured by such violations may bring suit under RCW 19.86.090 without requiring Attorney General initiation."
          </p>
          <p className="text-xs text-gray-500 mt-3 italic">
            Paraphrase. Western District of Washington, No. 2:23-cv-01016-JNW.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Broader Application and First Jury Verdict Details
        </h2>

        <p>
          This case marks the first U.S. jury verdict finding liability under a state patent troll prevention statute, with personal liability imposed through corporate veil piercing. Prior enforcement examples under similar statutes involved state Attorneys General, such as actions in Washington against entities like Landmark Technology. Valve pursued this case independently, with no state enforcement involvement.
        </p>

        <p>
          The verdict does not amend the PTPA text or restrict its application to the video game industry. The law covers bad-faith patent assertions across all industries targeting Washington entities. Damages broke down as $130,001 for breach of the Global Settlement and License Agreement and $22,092 for PTPA/CPA violations.
        </p>

        <p>
          Veil piercing allowed the jury to impose personal liability on the principal behind Display Technologies, LLC, meaning the individual cannot use the corporate entity as a shield against the judgment. This component of the verdict is notable for plaintiffs pursuing similar claims against single-person patent assertion entities.
        </p>

        {/* Damages breakdown */}
        <div className="overflow-x-auto my-8">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="px-4 py-3 text-left font-semibold">Component</th>
                <th className="px-4 py-3 text-left font-semibold">Amount</th>
                <th className="px-4 py-3 text-left font-semibold">Basis</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="px-4 py-3 border-b border-gray-100 font-medium">Contract Breach (GSLA)</td>
                <td className="px-4 py-3 border-b border-gray-100">$130,001</td>
                <td className="px-4 py-3 border-b border-gray-100">Violation of 2016 perpetual license agreement</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 border-b border-gray-100 font-medium">PTPA / CPA Violations</td>
                <td className="px-4 py-3 border-b border-gray-100">$22,092</td>
                <td className="px-4 py-3 border-b border-gray-100">Bad-faith patent assertions under RCW 19.350 / RCW 19.86</td>
              </tr>
              <tr className="bg-white font-bold">
                <td className="px-4 py-3">Total Awarded</td>
                <td className="px-4 py-3">$152,093</td>
                <td className="px-4 py-3">Jury verdict, Western District of Washington</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Key Statistics Summary
        </h2>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse text-sm">
            <tbody>
              {[
                ['Jury verdict date', 'February 17, 2026'],
                ['Total damages awarded', '$152,093'],
                ['Contract breach damages', '$130,001'],
                ['PTPA/CPA damages', '$22,092'],
                ['PTPA enactment year', '2015'],
                ['Statute citation', 'RCW 19.350'],
                ['Private right confirmed', 'January 2026 court order'],
                ['Case number', 'No. 2:23-cv-01016-JNW, Western District of Washington'],
                ['Patent at issue', 'U.S. Patent No. 8,856,221 (among others)'],
                ['License agreement date', '2016 (perpetual, irrevocable, royalty-free)'],
                ['Personal liability mechanism', 'Corporate veil piercing'],
                ['Historic significance', 'First U.S. jury verdict under a state patent troll prevention statute'],
              ].map(([label, value], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 font-medium border-b border-gray-100 w-1/2">{label}</td>
                  <td className="px-4 py-3 border-b border-gray-100">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Related Coverage
        </h2>

        <ul className="space-y-3">
          <li>
            <Link
              href="/copyright"
              className="text-blue-600 hover:underline font-medium"
            >
              ObjectWire Copyright and IP Law Coverage
            </Link>
            <span className="text-gray-500 text-sm ml-2">-- Ongoing intellectual property and copyright reporting</span>
          </li>
          <li>
            <Link
              href="/video-games/valve-corporation"
              className="text-blue-600 hover:underline font-medium"
            >
              Valve Corporation Company Profile
            </Link>
            <span className="text-gray-500 text-sm ml-2">-- Full overview of Valve, Steam, and major franchises</span>
          </li>
          <li>
            <Link
              href="/copyright/news/letitia-james-sues-counter-strike"
              className="text-blue-600 hover:underline font-medium"
            >
              NY AG Letitia James Sues Valve Over CS2 Loot Boxes
            </Link>
            <span className="text-gray-500 text-sm ml-2">-- Separate 2026 legal action against Valve in New York</span>
          </li>
          <li>
            <Link
              href="/video-games"
              className="text-blue-600 hover:underline font-medium"
            >
              ObjectWire Video Games
            </Link>
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          External Sources
        </h2>

        <ul className="space-y-3">
          <li>
            <a
              href="https://www.windowscentral.com/gaming/valve-just-got-a-historical-win-against-a-prolific-patent-troll"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Windows Central: Valve Just Got a Historical Win Against a Prolific Patent Troll
            </a>
          </li>
          <li>
            <a
              href="https://www.casemine.com/judgement/us/664045f847417f327c946433"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-blue-600 hover:underline"
            >
              CaseMine: Court Documents -- Display Technologies vs. Valve
            </a>
          </li>
          <li>
            <a
              href="https://app.leg.wa.gov/rcw/default.aspx?cite=19.350"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Washington State Legislature: RCW 19.350 -- Patent Troll Prevention Act
            </a>
          </li>
        </ul>

      </NewsArticle>
    </div>
  );
}
