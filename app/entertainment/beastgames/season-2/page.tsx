import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beast Games Season 2 - Latest News & Updates | ObjectWire",
  description: "Everything you need to know about Beast Games Season 2. Latest news, casting updates, release date predictions, and what to expect from MrBeast's next reality competition season.",
  keywords: ["Beast Games Season 2", "MrBeast", "reality competition", "Amazon Prime Video", "casting", "release date"],
  alternates: {
    canonical: 'https://www.objectwire.org/entertainment/beastgames/season-2',
  },
};

export default function BeastGamesSeason2Page() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-900 via-pink-900 to-red-900 text-white">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <Link 
              href="/beast-games" 
              className="inline-block text-pink-200 hover:text-pink-100 mb-4 text-sm font-medium"
            >
              ← Back to Beast Games
            </Link>
            <p className="text-pink-200 text-sm font-mono tracking-wider mb-4">SEASON 2 • COMING 2026</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Beast Games: Season 2
            </h1>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Following the record-breaking success of Season 1, MrBeast and Amazon Prime Video are preparing for an even bigger, 
              more spectacular second season with higher stakes and unprecedented challenges.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold text-lg">
                ✓ Officially Confirmed
              </span>
              <span className="bg-blue-500 text-white px-6 py-3 rounded-lg font-bold text-lg">
                Production Planning
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        
        {/* Latest Updates */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8 pb-4 border-b-2 border-pink-600">
            <h2 className="text-3xl font-bold text-gray-900">Latest Updates</h2>
            <span className="text-gray-500 text-sm">Last updated: January 16, 2026</span>
          </div>
          
          <div className="space-y-6">
            {/* Update 1 */}
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 border-l-4 border-pink-600">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-500 mb-2">January 15, 2026</p>
                  <h3 className="text-2xl font-bold text-gray-900">Season 2 Officially Confirmed by Amazon</h3>
                </div>
                <span className="bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ml-4">
                  Breaking News
                </span>
              </div>
              <p className="text-gray-700 mb-4">
                Amazon Prime Video has officially confirmed Beast Games Season 2 following the massive success of the inaugural season. 
                The streaming giant cited record viewership numbers and unprecedented engagement as key factors in the swift renewal decision.
              </p>
              <p className="text-gray-700">
                "Beast Games has exceeded all our expectations and redefined what's possible in reality competition television," 
                said Jennifer Salke, head of Amazon Studios. "We're thrilled to bring viewers an even more ambitious Season 2."
              </p>
            </div>

            {/* Update 2 */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-blue-600">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-500 mb-2">January 10, 2026</p>
                  <h3 className="text-2xl font-bold text-gray-900">MrBeast Teases "Even Bigger" Season 2</h3>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                In a recent YouTube video, MrBeast (Jimmy Donaldson) hinted at plans for Season 2, stating that the production team 
                is already working on challenges that will "make Season 1 look small." While specific details remain under wraps, 
                sources close to production suggest the budget could exceed $150 million.
              </p>
              <p className="text-gray-700">
                "We learned so much from Season 1, and Season 2 is going to be insane," MrBeast said in a post-finale interview. 
                "Everything is bigger—the prizes, the challenges, the scale. We're not holding back."
              </p>
            </div>

            {/* Update 3 */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-600">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-500 mb-2">January 5, 2026</p>
                  <h3 className="text-2xl font-bold text-gray-900">Casting Timeline Announced</h3>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Beast Games production has announced that casting for Season 2 will begin in Q2 2026, with filming expected to 
                commence in late summer or early fall. Interested participants can apply through the official Beast Games casting portal.
              </p>
              <p className="text-gray-700">
                Applicants must be 18 years or older and meet specific eligibility requirements. The application process includes 
                video submissions, background checks, and multiple interview rounds.
              </p>
            </div>
          </div>
        </section>

        {/* What We Know */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-pink-600">
            What We Know So Far
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Confirmed Details */}
            <div className="bg-green-50 rounded-xl p-8 border-2 border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-green-600 mr-3">✓</span>
                Confirmed Details
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-green-600 text-xl mr-3">•</span>
                  <div>
                    <p className="font-bold text-gray-900">Officially Greenlit</p>
                    <p className="text-gray-700 text-sm">Amazon Prime Video has confirmed Season 2 production</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-green-600 text-xl mr-3">•</span>
                  <div>
                    <p className="font-bold text-gray-900">MrBeast Returns</p>
                    <p className="text-gray-700 text-sm">Jimmy Donaldson will continue as creator, host, and executive producer</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-green-600 text-xl mr-3">•</span>
                  <div>
                    <p className="font-bold text-gray-900">Bigger Budget</p>
                    <p className="text-gray-700 text-sm">Production budget expected to exceed Season 1's $100M+</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-green-600 text-xl mr-3">•</span>
                  <div>
                    <p className="font-bold text-gray-900">2026 Target</p>
                    <p className="text-gray-700 text-sm">Expected to premiere sometime in late 2026 or early 2027</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-green-600 text-xl mr-3">•</span>
                  <div>
                    <p className="font-bold text-gray-900">Prime Video Exclusive</p>
                    <p className="text-gray-700 text-sm">Will stream exclusively on Amazon Prime Video</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Rumors & Speculation */}
            <div className="bg-yellow-50 rounded-xl p-8 border-2 border-yellow-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-yellow-600 mr-3">?</span>
                Rumors & Speculation
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-yellow-600 text-xl mr-3">•</span>
                  <div>
                    <p className="font-bold text-gray-900">$10M Grand Prize?</p>
                    <p className="text-gray-700 text-sm">Unconfirmed reports suggest doubling the Season 1 prize</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-yellow-600 text-xl mr-3">•</span>
                  <div>
                    <p className="font-bold text-gray-900">International Locations</p>
                    <p className="text-gray-700 text-sm">Some challenges may be filmed outside the United States</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-yellow-600 text-xl mr-3">•</span>
                  <div>
                    <p className="font-bold text-gray-900">More Episodes</p>
                    <p className="text-gray-700 text-sm">Potentially 12-15 episodes instead of 10</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-yellow-600 text-xl mr-3">•</span>
                  <div>
                    <p className="font-bold text-gray-900">Celebrity Appearances</p>
                    <p className="text-gray-700 text-sm">Possible guest judges or celebrity contestants in special episodes</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-yellow-600 text-xl mr-3">•</span>
                  <div>
                    <p className="font-bold text-gray-900">Global Casting</p>
                    <p className="text-gray-700 text-sm">Contestants from multiple countries instead of just the US</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-pink-600">
            Expected Timeline
          </h2>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-600 to-purple-600"></div>
            
            <div className="space-y-8">
              {/* Q2 2026 */}
              <div className="relative pl-20">
                <div className="absolute left-5 top-2 w-7 h-7 bg-pink-600 rounded-full border-4 border-white shadow-lg"></div>
                <div className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">Q2 2026 (Apr-Jun)</h3>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Upcoming</span>
                  </div>
                  <p className="text-gray-700 font-bold mb-2">Casting Opens</p>
                  <p className="text-gray-600">
                    Applications open for contestants. Video submissions, interviews, and background checks begin. 
                    Expect millions of applications from around the world.
                  </p>
                </div>
              </div>

              {/* Q3 2026 */}
              <div className="relative pl-20">
                <div className="absolute left-5 top-2 w-7 h-7 bg-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                <div className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">Q3 2026 (Jul-Sep)</h3>
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">Projected</span>
                  </div>
                  <p className="text-gray-700 font-bold mb-2">Production Begins</p>
                  <p className="text-gray-600">
                    Filming commences with final contestants. Sets are built, challenges are tested, and production ramps up 
                    for what could be the most ambitious reality show ever made.
                  </p>
                </div>
              </div>

              {/* Q4 2026 */}
              <div className="relative pl-20">
                <div className="absolute left-5 top-2 w-7 h-7 bg-indigo-600 rounded-full border-4 border-white shadow-lg"></div>
                <div className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">Q4 2026 (Oct-Dec)</h3>
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">Projected</span>
                  </div>
                  <p className="text-gray-700 font-bold mb-2">Post-Production</p>
                  <p className="text-gray-600">
                    Editing, visual effects, sound design, and music composition. Marketing campaign begins with teasers and trailers. 
                    Potential premiere date announcement.
                  </p>
                </div>
              </div>

              {/* Late 2026 / Early 2027 */}
              <div className="relative pl-20">
                <div className="absolute left-5 top-2 w-7 h-7 bg-red-600 rounded-full border-4 border-white shadow-lg"></div>
                <div className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">Late 2026 / Early 2027</h3>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Target</span>
                  </div>
                  <p className="text-gray-700 font-bold mb-2">Season Premiere</p>
                  <p className="text-gray-600">
                    Season 2 drops on Amazon Prime Video. Global promotional tour, watch parties, and social media campaign. 
                    Episodes may release weekly or in batches.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-pink-600">
            What to Expect in Season 2
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border-2 border-red-200">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bigger Scale</h3>
              <p className="text-gray-700 mb-4">
                Season 2 will reportedly feature even more contestants, larger sets, and more elaborate challenge designs that push the boundaries of what's possible in reality TV.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Potentially 1,500+ contestants</li>
                <li>• Larger production facilities</li>
                <li>• More complex multi-stage challenges</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6 border-2 border-yellow-200">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Higher Stakes</h3>
              <p className="text-gray-700 mb-4">
                With Season 1's success, expectations are high for even larger prizes. The grand prize could potentially double to $10 million or more.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Record-breaking prize pool</li>
                <li>• More milestone rewards</li>
                <li>• Life-changing prizes for top contestants</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">New Formats</h3>
              <p className="text-gray-700 mb-4">
                Learning from Season 1, expect refined challenge formats, better pacing, and potentially new gameplay mechanics that reward different strategies.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Team-based challenges</li>
                <li>• Individual skill tests</li>
                <li>• Strategic alliance elements</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-200">
              <div className="text-4xl mb-4">🎬</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Production Quality</h3>
              <p className="text-gray-700 mb-4">
                Building on Season 1's cinematic quality, Season 2 will feature even more impressive camera work, drone shots, and visual effects.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Hollywood-grade cinematography</li>
                <li>• Advanced visual effects</li>
                <li>• Theatrical sound design</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Reach</h3>
              <p className="text-gray-700 mb-4">
                Season 2 may feature international casting and possibly challenges filmed in multiple countries, expanding the show's global appeal.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Worldwide contestant pool</li>
                <li>• International filming locations</li>
                <li>• Multi-language support</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-xl p-6 border-2 border-indigo-200">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fan Engagement</h3>
              <p className="text-gray-700 mb-4">
                Expect more interactive elements, behind-the-scenes content, and social media integration to engage MrBeast's massive online fanbase.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Live voting elements</li>
                <li>• BTS content on YouTube</li>
                <li>• Fan challenges and contests</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Comparison with Season 1 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-pink-600">
            Season 1 vs Season 2 (Projected)
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white border-2 border-gray-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-left font-bold text-gray-900 border-b-2 border-gray-200">Category</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-900 border-b-2 border-gray-200">Season 1</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-900 border-b-2 border-gray-200">Season 2 (Expected)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Episodes</td>
                  <td className="px-6 py-4 text-gray-700">10</td>
                  <td className="px-6 py-4 text-gray-700">12-15 (rumored)</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Contestants</td>
                  <td className="px-6 py-4 text-gray-700">1,000+</td>
                  <td className="px-6 py-4 text-gray-700">1,500+ (rumored)</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Grand Prize</td>
                  <td className="px-6 py-4 text-gray-700">$5,000,000</td>
                  <td className="px-6 py-4 text-gray-700">$10,000,000 (rumored)</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Total Prize Pool</td>
                  <td className="px-6 py-4 text-gray-700">$14,000,000+</td>
                  <td className="px-6 py-4 text-gray-700">$25,000,000+ (rumored)</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Production Budget</td>
                  <td className="px-6 py-4 text-gray-700">$100,000,000+</td>
                  <td className="px-6 py-4 text-gray-700">$150,000,000+ (estimated)</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Filming Duration</td>
                  <td className="px-6 py-4 text-gray-700">3-4 months</td>
                  <td className="px-6 py-4 text-gray-700">4-5 months (estimated)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Release Date</td>
                  <td className="px-6 py-4 text-gray-700">December 19, 2024</td>
                  <td className="px-6 py-4 text-gray-700">Late 2026 / Early 2027 (projected)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* How to Apply */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-12 text-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-6 text-center">Interested in Competing?</h2>
              <p className="text-xl mb-8 text-purple-100 text-center">
                While casting hasn't officially opened yet, here's what you need to know to prepare your application.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4">Basic Requirements</h3>
                  <ul className="space-y-3 text-purple-100">
                    <li className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>Must be 18 years or older</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>U.S. resident (may expand internationally)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>Available for full filming schedule</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>Pass background check</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>Physically and mentally fit</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4">Application Tips</h3>
                  <ul className="space-y-3 text-purple-100">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Create a compelling video introduction</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Show your personality and energy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Explain why you want to compete</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Be authentic and genuine</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Apply early when casting opens</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-purple-100 mb-6">
                  Official casting announcement coming Q2 2026. Stay tuned to MrBeast's channels for details.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link 
                    href="https://www.youtube.com/@MrBeast" 
                    target="_blank"
                    className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold"
                  >
                    Follow MrBeast →
                  </Link>
                  <Link 
                    href="/beast-games" 
                    className="inline-block bg-pink-500 text-white px-8 py-4 rounded-lg hover:bg-pink-600 transition-colors font-bold"
                  >
                    Learn About Season 1 →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-pink-600">
            Related Coverage
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/beast-games" className="bg-gray-50 hover:bg-gray-100 rounded-lg overflow-hidden border border-gray-200 transition-all hover:shadow-lg">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 h-32 flex items-center justify-center">
                <span className="text-white text-5xl">🎮</span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">Beast Games Overview</h3>
                <p className="text-gray-600 text-sm">
                  Complete information about the show, Season 1 recap, and everything you need to know.
                </p>
              </div>
            </Link>

            <Link href="/blog?tag=mrbeast" className="bg-gray-50 hover:bg-gray-100 rounded-lg overflow-hidden border border-gray-200 transition-all hover:shadow-lg">
              <div className="bg-gradient-to-r from-red-600 to-pink-600 h-32 flex items-center justify-center">
                <span className="text-white text-5xl">👤</span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">MrBeast News</h3>
                <p className="text-gray-600 text-sm">
                  Latest updates about Jimmy Donaldson's projects, businesses, and content creation.
                </p>
              </div>
            </Link>

            <Link href="/blog?tag=reality-tv" className="bg-gray-50 hover:bg-gray-100 rounded-lg overflow-hidden border border-gray-200 transition-all hover:shadow-lg">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 h-32 flex items-center justify-center">
                <span className="text-white text-5xl">📺</span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">Reality TV Coverage</h3>
                <p className="text-gray-600 text-sm">
                  Breaking news and analysis from the reality television industry.
                </p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
