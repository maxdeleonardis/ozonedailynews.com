export default function PrivateInvestigatorsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <h1 className="text-5xl font-bold mb-8">Private Investigators</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Data-driven investigative research services leveraging open-source intelligence and advanced analytics.
          </p>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Intelligence Terminal Approach</h2>
            <p className="text-gray-700 leading-relaxed">
              Modern investigation combines traditional research methods with advanced data analysis, 
              open-source intelligence (OSINT), and structured information discovery. Our approach leverages 
              technology to uncover insights from publicly available data sources.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Research Capabilities</h2>
            <ul className="space-y-3 text-gray-700">
              <li>Corporate background research and due diligence</li>
              <li>Open-source intelligence (OSINT) gathering and analysis</li>
              <li>Public records research and verification</li>
              <li>Digital footprint analysis and mapping</li>
              <li>Regulatory compliance and risk assessment</li>
              <li>Market and competitive intelligence</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We utilize structured data collection, verification protocols, and analytical frameworks 
              to deliver accurate, actionable intelligence. All research is conducted within legal and 
              ethical boundaries using publicly available information sources.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <p className="text-gray-700 leading-relaxed">
              For confidential investigative research inquiries:
            </p>
            <p className="mt-4">
              <a href="mailto:research@objectwire.org" className="text-blue-600 hover:underline font-semibold">
                research@objectwire.org
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
