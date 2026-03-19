import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { NewsArticleSchema } from "@/components/NewsArticleSchema";

export const metadata: Metadata = {
  title: "Jason Calacanis: All-In Podcast Host, Angel Investor, and Tech Entrepreneur Profile | ObjectWire",
  description: "Complete profile of Jason Calacanis - All-In Podcast co-host, angel investor in Uber and Robinhood, founder of LAUNCH and Inside.com. Career highlights, investments, and influence in Silicon Valley.",
  keywords: [
    "Jason Calacanis",
    "All-In Podcast",
    "angel investor",
    "This Week in Startups",
    "LAUNCH",
    "Uber investor",
    "Robinhood investor",
    "Silicon Valley",
    "tech entrepreneur",
    "startup investor",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/davos/all-in-podcast/jason',
  },
  openGraph: {
    title: "Jason Calacanis Profile - All-In Podcast Host & Angel Investor",
    description: "Inside the career of Jason Calacanis: from Weblogs Inc. to angel investing powerhouse, All-In Podcast co-host, and Silicon Valley kingmaker.",
    type: "article",
    url: "https://www.objectwire.org/davos/all-in-podcast/jason",
    images: [
      {
        url: "https://www.objectwire.org/images/jason-calacanis-og.jpg",
        width: 1200,
        height: 630,
        alt: "Jason Calacanis - All-In Podcast Host",
      },
    ],
  },
};

