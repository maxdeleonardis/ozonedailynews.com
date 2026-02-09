import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { NewsArticleSchema } from "@/components/NewsArticleSchema";

export const metadata: Metadata = {
  title: "David Sacks: All-In Podcast Host, PayPal Mafia, and Enterprise Software Pioneer | ObjectWire",
  description: "Complete profile of David Sacks - All-In Podcast co-host, PayPal COO, Yammer founder, Craft Ventures GP. From PayPal Mafia to enterprise SaaS kingmaker and tech policy influencer.",
  keywords: [
    "David Sacks",
    "David O. Sacks",
    "All-In Podcast",
    "PayPal Mafia",
    "Yammer",
    "Craft Ventures",
    "enterprise software",
    "SaaS investor",
    "Silicon Valley",
    "tech policy",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/davos/all-in-podcast/david-sacks',
  },
  openGraph: {
    title: "David Sacks Profile - PayPal Mafia Member & All-In Podcast Host",
    description: "Inside the career of David Sacks: PayPal COO, Yammer founder, Craft Ventures GP, and All-In Podcast co-host shaping tech policy debates.",
    type: "article",
    url: "https://www.objectwire.org/davos/all-in-podcast/david-sacks",
    images: [
      {
        url: "https://www.objectwire.org/images/david-sacks-og.jpg",
        width: 1200,
        height: 630,
        alt: "David Sacks - All-In Podcast Host",
      },
    ],
  },
};

