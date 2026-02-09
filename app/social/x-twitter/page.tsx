import type { Metadata } from "next";
import Link from "next/link";
import { NewsArticleSchema } from "@/components/NewsArticleSchema";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "X (Twitter) Wiki 2026: History, Elon Musk Acquisition & 550M Users",
  description: "Complete profile of X (formerly Twitter) - founded 2006, acquired by Elon Musk for $44B in 2022. Now rebranded as X with 550 million monthly users.",
  keywords: [
    "X",
    "Twitter",
    "Elon Musk",
    "social media",
    "microblogging",
    "Jack Dorsey",
    "X Corp",
    "tweets",
    "social network",
  ],
  openGraph: {
    title: "X (Twitter): Complete Company Profile & History | ObjectWire",
    description: "From Twitter to X - Elon Musk's transformation of the microblogging platform.",
    type: "article",
    url: "https://www.objectwire.org/x-twitter",
    images: [
      {
        url: "https://www.objectwire.org/x-twitter-og.jpg",
        width: 1200,
        height: 630,
        alt: "X (Twitter) Company Profile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "X (Twitter) Wiki 2026: History, Elon Musk Acquisition & 550M Users",
    description: "Complete profile of X, the platform formerly known as Twitter.",
  },
};

export default function XTwitterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-900">
      <NewsArticleSchema
        title="X (Twitter): Complete Company Profile & History"
        description="Comprehensive profile of X, formerly known as Twitter. Founded in 2006, acquired by Elon Musk for $44 billion in 2022, rebranded to X in 2023 with 550 million monthly users."
        publishedTime="2024-03-30T00:00:00Z"
        modifiedTime="2026-02-07T00:00:00Z"
        author="ObjectWire Editorial Team"
        imageUrl="https://www.objectwire.org/x-twitter-company.jpg"
        articleUrl="https://www.objectwire.org/x-twitter"
        section="Technology"
        keywords={["X", "Twitter", "Elon Musk", "social media", "Jack Dorsey", "microblogging"]}
      />

      <Breadcrumb
        items={[
          { name: "Home", item: "/" },
          { name: "X (Twitter)", item: "/x-twitter" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="mb-12 text-center">
          <div className="inline-block bg-white text-black px-6 py-2 rounded-full text-sm font-semibold mb-4">
            MICROBLOGGING PLATFORM
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            X <span className="text-gray-500 text-4xl md:text-5xl">(formerly Twitter)</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The Everything App — Real-Time Conversations, News, and Digital Public Square
          </p>
        </header>

        {/* Quick Facts Box */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-12 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-3xl">𝕏</span>
            Quick Facts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-200">
            <div>
              <p className="text-gray-400 text-sm mb-1">Founded (as Twitter)</p>
              <p className="text-xl font-semibold">March 21, 2006</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Rebranded to X</p>
              <p className="text-xl font-semibold">July 23, 2023</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Original Founders</p>
              <p className="text-xl font-semibold">Jack Dorsey, Noah Glass, Biz Stone, Evan Williams</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Current Owner & CEO</p>
              <p className="text-xl font-semibold">Elon Musk</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Headquarters</p>
              <p className="text-xl font-semibold">San Francisco, California</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Acquisition Price</p>
              <p className="text-xl font-semibold">$44 Billion (2022)</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Monthly Active Users</p>
              <p className="text-xl font-semibold">~550 Million (2026)</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Parent Company</p>
              <p className="text-xl font-semibold">X Corp (Private)</p>
            </div>
          </div>
        </div>

        {/* Company Overview */}
        <section className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6">Company Overview</h2>
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong className="text-white">X</strong> (formerly Twitter) is a social media platform focused on 
              real-time information sharing and public conversation. Founded in 2006 as Twitter by Jack Dorsey, 
              Noah Glass, Biz Stone, and Evan Williams, the platform pioneered microblogging with its iconic 
              140-character (later 280-character) tweet format.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Twitter became the de facto platform for breaking news, public discourse, celebrity communication, 
              and political debate. The platform's influence extended far beyond its user count, shaping news cycles, 
              launching movements like #MeToo and Arab Spring, and serving as a direct communication channel for 
              world leaders, journalists, and public figures.
            </p>
            <p className="text-gray-300 leading-relaxed">
              In October 2022, Elon Musk acquired Twitter for $44 billion in one of the largest leveraged buyouts 
              in tech history. Musk took the company private, implemented massive restructuring, and rebranded it 
              to "X" in July 2023 as part of his vision to create an "everything app" combining social media, 
              payments, and other services.
            </p>
          </div>
        </section>

        {/* Founding History */}
        <section className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6">Founding & Early History</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-400 pl-6">
              <h3 className="text-xl font-bold text-white mb-3">2006: Birth of Twitter</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Twitter originated from a brainstorming session at podcasting company Odeo. Jack Dorsey presented 
                the idea of an SMS-based communication platform where users could share short status updates. 
                The first prototype was developed in two weeks.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The first tweet was sent by Jack Dorsey on March 21, 2006: "just setting up my twttr." The service 
                launched publicly in July 2006. The name "Twitter" was chosen because it meant "a short burst of 
                inconsequential information" and "chirps from birds," which aligned with the platform's messaging concept.
              </p>
            </div>

            <div className="border-l-4 border-blue-400 pl-6">
              <h3 className="text-xl font-bold text-white mb-3">2007-2009: Breaking Out</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Twitter gained mainstream attention at the 2007 South by Southwest (SXSW) conference, where usage 
                tripled from 20,000 to 60,000 tweets per day. The service won the festival's Web Award.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The 2008 U.S. presidential election marked Twitter's emergence as a political platform. Barack Obama's 
                campaign effectively used Twitter for organizing and communication. In 2009, during Iran's Green 
                Revolution, Twitter became a critical tool for protesters to coordinate and share information globally, 
                establishing its role in social movements.
              </p>
            </div>

            <div className="border-l-4 border-blue-400 pl-6">
              <h3 className="text-xl font-bold text-white mb-3">2013: Going Public</h3>
              <p className="text-gray-300 leading-relaxed">
                Twitter went public on November 7, 2013, with an IPO price of $26 per share, valuing the company 
                at $18 billion. The stock surged 73% on the first day of trading. However, Twitter struggled with 
                user growth and profitability for most of its time as a public company, never consistently turning 
                a profit.
              </p>
            </div>
          </div>
        </section>

        {/* Elon Musk Era */}
        <section className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6">Elon Musk Acquisition & Transformation</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-400 pl-6">
              <h3 className="text-xl font-bold text-white mb-3">April 2022: The $44 Billion Deal</h3>
              <p className="text-gray-300 leading-relaxed">
                After becoming Twitter's largest shareholder in April 2022, Elon Musk offered to buy the company 
                for $54.20 per share, totaling approximately $44 billion. Musk cited concerns about free speech 
                and Twitter's content moderation as motivations. After attempting to back out (citing bot concerns), 
                legal pressure forced the deal to close on October 27, 2022.
              </p>
            </div>

            <div className="border-l-4 border-blue-400 pl-6">
              <h3 className="text-xl font-bold text-white mb-3">October-December 2022: Radical Restructuring</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Musk immediately began massive changes: fired CEO Parag Agrawal and top executives, laid off 
                approximately 80% of staff (reducing from 7,500 to ~1,500 employees), disbanded the Trust and 
                Safety Council, and reinstated previously banned accounts including Donald Trump.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Introduced Twitter Blue subscription verification for $8/month, replacing the previous free 
                verification system. The chaotic rollout led to impersonation issues and advertiser flight.
              </p>
            </div>

            <div className="border-l-4 border-blue-400 pl-6">
              <h3 className="text-xl font-bold text-white mb-3">July 2023: Rebranding to X</h3>
              <p className="text-gray-300 leading-relaxed">
                On July 23, 2023, Musk announced Twitter would be rebranded to "X," replacing the iconic bird logo 
                with a stylized X. Musk described X as the future "everything app," envisioning integration of 
                social media, payments, banking, and other services similar to China's WeChat.
              </p>
            </div>

            <div className="border-l-4 border-blue-400 pl-6">
              <h3 className="text-xl font-bold text-white mb-3">2024-2026: Platform Evolution</h3>
              <p className="text-gray-300 leading-relaxed">
                Introduced long-form posts, video features, creator monetization tools, and integrated xAI's Grok 
                chatbot. Launched peer-to-peer payment capabilities and job listings. However, the platform faced 
                ongoing challenges with advertiser relations, content moderation controversies, and competition 
                from Threads and Bluesky.
              </p>
            </div>
          </div>
        </section>

        {/* Major Milestones */}
        <section className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6">Major Milestones</h2>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="text-blue-400 font-bold text-lg min-w-[80px]">2006</div>
              <p className="text-gray-300">Twitter founded; First tweet sent by Jack Dorsey</p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-blue-400 font-bold text-lg min-w-[80px]">2009</div>
              <p className="text-gray-300">Becomes key platform during Iran's Green Revolution</p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-blue-400 font-bold text-lg min-w-[80px]">2011</div>
              <p className="text-gray-300">Arab Spring protests organized via Twitter; 100 million users</p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-blue-400 font-bold text-lg min-w-[80px]">2013</div>
              <p className="text-gray-300">IPO at $18 billion valuation; 200 million users</p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-blue-400 font-bold text-lg min-w-[80px]">2015</div>
              <p className="text-gray-300">Jack Dorsey returns as CEO; Introduces Moments feature</p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-blue-400 font-bold text-lg min-w-[80px]">2017</div>
              <p className="text-gray-300">Doubles character limit from 140 to 280; 330 million users</p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-blue-400 font-bold text-lg min-w-[80px]">2020</div>
              <p className="text-gray-300">Launches Fleets (Stories-like feature, later discontinued)</p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-blue-400 font-bold text-lg min-w-[80px]">2021</div>
              <p className="text-gray-300">Bans Donald Trump; Jack Dorsey resigns, Parag Agrawal becomes CEO</p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-blue-400 font-bold text-lg min-w-[80px]">2022</div>
              <p className="text-gray-300">Elon Musk acquires Twitter for $44 billion; Massive layoffs begin</p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-blue-400 font-bold text-lg min-w-[80px]">2023</div>
              <p className="text-gray-300">Rebrands to X; Introduces X Premium (formerly Twitter Blue)</p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-blue-400 font-bold text-lg min-w-[80px]">2024</div>
              <p className="text-gray-300">Integrates Grok AI; Launches payment features; Faces advertiser challenges</p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-blue-400 font-bold text-lg min-w-[80px]">2026</div>
              <p className="text-gray-300">~550 million monthly active users; Competes with Threads and Bluesky</p>
            </div>
          </div>
        </section>

        {/* Leadership History */}
        <section className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6">Leadership History</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-400 pl-6">
              <h3 className="text-xl font-bold text-white mb-2">Jack Dorsey (2006-2008, 2015-2021)</h3>
              <p className="text-gray-400 mb-3">Co-founder & Two-Time CEO</p>
              <p className="text-gray-300 leading-relaxed">
                Original founder who created the concept of Twitter. Served as CEO initially until 2008 when 
                ousted by the board. Returned as CEO in 2015, overseeing Twitter's most politically influential 
                years. Resigned in November 2021, later becoming a Musk critic over X's direction.
              </p>
            </div>

            <div className="border-l-4 border-blue-400 pl-6">
              <h3 className="text-xl font-bold text-white mb-2">Evan Williams (2008-2010)</h3>
              <p className="text-gray-400 mb-3">Co-founder & Second CEO</p>
              <p className="text-gray-300 leading-relaxed">
                Blogger co-founder who replaced Dorsey as CEO. Focused on growing Twitter's user base and 
                mainstream appeal. Stepped down in 2010 as Twitter prepared for eventual IPO.
              </p>
            </div>

            <div className="border-l-4 border-blue-400 pl-6">
              <h3 className="text-xl font-bold text-white mb-2">Dick Costolo (2010-2015)</h3>
              <p className="text-gray-400 mb-3">Third CEO</p>
              <p className="text-gray-300 leading-relaxed">
                Former Google executive who led Twitter through its IPO. Struggled with user growth stagnation 
                and monetization challenges. Resigned amid pressure from investors.
              </p>
            </div>

            <div className="border-l-4 border-blue-400 pl-6">
              <h3 className="text-xl font-bold text-white mb-2">Parag Agrawal (2021-2022)</h3>
              <p className="text-gray-400 mb-3">Fourth CEO</p>
              <p className="text-gray-300 leading-relaxed">
                Former CTO who became CEO when Dorsey resigned. Served less than one year before being fired 
                by Elon Musk immediately after the acquisition. Received significant severance package.
              </p>
            </div>

            <div className="border-l-4 border-blue-400 pl-6">
              <h3 className="text-xl font-bold text-white mb-2">Elon Musk (2022-Present)</h3>
              <p className="text-gray-400 mb-3">Owner & CEO</p>
              <p className="text-gray-300 leading-relaxed">
                Tesla and SpaceX CEO who acquired Twitter for $44 billion. Implemented radical restructuring, 
                massive layoffs, rebranded to X, and pursued vision of an "everything app." Remains controversial 
                for content moderation decisions and management style.
              </p>
            </div>
          </div>
        </section>

        {/* Platform Statistics */}
        <section className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6">Platform Statistics (2026)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-lg p-6 border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">550M</div>
              <p className="text-gray-300">Monthly Active Users (Est.)</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">250M+</div>
              <p className="text-gray-300">Daily Active Users</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">500M+</div>
              <p className="text-gray-300">Posts Per Day</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">80%</div>
              <p className="text-gray-300">Users Outside U.S.</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">~$5B</div>
              <p className="text-gray-300">Est. Annual Revenue (2025)</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">1,500</div>
              <p className="text-gray-300">Employees (Down from 7,500)</p>
            </div>
          </div>
        </section>

        {/* Major Controversies */}
        <section className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6">Major Controversies</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Content Moderation & Free Speech</h3>
              <p className="text-gray-300 leading-relaxed">
                Twitter/X has been at the center of free speech debates. Under Dorsey, the platform banned Donald 
                Trump and other prominent figures. Under Musk, many bans were reversed, leading to concerns about 
                misinformation and hate speech. The platform struggles to balance free expression with harmful content.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">Advertiser Exodus</h3>
              <p className="text-gray-300 leading-relaxed">
                Following Musk's acquisition, major advertisers including Apple, Disney, IBM, and others paused spending 
                due to concerns about content moderation and brand safety. Musk's combative response to advertisers 
                ("Go f*** yourself") at DealBook Summit further damaged relationships. Ad revenue dropped ~50% in 2023.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">Mass Layoffs & Working Conditions</h3>
              <p className="text-gray-300 leading-relaxed">
                Musk laid off approximately 6,000 employees (~80% of staff) within weeks of acquisition. Reports of 
                "hardcore" work requirements, sleeping at the office, and rapid firings led to criticism of working 
                conditions. Many key engineers and trust & safety team members departed.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">Misinformation & Platform Manipulation</h3>
              <p className="text-gray-300 leading-relaxed">
                Platform has been criticized for spreading misinformation, particularly around elections, COVID-19, 
                and political events. Bot networks, coordinated inauthentic behavior, and foreign interference have 
                been ongoing challenges. Changes to verification system made it harder to identify credible sources.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">Financial Struggles</h3>
              <p className="text-gray-300 leading-relaxed">
                The $44 billion acquisition loaded X with approximately $13 billion in debt. Annual interest payments 
                of ~$1.2 billion, combined with declining ad revenue, have created severe financial pressure. 
                Valuation estimates suggest X is worth ~$20 billion, less than half the purchase price.
              </p>
            </div>
          </div>
        </section>

        {/* Cultural Impact */}
        <section className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6">Cultural Impact</h2>
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-gray-300 leading-relaxed mb-4">
              Twitter revolutionized real-time communication and information sharing. The platform became the digital 
              public square, where news breaks first, movements organize, and public discourse happens. Hashtags 
              like #MeToo, #BlackLivesMatter, and #ArabSpring originated on or were amplified by Twitter, demonstrating 
              its power to drive social change.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The platform changed journalism, with reporters breaking news via tweets and using the platform as a 
              primary source. Politicians, including U.S. presidents, used Twitter for direct constituent communication, 
              bypassing traditional media. The term "tweet" entered dictionaries, and "going viral" became part of 
              everyday language.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Twitter's character limit shaped a new form of writing—concise, punchy, and immediate. The platform 
              influenced how we consume news, engage in political discourse, and participate in collective movements. 
              Despite its challenges, Twitter/X remains influential in shaping public opinion and cultural conversations.
            </p>
          </div>
        </section>

        {/* Related Coverage */}
        <section className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6">Related Coverage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link 
              href="/elon-musk" 
              className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10"
            >
              <h3 className="text-lg font-semibold text-white mb-2">Elon Musk</h3>
              <p className="text-gray-400 text-sm">X owner and CEO, Tesla & SpaceX founder</p>
            </Link>
            <Link 
              href="/meta" 
              className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10"
            >
              <h3 className="text-lg font-semibold text-white mb-2">Meta Platforms</h3>
              <p className="text-gray-400 text-sm">Competitor with Threads social network</p>
            </Link>
            <Link 
              href="/bluesky" 
              className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10"
            >
              <h3 className="text-lg font-semibold text-white mb-2">Bluesky</h3>
              <p className="text-gray-400 text-sm">Decentralized competitor founded by Jack Dorsey</p>
            </Link>
            <Link 
              href="/xai" 
              className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10"
            >
              <h3 className="text-lg font-semibold text-white mb-2">xAI</h3>
              <p className="text-gray-400 text-sm">Elon Musk's separate AI company (Grok chatbot)</p>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