export default function JasonCalacanisPage() {
  const publishedDate = new Date("2026-01-27T16:00:00Z").toISOString();
  
  return (
    <main className="min-h-screen bg-white">
      {/* NewsArticle Schema */}
      <NewsArticleSchema
        title="Jason Calacanis: All-In Podcast Host, Angel Investor, and Tech Entrepreneur"
        description="Comprehensive profile of Jason Calacanis, covering his journey from tech journalist to angel investor powerhouse, All-In Podcast co-host, and influential voice in Silicon Valley."
        author="ObjectWire Editorial Team"
        publishedTime={publishedDate}
        modifiedTime={publishedDate}
        imageUrl="https://www.objectwire.org/images/jason-calacanis-profile.jpg"
        articleUrl="https://www.objectwire.org/davos/all-in-podcast/jason"
        section="Technology Profiles"
        keywords={["Jason Calacanis", "All-In Podcast", "angel investor", "tech entrepreneur"]}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-blue-200 text-sm font-mono tracking-wider mb-4">
              ALL-IN PODCAST • ANGEL INVESTOR
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Jason Calacanis: From Tech Journalist to Silicon Valley Power Broker
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-gray-200">
              <span>Updated January 27, 2026</span>
              <span>•</span>
              <span>Technology Profile</span>
              <span>•</span>
              <span>9 min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { name: "Home", item: "/" },
            { name: "Davos 2026", item: "/davos" },
            { name: "All-In Podcast", item: "/davos/all-in-podcast" },
            { name: "Jason Calacanis", item: "/davos/all-in-podcast/jason" },
          ]}
        />

        <article className="prose prose-lg max-w-none">
          
          {/* Quick Facts Box */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 my-8 not-prose">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Facts</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Full Name</p>
                <p className="font-semibold text-gray-900">Jason McCabe Calacanis</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Born</p>
                <p className="font-semibold text-gray-900">November 28, 1970 (age 55)</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Birthplace</p>
                <p className="font-semibold text-gray-900">Brooklyn, New York</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Education</p>
                <p className="font-semibold text-gray-900">Fordham University</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Known For</p>
                <p className="font-semibold text-gray-900">All-In Podcast, Angel Investing</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Net Worth</p>
                <p className="font-semibold text-gray-900">~$100-200M (estimated)</p>
              </div>
            </div>
          </div>

          <p className="text-xl text-gray-700 leading-relaxed mb-6 font-semibold">
            Jason Calacanis is a serial entrepreneur, angel investor, and co-host of the All-In Podcast. Best known 
            for his early investments in companies like Uber and Robinhood, Calacanis has become one of Silicon Valley's 
            most recognizable and opinionated voices on technology, startups, and policy.
          </p>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Early Career: From Journalism to Entrepreneurship</h2>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Silicon Alley Reporter (1996-2001)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Calacanis started his career during the first dot-com boom, founding the <strong>Silicon Alley Reporter</strong> 
              in 1996. The print magazine covered New York's emerging tech scene and became required reading for anyone 
              involved in internet startups.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The publication reached 60,000 circulation and hosted the Silicon Alley Reporter 100 Awards, which became 
              a major networking event for the New York tech community. Calacanis sold the magazine in 2001 for an 
              undisclosed sum to Dow Jones subsidiary Factiva.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Weblogs Inc. (2003-2005)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              In 2003, Calacanis co-founded <strong>Weblogs Inc.</strong> with Brian Alvey, creating a network of blogs 
              covering niche topics. The company's flagship property, <strong>Engadget</strong>, became one of the most 
              influential tech blogs in the world.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              AOL acquired Weblogs Inc. in 2005 for a reported $25-30 million. This exit gave Calacanis the capital 
              and credibility to transition into angel investing, where he would make his most impactful mark.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Angel Investing Career</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Calacanis has invested in over 200 startups since 2009, with notable successes that have generated 
              extraordinary returns. His investment strategy focuses on backing founders early, often at the pre-seed 
              or seed stage.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Legendary Investments</h3>
            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <h4 className="font-bold text-gray-900 mb-4">Top Portfolio Companies:</h4>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <p className="font-bold text-gray-900">Uber</p>
                  <p className="text-sm text-gray-700">Invested: 2009-2010 at $4M valuation</p>
                  <p className="text-sm text-gray-700">Peak Value: Estimated 100-200x return</p>
                  <p className="text-sm text-gray-600 italic">One of his earliest and most profitable investments</p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <p className="font-bold text-gray-900">Robinhood</p>
                  <p className="text-sm text-gray-700">Invested: Early seed round</p>
                  <p className="text-sm text-gray-700">Outcome: IPO 2021 at $32B valuation</p>
                  <p className="text-sm text-gray-600 italic">Democratized stock trading for millennials</p>
                </div>
                <div className="border-l-4 border-purple-600 pl-4">
                  <p className="font-bold text-gray-900">Calm</p>
                  <p className="text-sm text-gray-700">Invested: Early rounds</p>
                  <p className="text-sm text-gray-700">Valuation: $2B+ (2020 peak)</p>
                  <p className="text-sm text-gray-600 italic">Mental health and meditation app</p>
                </div>
                <div className="border-l-4 border-red-600 pl-4">
                  <p className="font-bold text-gray-900">Thumbtack</p>
                  <p className="text-sm text-gray-700">Invested: Seed stage</p>
                  <p className="text-sm text-gray-700">Valuation: $1.7B (2019)</p>
                  <p className="text-sm text-gray-600 italic">Local services marketplace</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Investment Philosophy</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Calacanis's investment approach is founder-focused and stage-agnostic:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Back missionaries, not mercenaries</strong> - Prefers founders driven by mission over profit</li>
              <li><strong>Invest early and often</strong> - Writes small checks ($25K-$100K) at pre-seed/seed</li>
              <li><strong>Be helpful, not intrusive</strong> - Provides advice but doesn't micromanage</li>
              <li><strong>Think 10-year horizon</strong> - Patient capital for category-defining companies</li>
              <li><strong>Follow-on selectively</strong> - Doubles down on winners but knows when to hold</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">LAUNCH and This Week in Startups</h2>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">LAUNCH Accelerator & Events</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              In 2011, Calacanis founded <strong>LAUNCH</strong>, combining a startup accelerator with an annual 
              conference. The LAUNCH Festival became a major event for early-stage startups to showcase products 
              and secure funding.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Notable companies that launched at LAUNCH include Yammer (acquired by Microsoft for $1.2B), Mint.com, 
              and Dropbox. The accelerator invested in over 100 companies before evolving into more focused syndicate 
              investing.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">This Week in Startups Podcast</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Since 2009, Calacanis has hosted <strong>This Week in Startups</strong> (TWiST), one of the longest-running 
              and most influential podcasts in the tech industry. The show features interviews with founders, investors, 
              and tech leaders, along with startup pitch competitions.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              With over 1,000 episodes and millions of downloads, TWiST established Calacanis as a media personality 
              before his transition to the All-In Podcast in 2020.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All-In Podcast Co-Host</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In 2020, Calacanis co-founded the <Link href="/davos/all-in-podcast" className="text-blue-600 hover:underline font-semibold">
              All-In Podcast</Link> with Chamath Palihapitiya, David Sacks, and David Friedberg. What started as a 
              weekly Zoom call among friends became one of the most influential podcasts in technology and policy.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Role and Perspective</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              On the All-In Podcast, Calacanis often plays the role of:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>The moderator</strong> - Keeps discussions on track and moving forward</li>
              <li><strong>The optimist</strong> - Generally pro-innovation and pro-free market</li>
              <li><strong>The populist</strong> - Champions retail investors and middle-class interests</li>
              <li><strong>The networker</strong> - Leverages his relationships to book high-profile guests</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Notable Moments</h3>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6 rounded-r-lg">
              <ul className="space-y-3 text-gray-700">
                <li><strong>GameStop/Reddit defense (2021)</strong> - Passionately defended retail investors during 
                    the GameStop short squeeze</li>
                <li><strong>Poker game hosting</strong> - The "All-In Summit" poker tournament became legendary in 
                    tech circles</li>
                <li><strong>Ukraine coverage (2022)</strong> - Brought humanitarian focus to geopolitical discussions</li>
                <li><strong>Davos 2026</strong> - Helped organize the podcast's historic WEF appearance</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Controversies and Criticism</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Calacanis's outspoken nature has led to several controversies:
            </p>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-4">Elon Musk Friendship</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Critics accuse Calacanis of being overly deferential to Elon Musk, with whom he has a close friendship. 
              This relationship has led to accusations of bias when discussing Tesla, SpaceX, or Twitter/X controversies.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-4">Crypto Skepticism → Enthusiasm</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Calacanis was initially skeptical of cryptocurrency, calling Bitcoin a "Ponzi scheme" in early podcasts. 
              He later became more enthusiastic, leading to accusations of flip-flopping for financial gain.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-4">Political Evolution</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Once a vocal supporter of Democratic candidates, Calacanis has shifted toward more libertarian and 
              centrist positions, particularly on issues of regulation, taxation, and social policy. This evolution 
              has alienated some former supporters while attracting new audiences.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Personal Life</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Family:</strong> Married to Jade Li; three children</li>
              <li><strong>Location:</strong> Primary residence in Los Angeles; offices in San Francisco</li>
              <li><strong>Hobbies:</strong> Poker, vintage cars, wine collecting</li>
              <li><strong>Philanthropy:</strong> Supports education and entrepreneurship programs</li>
              <li><strong>Media presence:</strong> Active on Twitter/X with 500K+ followers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Impact and Legacy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Jason Calacanis has influenced Silicon Valley through multiple channels:
            </p>
            <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-4">
              <li><strong>Democratized angel investing</strong> - Made startup investing accessible through syndicates 
                  and education</li>
              <li><strong>Media influence</strong> - His podcasts have shaped tech narratives for over a decade</li>
              <li><strong>Founder support</strong> - Known for being genuinely helpful to portfolio companies</li>
              <li><strong>Policy voice</strong> - Increasingly influential in tech policy discussions</li>
              <li><strong>Next generation</strong> - Mentored dozens of angel investors and podcasters</li>
            </ol>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
              <p className="font-semibold text-gray-900 mb-2">Bottom Line:</p>
              <p className="text-gray-700">
                Whether you view him as a visionary investor or a self-promoting opportunist, Jason Calacanis has 
                undeniably shaped startup culture for two decades. His combination of media savvy, investing acumen, 
                and networking prowess makes him one of the most influential non-billionaires in Silicon Valley.
              </p>
            </div>
          </section>

          {/* Related Content */}
          <section className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Profiles</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link 
                href="/davos/all-in-podcast/david-sacks"
                className="block p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">David Sacks Profile</h4>
                <p className="text-sm text-gray-600">All-In Podcast co-host and PayPal Mafia member</p>
              </Link>
              <Link 
                href="/davos/all-in-podcast"
                className="block p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">All-In Podcast at Davos 2026</h4>
                <p className="text-sm text-gray-600">Coverage of the podcast's WEF appearance</p>
              </Link>
              <Link 
                href="/podcasts/all-in-podcast"
                className="block p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">All-In Podcast Overview</h4>
                <p className="text-sm text-gray-600">Complete guide to tech's most influential podcast</p>
              </Link>
              <Link 
                href="/davos"
                className="block p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">Davos 2026 Coverage</h4>
                <p className="text-sm text-gray-600">World Economic Forum Annual Meeting highlights</p>
              </Link>
            </div>
          </section>

        </article>
      </div>
    </main>
  );
}
