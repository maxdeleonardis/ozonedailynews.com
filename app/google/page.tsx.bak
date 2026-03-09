import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Google & Alphabet Inc - News, Analysis & Updates | ObjectWire",
  description: "Comprehensive coverage of Google, Alphabet Inc, and its subsidiaries including Waymo, DeepMind, and more. Latest news, business analysis, and technology updates.",
  keywords: ["Google", "Alphabet Inc", "Waymo", "DeepMind", "Google AI", "autonomous vehicles", "search engine", "tech news"],
  openGraph: {
    title: "Google & Alphabet Inc Coverage | ObjectWire",
    description: "In-depth reporting on Google, Alphabet, and all subsidiary companies.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.objectwire.org/google",
  },
};

const recentNews = [
  {
    title: "NTSB Opens Investigation into Waymo Over School Bus Violations",
    excerpt: "Federal safety board launches probe after Waymo robotaxis illegally passed stopped school buses more than 20 times in Austin and Atlanta.",
    date: "January 23, 2026",
    slug: "google/waymo/ntsb-investigation-school-bus-violations",
    category: "Waymo",
    urgent: true,
  },
  {
    title: "Apple and Google Announce Historic Gemini AI Partnership",
    excerpt: "In unprecedented move, tech giants join forces to integrate Google's Gemini AI into Apple's ecosystem.",
    date: "January 23, 2026",
    slug: "apple-google-gemini-partnership",
    category: "Google AI",
    urgent: true,
  },
  {
    title: "Alphabet or Nvidia: Who Will Win the AI Chip War?",
    excerpt: "Analysis of the competition between Google's TPUs and Nvidia's dominance in AI hardware.",
    date: "January 2026",
    slug: "alphabet-or-nvidia-here-s-who-i-think-will-win-the-ai-chip-war",
    category: "Business Analysis",
    urgent: false,
  },
  {
    title: "Alphabet Inc: The History of Google",
    excerpt: "Deep dive into Google's corporate evolution from search engine startup to global tech conglomerate.",
    date: "January 2026",
    slug: "alphabet-inc-the-history-of-google",
    category: "Company History",
    urgent: false,
  },
];

const subsidiaries = [
  {
    name: "Waymo",
    description: "Autonomous vehicle technology company leading in self-driving car development",
    slug: "google/waymo",
    icon: "🚗",
  },
  {
    name: "DeepMind",
    description: "AI research laboratory focused on artificial general intelligence",
    slug: "google/deepmind",
    icon: "🧠",
  },
  {
    name: "Google Cloud",
    description: "Cloud computing services and enterprise solutions",
    slug: "google/cloud",
    icon: "☁️",
  },
  {
    name: "YouTube",
    description: "Video sharing and social media platform",
    slug: "google/youtube",
    icon: "📺",
  },
  {
    name: "Verily",
    description: "Life sciences research and healthcare technology",
    slug: "google/verily",
    icon: "🏥",
  },
  {
    name: "Google Fiber",
    description: "High-speed internet and telecommunications",
    slug: "google/fiber",
    icon: "🌐",
  },
];

const businessMetrics = [
  { label: "Market Cap", value: "$2.1 Trillion", change: "+5.2%" },
  { label: "Annual Revenue", value: "$307 Billion", year: "2025" },
  { label: "Employees", value: "182,000+", change: "Global" },
  { label: "Stock Price", value: "$156.32", change: "+2.8%" },
];

