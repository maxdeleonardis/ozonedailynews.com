import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Corrections Policy | ObjectWire",
  description: "ObjectWire is committed to accuracy. Learn about our corrections policy, how we handle errors, and how to report inaccuracies.",
  openGraph: {
    title: "Corrections Policy | ObjectWire",
    description: "Our commitment to transparency and accuracy in correcting errors.",
  },
};

export default function CorrectionsPage() {
  return (
    <article className="py-16 md:py-20">
      <div className="container-narrow max-w-3xl mx-auto px-6">
        {/* Header */}
        <header className="mb-12 pb-8 border-b border-gray-200">
          <p className="text-xs font-mono text-gray-400 mb-4 tracking-wider">EDITORIAL POLICY</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Corrections Policy</h1>
          <p className="text-gray-500">Last updated: January 2026</p>
        </header>

        {/* Content */}
        <div className="prose prose-gray max-w-none">
          <section className="mb-12">
            <h2 className="text-xl font-bold mb-4">Our Commitment to Accuracy</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              ObjectWire is committed to factual accuracy in all published content. We take errors seriously 
              and believe transparency in corrections builds trust with our readers. When we make a mistake, 
              we correct it promptly, clearly, and publicly.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our corrections policy applies to all content published on ObjectWire, including news articles, 
              analysis, opinion pieces, and investigative reports.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-bold mb-4">Types of Corrections</h2>
            
            <div className="space-y-6">
              <div className="p-5 bg-red-50 border-l-4 border-red-500">
                <h3 className="font-semibold mb-2 text-red-800">Major Corrections</h3>
                <p className="text-gray-700 text-sm">
                  Errors that significantly affect the meaning, interpretation, or accuracy of reporting. 
                  These include incorrect facts, misattributed quotes, or errors that could mislead readers 
                  on material matters. Major corrections are noted at the top of the article with a full 
                  explanation of what was wrong and what is correct.
                </p>
              </div>
              
              <div className="p-5 bg-yellow-50 border-l-4 border-yellow-500">
                <h3 className="font-semibold mb-2 text-yellow-800">Minor Corrections</h3>
                <p className="text-gray-700 text-sm">
                  Errors that do not materially affect the article's accuracy but should still be corrected. 
                  These include spelling errors, incorrect dates that don't affect the story's meaning, 
                  or minor factual clarifications. Minor corrections are noted at the bottom of the article.
                </p>
              </div>
              
              <div className="p-5 bg-blue-50 border-l-4 border-blue-500">
                <h3 className="font-semibold mb-2 text-blue-800">Clarifications</h3>
                <p className="text-gray-700 text-sm">
                  Additions that provide necessary context or clarify ambiguous language without correcting 
                  an outright error. Clarifications are noted at the bottom of the article when the original 
                  text was accurate but may have been misunderstood.
                </p>
              </div>
              
              <div className="p-5 bg-gray-50 border-l-4 border-gray-500">
                <h3 className="font-semibold mb-2 text-gray-800">Updates</h3>
                <p className="text-gray-700 text-sm">
                  New information that has emerged since publication. Updates are clearly labeled with the 
                  date and time of the update. Original content is not removed unless it was factually incorrect.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-bold mb-4">Correction Process</h2>
            <ol className="list-decimal pl-6 space-y-4 text-gray-600">
              <li>
                <strong>Report Received:</strong> When an error is reported or discovered, it is immediately 
                flagged to the editorial team.
              </li>
              <li>
                <strong>Verification:</strong> The editorial team verifies the reported error against original 
                sources and documentation.
              </li>
              <li>
                <strong>Correction Decision:</strong> If an error is confirmed, the appropriate correction 
                type is determined based on severity and impact.
              </li>
              <li>
                <strong>Implementation:</strong> The article is corrected with a clear note explaining the change.
              </li>
              <li>
                <strong>Notification:</strong> When appropriate, individuals directly affected by the error 
                are notified of the correction.
              </li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-bold mb-4">Correction Format</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              All corrections include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Date and time of the correction</li>
              <li>Clear statement of what was incorrect</li>
              <li>The corrected information</li>
              <li>When relevant, how the error occurred</li>
            </ul>
            
            <div className="mt-6 p-5 bg-gray-50 border border-gray-200 rounded">
              <p className="text-sm font-mono text-gray-500 mb-2">EXAMPLE CORRECTION FORMAT:</p>
              <p className="text-gray-700 italic">
                <strong>Correction (Jan. 14, 2026, 3:45 PM CT):</strong> An earlier version of this article 
                stated that the company's revenue was $150 million. The correct figure is $115 million. 
                We regret the error.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-bold mb-4">Report an Error</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you believe you've found an error in our reporting, we want to know. Please contact us with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
              <li>The article URL or headline</li>
              <li>The specific error you've identified</li>
              <li>Documentation or sources that support the correction</li>
              <li>Your contact information (optional, but helpful for follow-up)</li>
            </ul>
            
            <div className="p-6 bg-black text-white rounded-lg">
              <h3 className="font-bold mb-3">Contact Our Editorial Team</h3>
              <p className="mb-4 text-gray-300">
                Submit corrections or clarification requests:
              </p>
              <ul className="space-y-2">
                <li>
                  <span className="text-gray-400">Email:</span>{' '}
                  <a href="mailto:corrections@objectwire.com" className="text-blue-400 hover:underline">
                    corrections@objectwire.com
                  </a>
                </li>
                <li>
                  <span className="text-gray-400">Subject Line:</span>{' '}
                  <span className="font-mono">Correction Request: [Article Title]</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-bold mb-4">Response Time</h2>
            <p className="text-gray-600 leading-relaxed">
              We aim to acknowledge correction requests within 24 hours and implement verified corrections 
              within 48 hours. Complex corrections requiring additional verification may take longer. 
              We will keep you informed of the status if you provide contact information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-bold mb-4">Correction History</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              In the interest of transparency, significant corrections are logged below. This list includes 
              major corrections from the past 12 months.
            </p>
            
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="p-6 bg-gray-50 text-center text-gray-500">
                <p className="font-medium">No major corrections on record</p>
                <p className="text-sm mt-1">Last reviewed: January 2026</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-bold mb-4">Editorial Independence</h2>
            <p className="text-gray-600 leading-relaxed">
              Correction decisions are made solely by ObjectWire's editorial team based on factual accuracy. 
              We do not remove or alter content based on external pressure, legal threats, or commercial 
              considerations unless a genuine factual error has been identified.
            </p>
          </section>

          <section className="border-t border-gray-200 pt-8">
            <h2 className="text-xl font-bold mb-4">Related Policies</h2>
            <ul className="space-y-2">
              <li>
                <a href="/editorial-standards" className="text-blue-600 hover:underline">
                  Editorial Standards →
                </a>
              </li>
              <li>
                <a href="/team" className="text-blue-600 hover:underline">
                  Our Team →
                </a>
              </li>
              <li>
                <a href="/contact" className="text-blue-600 hover:underline">
                  Contact Us →
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
}
