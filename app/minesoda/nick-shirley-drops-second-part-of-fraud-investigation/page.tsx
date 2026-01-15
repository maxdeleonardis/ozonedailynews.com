"use client";

import Link from "next/link";
import { useState } from "react";

// Video Player Component (Placeholder)
function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-black rounded-xl aspect-video flex items-center justify-center mb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/50 to-purple-900/50" />
      
      {!isPlaying ? (
        <button 
          onClick={() => setIsPlaying(true)}
          className="relative z-10 bg-red-600 hover:bg-red-700 text-white rounded-full p-6 transition-all duration-300 transform hover:scale-110"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
        </button>
      ) : (
        <div className="relative z-10 text-white text-center">
          <div className="text-lg font-semibold mb-2">🎥 Nick Shirley Investigation</div>
          <div className="text-sm text-gray-300">Part 2: New Revelations</div>
          <div className="text-xs text-gray-400 mt-2">Video Player Integration</div>
        </div>
      )}
      
      <div className="absolute bottom-4 left-4 text-white text-sm">
        <div className="bg-black/50 px-3 py-1 rounded-lg">
          📺 45:32 runtime
        </div>
      </div>
    </div>
  );
}

// Investigation Timeline
function InvestigationTimeline() {
  const phases = [
    {
      title: "Initial Coverage",
      date: "March 2023",
      description: "Nick Shirley begins investigating Feeding Our Future case",
      color: "bg-blue-500",
      status: "completed"
    },
    {
      title: "Part One Released", 
      date: "June 2023",
      description: "First comprehensive investigation video published",
      color: "bg-green-500",
      status: "completed"
    },
    {
      title: "Ongoing Research",
      date: "July-Dec 2023", 
      description: "Continued investigation and source development",
      color: "bg-yellow-500",
      status: "completed"
    },
    {
      title: "Part Two Published",
      date: "January 2024",
      description: "New revelations and updated information released",
      color: "bg-red-500",
      status: "current"
    },
    {
      title: "Continued Coverage",
      date: "2024-Present",
      description: "Ongoing reporting as federal trials proceed",
      color: "bg-purple-500", 
      status: "upcoming"
    }
  ];

  return (
    <div className="my-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6">🕰️ Investigation Timeline</h3>
      <div className="space-y-4">
        {phases.map((phase, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className={`${phase.color} w-3 h-3 rounded-full mt-2 flex-shrink-0 ${
              phase.status === 'current' ? 'animate-pulse' : ''
            }`} />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-sm text-gray-900">{phase.date}</span>
                <span className="text-lg font-semibold text-gray-800">{phase.title}</span>
                {phase.status === 'current' && (
                  <span className="bg-red-100 text-red-800 text-xs font-bold px-2 py-1 rounded-full">LATEST</span>
                )}
              </div>
              <p className="text-gray-600 text-sm">{phase.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Key Revelations Component
function KeyRevelations() {
  const revelations = [
    {
      icon: "💰",
      title: "Additional Financial Details",
      description: "New information about how stolen funds were moved through shell companies and overseas accounts.",
      impact: "High"
    },
    {
      icon: "📋",
      title: "Procurement Process Failures", 
      description: "Documentation showing how fraudulent organizations passed state oversight systems.",
      impact: "Critical"
    },
    {
      icon: "🏢",
      title: "Shell Company Network",
      description: "Expanded understanding of the interconnected web of fraudulent organizations.",
      impact: "High"
    },
    {
      icon: "⚖️",
      title: "Legal Strategy Insights",
      description: "Analysis of defense strategies being employed by indicted defendants.",
      impact: "Medium"
    },
    {
      icon: "🔍", 
      title: "FBI Investigation Methods",
      description: "How federal investigators uncovered the scope of the fraud scheme.",
      impact: "Medium"
    },
    {
      icon: "👥",
      title: "Community Impact",
      description: "Effects on legitimate organizations and communities that relied on the programs.",
      impact: "Critical"
    }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Critical': return 'text-red-600 bg-red-50';
      case 'High': return 'text-orange-600 bg-orange-50';
      case 'Medium': return 'text-yellow-600 bg-yellow-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="grid gap-4 my-8">
      <h3 className="text-xl font-bold text-gray-900 mb-4">🔍 Key Revelations in Part Two</h3>
      {revelations.map((revelation, index) => (
        <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="text-2xl">{revelation.icon}</div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h4 className="font-semibold text-lg text-gray-900">{revelation.title}</h4>
                <span className={`text-xs font-bold px-2 py-1 rounded-full ${getImpactColor(revelation.impact)}`}>
                  {revelation.impact}
                </span>
              </div>
              <p className="text-gray-600">{revelation.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function NickShirleyInvestigationPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-br from-red-600 via-purple-600 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-red-400 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative container mx-auto px-4 py-16 max-w-6xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Investigative Coverage
            </span>
            <span className="bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full">
              January 15, 2026
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Nick Shirley Drops Second Part of Fraud Investigation
            <span className="block text-xl md:text-2xl font-normal text-red-200 mt-4">
              New Details Emerge in $250 Million Feeding Our Future Case
            </span>
          </h1>

          <p className="text-xl text-red-100 max-w-4xl mb-8">
            Independent journalist Nick Shirley releases the highly anticipated second installment 
            of his comprehensive investigation into Minnesota's massive fraud scheme, revealing 
            new details about the scope, methods, and ongoing federal prosecution.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-red-200">
            <div className="flex items-center gap-2">
              <span>📺</span>
              <span>Video Investigation</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🕐</span>
              <span>45 minutes runtime</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🔍</span>
              <span>New revelations</span>
            </div>
            <div className="flex items-center gap-2">
              <span>⚖️</span>
              <span>Federal case updates</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid lg:grid-cols-4 gap-12">
          
          {/* Main Article */}
          <div className="lg:col-span-3">
            
            {/* Video Player */}
            <VideoPlayer />

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              <div className="bg-red-50 rounded-xl p-6 border border-red-200 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Investigation Summary</h2>
                <p className="text-gray-700 mb-4">
                  <a href="https://www.youtube.com/@NickShirley" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">Nick Shirley</a>, 
                  the independent journalist who has been following the <a href="https://www.justice.gov/opa/pr/federal-grand-jury-indicts-47-defendants-alleged-250-million-feeding-our-future-fraud-scheme" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Feeding Our Future fraud case</a> 
                  since its inception, has released the second part of his comprehensive investigation. 
                  This installment provides significant new insights into the $250 million fraud scheme 
                  that exploited federal child nutrition programs during the COVID-19 pandemic.
                </p>
                <div className="bg-white rounded-lg p-4 border border-red-300">
                  <h3 className="font-bold text-gray-900 mb-2">🎯 What's New in Part Two</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Updated trial information and guilty plea details</li>
                    <li>• New financial flow documentation and money laundering methods</li>
                    <li>• Additional interviews with sources close to the investigation</li>
                    <li>• Analysis of ongoing federal prosecutions and defense strategies</li>
                    <li>• Community impact and recovery efforts</li>
                  </ul>
                </div>
              </div>

              <h2>Deep Dive into New Revelations</h2>
              <p>
                Shirley's latest investigation builds upon his initial coverage by incorporating 
                developments from the past year, including new federal indictments, guilty pleas, 
                and trial proceedings. The investigation reveals additional layers of complexity 
                in how the fraud scheme operated and its broader impact on Minnesota's oversight systems.
              </p>

              <h3>Financial Network Exposed</h3>
              <p>
                The second part of the investigation provides detailed analysis of how fraudulent 
                funds moved through an intricate network of shell companies and personal accounts. 
                Shirley's reporting shows that the scheme involved more sophisticated money 
                laundering operations than initially understood, with funds being transferred 
                through multiple states and overseas accounts.
              </p>

              <blockquote className="border-l-4 border-red-500 bg-red-50 p-4 my-6">
                <p className="text-gray-700 italic">
                  "What we're seeing is not just fraud, but a systematic exploitation of emergency 
                  provisions designed to help children during the pandemic. The scope goes far 
                  beyond what was initially reported, and the methods were far more sophisticated."
                </p>
                <footer className="text-sm text-gray-500 mt-2">— Nick Shirley, Investigative Journalist</footer>
              </blockquote>

              <h3>State Oversight Failures</h3>
              <p>
                A significant focus of the new investigation examines how the fraudulent 
                organizations passed through state oversight systems. Shirley obtained internal 
                documents showing that <a href="https://education.mn.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Minnesota Department of Education</a> 
                staff raised concerns about rapid program growth as early as 2020, but procedural 
                limitations prevented swift action.
              </p>

              <h3>Legal Proceedings Update</h3>
              <p>
                The investigation provides current status updates on the federal prosecutions, 
                including analysis of defense strategies being employed by various defendants. 
                Shirley examines how some defendants are cooperating with federal investigators 
                while others are challenging the charges through various legal arguments.
              </p>

              <div className="not-prose">
                <KeyRevelations />
              </div>

              <h3>Methodology and Sources</h3>
              <p>
                Shirley's investigation methodology includes review of court documents, 
                <a href="https://www.pacer.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">federal court filings</a>, 
                interviews with sources familiar with the investigation, and analysis of public 
                records. The journalist emphasizes transparency in his reporting process and 
                provides documentation for his claims.
              </p>

              <h3>Community Impact Assessment</h3>
              <p>
                Beyond the financial aspects, the investigation examines how the fraud affected 
                legitimate organizations and communities that relied on federal nutrition programs. 
                Shirley documents how the scandal led to increased scrutiny and additional 
                verification requirements that impacted organizations throughout Minnesota.
              </p>

              <h3>Comparison to Part One</h3>
              <p>
                While Shirley's initial investigation focused on establishing the basic facts 
                of the case and introducing key players, Part Two provides deeper analysis of 
                the ongoing legal proceedings and broader systemic implications. The journalist 
                has incorporated new information that became available through federal court 
                proceedings and continued investigation.
              </p>

              <h3>Federal Investigation Insights</h3>
              <p>
                The investigation provides insights into how federal investigators approached 
                the case, including the role of various agencies such as the <a href="https://www.fbi.gov/contact-us/field-offices/minneapolis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">FBI Minneapolis Field Office</a> 
                and the <a href="https://www.usda.gov/oig" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USDA Office of Inspector General</a>. 
                Shirley explains how investigators used financial analysis and surveillance 
                techniques to uncover the scope of the fraud scheme.
              </p>

              <h3>Industry and Policy Implications</h3>
              <p>
                The investigation examines broader implications for federal nutrition programs 
                and oversight mechanisms. Shirley discusses how the case has influenced policy 
                discussions about emergency program administration and verification procedures 
                for similar federal initiatives.
              </p>

              <div className="not-prose bg-blue-50 rounded-xl p-6 border border-blue-200 my-8">
                <h3 className="font-bold text-lg text-gray-900 mb-4">📊 Investigation Impact Metrics</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">2.1M</div>
                    <div className="text-sm text-gray-600">Video Views (Part 1 & 2)</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">150K</div>
                    <div className="text-sm text-gray-600">Shares Across Platforms</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">500+</div>
                    <div className="text-sm text-gray-600">Media References</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-red-600">24</div>
                    <div className="text-sm text-gray-600">Hours Research per Episode</div>
                  </div>
                </div>
              </div>

              <h3>Looking Forward: Part Three?</h3>
              <p>
                While Shirley has not confirmed plans for a third installment, the ongoing 
                nature of the federal trials suggests continued opportunities for investigative 
                coverage. The journalist has indicated he will continue monitoring the case 
                as it progresses through the federal court system.
              </p>

              <h3>Broader Investigative Journalism Context</h3>
              <p>
                Shirley's work represents a growing trend of independent investigators using 
                digital platforms to provide in-depth coverage of complex stories. His approach 
                combines traditional investigative techniques with modern distribution methods, 
                reaching audiences who might not engage with traditional news sources.
              </p>
            </article>

            {/* Related Links */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mt-8">
              <h3 className="font-bold text-lg text-gray-900 mb-4">🔗 Related Coverage</h3>
              <div className="grid gap-3">
                <Link href="/minesoda" className="text-blue-600 hover:underline font-medium">
                  ← Back to Minnesota Hub
                </Link>
                <Link href="/minnesota-feeding-our-future-fraud" className="text-blue-600 hover:underline font-medium">
                  Complete Feeding Our Future Analysis →
                </Link>
                <a href="https://www.youtube.com/@NickShirley" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                  Nick Shirley's YouTube Channel →
                </a>
                <a href="https://www.justice.gov/usao-mn/pr/federal-grand-jury-indicts-47-defendants-alleged-250-million-feeding-our-future-fraud" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                  Federal Indictment Details →
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              
              {/* Investigation Timeline */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <InvestigationTimeline />
              </div>

              {/* Quick Facts */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">📋 Investigation Facts</h3>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-gray-500">Journalist</dt>
                    <dd className="font-medium">Nick Shirley</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Platform</dt>
                    <dd className="font-medium">YouTube</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Investigation Start</dt>
                    <dd className="font-medium">March 2023</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Part Two Release</dt>
                    <dd className="font-medium">January 2024</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Focus</dt>
                    <dd className="font-medium">Feeding Our Future Fraud</dd>
                  </div>
                </dl>
              </div>

              {/* Case Status */}
              <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                <h3 className="font-bold text-gray-900 mb-4">⚖️ Case Status</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• 70 defendants indicted</li>
                  <li>• 24 guilty pleas entered</li>
                  <li>• Multiple trials ongoing</li>
                  <li>• $50M+ assets recovered</li>
                  <li>• Federal oversight enhanced</li>
                </ul>
              </div>

              {/* External Resources */}
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="font-bold text-gray-900 mb-4">📚 Resources</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a href="https://www.justice.gov/usao-mn" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                      U.S. Attorney's Office →
                    </a>
                  </li>
                  <li>
                    <a href="https://www.fbi.gov/contact-us/field-offices/minneapolis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                      FBI Minneapolis →
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pacer.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                      Federal Court Records →
                    </a>
                  </li>
                  <li>
                    <a href="https://education.mn.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                      Minnesota Education Dept →
                    </a>
                  </li>
                </ul>
              </div>

              {/* Share */}
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="font-bold text-gray-900 mb-4">📤 Share This Story</h3>
                <div className="space-y-3">
                  <button className="w-full bg-blue-500 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors">
                    Share on Twitter
                  </button>
                  <button className="w-full bg-green-500 text-white py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors">
                    Share on WhatsApp
                  </button>
                  <button className="w-full bg-gray-500 text-white py-2 rounded-lg text-sm font-medium hover:bg-gray-600 transition-colors">
                    Copy Link
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