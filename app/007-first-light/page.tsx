import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "007 First Light - James Bond Game by IO Interactive | ObjectWire",
  description: "Everything about 007 First Light, the new James Bond game from IO Interactive (Hitman developers). Systemic gameplay meets espionage in the definitive 007 gaming experience.",
  keywords: ["007 First Light", "James Bond game", "IO Interactive", "Hitman", "Project 007", "spy game", "espionage"],
};

export default function JamesBondGamePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-800 via-gray-900 to-black text-white">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Main Info */}
            <div className="md:col-span-2">
              <p className="text-gray-300 text-sm font-mono tracking-wider mb-4">IO INTERACTIVE • ORIGIN STORY</p>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
                007: First Light
              </h1>
              <p className="text-xl text-gray-100 mb-6 leading-relaxed">
                The creators of the <strong className="text-white">Hitman trilogy</strong> bring their award-winning systemic gameplay 
                to the world of <strong className="text-white">James Bond</strong>. A brand-new origin story for the world's favorite spy.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">TBA</p>
                  <p className="text-sm text-gray-100">Release Date</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">Multi</p>
                  <p className="text-sm text-gray-100">Platforms</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">M</p>
                  <p className="text-sm text-gray-100">Rating (Expected)</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">007</p>
                  <p className="text-sm text-gray-100">New Era</p>
                </div>
              </div>
            </div>

            {/* Quick Facts Card */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
              <h3 className="font-bold text-lg mb-4 text-white">Game Details</h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-gray-200">Developer</dt>
                  <dd className="font-medium text-white">IO Interactive</dd>
                </div>
                <div>
                  <dt className="text-gray-200">Publisher</dt>
                  <dd className="font-medium text-white">IO Interactive (Self-Published)</dd>
                </div>
                <div>
                  <dt className="text-gray-200">Genre</dt>
                  <dd className="font-medium text-white">Stealth Action, Espionage</dd>
                </div>
                <div>
                  <dt className="text-gray-200">Announced</dt>
                  <dd className="font-medium text-white">November 2020</dd>
                </div>
                <div>
                  <dt className="text-gray-200">Engine</dt>
                  <dd className="font-medium text-white">Glacier Engine</dd>
                </div>
                <div>
                  <dt className="text-gray-200">Status</dt>
                  <dd className="font-medium text-yellow-300">In Development</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        
        {/* Latest News */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8 pb-4 border-b-2 border-slate-700">
            <h2 className="text-3xl font-bold text-gray-900">Latest Intelligence</h2>
            <Link href="/blog?tag=007-first-light" className="text-slate-700 hover:text-slate-800 font-medium">
              View All Updates →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* News 1 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-slate-700 to-gray-900 h-48 flex items-center justify-center">
                <span className="text-white text-6xl">🕵️</span>
              </div>
              <div className="p-6">
                <p className="text-xs text-gray-500 mb-2">January 14, 2026</p>
                <h3 className="font-bold text-lg mb-2">IO Interactive Teases Progress</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Studio CEO Hakan Abrak shares cryptic message about "exciting 007 developments" coming in Q2 2026.
                </p>
                <Link href="/blog/007-first-light-progress-update" className="text-slate-700 hover:text-slate-800 font-medium text-sm">
                  Read More →
                </Link>
              </div>
            </div>

            {/* News 2 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-blue-700 to-indigo-900 h-48 flex items-center justify-center">
                <span className="text-white text-6xl">🎬</span>
              </div>
              <div className="p-6">
                <p className="text-xs text-gray-500 mb-2">December 28, 2025</p>
                <h3 className="font-bold text-lg mb-2">Casting Rumors Swirl</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Industry insiders report motion capture sessions with a "rising British actor" fueling speculation about Bond's voice.
                </p>
                <Link href="/blog/007-casting-rumors-2025" className="text-slate-700 hover:text-slate-800 font-medium text-sm">
                  Read More →
                </Link>
              </div>
            </div>

            {/* News 3 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-red-700 to-orange-700 h-48 flex items-center justify-center">
                <span className="text-white text-6xl">🌍</span>
              </div>
              <div className="p-6">
                <p className="text-xs text-gray-500 mb-2">November 22, 2025</p>
                <h3 className="font-bold text-lg mb-2">Location Scouting Confirmed</h3>
                <p className="text-gray-600 text-sm mb-4">
                  IO Interactive staff spotted photographing locations in London, Monaco, and Istanbul for environmental reference.
                </p>
                <Link href="/blog/007-location-scouting" className="text-slate-700 hover:text-slate-800 font-medium text-sm">
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About the Game */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-slate-700">
            About 007: First Light
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="prose prose-lg max-w-none">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Origin Story</h3>
              <p className="text-gray-700 mb-4">
                007: First Light (working title: Project 007) tells an entirely original James Bond origin story. This isn't based on 
                any existing Bond film or novel—instead, it explores how a young agent earned his 00 status and became the legendary 
                spy we know today.
              </p>
              <p className="text-gray-700 mb-4">
                IO Interactive has secured the rights to create their own unique Bond narrative, working closely with EON Productions 
                and MGM. The game will feature a completely new Bond actor (voice and performance capture), allowing IO to craft their 
                own take on the character without being tied to any particular film portrayal.
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The IO Interactive Difference</h3>
              <p className="text-gray-700 mb-4">
                IO Interactive's Hitman trilogy revolutionized stealth gameplay with its "sandbox assassination" approach. Players could 
                complete missions in countless ways, using disguises, social engineering, environmental kills, and creative problem-solving. 
                This systemic design philosophy is perfect for Bond's world of espionage.
              </p>
              <p className="text-gray-700 mb-4">
                Expect similar freedom in 007: First Light—infiltrate enemy bases through multiple routes, use gadgets creatively, 
                charm your way past guards, or go loud with action. IO's expertise in creating immersive, reactive worlds means this 
                could be the most authentic spy fantasy ever created in gaming.
              </p>
            </div>
          </div>
        </section>

        {/* Expected Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-slate-700">
            Expected Features
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-xl p-6 border-2 border-slate-300">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Systemic Stealth</h3>
              <p className="text-gray-700 mb-4">
                IO's signature gameplay adapted for espionage: multiple approaches, dynamic AI, environmental interactions, and emergent gameplay.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Multiple mission solutions</li>
                <li>• Dynamic disguise system</li>
                <li>• Social stealth mechanics</li>
                <li>• Improvised gadget use</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-300">
              <div className="text-4xl mb-4">🔫</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Iconic Arsenal</h3>
              <p className="text-gray-700 mb-4">
                Bond's legendary weapons and gadgets, from the Walther PPK to Q-Branch's latest innovations, all with realistic handling.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Signature firearms</li>
                <li>• High-tech gadgets</li>
                <li>• Exotic weapons</li>
                <li>• Customization options</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border-2 border-red-300">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Globe-Trotting</h3>
              <p className="text-gray-700 mb-4">
                Exotic locations around the world, from casinos in Monaco to secret bases in the Alps, each a detailed sandbox playground.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Multiple countries and cities</li>
                <li>• Detailed environment design</li>
                <li>• Authentic cultural details</li>
                <li>• Varied mission settings</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-300">
              <div className="text-4xl mb-4">🎭</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Origin Narrative</h3>
              <p className="text-gray-700 mb-4">
                Watch James Bond earn his 00 status through dangerous missions, difficult choices, and personal sacrifice in an original story.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Character development arc</li>
                <li>• Earn the 007 designation</li>
                <li>• Moral complexities</li>
                <li>• Cinematic storytelling</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-300">
              <div className="text-4xl mb-4">🎰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bond Lifestyle</h3>
              <p className="text-gray-700 mb-4">
                Experience the glamorous side of being 007—casinos, luxury hotels, exotic cars, and sophisticated social gameplay.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Casino gambling mechanics</li>
                <li>• High-stakes poker</li>
                <li>• Luxury vehicle driving</li>
                <li>• Social charm system</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6 border-2 border-yellow-300">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Replayability</h3>
              <p className="text-gray-700 mb-4">
                IO's DNA means infinite replay value with challenges, unlockables, alternate routes, and player-created contracts.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Multiple completion methods</li>
                <li>• Mastery progression system</li>
                <li>• Community challenges</li>
                <li>• Unlockable content</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Development Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-slate-700">
            IO Interactive: Masters of Stealth
          </h2>
          
          <div className="bg-gradient-to-r from-gray-50 to-slate-100 rounded-xl p-8 border border-gray-200">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Studio</h3>
                <p className="text-gray-700 mb-4">
                  Founded in 1998 in Copenhagen, Denmark, IO Interactive has become synonymous with stealth gameplay excellence. 
                  Their Hitman series has sold over 70 million copies, with the recent World of Assassination trilogy earning 
                  universal acclaim for its innovative "social stealth" mechanics.
                </p>
                <p className="text-gray-700 mb-4">
                  In 2017, IO bought themselves back from Square Enix, becoming fully independent while retaining the Hitman IP. 
                  This independence allowed them to pursue the James Bond license, one of the most prestigious properties in entertainment. 
                  Securing the 007 rights is a massive vote of confidence from EON Productions and MGM.
                </p>
                <p className="text-gray-700 mb-6">
                  IO Interactive is also opening new studios in Barcelona, Spain and Istanbul, Turkey to support their growing ambitions, 
                  including both 007: First Light and their upcoming fantasy game, Project Fantasy (working title).
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="https://www.ioi.dk" 
                    target="_blank"
                    className="inline-block bg-slate-700 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors font-medium"
                  >
                    IO Interactive →
                  </Link>
                  <Link 
                    href="/blog?tag=io-interactive" 
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Studio Coverage →
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="font-bold text-lg mb-4">Studio Facts</h4>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-gray-500">Founded</dt>
                    <dd className="font-bold text-gray-900">1998</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Headquarters</dt>
                    <dd className="font-bold text-gray-900">Copenhagen, Denmark</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Employees</dt>
                    <dd className="font-bold text-gray-900">400+</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Status</dt>
                    <dd className="font-bold text-gray-900">Independent</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Known For</dt>
                    <dd className="font-bold text-gray-900">Hitman Series</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Active Projects</dt>
                    <dd className="font-bold text-gray-900">007, Project Fantasy</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* Why This Matters */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-slate-700">
            Why 007: First Light Could Be Special
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 border-2 border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Perfect Developer Match</h3>
              <p className="text-gray-700 mb-4">
                IO Interactive's Hitman games are essentially Bond simulators already—exotic locations, disguises, assassination targets, 
                and improvisation. They've spent 20+ years perfecting the exact gameplay formula that Bond deserves.
              </p>
              <p className="text-gray-700 mb-4">
                Past Bond games have struggled to capture the fantasy properly, either leaning too heavily into action or failing to 
                deliver on the espionage fantasy. IO understands stealth, player choice, and emergent gameplay better than any developer.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-xl p-8 border-2 border-slate-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fresh Start</h3>
              <p className="text-gray-700 mb-4">
                By creating an origin story with a new Bond actor, IO isn't constrained by film continuity or likeness rights. 
                They can tell the exact story they want and build a Bond that works perfectly for their gameplay vision.
              </p>
              <p className="text-gray-700 mb-4">
                This also means potential for a multi-game arc, similar to how they released Hitman as an ongoing trilogy. 
                We could see Bond's complete journey from rookie agent to seasoned 00 across multiple releases.
              </p>
            </div>
          </div>
        </section>

        {/* What Fans Hope For */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-slate-700">
            Community Wishlist
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-slate-500 transition-colors">
              <div className="text-4xl mb-3">🚗</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Aston Martin DB5</h3>
              <p className="text-sm text-gray-700">
                The iconic car with gadgets—ejector seat, machine guns, oil slick. Make it drivable and functional in missions.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-slate-500 transition-colors">
              <div className="text-4xl mb-3">👔</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Classic Bond Moments</h3>
              <p className="text-sm text-gray-700">
                Ordering martinis, casino scenes, tuxedo infiltrations, witty one-liners—all the things that make Bond, Bond.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-slate-500 transition-colors">
              <div className="text-4xl mb-3">🎵</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Proper Bond Music</h3>
              <p className="text-sm text-gray-700">
                An original score that captures that classic Bond sound, plus maybe a title song from a major artist.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-slate-500 transition-colors">
              <div className="text-4xl mb-3">🦹</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Memorable Villain</h3>
              <p className="text-sm text-gray-700">
                An original antagonist worthy of Bond's rogues gallery—sophisticated, menacing, with a world-threatening scheme.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-slate-500 transition-colors">
              <div className="text-4xl mb-3">💎</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Bond Girls Done Right</h3>
              <p className="text-sm text-gray-700">
                Complex, capable female characters who are allies and equals, not just romantic interests or damsels.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-slate-500 transition-colors">
              <div className="text-4xl mb-3">🏢</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">MI6 Headquarters</h3>
              <p className="text-sm text-gray-700">
                A detailed MI6 base with M's office, Q-Branch gadget lab, and briefing rooms that you can return to between missions.
              </p>
            </div>
          </div>
        </section>

        {/* Release Speculation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-slate-700">
            Release Window Speculation
          </h2>
          
          <div className="bg-gradient-to-r from-slate-50 to-gray-100 rounded-xl p-8 border-2 border-slate-300">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Timeline Analysis</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold text-gray-900 mb-2">📅 Most Likely: 2027-2028</p>
                    <p className="text-sm text-gray-600">
                      Announced in late 2020, a 7-8 year development cycle would put the game in late 2027 or 2028. 
                      IO is known for taking their time to perfect their games.
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-2">🎯 Optimistic: Late 2026</p>
                    <p className="text-sm text-gray-600">
                      If development has been faster than expected and IO wants to capitalize on Bond's cultural relevance, 
                      late 2026 could happen.
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-2">⏰ Conservative: 2028+</p>
                    <p className="text-sm text-gray-600">
                      IO is also developing Project Fantasy simultaneously. They may stagger releases to avoid competing 
                      with themselves.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">What We're Watching</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-slate-700 mr-2">▶</span>
                    <span className="text-sm text-gray-700">First gameplay reveal (expected 2026)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-700 mr-2">▶</span>
                    <span className="text-sm text-gray-700">Voice actor announcement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-700 mr-2">▶</span>
                    <span className="text-sm text-gray-700">New Bond film timing (could influence game)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-700 mr-2">▶</span>
                    <span className="text-sm text-gray-700">IO's other projects (Fantasy game status)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-700 mr-2">▶</span>
                    <span className="text-sm text-gray-700">Studio expansion completion dates</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-slate-800 to-black rounded-xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">The Name's Bond. James Bond.</h2>
            <p className="text-xl mb-8 text-gray-300">
              Stay updated on the most anticipated spy game in development
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="https://www.ioi.dk/project-007/" 
                target="_blank"
                className="inline-block bg-white text-slate-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg"
              >
                Official Site →
              </Link>
              <Link 
                href="/blog?tag=007-first-light" 
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-bold text-lg"
              >
                Follow Coverage →
              </Link>
            </div>
          </div>
        </section>

        {/* Related */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-slate-700">
            Related Coverage
          </h2>
          
          <div className="grid md:grid-cols-4 gap-4">
            <Link href="/blog?tag=io-interactive" className="bg-gray-50 hover:bg-gray-100 p-4 rounded-lg border border-gray-200 transition-colors">
              <p className="font-bold text-gray-900 mb-2">IO Interactive</p>
              <p className="text-sm text-gray-600">Studio news and updates</p>
            </Link>
            <Link href="/blog?tag=stealth-games" className="bg-gray-50 hover:bg-gray-100 p-4 rounded-lg border border-gray-200 transition-colors">
              <p className="font-bold text-gray-900 mb-2">Stealth Games</p>
              <p className="text-sm text-gray-600">Espionage and stealth titles</p>
            </Link>
            <Link href="/blog?tag=james-bond" className="bg-gray-50 hover:bg-gray-100 p-4 rounded-lg border border-gray-200 transition-colors">
              <p className="font-bold text-gray-900 mb-2">James Bond</p>
              <p className="text-sm text-gray-600">007 franchise coverage</p>
            </Link>
            <Link href="/blog?tag=upcoming-games" className="bg-gray-50 hover:bg-gray-100 p-4 rounded-lg border border-gray-200 transition-colors">
              <p className="font-bold text-gray-900 mb-2">Upcoming Games</p>
              <p className="text-sm text-gray-600">Most anticipated releases</p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
