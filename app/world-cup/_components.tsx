"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

// ─── Countdown Timer ─────────────────────────────────────────────────────────

export function CountdownTimer() {
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
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
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
      ].map((item) => (
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

// ─── Host Cities Map ─────────────────────────────────────────────────────────

export function HostCitiesMap() {
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
            onClick={() =>
              setSelectedCity(selectedCity === city.name ? null : city.name)
            }
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
                    <div className="text-red-100 text-sm mb-1">
                      Total Matches
                    </div>
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

// ─── Qualified Teams Tracker ─────────────────────────────────────────────────

export function QualifiedTeamsTracker() {
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
      : qualifiedTeams.filter(
          (team) => team.confederation === selectedConfederation
        );

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
            <div className="text-xs text-center text-gray-500 mt-1">
              {team.confederation}
            </div>
            {team.auto && (
              <div className="text-xs text-center text-red-600 font-semibold mt-2">
                Host Nation
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center text-gray-600 text-sm">
        <strong className="text-red-600">{qualifiedTeams.length}</strong> of 48
        teams qualified
      </div>
    </div>
  );
}

// ─── Tournament Format Explainer ─────────────────────────────────────────────

export function TournamentFormat() {
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
            <span className="text-2xl mr-2">
              {phases[phase as keyof typeof phases].icon}
            </span>
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
          {phases[activePhase as keyof typeof phases].details.map(
            (detail, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-red-600 font-bold text-xl">•</span>
                <span className="text-gray-700">{detail}</span>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}

// ─── News Feed ───────────────────────────────────────────────────────────────

export function NewsFeed() {
  const newsItems = [
    {
      date: "Jan 27, 2026",
      title: "Boycott Calls Intensify Over ICE Immigration Policies",
      excerpt:
        "Human rights groups demand World Cup cancellation or relocation citing ICE enforcement concerns.",
      category: "Breaking News",
      link: "/world-cup/boycott-controversy",
    },
    {
      date: "Jan 20, 2026",
      title: "Final Qualification Matches Conclude",
      excerpt:
        "The last spots for World Cup 2026 have been determined after intense playoff matches.",
      category: "Qualification",
    },
    {
      date: "Jan 15, 2026",
      title: "Group Stage Draw Date Announced",
      excerpt:
        "FIFA confirms the official draw for the group stage will take place on March 1, 2026.",
      category: "Tournament",
    },
    {
      date: "Jan 10, 2026",
      title: "Record Ticket Sales Expected",
      excerpt:
        "Early estimates suggest World Cup 2026 could break all attendance records with 5+ million tickets.",
      category: "Tickets",
    },
    {
      date: "Jan 5, 2026",
      title: "New VAR Technology Unveiled",
      excerpt:
        "Semi-automated offside technology will be used for the first time across all 104 matches.",
      category: "Technology",
    },
  ];

  return (
    <div className="space-y-4">
      {newsItems.map((item, idx) => {
        const content = (
          <>
            <div className="flex items-start justify-between mb-3">
              <span
                className={`inline-block px-3 py-1 ${
                  item.category === "Breaking News"
                    ? "bg-red-600 text-white animate-pulse"
                    : "bg-red-100 text-red-600"
                } text-xs font-bold rounded-full`}
              >
                {item.category}
              </span>
              <span className="text-sm text-gray-500">{item.date}</span>
            </div>
            <h4 className="text-xl font-bold mb-2 text-gray-900">
              {item.title}
            </h4>
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

// ─── Fan Poll ────────────────────────────────────────────────────────────────

export function FanPoll() {
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
                    <span
                      className={`font-bold ${
                        selectedOption === option ? "text-red-600" : ""
                      }`}
                    >
                      {option} {selectedOption === option && "✓"}
                    </span>
                    <span className="text-sm text-gray-600">
                      {percentage}%
                    </span>
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
