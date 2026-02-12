import type { Metadata } from "next";
import Link from "next/link";
import ServiceInterlinks from "@/components/ServiceInterlinks";

export const metadata: Metadata = {
  title: "Press Release Writing & Distribution Services | Austin TX - ObjectWire",
  description: "Professional press release writing, distribution, and media relations services in Austin, Texas. Get your news featured in major outlets with expert PR writing and strategic distribution.",
  keywords: ["press release Austin", "PR writing Texas", "press release distribution", "media relations Austin", "Austin PR services"],
  alternates: {
    canonical: 'https://www.objectwire.org/service/press-release',
  },
};

export default function PRBrandingPressReleasePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.1),transparent_70%)]" />
        <div className="container mx-auto px-4 py-20 max-w-6xl relative">
          <nav className="text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/service" className="hover:text-white transition-colors">Services</Link>
            <span className="mx-2">/</span>
            <Link href="/service/pr-branding" className="hover:text-white transition-colors">PR & Branding</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Press Release</span>
          </nav>
          
          <header className="mb-12">
            <p className="text-blue-400 text-sm font-mono tracking-wider mb-4">STRATEGIC COMMUNICATIONS</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Press Release Writing<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                & Distribution
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Get your news featured in major media outlets with professionally written press releases 
              that capture attention and drive results.
            </p>
          </header>

          <div className="flex flex-wrap gap-4">
            <Link 
              href="/get-help" 
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Request Quote
            </Link>
            <Link 
              href="#portfolio" 
              className="px-6 py-3 border border-gray-600 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              View Samples
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        
        {/* Why Press Releases Matter */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 md:p-12 border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-6">Why Press Releases Still Matter</h2>
            <p className="text-gray-300 text-lg mb-8">
              In an era of social media and instant communication, press releases remain a cornerstone 
              of professional PR strategy. They establish credibility, improve SEO, and get your news 
              in front of journalists, investors, and decision-makers.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📰</span>
                </div>
                <h3 className="font-semibold text-white mb-2">Media Coverage</h3>
                <p className="text-sm text-gray-400">Get picked up by news outlets and journalists</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🔍</span>
                </div>
                <h3 className="font-semibold text-white mb-2">SEO Benefits</h3>
                <p className="text-sm text-gray-400">Boost search rankings with authoritative backlinks</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="font-semibold text-white mb-2">Credibility</h3>
                <p className="text-sm text-gray-400">Establish authority in your industry</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📈</span>
                </div>
                <h3 className="font-semibold text-white mb-2">Investor Relations</h3>
                <p className="text-sm text-gray-400">Keep stakeholders informed and engaged</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-10">Our Press Release Services</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Writing */}
            <div className="bg-slate-800/50 rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">✍️</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Press Release Writing</h3>
                  <p className="text-gray-400">
                    Professional, journalism-grade press releases that follow AP Style and capture media attention.
                  </p>
                </div>
              </div>
              
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span><strong>Product Launches:</strong> Announce new products/services with impact</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span><strong>Company Milestones:</strong> Funding, partnerships, acquisitions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span><strong>Executive Appointments:</strong> Leadership changes and promotions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span><strong>Industry Commentary:</strong> Thought leadership on current events</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span><strong>Crisis Communications:</strong> Strategic messaging during challenges</span>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-400 mb-3">Starting at <span className="text-white font-bold text-lg">$300</span> per release</p>
                <Link href="/get-help" className="text-blue-400 hover:text-blue-300 font-medium">
                  Get Started →
                </Link>
              </div>
            </div>

            {/* Distribution */}
            <div className="bg-slate-800/50 rounded-xl p-8 border border-gray-700 hover:border-green-500 transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-green-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">📡</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Press Release Distribution</h3>
                  <p className="text-gray-400">
                    Strategic distribution to targeted media outlets, journalists, and news wires.
                  </p>
                </div>
              </div>
              
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span><strong>News Wire Services:</strong> AP, Reuters, Bloomberg Terminal</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span><strong>Journalist Database:</strong> Direct outreach to relevant reporters</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span><strong>Industry Publications:</strong> Tech, finance, healthcare, etc.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span><strong>Regional Media:</strong> Austin, Texas, and regional coverage</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span><strong>Online Platforms:</strong> Google News, Yahoo Finance, etc.</span>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-400 mb-3">Starting at <span className="text-white font-bold text-lg">$500</span> per campaign</p>
                <Link href="/get-help" className="text-green-400 hover:text-green-300 font-medium">
                  Get Started →
                </Link>
              </div>
            </div>

            {/* Media Relations */}
            <div className="bg-slate-800/50 rounded-xl p-8 border border-gray-700 hover:border-purple-500 transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-purple-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">🤝</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Media Relations</h3>
                  <p className="text-gray-400">
                    Build relationships with journalists and secure ongoing media coverage.
                  </p>
                </div>
              </div>
              
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span><strong>Media Pitch Development:</strong> Compelling story angles</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span><strong>Journalist Outreach:</strong> Personal relationship building</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span><strong>Interview Preparation:</strong> Media training for executives</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span><strong>Follow-Up Strategy:</strong> Maximize coverage opportunities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span><strong>Media Monitoring:</strong> Track mentions and coverage</span>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-400 mb-3">Monthly retainer from <span className="text-white font-bold text-lg">$2,000</span>/mo</p>
                <Link href="/get-help" className="text-purple-400 hover:text-purple-300 font-medium">
                  Get Started →
                </Link>
              </div>
            </div>

            {/* Full Campaign */}
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl p-8 border border-blue-500">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-orange-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Full PR Campaign</h3>
                  <p className="text-gray-400">
                    Comprehensive PR strategy including writing, distribution, and media relations.
                  </p>
                </div>
              </div>
              
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">✓</span>
                  <span><strong>Strategic Planning:</strong> Comprehensive PR roadmap</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">✓</span>
                  <span><strong>Multiple Releases:</strong> Ongoing press release cadence</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">✓</span>
                  <span><strong>Media Kit Development:</strong> Company backgrounders, bios</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">✓</span>
                  <span><strong>Crisis Management:</strong> 24/7 rapid response capability</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">✓</span>
                  <span><strong>Analytics & Reporting:</strong> Monthly performance reports</span>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-gray-600">
                <p className="text-sm text-gray-400 mb-3">Custom pricing from <span className="text-white font-bold text-lg">$5,000</span>/campaign</p>
                <Link href="/get-help" className="text-orange-400 hover:text-orange-300 font-medium">
                  Get Started →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Press Release Types */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-10">Press Release Types We Write</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-lg p-6 border border-gray-700">
              <h3 className="font-bold text-white mb-3">📱 Product Launch</h3>
              <p className="text-sm text-gray-400 mb-3">
                Announce new products, features, or services with compelling narratives that highlight 
                unique value propositions.
              </p>
              <p className="text-xs text-gray-500">Perfect for: Tech companies, SaaS, consumer products</p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-gray-700">
              <h3 className="font-bold text-white mb-3">💰 Funding Announcements</h3>
              <p className="text-sm text-gray-400 mb-3">
                Share Series A/B/C rounds, venture capital investments, and financial milestones with 
                investor and media audiences.
              </p>
              <p className="text-xs text-gray-500">Perfect for: Startups, growth-stage companies</p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-gray-700">
              <h3 className="font-bold text-white mb-3">🤝 Partnership Announcements</h3>
              <p className="text-sm text-gray-400 mb-3">
                Highlight strategic partnerships, collaborations, and alliances that demonstrate 
                business growth and credibility.
              </p>
              <p className="text-xs text-gray-500">Perfect for: B2B companies, enterprise tech</p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-gray-700">
              <h3 className="font-bold text-white mb-3">👔 Executive Appointments</h3>
              <p className="text-sm text-gray-400 mb-3">
                Announce new hires, promotions, and board appointments with professional bios and 
                strategic context.
              </p>
              <p className="text-xs text-gray-500">Perfect for: All organizations, C-suite changes</p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-gray-700">
              <h3 className="font-bold text-white mb-3">🏆 Awards & Recognition</h3>
              <p className="text-sm text-gray-400 mb-3">
                Celebrate industry awards, certifications, and accolades that build brand authority 
                and trust.
              </p>
              <p className="text-xs text-gray-500">Perfect for: Service businesses, agencies</p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-gray-700">
              <h3 className="font-bold text-white mb-3">📊 Research & Reports</h3>
              <p className="text-sm text-gray-400 mb-3">
                Share original research, survey results, and industry reports that position your 
                company as a thought leader.
              </p>
              <p className="text-xs text-gray-500">Perfect for: Research firms, consultancies</p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-gray-700">
              <h3 className="font-bold text-white mb-3">🎉 Event Announcements</h3>
              <p className="text-sm text-gray-400 mb-3">
                Promote conferences, webinars, product demos, and company events to drive attendance 
                and awareness.
              </p>
              <p className="text-xs text-gray-500">Perfect for: Event organizers, speakers</p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-gray-700">
              <h3 className="font-bold text-white mb-3">🌟 Rebranding</h3>
              <p className="text-sm text-gray-400 mb-3">
                Announce company name changes, logo updates, and brand refreshes with strategic 
                messaging.
              </p>
              <p className="text-xs text-gray-500">Perfect for: Established companies evolving</p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-gray-700">
              <h3 className="font-bold text-white mb-3">⚠️ Crisis Response</h3>
              <p className="text-sm text-gray-400 mb-3">
                Professional crisis communications that address issues head-on while protecting 
                reputation.
              </p>
              <p className="text-xs text-gray-500">Perfect for: Emergency situations, controversies</p>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-10">Our Process</h2>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 hidden md:block" />
            
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex gap-6 relative">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 border-4 border-gray-900">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <div className="flex-1 bg-slate-800/50 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-3">Discovery & Strategy</h3>
                  <p className="text-gray-400">
                    We start with a consultation to understand your news, target audience, goals, and 
                    key messaging. We identify the best angle and distribution strategy.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6 relative">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 border-4 border-gray-900">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <div className="flex-1 bg-slate-800/50 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-3">Writing & Development</h3>
                  <p className="text-gray-400">
                    Our experienced journalists craft your press release following AP Style guidelines, 
                    incorporating quotes, data, and compelling narrative structure.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6 relative">
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 border-4 border-gray-900">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <div className="flex-1 bg-slate-800/50 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-3">Review & Approval</h3>
                  <p className="text-gray-400">
                    You review the draft and provide feedback. We make revisions until the press release 
                    perfectly captures your message and meets your approval.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-6 relative">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 border-4 border-gray-900">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <div className="flex-1 bg-slate-800/50 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-3">Distribution & Outreach</h3>
                  <p className="text-gray-400">
                    We distribute your press release to targeted media outlets, news wires, and journalists. 
                    We conduct follow-up outreach to maximize pickup.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex gap-6 relative">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 border-4 border-gray-900">
                  <span className="text-white font-bold text-xl">5</span>
                </div>
                <div className="flex-1 bg-slate-800/50 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-3">Tracking & Reporting</h3>
                  <p className="text-gray-400">
                    We monitor media pickup, track coverage, and provide a comprehensive report showing 
                    where your news appeared and the reach achieved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-10">Why Choose ObjectWire</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Journalism Background</h3>
              <p className="text-gray-300 mb-4">
                Our team includes former journalists who understand what makes a story newsworthy 
                and how to craft messaging that resonates with media professionals.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• AP Style compliant writing</li>
                <li>• Understanding of editorial calendars</li>
                <li>• Experience working with major outlets</li>
                <li>• News judgment and story angle expertise</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Austin-Based Expertise</h3>
              <p className="text-gray-300 mb-4">
                We're deeply connected to Austin's tech, startup, and business communities. We know 
                the local media landscape and have relationships with key journalists.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Austin Business Journal connections</li>
                <li>• Austin American-Statesman relationships</li>
                <li>• Tech startup ecosystem knowledge</li>
                <li>• Local event and conference network</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">SEO-Optimized Content</h3>
              <p className="text-gray-300 mb-4">
                Every press release is optimized for search engines with strategic keyword placement, 
                proper heading structure, and link building opportunities.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Keyword research and integration</li>
                <li>• Meta description optimization</li>
                <li>• Backlink strategy implementation</li>
                <li>• Google News indexing focus</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Proven Results</h3>
              <p className="text-gray-300 mb-4">
                We've secured coverage for clients in TechCrunch, Forbes, Bloomberg, and other top-tier 
                publications, driving measurable results for our clients.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Tier 1 publication placements</li>
                <li>• Measurable traffic and lead generation</li>
                <li>• Investor and customer acquisition support</li>
                <li>• Brand authority building</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16 px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl border border-gray-700">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Your News Out There?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your PR goals and create a press release strategy that drives real results. 
            Free consultation for new clients.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/get-help" 
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-lg"
            >
              Start Your Campaign
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-4 border-2 border-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors text-lg"
            >
              Schedule Consultation
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-white mb-10">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-bold text-white mb-3">How long does it take to write a press release?</h3>
              <p className="text-gray-400">
                Typically 3-5 business days from initial consultation to final approval. Rush orders 
                available for an additional fee (24-48 hour turnaround).
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-bold text-white mb-3">Do you guarantee media pickup?</h3>
              <p className="text-gray-400">
                While we can't guarantee specific placements (no one can), we have a strong track record 
                of securing coverage. We use proven distribution channels and journalist relationships 
                to maximize visibility.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-bold text-white mb-3">What distribution services do you use?</h3>
              <p className="text-gray-400">
                We partner with major wire services (PR Newswire, Business Wire) and have direct 
                relationships with journalists at key publications. Distribution strategy is customized 
                based on your goals and budget.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-bold text-white mb-3">Can you help with crisis communications?</h3>
              <p className="text-gray-400">
                Yes. We offer 24/7 crisis PR services including rapid response press releases, media 
                monitoring, spokesperson training, and strategic reputation management.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-bold text-white mb-3">Do you offer ongoing PR retainers?</h3>
              <p className="text-gray-400">
                Yes. Monthly retainers start at $2,000/month and include regular press releases, media 
                relations, journalist outreach, and strategic PR counsel.
              </p>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold text-white mb-8">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link 
              href="/service/pr-branding" 
              className="bg-slate-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all"
            >
              <h3 className="font-semibold text-white mb-2">PR & Branding Services</h3>
              <p className="text-sm text-gray-400">Full-service public relations and brand strategy</p>
            </Link>
            <Link 
              href="/service/conan-d" 
              className="bg-slate-800/50 rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-all"
            >
              <h3 className="font-semibold text-white mb-2">Content Writing</h3>
              <p className="text-sm text-gray-400">Professional content creation and copywriting</p>
            </Link>
            <Link 
              href="/blog" 
              className="bg-slate-800/50 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all"
            >
              <h3 className="font-semibold text-white mb-2">View Our Blog</h3>
              <p className="text-sm text-gray-400">PR tips, news, and industry insights</p>
            </Link>
          </div>
        </section>

        {/* Service Interlinks */}
        <section className="bg-white rounded-xl p-8 mt-16">
          <ServiceInterlinks currentPath="/service/press-release" />
        </section>
      </div>
    </main>
  );
}
