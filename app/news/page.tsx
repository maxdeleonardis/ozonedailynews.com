import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Latest News & Investigations | The Object Wire",
  description: "Stay updated with the latest investigative journalism, breaking news, technology updates, political analysis and fraud investigations from The Object Wire.",
  openGraph: {
    title: "Latest News & Investigations | The Object Wire",
    description: "Comprehensive news coverage with verified sources and investigative depth.",
  },
};

const featuredStories = [
  {
    title: "The 'Trump Tech Force': Inside the White House's New AI Recruitment Drive",
    excerpt: "Trump administration launches U.S. Tech Force to recruit 1,000 technologists from Silicon Valley, offering $150K-$200K salaries for federal AI modernization.",
    category: "POLITICS",
    date: "January 15, 2026",
    slug: "news/trump-tech-force-white-house-ai-recruitment-drive",
    author: "ObjectWire Political Desk",
    readTime: "12 min",
    featured: true,
    urgent: true,
  },
  {
    title: "D-Wave Qubits Lead Quantum Optimization Revolution",
    excerpt: "Advantage prototype achieves quantum computational supremacy on real-world problems, solving optimization challenges 1000x faster than classical computers.",
    category: "QUANTUM TECH",
    date: "January 15, 2026",
    slug: "news/quantum-computing/d-wave-quantum-optimization-breakthrough",
    author: "ObjectWire Quantum Team",
    readTime: "12 min",
    featured: true,
    urgent: false,
  },
  {
    title: "Nick Shirley Drops Second Part of Fraud Investigation", 
    excerpt: "Independent journalist releases new details on $250 million Feeding Our Future case with updated financial flow analysis.",
    category: "INVESTIGATION",
    date: "January 15, 2026",
    slug: "minesoda/nick-shirley-drops-second-part-of-fraud-investigation",
    author: "ObjectWire Team",
    readTime: "10 min",
    featured: true,
    urgent: false,
  },
  {
    title: "Feeding Our Future: Inside Minnesota's $250 Million Fraud Scheme",
    excerpt: "A comprehensive investigation into one of the largest pandemic-era fraud cases in U.S. history.",
    category: "FRAUD INVESTIGATION",
    date: "December 30, 2025",
    slug: "minnesota-feeding-our-future-fraud",
    author: "ObjectWire Investigations",
    readTime: "12 min",
    featured: false,
    urgent: false,
  },
];

const technologyNews = [
  {
    title: "Blitzy: AI-Powered Autonomous Software Development Platform Review",
    excerpt: "Comprehensive developer review of Blitzy's autonomous coding capabilities and practical applications for 2025.",
    category: "AI/TECH",
    date: "January 12, 2026",
    slug: "blitzy-ai-powered-autonomous-software-development-platform-developer-review-for-2025",
    author: "Tech Review Team",
  },
  {
    title: "Render vs Vercel for Free Start-up App Deployment",
    excerpt: "Detailed comparison of deployment platforms for bootstrapped startups and indie developers.",
    category: "STARTUP TECH", 
    date: "January 10, 2026",
    slug: "render-vs-vercel-for-free-start-up-app-deployment",
    author: "DevOps Analyst",
  },
  {
    title: "Alphabet Inc: The History of Google",
    excerpt: "Deep dive into Google's corporate evolution and strategic acquisitions that shaped the modern internet.",
    category: "TECH HISTORY",
    date: "January 8, 2026", 
    slug: "alphabet-inc-the-history-of-google",
    author: "Business Historian",
  },
];

const businessNews = [
  {
    title: "Pegatron Opens U.S. Factory in Texas",
    excerpt: "Apple supplier establishes manufacturing facility in Texas, bringing thousands of jobs and marking shift in tech supply chain.",
    category: "BUSINESS",
    date: "January 11, 2026",
    slug: "pegatron-opens-us-factory-tx", 
    author: "Industry Reporter",
  },
  {
    title: "OANDA vs Interactive Brokers for Forex Trading USA",
    excerpt: "Comprehensive comparison of forex trading platforms for US-based retail and professional traders.",
    category: "FINANCE",
    date: "January 9, 2026",
    slug: "oanda-or-interactive-brokers-forex-trading-usa",
    author: "Financial Analyst",
  },
  {
    title: "TXC Stable Coin: Texas' Entry into Digital Currency",
    excerpt: "Analysis of Texas-backed stablecoin initiative and its implications for state-level cryptocurrency adoption.",
    category: "FINTECH",
    date: "January 7, 2026",
    slug: "txc-stable-coin",
    author: "Crypto Specialist",
  },
];

