import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Winter Storm Delays Senate Vote as Jan. 30 Shutdown Deadline Looms | ObjectWire",
  description: "The Senate will reconvene Tuesday to take up $1.2 trillion in spending bills after canceling Monday's session, leaving just days to fund the Pentagon and other agencies.",
  keywords: ["Senate", "government shutdown", "winter storm", "spending bills", "Pentagon funding", "Congress", "January 30 deadline"],
  openGraph: {
    title: "Winter Storm Delays Senate Vote as Jan. 30 Shutdown Deadline Looms",
    description: "Senate cancels Monday session due to winter weather, leaving just days to pass $1.2 trillion spending package before shutdown deadline.",
    type: "article",
    publishedTime: "2026-01-23T14:30:00Z",
  }
};

export default function WinterStormSenatePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-900 via-red-700 to-red-900 text-white">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-red-200 text-sm font-mono tracking-wider mb-4">
              BREAKING NEWS • POLITICS
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Winter Storm Delays Senate Vote as Jan. 30 Shutdown Deadline Looms
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-gray-200">
              <span>January 23, 2026</span>
              <span>•</span>
              <span>Published 38 minutes ago</span>
              <span>•</span>
              <span>Government & Politics</span>
              <span>•</span>
              <span>4 min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <article className="prose prose-lg max-w-none">
          
          <p className="text-xl text-gray-700 leading-relaxed mb-6 font-semibold">
            WASHINGTON, D.C. — The Senate will reconvene Tuesday to take up $1.2 trillion in spending bills after 
            canceling Monday's session due to severe winter weather, leaving just days to fund the Pentagon and other 
            critical federal agencies before the January 30 shutdown deadline.
          </p>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Weather Forces Delay in Critical Vote</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Senate Majority Leader Chuck Schumer (D-NY) announced the cancellation of Monday's session late Sunday 
              evening as a major winter storm system brought heavy snow and ice to the Washington, D.C. metropolitan 
              area. The decision, while necessary for safety, has compressed an already tight legislative timeline with 
              just seven days remaining until the government funding deadline.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              "Due to hazardous weather conditions affecting the National Capital Region, the Senate will not be in 
              session on Monday," Schumer's office said in a statement. "We will reconvene Tuesday morning to continue 
              consideration of the appropriations package."
            </p>
            <p className="text-gray-700 leading-relaxed">
              The National Weather Service issued winter storm warnings for the region, with forecasts calling for 6-10 
              inches of snow and dangerous ice accumulations. Federal offices were also closed Monday, and many lawmakers 
              who had traveled home for the weekend faced delayed flights back to Washington.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">$1.2 Trillion Spending Package at Stake</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The spending bills in question represent the final tranche of fiscal year 2026 appropriations, covering:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li><strong>Defense Department:</strong> $886 billion for military operations, personnel, and modernization</li>
              <li><strong>Homeland Security:</strong> $62 billion for border security, immigration enforcement, and disaster relief</li>
              <li><strong>Labor, Health & Human Services:</strong> $224 billion for Medicare, public health, and workforce programs</li>
              <li><strong>State Department & Foreign Operations:</strong> $58 billion for diplomatic missions and foreign aid</li>
              <li><strong>Financial Services:</strong> $27 billion for Treasury, IRS, and regulatory agencies</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Combined with the six spending bills already passed in early January, this package would complete the full 
              $1.66 trillion discretionary budget negotiated under the Fiscal Responsibility Act debt ceiling deal.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Political Tensions Complicate Passage</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Beyond the weather delay, the spending package faces several political hurdles that could threaten its 
              passage before the January 30 deadline:
            </p>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6 rounded-r-lg">
              <h3 className="font-bold text-gray-900 mb-3">Key Contentious Issues:</h3>
              <ul className="space-y-3 mb-0">
                <li className="text-gray-700">
                  <strong>Border Security Funding:</strong> Republicans demanding $18 billion for physical barriers and 
                  increased Border Patrol staffing; Democrats offering $12 billion
                </li>
                <li className="text-gray-700">
                  <strong>Pentagon Diversity Programs:</strong> House conservatives seeking to cut DEI initiatives from 
                  military budget; Senate Democrats opposing
                </li>
                <li className="text-gray-700">
                  <strong>IRS Enforcement Funding:</strong> Dispute over $14 billion for tax enforcement expansion passed 
                  in Inflation Reduction Act
                </li>
                <li className="text-gray-700">
                  <strong>Abortion Restrictions:</strong> House Republicans inserting Hyde Amendment language into Labor-HHS 
                  bill; Senate negotiations ongoing
                </li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed">
              House Speaker Mike Johnson (R-LA) told reporters Friday that he expects the package to pass both chambers, 
              but acknowledged "there are still some differences to work out" between the House and Senate versions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shutdown Consequences Would Be Severe</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If Congress fails to pass the spending bills or another continuing resolution by midnight on January 30, 
              the government would face a partial shutdown affecting approximately <strong>1.3 million federal employees</strong> 
              and thousands of contractors across the affected agencies.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Defense Department would be particularly hard hit, with military operations continuing but civilian 
              support staff furloughed. The Pentagon has warned that a shutdown would disrupt:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>Maintenance and repairs on military equipment and facilities</li>
              <li>Training exercises for National Guard and Reserve units</li>
              <li>New defense contracts and weapons procurement</li>
              <li>Military family support services on bases nationwide</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              "A government shutdown in the middle of global security challenges would send exactly the wrong message to 
              our adversaries," said Defense Secretary Lloyd Austin in a statement last week. "Congress must act to provide 
              the resources our military needs to defend the nation."
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Timeline: What Happens Next</h2>
            <div className="bg-white border-2 border-gray-300 rounded-lg p-6 space-y-4">
              <div className="flex gap-4 pb-4 border-b border-gray-200">
                <div className="font-bold text-red-600 min-w-[140px]">Tuesday, Jan. 23</div>
                <div className="text-gray-700">Senate reconvenes; floor debate begins on spending package</div>
              </div>
              <div className="flex gap-4 pb-4 border-b border-gray-200">
                <div className="font-bold text-orange-600 min-w-[140px]">Wed-Thurs, Jan. 24-25</div>
                <div className="text-gray-700">Continued Senate debate; amendments considered; cloture vote expected</div>
              </div>
              <div className="flex gap-4 pb-4 border-b border-gray-200">
                <div className="font-bold text-yellow-600 min-w-[140px]">Friday, Jan. 26</div>
                <div className="text-gray-700">Target date for Senate final passage; bill returns to House</div>
              </div>
              <div className="flex gap-4 pb-4 border-b border-gray-200">
                <div className="font-bold text-blue-600 min-w-[140px]">Mon-Tues, Jan. 29-30</div>
                <div className="text-gray-700">House consideration and final vote; presidential signature needed</div>
              </div>
              <div className="flex gap-4">
                <div className="font-bold text-red-600 min-w-[140px]">Midnight, Jan. 30</div>
                <div className="text-gray-700"><strong>DEADLINE:</strong> Funding expires; shutdown begins if bills not passed</div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Lawmakers Express Frustration</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Several senators from both parties expressed frustration with the compressed timeline and the need for yet 
              another last-minute rush to avoid a shutdown.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              "We shouldn't be governing by crisis and deadline," said Sen. Susan Collins (R-ME), Vice Chair of the 
              Appropriations Committee. "But here we are again, racing against the clock because we couldn't get this 
              done months ago when we should have."
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sen. Patty Murray (D-WA), Chair of the Appropriations Committee, defended the process while acknowledging 
              the challenges: "Negotiating a bipartisan funding agreement that serves the needs of the American people 
              takes time. Yes, the weather delay is unfortunate, but we still have time to get this done responsibly."
            </p>
            <p className="text-gray-700 leading-relaxed">
              Progressive Democrats have also voiced concerns about the final package, with some threatening to vote 
              against it due to insufficient funding for climate programs and social services. However, leadership 
              remains confident they have the votes needed for passage.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">White House Position</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The White House has urged Congress to pass the full spending package without further delays, warning that 
              continuing resolutions create uncertainty and inefficiency across federal agencies.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              "President Trump expects Congress to fulfill its basic constitutional duty to fund the government," White 
              House Press Secretary Karoline Leavitt said Tuesday. "A partial government shutdown would be completely 
              unacceptable and entirely avoidable."
            </p>
            <p className="text-gray-700 leading-relaxed">
              Administration officials have been in regular contact with congressional leadership to monitor progress and 
              address any concerns. The Office of Management and Budget has reportedly begun preliminary shutdown 
              preparations as a precautionary measure, though officials stress they expect Congress to reach an agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Historical Context</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              This would mark the eighth time in the past decade that Congress has pushed up against a government funding 
              deadline, reflecting the ongoing dysfunction in the appropriations process. The last major shutdown occurred 
              in December 2018-January 2019, lasting 35 days and becoming the longest in U.S. history.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              That shutdown cost the U.S. economy an estimated $11 billion, according to the Congressional Budget Office, 
              with $3 billion in losses never recovered. Federal employees missed two paychecks, and essential services 
              from national parks to food safety inspections were disrupted.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Budget experts have long called for reforms to the appropriations process, including automatic continuing 
              resolutions to prevent shutdowns and biennial budgeting to reduce political brinkmanship. However, neither 
              party has shown sustained interest in such reforms when in power.
            </p>
          </section>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
            <h3 className="font-bold text-gray-900 mb-3">Key Takeaways:</h3>
            <ul className="space-y-2 mb-0">
              <li className="text-gray-700">• Senate postponed Monday session due to winter storm, reconvenes Tuesday</li>
              <li className="text-gray-700">• $1.2 trillion spending package must pass by January 30 to avoid partial shutdown</li>
              <li className="text-gray-700">• Key disputes remain over border security, Pentagon programs, and IRS funding</li>
              <li className="text-gray-700">• 1.3 million federal employees could be affected by potential shutdown</li>
              <li className="text-gray-700">• Legislative timeline now extremely compressed with just 7 days remaining</li>
              <li className="text-gray-700">• Leadership confident of passage despite obstacles and weather delay</li>
            </ul>
          </div>

          {/* Related Topics */}
          <div className="border-t border-gray-200 pt-8 mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Related Coverage</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link 
                href="/news"
                className="block p-4 border border-gray-200 rounded-lg hover:border-red-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">Latest Political News</h4>
                <p className="text-sm text-gray-600">More breaking news from Washington</p>
              </Link>
              <Link 
                href="/news/trump-tech-force-white-house-ai-recruitment-drive"
                className="block p-4 border border-gray-200 rounded-lg hover:border-red-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">Trump Tech Force Initiative</h4>
                <p className="text-sm text-gray-600">White House AI recruitment drive details</p>
              </Link>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 italic">
              <strong>Editor's Note:</strong> This is a developing story. Additional updates will be added as the 
              situation evolves and as Congress proceeds with consideration of the spending bills. Last updated: 
              January 23, 2026, 2:30 PM ET.
            </p>
          </div>

        </article>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Stay Updated on Government & Politics
            </h2>
            <p className="text-gray-600 mb-6">
              Get the latest updates on Congress, federal policy, and Washington developments.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/news"
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                More Political News
              </Link>
              <Link
                href="/contact"
                className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors border border-gray-300"
              >
                Subscribe for Updates
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
