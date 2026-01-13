import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pegatron Opens U.S. Factory in TX Bringing 100s of New Jobs - ObjectWire.org",
  description: "Taiwanese electronics giant Pegatron announces its inaugural U.S. manufacturing site in Georgetown, Texas, with a $35 million capital commitment.",
};

export default function PegatronFactoryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <header className="mb-12">
          <div className="text-sm text-gray-500 mb-2">Business News</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Pegatron Opens U.S. Factory in TX Bringing 100s of New Jobs
          </h1>
          <p className="text-xl text-gray-600">
            Taiwanese electronics giant expands to Georgetown with $35 million investment
          </p>
        </header>

        <article className="prose prose-lg max-w-none">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Major Manufacturing Investment
            </h2>
            <p className="text-gray-700 mb-4">
              Taiwanese electronics giant Pegatron announces its inaugural U.S. manufacturing site in 
              Georgetown, Texas, with a $35 million capital commitment. The facility represents a 
              significant expansion of the company's North American operations.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Hundreds of New Jobs
            </h2>
            <p className="text-gray-700 mb-4">
              The Georgetown facility is expected to create hundreds of high-quality manufacturing 
              jobs, bolstering Texas's position as a growing tech hub. The plant will focus on 
              electronics manufacturing and assembly operations.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Manufacturing and assembly positions</li>
              <li>• Engineering and technical roles</li>
              <li>• Supply chain and logistics jobs</li>
              <li>• Quality control and testing specialists</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Strategic Location
            </h2>
            <p className="text-gray-700">
              Georgetown's location in the rapidly growing Austin-area tech corridor makes it an 
              ideal site for Pegatron's U.S. expansion. The region offers access to skilled talent, 
              robust infrastructure, and proximity to major technology companies.
            </p>
          </div>

          <div className="bg-blue-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Texas Tech Boom
            </h2>
            <p className="text-gray-700">
              Pegatron's investment is part of a broader trend of manufacturing returning to the 
              United States, with Texas emerging as a premier destination for tech and electronics 
              manufacturing facilities.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Economic Impact
            </h2>
            <p className="text-gray-700">
              The $35 million investment and hundreds of new jobs will provide a significant 
              economic boost to Georgetown and the surrounding region, supporting local businesses 
              and infrastructure development.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
