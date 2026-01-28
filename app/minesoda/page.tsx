"use client";

import Link from "next/link";
import { useState } from "react";

// Interactive Poll Component
function MinnesotaPoll() {
  const [voted, setVoted] = useState(false);
  const [votes, setVotes] = useState({
    'economy': 32,
    'crime': 28,
    'education': 24,
    'healthcare': 16,
  });
  const [selected, setSelected] = useState<string | null>(null);

  const handleVote = (option: string) => {
    if (voted) return;
    setVotes(prev => ({ ...prev, [option]: prev[option as keyof typeof prev] + 1 }));
    setSelected(option);
    setVoted(true);
  };

  const totalVotes = Object.values(votes).reduce((a, b) => a + b, 0);

  const options = [
    { key: 'economy', label: 'Economy & Jobs', icon: '💼' },
    { key: 'crime', label: 'Public Safety', icon: '🚔' },
    { key: 'education', label: 'Education', icon: '📚' },
    { key: 'healthcare', label: 'Healthcare', icon: '🏥' },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200 my-8">
      <h3 className="font-bold text-lg text-gray-900 mb-4">🗳️ Poll: Top Minnesota Priority</h3>
      <p className="text-gray-600 text-sm mb-4">What issue should Minnesota focus on most?</p>
      <div className="space-y-3">
        {options.map(({ key, label, icon }) => {
          const percentage = Math.round((votes[key as keyof typeof votes] / totalVotes) * 100);
          return (
            <button
              key={key}
              onClick={() => handleVote(key)}
              disabled={voted}
              className={`w-full text-left p-3 rounded-lg border transition-all relative overflow-hidden ${
                selected === key 
                  ? 'border-blue-500 bg-blue-100' 
                  : voted 
                    ? 'border-gray-200 bg-white' 
                    : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50'
              }`}
            >
              {voted && (
                <div 
                  className="absolute inset-0 bg-blue-100 transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                />
              )}
              <div className="relative flex justify-between items-center">
                <span className="flex items-center gap-2">
                  <span className="text-lg">{icon}</span>
                  <span className="font-medium text-gray-800">{label}</span>
                </span>
                {voted && <span className="text-blue-600 font-bold">{percentage}%</span>}
              </div>
            </button>
          );
        })}
      </div>
      {voted && (
        <p className="text-xs text-gray-500 mt-3 text-center">{totalVotes} total votes</p>
      )}
    </div>
  );
}