const politicsNews = [
  {
    title: "The Intercept Sues DOGE",
    excerpt: "Legal challenge filed against Department of Government Efficiency over transparency and accountability concerns.",
    category: "POLITICS",
    date: "January 13, 2026", 
    slug: "the-intercept-sues-doge",
    author: "Legal Reporter",
  },
  {
    title: "NYC's Ranked Choice Voting System Faces Scrutiny",
    excerpt: "Analysis of implementation challenges and voter confusion in New York City's electoral reform experiment.",
    category: "ELECTIONS",
    date: "January 6, 2026",
    slug: "nycs-ranked-choice-voting-system-faces-scrutiny",
    author: "Political Analyst",
  },
  {
    title: "Ilhan Omar: From Somali Refugee to Congressional Representative",
    excerpt: "Complete biography covering her immigration journey, political rise, personal life, and meteoric net worth growth.",
    category: "BIOGRAPHY",
    date: "January 5, 2026",
    slug: "minesoda/Ilhan-Omar",
    author: "Political Biographer",
  },
];

const specialReports = [
  {
    title: "Avatar: Fire and Ash - James Cameron's Next Epic",
    excerpt: "Interactive analysis of the upcoming Avatar sequel with behind-the-scenes production insights and box office projections.",
    category: "ENTERTAINMENT",
    date: "January 4, 2026",
    slug: "james-cameron/avatar-fire-and-ash",
    author: "Entertainment Analyst",
  },
  {
    title: "Austin's Reign as Tech Hub Might Be Coming to an End",
    excerpt: "Analysis of factors threatening Austin's position as a major technology center amid rising costs and talent migration.",
    category: "REGIONAL",
    date: "January 3, 2026", 
    slug: "austins-reign-as-a-tech-hub-might-be-coming-to-an-end",
    author: "Regional Reporter",
  },
  {
    title: "My Hero Academia Knowledge Hub",
    excerpt: "Comprehensive coverage of MHA final season success, Vigilantes spin-off, and Ultra Rumble game popularity.",
    category: "ANIME/GAMING",
    date: "January 2, 2026",
    slug: "mha",
    author: "Pop Culture Team",
  },
];

const categories = [
  { name: "Quantum Computing", href: "/news/quantum-computing", count: 6, new: true },
  { name: "Minnesota Hub", href: "/minesoda", count: 8, new: true },
  { name: "Investigations", href: "/case", count: 24, new: false },
  { name: "Technology", href: "/coding", count: 18, new: false },
  { name: "Business & Finance", href: "/analyst", count: 32, new: false },
  { name: "Opinion & Analysis", href: "/opinion", count: 15, new: false },
  { name: "Startup News", href: "/start-up-news", count: 12, new: false },
  { name: "Health", href: "/health", count: 8, new: false },
];

