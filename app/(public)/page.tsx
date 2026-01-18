import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "The Object Wire | Investigative Journalism Network",
  description: "The Object Wire is an investigative journalism network delivering verified, source-cited reporting on fraud, corruption, policy, and accountability. Built for truth.",
  openGraph: {
    title: "The Object Wire | Investigative Journalism Network",
    description: "Investigative journalism. Verified sources. Documented truth.",
  },
};

const breakingStories = [
  {
    title: "Feeding Our Future: Inside Minnesota's $250 Million Fraud Scheme",
    excerpt: "A comprehensive investigation into one of the largest pandemic-era fraud cases in U.S. history, involving falsified meal counts, shell companies, and federal indictments.",
    category: "FRAUD INVESTIGATION",
    date: "December 30, 2025",
    slug: "minnesota-feeding-our-future-fraud",
    author: "ObjectWire Investigations",
    isBreaking: true,
  },
  {
    title: "The Trillion-Dollar Treasure Trove in the Deep Sea",
    excerpt: "Rare minerals critical to technology lie beneath international waters. Who owns them?",
    category: "SPECIAL REPORT",
    date: "January 12, 2026",
    slug: "the-trillion-dollar-treasure-trove-in-the-deep-sea",
    author: "Jack Sterling",
  },
  {
    title: "Luxury Watch Heists at the U.S. Grand Prix",
    excerpt: "Inside the organized crime rings targeting high-value timepieces at Formula 1 events.",
    category: "CRIME",
    date: "January 10, 2026",
    slug: "luxury-watch-heists-at-the-us-grand-prix",
    author: "Conan Doyle",
  },
];

const topStories = [
  { title: "James Cameron's Next Frontier: Avatar 3 and Beyond", slug: "james-cameron", category: "PROFILE" },
  { title: "DOGE Faces Legal Challenge from The Intercept", slug: "the-intercept-sues-doge", category: "LEGAL" },
  { title: "Sam Altman's Surprise Visit to Hedera Team", slug: "sam-altman-visits-hedera-team", category: "TECH" },
  { title: "NYC's Ranked Choice Voting Under Scrutiny", slug: "nycs-ranked-choice-voting-system-faces-scrutiny", category: "POLITICS" },
  { title: "Neurophos: The AI Hardware Startup to Watch", slug: "neurophos-ai-hardware-startup", category: "STARTUPS" },
];

const categories = [
  { name: "Investigations", href: "/case", count: 24 },
  { name: "Technology", href: "/coding", count: 18 },
  { name: "Business & Finance", href: "/analyst", count: 32 },
  { name: "Opinion & Analysis", href: "/opinion", count: 15 },
  { name: "Health", href: "/health", count: 8 },
  { name: "Startup News", href: "/start-up-news", count: 12 },
];

