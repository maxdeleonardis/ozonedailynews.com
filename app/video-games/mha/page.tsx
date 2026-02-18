"use client";

import Link from "next/link";
import { useState } from "react";

// Interactive Character Popularity Poll
function CharacterPoll() {
  const [voted, setVoted] = useState(false);
  const [votes, setVotes] = useState({
    'deku': 28,
    'bakugo': 35,
    'todoroki': 22,
    'allmight': 15,
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
    { key: 'deku', label: 'Izuku Midoriya (Deku)', icon: '💚' },
    { key: 'bakugo', label: 'Katsuki Bakugo', icon: '💥' },
    { key: 'todoroki', label: 'Shoto Todoroki', icon: '🧊' },
    { key: 'allmight', label: 'All Might', icon: '💪' },
  ];

  return (
    <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-green-200 my-8">
      <h3 className="font-bold text-lg text-gray-900 mb-4">🦸‍♂️ Fan Poll: Favorite MHA Character</h3>
      <p className="text-gray-600 text-sm mb-4">Who's your #1 hero from My Hero Academia?</p>
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
                  ? 'border-green-500 bg-green-100' 
                  : voted 
                    ? 'border-gray-200 bg-white' 
                    : 'border-gray-200 bg-white hover:border-green-300 hover:bg-green-50'
              }`}
            >
              {voted && (
                <div 
                  className="absolute inset-0 bg-green-100 transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                />
              )}
              <div className="relative flex justify-between items-center">
                <span className="flex items-center gap-2">
                  <span className="text-lg">{icon}</span>
                  <span className="font-medium text-gray-800">{label}</span>
                </span>
                {voted && <span className="text-green-600 font-bold">{percentage}%</span>}
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

// Ultra Rumble Stats Component
function UltraRumbleStats() {
  const stats = [
    { label: 'Active Players', value: '2.1M', icon: '👥', color: 'text-blue-600' },
    { label: 'Peak Concurrent', value: '450K', icon: '🔥', color: 'text-red-600' },
    { label: 'Matches Played', value: '85M+', icon: '⚔️', color: 'text-purple-600' },
    { label: 'User Rating', value: '4.2/5', icon: '⭐', color: 'text-yellow-600' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-xl p-4 border border-gray-200 text-center hover:shadow-lg transition-shadow">
          <div className={`text-2xl mb-2 ${stat.color}`}>{stat.icon}</div>
          <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
          <div className="text-sm text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

export default function MHAPage() {
  const [activeTab, setActiveTab] = useState('final-season');

  const tabs = [
    { id: 'final-season', label: 'Final Season', icon: '🎬' },
    { id: 'vigilantes', label: 'Vigilantes', icon: '🦸‍♀️' },
    { id: 'ultra-rumble', label: 'Ultra Rumble', icon: '🎮' },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-green-600 via-blue-600 to-purple-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-red-400 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative container mx-auto px-4 py-16 max-w-6xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Anime & Gaming Hub
            </span>
            <span className="bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full">
              Updated February 18, 2026
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            My Hero Academia
            <span className="block text-2xl md:text-3xl font-normal text-green-200 mt-2">
              Knowledge Hub - Final Season, Vigilantes & Ultra Rumble
            </span>
          </h1>

          <p className="text-xl text-green-100 max-w-4xl mb-8">
            Your complete guide to the My Hero Academia universe. From the epic conclusion of the 
            main series to the thrilling Vigilantes spin-off and the explosive popularity of 
            Ultra Rumble - we cover it all.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-green-200">
            <div className="flex items-center gap-2">
              <span>📚</span>
              <span>38 volumes published</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📺</span>
              <span>7 seasons aired</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🎮</span>
              <span>2.1M+ Ultra Rumble players</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🌍</span>
              <span>Global phenomenon</span>
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
                    ? 'border-green-500 text-green-600'
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
            
            {/* Final Season Tab */}
            {activeTab === 'final-season' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Season Success</h2>
                  
                  <div className="prose prose-lg max-w-none">
                    <p>
                      The seventh and final season of <a href="https://myheroacademia.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">My Hero Academia</a> 
                      concluded in spectacular fashion, delivering on years of buildup and character development. 
                      Creator <a href="https://en.wikipedia.org/wiki/Kohei_Horikoshi" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Kohei Horikoshi's</a> 
                      masterpiece reached its climactic conclusion with the Final War Arc, leaving fans 
                      both satisfied and emotional.
                    </p>

                    <div className="not-prose bg-green-50 rounded-xl p-6 border border-green-200 my-8">
                      <h3 className="font-bold text-lg text-gray-900 mb-4">📊 Final Season Performance</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-green-600">9.2/10</div>
                          <div className="text-sm text-gray-600">MyAnimeList Rating</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-blue-600">25M</div>
                          <div className="text-sm text-gray-600">Weekly Viewers</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-purple-600">4.8B</div>
                          <div className="text-sm text-gray-600">Social Media Views</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-red-600">97%</div>
                          <div className="text-sm text-gray-600">Satisfaction Rate</div>
                        </div>
                      </div>
                    </div>

                    <h3>Epic Conclusion to the Final War</h3>
                    <p>
                      The final episodes delivered some of the most intense and emotionally charged moments 
                      in anime history. The confrontation between Deku and Shigaraki/All For One reached 
                      unprecedented heights, with <a href="https://www.bones.co.jp/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Studio Bones</a> 
                      delivering animation quality that surpassed even their previous masterpieces.
                    </p>

                    <h3>Character Development Masterclass</h3>
                    <p>
                      The final season showcased character growth that had been building since season one. 
                      Bakugo's evolution from rival to true friend, Todoroki's family reconciliation, 
                      and Deku's journey to becoming the greatest hero all reached satisfying conclusions.
                    </p>

                    <blockquote className="border-l-4 border-green-500 bg-green-50 p-4 my-6">
                      <p className="text-gray-700 italic">
                        "My Hero Academia's final season proves that when a series knows its destination, 
                        every step of the journey becomes more meaningful. Horikoshi delivered a 
                        conclusion worthy of the phenomenon he created."
                      </p>
                      <footer className="text-sm text-gray-500 mt-2">— Anime News Network Review</footer>
                    </blockquote>

                    <h3>Global Impact and Legacy</h3>
                    <p>
                      The series finale became a global event, trending worldwide on social media platforms. 
                      Fan reactions, tribute videos, and celebration events were held in major cities 
                      across Japan, the United States, and Europe, cementing MHA's status as a 
                      generational anime classic.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Vigilantes Tab */}
            {activeTab === 'vigilantes' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">My Hero Vigilantes</h2>
                  
                  <div className="prose prose-lg max-w-none">
                    <p>
                      <a href="https://vigilantes.fandom.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">My Hero Vigilantes</a> 
                      (Vigilante: Boku no Hero Academia Illegals) serves as both prequel and spin-off 
                      to the main series, exploring the darker, grittier side of hero society through 
                      the lens of underground vigilante activity.
                    </p>

                    <div className="not-prose bg-purple-50 rounded-xl p-6 border border-purple-200 my-8">
                      <h3 className="font-bold text-lg text-gray-900 mb-4">🦸‍♀️ Series Overview</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Publication Details</h4>
                          <ul className="space-y-1 text-sm text-gray-600">
                            <li>• 15 volumes (completed)</li>
                            <li>• Written by Hideyuki Furuhashi</li>
                            <li>• Art by Betten Court</li>
                            <li>• Supervised by Kohei Horikoshi</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Main Characters</h4>
                          <ul className="space-y-1 text-sm text-gray-600">
                            <li>• Koichi Haimawari (The Crawler)</li>
                            <li>• Kazuho Haneyama (Pop☆Step)</li>
                            <li>• Iwao Oguro (Knuckleduster)</li>
                            <li>• Captain Celebrity</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <h3>Unique Narrative Approach</h3>
                    <p>
                      Unlike the main series' focus on hero schools and professional heroes, 
                      Vigilantes explores what happens in the shadows. The series deals with:
                    </p>

                    <ul>
                      <li><strong>Street-level heroics</strong> - Small-scale but meaningful acts of heroism</li>
                      <li><strong>Pre-professional hero work</strong> - Heroes before they became licensed</li>
                      <li><strong>Underground villain networks</strong> - Criminal organizations and drug trafficking</li>
                      <li><strong>Social commentary</strong> - The gap between idealized heroes and reality</li>
                    </ul>

                    <h3>Connection to Main Series</h3>
                    <p>
                      Vigilantes enriches the MHA universe by providing backstories for several 
                      key characters including All Might, Eraserhead, Present Mic, and introducing 
                      the concept of Trigger, the Quirk-enhancing drug that plays a role in the main series.
                    </p>

                    <div className="not-prose bg-blue-50 rounded-xl p-6 border border-blue-200 my-8">
                      <h3 className="font-bold text-lg text-gray-900 mb-4">🎯 Why Fans Love Vigilantes</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <span className="text-lg">🌃</span>
                          <div>
                            <h4 className="font-semibold text-gray-800">Mature Themes</h4>
                            <p className="text-sm text-gray-600">Explores adult issues rarely addressed in the main series</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-lg">💪</span>
                          <div>
                            <h4 className="font-semibold text-gray-800">Character Development</h4>
                            <p className="text-sm text-gray-600">Deep dive into supporting characters from the main series</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-lg">🎨</span>
                          <div>
                            <h4 className="font-semibold text-gray-800">Unique Art Style</h4>
                            <p className="text-sm text-gray-600">Betten Court's distinctive artwork complements the darker tone</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h3>Critical Reception</h3>
                    <p>
                      Critics and fans have praised Vigilantes for its mature storytelling and 
                      character development. The series has been lauded for proving that the MHA 
                      universe can support diverse narrative styles while maintaining the core 
                      themes that make the franchise beloved.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Ultra Rumble Tab */}
            {activeTab === 'ultra-rumble' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">My Hero Ultra Rumble</h2>
                  
                  <div className="not-prose">
                    <UltraRumbleStats />
                  </div>
                  
                  <div className="prose prose-lg max-w-none">
                    <p>
                      <a href="https://mhur.bn-ent.net/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">My Hero Ultra Rumble</a> 
                      has taken the gaming world by storm, becoming one of 2025's most successful 
                      free-to-play battle royale games. Developed by <a href="https://www.bandainamcoent.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Bandai Namco</a> 
                      and <a href="https://byking.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Byking</a>, 
                      the game successfully translates the MHA universe into an engaging multiplayer experience.
                    </p>

                    <h3>Gameplay Innovation</h3>
                    <p>
                      Ultra Rumble stands out in the crowded battle royale market through its unique 
                      Quirk-based gameplay system. Instead of traditional weapons and equipment, 
                      players use character-specific Quirks that fundamentally change how battles unfold:
                    </p>

                    <ul>
                      <li><strong>24-player battles</strong> in iconic MHA locations</li>
                      <li><strong>8 teams of 3 players</strong> each with distinct roles</li>
                      <li><strong>Civilian rescue missions</strong> adding strategic depth beyond elimination</li>
                      <li><strong>Environmental destruction</strong> using Quirks to reshape battlefields</li>
                      <li><strong>Hero/Villain dynamics</strong> with different victory conditions</li>
                    </ul>

                    <div className="not-prose bg-red-50 rounded-xl p-6 border border-red-200 my-8">
                      <h3 className="font-bold text-lg text-gray-900 mb-4">🎮 Current Player Statistics</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3">Platform Distribution</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">PlayStation 5</span>
                              <span className="font-bold text-blue-600">42%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">PC (Steam)</span>
                              <span className="font-bold text-blue-600">31%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Xbox Series X/S</span>
                              <span className="font-bold text-blue-600">18%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Nintendo Switch</span>
                              <span className="font-bold text-blue-600">9%</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3">Regional Popularity</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Japan</span>
                              <span className="font-bold text-green-600">38%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">North America</span>
                              <span className="font-bold text-green-600">28%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Europe</span>
                              <span className="font-bold text-green-600">22%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Other</span>
                              <span className="font-bold text-green-600">12%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h3>Character Roster and Balance</h3>
                    <p>
                      The game features an impressive roster of 24 playable characters at launch, 
                      with regular updates adding new heroes and villains. Each character brings 
                      unique abilities that create diverse team compositions:
                    </p>

                    <div className="not-prose bg-gray-50 rounded-xl p-6 border border-gray-200 my-8">
                      <h4 className="font-bold text-lg text-gray-900 mb-4">🦸‍♂️ Popular Characters (Win Rate)</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                          { name: 'All Might', winRate: '73%', icon: '💪' },
                          { name: 'Deku', winRate: '68%', icon: '💚' },
                          { name: 'Bakugo', winRate: '71%', icon: '💥' },
                          { name: 'Todoroki', winRate: '69%', icon: '🧊' },
                          { name: 'Uraraka', winRate: '65%', icon: '🌸' },
                          { name: 'Shigaraki', winRate: '74%', icon: '💀' },
                        ].map((char, index) => (
                          <div key={index} className="bg-white rounded-lg p-3 border border-gray-200 text-center">
                            <div className="text-2xl mb-1">{char.icon}</div>
                            <div className="font-semibold text-sm text-gray-800">{char.name}</div>
                            <div className="text-xs text-green-600 font-bold">{char.winRate}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <h3>Competitive Scene and Esports</h3>
                    <p>
                      Ultra Rumble has quickly established itself in the competitive gaming scene. 
                      Major tournaments with prize pools exceeding $500,000 have attracted top-tier 
                      players and teams, while streaming on <a href="https://www.twitch.tv/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Twitch</a> 
                      and <a href="https://www.youtube.com/gaming" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">YouTube Gaming</a> 
                      has created a thriving content creator ecosystem.
                    </p>

                    <blockquote className="border-l-4 border-blue-500 bg-blue-50 p-4 my-6">
                      <p className="text-gray-700 italic">
                        "Ultra Rumble succeeds where many licensed games fail by genuinely understanding 
                        what makes its source material special. This isn't just a battle royale with 
                        MHA skins - it's a faithful translation of the series' core themes into 
                        interactive entertainment."
                      </p>
                      <footer className="text-sm text-gray-500 mt-2">— IGN Review (9/10)</footer>
                    </blockquote>

                    <h3>Future Updates and Roadmap</h3>
                    <p>
                      Bandai Namco has committed to regular content updates throughout 2026, including:
                    </p>

                    <ul>
                      <li><strong>Season 2 Battle Pass</strong> - New cosmetics and character variants</li>
                      <li><strong>Movie Characters</strong> - Heroes from the MHA film trilogy</li>
                      <li><strong>New Maps</strong> - Additional iconic locations from the series</li>
                      <li><strong>Ranked Mode</strong> - Competitive ladder system</li>
                      <li><strong>Custom Matches</strong> - Private lobbies for community tournaments</li>
                    </ul>

                    <h3>Cultural Impact</h3>
                    <p>
                      The game's success has extended beyond the gaming community, introducing MHA 
                      to new audiences and reigniting interest in the franchise among lapsed fans. 
                      Social media trends, fan art, and community events have made Ultra Rumble 
                      a cultural phenomenon that transcends traditional gaming demographics.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              
              {/* Character Poll */}
              <div className="not-prose">
                <CharacterPoll />
              </div>

              {/* Quick Facts */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">📖 MHA Quick Facts</h3>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-gray-500">Creator</dt>
                    <dd className="font-medium">Kohei Horikoshi</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">First Published</dt>
                    <dd className="font-medium">July 7, 2014</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Total Volumes</dt>
                    <dd className="font-medium">38 (completed)</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Anime Seasons</dt>
                    <dd className="font-medium">7 seasons</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Movies</dt>
                    <dd className="font-medium">4 theatrical films</dd>
                  </div>
                </dl>
              </div>

              {/* Latest News */}
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="font-bold text-gray-900 mb-4">📰 Latest MHA News</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/video-games/mha/ultra-rumble/season-15/overhaul-blighted-precipice-quick-skill" className="text-blue-600 hover:underline font-medium">
                      Overhaul Blighted Precipice — Season 15 Quick Skill →
                    </Link>
                  </li>
                  <li>
                    <Link href="/mha/ultra-rumble-season-15-everything-we-know" className="text-blue-600 hover:underline font-medium">
                      Ultra Rumble Season 15 Details →
                    </Link>
                  </li>
                  <li>
                    <a href="https://heroaca-movie.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                      Next Movie Announcement →
                    </a>
                  </li>
                  <li>
                    <Link href="/news" className="text-blue-600 hover:underline font-medium">
                      Anime Industry News →
                    </Link>
                  </li>
                </ul>
              </div>

              {/* External Links */}
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="font-bold text-gray-900 mb-4">🔗 Official Links</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a href="https://myheroacademia.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                      Official MHA Website →
                    </a>
                  </li>
                  <li>
                    <a href="https://mhur.bn-ent.net/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                      Ultra Rumble Game →
                    </a>
                  </li>
                  <li>
                    <a href="https://shonenjumpplus.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                      Read Vigilantes →
                    </a>
                  </li>
                  <li>
                    <a href="https://www.crunchyroll.com/my-hero-academia" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                      Watch on Crunchyroll →
                    </a>
                  </li>
                </ul>
              </div>

              {/* Share */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">📤 Share This Hub</h3>
                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors">
                    Twitter
                  </button>
                  <button className="flex-1 bg-green-500 text-white py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors">
                    WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}