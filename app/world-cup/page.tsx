"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

// Countdown Timer Component - FIFA Minimal Style
function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const worldCupDate = new Date("2026-06-11T00:00:00"); // Opening match date

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = worldCupDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center gap-8 md:gap-12">
      {[
        { value: timeLeft.days, label: "DAYS" },
        { value: timeLeft.hours, label: "HRS" },
        { value: timeLeft.minutes, label: "MIN" },
        { value: timeLeft.seconds, label: "SEC" },
      ].map((item, idx) => (
        <div key={item.label} className="text-center">
          <div className="text-5xl md:text-7xl font-black text-teal-400 mb-2 tabular-nums">
            {item.value.toString().padStart(2, "0")}
          </div>
          <div className="text-xs md:text-sm uppercase tracking-[0.3em] text-gray-400 font-bold">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}

// Host Cities Map Component
function HostCitiesMap() {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const hostCities = [
    { name: "Mexico City", country: "🇲🇽 Mexico", stadium: "Estadio Azteca", capacity: "87,523", matches: 5 },
    { name: "Guadalajara", country: "🇲🇽 Mexico", stadium: "Estadio Akron", capacity: "46,232", matches: 4 },
    { name: "Monterrey", country: "🇲🇽 Mexico", stadium: "Estadio BBVA", capacity: "53,500", matches: 4 },
    { name: "New York/NJ", country: "🇺🇸 USA", stadium: "MetLife Stadium", capacity: "82,500", matches: 8 },
    { name: "Los Angeles", country: "🇺🇸 USA", stadium: "SoFi Stadium", capacity: "70,240", matches: 8 },
    { name: "Dallas", country: "🇺🇸 USA", stadium: "AT&T Stadium", capacity: "80,000", matches: 9 },
    { name: "Atlanta", country: "🇺🇸 USA", stadium: "Mercedes-Benz Stadium", capacity: "71,000", matches: 8 },
    { name: "Miami", country: "🇺🇸 USA", stadium: "Hard Rock Stadium", capacity: "64,767", matches: 7 },
    { name: "Seattle", country: "🇺🇸 USA", stadium: "Lumen Field", capacity: "68,740", matches: 6 },
    { name: "San Francisco", country: "🇺🇸 USA", stadium: "Levi's Stadium", capacity: "68,500", matches: 6 },
    { name: "Boston", country: "🇺🇸 USA", stadium: "Gillette Stadium", capacity: "65,878", matches: 7 },
    { name: "Philadelphia", country: "🇺🇸 USA", stadium: "Lincoln Financial Field", capacity: "67,594", matches: 6 },
    { name: "Kansas City", country: "🇺🇸 USA", stadium: "Arrowhead Stadium", capacity: "76,416", matches: 6 },
    { name: "Houston", country: "🇺🇸 USA", stadium: "NRG Stadium", capacity: "72,220", matches: 7 },
    { name: "Vancouver", country: "🇨🇦 Canada", stadium: "BC Place", capacity: "54,500", matches: 7 },
    { name: "Toronto", country: "🇨🇦 Canada", stadium: "BMO Field", capacity: "45,500", matches: 6 },
  ];

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {hostCities.map((city) => (
          <button
            key={city.name}
            onClick={() => setSelectedCity(selectedCity === city.name ? null : city.name)}
            className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
              selectedCity === city.name
                ? "border-red-600 bg-red-50 shadow-lg scale-105"
                : "border-gray-200 hover:border-red-400 hover:shadow-md"
            }`}
          >
            <div className="font-bold text-lg mb-1">{city.name}</div>
            <div className="text-sm text-gray-600">{city.country}</div>
            <div className="text-xs text-red-600 font-semibold mt-2">
              {city.matches} matches
            </div>
          </button>
        ))}
      </div>

      {selectedCity && (
        <div className="bg-gradient-to-r from-red-600 to-purple-600 text-white p-6 rounded-xl shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
          {hostCities
            .filter((city) => city.name === selectedCity)
            .map((city) => (
              <div key={city.name}>
                <h3 className="text-2xl font-bold mb-4">{city.name}</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <div className="text-red-100 text-sm mb-1">Stadium</div>
                    <div className="font-semibold text-lg">{city.stadium}</div>
                  </div>
                  <div>
                    <div className="text-red-100 text-sm mb-1">Capacity</div>
                    <div className="font-semibold text-lg">{city.capacity}</div>
                  </div>
                  <div>
                    <div className="text-red-100 text-sm mb-1">Total Matches</div>
                    <div className="font-semibold text-lg">{city.matches}</div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

// Qualified Teams Tracker
function QualifiedTeamsTracker() {
  const [selectedConfederation, setSelectedConfederation] = useState("ALL");

  const qualifiedTeams = [
    { name: "USA", confederation: "CONCACAF", flag: "🇺🇸", qualified: true, auto: true },
    { name: "Mexico", confederation: "CONCACAF", flag: "🇲🇽", qualified: true, auto: true },
    { name: "Canada", confederation: "CONCACAF", flag: "🇨🇦", qualified: true, auto: true },
    { name: "Argentina", confederation: "CONMEBOL", flag: "🇦🇷", qualified: true, auto: false },
    { name: "Brazil", confederation: "CONMEBOL", flag: "🇧🇷", qualified: true, auto: false },
    { name: "Uruguay", confederation: "CONMEBOL", flag: "🇺🇾", qualified: true, auto: false },
    { name: "Colombia", confederation: "CONMEBOL", flag: "🇨🇴", qualified: true, auto: false },
    { name: "Germany", confederation: "UEFA", flag: "🇩🇪", qualified: true, auto: false },
    { name: "France", confederation: "UEFA", flag: "🇫🇷", qualified: true, auto: false },
    { name: "Spain", confederation: "UEFA", flag: "🇪🇸", qualified: true, auto: false },
    { name: "England", confederation: "UEFA", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", qualified: true, auto: false },
    { name: "Portugal", confederation: "UEFA", flag: "🇵🇹", qualified: true, auto: false },
    { name: "Italy", confederation: "UEFA", flag: "🇮🇹", qualified: true, auto: false },
    { name: "Netherlands", confederation: "UEFA", flag: "🇳🇱", qualified: true, auto: false },
    { name: "Belgium", confederation: "UEFA", flag: "🇧🇪", qualified: true, auto: false },
    { name: "Japan", confederation: "AFC", flag: "🇯🇵", qualified: true, auto: false },
    { name: "South Korea", confederation: "AFC", flag: "🇰🇷", qualified: true, auto: false },
    { name: "Iran", confederation: "AFC", flag: "🇮🇷", qualified: true, auto: false },
    { name: "Saudi Arabia", confederation: "AFC", flag: "🇸🇦", qualified: true, auto: false },
    { name: "Morocco", confederation: "CAF", flag: "🇲🇦", qualified: true, auto: false },
  ];

  const confederations = [
    { code: "ALL", name: "All Teams", color: "gray" },
    { code: "CONCACAF", name: "CONCACAF", color: "blue" },
    { code: "CONMEBOL", name: "CONMEBOL", color: "yellow" },
    { code: "UEFA", name: "UEFA", color: "purple" },
    { code: "AFC", name: "AFC", color: "red" },
    { code: "CAF", name: "CAF", color: "green" },
  ];

  const filteredTeams =
    selectedConfederation === "ALL"
      ? qualifiedTeams
      : qualifiedTeams.filter((team) => team.confederation === selectedConfederation);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 justify-center">
        {confederations.map((conf) => (
          <button
            key={conf.code}
            onClick={() => setSelectedConfederation(conf.code)}
            className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
              selectedConfederation === conf.code
                ? "bg-red-600 text-white shadow-lg scale-105"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {conf.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredTeams.map((team) => (
          <div
            key={team.name}
            className="bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-red-600 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="text-4xl text-center mb-2">{team.flag}</div>
            <div className="text-center font-bold text-sm">{team.name}</div>
            <div className="text-xs text-center text-gray-500 mt-1">{team.confederation}</div>
            {team.auto && (
              <div className="text-xs text-center text-red-600 font-semibold mt-2">
                Host Nation
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center text-gray-600 text-sm">
        <strong className="text-red-600">{qualifiedTeams.length}</strong> of 48 teams qualified
      </div>
    </div>
  );
}

// Tournament Format Explainer
function TournamentFormat() {
  const [activePhase, setActivePhase] = useState("groups");

  const phases = {
    groups: {
      title: "Group Stage",
      icon: "🏆",
      description: "48 teams divided into 16 groups of 3",
      details: [
        "Each team plays 2 matches in group stage",
        "Top 2 teams from each group advance",
        "32 teams progress to Round of 32",
        "Reduces total matches while maintaining competition",
      ],
    },
    knockout: {
      title: "Knockout Stage",
      icon: "⚔️",
      description: "32 teams competing in single-elimination format",
      details: [
        "Round of 32: 16 matches",
        "Round of 16: 8 matches",
        "Quarter-finals: 4 matches",
        "Semi-finals: 2 matches",
        "3rd Place & Final",
      ],
    },
    final: {
      title: "Final",
      icon: "🥇",
      description: "The ultimate showdown for the trophy",
      details: [
        "To be held at MetLife Stadium, New York/New Jersey",
        "July 19, 2026",
        "Capacity: 82,500",
        "Winner takes the FIFA World Cup Trophy",
      ],
    },
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-4 justify-center flex-wrap">
        {Object.keys(phases).map((phase) => (
          <button
            key={phase}
            onClick={() => setActivePhase(phase)}
            className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
              activePhase === phase
                ? "bg-gradient-to-r from-red-600 to-purple-600 text-white shadow-lg scale-105"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <span className="text-2xl mr-2">{phases[phase as keyof typeof phases].icon}</span>
            {phases[phase as keyof typeof phases].title}
          </button>
        ))}
      </div>

      <div className="bg-gradient-to-br from-red-50 to-purple-50 rounded-2xl p-8 shadow-xl">
        <h3 className="text-3xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-600">
          {phases[activePhase as keyof typeof phases].title}
        </h3>
        <p className="text-xl text-gray-700 mb-6">
          {phases[activePhase as keyof typeof phases].description}
        </p>
        <ul className="space-y-3">
          {phases[activePhase as keyof typeof phases].details.map((detail, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="text-red-600 font-bold text-xl">•</span>
              <span className="text-gray-700">{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Live News Feed Component
function NewsFeed() {
  const newsItems = [
    {
      date: "Jan 27, 2026",
      title: "Boycott Calls Intensify Over ICE Immigration Policies",
      excerpt: "Human rights groups demand World Cup cancellation or relocation citing ICE enforcement concerns.",
      category: "Breaking News",
      link: "/world-cup/boycott-controversy",
    },
    {
      date: "Jan 20, 2026",
      title: "Final Qualification Matches Conclude",
      excerpt: "The last spots for World Cup 2026 have been determined after intense playoff matches.",
      category: "Qualification",
    },
    {
      date: "Jan 15, 2026",
      title: "Group Stage Draw Date Announced",
      excerpt: "FIFA confirms the official draw for the group stage will take place on March 1, 2026.",
      category: "Tournament",
    },
    {
      date: "Jan 10, 2026",
      title: "Record Ticket Sales Expected",
      excerpt: "Early estimates suggest World Cup 2026 could break all attendance records with 5+ million tickets.",
      category: "Tickets",
    },
    {
      date: "Jan 5, 2026",
      title: "New VAR Technology Unveiled",
      excerpt: "Semi-automated offside technology will be used for the first time across all 104 matches.",
      category: "Technology",
    },
  ];

  return (
    <div className="space-y-4">
      {newsItems.map((item, idx) => {
        const content = (
          <>
            <div className="flex items-start justify-between mb-3">
              <span className={`inline-block px-3 py-1 ${item.category === 'Breaking News' ? 'bg-red-600 text-white animate-pulse' : 'bg-red-100 text-red-600'} text-xs font-bold rounded-full`}>
                {item.category}
              </span>
              <span className="text-sm text-gray-500">{item.date}</span>
            </div>
            <h4 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h4>
            <p className="text-gray-600">{item.excerpt}</p>
            {item.link && (
              <div className="mt-3 text-teal-600 font-semibold text-sm flex items-center">
                Read Full Article →
              </div>
            )}
          </>
        );
        
        return item.link ? (
          <Link
            key={idx}
            href={item.link}
            className="block bg-white border border-gray-200 rounded-xl p-6 hover:border-red-600 hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            {content}
          </Link>
        ) : (
          <div
            key={idx}
            className="block bg-white border border-gray-200 rounded-xl p-6 hover:border-red-600 hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            {content}
          </div>
        );
      })}
    </div>
  );
}

// Interactive Poll Component
function FanPoll() {
  const [voted, setVoted] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [votes, setVotes] = useState({
    Brazil: 28,
    Argentina: 24,
    France: 18,
    Germany: 15,
    Spain: 10,
    Other: 5,
  });

  const handleVote = (option: string) => {
    if (!voted) {
      setSelectedOption(option);
      setVotes((prev) => ({
        ...prev,
        [option]: prev[option as keyof typeof prev] + 1,
      }));
      setVoted(true);
    }
  };

  const totalVotes = Object.values(votes).reduce((a, b) => a + b, 0);

  return (
    <div className="bg-gradient-to-br from-purple-50 to-red-50 rounded-2xl p-8 shadow-xl">
      <h3 className="text-2xl font-black mb-6 text-center">
        Who Will Win World Cup 2026?
      </h3>

      {!voted ? (
        <div className="space-y-3">
          {Object.keys(votes).map((option) => (
            <button
              key={option}
              onClick={() => handleVote(option)}
              className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl hover:border-red-600 hover:shadow-lg transition-all duration-300 font-semibold text-left"
            >
              {option}
            </button>
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {Object.entries(votes)
            .sort(([, a], [, b]) => b - a)
            .map(([option, count]) => {
              const percentage = ((count / totalVotes) * 100).toFixed(1);
              return (
                <div key={option} className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className={`font-bold ${selectedOption === option ? "text-red-600" : ""}`}>
                      {option} {selectedOption === option && "✓"}
                    </span>
                    <span className="text-sm text-gray-600">{percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ${
                        selectedOption === option
                          ? "bg-gradient-to-r from-red-600 to-purple-600"
                          : "bg-gray-400"
                      }`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          <div className="text-center text-sm text-gray-600 mt-4">
            Total Votes: {totalVotes}
          </div>
        </div>
      )}
    </div>
  );
}

// Main Page Component
export default function WorldCup2026Hub() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-white">
      {/* FIFA-Style Premium Hero */}
      <div className="relative min-h-[90vh] bg-gradient-to-br from-slate-900 via-purple-950 to-black text-white overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
        
        <div className="container mx-auto px-6 relative z-10 pt-32 pb-20">
          {/* FIFA Branding Style */}
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="inline-block mb-4">
              <div className="text-sm font-bold tracking-[0.3em] text-teal-400 mb-2">
                OFFICIAL COVERAGE
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none mb-6">
              FIFA WORLD CUP
              <span className="block text-5xl md:text-7xl lg:text-8xl mt-2 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                2026™
              </span>
            </h1>

            <div className="flex items-center justify-center gap-8 text-xl md:text-2xl font-semibold mb-8">
              <span className="flex items-center gap-2">
                <span className="text-4xl">🇺🇸</span> USA
              </span>
              <span className="text-teal-400">•</span>
              <span className="flex items-center gap-2">
                <span className="text-4xl">🇲🇽</span> MEXICO
              </span>
              <span className="text-teal-400">•</span>
              <span className="flex items-center gap-2">
                <span className="text-4xl">🇨🇦</span> CANADA
              </span>
            </div>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              Experience the biggest FIFA World Cup™ in history with 48 teams, 104 matches, 
              and 16 host cities across North America
            </p>

            {/* Countdown Timer - Minimal FIFA Style */}
            <div className="mt-12 pt-12 border-t border-white/20">
              <CountdownTimer />
            </div>

            {/* CTA Buttons - FIFA Style */}
            <div className="flex flex-wrap gap-4 justify-center pt-8">
              <button className="px-10 py-5 bg-teal-500 hover:bg-teal-400 text-black font-bold text-lg rounded-none transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl uppercase tracking-wide">
                Explore Matches
              </button>
              <button className="px-10 py-5 bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-bold text-lg rounded-none transition-all duration-300 uppercase tracking-wide">
                View Schedule
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-teal-500 via-cyan-400 to-teal-500" />
      </div>

      {/* Stats Bar - FIFA Style */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12 border-b-4 border-teal-500">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "48", label: "Teams" },
              { value: "104", label: "Matches" },
              { value: "16", label: "Host Cities" },
              { value: "3", label: "Nations" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center group cursor-pointer">
                <div className="text-6xl md:text-7xl font-black text-teal-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm uppercase tracking-widest text-gray-400 font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="bg-white">
        {/* Match Offerings Section - FIFA Style */}
        <section className="py-20 border-b border-gray-200">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
                MATCH OFFERINGS
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Every offering features premium coverage and comprehensive analysis
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Single Match */}
              <div className="group relative bg-slate-50 overflow-hidden border-4 border-transparent hover:border-teal-500 transition-all duration-500">
                <div className="aspect-[4/3] bg-gradient-to-br from-slate-900 to-slate-700 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl">⚽</span>
                  </div>
                  <div className="absolute top-4 right-4 bg-teal-500 text-black px-4 py-2 font-bold text-sm uppercase">
                    Live Coverage
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">
                    Single Match
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Follow the action match by match with live updates, analysis, and exclusive insights
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-8">
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 font-bold">✓</span>
                      Real-time match updates
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 font-bold">✓</span>
                      Expert commentary & analysis
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 font-bold">✓</span>
                      Player statistics & highlights
                    </li>
                  </ul>
                  <button className="w-full py-4 bg-slate-900 hover:bg-teal-500 text-white hover:text-black font-bold uppercase tracking-wide transition-all duration-300">
                    Explore Now
                  </button>
                </div>
              </div>

              {/* Venue Series */}
              <div className="group relative bg-slate-50 overflow-hidden border-4 border-transparent hover:border-teal-500 transition-all duration-500">
                <div className="aspect-[4/3] bg-gradient-to-br from-purple-900 to-purple-700 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl">🏟️</span>
                  </div>
                  <div className="absolute top-4 right-4 bg-purple-500 text-white px-4 py-2 font-bold text-sm uppercase">
                    City Focus
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">
                    Venue Series
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Comprehensive coverage of all matches at your chosen city venue
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-8">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 font-bold">✓</span>
                      All matches at select venues
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 font-bold">✓</span>
                      City guides & local insights
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 font-bold">✓</span>
                      Stadium features & history
                    </li>
                  </ul>
                  <button className="w-full py-4 bg-slate-900 hover:bg-purple-500 text-white font-bold uppercase tracking-wide transition-all duration-300">
                    View Venues
                  </button>
                </div>
              </div>

              {/* Follow My Team */}
              <div className="group relative bg-slate-50 overflow-hidden border-4 border-transparent hover:border-teal-500 transition-all duration-500">
                <div className="aspect-[4/3] bg-gradient-to-br from-cyan-900 to-cyan-700 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl">🏆</span>
                  </div>
                  <div className="absolute top-4 right-4 bg-cyan-500 text-black px-4 py-2 font-bold text-sm uppercase">
                    Team Tracker
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">
                    Follow My Team
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Track your favorite team through their World Cup journey
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-8">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 font-bold">✓</span>
                      Team news & updates
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 font-bold">✓</span>
                      Match schedules & results
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 font-bold">✓</span>
                      Player profiles & stats
                    </li>
                  </ul>
                  <button className="w-full py-4 bg-slate-900 hover:bg-cyan-500 text-white hover:text-black font-bold uppercase tracking-wide transition-all duration-300">
                    Choose Team
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Host Cities Section - FIFA Clean Design */}
        <section className="py-20 bg-slate-50 border-b border-gray-200">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight uppercase">
                16 Host Cities
              </h2>
              <p className="text-xl text-gray-600">
                Across the United States, Mexico, and Canada
              </p>
            </div>
            <HostCitiesMap />
          </div>
        </section>

        {/* Qualified Teams Section */}
        <section className="py-20 bg-white border-b border-gray-200">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight uppercase">
                Qualified Teams
              </h2>
              <p className="text-xl text-gray-600">
                48 teams competing for glory
              </p>
            </div>
            <QualifiedTeamsTracker />
          </div>
        </section>

        {/* Tournament Format Section */}
        <section className="py-20 bg-slate-50 border-b border-gray-200">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight uppercase">
                Tournament Format
              </h2>
              <p className="text-xl text-gray-600">
                The path to the final
              </p>
            </div>
            <TournamentFormat />
          </div>
        </section>

        {/* News & Poll Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 uppercase tracking-tight">
                  Latest News
                </h2>
                <NewsFeed />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 uppercase tracking-tight">
                  Fan Poll
                </h2>
                <FanPoll />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Premium Footer - FIFA Style */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="text-sm font-bold tracking-[0.3em] text-teal-400 mb-4">
              OBJECTWIRE OFFICIAL COVERAGE
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              DON'T MISS A MOMENT OF WORLD CUP 2026™
            </h2>
            <p className="text-xl text-gray-400 mb-10">
              Get comprehensive coverage, exclusive analysis, and breaking news from all 104 matches
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap mb-12">
              <Link
                href="/news"
                className="px-10 py-5 bg-teal-500 hover:bg-teal-400 text-black font-bold text-lg rounded-none transition-all duration-300 transform hover:scale-105 uppercase tracking-wide"
              >
                Latest News
              </Link>
              <Link
                href="/contact"
                className="px-10 py-5 bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white font-bold text-lg rounded-none transition-all duration-300 uppercase tracking-wide"
              >
                Subscribe
              </Link>
            </div>

            <div className="border-t border-white/20 pt-8">
              <p className="text-sm text-gray-500">
                © 2026 ObjectWire. FIFA World Cup™ coverage and analysis.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
