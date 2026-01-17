import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Marvel's Wolverine - PS5 Exclusive Game by Insomniac | ObjectWire",
  description: "Everything you need to know about Marvel's Wolverine, the brutal single-player adventure featuring antihero Logan. Release date, gameplay, trailers, and latest news from Insomniac Games.",
  keywords: ["Marvel's Wolverine", "Wolverine game", "Insomniac Games", "PS5 exclusive", "Logan", "X-Men", "PlayStation 5"],
};

export default function WolverineGamePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-600 via-orange-600 to-red-700 text-white">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Main Info */}
            <div className="md:col-span-2">
              <p className="text-yellow-100 text-sm font-mono tracking-wider mb-4">PS5 EXCLUSIVE • INSOMNIAC GAMES</p>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
                Marvel's Wolverine
              </h1>
              <p className="text-xl text-gray-50 mb-6 leading-relaxed">
                From the award-winning developers of <strong className="text-white">Marvel's Spider-Man</strong>, comes a brutal, 
                mature single-player adventure featuring the iconic antihero <strong className="text-white">Logan</strong>.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">TBA</p>
                  <p className="text-sm text-gray-50">Release Date</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">PS5</p>
                  <p className="text-sm text-gray-50">Platform</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">M</p>
                  <p className="text-sm text-gray-50">Rating (Expected)</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">1P</p>
                  <p className="text-sm text-gray-50">Single Player</p>
                </div>
              </div>
            </div>

            {/* Quick Facts Card */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
              <h3 className="font-bold text-lg mb-4 text-white">Game Details</h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-gray-100">Developer</dt>
                  <dd className="font-medium text-white">Insomniac Games</dd>
                </div>
                <div>
                  <dt className="text-gray-100">Publisher</dt>
                  <dd className="font-medium text-white">Sony Interactive Entertainment</dd>
                </div>
                <div>
                  <dt className="text-gray-100">Genre</dt>
                  <dd className="font-medium text-white">Action-Adventure</dd>
                </div>
                <div>
                  <dt className="text-gray-100">Announced</dt>
                  <dd className="font-medium text-white">September 9, 2021</dd>
                </div>
                <div>
                  <dt className="text-gray-100">Engine</dt>
                  <dd className="font-medium text-white">Insomniac Engine</dd>
                </div>
                <div>
                  <dt className="text-gray-100">Status</dt>
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
          <div className="flex items-center justify-between mb-8 pb-4 border-b-2 border-yellow-600">
            <h2 className="text-3xl font-bold text-gray-900">Latest News</h2>
            <Link href="/blog?tag=wolverine-game" className="text-yellow-600 hover:text-yellow-700 font-medium">
              View All Updates →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* News 1 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-yellow-600 to-orange-600 h-48 flex items-center justify-center">
                <span className="text-white text-6xl">🎮</span>
              </div>
              <div className="p-6">
                <p className="text-xs text-gray-500 mb-2">January 12, 2026</p>
                <h3 className="font-bold text-lg mb-2">Development Update Teased</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Insomniac Games hints at major news coming soon, with creative director Brian Horton sharing cryptic social media posts.
                </p>
                <Link href="/blog/wolverine-development-update-2026" className="text-yellow-600 hover:text-yellow-700 font-medium text-sm">
                  Read More →
                </Link>
              </div>
            </div>

            {/* News 2 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-red-600 to-pink-600 h-48 flex items-center justify-center">
                <span className="text-white text-6xl">🎬</span>
              </div>
              <div className="p-6">
                <p className="text-xs text-gray-500 mb-2">December 20, 2025</p>
                <h3 className="font-bold text-lg mb-2">Voice Acting Sessions Spotted</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Industry insiders report motion capture and voice recording sessions ramping up at Insomniac's Burbank studio.
                </p>
                <Link href="/blog/wolverine-voice-acting-2025" className="text-yellow-600 hover:text-yellow-700 font-medium text-sm">
                  Read More →
                </Link>
              </div>
            </div>

            {/* News 3 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-48 flex items-center justify-center">
                <span className="text-white text-6xl">🔒</span>
              </div>
              <div className="p-6">
                <p className="text-xs text-gray-500 mb-2">November 8, 2025</p>
                <h3 className="font-bold text-lg mb-2">Post-Leak Security Measures</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Insomniac implements enhanced security protocols following 2023 ransomware attack that leaked early footage.
                </p>
                <Link href="/blog/wolverine-security-measures" className="text-yellow-600 hover:text-yellow-700 font-medium text-sm">
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About the Game */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-yellow-600">
            About Marvel's Wolverine
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="prose prose-lg max-w-none">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Vision</h3>
              <p className="text-gray-700 mb-4">
                Marvel's Wolverine marks Insomniac Games' second foray into the Marvel universe, following their critically acclaimed 
                Spider-Man series. Unlike the family-friendly wall-crawler, Wolverine promises a darker, more mature experience that 
                embraces the character's brutal nature and complex past.
              </p>
              <p className="text-gray-700 mb-4">
                The game will be a single-player, narrative-driven action-adventure that explores Logan's violent history, his struggles 
                with his berserker rage, and his journey from weapon to hero. Expect visceral combat, deep character development, and 
                a story that doesn't shy away from the character's darker elements.
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why It Matters</h3>
              <p className="text-gray-700 mb-4">
                This is Insomniac's first Mature-rated game in years, allowing them to explore themes and violence that wouldn't fit 
                in their Spider-Man universe. The studio has proven they can handle superhero narratives with nuance and heart, and 
                Wolverine's story offers rich material for their storytelling prowess.
              </p>
              <p className="text-gray-700 mb-4">
                As a PlayStation 5 exclusive, the game will leverage the console's full capabilities—from haptic feedback simulating 
                the sensation of adamantium claws extending, to 3D audio bringing the sounds of combat to life. This is a game built 
                specifically for next-gen hardware.
              </p>
            </div>
          </div>
        </section>

        {/* Expected Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-yellow-600">
            Expected Features
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border-2 border-red-200">
              <div className="text-4xl mb-4">⚔️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Brutal Combat</h3>
              <p className="text-gray-700 mb-4">
                Mature-rated action featuring Wolverine's iconic adamantium claws, berserker rage, and regenerative healing factor.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Visceral melee combat system</li>
                <li>• Rage mechanic for enhanced abilities</li>
                <li>• Healing factor gameplay integration</li>
                <li>• Environmental takedowns</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6 border-2 border-yellow-200">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Deep Narrative</h3>
              <p className="text-gray-700 mb-4">
                Explore Logan's complex history, his time as Weapon X, and his struggle to find humanity within the beast.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Original story with comic influences</li>
                <li>• Character-driven plot</li>
                <li>• Moral choices and consequences</li>
                <li>• Multiple story arcs</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-200">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rich World</h3>
              <p className="text-gray-700 mb-4">
                Detailed environments ranging from Canadian wilderness to underground fight clubs and secret facilities.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Multiple distinct locations</li>
                <li>• Explorable open areas</li>
                <li>• Hidden collectibles and lore</li>
                <li>• Dynamic weather and time</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">PS5 Features</h3>
              <p className="text-gray-700 mb-4">
                Built specifically for PlayStation 5, leveraging all next-gen capabilities for an immersive experience.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• DualSense haptic feedback</li>
                <li>• Adaptive trigger effects</li>
                <li>• 3D audio support</li>
                <li>• Fast SSD loading</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Marvel Connections</h3>
              <p className="text-gray-700 mb-4">
                While standalone, the game exists in Insomniac's Marvel universe alongside Spider-Man and future titles.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Same universe as Spider-Man</li>
                <li>• Potential character cameos</li>
                <li>• Shared timeline and events</li>
                <li>• Easter eggs and references</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border-2 border-orange-200">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Visual Fidelity</h3>
              <p className="text-gray-700 mb-4">
                Insomniac's cutting-edge engine delivers stunning graphics, detailed character models, and cinematic presentation.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Ray-traced lighting and reflections</li>
                <li>• Performance and fidelity modes</li>
                <li>• Detailed facial animations</li>
                <li>• Dynamic destruction</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Development Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-yellow-600">
            The Team Behind It
          </h2>
          
          <div className="bg-gradient-to-r from-gray-50 to-yellow-50 rounded-xl p-8 border border-gray-200">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Insomniac Games</h3>
                <p className="text-gray-700 mb-4">
                  Founded in 1994, Insomniac Games is one of the most respected studios in the industry. They've created beloved 
                  franchises like Ratchet & Clank, Resistance, and most recently, Marvel's Spider-Man. Their Spider-Man games have 
                  sold over 33 million copies combined and won numerous awards.
                </p>
                <p className="text-gray-700 mb-4">
                  The studio was acquired by Sony Interactive Entertainment in 2019, becoming a first-party PlayStation developer. 
                  They're known for their technical excellence, rapid development cycles, and ability to deliver polished, 
                  high-quality games.
                </p>
                <p className="text-gray-700 mb-6">
                  <strong>Key Leadership:</strong> Creative Director Brian Horton and Game Director Cameron Christian are leading 
                  the Wolverine project, both veterans of the industry with credits on major AAA titles.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="https://insomniac.games" 
                    target="_blank"
                    className="inline-block bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition-colors font-medium"
                  >
                    Insomniac Games →
                  </Link>
                  <Link 
                    href="/blog?tag=insomniac-games" 
                    className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors font-medium"
                  >
                    Studio News →
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="font-bold text-lg mb-4">Studio Stats</h4>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-gray-500">Founded</dt>
                    <dd className="font-bold text-gray-900">1994</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Headquarters</dt>
                    <dd className="font-bold text-gray-900">Burbank, California</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Employees</dt>
                    <dd className="font-bold text-gray-900">400+</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Parent Company</dt>
                    <dd className="font-bold text-gray-900">Sony Interactive Entertainment</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Notable Games</dt>
                    <dd className="font-bold text-gray-900">Spider-Man, Ratchet & Clank</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* Release Window Speculation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-yellow-600">
            Release Window Speculation
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border-2 border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Current Estimates</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-gray-900 mb-2">Most Likely: Late 2026 to 2027</p>
                  <p className="text-sm text-gray-600">
                    Based on development timeline and Insomniac's release cadence. The game was announced in 2021, suggesting 
                    a 5-6 year development cycle is realistic for a project of this scope.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">Optimistic: Holiday 2026</p>
                  <p className="text-sm text-gray-600">
                    If development has been smooth and the team is ahead of schedule, a late 2026 release could position it 
                    as a major holiday title for PlayStation.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">Conservative: 2027 or Beyond</p>
                  <p className="text-sm text-gray-600">
                    Given the game's mature themes and ambitious scope, Insomniac may take extra time to ensure quality, 
                    especially after the 2023 security breach.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 border-2 border-orange-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What We're Watching</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-orange-600 text-xl mr-3">👀</span>
                  <div>
                    <p className="font-medium text-gray-900">PlayStation Showcases</p>
                    <p className="text-sm text-gray-600">Sony's major presentation events are where we'll likely see the first real gameplay</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 text-xl mr-3">📅</span>
                  <div>
                    <p className="font-medium text-gray-900">Fiscal Year Planning</p>
                    <p className="text-sm text-gray-600">Sony's release calendar and fiscal projections may hint at timing</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 text-xl mr-3">🎮</span>
                  <div>
                    <p className="font-medium text-gray-900">Game Awards & E3</p>
                    <p className="text-sm text-gray-600">Major gaming events could host trailer drops or gameplay reveals</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 text-xl mr-3">💼</span>
                  <div>
                    <p className="font-medium text-gray-900">Job Listings</p>
                    <p className="text-sm text-gray-600">Insomniac's hiring patterns can indicate development phase</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Community Expectations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-yellow-600">
            What Fans Want to See
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-yellow-400 transition-colors">
              <div className="text-4xl mb-3">🎭</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Classic Villains</h3>
              <p className="text-sm text-gray-700">
                Sabretooth, Silver Samurai, Omega Red, Lady Deathstrike—fans want to face off against iconic Wolverine antagonists.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-yellow-400 transition-colors">
              <div className="text-4xl mb-3">🦸</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">X-Men Cameos</h3>
              <p className="text-sm text-gray-700">
                Appearances from Cyclops, Jean Grey, Storm, or Professor X would delight fans while expanding Insomniac's Marvel universe.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-yellow-400 transition-colors">
              <div className="text-4xl mb-3">🏔️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Weapon X Program</h3>
              <p className="text-sm text-gray-700">
                Exploring Logan's traumatic past as Weapon X could provide emotional depth and terrifying gameplay sequences.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-yellow-400 transition-colors">
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Costume Variety</h3>
              <p className="text-sm text-gray-700">
                Multiple suits from Wolverine's comic history—classic yellow and blue, brown costume, X-Force, and more.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-yellow-400 transition-colors">
              <div className="text-4xl mb-3">🌃</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Madripoor Setting</h3>
              <p className="text-sm text-gray-700">
                The crime-ridden island nation would be a perfect setting for Wolverine's brutal brand of justice.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-yellow-400 transition-colors">
              <div className="text-4xl mb-3">🎬</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">New Game+</h3>
              <p className="text-sm text-gray-700">
                Post-game content with increased difficulty, new challenges, and ability carry-over for maximum replayability.
              </p>
            </div>
          </div>
        </section>

        {/* Pre-Order & Updates */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-yellow-600 to-red-600 rounded-xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Stay Updated on Marvel's Wolverine</h2>
            <p className="text-xl mb-8 text-yellow-50">
              Get the latest news, trailers, and release information as soon as it's announced
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="https://www.playstation.com" 
                target="_blank"
                className="inline-block bg-white text-yellow-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg"
              >
                PlayStation Store →
              </Link>
              <Link 
                href="/blog?tag=wolverine-game" 
                className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors font-bold text-lg"
              >
                Follow Our Coverage →
              </Link>
            </div>
          </div>
        </section>

        {/* Related Coverage */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-yellow-600">
            Related Coverage
          </h2>
          
          <div className="grid md:grid-cols-4 gap-4">
            <Link href="/blog?tag=playstation" className="bg-gray-50 hover:bg-gray-100 p-4 rounded-lg border border-gray-200 transition-colors">
              <p className="font-bold text-gray-900 mb-2">PlayStation News</p>
              <p className="text-sm text-gray-600">Latest PS5 games and exclusives</p>
            </Link>
            <Link href="/blog?tag=insomniac-games" className="bg-gray-50 hover:bg-gray-100 p-4 rounded-lg border border-gray-200 transition-colors">
              <p className="font-bold text-gray-900 mb-2">Insomniac Games</p>
              <p className="text-sm text-gray-600">Studio updates and projects</p>
            </Link>
            <Link href="/blog?tag=marvel-games" className="bg-gray-50 hover:bg-gray-100 p-4 rounded-lg border border-gray-200 transition-colors">
              <p className="font-bold text-gray-900 mb-2">Marvel Games</p>
              <p className="text-sm text-gray-600">Superhero game coverage</p>
            </Link>
            <Link href="/blog?tag=action-games" className="bg-gray-50 hover:bg-gray-100 p-4 rounded-lg border border-gray-200 transition-colors">
              <p className="font-bold text-gray-900 mb-2">Action Games</p>
              <p className="text-sm text-gray-600">Latest action-adventure titles</p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