export default function HomePage() {
  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Newspaper Masthead */}
      <header className="border-b-4 border-double border-black">
        <div className="container py-6">
          {/* Top Bar */}
          <div className="flex items-center justify-between text-xs text-gray-600 mb-4 pb-4 border-b border-gray-200">
            <span className="font-mono">{today}</span>
            <span className="font-mono tracking-wider">AUSTIN, TEXAS</span>
            <span className="font-mono">Vol. I, No. 1</span>
          </div>
          
          {/* Masthead Title */}
          <div className="text-center py-6">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none animate-fadeInDown">
              The Object Wire
            </h1>
            <div className="flex items-center justify-center gap-4 mt-4">
              <div className="h-px w-16 bg-black"></div>
              <p className="text-sm font-mono tracking-widest text-gray-600">
                INVESTIGATIVE JOURNALISM NETWORK
              </p>
              <div className="h-px w-16 bg-black"></div>
            </div>
          </div>

          {/* Navigation Bar */}
          <nav className="flex flex-wrap justify-center gap-6 pt-4 border-t border-gray-200 text-sm font-medium">
            <Link href="/case" className="hover:underline underline-offset-4">Investigations</Link>
            <Link href="/news" className="hover:underline underline-offset-4">News</Link>
            <Link href="/opinion" className="hover:underline underline-offset-4">Opinion</Link>
            <Link href="/analyst" className="hover:underline underline-offset-4">Analysis</Link>
            <Link href="/coding" className="hover:underline underline-offset-4">Technology</Link>
            <Link href="/about" className="hover:underline underline-offset-4">About</Link>
          </nav>
        </div>
      </header>

      {/* Breaking News Ticker */}
      <div className="bg-black text-white py-2 overflow-hidden">
        <div className="container">
          <div className="flex items-center gap-4">
            <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 animate-pulse shrink-0">
              BREAKING
            </span>
            <div className="overflow-hidden flex-1">
              <p className="text-sm font-medium whitespace-nowrap animate-marquee">
                Federal prosecutors expand investigation into pandemic relief fraud • New whistleblower evidence emerges in DOJ probe • Markets react to regulatory uncertainty
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <main className="container py-8">
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Main Story Column */}
          <div className="lg:col-span-8">
            {/* Lead Story */}
            <article className="mb-8 pb-8 border-b-2 border-black animate-fadeInUp">
              <Link href={`/${breakingStories[0].slug}`} className="group block">
                {/* Video Header */}
                <div className="relative mb-6 overflow-hidden bg-gray-900">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-64 md:h-96 object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  >
                    <source src="/17303815-hd_1280_720_30fps.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 mb-3">
                      {breakingStories[0].category}
                    </span>
                    <h2 className="text-2xl md:text-4xl font-black text-white leading-tight">
                      {breakingStories[0].title}
                    </h2>
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-4 first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:leading-none">
                  {breakingStories[0].excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-black">{breakingStories[0].author}</span>
                    <span>•</span>
                    <time>{breakingStories[0].date}</time>
                  </div>
                  <span className="font-medium text-black group-hover:underline">
                    Continue Reading →
                  </span>
                </div>
              </Link>
            </article>

            {/* Secondary Stories Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {breakingStories.slice(1).map((story, index) => (
                <article 
                  key={story.slug} 
                  className="border-b border-gray-200 pb-6 animate-fadeInUp"
                  style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                >
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
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            {/* Top Stories */}
            <div className="mb-8 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xs font-bold tracking-widest border-b-2 border-black pb-2 mb-4">
                TOP STORIES
              </h3>
              <ol className="space-y-4">
                {topStories.map((story, index) => (
                  <li key={story.slug} className="flex gap-3 group">
                    <span className="text-3xl font-black text-gray-200 group-hover:text-black transition-colors">
                      {index + 1}
                    </span>
                    <Link href={`/${story.slug}`} className="flex-1">
                      <span className="text-xs text-gray-500 font-medium">{story.category}</span>
                      <h4 className="font-semibold text-sm leading-tight group-hover:underline">
                        {story.title}
                      </h4>
                    </Link>
                  </li>
                ))}
              </ol>
            </div>

            {/* Categories/Sections */}
            <div className="mb-8 bg-gray-50 p-6 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-xs font-bold tracking-widest border-b border-gray-300 pb-2 mb-4">
                SECTIONS
              </h3>
              <ul className="space-y-3">
                {categories.map((cat) => (
                  <li key={cat.name}>
                    <Link 
                      href={cat.href}
                      className="flex items-center justify-between text-sm hover:bg-gray-100 p-2 -mx-2 transition-colors"
                    >
                      <span className="font-medium">{cat.name}</span>
                      <span className="text-xs text-gray-400">{cat.count} articles</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* About Box - Wikipedia Style */}
            <div className="border border-gray-300 bg-gray-50 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <div className="bg-gray-200 px-4 py-2 border-b border-gray-300">
                <h3 className="text-sm font-bold">About The Object Wire</h3>
              </div>
              <div className="p-4 text-sm text-gray-700 leading-relaxed">
                <p className="mb-3">
                  <strong>The Object Wire</strong> is an independent investigative journalism network 
                  based in Austin, Texas. Founded in 2025, we specialize in accountability reporting, 
                  fraud investigations, and in-depth analysis.
                </p>
                <p className="mb-3">
                  Every article is source-cited and undergoes three-stage editorial review before publication.
                </p>
                <div className="border-t border-gray-300 pt-3 mt-3">
                  <Link href="/about" className="text-blue-700 hover:underline text-xs">
                    Learn more about our mission →
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Editorial Standards Bar */}
      <section className="bg-black text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-fadeInUp">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-xs tracking-wider text-gray-400">SOURCE VERIFIED</div>
            </div>
            <div className="animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl font-bold mb-2">3-STAGE</div>
              <div className="text-xs tracking-wider text-gray-400">EDITORIAL REVIEW</div>
            </div>
            <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold mb-2">24HR</div>
              <div className="text-xs tracking-wider text-gray-400">CORRECTION POLICY</div>
            </div>
            <div className="animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl font-bold mb-2">ZERO</div>
              <div className="text-xs tracking-wider text-gray-400">ANONYMOUS SOURCES</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Links - Newspaper Style */}
      <footer className="border-t-4 border-double border-black py-8">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 text-sm">
            <div>
              <h4 className="font-bold mb-3">Investigations</h4>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/case" className="hover:underline">Active Cases</Link></li>
                <li><Link href="/case" className="hover:underline">Fraud & Corruption</Link></li>
                <li><Link href="/case" className="hover:underline">Public Records</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Coverage</h4>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/news" className="hover:underline">Breaking News</Link></li>
                <li><Link href="/analyst" className="hover:underline">Analysis</Link></li>
                <li><Link href="/opinion" className="hover:underline">Opinion</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">About Us</h4>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/team" className="hover:underline">Our Team</Link></li>
                <li><Link href="/editorial-standards" className="hover:underline">Editorial Standards</Link></li>
                <li><Link href="/corrections" className="hover:underline">Corrections</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Contact</h4>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/contact" className="hover:underline">Tips & Inquiries</Link></li>
                <li><a href="mailto:tips@objectwire.com" className="hover:underline">tips@objectwire.com</a></li>
                <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-xs text-gray-500">
            <p>© 2025-2026 The Object Wire. All rights reserved.</p>
            <p className="mt-1">An independent investigative journalism network.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
