import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start-up News | Object Wire - ObjectWire.org",
  description: "Read independent opinion columns analyzing start-up trends, venture capital, & entrepreneurial shifts. Contribute your insights today!",
};

export default function StartUpNewsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Start-up News
          </h1>
          <p className="text-xl text-gray-600">
            Independent coverage of the start-up ecosystem, venture capital, and entrepreneurial innovation.
          </p>
        </header>

        <section className="prose prose-lg max-w-none">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Emerging Companies & Innovations
            </h2>
            <p className="text-gray-700 mb-4">
              Stay informed about the latest developments in the start-up world. From seed rounds to 
              Series A funding, we cover the companies and innovations that are shaping the future of 
              business and technology.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Coverage Focus
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">💰</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Funding Rounds</h3>
                  <p className="text-gray-700 text-sm">
                    Comprehensive coverage of VC investments, angel rounds, and IPO preparations
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Product Launches</h3>
                  <p className="text-gray-700 text-sm">
                    New products, features, and innovations from emerging companies
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">👥</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Founder Insights</h3>
                  <p className="text-gray-700 text-sm">
                    Interviews and analysis from founders building the next generation of companies
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📈</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Market Trends</h3>
                  <p className="text-gray-700 text-sm">
                    Analysis of trends shaping the start-up ecosystem and venture capital
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Texas Tech Hub
            </h2>
            <p className="text-gray-700">
              With a special focus on Texas's growing tech ecosystem, we track the Austin, Dallas, 
              and Houston start-up scenes as they compete with Silicon Valley and New York for 
              talent and capital.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Submit Your Start-up Story
            </h2>
            <p className="text-gray-700 mb-4">
              Are you building something interesting? We want to hear from founders who are creating 
              innovative solutions to real problems.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Share Your Story
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
