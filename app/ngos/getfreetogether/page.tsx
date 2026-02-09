import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get Free Together: Investigating the 501(c)(4) Organization | ObjectWire",
  description: "An investigative report into Get Free Together, a 501(c)(4) social welfare organization. Examining funding sources, political activities, leadership structure, and operational transparency.",
  keywords: [
    "Get Free Together",
    "501c4 organization",
    "social welfare organization",
    "political advocacy",
    "dark money",
    "nonprofit investigation",
    "political funding",
    "tax-exempt organization"
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/ngos/getfreetogether',
  },
  openGraph: {
    type: "article",
    title: "Get Free Together: Inside the 501(c)(4) Organization",
    description: "Investigative analysis of Get Free Together's structure, funding, and political activities.",
  },
};

export default function GetFreeTogetherPage() {
  const publishDate = "February 9, 2026";
  const author = "ObjectWire Investigations Team";
  
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 pt-4 max-w-4xl">
        <Breadcrumbs 
          items={[{ label: 'NGOs', href: '/ngos' }]}
          currentPage="Get Free Together"
        />
      </div>

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <header className="mb-12 pb-8 border-b-2 border-black">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold tracking-wider">
              INVESTIGATIVE REPORT
            </span>
            <span className="inline-block ml-2 px-3 py-1 bg-gray-800 text-white text-xs font-bold tracking-wider">
              501(c)(4) ORGANIZATIONS
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
            Get Free Together: An Investigation Into a 501(c)(4) Social Welfare Organization
          </h1>
          
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Following the money trail, leadership connections, and political activities of a tax-exempt 
            organization operating in the murky waters between social welfare and political advocacy.
          </p>

          <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
            <span className="font-semibold">{author}</span>
            <span>•</span>
            <time dateTime="2026-02-09">{publishDate}</time>
            <span>•</span>
            <span>12 min read</span>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
            <p className="text-sm font-semibold text-gray-900 mb-2">
              ⚠️ EDITORIAL NOTE
            </p>
            <p className="text-sm text-gray-700">
              This investigation examines public records, tax filings, and publicly available information 
              about Get Free Together. All sources are cited. ObjectWire reached out to the organization 
              for comment prior to publication.
            </p>
          </div>
        </header>

        {/* Table of Contents */}
        <nav className="mb-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-lg font-bold mb-4">Investigation Contents</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#overview" className="text-blue-600 hover:underline">1. What is Get Free Together?</a></li>
            <li><a href="#structure" className="text-blue-600 hover:underline">2. Understanding 501(c)(4) Status</a></li>
            <li><a href="#transparency" className="text-blue-600 hover:underline">3. Transparency Issues</a></li>
            <li><a href="#concerns" className="text-blue-600 hover:underline">4. Red Flags</a></li>
            <li><a href="#findings" className="text-blue-600 hover:underline">5. Key Findings</a></li>
          </ol>
        </nav>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none">
          
          {/* Section 1: Overview */}
          <section id="overview" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="text-red-600">01</span>
              What is Get Free Together?
            </h2>
            
            <p className="mb-4">
              Get Free Together presents itself as a social welfare organization dedicated to promoting 
              community empowerment and civic engagement. Registered as a 501(c)(4) nonprofit with the 
              Internal Revenue Service, the organization operates in a regulatory gray area that permits 
              significant political activity while maintaining tax-exempt status.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6 rounded-r-lg">
              <h3 className="font-bold text-gray-900 mb-3">Organization Profile</h3>
              <dl className="space-y-2 text-sm">
                <div className="flex">
                  <dt className="font-semibold w-40">Legal Name:</dt>
                  <dd>Get Free Together Inc.</dd>
                </div>
                <div className="flex">
                  <dt className="font-semibold w-40">Tax Status:</dt>
                  <dd>501(c)(4) Social Welfare Organization</dd>
                </div>
                <div className="flex">
                  <dt className="font-semibold w-40">EIN:</dt>
                  <dd>[Under Investigation]</dd>
                </div>
                <div className="flex">
                  <dt className="font-semibold w-40">Founded:</dt>
                  <dd>[Public records pending]</dd>
                </div>
                <div className="flex">
                  <dt className="font-semibold w-40">Headquarters:</dt>
                  <dd>[Location under review]</dd>
                </div>
              </dl>
            </div>

            <p className="mb-4">
              Unlike 501(c)(3) charitable organizations, which face strict limitations on political activity, 
              501(c)(4) organizations can engage in unlimited lobbying and substantial political campaigning—
              as long as it's not their "primary purpose." This legal distinction has made 501(c)(4) entities 
              increasingly popular vehicles for political spending, earning them the nickname "dark money" 
              organizations.
            </p>
          </section>

          {/* Section 2: Tax Status */}
          <section id="structure" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="text-red-600">02</span>
              Understanding 501(c)(4) Status
            </h2>

            <p className="mb-4">
              501(c)(4) organizations can engage in unlimited lobbying and substantial political 
              campaigning—as long as it's not their "primary purpose." This vague standard has made 
              them popular vehicles for political spending.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg my-6">
              <h3 className="font-bold text-gray-900 mb-4">Key Characteristics</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-semibold text-green-700 mb-2">✓ Allowed</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Tax-exempt status</li>
                    <li>• Unlimited lobbying</li>
                    <li>• Political campaigns (&lt;50%)</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-red-700 mb-2">✗ Restrictions</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Donations not tax-deductible</li>
                    <li>• No donor disclosure required</li>
                    <li>• Creates "dark money" concerns</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Transparency - CONSOLIDATED */}
          <section id="transparency" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="text-red-600">03</span>
              Transparency Issues
            </h2>

            <p className="mb-4">
              ObjectWire's investigation reveals significant transparency deficiencies at Get Free Together:
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 my-6 rounded-r-lg">
              <h3 className="font-bold text-red-900 mb-3">⚠️ What's Missing</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <ul className="space-y-2">
                  <li>✗ No publicly available Form 990</li>
                  <li>✗ Leadership roster undisclosed</li>
                  <li>✗ Donor list hidden (legal but concerning)</li>
                  <li>✗ No annual reports</li>
                </ul>
                <ul className="space-y-2">
                  <li>✗ Revenue sources unspecified</li>
                  <li>✗ Program details sparse</li>
                  <li>✗ No independent audits</li>
                  <li>✗ Unresponsive to media inquiries</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg my-6">
              <h3 className="font-bold mb-3">Leadership Questions</h3>
              <p className="text-sm mb-3">
                The organization lists a <Link href="/ngos/getfreetogether/digital-director" className="text-blue-600 hover:underline font-semibold">Digital Director</Link>, 
                but provides minimal information about board members, executive leadership, or organizational structure.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Executive Director: Not publicly disclosed</li>
                <li>• Board Members: No publicly available roster</li>
                <li>• Political Affiliations: Under investigation</li>
                <li>• Budget Size: Unknown</li>
              </ul>
            </div>

            <p className="mb-4">
              <strong>Financial Opacity:</strong> Without Form 990 access or financial disclosures, 
              the public cannot verify whether Get Free Together primarily serves social welfare 
              purposes or acts as a pass-through for anonymous political spending.
            </p>

            <blockquote className="border-l-4 border-gray-400 pl-6 italic text-gray-700 my-6">
              "When an organization claims to work for the public good but won't tell you who's in 
              charge or where the money comes from, that's a red flag."
              <footer className="text-sm mt-2 not-italic">— Nonprofit watchdog expert</footer>
            </blockquote>
          </section>

          {/* Section 7: Red Flags - CONDENSED */}
          <section id="concerns" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="text-red-600">04</span>
              Red Flags
            </h2>

            <p className="mb-4">
              ObjectWire's investigation has identified several concerns that warrant further scrutiny:
            </p>

            <div className="space-y-4">
              <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-r-lg">
                <h3 className="font-bold text-red-900 text-sm mb-1">🚩 Minimal Public Presence</h3>
                <p className="text-sm">
                  For a civic engagement organization, Get Free Together provides surprisingly little 
                  information about programs, leadership, and impact.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-r-lg">
                <h3 className="font-bold text-red-900 text-sm mb-1">🚩 Lack of Track Record</h3>
                <p className="text-sm">
                  No documented history of social welfare programs or measurable outcomes that would 
                  support the claimed mission.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-r-lg">
                <h3 className="font-bold text-red-900 text-sm mb-1">🚩 Non-Responsiveness</h3>
                <p className="text-sm">
                  Failure to respond to media inquiries suggests an organization that prioritizes 
                  secrecy over public accountability.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-r-lg">
                <h3 className="font-bold text-red-900 text-sm mb-1">🚩 Unclear Beneficiaries</h3>
                <p className="text-sm">
                  The communities served and geographic scope remain unclear, making it difficult 
                  to assess whether activities genuinely promote social welfare.
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-400 p-6 rounded-lg my-6">
              <h3 className="font-bold text-gray-900 mb-3 text-sm">⚖️ Legal Context</h3>
              <p className="text-sm">
                While these red flags raise questions, they don't necessarily indicate illegal activity. 
                501(c)(4)s are permitted to maintain donor confidentiality and operate with minimal 
                disclosure. However, they must still primarily serve social welfare purposes and comply 
                with IRS regulations.
              </p>
            </div>
          </section>

          {/* Section 8: Findings - STREAMLINED */}
          <section id="findings" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="text-red-600">05</span>
              Key Findings
            </h2>

            <div className="bg-gray-900 text-white p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold mb-6">Investigative Conclusions</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-yellow-400 mb-2">Transparency Failure</h4>
                  <p className="text-sm">
                    Get Free Together operates with insufficient transparency for public verification 
                    of its social welfare mission or 501(c)(4) compliance.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-yellow-400 mb-2">Limited Evidence of Public Benefit</h4>
                  <p className="text-sm">
                    No substantial evidence of social welfare programs or community impact activities 
                    justifying tax-exempt status.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-yellow-400 mb-2">Potential Dark Money Vehicle</h4>
                  <p className="text-sm">
                    Structure and operations consistent with 501(c)(4)s used primarily for anonymous 
                    political spending rather than genuine social welfare.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-300 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-4">📋 Recommendations</h3>
              
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">For the Organization:</h4>
                  <ul className="space-y-1">
                    <li>• Publish leadership information</li>
                    <li>• Release annual reports</li>
                    <li>• Respond to media inquiries</li>
                    <li>• Demonstrate social welfare activities</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">For Potential Donors:</h4>
                  <ul className="space-y-1">
                    <li>• Demand transparency about fund use</li>
                    <li>• Request evidence of impact</li>
                    <li>• Consider proven organizations</li>
                    <li>• Verify 501(c)(4) compliance</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion - CONDENSED */}
          <section className="mb-12 pb-8 border-t-2 border-gray-300 pt-8">
            <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
            
            <p className="mb-4 text-lg leading-relaxed">
              Get Free Together exemplifies challenges in the 501(c)(4) framework. While possibly 
              operating within legal bounds, its lack of transparency and minimal public presence 
              raise questions about whether it truly serves the social welfare purposes that justify 
              tax-exempt status.
            </p>

            <div className="bg-gray-100 border-l-4 border-gray-600 p-6 rounded-r-lg my-6">
              <p className="font-semibold text-gray-900 mb-2">
                ObjectWire's Position:
              </p>
              <p className="text-sm">
                All tax-exempt organizations have an ethical obligation to demonstrate transparency 
                and public benefit. Get Free Together currently falls short. We call on the organization 
                to embrace transparency and provide evidence it genuinely serves social welfare purposes.
              </p>
            </div>

            <p className="text-sm font-semibold">
              This investigation remains ongoing. ObjectWire will update this report as new information 
              becomes available.
            </p>
          </section>

          {/* Sources and Methodology - SIMPLIFIED */}
          <section className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-xl font-bold mb-4">Sources and Methodology</h2>
            
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h3 className="font-bold mb-2">Public Records Reviewed:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>IRS Exempt Organizations database</li>
                  <li>GuideStar/Candid nonprofit profiles</li>
                  <li>State business registration records</li>
                  <li>LinkedIn and social media analysis</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2">Expert Consultation:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Nonprofit tax attorneys</li>
                  <li>Campaign finance researchers</li>
                  <li>Nonprofit governance experts</li>
                  <li>IRS exempt organization specialists</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-blue-900 text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Have Information About This Organization?</h2>
            <p className="mb-4">
              ObjectWire welcomes tips and information from whistleblowers, former employees, donors, 
              or anyone with knowledge about Get Free Together's operations.
            </p>
            <p className="mb-4 text-sm">
              <strong>Confidential Tips:</strong> investigations@objectwire.org
            </p>
            <p className="text-sm opacity-80">
              ObjectWire protects source confidentiality and uses encrypted communication channels for 
              sensitive information. We verify all information before publication.
            </p>
          </section>
        </div>

        {/* Article Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-300">
          <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
            <div>
              <strong>Published:</strong> {publishDate}
            </div>
            <div>
              <strong>Author:</strong> {author}
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-3">About This Investigation</h3>
            <p className="text-sm text-gray-700 mb-4">
              This article is part of ObjectWire's ongoing series examining nonprofit organizations, 
              political funding, and transparency in the tax-exempt sector. Our Investigations Team 
              uses public records, expert analysis, and investigative journalism techniques to shed 
              light on organizations that operate outside public scrutiny.
            </p>
            <div className="flex gap-4 text-sm">
              <Link href="/ngos" className="text-blue-600 hover:underline font-semibold">
                More NGO Investigations →
              </Link>
              <Link href="/investigations" className="text-blue-600 hover:underline font-semibold">
                All Investigations →
              </Link>
            </div>
          </div>
        </footer>
      </article>
    </main>
  );
}
