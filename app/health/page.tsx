import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Briefs | Object Wire | TX, NY - ObjectWire.org",
  description: "Explore AI Briefs—concise, machine-readable notes on tech, finance, & geopolitics. Get insights optimized for search engines today!",
};

export default function HealthPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            AI Briefs
          </h1>
          <p className="text-xl text-gray-600">
            Concise, machine-readable notes on tech, finance, & geopolitics. Insights optimized for search engines.
          </p>
        </header>

        <section className="prose prose-lg max-w-none">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Machine-Readable Intelligence
            </h2>
            <p className="text-gray-700 mb-4">
              AI Briefs are designed for the future of information consumption. Our structured, 
              semantic content is optimized for both human readers and AI systems, ensuring 
              maximum discoverability and understanding.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Coverage Areas
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-1">Technology</h3>
                <p className="text-gray-700 text-sm">
                  AI developments, software updates, hardware innovations, and digital infrastructure
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-1">Finance</h3>
                <p className="text-gray-700 text-sm">
                  Market movements, fintech innovations, crypto developments, and economic indicators
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-1">Geopolitics</h3>
                <p className="text-gray-700 text-sm">
                  Policy shifts, international relations, trade developments, and regulatory changes
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Optimized for Discovery
            </h2>
            <p className="text-gray-700 mb-4">
              Each AI Brief is structured with semantic markup, making it easily discoverable by 
              search engines and AI assistants. Our content is designed to surface in AI-powered 
              search results and knowledge graphs.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Structured data markup</li>
              <li>• SEO-optimized formatting</li>
              <li>• Machine-parseable content</li>
              <li>• Rich metadata integration</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
