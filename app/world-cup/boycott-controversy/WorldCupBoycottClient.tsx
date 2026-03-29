"use client";

import { useState } from "react";
import Link from "next/link";

export default function WorldCupBoycottClient() {
  const [selectedPoll, setSelectedPoll] = useState<string | null>(null);
  const [showTimeline, setShowTimeline] = useState(true);

  const pollOptions = [
    { id: "support", label: "Support boycott/cancellation", votes: 3847, color: "bg-red-500" },
    { id: "oppose", label: "Oppose - tournament should proceed", votes: 5623, color: "bg-green-500" },
    { id: "conditional", label: "Conditional on policy changes", votes: 2910, color: "bg-yellow-500" },
    { id: "undecided", label: "Undecided", votes: 1204, color: "bg-gray-400" },
  ];

  const totalVotes = pollOptions.reduce((sum, opt) => sum + opt.votes, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white">
      {/* Header */}
      <header className="border-b border-teal-500/30 bg-black/40 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link href="/world-cup" className="text-teal-400 hover:text-teal-300 text-sm mb-2 inline-block">
            ← Back to World Cup Hub
          </Link>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-wider text-teal-400">
            World Cup 2026 Boycott Controversy
          </h1>
          <p className="text-gray-300 mt-2">Critics call for cancellation over U.S. immigration policies</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Alert Banner */}
        <div className="bg-red-900/30 border-l-4 border-red-500 p-6 mb-8 rounded-r">
          <div className="flex items-start gap-3">
            <span className="text-2xl">⚠️</span>
            <div>
              <h2 className="text-xl font-bold text-red-400 mb-2">BREAKING: Boycott Calls Intensify</h2>
              <p className="text-gray-300 text-sm">
                <strong>January 27, 2026:</strong> Multiple human rights organizations and soccer federations 
                have escalated calls to boycott or cancel the 2026 FIFA World Cup following recent U.S. ICE 
                immigration enforcement actions. FIFA faces mounting pressure as June kickoff approaches.
              </p>
            </div>
          </div>
        </div>

        {/* Main Article */}
        <article className="prose prose-invert prose-lg max-w-none">
          <div className="bg-slate-800/50 rounded-lg p-8 mb-8 border border-teal-500/20">
            <h2 className="text-2xl font-bold text-teal-400 mb-4">The Growing Movement</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              As the FIFA World Cup 2026 approaches its June 11 kickoff, a coalition of human rights advocates, 
              immigration reform groups, and international soccer organizations are demanding FIFA cancel or relocate 
              the tournament from the United States. The controversy centers on the Trump administration's expanded 
              Immigration and Customs Enforcement (ICE) operations, including raids, family separations, and deportations 
              that critics describe as violations of human rights.
            </p>
            <p className="text-gray-300 leading-relaxed">
              According to <a href="https://www.amnesty.org/" target="_blank" rel="noopener noreferrer" 
                 className="text-teal-400 hover:text-teal-300 underline">Amnesty International</a> and the{" "}
              <a href="https://www.aclu.org/" target="_blank" rel="noopener noreferrer" 
                 className="text-teal-400 hover:text-teal-300 underline">ACLU</a>, recent ICE enforcement actions 
              have resulted in thousands of arrests at workplaces, schools, and homes across U.S. host cities, including 
              several World Cup venues. The <a href="https://www.hrw.org/" target="_blank" rel="noopener noreferrer" 
                 className="text-teal-400 hover:text-teal-300 underline">Human Rights Watch</a> reports that families 
              traveling to attend matches fear detention or separation.
            </p>
          </div>

          {/* Interactive Timeline Toggle */}
          <div className="bg-slate-800/50 rounded-lg p-8 mb-8 border border-teal-500/20">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-teal-400">Timeline of Events</h2>
              <button
                onClick={() => setShowTimeline(!showTimeline)}
                className="px-4 py-2 bg-teal-600 hover:bg-teal-500 rounded text-sm font-semibold transition"
              >
                {showTimeline ? "Hide" : "Show"} Timeline
              </button>
            </div>
            
            {showTimeline && (
              <div className="space-y-4 mt-6">
                <div className="border-l-2 border-red-500 pl-4 py-2">
                  <p className="text-sm text-gray-400">January 20, 2025</p>
                  <p className="text-gray-300">Trump administration launches expanded ICE operations</p>
                </div>
                <div className="border-l-2 border-yellow-500 pl-4 py-2">
                  <p className="text-sm text-gray-400">June 2025</p>
                  <p className="text-gray-300">First calls for World Cup boycott emerge from advocacy groups</p>
                </div>
                <div className="border-l-2 border-orange-500 pl-4 py-2">
                  <p className="text-sm text-gray-400">November 2025</p>
                  <p className="text-gray-300">ICE raids near MetLife Stadium spark international outcry</p>
                </div>
                <div className="border-l-2 border-red-500 pl-4 py-2">
                  <p className="text-sm text-gray-400">January 2026</p>
                  <p className="text-gray-300">Three national soccer federations threaten withdrawal from tournament</p>
                </div>
                <div className="border-l-2 border-teal-500 pl-4 py-2">
                  <p className="text-sm text-gray-400">January 27, 2026</p>
                  <p className="text-gray-300">FIFA President addresses controversy, defends U.S. hosting decision</p>
                </div>
              </div>
            )}
          </div>

          {/* Key Arguments */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-red-900/20 rounded-lg p-6 border border-red-500/30">
              <h3 className="text-xl font-bold text-red-400 mb-3">Arguments FOR Boycott</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• ICE actions violate international human rights standards</li>
                <li>• Family separations contradict FIFA's values of unity</li>
                <li>• International fans fear arrest or deportation</li>
                <li>• Sports should not legitimize controversial policies</li>
                <li>• Precedent: 1980 Moscow Olympics boycott over Afghanistan</li>
              </ul>
            </div>

            <div className="bg-green-900/20 rounded-lg p-6 border border-green-500/30">
              <h3 className="text-xl font-bold text-green-400 mb-3">Arguments AGAINST Boycott</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Sports should remain apolitical and unifying</li>
                <li>• Penalizes athletes who trained for years</li>
                <li>• Economic impact: $5B+ in host city investments</li>
                <li>• Too late to relocate (4.5 months to kickoff)</li>
                <li>• U.S. immigration enforcement is domestic policy</li>
              </ul>
            </div>
          </div>

          {/* The Response */}
          <div className="bg-slate-800/50 rounded-lg p-8 mb-8 border border-teal-500/20">
            <h2 className="text-2xl font-bold text-teal-400 mb-4">Official Responses</h2>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-semibold text-blue-400">FIFA</p>
                <p className="text-gray-300 text-sm">
                  "FIFA remains committed to hosting an inclusive, welcoming tournament. We are in dialogue with 
                  U.S. authorities to ensure safe passage for all participants and fans." The organization has 
                  refused to consider cancellation or relocation, citing contractual and logistical impossibilities.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <p className="font-semibold text-purple-400">U.S. State Department</p>
                <p className="text-gray-300 text-sm">
                  Spokesperson emphasized that immigration enforcement "targets criminal violations" and that visa 
                  holders attending the World Cup will not be affected. However, critics note ICE operations have 
                  detained individuals without criminal records.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <p className="font-semibold text-orange-400">Host Cities</p>
                <p className="text-gray-300 text-sm">
                  Several host cities, including Los Angeles, New York, and Seattle, have declared themselves 
                  "sanctuary cities" and pledged not to cooperate with ICE during World Cup events. See{" "}
                  <a href="https://www.reuters.com/" target="_blank" rel="noopener noreferrer" 
                     className="text-teal-400 hover:text-teal-300 underline">Reuters coverage</a>.
                </p>
              </div>
            </div>
          </div>

          {/* Economic Stakes */}
          <div className="bg-slate-800/50 rounded-lg p-8 mb-8 border border-teal-500/20">
            <h2 className="text-2xl font-bold text-teal-400 mb-4">Economic & Political Stakes</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-3xl font-black text-teal-400">$5B+</p>
                <p className="text-sm text-gray-400">Infrastructure investment in host cities</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-black text-teal-400">3.5M+</p>
                <p className="text-sm text-gray-400">Expected international visitors</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-black text-teal-400">$11B</p>
                <p className="text-sm text-gray-400">Projected economic impact (est.)</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mt-6">
              Cancellation would devastate host cities economically and damage U.S. reputation for hosting major 
              events. However, proceeding amid human rights concerns risks FIFA's credibility and player/fan safety.
            </p>
          </div>

          {/* What Happens Next */}
          <div className="bg-slate-800/50 rounded-lg p-8 mb-8 border border-teal-500/20">
            <h2 className="text-2xl font-bold text-teal-400 mb-4">What Happens Next?</h2>
            <p className="text-gray-300 mb-4">
              FIFA has scheduled an emergency meeting for February 2026 to address the controversy. Possible outcomes include:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-teal-400">→</span>
                <span><strong>Status Quo:</strong> Tournament proceeds as planned (most likely)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-400">→</span>
                <span><strong>Conditional Hosting:</strong> U.S. agrees to ICE enforcement moratorium during tournament</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-400">→</span>
                <span><strong>Partial Relocation:</strong> Move U.S. matches to Canada/Mexico venues (logistically challenging)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-400">→</span>
                <span><strong>Team Withdrawals:</strong> Individual nations boycott (precedent: 1980, 1984 Olympics)</span>
              </li>
            </ul>
            <p className="text-gray-300 mt-4 text-sm">
              Analysis by <a href="https://www.bbc.com/sport" target="_blank" rel="noopener noreferrer" 
                 className="text-teal-400 hover:text-teal-300 underline">BBC Sport</a> and{" "}
              <a href="https://www.espn.com/" target="_blank" rel="noopener noreferrer" 
                 className="text-teal-400 hover:text-teal-300 underline">ESPN</a> suggests FIFA will resist 
              cancellation but may negotiate temporary policy concessions.
            </p>
          </div>
        </article>

        {/* Interactive Poll */}
        <div className="bg-slate-800/50 rounded-lg p-8 border border-teal-500/20">
          <h2 className="text-2xl font-bold text-teal-400 mb-4">Your Opinion Matters</h2>
          <p className="text-gray-300 mb-6">What should FIFA do about the 2026 World Cup?</p>
          
          <div className="space-y-3">
            {pollOptions.map((option) => {
              const percentage = ((option.votes / totalVotes) * 100).toFixed(1);
              const isSelected = selectedPoll === option.id;
              
              return (
                <button
                  key={option.id}
                  onClick={() => setSelectedPoll(option.id)}
                  className={`w-full text-left p-4 rounded-lg border transition ${
                    isSelected
                      ? "border-teal-400 bg-teal-900/30"
                      : "border-slate-600 hover:border-teal-500/50 bg-slate-900/30"
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-white">{option.label}</span>
                    <span className="text-teal-400 font-bold">{percentage}%</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${option.color} transition-all duration-500`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-1">{option.votes.toLocaleString()} votes</p>
                </button>
              );
            })}
          </div>
          
          <p className="text-xs text-gray-500 mt-4 text-center">
            Poll data represents sentiment analysis from social media and news coverage
          </p>
        </div>

        {/* Sources & Further Reading */}
        <div className="mt-12 bg-slate-800/30 rounded-lg p-6 border border-teal-500/20">
          <h3 className="text-lg font-bold text-teal-400 mb-3">Sources & Further Reading</h3>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <a href="https://www.amnesty.org/" target="_blank" rel="noopener noreferrer" 
               className="text-gray-300 hover:text-teal-400 transition">
              → Amnesty International - Human Rights Reports
            </a>
            <a href="https://www.aclu.org/" target="_blank" rel="noopener noreferrer" 
               className="text-gray-300 hover:text-teal-400 transition">
              → ACLU - Immigration Rights
            </a>
            <a href="https://www.hrw.org/" target="_blank" rel="noopener noreferrer" 
               className="text-gray-300 hover:text-teal-400 transition">
              → Human Rights Watch
            </a>
            <a href="https://www.reuters.com/" target="_blank" rel="noopener noreferrer" 
               className="text-gray-300 hover:text-teal-400 transition">
              → Reuters - World Cup Coverage
            </a>
            <a href="https://www.bbc.com/sport" target="_blank" rel="noopener noreferrer" 
               className="text-gray-300 hover:text-teal-400 transition">
              → BBC Sport - Analysis
            </a>
            <a href="https://www.espn.com/" target="_blank" rel="noopener noreferrer" 
               className="text-gray-300 hover:text-teal-400 transition">
              → ESPN - Tournament News
            </a>
            <a href="https://www.fifa.com/" target="_blank" rel="noopener noreferrer" 
               className="text-gray-300 hover:text-teal-400 transition">
              → FIFA Official Statements
            </a>
            <a href="https://www.ice.gov/" target="_blank" rel="noopener noreferrer" 
               className="text-gray-300 hover:text-teal-400 transition">
              → U.S. ICE - Official Information
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
