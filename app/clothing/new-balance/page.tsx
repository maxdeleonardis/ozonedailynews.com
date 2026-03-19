import type { Metadata } from "next";
import Link from "next/link";
import { NewsArticleSchema } from "@/components/NewsArticleSchema";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "New Balance Wiki 2026: History, Made in USA Sneakers & Athletic Innovation",
  description: "Complete guide to New Balance Athletic Shoe, Inc. - Founded 1906, the iconic American footwear brand known for Made in USA manufacturing, 990 series, and performance athletic shoes.",
  keywords: [
    "New Balance",
    "New Balance sneakers",
    "Made in USA shoes",
    "New Balance 990",
    "athletic footwear",
    "running shoes",
    "New Balance history",
    "Boston sneakers",
    "American footwear brand",
    "New Balance 2026",
  ],
  openGraph: {
    title: "New Balance Wiki 2026: History, Made in USA Sneakers & Athletic Innovation",
    description: "Founded 1906 in Boston. The iconic American footwear brand committed to domestic manufacturing and athletic innovation.",
    type: "article",
    url: "https://objectwire.com/clothing/new-balance",
    images: [
      {
        url: "https://objectwire.com/og-new-balance.jpg",
        width: 1200,
        height: 630,
        alt: "New Balance - Made in USA Since 1906",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "New Balance Wiki 2026: Made in USA Since 1906",
    description: "The complete history of New Balance - From arch supports to global athletic powerhouse.",
    images: ["https://objectwire.com/og-new-balance.jpg"],
  },
};

export default function NewBalancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <NewsArticleSchema
        title="New Balance Wiki 2026: History, Made in USA Sneakers & Athletic Innovation"
        description="Complete guide to New Balance Athletic Shoe, Inc. - Founded 1906, the iconic American footwear brand known for Made in USA manufacturing and athletic innovation."
        author="ObjectWire Style Team"
        publishedTime="2026-02-07T00:00:00Z"
        modifiedTime="2026-02-07T12:00:00Z"
        imageUrl="https://objectwire.com/og-new-balance.jpg"
        articleUrl="https://objectwire.com/clothing/new-balance"
        section="Fashion & Lifestyle"
        keywords={["New Balance", "athletic footwear", "Made in USA", "sneaker culture", "running shoes"]}
      />

      <Breadcrumb
        items={[
          { name: "Home", item: "/" },
          { name: "Clothing", item: "/clothing" },
          { name: "New Balance", item: "/clothing/new-balance" },
        ]}
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-gray-700 to-gray-900 opacity-30"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptLTEyIDBjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 bg-red-600 rounded-full text-sm font-bold uppercase tracking-wider">
                👟 Founded 1906 • Made in USA
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              <span className="bg-gradient-to-r from-red-500 via-gray-300 to-gray-500 bg-clip-text text-transparent">
                New Balance
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Athletic Shoe, Inc. • The iconic <span className="text-red-400 font-bold">American footwear brand</span> committed to <span className="text-gray-300 font-bold">domestic manufacturing</span> and athletic innovation since 1906.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a
                href="https://www.newbalance.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-gray-700 hover:from-red-500 hover:to-gray-600 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
              >
                🌐 Official Website
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Facts */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="text-red-400">📊</span>
            Quick Facts
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-2">
              <div className="text-gray-400 text-sm uppercase tracking-wider">Founded</div>
              <div className="text-2xl font-bold text-red-400">1906</div>
              <div className="text-gray-500 text-sm">Boston, Massachusetts</div>
            </div>
            
            <div className="space-y-2">
              <div className="text-gray-400 text-sm uppercase tracking-wider">Founder</div>
              <div className="text-2xl font-bold text-gray-300">William J. Riley</div>
              <div className="text-gray-500 text-sm">British immigrant</div>
            </div>
            
            <div className="space-y-2">
              <div className="text-gray-400 text-sm uppercase tracking-wider">Ownership</div>
              <div className="text-2xl font-bold text-blue-400">Private</div>
              <div className="text-gray-500 text-sm">Owned by Davis family</div>
            </div>
            
            <div className="space-y-2">
              <div className="text-gray-400 text-sm uppercase tracking-wider">Headquarters</div>
              <div className="text-2xl font-bold text-green-400">Boston, MA</div>
              <div className="text-gray-500 text-sm">United States</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 pt-6 border-t border-gray-700">
            <div className="space-y-2">
              <div className="text-gray-400 text-sm uppercase tracking-wider">Annual Revenue</div>
              <div className="text-2xl font-bold text-green-400">~$5.3B</div>
              <div className="text-gray-500 text-sm">2024 estimate</div>
            </div>
            
            <div className="space-y-2">
              <div className="text-gray-400 text-sm uppercase tracking-wider">Employees</div>
              <div className="text-2xl font-bold text-purple-400">~7,000+</div>
              <div className="text-gray-500 text-sm">Worldwide</div>
            </div>
            
            <div className="space-y-2">
              <div className="text-gray-400 text-sm uppercase tracking-wider">US Manufacturing</div>
              <div className="text-2xl font-bold text-red-400">25%</div>
              <div className="text-gray-500 text-sm">Made in USA/UK</div>
            </div>
            
            <div className="space-y-2">
              <div className="text-gray-400 text-sm uppercase tracking-wider">CEO</div>
              <div className="text-2xl font-bold text-orange-400">Joe Preston</div>
              <div className="text-gray-500 text-sm">Since 2021</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Company Overview */}
        <section className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
          <h2 className="text-4xl font-bold mb-6 flex items-center gap-3">
            <span className="text-red-400">🏢</span>
            Company Overview
          </h2>
          
          <div className="prose prose-invert prose-lg max-w-none space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              <strong className="text-white">New Balance Athletic Shoe, Inc.</strong>, commonly known as <strong className="text-red-400">New Balance</strong>, is an American multinational corporation based in <span className="text-blue-400 font-semibold">Boston, Massachusetts</span>. The company was founded in 1906 by <strong>William J. Riley</strong>, a British immigrant, who initially manufactured arch supports and orthopedic shoes under the name <em>"New Balance Arch Support Company."</em>
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              New Balance is one of the few major athletic footwear manufacturers that maintains a significant <span className="text-red-400 font-bold">domestic manufacturing presence</span> in the United States and United Kingdom, producing approximately <strong>25% of its shoes</strong> in these countries. This commitment to "Made in USA" and "Made in UK" production has become a core part of the brand's identity.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              Unlike many of its competitors, New Balance remains a <strong className="text-blue-400">privately held company</strong>, owned by the Davis family since 1972. This private ownership has allowed the company to maintain its values and manufacturing philosophy without the pressures of public shareholders.
            </p>

            <div className="bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-xl">
              <p className="text-white text-lg m-0">
                "New Balance stands for more than just shoes. We're about quality, craftsmanship, and staying true to our roots while innovating for athletes worldwide."
              </p>
            </div>
          </div>
        </section>

        {/* History Timeline */}
        <section>
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <span className="text-yellow-400">📅</span>
            Company History
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl p-6 border-l-4 border-red-500">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="text-4xl font-black text-red-400 md:w-32">1906</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Company Founded</h3>
                  <p className="text-gray-300">
                    William J. Riley establishes the <strong>New Balance Arch Support Company</strong> in Boston, Massachusetts. The name "New Balance" refers to the innovative three-point support system that helped customers achieve a new balance in their feet.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl p-6 border-l-4 border-orange-500">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="text-4xl font-black text-orange-400 md:w-32">1927</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Athletic Footwear Beginnings</h3>
                  <p className="text-gray-300">
                    New Balance produces its first running shoe, the "Trackster," featuring a ripple sole design. The company begins focusing on specialized athletic footwear for runners and athletes.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl p-6 border-l-4 border-yellow-500">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="text-4xl font-black text-yellow-400 md:w-32">1961</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">The Trackster Revolution</h3>
                  <p className="text-gray-300">
                    Launch of the revolutionary <strong>Trackster</strong>, the world's first running shoe available in multiple widths. This innovation becomes a cornerstone of New Balance's approach to proper fit and comfort.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl p-6 border-l-4 border-green-500">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="text-4xl font-black text-green-400 md:w-32">1972</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Davis Family Acquisition</h3>
                  <p className="text-gray-300">
                    James S. Davis purchases New Balance for $100,000 on the day of the Boston Marathon. The Davis family continues to own and operate the company to this day, maintaining its private status.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl p-6 border-l-4 border-blue-500">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="text-4xl font-black text-blue-400 md:w-32">1976</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">National Expansion</h3>
                  <p className="text-gray-300">
                    New Balance expands distribution nationwide. The company's 320 model becomes a bestseller, establishing New Balance as a serious competitor in the running shoe market.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl p-6 border-l-4 border-purple-500">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="text-4xl font-black text-purple-400 md:w-32">1982</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">The Iconic 990 Launch</h3>
                  <p className="text-gray-300">
                    Introduction of the <strong className="text-purple-400">New Balance 990</strong>, marketed as a $100 running shoe promising "the best running shoe ever made." It becomes one of the most iconic sneakers in history.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl p-6 border-l-4 border-pink-500">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="text-4xl font-black text-pink-400 md:w-32">1988</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Made in USA Campaign</h3>
                  <p className="text-gray-300">
                    New Balance doubles down on American manufacturing, opening new factories in Maine and Massachusetts. The "Made in USA" label becomes a key brand differentiator.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl p-6 border-l-4 border-red-500">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="text-4xl font-black text-red-400 md:w-32">2006</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">100th Anniversary</h3>
                  <p className="text-gray-300">
                    New Balance celebrates its centennial with special edition releases and renewed commitment to quality craftsmanship and manufacturing excellence.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl p-6 border-l-4 border-cyan-500">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="text-4xl font-black text-cyan-400 md:w-32">2010s</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Sneaker Culture Renaissance</h3>
                  <p className="text-gray-300">
                    New Balance experiences a cultural renaissance as streetwear and sneaker culture embrace heritage models. The 990, 574, and 993 become fashion staples beyond athletic performance.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl p-6 border-l-4 border-green-500">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="text-4xl font-black text-green-400 md:w-32">2020s</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Modern Growth Era</h3>
                  <p className="text-gray-300">
                    Strategic partnerships with fashion brands, athlete endorsements, and limited edition collaborations propel New Balance to new heights. The brand becomes a dominant force in both performance and lifestyle footwear.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl p-6 border-l-4 border-yellow-500">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="text-4xl font-black text-yellow-400 md:w-32">2026</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Present Day</h3>
                  <p className="text-gray-300">
                    New Balance continues as a global athletic footwear leader, balancing heritage craftsmanship with cutting-edge innovation. The company maintains its commitment to domestic manufacturing while expanding its global footprint.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Iconic Products */}
        <section className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
          <h2 className="text-4xl font-bold mb-6 flex items-center gap-3">
            <span className="text-purple-400">👟</span>
            Iconic Products
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
              <div className="text-4xl mb-3">👑</div>
              <h3 className="text-2xl font-bold text-purple-400 mb-3">990 Series</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                The legendary 990 series, launched in 1982, revolutionized premium running shoes. The current 990v6 continues the legacy with modern technology while maintaining the classic aesthetic. Known as the "dad shoe" that became a fashion icon.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-sm text-purple-300">990v1-v6</span>
                <span className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-sm text-purple-300">Made in USA</span>
                <span className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-sm text-purple-300">Premium</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
              <div className="text-4xl mb-3">🌟</div>
              <h3 className="text-2xl font-bold text-blue-400 mb-3">574</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                The 574 is New Balance's most popular and versatile model. Introduced in 1988, it combines retro styling with modern comfort. Available in hundreds of colorways, it's the brand's best-selling lifestyle sneaker globally.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full text-sm text-blue-300">Lifestyle</span>
                <span className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full text-sm text-blue-300">Classic</span>
                <span className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full text-sm text-blue-300">Affordable</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900/20 to-teal-900/20 backdrop-blur-sm rounded-xl p-6 border border-green-500/30">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-2xl font-bold text-green-400 mb-3">Fresh Foam</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                New Balance's innovative Fresh Foam cushioning technology provides a plush, responsive ride for runners. The Fresh Foam 1080 is the brand's premier cushioned running shoe, loved by casual and serious runners alike.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-600/20 border border-green-500/30 rounded-full text-sm text-green-300">Running</span>
                <span className="px-3 py-1 bg-green-600/20 border border-green-500/30 rounded-full text-sm text-green-300">Cushioned</span>
                <span className="px-3 py-1 bg-green-600/20 border border-green-500/30 rounded-full text-sm text-green-300">Performance</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 backdrop-blur-sm rounded-xl p-6 border border-red-500/30">
              <div className="text-4xl mb-3">🏃</div>
              <h3 className="text-2xl font-bold text-red-400 mb-3">FuelCell</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                FuelCell technology delivers propulsive feel and energy return for competitive runners. The FuelCell SuperComp Elite v4 is New Balance's carbon-plated racing shoe, competing with Nike's Vaporfly and Adidas' Adios Pro.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-red-600/20 border border-red-500/30 rounded-full text-sm text-red-300">Racing</span>
                <span className="px-3 py-1 bg-red-600/20 border border-red-500/30 rounded-full text-sm text-red-300">Carbon Plate</span>
                <span className="px-3 py-1 bg-red-600/20 border border-red-500/30 rounded-full text-sm text-red-300">Elite</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30">
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-3">550</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Originally a basketball shoe from 1989, the 550 was revived in 2020 and became a cultural phenomenon. Collaborations with Aimé Leon Dore, Joe Freshgoods, and others made it one of the most sought-after sneakers.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-yellow-600/20 border border-yellow-500/30 rounded-full text-sm text-yellow-300">Basketball Heritage</span>
                <span className="px-3 py-1 bg-yellow-600/20 border border-yellow-500/30 rounded-full text-sm text-yellow-300">Retro</span>
                <span className="px-3 py-1 bg-yellow-600/20 border border-yellow-500/30 rounded-full text-sm text-yellow-300">Hype</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 backdrop-blur-sm rounded-xl p-6 border border-pink-500/30">
              <div className="text-4xl mb-3">🔥</div>
              <h3 className="text-2xl font-bold text-pink-400 mb-3">2002R</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                A modern reinterpretation of the 2002, the 2002R combines Y2K aesthetics with contemporary design. It has become a favorite among Gen Z and sneaker enthusiasts, featuring premium materials and bold colorways.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-pink-600/20 border border-pink-500/30 rounded-full text-sm text-pink-300">Y2K Style</span>
                <span className="px-3 py-1 bg-pink-600/20 border border-pink-500/30 rounded-full text-sm text-pink-300">Modern</span>
                <span className="px-3 py-1 bg-pink-600/20 border border-pink-500/30 rounded-full text-sm text-pink-300">Trendy</span>
              </div>
            </div>
          </div>
        </section>

        {/* Manufacturing Philosophy */}
        <section>
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <span className="text-red-400">🏭</span>
            Made in USA/UK Manufacturing
          </h2>
          
          <div className="bg-gradient-to-br from-red-900/20 to-blue-900/20 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30">
            <div className="prose prose-invert prose-lg max-w-none space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                New Balance is one of the last major athletic footwear companies to maintain substantial domestic manufacturing in the United States and United Kingdom. This commitment sets them apart from competitors like Nike and Adidas, who manufacture almost entirely overseas.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-blue-900/30 rounded-xl p-6 border border-blue-500/50">
                  <h3 className="text-2xl font-bold text-blue-400 mb-4">🇺🇸 USA Factories</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1">→</span>
                      <span><strong className="text-white">Lawrence, MA</strong> - Main manufacturing facility</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1">→</span>
                      <span><strong className="text-white">Norridgewock, ME</strong> - Premium sneaker production</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1">→</span>
                      <span><strong className="text-white">Skowhegan, ME</strong> - Advanced manufacturing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1">→</span>
                      <span><strong className="text-white">Norway, ME</strong> - Specialty production</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1">→</span>
                      <span><strong className="text-white">Boston, MA</strong> - Innovation lab & headquarters</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-900/30 rounded-xl p-6 border border-red-500/50">
                  <h3 className="text-2xl font-bold text-red-400 mb-4">🇬🇧 UK Factory</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 mt-1">→</span>
                      <span><strong className="text-white">Flimby, Cumbria</strong> - Historic UK factory since 1982</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 mt-1">→</span>
                      <span>Produces premium "Made in UK" models including 991, 1500, and special editions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 mt-1">→</span>
                      <span>Employs skilled craftspeople who handcraft select sneakers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 mt-1">→</span>
                      <span>Known for exceptional quality control and attention to detail</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-xl">
                <h3 className="text-xl font-bold text-green-400 mb-3">Why Domestic Manufacturing Matters</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span><strong>Quality Control:</strong> Direct oversight ensures consistent quality standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span><strong>American Jobs:</strong> Supports ~4,000 US manufacturing jobs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span><strong>Faster Turnaround:</strong> Local production enables quicker response to trends</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span><strong>Premium Materials:</strong> USA/UK factories use higher-quality materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span><strong>Brand Differentiation:</strong> Sets New Balance apart from competitors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span><strong>Consumer Trust:</strong> Made in USA/UK label commands premium pricing</span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-400 text-sm italic">
                Note: While 25% of New Balance shoes are made in the USA/UK, the remaining 75% are manufactured in factories in Asia, primarily Vietnam and China. The company aims to increase domestic production capacity in coming years.
              </p>
            </div>
          </div>
        </section>

        {/* Collaborations & Partnerships */}
        <section className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
          <h2 className="text-4xl font-bold mb-6 flex items-center gap-3">
            <span className="text-pink-400">🤝</span>
            Notable Collaborations
          </h2>
          
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            New Balance has partnered with fashion designers, streetwear brands, and cultural icons to create some of the most sought-after sneakers in recent years:
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-600/10 to-blue-600/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 hover:border-purple-400 transition-all">
              <div className="text-3xl mb-3">👔</div>
              <h3 className="text-xl font-bold text-purple-400 mb-3">Aimé Leon Dore</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                The most influential New Balance collaboration. Teddy Santis' ALD brand has released dozens of 550, 993, and 1906 colorways that sell out instantly and resell for 2-3x retail.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-600/10 to-cyan-600/10 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30 hover:border-blue-400 transition-all">
              <div className="text-3xl mb-3">🎨</div>
              <h3 className="text-xl font-bold text-blue-400 mb-3">Joe Freshgoods</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Chicago designer Joe Freshgoods creates vibrant, conversation-starting New Balance collaborations. His "Conversations Amongst Us" 990v3 and 550 releases are cultural artifacts.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-600/10 to-teal-600/10 backdrop-blur-sm rounded-xl p-6 border border-green-500/30 hover:border-green-400 transition-all">
              <div className="text-3xl mb-3">🏀</div>
              <h3 className="text-xl font-bold text-green-400 mb-3">Kawhi Leonard</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                NBA superstar Kawhi Leonard's signature line showcases performance basketball innovation. The Kawhi IV represents New Balance's return to elite basketball footwear.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-600/10 to-orange-600/10 backdrop-blur-sm rounded-xl p-6 border border-red-500/30 hover:border-red-400 transition-all">
              <div className="text-3xl mb-3">🛹</div>
              <h3 className="text-xl font-bold text-red-400 mb-3">Salehe Bembury</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Designer Salehe Bembury's "Peace Be The Journey" 2002R collaborations feature earthy tones and innovative design. His "Water Be The Guide" 574+ pushed boundaries further.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-600/10 to-orange-600/10 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30 hover:border-yellow-400 transition-all">
              <div className="text-3xl mb-3">🎭</div>
              <h3 className="text-xl font-bold text-yellow-400 mb-3">Comme des Garçons</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Japanese fashion house CDG brings avant-garde aesthetics to New Balance silhouettes. Their deconstructed 990 and 2002R releases are museum-worthy.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-600/10 to-purple-600/10 backdrop-blur-sm rounded-xl p-6 border border-pink-500/30 hover:border-pink-400 transition-all">
              <div className="text-3xl mb-3">⚽</div>
              <h3 className="text-xl font-bold text-pink-400 mb-3">Stone Island</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Italian sportswear brand Stone Island collaborates on technical apparel and footwear. Their joint releases blend performance innovation with sophisticated style.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-600/10 to-blue-600/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30 hover:border-cyan-400 transition-all">
              <div className="text-3xl mb-3">🎬</div>
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Jjjjound</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Justin Saunders' Jjjjound brings minimalist design philosophy to New Balance. His 990v3, 992, and 993 collabs in muted tones are instant classics.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-600/10 to-red-600/10 backdrop-blur-sm rounded-xl p-6 border border-orange-500/30 hover:border-orange-400 transition-all">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="text-xl font-bold text-orange-400 mb-3">Kith</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Ronnie Fieg's Kith has been collaborating with New Balance since 2011. Their seasonal releases and special projects consistently drive hype and cultural relevance.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-600/10 to-purple-600/10 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/30 hover:border-indigo-400 transition-all">
              <div className="text-3xl mb-3">🎸</div>
              <h3 className="text-xl font-bold text-indigo-400 mb-3">Stray Rats</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Julian Consuegra's Stray Rats brings gritty, streetwise energy to New Balance collaborations. His 990v3 and 991 releases tell stories of urban culture.
              </p>
            </div>
          </div>
        </section>

        {/* Athlete Endorsements */}
        <section>
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <span className="text-green-400">🏃</span>
            Athlete Endorsements
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 backdrop-blur-sm rounded-xl p-6 border border-green-500/30">
              <h3 className="text-2xl font-bold text-green-400 mb-4">🏀 Basketball</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <span className="text-2xl">⭐</span>
                  <div>
                    <div className="font-bold text-white">Kawhi Leonard</div>
                    <div className="text-sm text-gray-400">2-time NBA Champion, Finals MVP</div>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <div className="font-bold text-white">Jamal Murray</div>
                    <div className="text-sm text-gray-400">Denver Nuggets, NBA Champion</div>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <div className="font-bold text-white">Dejounte Murray</div>
                    <div className="text-sm text-gray-400">All-Star, Elite Two-Way Guard</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">🏃 Running</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🥇</span>
                  <div>
                    <div className="font-bold text-white">Sydney McLaughlin-Levrone</div>
                    <div className="text-sm text-gray-400">Olympic Champion, World Record Holder</div>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🌟</span>
                  <div>
                    <div className="font-bold text-white">Emma Coburn</div>
                    <div className="text-sm text-gray-400">Steeplechase World Champion</div>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <div className="font-bold text-white">Trayvon Bromell</div>
                    <div className="text-sm text-gray-400">100m World Championship Medalist</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">⚾ Baseball</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <span className="text-2xl">⚾</span>
                  <div>
                    <div className="font-bold text-white">Francisco Lindor</div>
                    <div className="text-sm text-gray-400">NY Mets, All-Star Shortstop</div>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🔥</span>
                  <div>
                    <div className="font-bold text-white">Dustin Pedroia (Retired)</div>
                    <div className="text-sm text-gray-400">Red Sox Legend, MVP</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 backdrop-blur-sm rounded-xl p-6 border border-red-500/30">
              <h3 className="text-2xl font-bold text-red-400 mb-4">⚽ Soccer</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <span className="text-2xl">⚽</span>
                  <div>
                    <div className="font-bold text-white">Raheem Sterling</div>
                    <div className="text-sm text-gray-400">England International, Chelsea FC</div>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <div className="font-bold text-white">Bukayo Saka</div>
                    <div className="text-sm text-gray-400">Arsenal FC, England Star</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Brand Culture & Impact */}
        <section className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
          <h2 className="text-4xl font-bold mb-6 flex items-center gap-3">
            <span className="text-yellow-400">🎨</span>
            Cultural Impact & Sneaker Culture
          </h2>
          
          <div className="prose prose-invert prose-lg max-w-none space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Once considered the "dad shoe" brand, New Balance has undergone a remarkable cultural transformation in the 2010s and 2020s. What was once viewed as unstylish and practical has become the epitome of <strong className="text-yellow-400">understated cool</strong> and <strong className="text-blue-400">heritage craftsmanship</strong>.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-xl">
                <h3 className="text-xl font-bold text-blue-400 mb-3">👨‍👩‍👧 From "Dad Shoes" to Fashion Icons</h3>
                <p className="text-gray-300 m-0 leading-relaxed">
                  The "normcore" fashion movement of the 2010s embraced New Balance's deliberately unsexy aesthetic. Suddenly, the 990 and 574 were being worn by fashion editors, streetwear enthusiasts, and celebrities. Apple founder Steve Jobs' preference for New Balance 992s became legendary.
                </p>
              </div>

              <div className="bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded-r-xl">
                <h3 className="text-xl font-bold text-purple-400 mb-3">🌍 Global Streetwear Acceptance</h3>
                <p className="text-gray-300 m-0 leading-relaxed">
                  New Balance broke into streetwear culture through strategic collaborations and organic celebrity endorsements. The brand is now a staple in Tokyo, London, New York, and Seoul streetwear scenes, competing directly with Nike and Adidas.
                </p>
              </div>

              <div className="bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-xl">
                <h3 className="text-xl font-bold text-green-400 mb-3">💰 Resale Market Presence</h3>
                <p className="text-gray-300 m-0 leading-relaxed">
                  Limited edition New Balance collaborations now command significant resale premiums. Aimé Leon Dore 550s can resell for $500-800, and rare Made in USA models appreciate in value. StockX and GOAT data shows consistent growth in NB demand.
                </p>
              </div>

              <div className="bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-xl">
                <h3 className="text-xl font-bold text-red-400 mb-3">🎬 Pop Culture Presence</h3>
                <p className="text-gray-300 m-0 leading-relaxed">
                  New Balance appears regularly in film, TV, and music. From "The Bear" to hip-hop videos, NB represents authenticity and anti-hype culture. The brand's refusal to chase trends has ironically made it trendy.
                </p>
              </div>
            </div>

            <div className="bg-yellow-900/20 border-2 border-yellow-500/50 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">📈 Market Position 2026</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">•</span>
                  <span><strong>#4 Athletic Footwear Brand</strong> globally by revenue</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">•</span>
                  <span><strong>$5.3 billion</strong> in annual revenue (2024)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">•</span>
                  <span><strong>120 countries</strong> with New Balance presence</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">•</span>
                  <span><strong>15-20% market share</strong> in premium sneaker segment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">•</span>
                  <span><strong>Double-digit growth</strong> year-over-year since 2020</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Sustainability Initiatives */}
        <section>
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <span className="text-green-400">🌱</span>
            Sustainability & Social Responsibility
          </h2>
          
          <div className="bg-gradient-to-br from-green-900/20 to-teal-900/20 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                New Balance has committed to significant sustainability initiatives as part of its corporate responsibility strategy:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-800/30 rounded-xl p-6 border border-green-600/50">
                  <h3 className="text-xl font-bold text-green-400 mb-4">♻️ Recycled Materials</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• 50% of shoes using recycled polyester by 2025</li>
                    <li>• Partnership with recycling innovators</li>
                    <li>• Recycled rubber in select outsoles</li>
                    <li>• Sustainable packaging initiatives</li>
                  </ul>
                </div>

                <div className="bg-blue-800/30 rounded-xl p-6 border border-blue-600/50">
                  <h3 className="text-xl font-bold text-blue-400 mb-4">💧 Water Reduction</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Waterless dyeing technology pilot programs</li>
                    <li>• 30% water reduction in manufacturing</li>
                    <li>• Wastewater treatment improvements</li>
                    <li>• Supplier water stewardship standards</li>
                  </ul>
                </div>

                <div className="bg-yellow-800/30 rounded-xl p-6 border border-yellow-600/50">
                  <h3 className="text-xl font-bold text-yellow-400 mb-4">⚡ Carbon Neutrality</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Carbon neutral by 2050 commitment</li>
                    <li>• Renewable energy in owned facilities</li>
                    <li>• Supply chain emissions mapping</li>
                    <li>• Carbon offset programs</li>
                  </ul>
                </div>

                <div className="bg-purple-800/30 rounded-xl p-6 border border-purple-600/50">
                  <h3 className="text-xl font-bold text-purple-400 mb-4">👥 Labor Practices</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Fair Labor Association membership</li>
                    <li>• Regular factory audits and transparency</li>
                    <li>• Living wage initiatives</li>
                    <li>• Worker safety programs</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-900/30 border-l-4 border-green-500 p-6 rounded-r-xl mt-6">
                <h3 className="text-xl font-bold text-green-400 mb-3">🌍 Responsible Leadership Program</h3>
                <p className="text-gray-300 m-0">
                  New Balance's Responsible Leadership program encompasses environmental sustainability, social responsibility, and ethical business practices. The company publishes annual sustainability reports and has third-party verification of its claims.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Controversies & Challenges */}
        <section className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
          <h2 className="text-4xl font-bold mb-6 flex items-center gap-3">
            <span className="text-orange-400">⚠️</span>
            Controversies & Challenges
          </h2>
          
          <div className="space-y-6">
            <div className="bg-orange-900/20 border-l-4 border-orange-500 p-6 rounded-r-xl">
              <h3 className="text-xl font-bold text-orange-400 mb-3">🗳️ 2016 Political Controversy</h3>
              <p className="text-gray-300 leading-relaxed">
                New Balance faced backlash in 2016 when a company spokesperson commented favorably on then-President-elect Donald Trump's trade policies. The comments were interpreted as political endorsement, leading to social media boycotts and sneaker burnings. The company clarified its stance was about trade policy, not political endorsement, but damage to brand perception persisted for several years.
              </p>
            </div>

            <div className="bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-xl">
              <h3 className="text-xl font-bold text-red-400 mb-3">⚖️ "Made in USA" Lawsuit</h3>
              <p className="text-gray-300 leading-relaxed">
                New Balance faced legal challenges regarding its "Made in USA" marketing claims. Since only 25% of shoes are domestically manufactured, critics argued the label was misleading. The company now uses more specific language like "Made in USA/UK of domestic and imported materials" to comply with FTC guidelines.
              </p>
            </div>

            <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-r-xl">
              <h3 className="text-xl font-bold text-yellow-400 mb-3">💰 Patent Litigation</h3>
              <p className="text-gray-300 leading-relaxed">
                New Balance has been involved in multiple patent disputes with competitors over shoe technology. Notable cases include lawsuits against Skechers and disputes with Nike over cushioning technology. The company has both won and lost various patent claims over the years.
              </p>
            </div>

            <div className="bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded-r-xl">
              <h3 className="text-xl font-bold text-purple-400 mb-3">📊 Supply Chain Transparency</h3>
              <p className="text-gray-300 leading-relaxed">
                Like most footwear companies, New Balance has faced criticism about labor conditions in overseas factories. While the company has made strides in transparency and ethical sourcing, advocacy groups continue to push for greater accountability and improved conditions in Asian manufacturing facilities.
              </p>
            </div>
          </div>
        </section>

        {/* Future Outlook */}
        <section>
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <span className="text-cyan-400">🔮</span>
            Future Outlook
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-600/10 to-cyan-600/10 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
              <h3 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                🚀 Growth Opportunities
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">→</span>
                  <span><strong>International Expansion:</strong> Particularly in Asia and South America</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">→</span>
                  <span><strong>Direct-to-Consumer:</strong> Growing DTC channel through website and retail stores</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">→</span>
                  <span><strong>Apparel Category:</strong> Expanding beyond footwear into lifestyle clothing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">→</span>
                  <span><strong>Women's Market:</strong> Increased focus on female athletes and consumers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">→</span>
                  <span><strong>Basketball Return:</strong> Kawhi Leonard signature line establishing NBA credibility</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-600/10 to-pink-600/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
              <h3 className="text-2xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                💡 Innovation Focus
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">→</span>
                  <span><strong>FuelCell Technology:</strong> Competing with Nike and Adidas in performance running</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">→</span>
                  <span><strong>3D Printing:</strong> Custom fit shoes and rapid prototyping</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">→</span>
                  <span><strong>Smart Footwear:</strong> Exploring wearable technology integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">→</span>
                  <span><strong>Sustainable Materials:</strong> Bio-based and recycled innovations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">→</span>
                  <span><strong>Manufacturing Automation:</strong> Increasing US production capacity</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-green-900/30 to-blue-900/30 backdrop-blur-sm rounded-xl p-8 border border-green-500/30">
            <h3 className="text-2xl font-bold text-green-400 mb-4">🎯 2026-2030 Strategic Goals</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>$10 billion in annual revenue by 2030</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>50% of products using sustainable materials</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Expand US manufacturing to 30% of production</span>
                </li>
              </ul>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Double women's business revenue</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Become #3 athletic footwear brand globally</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Carbon neutral operations by 2050</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Related Coverage */}
        <section className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
          <h2 className="text-4xl font-bold mb-6 flex items-center gap-3">
            <span className="text-orange-400">🔗</span>
            Related Coverage
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/clothing"
              className="bg-gradient-to-r from-red-600/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-6 border border-red-500/30 hover:border-red-400 transition-all group"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">👕</div>
              <h3 className="text-xl font-bold text-red-400 mb-2">Clothing & Fashion Hub</h3>
              <p className="text-gray-400 text-sm">More fashion brands and style coverage →</p>
            </Link>

            <Link
              href="/news"
              className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30 hover:border-blue-400 transition-all group"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">📰</div>
              <h3 className="text-xl font-bold text-blue-400 mb-2">Latest Fashion News</h3>
              <p className="text-gray-400 text-sm">Stay updated on industry trends →</p>
            </Link>
          </div>
        </section>

      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-800">
        <p className="text-center text-gray-500 text-sm">
          New Balance Athletic Shoe, Inc. • Founded 1906 • Headquarters: Boston, Massachusetts
          <br />
          <span className="text-xs">© 2026 New Balance Athletics, Inc. • Made in USA/UK of domestic and imported materials</span>
        </p>
      </div>
    </div>
  );
}
