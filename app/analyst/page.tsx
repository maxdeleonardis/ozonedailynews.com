import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research Wire | Object Wire - ObjectWire.org",
  description: "Get in-depth news & analysis with timeless explainers. Stay informed on major topics today!",
  alternates: {
    canonical: 'https://www.objectwire.org/analyst',
  },
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
              Research Wire provides comprehensive analysis and expert insights into the most important stories shaping our world. Our team of analysts focuses on technology disruption, financial market shifts, and geopolitical developments that require more than just surface-level reporting.
            </p>
            <p className="text-gray-700 mb-4">
              In an era of rapid information cycles, ObjectWire Research Wire dedicated to "Timeless Explainers"—articles that don't just tell you what happened, but explain the underlying architecture of why it happened and what it means for the future. We bridge the gap between breaking news and institutional intelligence.
            </p>
            <p className="text-gray-700 mb-6">
              Our methodology involves cross-referencing primary source documentation, financial filings, and technical specifications to provide a rigorous evidentiary basis for every conclusion we publish. Whether exploring the economics of satellite constellations or the regulatory landscape of generative AI, our goal is to provide clarity in complexity.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="border-t-2 border-blue-600 pt-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Technical Excellence</h3>
                <p className="text-sm text-gray-600">Deep analysis of hardware, software, and computational breakthroughs.</p>
              </div>
              <div className="border-t-2 border-green-600 pt-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Market Intelligence</h3>
                <p className="text-sm text-gray-600">Economic reporting on mergers, acquisitions, and market-moving events.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8">
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