// Timeline Component
function MinnesotaTimeline() {
  const events = [
    {
      date: '2020',
      title: 'Summer of Love',
      description: 'Minneapolis becomes epicenter of national protests following George Floyd\'s death',
      color: 'bg-red-500',
    },
    {
      date: '2021',
      title: 'Feeding Our Future Suspended',
      description: 'Minnesota Department of Education attempts to halt nonprofit amid fraud concerns',
      color: 'bg-yellow-500',
    },
    {
      date: '2022',
      title: 'FBI Raids',
      description: 'Federal agents raid multiple locations in massive fraud investigation',
      color: 'bg-orange-500',
    },
    {
      date: '2023',
      title: 'Tim Walz Re-elected',
      description: 'Governor secures second term with focus on education and healthcare',
      color: 'bg-blue-500',
    },
    {
      date: '2024',
      title: 'VP Nomination',
      description: 'Tim Walz selected as Democratic vice presidential candidate',
      color: 'bg-purple-500',
    },
    {
      date: '2026',
      title: 'Ongoing Investigations',
      description: 'Multiple fraud cases continue through federal courts',
      color: 'bg-gray-500',
    },
  ];

  return (
    <div className="my-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6">📅 Minnesota Timeline</h3>
      <div className="space-y-4">
        {events.map((event, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className={`${event.color} w-3 h-3 rounded-full mt-2 flex-shrink-0`} />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-sm text-gray-900">{event.date}</span>
                <span className="text-lg font-semibold text-gray-800">{event.title}</span>
              </div>
              <p className="text-gray-600 text-sm">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MinesodaPage() {
  const [activeTab, setActiveTab] = useState('summer-of-love');

  const tabs = [
    { id: 'summer-of-love', label: 'Summer of Love', icon: '✊' },
    { id: 'fraud-investigation', label: 'Fraud Cases', icon: '🕵️' },
    { id: 'tim-walz', label: 'Tim Walz', icon: '🏛️' },
    { id: 'recent-incidents', label: 'Recent News', icon: '📰' },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-blue-700 via-purple-700 to-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-400 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative container mx-auto px-4 py-16 max-w-6xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              State News Hub
            </span>
            <span className="bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full">
              Updated January 15, 2026
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Minnesota
            <span className="block text-2xl md:text-3xl font-normal text-blue-200 mt-2">
              Complete State Coverage - Summer of Love, Fraud Cases & More
            </span>
          </h1>

          <p className="text-xl text-blue-100 max-w-4xl mb-8">
            Your comprehensive source for Minnesota news and investigations. From the historic 2020 
            Summer of Love protests to major fraud investigations, political developments, and 
            breaking news across the Land of 10,000 Lakes.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-blue-200">
            <div className="flex items-center gap-2">
              <span>🏙️</span>
              <span>Twin Cities Metro</span>
            </div>
            <div className="flex items-center gap-2">
              <span>⚖️</span>
              <span>Federal investigations</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🏛️</span>
              <span>State politics</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📊</span>
              <span>Live updates</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 max-w-6xl">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid lg:grid-cols-4 gap-12">
          
          {/* Main Content Area */}
          <div className="lg:col-span-3">
            
            {/* Summer of Love Tab */}
            {activeTab === 'summer-of-love' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Summer of Love 2020</h2>
                  
                  <div className="prose prose-lg max-w-none">
                    <p>
                      The term <a href="https://en.wikipedia.org/wiki/George_Floyd_protests_in_Minneapolis%E2%80%93Saint_Paul" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">"Summer of Love"</a> 
                      became associated with the widespread protests in Minneapolis following the death of 
                      <a href="https://en.wikipedia.org/wiki/George_Floyd" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">George Floyd</a> 
                      on May 25, 2020. What began as peaceful demonstrations evolved into a national 
                      movement that reshaped conversations about police reform and racial justice.
                    </p>

                    <div className="not-prose bg-red-50 rounded-xl p-6 border border-red-200 my-8">
                      <h3 className="font-bold text-lg text-gray-900 mb-4">📊 Summer 2020 Impact</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-red-600">163</div>
                          <div className="text-sm text-gray-600">Buildings Damaged</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-orange-600">$500M+</div>
                          <div className="text-sm text-gray-600">Property Damage</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-purple-600">26M</div>
                          <div className="text-sm text-gray-600">Protesters Nationwide</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-blue-600">140+</div>
                          <div className="text-sm text-gray-600">Cities Affected</div>
                        </div>
                      </div>
                    </div>

                    <h3>The Epicenter: Minneapolis</h3>
                    <p>
                      Minneapolis became the focal point of a national reckoning with police brutality. 
                      The area around the <a href="https://www.minneapolismn.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Third Precinct</a> 
                      saw some of the most intense demonstrations, including the burning of the police 
                      station on May 28, 2020.
                    </p>

                    <h3>Key Locations and Events</h3>
                    <ul>
                      <li><strong>38th and Chicago (George Floyd Square)</strong> - Site of Floyd's death, became memorial and protest epicenter</li>
                      <li><strong>Third Precinct Building</strong> - Police station abandoned and burned during protests</li>
                      <li><strong>Lake Street Corridor</strong> - Major commercial area heavily affected by civil unrest</li>
                      <li><strong>Government Plaza</strong> - Site of ongoing protests and demonstrations</li>
                    </ul>

                    <blockquote className="border-l-4 border-red-500 bg-red-50 p-4 my-6">
                      <p className="text-gray-700 italic">
                        "The protests in Minneapolis weren't just about one incident - they represented 
                        decades of accumulated frustration with police practices and systemic inequality. 
                        The 'Summer of Love' term, while controversial, reflected both the unity of 
                        purpose among protesters and the complex nature of the movement."
                      </p>
                      <footer className="text-sm text-gray-500 mt-2">— Local community organizer</footer>
                    </blockquote>

                    <h3>Long-term Consequences</h3>
                    <p>
                      The events of summer 2020 led to significant policy changes including:
                    </p>
                    <ul>
                      <li>Minneapolis police department restructuring initiatives</li>
                      <li>Increased funding for community-based safety programs</li>
                      <li>Enhanced officer accountability measures</li>
                      <li>Economic development programs for affected neighborhoods</li>
                    </ul>

                    <h3>Recovery and Rebuilding</h3>
                    <p>
                      The recovery process has been ongoing, with various initiatives aimed at 
                      rebuilding damaged areas and addressing underlying community concerns. 
                      Organizations like <a href="https://www.weloveyouguys.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">We Love You Guys Foundation</a> 
                      and local business coalitions have worked to restore economic vitality to affected corridors.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Fraud Investigation Tab */}
            {activeTab === 'fraud-investigation' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Major Fraud Investigations</h2>
                  
                  <div className="prose prose-lg max-w-none">
                    <p>
                      Minnesota has been at the center of several high-profile fraud investigations, 
                      most notably the <a href="https://www.justice.gov/opa/pr/federal-grand-jury-indicts-47-defendants-alleged-250-million-feeding-our-future-fraud-scheme" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Feeding Our Future</a> 
                      case - one of the largest pandemic-era fraud schemes in U.S. history involving 
                      the theft of $250 million from federal child nutrition programs.
                    </p>

                    <div className="not-prose bg-yellow-50 rounded-xl p-6 border border-yellow-200 my-8">
                      <h3 className="font-bold text-lg text-gray-900 mb-4">🕵️ Feeding Our Future by Numbers</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-yellow-600">$250M</div>
                          <div className="text-sm text-gray-600">Total Alleged Fraud</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-red-600">70</div>
                          <div className="text-sm text-gray-600">Defendants Indicted</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-orange-600">200+</div>
                          <div className="text-sm text-gray-600">Fraudulent Sites</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-blue-600">24</div>
                          <div className="text-sm text-gray-600">Guilty Pleas</div>
                        </div>
                      </div>
                    </div>

                    <h3>How the Scheme Operated</h3>
                    <p>
                      The fraud exploited COVID-19 emergency provisions designed to feed children 
                      during school closures. Defendants allegedly:
                    </p>
                    <ul>
                      <li><strong>Falsified meal counts</strong> - Claimed to serve millions of meals that were never provided</li>
                      <li><strong>Created shell organizations</strong> - Established fake nonprofits to multiply claims</li>
                      <li><strong>Fabricated documentation</strong> - Manufactured attendance records and invoices</li>
                      <li><strong>Money laundering</strong> - Converted stolen funds into luxury goods and real estate</li>
                    </ul>

                    <h3>Key Figures</h3>
                    <p>
                      <strong>Aimee Bock</strong>, founder of Feeding Our Future, faces federal charges 
                      including wire fraud and money laundering conspiracy. Prosecutors allege she 
                      accepted bribes to approve fraudulent applications and ignored obvious red flags.
                    </p>

                    <h3>Nick Shirley Investigation Series</h3>
                    <p>
                      Independent journalist <a href="https://www.youtube.com/@NickShirley" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Nick Shirley</a> 
                      has produced comprehensive investigative content covering the Feeding Our Future 
                      case, interviewing key figures and uncovering additional details about the 
                      fraud scheme's scope and impact.
                    </p>

                    <div className="not-prose bg-blue-50 rounded-xl p-6 border border-blue-200 my-8">
                      <h4 className="font-bold text-lg text-gray-900 mb-3">📺 Latest Investigation</h4>
                      <p className="text-gray-700 mb-4">
                        Nick Shirley recently released the second part of his fraud investigation, 
                        providing new insights into the case's development and ongoing federal proceedings.
                      </p>
                      <Link href="/minesoda/nick-shirley-drops-second-part-of-fraud-investigation" 
                            className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        <span>Read Full Coverage</span>
                        <span>→</span>
                      </Link>
                    </div>

                    <h3>Other Notable Cases</h3>
                    <ul>
                      <li><strong>PolyMet Mining fraud allegations</strong> - Environmental permit violations</li>
                      <li><strong>St. Jude Medical device fraud</strong> - Healthcare technology misrepresentations</li>
                      <li><strong>Minnesota Unemployment insurance fraud</strong> - Pandemic-era benefit schemes</li>
                    </ul>

                    <h3>Impact and Recovery</h3>
                    <p>
                      The fraud cases have prompted significant oversight improvements in federal 
                      nutrition programs and enhanced verification procedures. Recovery efforts 
                      have focused on legitimate program participants and communities affected 
                      by the scheme's disruption.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Tim Walz Tab */}
            {activeTab === 'tim-walz' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Governor Tim Walz</h2>
                  
                  <div className="prose prose-lg max-w-none">
                    <p>
                      <a href="https://mn.gov/governor/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Tim Walz</a> 
                      has served as Minnesota's 41st Governor since 2019, leading the state through 
                      significant challenges including the COVID-19 pandemic, civil unrest following 
                      George Floyd's death, and his historic selection as the Democratic vice 
                      presidential candidate in 2024.
                    </p>

                    <div className="not-prose bg-purple-50 rounded-xl p-6 border border-purple-200 my-8">
                      <h3 className="font-bold text-lg text-gray-900 mb-4">🏛️ Political Profile</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Background</h4>
                          <ul className="space-y-1 text-sm text-gray-600">
                            <li>• Born: April 6, 1964 (West Point, NE)</li>
                            <li>• Education: Chadron State College, Minnesota State Mankato</li>
                            <li>• Military: Army National Guard (24 years)</li>
                            <li>• Previous: High school teacher and coach</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Political Career</h4>
                          <ul className="space-y-1 text-sm text-gray-600">
                            <li>• U.S. House (2007-2019)</li>
                            <li>• Minnesota Governor (2019-present)</li>
                            <li>• DFL (Democratic) Party</li>
                            <li>• 2024 VP nominee</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <h3>Key Policy Initiatives</h3>
                    <p>
                      Governor Walz has championed several major initiatives during his tenure:
                    </p>

                    <ul>
                      <li><strong>Education Investment</strong> - Increased school funding and teacher support programs</li>
                      <li><strong>Healthcare Expansion</strong> - MinnesotaCare expansion and prescription drug reforms</li>
                      <li><strong>Climate Action</strong> - Clean energy standards and carbon neutrality goals</li>
                      <li><strong>Public Safety Reform</strong> - Police accountability measures post-2020</li>
                      <li><strong>Economic Recovery</strong> - COVID-19 business relief and infrastructure investment</li>
                    </ul>

                    <h3>Response to 2020 Unrest</h3>
                    <p>
                      Walz faced criticism from multiple directions for his handling of the civil 
                      unrest following George Floyd's death. He deployed the <a href="https://mn.gov/portal/government/military/minnesota-national-guard/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Minnesota National Guard</a> 
                      and implemented curfews while also supporting police reform efforts.
                    </p>

                    <blockquote className="border-l-4 border-purple-500 bg-purple-50 p-4 my-6">
                      <p className="text-gray-700 italic">
                        "I take full responsibility for the response to the civil unrest. We learned 
                        valuable lessons about community engagement and the importance of swift, 
                        coordinated action during crisis situations."
                      </p>
                      <footer className="text-sm text-gray-500 mt-2">— Governor Tim Walz, 2021</footer>
                    </blockquote>

                    <h3>2024 Vice Presidential Campaign</h3>
                    <p>
                      Walz's selection as <a href="https://kamalaharris.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Kamala Harris's</a> 
                      running mate brought national attention to his record as governor and his 
                      appeal to Midwest voters. His teaching background and military service were 
                      highlighted as key qualifications.
                    </p>

                    <div className="not-prose bg-green-50 rounded-xl p-6 border border-green-200 my-8">
                      <h4 className="font-bold text-lg text-gray-900 mb-3">🎯 Current Focus Areas</h4>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <span className="text-lg">📚</span>
                          <div>
                            <h5 className="font-semibold text-gray-800">Education Excellence</h5>
                            <p className="text-sm text-gray-600">Universal pre-K and free school meals expansion</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-lg">🏥</span>
                          <div>
                            <h5 className="font-semibold text-gray-800">Healthcare Access</h5>
                            <p className="text-sm text-gray-600">Reproductive rights protection and affordability measures</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-lg">🌱</span>
                          <div>
                            <h5 className="font-semibold text-gray-800">Clean Energy</h5>
                            <p className="text-sm text-gray-600">Carbon-free electricity by 2040 goal</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h3>Approval Ratings and Challenges</h3>
                    <p>
                      Walz maintains generally positive approval ratings in Minnesota, though he 
                      faces ongoing challenges including budget negotiations, infrastructure needs, 
                      and balancing diverse regional interests across the state.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Recent Incidents Tab */}
            {activeTab === 'recent-incidents' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Recent News & Incidents</h2>
                  
                  <div className="prose prose-lg max-w-none">
                    <p>
                      Stay updated on the latest developments across Minnesota, from breaking news 
                      to ongoing investigations and policy updates affecting residents throughout 
                      the state.
                    </p>

                    <div className="not-prose grid gap-6 my-8">
                      {[
                        {
                          title: "Icy Conditions Lead to Multiple Vehicle Incidents",
                          date: "January 14, 2026",
                          excerpt: "Minnesota State Patrol reports increased incidents due to freezing rain across metro areas.",
                          category: "Weather",
                          urgent: true,
                        },
                        {
                          title: "New Federal Investigation into State Contracts",
                          date: "January 12, 2026", 
                          excerpt: "Federal authorities examining procurement processes for state technology contracts.",
                          category: "Investigation",
                          urgent: false,
                        },
                        {
                          title: "Minneapolis City Council Budget Hearing",
                          date: "January 10, 2026",
                          excerpt: "Public safety funding allocations under debate as city finalizes 2026 budget.",
                          category: "Politics",
                          urgent: false,
                        },
                        {
                          title: "Ice Fishing Tournament Safety Alert",
                          date: "January 8, 2026",
                          excerpt: "DNR issues warnings about ice conditions ahead of major fishing competitions.",
                          category: "Safety",
                          urgent: true,
                        },
                      ].map((item, index) => (
                        <div key={index} className={`bg-white rounded-xl p-6 border-l-4 ${
                          item.urgent ? 'border-red-500 bg-red-50' : 'border-blue-500'
                        } shadow-sm`}>
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <span className={`text-xs font-bold px-2 py-1 rounded uppercase ${
                                  item.urgent ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
                                }`}>
                                  {item.category}
                                </span>
                                <span className="text-xs text-gray-500">{item.date}</span>
                              </div>
                              <h3 className="font-semibold text-lg text-gray-900 mb-2">{item.title}</h3>
                              <p className="text-gray-600 text-sm">{item.excerpt}</p>
                            </div>
                            <div className={`w-3 h-3 rounded-full ${
                              item.urgent ? 'bg-red-500 animate-pulse' : 'bg-blue-500'
                            }`} />
                          </div>
                        </div>
                      ))}
                    </div>

                    <h3>Weather and Safety Updates</h3>
                    <p>
                      Minnesota's winter conditions continue to create challenges for residents and 
                      travelers. Recent freezing rain events have led to multiple vehicle incidents, 
                      particularly affecting the <a href="https://www.dot.state.mn.us/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">I-35 and I-94 corridors</a>. 
                      The <a href="https://dps.mn.gov/divisions/msp/Pages/default.aspx" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Minnesota State Patrol</a> 
                      advises extreme caution during travel.
                    </p>

                    <h3>Ongoing Federal Investigations</h3>
                    <p>
                      Beyond the Feeding Our Future case, federal authorities are examining various 
                      aspects of state operations, including technology procurement processes and 
                      contract award procedures. These investigations reflect increased scrutiny 
                      of government operations following high-profile fraud cases.
                    </p>

                    <h3>Legislative Session Preview</h3>
                    <p>
                      The 2026 Minnesota legislative session is expected to focus on several key areas:
                    </p>
                    <ul>
                      <li><strong>Public Safety Funding</strong> - Balancing community programs with law enforcement</li>
                      <li><strong>Education Investments</strong> - Expanding successful pre-K programs</li>
                      <li><strong>Healthcare Access</strong> - Building on previous reforms</li>
                      <li><strong>Infrastructure</strong> - Addressing aging transportation systems</li>
                    </ul>

                    <h3>Economic Development</h3>
                    <p>
                      Minnesota continues to attract technology companies and manufacturing 
                      investments, with recent announcements including expanded healthcare 
                      technology operations in the Twin Cities metro area.
                    </p>

                    <div className="not-prose bg-gray-50 rounded-xl p-6 border border-gray-200 my-8">
                      <h4 className="font-bold text-lg text-gray-900 mb-3">📱 Stay Connected</h4>
                      <p className="text-gray-700 mb-4">
                        Follow our Minnesota coverage for the latest updates on investigations, 
                        politics, and breaking news affecting the state.
                      </p>
                      <div className="flex gap-3">
                        <Link href="/news" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                          All News
                        </Link>
                        <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                          Newsletter
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              
              {/* Poll */}
              <div className="not-prose">
                <MinnesotaPoll />
              </div>

              {/* Timeline */}
              <div className="not-prose bg-white rounded-xl p-6 border border-gray-200">
                <MinnesotaTimeline />
              </div>

              {/* Quick Facts */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">📖 Minnesota Quick Facts</h3>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-gray-500">Population</dt>
                    <dd className="font-medium">5.7 million</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Governor</dt>
                    <dd className="font-medium">Tim Walz (DFL)</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Capital</dt>
                    <dd className="font-medium">Saint Paul</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Largest City</dt>
                    <dd className="font-medium">Minneapolis</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">State Motto</dt>
                    <dd className="font-medium">L'Étoile du Nord</dd>
                  </div>
                </dl>
              </div>

              {/* Latest Articles */}
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="font-bold text-gray-900 mb-4">📰 Latest Coverage</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/minesoda/nick-shirley-drops-second-part-of-fraud-investigation" className="text-blue-600 hover:underline font-medium">
                      Nick Shirley's Latest Investigation →
                    </Link>
                  </li>
                  <li>
                    <Link href="/minnesota-feeding-our-future-fraud" className="text-blue-600 hover:underline font-medium">
                      Complete Fraud Case Analysis →
                    </Link>
                  </li>
                  <li>
                    <Link href="/news" className="text-blue-600 hover:underline font-medium">
                      All Minnesota News →
                    </Link>
                  </li>
                </ul>
              </div>

              {/* External Links */}
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="font-bold text-gray-900 mb-4">🔗 Official Resources</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a href="https://mn.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                      State of Minnesota →
                    </a>
                  </li>
                  <li>
                    <a href="https://www.minneapolismn.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                      City of Minneapolis →
                    </a>
                  </li>
                  <li>
                    <a href="https://www.stpaul.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                      City of Saint Paul →
                    </a>
                  </li>
                  <li>
                    <a href="https://www.justice.gov/usao-mn" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                      U.S. Attorney's Office →
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}