import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema, OrganizationSchema } from '@/components/NewsArticleSchema';

export const metadata: Metadata = {
  title: "ObjectWire.org - Verification-First Intelligence Platform & Independent News Organization",
  description: "ObjectWire.org is a verification-first intelligence platform providing cited business and technology analysis. Learn about its mission, history, content pillars, and editorial standards.",
  alternates: {
    canonical: 'https://www.objectwire.org/objectwire',
  },
  keywords: ['ObjectWire', 'verification-first', 'intelligence platform', 'investigative journalism', 'tech news', 'business intelligence', 'fact-checking'],
};

export default function ObjectWireWikiPage() {
  const breadcrumbItems = [
    { name: 'Home', item: '/' },
    { name: 'ObjectWire', item: '/objectwire' },
  ];

  return (
    <>
      {/* SEO Schemas */}
      <NewsArticleSchema
        title="ObjectWire.org - Verification-First Intelligence Platform"
        description="ObjectWire.org is a verification-first intelligence platform providing cited business and technology analysis through rigorous fact-checking and primary source verification."
        author="ObjectWire Editorial Team"
        publishedTime="2026-02-19"
        modifiedTime="2026-02-19"
        articleUrl="https://www.objectwire.org/objectwire"
        section="Technology"
        keywords={['ObjectWire', 'verification-first', 'intelligence platform', 'investigative journalism', 'tech news']}
      />
      <OrganizationSchema />

      <div className="min-h-screen bg-white">
        {/* Breadcrumb Navigation */}
        <div className="container mx-auto px-4 pt-4 max-w-6xl">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Wikipedia-Style Header */}
        <header className="border-b border-gray-200 pb-6 mb-6">
          <div className="container mx-auto px-4 max-w-6xl">
            <h1 className="text-4xl font-serif mb-2">ObjectWire.org</h1>
            <p className="text-gray-600 italic">
              From ObjectWire, the verification-first intelligence platform
            </p>
          </div>
        </header>

        <div className="container mx-auto px-4 max-w-6xl pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content - Wikipedia Style */}
            <main className="lg:col-span-8">
              {/* Lead Paragraph */}
              <p className="text-lg leading-relaxed mb-6">
                <strong>ObjectWire.org</strong> is a <Link href="/editorial-standards" className="text-blue-600 hover:underline">verification-first</Link> intelligence platform and independent news organization that provides cited business and technology analysis. Founded with a mission to operate as a &quot;credibility engine&quot; rather than a content aggregator, ObjectWire has established itself as a trusted source for professionals, developers, analysts, and decision-makers seeking verifiable, source-cited reporting on technology, business, policy, and related developments.
              </p>

              {/* Table of Contents */}
              <nav className="bg-gray-50 border border-gray-200 p-4 mb-8 rounded-lg">
                <h2 className="font-bold text-gray-900 mb-3 border-b border-gray-300 pb-2">Contents</h2>
                <ol className="space-y-1 text-sm">
                  <li><a href="#overview" className="text-blue-600 hover:underline">1 Overview</a></li>
                  <li><a href="#history" className="text-blue-600 hover:underline">2 History and Founding</a></li>
                  <li><a href="#mission" className="text-blue-600 hover:underline">3 Mission and Editorial Standards</a></li>
                  <li><a href="#content" className="text-blue-600 hover:underline">4 Content Pillars</a></li>
                  <li><a href="#audience" className="text-blue-600 hover:underline">5 Target Audience</a></li>
                  <li><a href="#notable" className="text-blue-600 hover:underline">6 Notable Articles and Features</a></li>
                  <li><a href="#competition" className="text-blue-600 hover:underline">7 Competitive Landscape</a></li>
                  <li><a href="#reception" className="text-blue-600 hover:underline">8 Reception and Impact</a></li>
                  <li><a href="#seealso" className="text-blue-600 hover:underline">9 See Also</a></li>
                  <li><a href="#references" className="text-blue-600 hover:underline">10 References</a></li>
                </ol>
              </nav>

              {/* Overview Section */}
              <section id="overview" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Overview</h2>
                
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold w-1/3">Type</th>
                        <td className="p-3">Verification-First Intelligence Platform, Independent News Organization</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold">Founded</th>
                        <td className="p-3">2024–2025</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold">Headquarters</th>
                        <td className="p-3">Austin, Texas, United States</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold">Contact</th>
                        <td className="p-3">(575) 495-0323</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold">Website</th>
                        <td className="p-3">
                          <a href="https://www.objectwire.org" className="text-blue-600 hover:underline">objectwire.org</a>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold">Mission</th>
                        <td className="p-3">Reveal truth through transparent verification methodology and documented claims</td>
                      </tr>
                      <tr>
                        <th className="bg-gray-50 p-3 text-left font-semibold">Core Focus</th>
                        <td className="p-3">Investigative journalism, tech analysis, business intelligence</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* History Section */}
              <section id="history" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">History and Founding</h2>
                <p className="mb-4 leading-relaxed">
                  ObjectWire emerged in response to the growing demand for credible, fact-checked information in an era of information overload and misinformation. While specific founding dates and founder names remain private, the platform&apos;s operational presence in <Link href="/austin-private-detective-agency" className="text-blue-600 hover:underline">Austin, Texas</Link>, positions it within one of America&apos;s burgeoning technology corridors.
                </p>
                <p className="mb-4 leading-relaxed">
                  The platform&apos;s development coincided with the rise of large language models and AI-generated content, positioning ObjectWire as an antidote to unchecked AI-generated misinformation. By leveraging custom language models specifically trained for fact-checking and verification, ObjectWire established a unique value proposition in the digital media landscape.
                </p>
                <p className="leading-relaxed">
                  As of February 2026, ObjectWire maintains active publishing operations, with recent articles covering developments such as <Link href="/open-ai" className="text-blue-600 hover:underline">Anthropic&apos;s Claude</Link> Sonnet 4.6 launch and ongoing geopolitical events.
                </p>
              </section>

              {/* Mission Section */}
              <section id="mission" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Mission and Editorial Standards</h2>
                
                <h3 className="text-lg font-semibold mb-3">Core Mission</h3>
                <p className="mb-4 leading-relaxed">
                  ObjectWire&apos;s foundational mission centers on <strong>revealing truth through transparent verification methodology</strong>. Unlike traditional news aggregators or AI-generated content farms, ObjectWire positions itself as a &quot;credibility engine&quot; — a platform where every claim undergoes rigorous verification through primary sources before publication.
                </p>

                <h3 className="text-lg font-semibold mb-3">Verification Methodology</h3>
                <p className="mb-4 leading-relaxed">
                  The platform employs a multi-layered verification approach:
                </p>
                <ol className="list-decimal list-inside space-y-2 mb-6 ml-4">
                  <li><strong>Primary Source Verification</strong>: All claims must be traceable to original sources</li>
                  <li><strong>Pre-Publication Fact-Checking</strong>: Dedicated review process before content goes live</li>
                  <li><strong>Citation Validation</strong>: Every article includes documented sources and references</li>
                  <li><strong>Custom AI Models</strong>: Proprietary language models trained specifically for fact-checking accuracy</li>
                  <li><strong>Editorial Integrity</strong>: Maintained through transparent methodology documentation</li>
                </ol>

                <h3 className="text-lg font-semibold mb-3">API Access</h3>
                <p className="leading-relaxed">
                  ObjectWire offers programmatic access to its verified intelligence database, enabling integration into research workflows, enterprise decision-making tools, and third-party applications requiring citation-grade data.
                </p>
              </section>

              {/* Content Pillars Section */}
              <section id="content" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Content Pillars</h2>
                <p className="mb-4 leading-relaxed">
                  ObjectWire publishes verified intelligence across five primary content pillars:
                </p>

                <h3 className="text-lg font-semibold mb-2">1. Event-Driven Reporting</h3>
                <p className="mb-4 leading-relaxed">
                  Real-time analysis of major business, technology, and policy events. Notable coverage includes <Link href="/github" className="text-blue-600 hover:underline">GitHub Universe 2025</Link>: Comprehensive coverage of the annual developer conference held October 28–29, 2025, in San Francisco, exploring AI/ML innovations, DevOps advancements, security developments, and open-source sustainability.
                </p>

                <h3 className="text-lg font-semibold mb-2">2. Company Profiles and Guides</h3>
                <p className="mb-4 leading-relaxed">
                  In-depth organizational profiles featuring verified historical data, financial metrics, and strategic analysis. Notable profiles include <Link href="/youtube" className="text-blue-600 hover:underline">YouTube</Link> (founded 2005, Google acquisition for $1.65B in 2006, 2.7 billion monthly users in 2026), <Link href="/social" className="text-blue-600 hover:underline">TikTok</Link> (Musical.ly merger history, algorithm explanation), and <Link href="/video-games" className="text-blue-600 hover:underline">Nintendo</Link> (founded 1889, ~7,300 employees in 2025).
                </p>

                <h3 className="text-lg font-semibold mb-2">3. Technical Explainers</h3>
                <p className="mb-4 leading-relaxed">
                  Educational content demystifying complex technical concepts, including HTTP vs. REST API servers, and AI tool comparisons like Comet AI Browser vs. Atlas by ChatGPT.
                </p>

                <h3 className="text-lg font-semibold mb-2">4. Business and Education Intelligence</h3>
                <p className="mb-4 leading-relaxed">
                  Practical guides for professional development and organizational decision-making, including <Link href="/college" className="text-blue-600 hover:underline">non-degree studies at University of Texas at Austin</Link>, SaaS valuation tracking, and automation platform analysis.
                </p>

                <h3 className="text-lg font-semibold mb-2">5. Geopolitical and Policy Analysis</h3>
                <p className="leading-relaxed">
                  Verified reporting on international developments with business implications, including the <Link href="/news" className="text-blue-600 hover:underline">China–Japan diplomatic standoff</Link> (2026) analysis.
                </p>
              </section>

              {/* Target Audience Section */}
              <section id="audience" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Target Audience</h2>
                <p className="mb-4 leading-relaxed">
                  ObjectWire content serves a professional readership requiring verifiable data for decision-making workflows:
                </p>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-300">
                        <th className="p-3 text-left font-semibold">Segment</th>
                        <th className="p-3 text-left font-semibold">Use Cases</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-medium">Software Developers</td>
                        <td className="p-3">Technical architecture decisions, tool comparisons, conference insights</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-medium">Business Analysts</td>
                        <td className="p-3">Market intelligence, competitor analysis, investment research</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-medium">Enterprise Leaders</td>
                        <td className="p-3">Strategic planning, vendor evaluation, policy impact assessment</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-medium">Researchers</td>
                        <td className="p-3">Citation-grade sources, primary reference materials, data verification</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Investors</td>
                        <td className="p-3">SaaS valuation tracking, technology trend analysis, risk assessment</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Notable Articles Section */}
              <section id="notable" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Notable Articles and Features</h2>
                
                <h3 className="text-lg font-semibold mb-3">Recent Publications (2025–2026)</h3>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-300">
                        <th className="p-3 text-left font-semibold">Article</th>
                        <th className="p-3 text-left font-semibold">Date</th>
                        <th className="p-3 text-left font-semibold">Focus Area</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="p-3">Anthropic Claude Sonnet 4.6 Launch Analysis</td>
                        <td className="p-3">February 18, 2026</td>
                        <td className="p-3">AI model capabilities, enterprise implications</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3">GitHub Universe 2025 Preview</td>
                        <td className="p-3">October 2025</td>
                        <td className="p-3">Developer tools, AI/ML integration</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3">Comet AI Browser vs. Atlas by ChatGPT</td>
                        <td className="p-3">November 2025</td>
                        <td className="p-3">Agentic AI comparison</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3">China–Japan Diplomatic Standoff</td>
                        <td className="p-3">February 2026</td>
                        <td className="p-3">Geopolitical risk analysis</td>
                      </tr>
                      <tr>
                        <td className="p-3">TikTok Complete Guide 2026</td>
                        <td className="p-3">February 2026</td>
                        <td className="p-3">Platform mechanics, regulatory updates</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-lg font-semibold mb-3">Platform Features</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Structured Content</strong>: Hierarchical organization for rapid information retrieval</li>
                  <li><strong>Real-Time Summaries</strong>: Executive briefings for time-constrained professionals</li>
                  <li><strong>Exportable Data</strong>: Downloadable formats for integration into research workflows</li>
                  <li><strong>Citation Integration</strong>: Every claim linked to verifiable sources</li>
                </ul>
              </section>

              {/* Competition Section */}
              <section id="competition" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Competitive Landscape</h2>
                <p className="mb-4 leading-relaxed">
                  While ObjectWire does not explicitly name competitors, the platform operates within the broader verification-focused tech analysis space. Comparable platforms include:
                </p>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-300">
                        <th className="p-3 text-left font-semibold">Platform</th>
                        <th className="p-3 text-left font-semibold">Differentiation</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-medium">The Information</td>
                        <td className="p-3">Premium subscription model, exclusive tech industry reporting</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-medium">Stratechery</td>
                        <td className="p-3">Individual analyst perspective, in-depth strategy analysis</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-medium">VentureBeat</td>
                        <td className="p-3">Breaking tech news, broader coverage scope</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">ObjectWire</td>
                        <td className="p-3">Verification-first API, custom fact-checking models, citation-grade output</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-lg font-semibold mb-3">Key Differentiators</h3>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li><strong>API-First Architecture</strong>: Programmatic access to verified intelligence</li>
                  <li><strong>Custom Verification Models</strong>: Proprietary AI trained specifically for fact-checking</li>
                  <li><strong>Citation Transparency</strong>: Every claim documented with primary sources</li>
                  <li><strong>Research-Grade Output</strong>: Structured for professional workflow integration</li>
                </ol>
              </section>

              {/* Reception Section */}
              <section id="reception" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Reception and Impact</h2>
                <p className="mb-4 leading-relaxed">
                  As a relatively new entrant in the independent journalism space, ObjectWire has positioned itself at the intersection of traditional editorial standards and modern technology infrastructure. The platform&apos;s emphasis on verification methodology addresses growing concerns about AI-generated misinformation and content authenticity.
                </p>
                <p className="leading-relaxed">
                  The inclusion of API access suggests enterprise adoption, with potential integration into corporate intelligence systems, research platforms, and decision-support tools requiring high-confidence data sources.
                </p>
              </section>

              {/* See Also Section */}
              <section id="seealso" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">See Also</h2>
                <ul className="columns-2 gap-8">
                  <li><Link href="/editorial-standards" className="text-blue-600 hover:underline">Editorial Standards</Link></li>
                  <li><Link href="/about" className="text-blue-600 hover:underline">About ObjectWire</Link></li>
                  <li><Link href="/tech" className="text-blue-600 hover:underline">Technology Desk</Link></li>
                  <li><Link href="/news" className="text-blue-600 hover:underline">News Coverage</Link></li>
                  <li><Link href="/investigations" className="text-blue-600 hover:underline">Investigations</Link></li>
                  <li><Link href="/team" className="text-blue-600 hover:underline">Editorial Team</Link></li>
                </ul>
              </section>

              {/* References Section */}
              <section id="references" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">References</h2>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>&quot;About ObjectWire.&quot; <em>ObjectWire.org</em>, 2026, www.objectwire.org/about.</li>
                  <li>&quot;YouTube Wiki 2026.&quot; <em>ObjectWire.org</em>, 7 Feb. 2026, www.objectwire.org/youtube.</li>
                  <li>&quot;GitHub Universe October 28th and 29th San Francisco.&quot; <em>ObjectWire.org</em>, 28 Oct. 2025.</li>
                  <li>&quot;TikTok - Complete Guide, History & Latest News 2026.&quot; <em>ObjectWire.org</em>, 23 Jan. 2026.</li>
                  <li>&quot;Difference between HTTP and REST API servers.&quot; <em>ObjectWire.org</em>, 30 Dec. 2025.</li>
                  <li>&quot;ObjectWire | Independent Investigative Journalism & Tech News.&quot; <em>ObjectWire.org</em>, 18 Feb. 2026.</li>
                  <li>&quot;Nintendo Co., Ltd. - Gaming Company Profile.&quot; <em>ObjectWire.org</em>, 20 Aug. 2024.</li>
                  <li>&quot;Comet AI Web Browser vs Atlas by ChatGPT.&quot; <em>ObjectWire.org</em>, 14 Nov. 2025.</li>
                  <li>&quot;Non-Degree Studies at UT Austin 2026.&quot; <em>ObjectWire.org</em>, 14 Nov. 2025.</li>
                  <li>&quot;China–Japan Diplomatic Standoff (2026).&quot; <em>ObjectWire.org</em>, 9 Feb. 2026.</li>
                </ol>
              </section>
            </main>

            {/* Wikipedia-Style Info Box Sidebar */}
            <aside className="lg:col-span-4">
              <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden sticky top-4">
                <div className="bg-gray-100 p-3 border-b border-gray-200">
                  <h2 className="font-bold text-center text-gray-900">ObjectWire</h2>
                </div>
                
                <div className="p-4 space-y-4 text-sm">
                  {/* Logo Placeholder */}
                  <div className="bg-white border border-gray-200 p-4 text-center">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-2xl mb-2">
                      OW
                    </div>
                    <p className="text-xs text-gray-500">ObjectWire Logo</p>
                  </div>

                  {/* Quick Facts */}
                  <div>
                    <h3 className="font-bold text-gray-900 border-b border-gray-200 pb-1 mb-2">Quick Facts</h3>
                    <dl className="space-y-2">
                      <div>
                        <dt className="text-gray-500 text-xs">Type</dt>
                        <dd>Intelligence Platform</dd>
                      </div>
                      <div>
                        <dt className="text-gray-500 text-xs">Founded</dt>
                        <dd>2024–2025</dd>
                      </div>
                      <div>
                        <dt className="text-gray-500 text-xs">Headquarters</dt>
                        <dd>Austin, Texas, US</dd>
                      </div>
                      <div>
                        <dt className="text-gray-500 text-xs">Focus</dt>
                        <dd>Tech, Business, Policy</dd>
                      </div>
                      <div>
                        <dt className="text-gray-500 text-xs">Method</dt>
                        <dd>Verification-First</dd>
                      </div>
                    </dl>
                  </div>

                  {/* Content Pillars */}
                  <div>
                    <h3 className="font-bold text-gray-900 border-b border-gray-200 pb-1 mb-2">Content Pillars</h3>
                    <ul className="space-y-1">
                      <li>• Event-Driven Reporting</li>
                      <li>• Company Profiles</li>
                      <li>• Technical Explainers</li>
                      <li>• Business Intelligence</li>
                      <li>• Geopolitical Analysis</li>
                    </ul>
                  </div>

                  {/* Contact */}
                  <div>
                    <h3 className="font-bold text-gray-900 border-b border-gray-200 pb-1 mb-2">Contact</h3>
                    <p className="text-xs">
                      <strong>Phone:</strong> (575) 495-0323<br />
                      <strong>Location:</strong> Austin, TX 78702<br />
                      <strong>Web:</strong>{' '}
                      <a href="https://www.objectwire.org" className="text-blue-600 hover:underline">
                        objectwire.org
                      </a>
                    </p>
                  </div>

                  {/* Related Links */}
                  <div>
                    <h3 className="font-bold text-gray-900 border-b border-gray-200 pb-1 mb-2">Related</h3>
                    <ul className="space-y-1">
                      <li>
                        <Link href="/about" className="text-blue-600 hover:underline text-xs">About Page</Link>
                      </li>
                      <li>
                        <Link href="/editorial-standards" className="text-blue-600 hover:underline text-xs">Editorial Standards</Link>
                      </li>
                      <li>
                        <Link href="/tech" className="text-blue-600 hover:underline text-xs">Technology Desk</Link>
                      </li>
                      <li>
                        <Link href="/news" className="text-blue-600 hover:underline text-xs">News Coverage</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-200 bg-gray-50 py-8">
          <div className="container mx-auto px-4 max-w-6xl text-center text-sm text-gray-600">
            <p>
              This article is part of <Link href="/" className="text-blue-600 hover:underline">ObjectWire</Link>&apos;s knowledge base.
              Last updated: February 19, 2026.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
