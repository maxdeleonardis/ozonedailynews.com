import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research Wire | Object Wire - ObjectWire.org",
  description: "Get in-depth news & analysis with timeless explainers. Stay informed on major topics today!",
};

export default function AnalystPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Research Wire
          </h1>
          <p className="text-xl text-gray-600">
            Get in-depth news & analysis with timeless explainers. Stay informed on major topics today!
          </p>
        </header>

        <section className="prose prose-lg max-w-none">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Deep-Dive Analysis
            </h2>
            <p className="text-gray-700 mb-4">
              Research Wire provides comprehensive analysis and expert insights into the most important 
              business, technology, and economic developments. Our team of analysts delivers thorough 
              research reports that go beyond the headlines.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              What We Cover
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li>• Market trends and economic indicators</li>
              <li>• Technology sector analysis</li>
              <li>• Business strategy and competitive intelligence</li>
              <li>• Regulatory and policy impacts</li>
              <li>• Emerging technologies and innovation</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Research Standards
            </h2>
            <p className="text-gray-700">
              All Research Wire content is produced by experienced analysts following rigorous research 
              methodologies. We prioritize accuracy, context, and actionable insights to help you make 
              informed decisions.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