export default function GooglePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-red-500 to-yellow-500 text-white">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-5xl">🔍</span>
              <h1 className="text-5xl md:text-6xl font-bold">
                Google & Alphabet Inc
              </h1>
            </div>
            <p className="text-xl text-gray-100 leading-relaxed mb-6">
              Comprehensive coverage of Google, Alphabet Inc, and its family of companies. From search and AI 
              to autonomous vehicles and life sciences, track the innovations shaping the future of technology.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">Search & Advertising</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Artificial Intelligence</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Autonomous Vehicles</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Cloud Computing</span>
            </div>
          </div>
        </div>
      </div>

      {/* Business Metrics */}
      <div className="bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {businessMetrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">{metric.value}</div>
                <div className="text-sm text-gray-600 mb-1">{metric.label}</div>
                {metric.change && (
                  <div className={`text-xs font-semibold ${
                    metric.change.startsWith('+') ? 'text-green-600' : 'text-gray-500'
                  }`}>
                    {metric.change}
                  </div>
                )}
                {metric.year && (
                  <div className="text-xs text-gray-500">{metric.year}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        
        {/* Latest News */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest News & Updates</h2>
            <Link href="/news" className="text-blue-600 hover:text-blue-800 font-medium">
              View all news →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {recentNews.map((article) => (
              <article 
                key={article.slug}
                className={`border rounded-lg overflow-hidden hover:shadow-xl transition-shadow ${
                  article.urgent ? 'border-red-500 border-2' : 'border-gray-200'
                }`}
              >
                <Link href={`/${article.slug}`} className="block">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                        article.urgent 
                          ? 'bg-red-100 text-red-700' 
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {article.category}
                      </span>
                      {article.urgent && (
                        <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                          BREAKING
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{article.date}</span>
                      <span className="text-blue-600 font-medium">Read more →</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Alphabet Subsidiaries */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Alphabet Companies & Subsidiaries</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subsidiaries.map((company) => (
              <Link
                key={company.slug}
                href={`/${company.slug}`}
                className="block p-6 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-lg transition-all group"
              >
                <div className="text-4xl mb-4">{company.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                  {company.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {company.description}
                </p>
                <div className="mt-4 text-blue-600 text-sm font-medium">
                  Learn more →
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* About Alphabet */}
        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About Alphabet Inc</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Alphabet Inc. is an American multinational technology conglomerate holding company headquartered in 
              Mountain View, California. Created in 2015 through a corporate restructuring of Google, Alphabet is 
              the parent company of Google and several former Google subsidiaries.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              The company is organized around several key business areas including internet services, autonomous 
              vehicles, life sciences, investment capital, and research. Google remains Alphabet's largest subsidiary 
              and primary revenue generator, accounting for the vast majority of the company's income through 
              advertising, cloud computing, and hardware sales.
            </p>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 mt-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Milestones</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600 min-w-[80px]">1998</span>
                  <span className="text-gray-700">Google founded by Larry Page and Sergey Brin at Stanford</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600 min-w-[80px]">2004</span>
                  <span className="text-gray-700">Google goes public (IPO)</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600 min-w-[80px]">2006</span>
                  <span className="text-gray-700">Acquires YouTube for $1.65 billion</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600 min-w-[80px]">2009</span>
                  <span className="text-gray-700">Launches Waymo self-driving car project</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600 min-w-[80px]">2014</span>
                  <span className="text-gray-700">Acquires DeepMind for $500 million</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600 min-w-[80px]">2015</span>
                  <span className="text-gray-700">Restructures as Alphabet Inc.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600 min-w-[80px]">2026</span>
                  <span className="text-gray-700">Partners with Apple on Gemini AI integration</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Coverage Categories */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Coverage</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🤖 Artificial Intelligence</h3>
              <p className="text-gray-700 mb-4">
                Coverage of Google's AI research, Gemini development, DeepMind breakthroughs, and machine learning innovations.
              </p>
              <Link href="/news?category=ai" className="text-blue-600 font-medium hover:text-blue-800">
                View AI coverage →
              </Link>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🚗 Autonomous Vehicles</h3>
              <p className="text-gray-700 mb-4">
                In-depth reporting on Waymo's self-driving technology, safety investigations, and the future of transportation.
              </p>
              <Link href="/google/waymo" className="text-green-600 font-medium hover:text-green-800">
                View Waymo coverage →
              </Link>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">💼 Business & Strategy</h3>
              <p className="text-gray-700 mb-4">
                Analysis of Alphabet's business operations, acquisitions, financial performance, and competitive positioning.
              </p>
              <Link href="/analyst" className="text-purple-600 font-medium hover:text-purple-800">
                View business analysis →
              </Link>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">⚖️ Regulation & Policy</h3>
              <p className="text-gray-700 mb-4">
                Coverage of antitrust investigations, privacy concerns, regulatory challenges, and policy developments.
              </p>
              <Link href="/news?category=regulation" className="text-orange-600 font-medium hover:text-orange-800">
                View policy coverage →
              </Link>
            </div>
          </div>
        </section>

      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-12 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated on Google & Alphabet</h2>
          <p className="text-xl text-gray-100 mb-6">
            Get the latest news, analysis, and insights delivered to your inbox.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/news"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Latest News
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Subscribe
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
