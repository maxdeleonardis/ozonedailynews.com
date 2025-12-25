export default function AustinWebMarketPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <h1 className="text-5xl font-bold mb-8">Austin Web Market</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Real-time market intelligence and analysis for Austin's technology and business ecosystem.
          </p>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Market Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              Track Austin's emerging technology sectors, startup ecosystem, and business development opportunities. 
              Our market intelligence platform provides structured data and analysis on Austin's rapid economic growth.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Services Include</h2>
            <ul className="space-y-3 text-gray-700">
              <li>Technology sector analysis and trend identification</li>
              <li>Startup ecosystem mapping and venture activity tracking</li>
              <li>Real estate and commercial development intelligence</li>
              <li>Regulatory and policy impact assessments</li>
              <li>Economic indicators and market forecasting</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <p className="text-gray-700 leading-relaxed">
              For market intelligence inquiries and custom research requests:
            </p>
            <p className="mt-4">
              <a href="mailto:market@objectwire.org" className="text-blue-600 hover:underline font-semibold">
                market@objectwire.org
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
