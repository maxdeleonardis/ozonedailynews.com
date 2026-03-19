import type { Metadata } from "next";
import Link from "next/link";
import { NewsArticleSchema } from "@/components/NewsArticleSchema";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Meta Platforms Wiki 2026: Facebook, Instagram & 3.9B Users",
  description: "Complete profile of Meta Platforms (formerly Facebook Inc.) - founded 2004, rebranded 2021. Owns Facebook, Instagram, WhatsApp, serving 3.9 billion users.",
  keywords: [
    "Meta Platforms",
    "Facebook",
    "Instagram",
    "WhatsApp",
    "Mark Zuckerberg",
    "social media",
    "metaverse",
    "virtual reality",
    "Meta Quest",
  ],
  openGraph: {
    title: "Meta Platforms: Complete Company Profile & History | ObjectWire",
    description: "From Facebook to Meta - the social media giant's transformation and 3.9B user ecosystem.",
    type: "article",
    url: "https://www.objectwire.org/meta",
    images: [
      {
        url: "https://www.objectwire.org/meta-og.jpg",
        width: 1200,
        height: 630,
        alt: "Meta Platforms Company Profile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meta Platforms Wiki 2026: Facebook, Instagram & 3.9B Users",
    description: "Complete profile of the world's largest social media conglomerate.",
  },
};

export default function MetaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <NewsArticleSchema
        title="Meta Platforms: Complete Company Profile & History"
        description="Comprehensive profile of Meta Platforms Inc., the technology conglomerate formerly known as Facebook. Owns Facebook, Instagram, WhatsApp, and Reality Labs with 3.9 billion monthly users."
        publishedTime="2024-03-25T00:00:00Z"
        modifiedTime="2026-02-07T00:00:00Z"
        author="ObjectWire Editorial Team"
        imageUrl="https://www.objectwire.org/meta-company.jpg"
        articleUrl="https://www.objectwire.org/meta"
        section="Technology"
        keywords={["Meta Platforms", "Facebook", "Instagram", "WhatsApp", "Mark Zuckerberg", "social media", "metaverse"]}
      />

      <Breadcrumb
        items={[
          { name: "Home", item: "/" },
          { name: "Meta Platforms", item: "/meta" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="mb-12 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            SOCIAL MEDIA CONGLOMERATE
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Meta Platforms
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Building the Metaverse — Connecting 3.9 Billion People Through Facebook, Instagram & WhatsApp
          </p>
        </header>

        {/* Quick Facts Box */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-12 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-3xl">🌐</span>
            Quick Facts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-200">
            <div>
              <p className="text-gray-400 text-sm mb-1">Founded (as Facebook)</p>
              <p className="text-xl font-semibold">February 4, 2004</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Rebranded to Meta</p>
              <p className="text-xl font-semibold">October 28, 2021</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Founder & CEO</p>
              <p className="text-xl font-semibold">Mark Zuckerberg</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Headquarters</p>
              <p className="text-xl font-semibold">Menlo Park, California</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Stock Symbol</p>
              <p className="text-xl font-semibold">NASDAQ: META</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Market Cap</p>
              <p className="text-xl font-semibold">$1.2 Trillion (2026)</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Monthly Active People</p>
              <p className="text-xl font-semibold">3.9 Billion (2026)</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Annual Revenue</p>
              <p className="text-xl font-semibold">$134.9 Billion (2023)</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Employees</p>
              <p className="text-xl font-semibold">~67,000 (2026)</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Key Products</p>
              <p className="text-xl font-semibold">Facebook, Instagram, WhatsApp, Meta Quest</p>
            </div>
          </div>
        </div>

        {/* Company Overview */}
        <section className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6">Company Overview</h2>
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong className="text-white">Meta Platforms, Inc.</strong> (formerly Facebook, Inc.) is an American 
              multinational technology conglomerate based in Menlo Park, California. The company owns and operates 
              Facebook, Instagram, WhatsApp, and Meta Quest (formerly Oculus), making it one of the world's most 
              valuable companies and the largest social media conglomerate.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Founded as TheFacebook by Mark Zuckerberg and college roommates Eduardo Saverin, Andrew McCollum, 
              Dustin Moskovitz, and Chris Hughes in 2004, the company began as a social networking service for 
              Harvard students before expanding globally. Facebook, Inc. went public in May 2012 in one of the 
              largest tech IPOs in history.
            </p>
            <p className="text-gray-300 leading-relaxed">
              In October 2021, Facebook, Inc. rebranded to Meta Platforms to reflect its focus on building the 
              "metaverse"—immersive virtual and augmented reality experiences. With 3.9 billion monthly active 
              users across its family of apps, Meta is the world's largest social media ecosystem and a dominant 
              force in digital advertising, generating over $134 billion in annual revenue.
            </p>
          </div>
        </section>

        {/* Founding History */}
        <section className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6">Founding & Early History</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-white mb-3">2003-2004: Harvard Beginnings</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Mark Zuckerberg, a Harvard sophomore, launched "Facemash" in October 2003, comparing students' photos. 
                Though shut down by Harvard, it demonstrated the appeal of social networking. Zuckerberg then developed 
                "TheFacebook" with roommates Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, and Chris Hughes.
              </p>
              <p className="text-gray-300 leading-relaxed">
                TheFacebook launched on February 4, 2004, exclusively for Harvard students. Within 24 hours, 1,200 
                students had signed up. Within a month, half of Harvard undergraduates had profiles. The site expanded 
                to other Ivy League schools, then to all universities with a .edu email address.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-white mb-3">2004-2005: Silicon Valley & Expansion</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                In June 2004, Zuckerberg, Moskovitz, and McCollum moved to Palo Alto, California, establishing 
                their first office. Peter Thiel made the first major investment: $500,000 for 10.2% of the company. 
                The site dropped "The" from its name, becoming simply "Facebook."
              </p>
              <p className="text-gray-300 leading-relaxed">
                By December 2004, Facebook had 1 million users. In August 2005, the company acquired the domain 
                facebook.com from AboutFace Corporation for $200,000. Facebook opened to high school students in 
                September 2005 and reached 5.5 million users by the end of 2005.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-white mb-3">2006-2007: Going Global</h3>
              <p className="text-gray-300 leading-relaxed">
                Facebook opened to everyone 13 and older with a valid email address in September 2006. The decision 
                to open registration proved transformative—within a year, Facebook exploded from 12 million to 
                50 million users. In October 2007, Microsoft invested $240 million for a 1.6% stake, valuing Facebook 
                at $15 billion.
              </p>
            </div>
          </div>
        </section>

        {/* Major Acquisitions */}
        <section className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6">Major Acquisitions</h2>
          <div className="space-y-6">
            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-white">Instagram</h3>
                <span className="text-blue-400 font-semibold">$1 Billion (2012)</span>
              </div>
              <p className="text-gray-300">
                Acquired the photo-sharing app when it had 30 million users. Now has 2.4 billion monthly active 
                users and generates over $50 billion in annual revenue. Considered one of the best acquisitions 
                in tech history.
              </p>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-white">WhatsApp</h3>
                <span className="text-blue-400 font-semibold">$19 Billion (2014)</span>
              </div>
              <p className="text-gray-300">
                Acquired the messaging app for $19 billion, Facebook's largest acquisition. WhatsApp had 450 million 
                users at acquisition; now has over 2 billion monthly active users and is the world's most popular 
                messaging app.
              </p>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-white">Oculus VR</h3>
                <span className="text-blue-400 font-semibold">$2 Billion (2014)</span>
              </div>
              <p className="text-gray-300">
                Acquired the virtual reality company to lead Meta's push into the metaverse. Now operates as 
                Reality Labs, producing Meta Quest headsets. Has become central to Meta's long-term strategy 
                despite ongoing losses.
              </p>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-white">Other Notable Acquisitions</h3>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• <strong>CTRL-labs (2019)</strong> - $1 billion - Neural interface technology</li>
                <li>• <strong>Giphy (2020)</strong> - $400 million - GIF platform (later divested)</li>
                <li>• <strong>Kustomer (2020)</strong> - $1 billion - Customer service platform</li>
                <li>• <strong>Within (attempted 2022)</strong> - $400 million - Blocked by FTC</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Major Milestones */}
        <section className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6">Major Milestones</h2>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="text-blue-600 font-bold text-lg min-w-[80px]">2004</div>
              <p className="text-gray-300">TheFacebook launches at Harvard; expands to Ivy League schools</p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-blue-600 font-bold text-lg min-w-[80px]">2006</div>
              <p className="text-gray-300">Opens to public; introduces News Feed feature</p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-blue-600 font-bold text-lg min-w-[80px]">2007</div>
              <p className="text-gray-300">Launches Facebook Platform for third-party developers</p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-blue-600 font-bold text-lg min-w-[80px]">2012</div>
              <p className="text-gray-300">Goes public with $16B IPO; Acquires Instagram for $1B; Reaches 1 billion users</p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-blue-600 font-bold text-lg min-w-[80px]">2014</div>
              <p className="text-gray-300">Acquires WhatsApp ($19B) and Oculus VR ($2B)</p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-blue-600 font-bold text-lg min-w-[80px]">2016</div>
              <p className="text-gray-300">Reaches 2 billion monthly active users</p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-blue-600 font-bold text-lg min-w-[80px]">2018</div>
              <p className="text-gray-300">Cambridge Analytica scandal emerges</p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-blue-600 font-bold text-lg min-w-[80px]">2020</div>
              <p className="text-gray-300">Launches Instagram Reels to compete with TikTok</p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-blue-600 font-bold text-lg min-w-[80px]">2021</div>
              <p className="text-gray-300">Rebrands to Meta Platforms; Announces metaverse focus</p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-blue-600 font-bold text-lg min-w-[80px]">2022</div>
              <p className="text-gray-300">First revenue decline in history; Massive layoffs begin</p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-blue-600 font-bold text-lg min-w-[80px]">2023</div>
              <p className="text-gray-300">Launches Meta AI and Llama AI models; "Year of Efficiency"</p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-blue-600 font-bold text-lg min-w-[80px]">2024</div>
              <p className="text-gray-300">Meta Quest 3 launches; AI features integrated across all apps</p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-blue-600 font-bold text-lg min-w-[80px]">2026</div>
              <p className="text-gray-300">Reaches 3.9B monthly active people; $1.2T market cap</p>
            </div>
          </div>
        </section>

        {/* Platform Statistics */}
        <section className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6">Platform Statistics (2026)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-600/20 rounded-lg p-6 border border-blue-600/30">
              <div className="text-4xl font-bold text-blue-400 mb-2">3.9B</div>
              <p className="text-gray-300">Monthly Active People (All Apps)</p>
            </div>
            <div className="bg-blue-600/20 rounded-lg p-6 border border-blue-600/30">
              <div className="text-4xl font-bold text-blue-400 mb-2">3.1B</div>
              <p className="text-gray-300">Daily Active People</p>
            </div>
            <div className="bg-blue-600/20 rounded-lg p-6 border border-blue-600/30">
              <div className="text-4xl font-bold text-blue-400 mb-2">2.9B</div>
              <p className="text-gray-300">Facebook Monthly Users</p>
            </div>
            <div className="bg-blue-600/20 rounded-lg p-6 border border-blue-600/30">
              <div className="text-4xl font-bold text-blue-400 mb-2">2.4B</div>
              <p className="text-gray-300">Instagram Monthly Users</p>
            </div>
            <div className="bg-blue-600/20 rounded-lg p-6 border border-blue-600/30">
              <div className="text-4xl font-bold text-blue-400 mb-2">2.0B</div>
              <p className="text-gray-300">WhatsApp Monthly Users</p>
            </div>
            <div className="bg-blue-600/20 rounded-lg p-6 border border-blue-600/30">
              <div className="text-4xl font-bold text-blue-400 mb-2">$135B+</div>
              <p className="text-gray-300">Annual Revenue (2023)</p>
            </div>
          </div>
        </section>

        {/* Business Segments */}
        <section className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6">Business Segments</h2>
          <div className="space-y-4">
            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Family of Apps (FoA)</h3>
              <p className="text-gray-300 mb-3">
                Includes Facebook, Instagram, Messenger, WhatsApp, and Threads. Generates vast majority of revenue 
                through digital advertising.
              </p>
              <div className="text-sm text-gray-400">
                Revenue: ~$131B (2023) | Operating Income: ~$62B
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Reality Labs</h3>
              <p className="text-gray-300 mb-3">
                Virtual and augmented reality products including Meta Quest headsets, AR glasses development, 
                and metaverse platforms like Horizon Worlds.
              </p>
              <div className="text-sm text-gray-400">
                Revenue: ~$1.9B (2023) | Operating Loss: ~$16B (Heavy R&D investment)
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Meta AI & Infrastructure</h3>
              <p className="text-gray-300 mb-3">
                AI research and development including Llama language models, Meta AI assistant, AI-powered features 
                across all platforms, and extensive data center infrastructure.
              </p>
              <div className="text-sm text-gray-400">
                Investment: ~$30B+ annually in AI and infrastructure
              </div>
            </div>
          </div>
        </section>

        {/* Controversies */}
        <section className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6">Major Controversies</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Cambridge Analytica (2018)</h3>
              <p className="text-gray-300 leading-relaxed">
                Political consulting firm harvested data from 87 million Facebook users without consent for targeted 
                political advertising. Led to $5 billion FTC fine, congressional hearings, and global privacy law changes. 
                Zuckerberg testified before Congress and European Parliament.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">2020 Election & January 6th</h3>
              <p className="text-gray-300 leading-relaxed">
                Facebook faced criticism for role in spreading election misinformation and organizing the January 6, 2021 
                Capitol riot. Suspended Donald Trump's account. Whistleblower Frances Haugen leaked internal documents 
                showing company prioritized engagement over safety.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">Teen Mental Health</h3>
              <p className="text-gray-300 leading-relaxed">
                Internal research leaked in 2021 showed Instagram harms teen mental health, particularly among girls. 
                Documents revealed company knew about negative impacts but continued prioritizing engagement. Led to 
                congressional hearings and lawsuits from state attorneys general.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">Antitrust Investigations</h3>
              <p className="text-gray-300 leading-relaxed">
                FTC and state attorneys general filed antitrust lawsuits seeking to break up Meta, claiming illegal 
                monopoly through acquisitions of Instagram and WhatsApp. FTC blocked Meta's Within acquisition in 2023. 
                Multiple ongoing regulatory battles worldwide.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">Privacy & Data Collection</h3>
              <p className="text-gray-300 leading-relaxed">
                Ongoing controversies over data collection practices, targeted advertising, and privacy violations. 
                Faced billions in GDPR fines in Europe. Apple's iOS privacy changes in 2021 significantly impacted 
                Meta's advertising business, causing estimated $10 billion in lost revenue.
              </p>
            </div>
          </div>
        </section>

        {/* Related Coverage */}
        <section className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6">Related Coverage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link 
              href="/instagram" 
              className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10"
            >
              <h3 className="text-lg font-semibold text-white mb-2">Instagram</h3>
              <p className="text-gray-400 text-sm">Meta's photo and video sharing platform</p>
            </Link>
            <Link 
              href="/whatsapp" 
              className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10"
            >
              <h3 className="text-lg font-semibold text-white mb-2">WhatsApp</h3>
              <p className="text-gray-400 text-sm">World's most popular messaging app</p>
            </Link>
            <Link 
              href="/google" 
              className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10"
            >
              <h3 className="text-lg font-semibold text-white mb-2">Google (Alphabet)</h3>
              <p className="text-gray-400 text-sm">Major competitor in digital advertising</p>
            </Link>
            <Link 
              href="/tiktok" 
              className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10"
            >
              <h3 className="text-lg font-semibold text-white mb-2">TikTok</h3>
              <p className="text-gray-400 text-sm">Major social media competitor</p>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
