import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "NGO Investigations | ObjectWire",
  description: "Investigative journalism covering nonprofit organizations, 501(c) entities, charitable foundations, and NGO accountability. Following the money and examining transparency.",
  keywords: [
    "NGO investigations",
    "nonprofit accountability",
    "501c3 organizations",
    "501c4 organizations",
    "charity watchdog",
    "foundation transparency",
    "nonprofit journalism"
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/ngos',
  },
  openGraph: {
    type: "website",
    title: "NGO & Nonprofit Investigations",
    description: "Investigative reporting on nonprofit organizations, foundations, and tax-exempt entities.",
  },
};

export default function NGOsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 pt-4 max-w-6xl">
        <Breadcrumbs currentPage="NGOs" />
      </div>

      {/* Header */}
      <header className="border-b-4 border-double border-black">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="text-center">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-red-600 text-white text-sm font-bold tracking-wider">
                INVESTIGATIVE JOURNALISM
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-6">
              NGO Investigations
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Examining nonprofit organizations, charitable foundations, and tax-exempt entities. 
              Following the money, verifying claims, and holding NGOs accountable to their missions 
              and the public trust.
            </p>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Mission Statement */}
        <section className="mb-16 pb-12 border-b-2 border-gray-300">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The nonprofit sector plays a vital role in society, but tax-exempt status comes with 
              an obligation to serve the public interest. ObjectWire's NGO Investigations team examines 
              how charitable organizations, foundations, and advocacy groups use their resources, 
              maintain transparency, and fulfill their stated missions.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We investigate funding sources, leadership connections, program effectiveness, and financial 
              accountability. Our reporting aims to empower donors, inform policymakers, and ensure that 
              organizations claiming to serve the public good actually do so.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mt-6">
              <p className="font-semibold text-gray-900 mb-2">Our Standards:</p>
              <ul className="space-y-2 text-sm">
                <li>✓ Source-verified information from public records</li>
                <li>✓ Contact organizations for comment before publication</li>
                <li>✓ Expert consultation on nonprofit law and governance</li>
                <li>✓ Corrections policy for any errors</li>
                <li>✓ Transparent methodology in all investigations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Featured Investigation */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1 bg-black text-white text-xs font-bold tracking-wider">
              FEATURED INVESTIGATION
            </span>
          </div>
          
          <article className="bg-gray-50 border-2 border-black p-8 max-w-4xl mx-auto hover:shadow-xl transition-shadow">
            <Link href="/ngos/getfreetogether">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold tracking-wider mr-2">
                  501(c)(4)
                </span>
                <span className="inline-block px-3 py-1 bg-gray-800 text-white text-xs font-bold tracking-wider">
                  DARK MONEY
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4 hover:text-gray-700 transition-colors">
                Get Free Together: Inside a 501(c)(4) Social Welfare Organization
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                An investigation into a tax-exempt organization operating in the gray area between 
                social welfare and political advocacy. Following the money trail, examining leadership 
                connections, and analyzing transparency failures.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span>ObjectWire Investigations</span>
                <span>•</span>
                <span>February 9, 2026</span>
                <span>•</span>
                <span>12 min read</span>
              </div>
              <div className="mt-6">
                <span className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline">
                  Read Full Investigation 
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          </article>
        </section>

        {/* Investigation Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-8 text-center">Investigation Focus Areas</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border-2 border-black p-6 hover:bg-gray-50 transition-colors">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-xl font-bold mb-3">Financial Transparency</h3>
              <p className="text-sm text-gray-700">
                Examining how nonprofits spend donor money, executive compensation, overhead costs, 
                and financial accountability measures.
              </p>
            </div>

            <div className="border-2 border-black p-6 hover:bg-gray-50 transition-colors">
              <div className="text-3xl mb-3">🏛️</div>
              <h3 className="text-xl font-bold mb-3">501(c) Tax Status</h3>
              <p className="text-sm text-gray-700">
                Investigating whether organizations comply with tax-exempt requirements, including 
                501(c)(3), 501(c)(4), and 501(c)(6) entities.
              </p>
            </div>

            <div className="border-2 border-black p-6 hover:bg-gray-50 transition-colors">
              <div className="text-3xl mb-3">🎭</div>
              <h3 className="text-xl font-bold mb-3">Dark Money Networks</h3>
              <p className="text-sm text-gray-700">
                Tracing connections between nonprofits, PACs, and political campaigns. Following 
                anonymous donations and pass-through funding.
              </p>
            </div>

            <div className="border-2 border-black p-6 hover:bg-gray-50 transition-colors">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="text-xl font-bold mb-3">Leadership & Governance</h3>
              <p className="text-sm text-gray-700">
                Examining board composition, conflicts of interest, self-dealing, and governance 
                failures at nonprofit organizations.
              </p>
            </div>

            <div className="border-2 border-black p-6 hover:bg-gray-50 transition-colors">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-xl font-bold mb-3">Program Effectiveness</h3>
              <p className="text-sm text-gray-700">
                Verifying whether charities deliver on their promises. Measuring actual impact 
                versus marketing claims.
              </p>
            </div>

            <div className="border-2 border-black p-6 hover:bg-gray-50 transition-colors">
              <div className="text-3xl mb-3">🔍</div>
              <h3 className="text-xl font-bold mb-3">Fraud & Abuse</h3>
              <p className="text-sm text-gray-700">
                Investigating charity scams, embezzlement, misuse of funds, and criminal activity 
                within the nonprofit sector.
              </p>
            </div>
          </div>
        </section>

        {/* Understanding Nonprofits */}
        <section className="mb-16 bg-blue-50 -mx-4 px-4 py-12 md:-mx-8 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black mb-8 text-center">Understanding Nonprofit Categories</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-bold mb-3">501(c)(3) - Charitable Organizations</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Religious, educational, charitable, scientific, and literary organizations. 
                  Donations are tax-deductible. <strong>Cannot</strong> engage in political campaigns. 
                  Limited lobbying permitted.
                </p>
                <p className="text-xs text-gray-600">
                  <strong>Examples:</strong> Red Cross, United Way, universities, religious institutions
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-bold mb-3">501(c)(4) - Social Welfare Organizations</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Civic leagues and social welfare organizations. Donations <strong>not</strong> tax-deductible. 
                  Can engage in unlimited lobbying and political campaigns (if not primary purpose). 
                  <strong>Not required to disclose donors.</strong>
                </p>
                <p className="text-xs text-gray-600">
                  <strong>Examples:</strong> AARP, Sierra Club, NRA, many "dark money" groups
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-bold mb-3">501(c)(5) - Labor Organizations</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Labor unions and agricultural organizations. Focus on improving working conditions 
                  and member benefits.
                </p>
                <p className="text-xs text-gray-600">
                  <strong>Examples:</strong> AFL-CIO, Teamsters, United Auto Workers
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-bold mb-3">501(c)(6) - Business Leagues</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Chambers of commerce, trade associations, professional associations. Promote 
                  common business interests of members.
                </p>
                <p className="text-xs text-gray-600">
                  <strong>Examples:</strong> U.S. Chamber of Commerce, National Association of Realtors
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black mb-8 text-center">Research Resources</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-300 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">For Investigators</h3>
                <ul className="space-y-2 text-sm">
                  <li>• <a href="https://www.irs.gov/charities-non-profits/tax-exempt-organization-search" target="_blank" rel="noopener" className="text-blue-600 hover:underline">IRS Tax Exempt Organization Search</a></li>
                  <li>• <a href="https://www.guidestar.org" target="_blank" rel="noopener" className="text-blue-600 hover:underline">GuideStar (Candid)</a></li>
                  <li>• <a href="https://www.charitynavigator.org" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Charity Navigator</a></li>
                  <li>• <a href="https://www.charitywatch.org" target="_blank" rel="noopener" className="text-blue-600 hover:underline">CharityWatch</a></li>
                  <li>• <a href="https://www.fec.gov" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Federal Election Commission</a></li>
                </ul>
              </div>

              <div className="border border-gray-300 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">For Donors</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Always review Form 990 before donating</li>
                  <li>• Check charity ratings on multiple platforms</li>
                  <li>• Verify program expenses vs. overhead</li>
                  <li>• Research leadership backgrounds</li>
                  <li>• Ask for impact reports and audits</li>
                  <li>• Be wary of high-pressure tactics</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-gray-900 text-white p-8 rounded-lg max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Tips and Information</h2>
          <p className="mb-4">
            Have information about a nonprofit organization that warrants investigation? 
            ObjectWire protects source confidentiality and follows rigorous verification standards.
          </p>
          <div className="space-y-2 text-sm">
            <p><strong>Confidential Tips:</strong> investigations@objectwire.org</p>
            <p><strong>Encrypted Contact:</strong> Available upon request</p>
            <p className="text-xs opacity-75 mt-4">
              We investigate all credible tips and verify information through public records, 
              expert consultation, and direct source confirmation before publication.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
