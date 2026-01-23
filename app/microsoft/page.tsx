import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Microsoft Corporation - News, Analysis & Technology Updates | ObjectWire",
  description: "Comprehensive coverage of Microsoft, including Windows, Azure, Office, Xbox, and all Microsoft products and services. Latest news, business analysis, and technology updates.",
  keywords: ["Microsoft", "Windows", "Azure", "Office 365", "Xbox", "Satya Nadella", "tech news", "cloud computing", "AI"],
  openGraph: {
    title: "Microsoft Corporation Coverage | ObjectWire",
    description: "In-depth reporting on Microsoft, its products, services, and business operations.",
    type: "website",
  }
};

const recentNews = [
  {
    title: "Microsoft Gave FBI BitLocker Keys to Unlock Laptops, Report Says",
    excerpt: "First known instance of major tech company providing encryption keys to law enforcement, reigniting privacy debates.",
    date: "January 23, 2026",
    slug: "news/microsoft-gave-fbi-bitlocker-keys",
    category: "Privacy & Security",
    urgent: true,
  },
  {
    title: "Trump & Microsoft Data Centers: Electricity Prices Under Scrutiny",
    excerpt: "Administration examines impact of AI data centers on electricity infrastructure and pricing.",
    date: "January 2026",
    slug: "news/trump-microsoft-data-centers-electricity-prices",
    category: "Infrastructure",
    urgent: false,
  },
];

const products = [
  {
    name: "Windows",
    description: "Operating system powering billions of devices worldwide",
    slug: "microsoft/windows",
    icon: "🪟",
  },
  {
    name: "Azure",
    description: "Cloud computing platform and services",
    slug: "microsoft/azure",
    icon: "☁️",
  },
  {
    name: "Microsoft 365",
    description: "Productivity suite including Office, Teams, and OneDrive",
    slug: "microsoft/microsoft-365",
    icon: "📊",
  },
  {
    name: "Xbox",
    description: "Gaming console and entertainment platform",
    slug: "microsoft/xbox",
    icon: "🎮",
  },
  {
    name: "GitHub",
    description: "Software development and version control platform",
    slug: "microsoft/github",
    icon: "💻",
  },
  {
    name: "LinkedIn",
    description: "Professional networking and career platform",
    slug: "microsoft/linkedin",
    icon: "💼",
  },
];

const businessMetrics = [
  { label: "Market Cap", value: "$3.1 Trillion", change: "+6.8%" },
  { label: "Annual Revenue", value: "$245 Billion", year: "FY 2025" },
  { label: "Employees", value: "238,000+", change: "Global" },
  { label: "Stock Price", value: "$423.15", change: "+4.2%" },
];

export default function MicrosoftPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-5xl">🪟</span>
              <h1 className="text-5xl md:text-6xl font-bold">
                Microsoft Corporation
              </h1>
            </div>
            <p className="text-xl text-gray-100 leading-relaxed mb-6">
              Comprehensive coverage of Microsoft's technology ecosystem, from Windows and Azure to Xbox and AI. 
              Track the innovations, business strategies, and regulatory challenges shaping one of the world's most 
              influential technology companies.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">Cloud Computing</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Artificial Intelligence</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Enterprise Software</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Gaming</span>
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

        {/* Microsoft Products & Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Microsoft Products & Services</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.slug}
                className="block p-6 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-lg transition-all group"
              >
                <div className="text-4xl mb-4">{product.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* About Microsoft */}
        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About Microsoft Corporation</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Microsoft Corporation is an American multinational technology company headquartered in Redmond, Washington. 
              Founded by Bill Gates and Paul Allen in 1975, Microsoft has evolved from a PC software vendor to a 
              diversified technology giant spanning cloud computing, artificial intelligence, gaming, and productivity 
              software.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Under CEO Satya Nadella's leadership since 2014, Microsoft has transformed into a cloud-first, AI-first 
              company. Azure has become the second-largest cloud platform globally, while the company's partnership 
              with OpenAI has positioned it at the forefront of the generative AI revolution.
            </p>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 mt-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Milestones</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600 min-w-[80px]">1975</span>
                  <span className="text-gray-700">Microsoft founded by Bill Gates and Paul Allen</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600 min-w-[80px]">1985</span>
                  <span className="text-gray-700">Windows 1.0 released</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600 min-w-[80px]">1986</span>
                  <span className="text-gray-700">Microsoft goes public (IPO)</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600 min-w-[80px]">2001</span>
                  <span className="text-gray-700">Xbox gaming console launches</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600 min-w-[80px]">2010</span>
                  <span className="text-gray-700">Azure cloud platform launches commercially</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600 min-w-[80px]">2014</span>
                  <span className="text-gray-700">Satya Nadella becomes CEO</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600 min-w-[80px]">2016</span>
                  <span className="text-gray-700">Acquires LinkedIn for $26.2 billion</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600 min-w-[80px]">2018</span>
                  <span className="text-gray-700">Acquires GitHub for $7.5 billion</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600 min-w-[80px]">2023</span>
                  <span className="text-gray-700">Invests $10 billion in OpenAI; integrates ChatGPT into products</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600 min-w-[80px]">2024</span>
                  <span className="text-gray-700">Completes $69 billion Activision Blizzard acquisition</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Leadership</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Satya Nadella</h3>
              <p className="text-sm text-blue-700 font-semibold mb-3">Chairman & CEO</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Leading Microsoft since 2014, Nadella transformed the company's culture and strategy with a focus 
                on cloud computing, AI, and cross-platform collaboration. Under his leadership, Microsoft's market 
                cap has grown from $300 billion to over $3 trillion.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Brad Smith</h3>
              <p className="text-sm text-blue-700 font-semibold mb-3">Vice Chair & President</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Serving as Microsoft's chief legal officer and leading the company's work on regulatory affairs, 
                corporate philanthropy, and responsible AI. Key figure in navigating antitrust challenges and 
                government relations.
              </p>
            </div>
          </div>
        </section>

        {/* Coverage Categories */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Coverage</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">☁️ Cloud & AI</h3>
              <p className="text-gray-700 mb-4">
                Coverage of Azure, OpenAI partnership, Copilot, and Microsoft's artificial intelligence initiatives.
              </p>
              <Link href="/news?category=cloud" className="text-blue-600 font-medium hover:text-blue-800">
                View cloud coverage →
              </Link>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🔒 Privacy & Security</h3>
              <p className="text-gray-700 mb-4">
                In-depth reporting on data privacy, encryption, cybersecurity, and law enforcement access issues.
              </p>
              <Link href="/news/microsoft-gave-fbi-bitlocker-keys" className="text-red-600 font-medium hover:text-red-800">
                View security coverage →
              </Link>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">💼 Business & Strategy</h3>
              <p className="text-gray-700 mb-4">
                Analysis of Microsoft's business operations, acquisitions, financial performance, and market positioning.
              </p>
              <Link href="/analyst" className="text-purple-600 font-medium hover:text-purple-800">
                View business analysis →
              </Link>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">⚖️ Regulation & Policy</h3>
              <p className="text-gray-700 mb-4">
                Coverage of antitrust cases, regulatory challenges, government contracts, and policy developments.
              </p>
              <Link href="/news?category=regulation" className="text-green-600 font-medium hover:text-green-800">
                View policy coverage →
              </Link>
            </div>
          </div>
        </section>

      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-blue-700 to-cyan-600 text-white">
        <div className="container mx-auto px-4 py-12 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated on Microsoft</h2>
          <p className="text-xl text-gray-100 mb-6">
            Get the latest news, analysis, and insights on Microsoft's technology and business.
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
