import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resident Evil Requiem - Next Entry in the Survival Horror Series | ObjectWire",
  description: "Everything about Resident Evil Requiem, the next entry in Capcom's legendary survival horror series. Release date, gameplay details, rumors, and latest news.",
  keywords: ["Resident Evil Requiem", "RE Requiem", "Capcom", "survival horror", "Resident Evil 9", "horror game", "zombie game"],
};

export default function ResidentEvilRequiemPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-900 via-black to-gray-900 text-white">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Main Info */}
            <div className="md:col-span-2">
              <p className="text-red-300 text-sm font-mono tracking-wider mb-4">CAPCOM • SURVIVAL HORROR</p>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
                Resident Evil: Requiem
              </h1>
              <p className="text-xl text-gray-100 mb-6 leading-relaxed">
                The next chapter in <strong className="text-white">Capcom's legendary survival horror series</strong>. 
                A return to classic atmospheric horror with modern gameplay evolution.
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
                  <p className="text-3xl font-bold text-white">RE9</p>
                  <p className="text-sm text-gray-100">Main Series</p>
                </div>
              </div>
            </div>

            {/* Quick Facts Card */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
              <h3 className="font-bold text-lg mb-4 text-white">Game Details</h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-gray-200">Developer</dt>
                  <dd className="font-medium text-white">Capcom</dd>
                </div>
                <div>
                  <dt className="text-gray-200">Publisher</dt>
                  <dd className="font-medium text-white">Capcom</dd>
                </div>
                <div>
                  <dt className="text-gray-200">Genre</dt>
                  <dd className="font-medium text-white">Survival Horror</dd>
                </div>
                <div>
                  <dt className="text-gray-200">Series Entry</dt>
                  <dd className="font-medium text-white">Resident Evil 9 (Likely)</dd>
                </div>
                <div>
                  <dt className="text-gray-200">Engine</dt>
                  <dd className="font-medium text-white">RE Engine</dd>
                </div>
                <div>
                  <dt className="text-gray-200">Status</dt>
                  <dd className="font-medium text-yellow-300">Rumored/In Development</dd>
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
          <div className="flex items-center justify-between mb-8 pb-4 border-b-2 border-red-700">
            <h2 className="text-3xl font-bold text-gray-900">Latest Reports</h2>
            <Link href="/blog?tag=resident-evil" className="text-red-700 hover:text-red-800 font-medium">
              View All News →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* News 1 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-red-700 to-black h-48 flex items-center justify-center">
                <span className="text-white text-6xl">🧟</span>
              </div>
              <div className="p-6">
                <p className="text-xs text-gray-500 mb-2">January 13, 2026</p>
                <h3 className="font-bold text-lg mb-2">"Requiem" Trademark Filed</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Capcom files trademark for "Resident Evil: Requiem" in multiple territories, sparking speculation about RE9's official title.
                </p>
                <Link href="/blog/resident-evil-requiem-trademark" className="text-red-700 hover:text-red-800 font-medium text-sm">
                  Read More →
                </Link>
              </div>
            </div>

            {/* News 2 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-purple-700 to-red-900 h-48 flex items-center justify-center">
                <span className="text-white text-6xl">🎬</span>
              </div>
              <div className="p-6">
                <p className="text-xs text-gray-500 mb-2">December 18, 2025</p>
                <h3 className="font-bold text-lg mb-2">Classic Characters Return?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Industry leakers claim Leon Kennedy and Jill Valentine will both appear, bridging storylines from recent entries.
                </p>
                <Link href="/blog/resident-evil-requiem-characters" className="text-red-700 hover:text-red-800 font-medium text-sm">
                  Read More →
                </Link>
              </div>
            </div>

            {/* News 3 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-gray-800 to-red-800 h-48 flex items-center justify-center">
                <span className="text-white text-6xl">🏚️</span>
              </div>
              <div className="p-6">
                <p className="text-xs text-gray-500 mb-2">November 30, 2025</p>
                <h3 className="font-bold text-lg mb-2">Development Update Teased</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Capcom's fiscal reports mention "unannounced major title" targeting 2027 release, likely the next mainline RE game.
                </p>
                <Link href="/blog/capcom-major-title-2027" className="text-red-700 hover:text-red-800 font-medium text-sm">
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-red-700">
            What We Know (and Don't Know)
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="prose prose-lg max-w-none">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Rumors</h3>
              <p className="text-gray-700 mb-4">
                <strong>Note:</strong> Resident Evil: Requiem is currently an unconfirmed title based on trademark filings and 
                industry reports. Capcom has not officially announced the game, but all signs point to a new mainline Resident Evil 
                in development for release in 2027 or beyond.
              </p>
              <p className="text-gray-700 mb-4">
                Following the success of Resident Evil Village (2021) and the RE4 Remake (2023), Capcom is reportedly working on 
                the next mainline entry—potentially Resident Evil 9. The "Requiem" name suggests a more somber, reflective tone, 
                possibly serving as a culmination or conclusion to ongoing story arcs.
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Capcom's Hot Streak</h3>
              <p className="text-gray-700 mb-4">
                Capcom's RE Engine has powered an incredible run of successful Resident Evil games. Village sold over 8 million copies, 
                while the RE2, RE3, and RE4 remakes all became bestsellers. The franchise has never been more popular or critically acclaimed.
              </p>
              <p className="text-gray-700 mb-4">
                This momentum means Capcom will likely take their time with the next mainline entry, ensuring it meets the high bar 
                they've set. Expect cutting-edge graphics, refined gameplay, and a story that honors the series' 30-year legacy.
              </p>
            </div>
          </div>
        </section>

        {/* Potential Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-red-700">
            Expected & Rumored Features
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border-2 border-red-200">
              <div className="text-4xl mb-4">😱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Classic Horror</h3>
              <p className="text-gray-700 mb-4">
                A return to survival horror roots with limited resources, atmospheric tension, and genuine scares over constant action.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Resource management</li>
                <li>• Puzzle-solving emphasis</li>
                <li>• Atmospheric dread</li>
                <li>• Limited ammunition</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Returning Heroes</h3>
              <p className="text-gray-700 mb-4">
                Rumors suggest multiple playable characters including series veterans Leon, Jill, and possibly Chris or Claire.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Multiple perspectives</li>
                <li>• Character-specific abilities</li>
                <li>• Interwoven storylines</li>
                <li>• Legacy connections</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-slate-100 rounded-xl p-6 border-2 border-gray-300">
              <div className="text-4xl mb-4">🦠</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">New Threats</h3>
              <p className="text-gray-700 mb-4">
                A new bioweapon outbreak potentially combining elements of classic T-Virus zombies with modern mutations.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Diverse enemy types</li>
                <li>• Terrifying boss battles</li>
                <li>• Environmental hazards</li>
                <li>• Evolving creatures</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-200">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">RE Engine Evolution</h3>
              <p className="text-gray-700 mb-4">
                Built on Capcom's cutting-edge RE Engine with photorealistic graphics and immersive audio design.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Next-gen visuals</li>
                <li>• Ray tracing support</li>
                <li>• 4K/60fps performance</li>
                <li>• Advanced AI systems</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Scale</h3>
              <p className="text-gray-700 mb-4">
                Multiple locations around the world as the outbreak spreads, each with distinct environments and challenges.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Varied locations</li>
                <li>• Large interconnected areas</li>
                <li>• Environmental storytelling</li>
                <li>• Hidden secrets</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border-2 border-yellow-200">
              <div className="text-4xl mb-4">🔫</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Refined Combat</h3>
              <p className="text-gray-700 mb-4">
                Evolution of Village's combat with new weapons, mechanics, and the series' signature inventory management.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Weapon customization</li>
                <li>• Melee options</li>
                <li>• Defensive maneuvers</li>
                <li>• Environmental kills</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Story Speculation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-red-700">
            Story & Setting Speculation
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8 border-2 border-red-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What "Requiem" Could Mean</h3>
              <p className="text-gray-700 mb-4">
                A requiem is a mass for the dead—a memorial or farewell. This title could signify several things:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-600 text-xl mr-3">⚰️</span>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">End of an Era</p>
                    <p className="text-xs text-gray-600">Could mark the conclusion of storylines from RE7 and Village</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 text-xl mr-3">🕯️</span>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Major Character Death</p>
                    <p className="text-xs text-gray-600">A beloved hero may make the ultimate sacrifice</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 text-xl mr-3">🌍</span>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Umbrella Legacy</p>
                    <p className="text-xs text-gray-600">Finally putting to rest the corporation's decades-long terror</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 text-xl mr-3">💀</span>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Mass Extinction Event</p>
                    <p className="text-xs text-gray-600">A global outbreak threatening humanity's survival</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border-2 border-purple-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Potential Story Threads</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-purple-600 text-xl mr-3">🔗</span>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Connections Organization</p>
                    <p className="text-xs text-gray-600">The shadowy group from Village could be the main antagonist</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 text-xl mr-3">👧</span>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Rose's Story Continues</p>
                    <p className="text-xs text-gray-600">Ethan's daughter with her special abilities plays a key role</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 text-xl mr-3">🧬</span>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Megamycete Returns</p>
                    <p className="text-xs text-gray-600">The fungal consciousness from Village resurfaces as a threat</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 text-xl mr-3">🤝</span>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Team-Up Story</p>
                    <p className="text-xs text-gray-600">Multiple protagonists work together against impossible odds</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Series Legacy */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-red-700">
            The Resident Evil Legacy
          </h2>
          
          <div className="bg-gradient-to-r from-gray-50 to-red-50 rounded-xl p-8 border border-gray-200">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">30 Years of Survival Horror</h3>
                <p className="text-gray-700 mb-4">
                  Since 1996, Resident Evil has defined the survival horror genre. The series has sold over 140 million copies worldwide, 
                  spawned a multimedia franchise including movies and TV shows, and influenced countless other games.
                </p>
                <p className="text-gray-700 mb-4">
                  The franchise has successfully reinvented itself multiple times—from fixed camera angles to over-the-shoulder action, 
                  from pure horror to action-oriented gameplay and back to horror roots. Each era has brought new fans while respecting 
                  the series' legacy.
                </p>
                <p className="text-gray-700 mb-4">
                  Recent entries like RE7, RE2 Remake, RE3 Remake, Village, and RE4 Remake have proven the series is creatively 
                  vibrant and commercially successful. Resident Evil: Requiem will build on this incredible momentum.
                </p>
                <div className="flex flex-wrap gap-4 mt-6">
                  <Link 
                    href="https://www.residentevil.com" 
                    target="_blank"
                    className="inline-block bg-red-700 text-white px-6 py-3 rounded-lg hover:bg-red-800 transition-colors font-medium"
                  >
                    Official RE Portal →
                  </Link>
                  <Link 
                    href="/blog?tag=resident-evil" 
                    className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors font-medium"
                  >
                    Series Coverage →
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="font-bold text-lg mb-4">Franchise Stats</h4>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-gray-500">First Game</dt>
                    <dd className="font-bold text-gray-900">1996</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Total Sales</dt>
                    <dd className="font-bold text-gray-900">140M+ copies</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Main Entries</dt>
                    <dd className="font-bold text-gray-900">8 numbered games</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Spin-offs</dt>
                    <dd className="font-bold text-gray-900">20+ titles</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Movies</dt>
                    <dd className="font-bold text-gray-900">6 live-action + 4 animated</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Developer</dt>
                    <dd className="font-bold text-gray-900">Capcom</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* Community Wishlist */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-red-700">
            Fan Wishlist
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-red-500 transition-colors">
              <div className="text-4xl mb-3">🏚️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Classic Mansion Setting</h3>
              <p className="text-sm text-gray-700">
                A return to the Spencer Mansion-style location—isolated, labyrinthine, full of secrets and scares.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-red-500 transition-colors">
              <div className="text-4xl mb-3">🧩</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Complex Puzzles</h3>
              <p className="text-sm text-gray-700">
                Challenging environmental puzzles that require observation, item combination, and critical thinking.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-red-500 transition-colors">
              <div className="text-4xl mb-3">📦</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Item Box Returns</h3>
              <p className="text-sm text-gray-700">
                Bring back the classic item storage system forcing players to make tough inventory decisions.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-red-500 transition-colors">
              <div className="text-4xl mb-3">⚰️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Classic Zombies</h3>
              <p className="text-sm text-gray-700">
                The slow but relentless T-Virus zombies that made the series famous, not just fast mutants.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-red-500 transition-colors">
              <div className="text-4xl mb-3">🎮</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Mercenaries Mode</h3>
              <p className="text-sm text-gray-700">
                The beloved arcade mode returns with new characters, maps, and time attack challenges.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-red-500 transition-colors">
              <div className="text-4xl mb-3">💀</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Nemesis-Style Stalker</h3>
              <p className="text-sm text-gray-700">
                An unstoppable bio-weapon that hunts you throughout the game, creating constant tension.
              </p>
            </div>
          </div>
        </section>

        {/* Release Window */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-red-700">
            Release Window Predictions
          </h2>
          
          <div className="bg-gradient-to-r from-slate-50 to-red-50 rounded-xl p-8 border-2 border-gray-300">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Timeline Analysis</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold text-gray-900 mb-2">📅 Most Likely: 2027-2028</p>
                    <p className="text-sm text-gray-600">
                      Given RE Village released in 2021 and RE4 Remake in 2023, a 2027-2028 release for the next mainline entry 
                      fits Capcom's typical development cycle of 4-6 years between new numbered entries.
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-2">🎯 Optimistic: Late 2026</p>
                    <p className="text-sm text-gray-600">
                      If Capcom started development immediately after Village, late 2026 could be possible, though unlikely 
                      given they've been busy with the RE4 Remake and other projects.
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-2">⏰ Conservative: 2028-2029</p>
                    <p className="text-sm text-gray-600">
                      Capcom may take extra time to ensure RE9 meets expectations and doesn't rush after their recent successes.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">What We're Watching</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-700 mr-2">▶</span>
                    <span className="text-sm text-gray-700">Capcom showcase events and State of Play</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-700 mr-2">▶</span>
                    <span className="text-sm text-gray-700">Fiscal year reports and investor calls</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-700 mr-2">▶</span>
                    <span className="text-sm text-gray-700">Trademark filings and domain registrations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-700 mr-2">▶</span>
                    <span className="text-sm text-gray-700">Voice actor social media activity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-700 mr-2">▶</span>
                    <span className="text-sm text-gray-700">Capcom hiring patterns and job listings</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-red-900 via-black to-gray-900 rounded-xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Enter the Nightmare</h2>
            <p className="text-xl mb-8 text-gray-300">
              Stay updated on the next chapter in survival horror history
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="https://www.residentevil.com" 
                target="_blank"
                className="inline-block bg-white text-red-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg"
              >
                Official RE Portal →
              </Link>
              <Link 
                href="/blog?tag=resident-evil" 
                className="inline-block bg-red-700 text-white px-8 py-4 rounded-lg hover:bg-red-800 transition-colors font-bold text-lg"
              >
                Follow Our Coverage →
              </Link>
            </div>
          </div>
        </section>

        {/* Related */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-red-700">
            Related Coverage
          </h2>
          
          <div className="grid md:grid-cols-4 gap-4">
            <Link href="/blog?tag=capcom" className="bg-gray-50 hover:bg-gray-100 p-4 rounded-lg border border-gray-200 transition-colors">
              <p className="font-bold text-gray-900 mb-2">Capcom News</p>
              <p className="text-sm text-gray-600">Latest from the Japanese publisher</p>
            </Link>
            <Link href="/blog?tag=horror-games" className="bg-gray-50 hover:bg-gray-100 p-4 rounded-lg border border-gray-200 transition-colors">
              <p className="font-bold text-gray-900 mb-2">Horror Games</p>
              <p className="text-sm text-gray-600">Survival horror and scary titles</p>
            </Link>
            <Link href="/blog?tag=resident-evil" className="bg-gray-50 hover:bg-gray-100 p-4 rounded-lg border border-gray-200 transition-colors">
              <p className="font-bold text-gray-900 mb-2">RE Franchise</p>
              <p className="text-sm text-gray-600">Complete series coverage</p>
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
