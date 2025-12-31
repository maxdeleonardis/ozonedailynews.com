'use client';

import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

export default function MinnesotaFraudArticle() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [stats, setStats] = useState({ amount: 0, defendants: 0 });
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsAnimated, setStatsAnimated] = useState(false);

  // Reading progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Animate stats when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !statsAnimated) {
          setStatsAnimated(true);
          const duration = 2000;
          const steps = 60;
          const amountIncrement = 250 / steps;
          const defendantsIncrement = 70 / steps;
          let step = 0;
          
          const interval = setInterval(() => {
            step++;
            setStats({
              amount: Math.min(Math.round(amountIncrement * step), 250),
              defendants: Math.min(Math.round(defendantsIncrement * step), 70)
            });
            if (step >= steps) clearInterval(interval);
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [statsAnimated]);

  const sectionClass = (id: string) =>
    `transition-all duration-700 ease-out ${
      visibleSections.has(id)
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-8'
    }`;

  return (
    <>
      {/* Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <style jsx global>{`
        .highlight-text {
          transition: all 0.2s ease;
          border-radius: 2px;
          padding: 0 2px;
          margin: 0 -2px;
        }
        .highlight-text:hover {
          background: linear-gradient(120deg, #fef3c7 0%, #fde68a 100%);
          box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.1);
        }
        .key-term {
          position: relative;
          font-weight: 600;
          cursor: help;
        }
        .key-term::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #ef4444, #f97316);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        .key-term:hover::after {
          transform: scaleX(1);
        }
        .stat-card {
          transition: all 0.3s ease;
        }
        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.1);
        }
        .mechanism-item {
          transition: all 0.3s ease;
          cursor: default;
        }
        .mechanism-item:hover {
          background: #f9fafb;
          padding-left: 20px;
          border-left: 3px solid #ef4444;
        }
        .section-reveal {
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>

      <article className="py-16 md:py-20 selection:bg-yellow-100 selection:text-yellow-900">
        <div className="max-w-[1150px] mx-auto px-6 md:px-12">
          
          {/* Article Header */}
          <header className="mb-12 animate-in" style={{ animationDelay: '0.1s' }}>
            <div className="mb-6">
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-900 transition-all duration-300 hover:gap-3"
              >
                <span>←</span>
                <span>Back to News</span>
              </Link>
            </div>
            
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-red-500 text-white mb-4 animate-pulse">
              INVESTIGATION
            </span>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight">
              Feeding Our Future: Inside Minnesota's{' '}
              <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                $250 Million
              </span>{' '}
              Fraud Scheme
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 pb-8 border-b border-gray-200">
              <span>By <strong className="text-gray-900">ObjectWire Investigations</strong></span>
              <span className="text-gray-300">•</span>
              <time dateTime="2025-12-30">December 30, 2025</time>
              <span className="text-gray-300">•</span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                12 min read
              </span>
            </div>
          </header>

          {/* Article Content */}
          <div className="space-y-12">
            
            {/* Executive Summary */}
            <section 
              id="summary" 
              data-animate
              className={sectionClass('summary')}
            >
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 border-l-4 border-gray-900 p-6 md:p-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <p className="text-xs font-mono text-gray-400 mb-3 tracking-widest">EXECUTIVE SUMMARY</p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  <span className="highlight-text">The Feeding Our Future case represents one of the largest pandemic-era fraud schemes in United States history.</span>{' '}
                  Federal prosecutors have indicted <span className="key-term">70 individuals</span> for allegedly stealing approximately{' '}
                  <span className="key-term">$250 million</span> from the U.S. Department of Agriculture's Federal Child Nutrition Program. 
                  The scheme exploited emergency COVID-19 provisions designed to feed children during school closures.
                </p>
              </div>
            </section>

            {/* Background Section */}
            <section 
              id="background" 
              data-animate
              className={sectionClass('background')}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-gray-900 text-white text-sm flex items-center justify-center font-mono">01</span>
                Background: The Federal Child Nutrition Program
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="highlight-text">
                  The Federal Child Nutrition Program, administered by the <span className="key-term">U.S. Department of Agriculture (USDA)</span>, provides 
                  funding for meals served to children through schools and nonprofit organizations. During the COVID-19 
                  pandemic, the program expanded significantly to address food insecurity caused by school closures.
                </p>
                <p className="highlight-text">
                  <span className="key-term">Feeding Our Future</span>, a Minnesota-based nonprofit, served as a sponsor organization that received federal 
                  funds and distributed them to meal sites. Under normal circumstances, sponsors are required to verify 
                  that meals are actually served to eligible children and maintain documentation of meal counts.
                </p>
              </div>
            </section>

            {/* The Scheme Section */}
            <section 
              id="scheme" 
              data-animate
              className={sectionClass('scheme')}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-gray-900 text-white text-sm flex items-center justify-center font-mono">02</span>
                The Scheme: How It Worked
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 highlight-text">
                According to federal indictments unsealed in September 2022, the fraud operated through a systematic 
                pattern of false claims and fabricated documentation:
              </p>
              
              <div className="bg-gray-50 p-6 md:p-8 rounded-lg border border-gray-200">
                <p className="text-xs font-mono text-red-500 mb-6 tracking-widest font-semibold">KEY MECHANISMS</p>
                <div className="space-y-4">
                  {[
                    { num: '01', title: 'Falsified Meal Counts', desc: 'Sites claimed to serve thousands of meals daily to children who never received food' },
                    { num: '02', title: 'Shell Organizations', desc: 'Defendants created multiple entities to multiply fraudulent claims' },
                    { num: '03', title: 'Fabricated Documentation', desc: 'Rosters of children, attendance records, and invoices were manufactured' },
                    { num: '04', title: 'Money Laundering', desc: 'Funds were moved through multiple accounts and converted to assets' },
                  ].map((item, i) => (
                    <div 
                      key={i} 
                      className="mechanism-item flex gap-4 p-4 rounded-lg"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <span className="text-red-500 font-mono font-bold text-sm">{item.num}</span>
                      <div>
                        <strong className="text-gray-900 block mb-1">{item.title}</strong>
                        <span className="text-gray-500 text-sm">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Key Figures Section */}
            <section 
              id="figures" 
              data-animate
              className={sectionClass('figures')}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-gray-900 text-white text-sm flex items-center justify-center font-mono">03</span>
                Key Figures and Indictments
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="highlight-text">
                  The FBI and USDA Office of Inspector General identified 70 defendants across multiple indictments. 
                  Key figures include:
                </p>
                <div className="bg-red-50 border border-red-100 p-6 rounded-lg my-6">
                  <p className="highlight-text">
                    <span className="key-term text-red-700">Aimee Bock</span>, founder and executive director of Feeding Our Future, faces charges of 
                    federal programs bribery, wire fraud, and money laundering conspiracy. Prosecutors allege she accepted 
                    bribes to approve fraudulent site applications and meal claims.
                  </p>
                </div>
                <p className="highlight-text">
                  Multiple defendants have pleaded guilty, with several cooperating with federal investigators. 
                  Trials for remaining defendants are scheduled throughout 2025 and 2026.
                </p>
              </div>
            </section>

            {/* Scale of Fraud - Stats Section */}
            <section 
              id="scale" 
              data-animate
              className={sectionClass('scale')}
              ref={statsRef}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-gray-900 text-white text-sm flex items-center justify-center font-mono">04</span>
                Scale of the Fraud
              </h2>
              
              <div className="grid md:grid-cols-3 gap-4 my-8">
                <div className="stat-card bg-gradient-to-br from-red-500 to-red-600 p-6 text-center text-white rounded-lg">
                  <p className="text-4xl md:text-5xl font-bold">${stats.amount}M</p>
                  <p className="text-red-100 text-sm mt-2 font-medium">Alleged Stolen</p>
                </div>
                <div className="stat-card bg-gradient-to-br from-orange-500 to-orange-600 p-6 text-center text-white rounded-lg">
                  <p className="text-4xl md:text-5xl font-bold">{stats.defendants}</p>
                  <p className="text-orange-100 text-sm mt-2 font-medium">Defendants Indicted</p>
                </div>
                <div className="stat-card bg-gradient-to-br from-gray-800 to-gray-900 p-6 text-center text-white rounded-lg">
                  <p className="text-4xl md:text-5xl font-bold">2020-22</p>
                  <p className="text-gray-300 text-sm mt-2 font-medium">Period of Fraud</p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed highlight-text">
                Federal investigators have recovered approximately <span className="key-term">$50 million</span> in assets including real estate, 
                vehicles, and luxury goods. The remaining funds were spent, transferred overseas, or remain unaccounted for.
              </p>
            </section>

            {/* MDE Response Section */}
            <section 
              id="response" 
              data-animate
              className={sectionClass('response')}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-gray-900 text-white text-sm flex items-center justify-center font-mono">05</span>
                Minnesota Department of Education Response
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="highlight-text">
                  The <span className="key-term">Minnesota Department of Education (MDE)</span>, which oversees federal nutrition program sponsors in the state, 
                  faced criticism for its handling of warnings about Feeding Our Future. Internal documents revealed that 
                  MDE staff raised concerns about the organization's rapid growth as early as 2020.
                </p>
                <p className="highlight-text">
                  In 2021, MDE attempted to suspend Feeding Our Future's participation but was blocked by a court order 
                  obtained by the nonprofit. The organization continued operating until <span className="key-term">FBI raids in January 2022</span>.
                </p>
              </div>
            </section>

            {/* Legal Proceedings Section */}
            <section 
              id="legal" 
              data-animate
              className={sectionClass('legal')}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-gray-900 text-white text-sm flex items-center justify-center font-mono">06</span>
                Legal Proceedings
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4 highlight-text">
                As of December 2025, legal proceedings continue across multiple federal cases:
              </p>
              <ul className="space-y-3">
                {[
                  '20+ defendants have pleaded guilty to various charges',
                  'Several trials have resulted in convictions',
                  'Sentences have ranged from probation to over 10 years in federal prison',
                  "Aimee Bock's trial is pending, with the defendant maintaining her innocence"
                ].map((item, i) => (
                  <li 
                    key={i}
                    className="flex items-start gap-3 text-gray-600 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="highlight-text">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Systemic Implications Section */}
            <section 
              id="implications" 
              data-animate
              className={sectionClass('implications')}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-gray-900 text-white text-sm flex items-center justify-center font-mono">07</span>
                Systemic Implications
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="highlight-text">
                  The Feeding Our Future case has prompted nationwide scrutiny of federal nutrition program oversight. 
                  The USDA has implemented additional verification requirements, and Congress has held hearings on 
                  pandemic-era program vulnerabilities.
                </p>
                <p className="highlight-text">
                  Critics argue that emergency provisions, while necessary during the pandemic, created opportunities 
                  for exploitation. Defenders of the programs note that millions of children received legitimate meals 
                  during a time of unprecedented need.
                </p>
              </div>
            </section>

            {/* Sources */}
            <section 
              id="sources" 
              data-animate
              className={`${sectionClass('sources')} mt-16 pt-8 border-t-2 border-gray-200`}
            >
              <p className="text-xs font-mono text-gray-400 mb-6 tracking-widest">SOURCES & CITATIONS</p>
              <ul className="space-y-3 text-sm text-gray-500">
                {[
                  'U.S. Department of Justice, District of Minnesota - Indictment Documents (2022-2025)',
                  'FBI Minneapolis Field Office - Press Releases',
                  'USDA Office of Inspector General - Audit Reports',
                  'Minnesota Department of Education - Public Records',
                  'Federal Court Records - PACER Database'
                ].map((source, i) => (
                  <li key={i} className="flex items-start gap-3 hover:text-gray-700 transition-colors duration-200 cursor-default">
                    <span className="text-red-400">•</span>
                    <span>{source}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Corrections Notice */}
            <section className="mt-8 p-6 bg-gray-50 border border-gray-200 rounded-lg">
              <p className="text-sm text-gray-500">
                <strong className="text-gray-700">Corrections Policy:</strong>{' '}
                This article will be updated as new information becomes available. 
                No corrections have been made since initial publication.
              </p>
            </section>

          </div>
        </div>
      </article>
    </>
  );
}