export default function DavidSacksPage() {
  const publishedDate = new Date("2026-01-27T17:00:00Z").toISOString();
  
  return (
    <main className="min-h-screen bg-white">
      {/* NewsArticle Schema */}
      <NewsArticleSchema
        title="David Sacks: All-In Podcast Host, PayPal Mafia, and Enterprise Software Pioneer"
        description="Comprehensive profile of David Sacks, from his early days at PayPal through founding Yammer, building Craft Ventures, and becoming an influential voice on the All-In Podcast."
        author="ObjectWire Editorial Team"
        publishedTime={publishedDate}
        modifiedTime={publishedDate}
        imageUrl="https://www.objectwire.org/images/david-sacks-profile.jpg"
        articleUrl="https://www.objectwire.org/davos/all-in-podcast/david-sacks"
        section="Technology Profiles"
        keywords={["David Sacks", "All-In Podcast", "PayPal Mafia", "Yammer", "Craft Ventures"]}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-900 via-red-800 to-orange-900 text-white">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-red-200 text-sm font-mono tracking-wider mb-4">
              ALL-IN PODCAST • PAYPAL MAFIA • VENTURE CAPITAL
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              David Sacks: From PayPal to Podcast Power Broker
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-gray-200">
              <span>Updated January 27, 2026</span>
              <span>•</span>
              <span>Technology Profile</span>
              <span>•</span>
              <span>10 min read</span>
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
            { name: "David Sacks", item: "/davos/all-in-podcast/david-sacks" },
          ]}
        />

        <article className="prose prose-lg max-w-none">
          
          {/* Quick Facts Box */}
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 my-8 not-prose">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Facts</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Full Name</p>
                <p className="font-semibold text-gray-900">David Oliver Sacks</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Born</p>
                <p className="font-semibold text-gray-900">May 25, 1972 (age 53)</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Birthplace</p>
                <p className="font-semibold text-gray-900">Cape Town, South Africa</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Education</p>
                <p className="font-semibold text-gray-900">Stanford University (BA, JD)</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Known For</p>
                <p className="font-semibold text-gray-900">PayPal COO, Yammer Founder, Craft Ventures</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Net Worth</p>
                <p className="font-semibold text-gray-900">~$1.5-2B (estimated)</p>
              </div>
            </div>
          </div>

          <p className="text-xl text-gray-700 leading-relaxed mb-6 font-semibold">
            David Sacks is a technology entrepreneur, venture capitalist, and co-host of the All-In Podcast. As a member 
            of the legendary "PayPal Mafia," Sacks helped build one of the most influential companies in internet history 
            before founding Yammer and establishing Craft Ventures as a leading enterprise software investor.
          </p>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Early Life and Education</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Born in Cape Town, South Africa in 1972, Sacks immigrated to the United States as a child. He attended 
              <strong> Stanford University</strong>, where he earned a BA in Economics (1994) and later a JD from 
              Stanford Law School (1998).
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              At Stanford, Sacks became friends with Peter Thiel, editing the conservative student newspaper 
              <em>The Stanford Review</em> together. This partnership would later prove pivotal in his career trajectory.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Before fully entering tech, Sacks co-authored the controversial book <strong>"The Diversity Myth"</strong> (1995) 
              with Peter Thiel, critiquing multiculturalism in higher education. The book remains divisive and is rarely 
              discussed by Sacks today.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">PayPal: The Foundation</h2>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Joining PayPal (1999)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              In 1999, Peter Thiel recruited Sacks to join Confinity (which later became PayPal) as Chief Operating Officer. 
              Sacks was responsible for building the product and operations infrastructure that would scale PayPal from 
              a startup to a payments giant.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Key contributions at PayPal:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Product leadership</strong> - Oversaw development of core payment features</li>
              <li><strong>Anti-fraud systems</strong> - Built fraud detection that saved millions</li>
              <li><strong>Operations scaling</strong> - Managed explosive user growth (10M+ users by 2001)</li>
              <li><strong>IPO preparation</strong> - Helped prepare company for public markets</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">eBay Acquisition (2002)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              eBay acquired PayPal for $1.5 billion in 2002. As COO, Sacks received a substantial payout that provided 
              the capital for his next ventures. More importantly, he became part of the <strong>"PayPal Mafia"</strong> — 
              the group of former PayPal executives who went on to found or fund companies like LinkedIn, YouTube, Tesla, 
              SpaceX, Palantir, and Yelp.
            </p>
            <div className="bg-gray-50 border-l-4 border-red-600 p-6 my-6 rounded-r-lg">
              <h4 className="font-bold text-gray-900 mb-3">PayPal Mafia Connections:</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li><strong>Peter Thiel</strong> - CEO, later founded Palantir and Founders Fund</li>
                <li><strong>Elon Musk</strong> - Co-founder (X.com merger), later Tesla and SpaceX</li>
                <li><strong>Reid Hoffman</strong> - EVP, later founded LinkedIn</li>
                <li><strong>Max Levchin</strong> - CTO, later founded Affirm</li>
                <li><strong>Keith Rabois</strong> - VP, later Khosla Ventures and Founders Fund</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Yammer: Enterprise Social Networking</h2>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Founding Yammer (2008)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              After PayPal, Sacks tried several ventures (including Geni.com, a family networking site) before hitting 
              his stride with <strong>Yammer</strong> in 2008. Yammer was an enterprise social network designed to 
              improve internal communication at companies.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The pitch: "Facebook for the enterprise" — but secure, compliant, and IT-approved.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Explosive Growth</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Yammer's freemium model drove viral adoption:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Free for individuals to join their company network</li>
              <li>Paid upgrades for enterprise features (admin controls, integrations, analytics)</li>
              <li>Network effects: value increased as more employees joined</li>
              <li>85% of Fortune 500 companies used Yammer by 2012</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Microsoft Acquisition (2012)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Microsoft acquired Yammer for <strong>$1.2 billion</strong> in 2012, one of the largest acquisitions 
              in enterprise social software history. Sacks stayed on to integrate Yammer into Microsoft's Office 365 suite.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              While Yammer eventually lost ground to Microsoft Teams and Slack, the acquisition validated enterprise 
              social networking and made Sacks a proven founder-operator in the SaaS world.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Craft Ventures: Building a VC Powerhouse</h2>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Founding Craft Ventures (2017)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              In 2017, Sacks founded <strong>Craft Ventures</strong>, a venture capital firm focused on enterprise 
              software, SaaS, and marketplace businesses. The firm's strategy: back experienced founders building 
              category-defining companies.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Fund size:</strong> Started with $350M Fund I, now manages over $2B+ across multiple funds.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Notable Investments</h3>
            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <h4 className="font-bold text-gray-900 mb-4">Craft Ventures Portfolio Highlights:</h4>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <p className="font-bold text-gray-900">Affirm</p>
                  <p className="text-sm text-gray-700">Buy-now-pay-later leader founded by Max Levchin</p>
                  <p className="text-sm text-gray-700">IPO 2021 at $12B+ valuation</p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <p className="font-bold text-gray-900">SpaceX</p>
                  <p className="text-sm text-gray-700">Early investor in Elon Musk's space venture</p>
                  <p className="text-sm text-gray-700">Current valuation: $175B+ (2026)</p>
                </div>
                <div className="border-l-4 border-purple-600 pl-4">
                  <p className="font-bold text-gray-900">Bird (Scooters)</p>
                  <p className="text-sm text-gray-700">Electric scooter sharing platform</p>
                  <p className="text-sm text-gray-700">Mixed outcome: IPO SPAC, later struggled</p>
                </div>
                <div className="border-l-4 border-orange-600 pl-4">
                  <p className="font-bold text-gray-900">Reddit</p>
                  <p className="text-sm text-gray-700">Social media platform</p>
                  <p className="text-sm text-gray-700">IPO 2024 at $6.5B valuation</p>
                </div>
                <div className="border-l-4 border-indigo-600 pl-4">
                  <p className="font-bold text-gray-900">ClickUp</p>
                  <p className="text-sm text-gray-700">Project management software</p>
                  <p className="text-sm text-gray-700">Valuation: $4B (2021)</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Investment Thesis</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Craft Ventures focuses on:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Enterprise SaaS</strong> - B2B software with recurring revenue</li>
              <li><strong>Marketplaces</strong> - Network effects and winner-take-most dynamics</li>
              <li><strong>Experienced founders</strong> - Second or third-time entrepreneurs</li>
              <li><strong>Capital efficiency</strong> - Unit economics and profitability paths</li>
              <li><strong>Vertical integration</strong> - Companies that own their full stack</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All-In Podcast Co-Host</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In 2020, Sacks became a co-host of the <Link href="/davos/all-in-podcast" className="text-red-600 hover:underline font-semibold">
              All-In Podcast</Link> alongside Chamath Palihapitiya, Jason Calacanis, and David Friedberg. The podcast 
              quickly became one of the most influential voices in technology and policy.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Role and Perspective</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sacks is known on the podcast for:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Libertarian worldview</strong> - Strong free market advocate, skeptical of regulation</li>
              <li><strong>Contrarian takes</strong> - Willing to take unpopular positions on culture war issues</li>
              <li><strong>Historical context</strong> - Brings historical analogies to current events</li>
              <li><strong>First principles thinking</strong> - Breaks down complex issues to fundamentals</li>
              <li><strong>Foreign policy focus</strong> - Vocal critic of interventionist policies</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Memorable Moments</h3>
            <div className="bg-red-50 border-l-4 border-red-600 p-6 my-6 rounded-r-lg">
              <ul className="space-y-3 text-gray-700">
                <li><strong>Ukraine conflict (2022-2024)</strong> - Controversial criticism of U.S. involvement, 
                    accused of being "pro-Russia"</li>
                <li><strong>Twitter/X acquisition (2022)</strong> - Defended Elon Musk's takeover and mass layoffs</li>
                <li><strong>Effective altruism critique (2022)</strong> - Called out EA movement after FTX collapse</li>
                <li><strong>Davos 2026</strong> - Challenged Klaus Schwab on stakeholder capitalism</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Political Views and Controversies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sacks is arguably the most politically controversial of the All-In hosts, often taking positions that 
              generate fierce debate:
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Key Positions</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Anti-woke</strong> - Vocal critic of DEI initiatives and cancel culture</li>
              <li><strong>Non-interventionist</strong> - Opposes U.S. military involvement abroad</li>
              <li><strong>Free speech absolutist</strong> - Defends controversial speech, even when offensive</li>
              <li><strong>Anti-regulation</strong> - Believes markets self-correct better than government</li>
              <li><strong>Pro-tech innovation</strong> - Opposes AI regulation, crypto restrictions, etc.</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Major Controversies</h3>
            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-6 rounded-r-lg">
              <ul className="space-y-3 text-gray-700">
                <li><strong>"The Diversity Myth" book</strong> - Co-authored controversial book in the 1990s that 
                    critics call racist</li>
                <li><strong>Ukraine stance</strong> - Accused of being an apologist for Russia, defending territorial 
                    concessions</li>
                <li><strong>Trump support</strong> - Defended Trump policies while claiming to be independent</li>
                <li><strong>COVID-19 response</strong> - Criticized lockdowns and mandates, called overreach</li>
                <li><strong>Silicon Valley Bank collapse</strong> - Initially defended bailout, then walked back</li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              These positions have made Sacks a polarizing figure. Supporters praise his intellectual consistency 
              and courage to challenge orthodoxy. Critics accuse him of using libertarian principles to defend 
              right-wing politics.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Personal Life</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Family:</strong> Married to Jacqueline Tortorice; three children</li>
              <li><strong>Location:</strong> San Francisco Bay Area (Atherton/Woodside)</li>
              <li><strong>Hobbies:</strong> History reading, poker, wine collecting</li>
              <li><strong>Political donations:</strong> Has donated to both Republican and Democratic candidates 
                  over the years</li>
              <li><strong>Social media:</strong> Active on X/Twitter with 600K+ followers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Impact and Legacy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              David Sacks has left his mark on technology and culture in multiple ways:
            </p>
            <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-4">
              <li><strong>Enterprise software pioneer</strong> - Yammer validated freemium model for B2B SaaS</li>
              <li><strong>VC returns</strong> - Craft Ventures has generated strong returns for LPs</li>
              <li><strong>PayPal Mafia legacy</strong> - Part of the most successful entrepreneurial network in history</li>
              <li><strong>Media influence</strong> - The All-In Podcast shapes tech and policy narratives for millions</li>
              <li><strong>Political discourse</strong> - Brings libertarian/conservative voice to tech conversations</li>
            </ol>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-6">
              <p className="font-semibold text-gray-900 mb-2">Bottom Line:</p>
              <p className="text-gray-700">
                David Sacks is one of the most accomplished and controversial figures in Silicon Valley. His track 
                record as an operator (PayPal, Yammer) and investor (Craft Ventures) is undeniable. His political 
                views make him a lightning rod for criticism but also give him a unique voice in an increasingly 
                homogeneous industry. Whether you agree with him or not, Sacks is impossible to ignore.
              </p>
            </div>
          </section>

          {/* Related Content */}
          <section className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Profiles</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link 
                href="/davos/all-in-podcast/jason"
                className="block p-4 border border-gray-200 rounded-lg hover:border-red-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">Jason Calacanis Profile</h4>
                <p className="text-sm text-gray-600">All-In Podcast co-host and angel investor extraordinaire</p>
              </Link>
              <Link 
                href="/davos/all-in-podcast"
                className="block p-4 border border-gray-200 rounded-lg hover:border-red-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">All-In Podcast at Davos 2026</h4>
                <p className="text-sm text-gray-600">Coverage of the podcast's historic WEF appearance</p>
              </Link>
              <Link 
                href="/podcasts/all-in-podcast"
                className="block p-4 border border-gray-200 rounded-lg hover:border-red-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">All-In Podcast Overview</h4>
                <p className="text-sm text-gray-600">Complete guide to tech's most influential podcast</p>
              </Link>
              <Link 
                href="/davos"
                className="block p-4 border border-gray-200 rounded-lg hover:border-red-400 hover:shadow-md transition-all"
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
