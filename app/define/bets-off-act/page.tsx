import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "BETS OFF Act Explained: What It Is, What It Bans, and Who It Targets | ObjectWire",
  description:
    "Senator Chris Murphy and Representative Greg Casar introduced the BETS OFF Act on March 17, 2026, to ban CFTC-regulated prediction markets from listing contracts tied to government actions, terrorism, war, and assassination. Here's what the bill does and why it matters.",
  keywords: [
    'BETS OFF Act explained 2026',
    'Banning Event Trading on Sensitive Operations Federal Functions Act',
    'Chris Murphy Greg Casar prediction market legislation',
    'CFTC prediction market ban government actions',
    'prediction market politics terrorism assassination ban',
    'Kalshi Polymarket BETS OFF Act',
    'Democratic prediction market regulation 2026',
    'BETS OFF Act stablecoin event contracts',
    'prediction market federal functions ban legislation',
    'CFTC regulated event trading ban 2026',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/define/bets-off-act',
  },
  openGraph: {
    title: "BETS OFF Act Explained: The Democratic Bill to Ban Prediction Markets on Government Actions",
    description:
      "The BETS OFF Act, introduced March 17, 2026, would prohibit CFTC-regulated platforms from listing contracts tied to government actions, terrorism, war, assassination, and events where a participant controls the outcome.",
    type: 'article',
    url: 'https://www.objectwire.org/define/bets-off-act',
    siteName: 'ObjectWire',
    publishedTime: '2026-03-18T16:00:00Z',
    section: 'Finance',
    tags: ['BETS OFF Act', 'Prediction Markets', 'CFTC', 'Chris Murphy', 'Greg Casar', 'Finance', 'Legislation'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "BETS OFF Act: What It Bans and Who It Targets | ObjectWire",
    description:
      "Democrats want to ban prediction market contracts on government actions, terrorism, war, and assassination. Here's what the BETS OFF Act actually says.",
  },
};

