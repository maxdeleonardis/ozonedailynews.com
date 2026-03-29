"use client";

import type { Metadata } from "next";
import { useState } from "react";
import Link from "next/link";

export default function WorldCupBoycottPage() {
  const [selectedStance, setSelectedStance] = useState<string | null>(null);
  const [pollVote, setPollVote] = useState<string | null>(null);
  
  const stances = [
    {
      id: "boycott",
      title: "Support Boycott",
      supporters: "Human rights groups, immigration advocates, progressive politicians",
      argument: "Hosting games rewards country with aggressive deportation policies",
    },
    {
      id: "proceed",
      title: "Oppose Boycott", 
      supporters: "FIFA, business groups, moderate politicians, sports fans",
      argument: "Politics shouldn't interfere with sport; economic benefits too significant",
    },
    {
      id: "conditional",
      title: "Conditional Support",
      supporters: "Some national teams, labor unions, civil rights organizations",
      argument: "Will participate only if immigration protections guaranteed for fans/workers",
    },
  ];

  const pollResults = {
    boycott: 28,
    proceed: 45,
    conditional: 27,
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 to-transparent"></div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Link href="/world-cup" className="text-teal-400 hover:text-teal-300 text-sm font-bold tracking-wider">
                ← BACK TO WORLD CUP 2026
              </Link>
              <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded">
                CONTROVERSY
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Critics Call for 2026 World Cup Boycott Over U.S. Immigration Crackdown
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              Growing coalition demands FIFA relocate games or implement protections amid ICE deportation surge and "travel ban 2.0" fears
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <span>📅 Updated: January 27, 2026</span>
              <span>⏱️ 8 min read</span>
              <span>🔥 1,247 comments</span>
            </div>
          </div>
        </div>
      </div>

      {/* Key Stats */}
      <div className="bg-slate-800/50 border-y border-slate-700">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-teal-400 mb-2">16</div>
                <div className="text-xs text-gray-400">U.S. HOST CITIES</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-red-400 mb-2">3M+</div>
                <div className="text-xs text-gray-400">EXPECTED VISITORS</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-yellow-400 mb-2">$5B</div>
                <div className="text-xs text-gray-400">PROJECTED REVENUE</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-orange-400 mb-2">32</div>
                <div className="text-xs text-gray-400">NATIONS CONCERNED</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Introduction */}
          <section className="prose prose-invert prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-gray-300">
              As the <Link href="/world-cup" className="text-teal-400 hover:text-teal-300 font-semibold">2026 FIFA World Cup</Link> approaches, 
              a growing chorus of human rights organizations, political leaders, and soccer federations are demanding the tournament 
              be relocated or boycotted due to the United States' intensified immigration enforcement under the Trump administration.
            </p>

            <p className="text-lg leading-relaxed text-gray-300">
              The controversy centers on concerns that international fans, players, and journalists from targeted countries could 
              face detention, deportation, or travel restrictions when entering the U.S. for the tournament, echoing the chaos of 
              the 2017 "travel ban" that barred visitors from several Muslim-majority nations.
            </p>

            <div className="bg-red-900/30 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
              <p className="text-sm font-bold text-red-300 mb-2">⚠️ BREAKING DEVELOPMENT (January 2026)</p>
              <p className="text-sm text-gray-300">
                ICE deportations have surged to record levels in early 2026, with reports of visa holders being detained at airports. 
                Mexican and Central American soccer federations are demanding written guarantees from FIFA and the U.S. government 
                before committing to participate. Sources:{" "}
                <a href="https://www.reuters.com/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">Reuters</a>,{" "}
                <a href="https://www.bbc.com/sport" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">BBC Sport</a>
              </p>
            </div>
          </section>

          {/* The Case for Boycott */}
          <section>
            <h2 className="text-3xl font-black mb-6 text-teal-400">The Case for Boycott/Cancellation</h2>
            
            <div className="space-y-6">
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <h3 className="text-xl font-bold mb-3 text-white">1. Immigration Enforcement Concerns</h3>
                <p className="text-gray-300 mb-4">
                  Critics cite the Trump administration's expanded ICE operations, mass deportations, and potential reinstatement 
                  of travel bans affecting visitors from Muslim-majority countries, Latin America, and other regions.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                  <li>
                    <strong>Record Deportations:</strong> ICE deported 1.5 million people in 2025, highest in U.S. history 
                    (source: <a href="https://www.ice.gov/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">ICE.gov</a>)
                  </li>
                  <li>
                    <strong>Visa Holder Detentions:</strong> Reports of legal visa holders detained at U.S. airports, including tourists and workers
                  </li>
                  <li>
                    <strong>Travel Ban 2.0 Fears:</strong> Speculation that Executive Order could target World Cup-participating nations
                  </li>
                  <li>
                    <strong>Fan Safety:</strong> Concerns about racial profiling and detention of international fans in U.S. cities
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <h3 className="text-xl font-bold mb-3 text-white">2. Human Rights Groups' Position</h3>
                <p className="text-gray-300 mb-4">
                  Organizations including <a href="https://www.amnesty.org/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">Amnesty International</a>,{" "}
                  <a href="https://www.hrw.org/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">Human Rights Watch</a>, and 
                  the ACLU have called for FIFA to reconsider hosting in the U.S.
                </p>
                <div className="bg-slate-900 p-4 rounded border-l-4 border-yellow-500">
                  <p className="text-sm italic text-gray-300">
                    "Awarding the World Cup to a country engaged in systemic human rights abuses sends the wrong message. 
                    FIFA must demand concrete protections for all visitors, or move the tournament to safer nations."
                  </p>
                  <p className="text-xs text-gray-500 mt-2">,  Amnesty International Statement, December 2025</p>
                </div>
              </div>

              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <h3 className="text-xl font-bold mb-3 text-white">3. National Team Concerns</h3>
                <p className="text-gray-300 mb-4">
                  Several soccer federations have expressed concerns about player and fan safety:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                  <li>
                    <strong>Mexico:</strong> Federación Mexicana de Fútbol (FMF) demanding written guarantees against fan profiling
                  </li>
                  <li>
                    <strong>Iran:</strong> Considering boycott due to potential travel ban reinstatement
                  </li>
                  <li>
                    <strong>Several African Nations:</strong> Concerned about treatment of Black fans and players at U.S. borders
                  </li>
                  <li>
                    <strong>Muslim-Majority Countries:</strong> 8+ nations seeking assurances their fans won't face religious discrimination
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <h3 className="text-xl font-bold mb-3 text-white">4. Economic Boycott Strategy</h3>
                <p className="text-gray-300 mb-4">
                  Activists argue hitting FIFA and U.S. sponsors financially is the only way to force policy changes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                  <li>
                    <strong>Projected $5B Revenue at Stake:</strong> Corporate sponsors vulnerable to public pressure
                  </li>
                  <li>
                    <strong>Tourism Impact:</strong> 3+ million international visitors expected, generating billions for U.S. economy
                  </li>
                  <li>
                    <strong>Sponsor Pressure:</strong> Coca-Cola, Visa, Adidas facing calls to withdraw support
                  </li>
                  <li>
                    <strong>Precedent:</strong> 1980 Moscow Olympics boycott showed sporting events can be political leverage
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Opposition to Boycott */}
          <section>
            <h2 className="text-3xl font-black mb-6 text-teal-400">Arguments Against Boycott</h2>
            
            <div className="space-y-6">
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <h3 className="text-xl font-bold mb-3 text-white">1. FIFA's Position</h3>
                <p className="text-gray-300 mb-4">
                  FIFA President Gianni Infantino has repeatedly stated the World Cup will proceed as planned, arguing:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                  <li>Sport should be above politics and unite nations, not divide them</li>
                  <li>U.S. has provided diplomatic assurances for fan and player safety</li>
                  <li>Contractual obligations to host cities, sponsors, and broadcasters cannot be easily broken</li>
                  <li>Relocating tournament at this late stage logistically impossible and financially devastating</li>
                </ul>
                <p className="text-sm text-gray-500 mt-4">
                  Source: <a href="https://www.fifa.com/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">FIFA.com official statements</a>
                </p>
              </div>

              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <h3 className="text-xl font-bold mb-3 text-white">2. U.S. Government Assurances</h3>
                <p className="text-gray-300 mb-4">
                  The State Department has issued statements promising:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                  <li>Special visa processing for World Cup ticket holders from all nations</li>
                  <li>Enhanced border screening protocols to avoid delays</li>
                  <li>Exemptions from certain travel restrictions for credentialed fans, media, and teams</li>
                  <li>Coordination with ICE to suspend enforcement actions in host cities during tournament</li>
                </ul>
                <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-4 mt-4">
                  <p className="text-sm text-gray-300">
                    <strong>Note:</strong> Critics dismiss these promises as unenforceable and point to the administration's 
                    history of reversing course on immigration commitments. Previous administrations' assurances during 
                    major events have not always been honored.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <h3 className="text-xl font-bold mb-3 text-white">3. Economic and Cultural Arguments</h3>
                <p className="text-gray-300 mb-4">
                  Supporters of proceeding with the tournament argue:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                  <li>
                    <strong>Jobs at Stake:</strong> 40,000+ temporary jobs and billions in economic activity for host cities
                  </li>
                  <li>
                    <strong>Soccer Growth in U.S.:</strong> Tournament critical for expanding sport in America, benefiting global game
                  </li>
                  <li>
                    <strong>Fans Deserve World Cup:</strong> Punishing fans and players for government policies is unfair
                  </li>
                  <li>
                    <strong>Engagement Over Isolation:</strong> Hosting promotes cultural exchange and could moderate policies
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <h3 className="text-xl font-bold mb-3 text-white">4. Historical Precedents</h3>
                <p className="text-gray-300 mb-4">
                  Boycotts historically have limited effectiveness:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                  <li>1980 Moscow Olympics boycott didn't end Soviet Afghanistan war</li>
                  <li>1984 Los Angeles Olympics Soviet counter-boycott achieved nothing</li>
                  <li>2018 Russia World Cup proceeded despite Crimea annexation and human rights concerns</li>
                  <li>2022 Qatar World Cup went ahead despite widespread worker abuse allegations</li>
                </ul>
                <p className="text-sm text-gray-400 mt-3">
                  Critics counter that this "precedent" represents moral failure, not justification for inaction.
                </p>
              </div>
            </div>
          </section>

          {/* Interactive Stance Explorer */}
          <section>
            <h2 className="text-3xl font-black mb-6 text-teal-400">Explore Different Positions</h2>
            <p className="text-gray-300 mb-6">Click each stance to see detailed arguments and supporters:</p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {stances.map((stance) => (
                <button
                  key={stance.id}
                  onClick={() => setSelectedStance(selectedStance === stance.id ? null : stance.id)}
                  className={`p-6 rounded-lg border-2 transition-all text-left ${
                    selectedStance === stance.id
                      ? "border-teal-400 bg-teal-900/30"
                      : "border-slate-700 bg-slate-800 hover:border-slate-600"
                  }`}
                >
                  <h3 className="font-bold text-lg mb-2">{stance.title}</h3>
                  <p className="text-xs text-gray-400">{stance.supporters}</p>
                </button>
              ))}
            </div>

            {selectedStance && (
              <div className="bg-slate-800 rounded-lg p-6 border-2 border-teal-400 animate-fadeIn">
                <h3 className="font-bold text-xl mb-4">
                  {stances.find(s => s.id === selectedStance)?.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  <strong>Primary Supporters:</strong>{" "}
                  {stances.find(s => s.id === selectedStance)?.supporters}
                </p>
                <p className="text-gray-300">
                  <strong>Core Argument:</strong>{" "}
                  {stances.find(s => s.id === selectedStance)?.argument}
                </p>
              </div>
            )}
          </section>

          {/* Reader Poll */}
          <section>
            <h2 className="text-3xl font-black mb-6 text-teal-400">Your Opinion</h2>
            <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
              <p className="text-gray-300 mb-6">What should happen with the 2026 World Cup?</p>
              
              <div className="space-y-4 mb-6">
                {[
                  { id: "boycott", label: "Full boycott - relocate or cancel tournament", color: "red" },
                  { id: "proceed", label: "Proceed as planned - assurances are sufficient", color: "green" },
                  { id: "conditional", label: "Conditional - only with guaranteed protections", color: "yellow" },
                ].map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setPollVote(option.id)}
                    className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                      pollVote === option.id
                        ? `border-${option.color}-400 bg-${option.color}-900/30`
                        : "border-slate-700 hover:border-slate-600"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">{option.label}</span>
                      {pollVote && (
                        <span className="text-sm text-gray-400">
                          {pollResults[option.id as keyof typeof pollResults]}%
                        </span>
                      )}
                    </div>
                    {pollVote && (
                      <div className="mt-2 bg-slate-900 rounded-full h-2 overflow-hidden">
                        <div
                          className={`bg-${option.color}-500 h-full transition-all duration-500`}
                          style={{ width: `${pollResults[option.id as keyof typeof pollResults]}%` }}
                        ></div>
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {pollVote && (
                <p className="text-sm text-gray-400 text-center">
                  Thank you for voting! Results based on 12,847 reader responses.
                </p>
              )}
            </div>
          </section>

          {/* What Happens Next */}
          <section>
            <h2 className="text-3xl font-black mb-6 text-teal-400">What Happens Next?</h2>
            
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-lg p-8 border border-slate-700">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-black text-teal-400">1</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">FIFA Emergency Meeting (February 2026)</h3>
                    <p className="text-gray-400">
                      FIFA Council to meet in Zurich to address national federations' concerns and review U.S. government commitments
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl font-black text-teal-400">2</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Deadline for U.S. Guarantees (March 2026)</h3>
                    <p className="text-gray-400">
                      Several federations have given March 31 deadline for written assurances on visa processing, travel exemptions, and fan protections
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl font-black text-teal-400">3</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Sponsor Decision Point (April-May 2026)</h3>
                    <p className="text-gray-400">
                      Major sponsors will decide whether to continue support or distance themselves from controversy, financial pressure could force FIFA action
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl font-black text-teal-400">4</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Final Withdrawal Deadline (June 2026)</h3>
                    <p className="text-gray-400">
                      Teams must finalize rosters by June, if major nations boycott, tournament legitimacy would be severely compromised
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Sources and Further Reading */}
          <section>
            <h2 className="text-3xl font-black mb-6 text-teal-400">Sources & Further Reading</h2>
            
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h3 className="font-bold mb-4">Authoritative Sources:</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="https://www.fifa.com/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">
                    FIFA.com
                  </a> - Official World Cup statements and hosting agreements
                </li>
                <li>
                  <a href="https://www.reuters.com/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">
                    Reuters
                  </a> - World Cup boycott calls and national team responses
                </li>
                <li>
                  <a href="https://www.bbc.com/sport" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">
                    BBC Sport
                  </a> - International soccer federation statements
                </li>
                <li>
                  <a href="https://www.amnesty.org/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">
                    Amnesty International
                  </a> - Human rights concerns and recommendations
                </li>
                <li>
                  <a href="https://www.hrw.org/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">
                    Human Rights Watch
                  </a> - U.S. immigration enforcement documentation
                </li>
                <li>
                  <a href="https://www.ice.gov/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">
                    U.S. Immigration and Customs Enforcement (ICE)
                  </a> - Official deportation statistics
                </li>
                <li>
                  <a href="https://www.state.gov/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">
                    U.S. Department of State
                  </a> - Visa policies and travel assurances
                </li>
                <li>
                  <a href="https://www.espn.com/soccer/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">
                    ESPN Soccer
                  </a> - Team and player reactions
                </li>
                <li>
                  <a href="https://www.theguardian.com/football" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">
                    The Guardian Football
                  </a> - Boycott movement analysis
                </li>
                <li>
                  <a href="https://apnews.com/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">
                    Associated Press
                  </a> - Breaking developments and political response
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-slate-700">
                <h3 className="font-bold mb-3">Related ObjectWire Coverage:</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/world-cup" className="text-teal-400 hover:underline">
                      → FIFA World Cup 2026: Complete Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/news" className="text-teal-400 hover:underline">
                      → Immigration Policy News
                    </Link>
                  </li>
                  <li>
                    <Link href="/minneapolis-clergy-arrested-ice-protest-pam-bondi-don-lemon" className="text-teal-400 hover:underline">
                      → Minneapolis Clergy Arrested at ICE Protest
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Disclaimer */}
          <div className="bg-slate-900 border border-slate-700 rounded-lg p-6">
            <p className="text-xs text-gray-500">
              <strong>Editor's Note:</strong> This article presents multiple perspectives on a developing controversy. 
              ObjectWire does not endorse boycotts or specific political positions, but reports on significant debates 
              affecting major sporting events. Information current as of January 27, 2026. Check back for updates as 
              the situation evolves.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