export default function NewsPage() {
  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Newspaper-Style Header */}
      <header className="border-b-4 border-double border-black">
        <div className="container py-6">
          {/* Top Bar */}
          <div className="flex items-center justify-between text-xs text-gray-600 mb-4 pb-4 border-b border-gray-200">
            <span className="font-mono">{today}</span>
            <span className="font-mono tracking-wider">COMPREHENSIVE NEWS COVERAGE</span>
            <span className="font-mono">Latest Updates</span>
          </div>
          
          {/* Page Title */}
          <div className="text-center py-6">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-none">
              Latest News & Investigations
            </h1>
            <div className="flex items-center justify-center gap-4 mt-4">
              <div className="h-px w-16 bg-black"></div>
              <p className="text-sm font-mono tracking-widest text-gray-600">
                VERIFIED • SOURCE-CITED • INDEPENDENT
              </p>
              <div className="h-px w-16 bg-black"></div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 pt-4 border-t border-gray-200 text-sm font-medium">
            <Link href="/news/quantum-computing" className="hover:underline underline-offset-4">Quantum Computing</Link>
            <Link href="/minesoda" className="hover:underline underline-offset-4">Minnesota</Link>
            <Link href="/case" className="hover:underline underline-offset-4">Investigations</Link>
            <Link href="/analyst" className="hover:underline underline-offset-4">Business</Link>
            <Link href="/coding" className="hover:underline underline-offset-4">Technology</Link>
            <Link href="/opinion" className="hover:underline underline-offset-4">Opinion</Link>
          </nav>
        </div>
      </header>

      {/* Breaking News Ticker */}
      <div className="bg-red-600 text-white py-2 overflow-hidden">
        <div className="container">
          <div className="flex items-center gap-4">
            <span className="bg-white text-red-600 text-xs font-bold px-3 py-1 animate-pulse shrink-0">
              LATEST
            </span>
            <div className="overflow-hidden flex-1">
              <p className="text-sm font-medium whitespace-nowrap animate-marquee">
                BREAKING: Trump launches U.S. Tech Force to recruit 1,000 Silicon Valley workers • D-Wave achieves quantum supremacy breakthrough • Nick Shirley releases fraud investigation part 2 • Minnesota hub launches with comprehensive coverage
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container py-8">
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8">
            
            {/* Featured Stories */}
            <section className="mb-12">
              <h2 className="text-xs font-bold tracking-widest border-b-2 border-black pb-2 mb-6">
                FEATURED STORIES
              </h2>
              
              {/* Lead Story */}
              <article className="mb-8 pb-8 border-b-2 border-black">
                <Link href={`/${featuredStories[0].slug}`} className="group block">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-red-600 text-white text-xs font-bold px-3 py-1">
                      {featuredStories[0].category}
                    </span>
                    {featuredStories[0].urgent && (
                      <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 animate-pulse">
                        BREAKING
                      </span>
                    )}
                    <span className="text-xs text-gray-500">{featuredStories[0].readTime}</span>
                  </div>
                  
                  <h2 className="text-2xl md:text-4xl font-black leading-tight mb-4 group-hover:underline">
                    {featuredStories[0].title}
                  </h2>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-4 first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:leading-none">
                    {featuredStories[0].excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-black">{featuredStories[0].author}</span>
                      <span>•</span>
                      <time>{featuredStories[0].date}</time>
                    </div>
                    <span className="font-medium text-black group-hover:underline">
                      Continue Reading →
                    </span>
                  </div>
                </Link>
              </article>

              {/* Secondary Featured Stories */}
              <div className="grid md:grid-cols-2 gap-8">
                {featuredStories.slice(1).map((story, index) => (
                  <article key={story.slug} className="border-b border-gray-200 pb-6">
                    <Link href={`/${story.slug}`} className="group block">
                      <span className="text-xs font-bold text-gray-500 tracking-wider">
                        {story.category}
                      </span>
                      <h3 className="text-xl font-bold mt-2 mb-3 leading-tight group-hover:underline">
                        {story.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        {story.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="font-medium">{story.author}</span>
                        <span>•</span>
                        <time>{story.date}</time>
                        <span>•</span>
                        <span>{story.readTime}</span>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </section>

            {/* Technology Section */}
            <section className="mb-12">
              <h2 className="text-xs font-bold tracking-widest border-b-2 border-blue-600 pb-2 mb-6">
                TECHNOLOGY & INNOVATION
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {technologyNews.map((story, index) => (
                  <article key={story.slug} className="border border-gray-200 hover:shadow-lg transition-shadow">
                    <Link href={`/${story.slug}`} className="group block p-4">
                      <span className="text-xs font-bold text-blue-600">{story.category}</span>
                      <h3 className="font-bold mt-2 mb-2 leading-tight group-hover:underline">
                        {story.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        {story.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span>{story.author}</span>
                        <span>•</span>
                        <time>{story.date}</time>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </section>

            {/* Business Section */}
            <section className="mb-12">
              <h2 className="text-xs font-bold tracking-widest border-b-2 border-green-600 pb-2 mb-6">
                BUSINESS & FINANCE
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {businessNews.map((story, index) => (
                  <article key={story.slug} className="border border-gray-200 hover:shadow-lg transition-shadow">
                    <Link href={`/${story.slug}`} className="group block p-4">
                      <span className="text-xs font-bold text-green-600">{story.category}</span>
                      <h3 className="font-bold mt-2 mb-2 leading-tight group-hover:underline">
                        {story.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        {story.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span>{story.author}</span>
                        <span>•</span>
                        <time>{story.date}</time>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </section>

            {/* Politics Section */}
            <section className="mb-12">
              <h2 className="text-xs font-bold tracking-widest border-b-2 border-purple-600 pb-2 mb-6">
                POLITICS & INVESTIGATIONS
              </h2>
              <div className="space-y-6">
                {politicsNews.map((story, index) => (
                  <article key={story.slug} className="flex gap-6 border-b border-gray-200 pb-6">
                    <div className="flex-1">
                      <Link href={`/${story.slug}`} className="group block">
                        <span className="text-xs font-bold text-purple-600">{story.category}</span>
                        <h3 className="text-xl font-bold mt-2 mb-3 leading-tight group-hover:underline">
                          {story.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-3">
                          {story.excerpt}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <span className="font-medium">{story.author}</span>
                          <span>•</span>
                          <time>{story.date}</time>
                        </div>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Special Reports */}
            <section className="mb-12">
              <h2 className="text-xs font-bold tracking-widest border-b-2 border-orange-600 pb-2 mb-6">
                SPECIAL REPORTS & FEATURES
              </h2>
              <div className="space-y-6">
                {specialReports.map((story, index) => (
                  <article key={story.slug} className="flex gap-6 border-b border-gray-200 pb-6">
                    <div className="flex-1">
                      <Link href={`/${story.slug}`} className="group block">
                        <span className="text-xs font-bold text-orange-600">{story.category}</span>
                        <h3 className="text-xl font-bold mt-2 mb-3 leading-tight group-hover:underline">
                          {story.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-3">
                          {story.excerpt}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <span className="font-medium">{story.author}</span>
                          <span>•</span>
                          <time>{story.date}</time>
                        </div>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            
            {/* Categories/Sections */}
            <div className="mb-8 bg-gray-50 p-6">
              <h3 className="text-xs font-bold tracking-widest border-b border-gray-300 pb-2 mb-4">
                NEWS CATEGORIES
              </h3>
              <ul className="space-y-3">
                {categories.map((cat) => (
                  <li key={cat.name}>
                    <Link 
                      href={cat.href}
                      className="flex items-center justify-between text-sm hover:bg-gray-100 p-2 -mx-2 transition-colors"
                    >
                      <span className="font-medium flex items-center gap-2">
                        {cat.name}
                        {cat.new && (
                          <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                            NEW
                          </span>
                        )}
                      </span>
                      <span className="text-xs text-gray-400">{cat.count} articles</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Latest Updates */}
            <div className="mb-8 border border-gray-300">
              <div className="bg-gray-200 px-4 py-2 border-b border-gray-300">
                <h3 className="text-sm font-bold">Latest Updates</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="bg-red-500 w-2 h-2 rounded-full mt-2 flex-shrink-0 animate-pulse"></span>
                    <div>
                      <Link href="/news/trump-tech-force-white-house-ai-recruitment-drive" className="font-semibold hover:underline">
                        Trump Launches U.S. Tech Force
                      </Link>
                      <p className="text-xs text-gray-500">Just now</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-red-500 w-2 h-2 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <Link href="/news/quantum-computing/d-wave-quantum-optimization-breakthrough" className="font-semibold hover:underline">
                        D-Wave Quantum Breakthrough
                      </Link>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-blue-500 w-2 h-2 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <Link href="/minesoda/nick-shirley-drops-second-part-of-fraud-investigation" className="font-semibold hover:underline">
                        Nick Shirley Investigation Part 2
                      </Link>
                      <p className="text-xs text-gray-500">6 hours ago</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-black text-white p-6 mb-8">
              <h3 className="font-bold mb-3">Stay Informed</h3>
              <p className="text-sm text-gray-300 mb-4">
                Get our latest investigations and breaking news delivered directly to your inbox.
              </p>
              <div className="flex flex-col gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="px-3 py-2 text-black text-sm"
                />
                <button className="bg-red-600 text-white py-2 text-sm font-bold hover:bg-red-700 transition-colors">
                  SUBSCRIBE
                </button>
              </div>
            </div>

            {/* About Box */}
            <div className="border border-gray-300 bg-gray-50">
              <div className="bg-gray-200 px-4 py-2 border-b border-gray-300">
                <h3 className="text-sm font-bold">About Our Coverage</h3>
              </div>
              <div className="p-4 text-sm text-gray-700 leading-relaxed">
                <p className="mb-3">
                  <strong>The Object Wire</strong> provides comprehensive news coverage across 
                  technology, business, politics, and investigations with rigorous fact-checking 
                  and source verification.
                </p>
                <p className="mb-3">
                  Every story undergoes editorial review and includes direct source citations 
                  for full transparency.
                </p>
                <div className="border-t border-gray-300 pt-3 mt-3">
                  <Link href="/editorial-standards" className="text-blue-700 hover:underline text-xs">
                    Learn about our editorial standards →
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Editorial Standards */}
      <section className="bg-black text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-xs tracking-wider text-gray-400">SOURCE VERIFIED</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-xs tracking-wider text-gray-400">ARTICLES PUBLISHED</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">8</div>
              <div className="text-xs tracking-wider text-gray-400">NEWS CATEGORIES</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24HR</div>
              <div className="text-xs tracking-wider text-gray-400">UPDATE CYCLE</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