export default function BetsOffActPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <div className="bg-gradient-to-r from-slate-900 via-red-950 to-slate-900 text-white">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-red-300 text-sm font-mono tracking-wider mb-4">
              LEGISLATION • PREDICTION MARKETS • MARCH 2026
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              BETS OFF Act Explained: What It Is, What It Bans, and Who It Targets
            </h1>
            <p className="text-xl text-gray-200 mb-6 leading-relaxed">
              The <em>Banning Event Trading on Sensitive Operations and Federal Functions Act</em>{' '}
              aims to draw a hard line around prediction market contracts linked to
              government decisions, national security events, and situations where a
              participant controls the outcome.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-300">
              <span>March 18, 2026</span>
              <span>·</span>
              <span>Finance &amp; Legislation</span>
              <span>·</span>
              <span>6 min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <article className="prose prose-lg max-w-none">

          <p className="text-xl text-gray-700 leading-relaxed mb-6 font-semibold">
            On <strong>Monday, March 17, 2026</strong>, Senator{' '}
            <strong>Chris Murphy (D-CT)</strong> and Representative{' '}
            <strong>Greg Casar (D-TX)</strong> introduced the{' '}
            <strong>
              Banning Event Trading on Sensitive Operations and Federal Functions Act
            </strong>{' '}
            — better known as the <strong>BETS OFF Act</strong>. The bill is the latest in a
            wave of Democratic legislation targeting the prediction market industry, which
            has grown from a niche trading venue into a multibillion-dollar sector influencing
            political and policy narratives in real time.
          </p>

          {/* TL;DR box */}
          <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-lg not-prose">
            <p className="text-sm font-bold text-red-700 uppercase tracking-wide mb-2">TL;DR</p>
            <p className="text-gray-800 leading-relaxed">
              The BETS OFF Act would make it <strong>illegal</strong> for
              CFTC-regulated prediction market platforms to list or trade contracts
              tied to government actions, acts of terrorism or war, assassination,
              or any event where a participant &quot;knows or controls the outcome.&quot;
              It does not ban prediction markets outright — only specific categories
              of contract that Congress considers too sensitive or subject to manipulation.
            </p>
          </div>

          {/* Section 1: Full name & sponsors */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Full Bill Name and Sponsors
          </h2>
          <div className="overflow-x-auto mb-8 not-prose">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <tbody className="divide-y divide-gray-100">
                {[
                  ['Full Title', 'Banning Event Trading on Sensitive Operations and Federal Functions Act'],
                  ['Short Name', 'BETS OFF Act'],
                  ['Senate Sponsor', 'Sen. Chris Murphy (D-CT)'],
                  ['House Sponsor', 'Rep. Greg Casar (D-TX)'],
                  ['Introduced', 'Monday, March 17, 2026'],
                  ['Regulator Targeted', 'Commodity Futures Trading Commission (CFTC)'],
                  ['Primary Goal', 'Prohibit CFTC-regulated platforms from listing contracts on government actions and sensitive national security events'],
                ].map(([label, value]) => (
                  <tr key={label} className="even:bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-gray-700 w-48">{label}</td>
                    <td className="px-4 py-3 text-gray-800">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Section 2: What it bans */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            What the BETS OFF Act Would Ban
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The bill targets CFTC-regulated prediction market platforms specifically —
            meaning it would apply to exchanges like <strong>Kalshi</strong>, which operates
            under a CFTC-issued Designated Contract Market (DCM) license, and any future
            platforms that seek similar federal authorization. Here are the five categories
            of contracts the bill would prohibit:
          </p>

          <div className="not-prose space-y-4 my-6">
            {[
              {
                number: '1',
                label: 'Government Actions',
                body: 'Contracts whose outcome is determined by a U.S. federal, state, or local government decision, vote, ruling, or policy action. This would include contracts on Congressional votes, executive orders, regulatory decisions, and election outcomes.',
                color: 'border-red-500 bg-red-50',
              },
              {
                number: '2',
                label: 'Acts of Terrorism',
                body: 'Contracts tied to whether a terrorist attack occurs, its location, scale, or attribution. Sponsors argue such contracts create a financial incentive for bad actors to execute attacks.',
                color: 'border-orange-500 bg-orange-50',
              },
              {
                number: '3',
                label: 'Acts of War',
                body: 'Contracts on military action, conflict initiation, or troop deployment outcomes. Applies to both U.S. and foreign military activity.',
                color: 'border-orange-500 bg-orange-50',
              },
              {
                number: '4',
                label: 'Assassination',
                body: 'Contracts on whether a named individual — including elected officials, heads of state, or public figures — will be killed.',
                color: 'border-red-600 bg-red-50',
              },
              {
                number: '5',
                label: '"Knows or Controls the Outcome"',
                body: 'A broad catchall prohibiting contracts on any event where a participant in the market has material non-public information or control over the event\'s result — specifically targeting trades by government insiders, lawmakers, and officials.',
                color: 'border-purple-500 bg-purple-50',
              },
            ].map(({ number, label, body, color }) => (
              <div key={number} className={`border-l-4 ${color} p-5 rounded-r-xl`}>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-white border border-gray-300 text-xs font-bold text-gray-700 flex items-center justify-center">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{label}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Section 3: Who it targets */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Which Platforms Would Be Affected?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The bill applies to <strong>CFTC-regulated</strong> prediction market platforms —
            not unregulated or offshore markets. In practice, that means:
          </p>

          <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            {[
              {
                platform: 'Kalshi',
                status: 'Directly affected',
                detail: 'Operates as a CFTC-licensed Designated Contract Market (DCM). Lists contracts on election outcomes, Fed decisions, and Congressional actions — all of which could be prohibited.',
                tag: '🔴 In scope',
              },
              {
                platform: 'Polymarket',
                status: 'Indirectly affected',
                detail: 'Currently operates offshore (crypto-based, Polygon network). Not directly CFTC-regulated, but the bill could accelerate pressure to restrict U.S. user access.',
                tag: '🟡 Indirect pressure',
              },
              {
                platform: 'PredictIt',
                status: 'Potentially affected',
                detail: 'Operates under a CFTC no-action letter. The bill could invalidate existing exemptions for political event contracts.',
                tag: '🟠 At risk',
              },
              {
                platform: 'New entrants',
                status: 'Pre-emptively blocked',
                detail: 'Any platform seeking a new CFTC DCM license would be prohibited from listing the banned contract categories from day one.',
                tag: '🔴 Pre-blocked',
              },
            ].map(({ platform, detail, tag }) => (
              <div key={platform} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-900">{platform}</h3>
                  <span className="text-xs font-medium text-gray-600">{tag}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>

          {/* Section 4: Political context */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Political Context: Why Democrats Are Acting Now
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The BETS OFF Act arrives amid growing Democratic frustration with prediction
            markets that allow trading on Congressional votes, executive actions, and
            regulatory decisions — markets where lawmakers and government officials may
            hold material non-public information. The concern is dual:
          </p>
          <ul className="text-gray-700 leading-relaxed mb-6 space-y-2 list-disc list-inside">
            <li>
              <strong>Insider advantage:</strong> A senator who knows how a vote will go
              can profit from a prediction market contract on that vote before the public
              does — a form of legally gray insider trading not yet clearly addressed by
              the STOCK Act.
            </li>
            <li>
              <strong>Perverse incentives:</strong> Markets that assign probability to
              government outcomes may, in theory, create financial incentives for actors
              to influence those outcomes — particularly for low-probability/high-payout
              contracts on extreme events like assassinations or terrorist attacks.
            </li>
          </ul>

          <p className="text-gray-700 leading-relaxed mb-6">
            Critics of the bill, primarily from the libertarian and crypto communities,
            argue that prediction markets on government actions are among the most
            valuable for <em>accountability</em> — providing real-time public probability
            estimates that no polling or media coverage can replicate. Platforms like
            Kalshi have argued their contracts improve price discovery and give the public
            a clearer picture of legislative and regulatory risk.
          </p>

          <div className="bg-slate-50 border-l-4 border-slate-500 p-6 my-8 rounded-r-lg not-prose">
            <p className="text-sm font-bold text-slate-600 uppercase tracking-wide mb-2">Counter-argument</p>
            <p className="text-gray-700 leading-relaxed">
              Prediction market advocates contend that banning government-action contracts
              removes some of the most informative markets for public policy transparency —
              and that the &quot;controls the outcome&quot; provision is so broad it could
              chill any contract where a regulator might theoretically influence the result.
            </p>
          </div>

          {/* Section 5: Status */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Legislative Status
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The BETS OFF Act was introduced on <strong>March 17, 2026</strong>. As of
            publication, it has been referred to committee and does not yet have a scheduled
            hearing date. Democrats are currently in the minority in both chambers, meaning
            the bill faces significant structural headwinds to passage in its current form.
            However, the introduction signals continued Democratic intent to legislate
            limits on prediction market activity — particularly around elections and
            government functions — ahead of the 2026 midterm cycle.
          </p>

          {/* Related links */}
          <div className="not-prose mt-10 pt-6 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
              Related Coverage
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/define/how-do-prediction-markets-work" className="text-blue-600 hover:underline font-medium">
                  How Do Prediction Markets Work?
                </Link>
              </li>
              <li>
                <Link href="/define/largest-prediction-markets-united-states-2026" className="text-blue-600 hover:underline font-medium">
                  The Largest Prediction Markets in the United States 2026
                </Link>
              </li>
              <li>
                <Link href="/finance" className="text-blue-600 hover:underline font-medium">
                  ObjectWire Finance Coverage
                </Link>
              </li>
            </ul>
          </div>

        </article>
      </div>
    </main>
  );
}
