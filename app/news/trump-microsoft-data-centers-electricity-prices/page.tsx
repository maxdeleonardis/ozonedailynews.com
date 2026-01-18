import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Trump and Microsoft Laud Data-Center Commitments to Address Electricity Prices | ObjectWire",
  description: "Microsoft commits to paying higher utility bills for US data centers powering AI models, drawing praise from President Trump amid concerns about rising electricity costs.",
  keywords: ["Trump", "Microsoft", "data centers", "AI", "electricity prices", "utility costs", "artificial intelligence", "Brad Smith"],
};

export default function TrumpMicrosoftDataCentersPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-900 via-blue-900 to-green-900 text-white">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-green-200 text-sm font-mono tracking-wider mb-4">
              BREAKING NEWS • TECHNOLOGY
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Trump and Microsoft Laud Data-Center Commitments as Key to Addressing Electricity Prices
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-gray-200">
              <span>January 17, 2026</span>
              <span>•</span>
              <span>Technology & Energy</span>
              <span>•</span>
              <span>3 min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <article className="prose prose-lg max-w-none">
          
          <p className="text-xl text-gray-700 leading-relaxed mb-6 font-semibold">
            WASHINGTON — Microsoft promised to pay higher utility bills for all of its U.S. data centers powering 
            artificial-intelligence models, a pledge that drew praise from President Trump and is designed to address 
            local fears that AI is pushing up electricity prices.
          </p>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Microsoft's Unprecedented Commitment</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The software company committed Tuesday to paying high-enough electricity rates to cover the electricity costs 
              of its data centers so they aren't passed on to consumers, replenishing more water than it withdraws locally 
              and paying the full property tax rate. Many of the promises build on current practices in states such as 
              Wisconsin that the company is now applying to its entire portfolio.
            </p>
            <p className="text-gray-700 leading-relaxed">
              "The industry operated in a certain manner in the first half of the decade that is not an appropriate path 
              for the second half of the decade," Microsoft President and Vice Chair Brad Smith said in an interview, citing 
              private land purchases as an example. He unveiled the pledges at an event near the White House on Tuesday 
              morning and lauded Trump's AI strategy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Political Context and Economic Concerns</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The move comes as the president has announced many proposals aimed at gaining more leverage over the economy 
              and the cost of living, including looking for ways to minimize the impact of electricity-guzzling data centers 
              that are critical to the country's AI race with China. At the same time, Trump's advisers are looking for ways 
              to lower costs for Americans concerned about living expenses, including electricity bills.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The president has touted the American economy as strong, pointed to economic growth and a low unemployment rate 
              and graded himself "A-plus-plus-plus-plus-plus" on the economy. But he has also expressed frustration at 
              Americans' extended sour mood about the economy and fixation on high prices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why This Matters: The AI Energy Crisis</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Data centers powering artificial intelligence consume massive amounts of electricity, with some facilities 
              using as much power as small cities. As companies like Microsoft, Google, and Amazon race to build more AI 
              infrastructure, concerns have grown in local communities about rising electricity costs and strain on power grids.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Microsoft's commitment addresses these concerns directly by ensuring that the company—not local residents—bears 
              the cost of its electricity-intensive operations. This represents a significant shift in how tech companies 
              approach their infrastructure investments and relationship with local communities.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Microsoft Is Promising</h2>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6 rounded-r-lg">
              <h3 className="font-bold text-gray-900 mb-3">Key Commitments:</h3>
              <ul className="space-y-2 mb-0">
                <li className="text-gray-700">
                  <strong>Electricity Costs:</strong> Pay rates high enough to cover full costs without passing them to consumers
                </li>
                <li className="text-gray-700">
                  <strong>Water Usage:</strong> Replenish more water than data centers withdraw locally
                </li>
                <li className="text-gray-700">
                  <strong>Property Taxes:</strong> Pay full property tax rates without seeking special exemptions
                </li>
                <li className="text-gray-700">
                  <strong>Scope:</strong> Apply these standards across entire U.S. data center portfolio
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Implications for the Tech Industry</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Microsoft's announcement could set a new standard for how major tech companies approach data center operations. 
              With soaring electricity costs becoming a hot political issue, other AI companies may face pressure to make 
              similar commitments to maintain their social license to operate massive computing facilities.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The pledges also reflect the growing political importance of addressing AI's environmental and economic impact. 
              As the U.S. competes with China in AI development, balancing innovation with local community concerns has become 
              a strategic priority for both government and industry leaders.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Broader Context: AI and America's Future</h2>
            <p className="text-gray-700 leading-relaxed">
              President Trump has made American leadership in AI a key priority, viewing it as essential to national security 
              and economic competitiveness. Microsoft's commitments align with the administration's goals of promoting AI 
              development while addressing public concerns about its costs. This partnership between government and industry 
              represents a new model for managing the societal impacts of rapidly advancing technology, with implications 
              extending far beyond electricity bills to questions of sustainable innovation and equitable economic growth.
            </p>
          </section>

          {/* Related Topics */}
          <div className="border-t border-gray-200 pt-8 mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Related Topics</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link 
                href="/news/trump-credit-card-rate-cap-deadline-banks-have-questions"
                className="block p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">Trump Credit Card Rate Cap</h4>
                <p className="text-sm text-gray-600">Banks face deadline uncertainty</p>
              </Link>
              <Link 
                href="/news"
                className="block p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">Latest News</h4>
                <p className="text-sm text-gray-600">More breaking news stories</p>
              </Link>
            </div>
          </div>

        </article>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Stay Updated on Tech & Policy
            </h2>
            <p className="text-gray-600 mb-6">
              Get the latest news on technology policy, AI development, and their impact on the economy.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/news"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                More News
              </Link>
              <Link
                href="/contact"
                className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors border border-gray-300"
              >
                Subscribe
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
