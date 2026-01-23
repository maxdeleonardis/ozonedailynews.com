import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Survivor Season 50 - Historic Milestone Season | ObjectWire",
  description: "Everything about Survivor Season 50, the historic milestone season. Cast rumors, location speculation, theme details, and what to expect from this landmark edition of the reality competition.",
  keywords: ["Survivor Season 50", "Survivor 50", "CBS Survivor", "reality TV", "Jeff Probst", "Survivor 2026"],
  alternates: {
    canonical: 'https://www.objectwire.org/survivor',
  },
};

export default function SurvivorPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-700 via-red-700 to-orange-800 text-white">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-4">
              🏝️ HISTORIC MILESTONE SEASON
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
              Survivor Season 50
            </h1>
            <p className="text-xl md:text-2xl text-gray-50 mb-8 leading-relaxed">
              CBS's legendary reality competition reaches an <strong className="text-white">unprecedented milestone</strong> with 
              its 50th season, promising the <strong className="text-white">biggest twists, most epic challenges, 
              and unforgettable moments</strong> in the show's 25-year history.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <p className="text-3xl font-bold text-white mb-1">50</p>
                <p className="text-xs text-gray-100">Seasons</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <p className="text-3xl font-bold text-white mb-1">25</p>
                <p className="text-xs text-gray-100">Years</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <p className="text-3xl font-bold text-white mb-1">$1M</p>
                <p className="text-xs text-gray-100">Grand Prize</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <p className="text-3xl font-bold text-white mb-1">39</p>
                <p className="text-xs text-gray-100">Days</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        
        {/* Breaking News Alert */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-600 rounded-lg p-6">
            <div className="flex items-start">
              <span className="text-3xl mr-4">🔥</span>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">JUST ANNOUNCED</h3>
                <p className="text-gray-700 mb-3">
                  CBS has officially confirmed Survivor Season 50 will premiere in <strong>Fall 2026</strong> with a 
                  special <strong>90-minute premiere episode</strong>. Jeff Probst promises this will be 
                  "the most ambitious season we've ever attempted."
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Last Updated:</strong> January 15, 2026
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Season Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-orange-600">
            What We Know About Season 50
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">A Historic Milestone</h3>
              <p className="text-gray-700 mb-4">
                Survivor Season 50 marks a quarter-century of the groundbreaking reality competition that changed 
                television forever. Since its debut in May 2000, Survivor has become a cultural phenomenon, launching 
                countless careers and creating some of the most memorable moments in TV history.
              </p>
              <p className="text-gray-700 mb-4">
                For this landmark season, CBS and production company SEG (Survivor Entertainment Group) are pulling 
                out all the stops. Early reports suggest a format that honors the show's past while pushing into 
                bold new territory with twists never before seen in the franchise.
              </p>
              <p className="text-gray-700 mb-4">
                Host Jeff Probst, who has been with the show since day one, has teased that Season 50 will feature 
                "elements that fans have been requesting for years" along with surprises that will "redefine what 
                Survivor can be."
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border-2 border-orange-200">
              <h3 className="font-bold text-xl mb-4 text-gray-900">Season Details</h3>
              <dl className="space-y-4">
                <div className="border-b border-orange-200 pb-3">
                  <dt className="text-sm text-gray-600 mb-1">Season Number</dt>
                  <dd className="font-bold text-gray-900 text-lg">50</dd>
                </div>
                <div className="border-b border-orange-200 pb-3">
                  <dt className="text-sm text-gray-600 mb-1">Premiere Date</dt>
                  <dd className="font-bold text-gray-900">Fall 2026 (Exact date TBA)</dd>
                </div>
                <div className="border-b border-orange-200 pb-3">
                  <dt className="text-sm text-gray-600 mb-1">Network</dt>
                  <dd className="font-bold text-gray-900">CBS & Paramount+</dd>
                </div>
                <div className="border-b border-orange-200 pb-3">
                  <dt className="text-sm text-gray-600 mb-1">Host</dt>
                  <dd className="font-bold text-gray-900">Jeff Probst</dd>
                </div>
                <div className="border-b border-orange-200 pb-3">
                  <dt className="text-sm text-gray-600 mb-1">Length</dt>
                  <dd className="font-bold text-gray-900">39 Days (Classic Format)</dd>
                </div>
                <div className="border-b border-orange-200 pb-3">
                  <dt className="text-sm text-gray-600 mb-1">Location</dt>
                  <dd className="font-bold text-gray-900">Fiji (Rumored: Special location)</dd>
                </div>
                <div className="border-b border-orange-200 pb-3">
                  <dt className="text-sm text-gray-600 mb-1">Contestants</dt>
                  <dd className="font-bold text-gray-900">20+ (Rumored: Expanded cast)</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-600 mb-1">Grand Prize</dt>
                  <dd className="font-bold text-green-600 text-lg">$1,000,000</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* Theme & Format Speculation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-orange-600">
            Theme & Format Speculation
          </h2>
          
          <div className="space-y-6">
            {/* Confirmed Elements */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">✅</span>
                <h3 className="text-xl font-bold text-gray-900">Confirmed Elements</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 text-lg mr-3 mt-1">•</span>
                  <div>
                    <p className="font-medium text-gray-900">Return to Classic 39-Day Format</p>
                    <p className="text-sm text-gray-600">After seasons 41-49 featured the condensed 26-day format, Season 50 returns to the full 39 days</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 text-lg mr-3 mt-1">•</span>
                  <div>
                    <p className="font-medium text-gray-900">90-Minute Premiere Special</p>
                    <p className="text-sm text-gray-600">Extended premiere to kick off the milestone season</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 text-lg mr-3 mt-1">•</span>
                  <div>
                    <p className="font-medium text-gray-900">Jeff Probst Hosting</p>
                    <p className="text-sm text-gray-600">The legendary host returns for his 50th season</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 text-lg mr-3 mt-1">•</span>
                  <div>
                    <p className="font-medium text-gray-900">Reunion Show</p>
                    <p className="text-sm text-gray-600">Live reunion special featuring surprise guests from all 50 seasons</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Rumored Twists */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border-2 border-yellow-300">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🤔</span>
                <h3 className="text-xl font-bold text-gray-900">Rumored Twists & Features</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-yellow-600 text-lg mr-3 mt-1">•</span>
                  <div>
                    <p className="font-medium text-gray-900">"Legends vs. Newbies" Theme</p>
                    <p className="text-sm text-gray-600">Returning winners competing against first-time players</p>
                    <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded mt-1">UNCONFIRMED</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 text-lg mr-3 mt-1">•</span>
                  <div>
                    <p className="font-medium text-gray-900">Expanded Cast of 24 Players</p>
                    <p className="text-sm text-gray-600">Largest cast in modern Survivor history</p>
                    <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded mt-1">RUMORED</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 text-lg mr-3 mt-1">•</span>
                  <div>
                    <p className="font-medium text-gray-900">Special Location Outside Fiji</p>
                    <p className="text-sm text-gray-600">Possible return to an iconic past location like Australia or Pearl Islands</p>
                    <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded mt-1">SPECULATION</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 text-lg mr-3 mt-1">•</span>
                  <div>
                    <p className="font-medium text-gray-900">Increased Prize Money</p>
                    <p className="text-sm text-gray-600">Rumors of $2 million grand prize for the milestone season</p>
                    <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded mt-1">SPECULATION</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 text-lg mr-3 mt-1">•</span>
                  <div>
                    <p className="font-medium text-gray-900">Fan Vote Twist</p>
                    <p className="text-sm text-gray-600">Viewers potentially influencing game elements</p>
                    <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded mt-1">RUMORED</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 text-lg mr-3 mt-1">•</span>
                  <div>
                    <p className="font-medium text-gray-900">Classic Challenges Return</p>
                    <p className="text-sm text-gray-600">Iconic challenges from past seasons making a comeback</p>
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded mt-1">LIKELY</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Casting & Players */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-orange-600">
            Casting & Potential Players
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">🆕 New Players</h3>
              <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
                <p className="text-gray-700 mb-4">
                  CBS opened casting for Season 50 in late 2025, with applications flooding in from superfans 
                  eager to be part of the historic milestone season. Casting directors have emphasized they're 
                  looking for "characters who embody the spirit of Survivor."
                </p>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <p className="text-sm font-medium text-gray-900 mb-2">What Casting is Looking For:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Strategic gamers with fresh ideas</li>
                    <li>• Physically fit competitors</li>
                    <li>• Diverse backgrounds and perspectives</li>
                    <li>• Compelling personal stories</li>
                    <li>• True Survivor superfans</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">🏆 Potential Returnees</h3>
              <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
                <p className="text-gray-700 mb-4">
                  If the "Legends vs. Newbies" theme proves true, fans are speculating about which past winners 
                  or memorable players might return. Social media has been buzzing with wishlists.
                </p>
                <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                  <p className="text-sm font-medium text-gray-900 mb-2">Fan-Requested Returnees:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Parvati Shallow (Winner, S16)</li>
                    <li>• Tony Vlachos (2-time winner)</li>
                    <li>• Sandra Diaz-Twine (2-time winner)</li>
                    <li>• Boston Rob Mariano (Winner, S22)</li>
                    <li>• Cirie Fields (Fan favorite)</li>
                    <li>• Yul Kwon (Winner, S13)</li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-3 italic">Note: No returnees officially confirmed</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Production Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-orange-600">
            Production Timeline
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-green-500 rounded-full p-3 mr-4">
                <span className="text-white font-bold">✓</span>
              </div>
              <div className="flex-1">
                <div className="bg-white rounded-lg p-4 border-2 border-green-200">
                  <p className="font-bold text-gray-900 mb-1">Q4 2025 - Casting Complete</p>
                  <p className="text-sm text-gray-600">Final cast selected and medicals completed</p>
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-500 rounded-full p-3 mr-4">
                <span className="text-white font-bold">→</span>
              </div>
              <div className="flex-1">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border-2 border-blue-200">
                  <p className="font-bold text-gray-900 mb-1">Q1 2026 - Pre-Production</p>
                  <p className="text-sm text-gray-600">Location scouting, challenge design, crew preparation</p>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mt-2">IN PROGRESS</span>
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-orange-500 rounded-full p-3 mr-4">
                <span className="text-white font-bold">◉</span>
              </div>
              <div className="flex-1">
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg p-4 border-2 border-orange-200">
                  <p className="font-bold text-gray-900 mb-1">Spring 2026 - Filming</p>
                  <p className="text-sm text-gray-600">39 days of competition (April-May estimated)</p>
                  <span className="inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded mt-2">UPCOMING</span>
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-purple-500 rounded-full p-3 mr-4">
                <span className="text-white font-bold">○</span>
              </div>
              <div className="flex-1">
                <div className="bg-white rounded-lg p-4 border-2 border-purple-200">
                  <p className="font-bold text-gray-900 mb-1">Summer 2026 - Post-Production</p>
                  <p className="text-sm text-gray-600">Editing, music, promo creation</p>
                  <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded mt-2">FUTURE</span>
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-red-600 rounded-full p-3 mr-4">
                <span className="text-white font-bold text-lg">📺</span>
              </div>
              <div className="flex-1">
                <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-lg p-4 border-2 border-red-200">
                  <p className="font-bold text-gray-900 mb-1">Fall 2026 - Premiere</p>
                  <p className="text-sm text-gray-600">90-minute premiere event on CBS (September-October estimated)</p>
                  <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded mt-2">ANTICIPATED</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Jeff Probst's Comments */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-orange-600">
            What Jeff Probst Is Saying
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border-l-4 border-orange-600">
              <p className="text-gray-700 text-lg italic mb-3">
                "Season 50 is going to be everything fans love about Survivor, amplified. We're honoring our history 
                while creating the future of the show. I can't wait for people to see what we have planned."
              </p>
              <p className="text-sm text-gray-600">— Jeff Probst, December 2025 interview</p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-blue-600">
              <p className="text-gray-700 text-lg italic mb-3">
                "The 39-day format is back because this season deserves the epic scope. We're not rushing anything. 
                We want to let the story breathe and give these players the full Survivor experience."
              </p>
              <p className="text-sm text-gray-600">— Jeff Probst, CBS upfronts, November 2025</p>
            </div>
            
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border-l-4 border-yellow-600">
              <p className="text-gray-700 text-lg italic mb-3">
                "We listened to the fans. Season 50 incorporates elements that people have been asking for, but we're 
                also taking risks. Some twists will surprise even the most hardcore Survivor scholars."
              </p>
              <p className="text-sm text-gray-600">— Jeff Probst, Entertainment Weekly, January 2026</p>
            </div>
          </div>
        </section>

        {/* Survivor Legacy */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-orange-600">
            25 Years of Survivor
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border-2 border-orange-200 text-center">
              <p className="text-4xl font-bold text-gray-900 mb-2">50</p>
              <p className="text-sm text-gray-600">Seasons</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200 text-center">
              <p className="text-4xl font-bold text-gray-900 mb-2">750+</p>
              <p className="text-sm text-gray-600">Episodes Aired</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200 text-center">
              <p className="text-4xl font-bold text-gray-900 mb-2">800+</p>
              <p className="text-sm text-gray-600">Contestants</p>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 border-2 border-red-200 text-center">
              <p className="text-4xl font-bold text-gray-900 mb-2">25</p>
              <p className="text-sm text-gray-600">Years on Air</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Show That Changed Television</h3>
            <p className="text-gray-700 mb-4">
              When Survivor premiered on May 31, 2000, it revolutionized television. The show's blend of social strategy, 
              physical competition, and survival elements created a new genre that spawned countless imitators but never 
              equals.
            </p>
            <p className="text-gray-700 mb-4">
              Over 25 years, Survivor has taken viewers to exotic locations around the world, from the Australian Outback 
              to the Pearl Islands of Panama to the Fiji islands that have become its home base. The show has created 
              cultural touchstones, launched careers, and introduced gameplay concepts that are now part of the lexicon.
            </p>
            <p className="text-gray-700 mb-4">
              Season 50 represents not just a number, but a testament to Survivor's enduring appeal and its ability to 
              evolve while maintaining the core elements that made it special from day one.
            </p>
          </div>
        </section>

        {/* Iconic Moments to Revisit */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-orange-600">
            Iconic Moments Leading to Season 50
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
              <div className="text-4xl mb-3">🔥</div>
              <h3 className="font-bold text-gray-900 mb-2">The First Vote</h3>
              <p className="text-sm text-gray-600 mb-2">Season 1 - Borneo</p>
              <p className="text-sm text-gray-700">
                Richard Hatch's strategic gameplay set the template for 49 seasons to follow
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
              <div className="text-4xl mb-3">🐐</div>
              <h3 className="font-bold text-gray-900 mb-2">Boston Rob & Amber</h3>
              <p className="text-sm text-gray-600 mb-2">Season 8 - All-Stars</p>
              <p className="text-sm text-gray-700">
                Romance, strategy, and a proposal that became reality TV gold
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
              <div className="text-4xl mb-3">👑</div>
              <h3 className="font-bold text-gray-900 mb-2">Sandra's Second Win</h3>
              <p className="text-sm text-gray-600 mb-2">Season 20 - Heroes vs. Villains</p>
              <p className="text-sm text-gray-700">
                "The Queen stays Queen" - becoming the only two-time winner (at the time)
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
              <div className="text-4xl mb-3">🕵️</div>
              <h3 className="font-bold text-gray-900 mb-2">Tony's Spy Bunker</h3>
              <p className="text-sm text-gray-600 mb-2">Season 28 - Cagayan</p>
              <p className="text-sm text-gray-700">
                Chaotic gameplay that somehow led to a million-dollar win
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
              <div className="text-4xl mb-3">🌟</div>
              <h3 className="font-bold text-gray-900 mb-2">David vs. Goliath</h3>
              <p className="text-sm text-gray-600 mb-2">Season 37</p>
              <p className="text-sm text-gray-700">
                One of the most beloved modern seasons with incredible gameplay
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
              <div className="text-4xl mb-3">🏝️</div>
              <h3 className="font-bold text-gray-900 mb-2">Winners at War</h3>
              <p className="text-sm text-gray-600 mb-2">Season 40</p>
              <p className="text-sm text-gray-700">
                All-winner season with $2M prize and Edge of Extinction drama
              </p>
            </div>
          </div>
        </section>

        {/* How to Watch */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-orange-600">
            How to Watch Season 50
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">📺 Live Broadcast</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-600 text-lg mr-3">•</span>
                  <div>
                    <p className="font-medium text-gray-900">CBS Television Network</p>
                    <p className="text-gray-600">Wednesday nights at 8/7c (schedule TBA)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-lg mr-3">•</span>
                  <div>
                    <p className="font-medium text-gray-900">90-Minute Premiere</p>
                    <p className="text-gray-600">Extended premiere episode to kick off the season</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">📱 Streaming</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="text-purple-600 text-lg mr-3">•</span>
                  <div>
                    <p className="font-medium text-gray-900">Paramount+</p>
                    <p className="text-gray-600">Stream live and on-demand (with subscription)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 text-lg mr-3">•</span>
                  <div>
                    <p className="font-medium text-gray-900">CBS.com</p>
                    <p className="text-gray-600">Next-day streaming with cable login</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Fan Community */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-orange-600">
            Join the Survivor Community
          </h2>
          
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-8 border-2 border-orange-200">
            <p className="text-gray-700 mb-6">
              Survivor has one of the most passionate fan communities in television. With Season 50 approaching, 
              fans are more engaged than ever, sharing theories, casting predictions, and excitement for the milestone season.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-2">💬</div>
                <p className="font-bold text-gray-900 mb-1">Reddit</p>
                <p className="text-sm text-gray-600">r/survivor - 500K+ members discussing every episode</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🐦</div>
                <p className="font-bold text-gray-900 mb-1">Twitter/X</p>
                <p className="text-sm text-gray-600">#Survivor trends during every episode</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🎙️</div>
                <p className="font-bold text-gray-900 mb-1">Podcasts</p>
                <p className="text-sm text-gray-600">Dozens of podcasts analyzing strategy</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-orange-700 via-red-700 to-orange-800 rounded-xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">The Tribe Has Spoken</h2>
            <p className="text-xl mb-8 text-gray-50">
              Stay tuned for more updates as Season 50 approaches. The adventure of a lifetime awaits.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://www.cbs.com/shows/survivor/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-orange-700 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg"
              >
                Visit CBS Survivor →
              </a>
              <a 
                href="https://www.paramountplus.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg hover:bg-yellow-300 transition-colors font-bold text-lg"
              >
                Stream on Paramount+ →
              </a>
            </div>
          </div>
        </section>

        {/* Related Coverage */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-orange-600">
            Related Coverage
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog?tag=survivor" className="bg-gray-50 hover:bg-gray-100 rounded-lg overflow-hidden border border-gray-200 transition-all hover:shadow-lg">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 h-32 flex items-center justify-center">
                <span className="text-white text-5xl">📰</span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">Latest Survivor News</h3>
                <p className="text-gray-600 text-sm">
                  Breaking updates, cast rumors, and Season 50 coverage.
                </p>
              </div>
            </Link>

            <Link href="/beast-games" className="bg-gray-50 hover:bg-gray-100 rounded-lg overflow-hidden border border-gray-200 transition-all hover:shadow-lg">
              <div className="bg-gradient-to-r from-red-600 to-orange-600 h-32 flex items-center justify-center">
                <span className="text-white text-5xl">🎮</span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">Beast Games</h3>
                <p className="text-gray-600 text-sm">
                  MrBeast's reality competition with record-breaking prize.
                </p>
              </div>
            </Link>

            <Link href="/news" className="bg-gray-50 hover:bg-gray-100 rounded-lg overflow-hidden border border-gray-200 transition-all hover:shadow-lg">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-32 flex items-center justify-center">
                <span className="text-white text-5xl">📡</span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">All News</h3>
                <p className="text-gray-600 text-sm">
                  Latest entertainment and reality TV coverage.
                </p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
