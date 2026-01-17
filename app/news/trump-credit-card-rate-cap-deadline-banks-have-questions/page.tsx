import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Trump's Credit Card Rate Cap Deadline Looms: Banks Have Questions, No Answers | ObjectWire",
  description: "As President Trump's January 20 deadline for a 10% credit card rate cap approaches, banks, consumer groups, and politicians remain unclear on implementation and consequences.",
  keywords: ["Trump", "credit card rates", "10% cap", "banking", "interest rates", "White House", "financial policy"],
};

export default function TrumpCreditCardCapPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-blue-200 text-sm font-mono tracking-wider mb-4">
              BREAKING NEWS • FINANCE
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              As Trump's Deadline for Credit Card Rate Cap Looms, Banks Have Only Questions and No Answers
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-gray-200">
              <span>January 17, 2026</span>
              <span>•</span>
              <span>Financial Policy</span>
              <span>•</span>
              <span>2 min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <article className="prose prose-lg max-w-none">
          
          <p className="text-xl text-gray-700 leading-relaxed mb-6 font-semibold">
            NEW YORK — President Donald Trump a week ago told the credit card industry it had until Jan. 20 to comply 
            with his demand for a 10% cap on interest rates. With just days to go, consumer groups, politicians, and 
            bankers alike remain unclear on what the White House has planned and whether Trump even remains serious about the idea.
          </p>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">White House Provides No Details</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              So far, the White House has not provided any detail about what will happen to credit card companies that 
              don't lower card rates. White House Press Secretary Karoline Leavitt said the president has "an expectation" 
              that credit card companies will accede to his demand that they cap interest rates on credit cards at 10%.
            </p>
            <p className="text-gray-700 leading-relaxed">
              "I don't have a specific consequence to outline for you but certainly this is an expectation and frankly a 
              demand that the president has made," she said Friday.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Potential Impact on American Consumers</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A researcher who studied Trump's proposal when Trump first floated it during the 2024 presidential campaign 
              found that Americans would save roughly <strong>$100 billion in interest a year</strong> if credit card rates 
              were capped at 10%. The same researchers found that while the credit card industry would take a major hit, it 
              would still be profitable, although credit card rewards and other perks might be scaled back.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Current credit card interest rates average around 20-24% for most consumers, with some reaching as high as 30% 
              or more for those with poor credit. A 10% cap would represent a dramatic reduction that could fundamentally 
              reshape the consumer credit market.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Banking Industry Response</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Major credit card issuers including Chase, Bank of America, Citibank, and Capital One have remained largely 
              silent on the president's demand. Industry representatives have privately expressed confusion about how such 
              a cap would be implemented and whether the president has the legal authority to mandate such changes without 
              congressional action.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Banking industry experts suggest that implementing a 10% rate cap would require either new legislation from 
              Congress or regulatory changes through agencies like the Consumer Financial Protection Bureau (CFPB). The 
              lack of clarity on implementation mechanisms has left banks uncertain about how to respond to the president's 
              directive.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Happens Next?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              With the January 20 deadline approaching, several scenarios are possible. The administration could announce 
              specific enforcement mechanisms or regulatory proposals. Alternatively, the deadline could pass without 
              concrete action, similar to other presidential declarations that lacked follow-through.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Consumer advocacy groups have welcomed the president's attention to high credit card rates but express 
              skepticism about whether meaningful change will occur without legislative action. Meanwhile, financial markets 
              are watching closely, as major changes to credit card practices could significantly impact bank profitability 
              and consumer credit availability.
            </p>
          </section>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
            <h3 className="font-bold text-gray-900 mb-3">Key Takeaways:</h3>
            <ul className="space-y-2 mb-0">
              <li className="text-gray-700">• Trump demanded credit card rate cap at 10% by January 20</li>
              <li className="text-gray-700">• White House has provided no details on enforcement or consequences</li>
              <li className="text-gray-700">• Americans could save $100 billion annually under such a cap</li>
              <li className="text-gray-700">• Banks remain uncertain and have not announced compliance plans</li>
              <li className="text-gray-700">• Legal authority to mandate such changes remains unclear</li>
            </ul>
          </div>

          {/* Related Topics */}
          <div className="border-t border-gray-200 pt-8 mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Related Topics</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link 
                href="/news"
                className="block p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">Latest News</h4>
                <p className="text-sm text-gray-600">More breaking news stories</p>
              </Link>
              <Link 
                href="/news/trump-microsoft-data-centers-electricity-prices"
                className="block p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">Trump & Microsoft Data Centers</h4>
                <p className="text-sm text-gray-600">AI data centers and electricity costs</p>
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
              Stay Informed on Financial Policy
            </h2>
            <p className="text-gray-600 mb-6">
              Get the latest updates on banking regulations, consumer finance, and economic policy changes.
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
