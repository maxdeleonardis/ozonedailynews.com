"use client";

import Link from "next/link";
import { useState } from "react";

// Performance Metrics Component
function PerformanceMetrics() {
  const metrics = [
    { value: '5,000+', label: 'Qubits', icon: '⚛️', color: 'text-blue-600' },
    { value: '1000x', label: 'Speedup', icon: '⚡', color: 'text-green-600' },
    { value: '83%', label: 'APAC Growth', icon: '📈', color: 'text-purple-600' },
    { value: '11', label: 'Global Partners', icon: '🤝', color: 'text-orange-600' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
      {metrics.map((metric, index) => (
        <div key={index} className="bg-white rounded-xl p-4 border border-gray-200 text-center hover:shadow-lg transition-shadow">
          <div className={`text-2xl mb-2 ${metric.color}`}>{metric.icon}</div>
          <div className={`text-2xl font-bold ${metric.color} mb-1`}>{metric.value}</div>
          <div className="text-sm text-gray-600">{metric.label}</div>
        </div>
      ))}
    </div>
  );
}

// Technology Evolution Timeline
function TechTimeline() {
  const milestones = [
    {
      year: '1999',
      title: 'Company Founded',
      description: 'D-Wave Systems established in Burnaby, Canada',
      color: 'bg-gray-500'
    },
    {
      year: '2011',
      title: 'First Commercial System',
      description: 'D-Wave One launched as world\'s first commercial quantum computer',
      color: 'bg-blue-500'
    },
    {
      year: '2017',
      title: 'Advantage Architecture',
      description: 'Next-generation quantum annealing architecture developed',
      color: 'bg-green-500'
    },
    {
      year: '2022',
      title: 'Fast Anneal Feature',
      description: 'Precision quantum calculations breakthrough published in Nature',
      color: 'bg-purple-500'
    },
    {
      year: '2025',
      title: 'Quantum Supremacy',
      description: 'Advantage prototype achieves computational supremacy milestone',
      color: 'bg-red-500'
    }
  ];

  return (
    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 my-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6">📅 D-Wave Technology Evolution</h3>
      <div className="space-y-4">
        {milestones.map((milestone, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className={`${milestone.color} w-3 h-3 rounded-full mt-2 flex-shrink-0`} />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-sm text-gray-900">{milestone.year}</span>
                <span className="text-lg font-semibold text-gray-800">{milestone.title}</span>
              </div>
              <p className="text-gray-600 text-sm">{milestone.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Competitive Analysis
function CompetitiveAnalysis() {
  const companies = [
    {
      name: 'D-Wave',
      approach: 'Quantum Annealing',
      qubits: '5,000+',
      focus: 'Optimization',
      advantage: 'Commercial leader',
      color: 'border-blue-500'
    },
    {
      name: 'IBM',
      approach: 'Gate-based',
      qubits: '1,121',
      focus: 'Universal computing',
      advantage: 'Research depth',
      color: 'border-purple-500'
    },
    {
      name: 'Google',
      approach: 'Gate-based',
      qubits: '70',
      focus: 'Supremacy demos',
      advantage: 'Technical innovation',
      color: 'border-green-500'
    },
    {
      name: 'IonQ',
      approach: 'Trapped ion',
      qubits: '64',
      focus: 'High fidelity',
      advantage: 'Error rates',
      color: 'border-orange-500'
    }
  ];

  return (
    <div className="grid gap-4 my-8">
      <h3 className="text-xl font-bold text-gray-900 mb-4">🏆 Quantum Computing Landscape</h3>
      {companies.map((company, index) => (
        <div key={index} className={`bg-white rounded-lg border-2 ${company.color} p-4`}>
          <div className="flex justify-between items-center">
            <div>
              <h4 className="font-bold text-lg text-gray-900">{company.name}</h4>
              <p className="text-gray-600 text-sm">{company.approach} • {company.focus}</p>
            </div>
            <div className="text-right">
              <div className="font-bold text-lg text-gray-900">{company.qubits}</div>
              <div className="text-xs text-gray-500">Qubits</div>
            </div>
          </div>
          <div className="mt-2 text-sm text-gray-700">
            <strong>Key advantage:</strong> {company.advantage}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function DWaveArticlePage() {
  const [activeSection, setActiveSection] = useState('overview');

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-br from-blue-700 via-purple-600 to-indigo-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-400 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-400 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative container mx-auto px-4 py-16 max-w-6xl">
          <nav className="mb-8">
            <div className="flex items-center gap-2 text-sm text-blue-200">
              <Link href="/" className="hover:text-white">ObjectWire</Link>
              <span>/</span>
              <Link href="/news" className="hover:text-white">News</Link>
              <span>/</span>
              <Link href="/news/quantum-computing" className="hover:text-white">Quantum Computing</Link>
              <span>/</span>
              <span className="text-white">D-Wave Breakthrough</span>
            </div>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Breaking News
            </span>
            <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              NYSE: QBTS
            </span>
            <span className="bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full">
              January 15, 2026
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            D-Wave Qubits Lead Quantum Optimization Revolution
            <span className="block text-xl md:text-2xl font-normal text-blue-200 mt-4">
              Advantage Prototype Achieves Computational Supremacy on Real-World Problems
            </span>
          </h1>

          <p className="text-xl text-blue-100 max-w-4xl mb-8">
            What happens when quantum technology tackles the world's toughest optimization problems? 
            D-Wave Quantum Inc. demonstrates the answer with groundbreaking results that solve 
            challenges in minutes that would take classical computers millions of years.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-blue-200">
            <div className="flex items-center gap-2">
              <span>⚛️</span>
              <span>5,000+ qubits</span>
            </div>
            <div className="flex items-center gap-2">
              <span>⚡</span>
              <span>1000x speedup</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🔬</span>
              <span>Science peer-reviewed</span>
            </div>
            <div className="flex items-center gap-2">
              <span>💰</span>
              <span>Public company</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid lg:grid-cols-4 gap-12">
          
          {/* Main Article */}
          <div className="lg:col-span-3">
            
            {/* Performance Metrics */}
            <PerformanceMetrics />

            {/* Main Article Content */}
            <article className="prose prose-lg max-w-none">
              
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Executive Summary</h2>
                <p className="text-gray-700 mb-4">
                  <a href="https://www.dwavesys.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">D-Wave Quantum Inc.</a> 
                  (NYSE: QBTS), a pioneer in quantum annealing, is leading the charge with its 
                  cutting-edge systems, solving complex challenges in logistics, finance, and AI 
                  that classical computers struggle to address. In 2025, D-Wave's Advantage prototype 
                  achieved a historic milestone, demonstrating quantum computational supremacy on a 
                  real-world problem, per a peer-reviewed study in <a href="https://www.science.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Science</a>.
                </p>
                <div className="bg-white rounded-lg p-4 border border-blue-300">
                  <h3 className="font-bold text-gray-900 mb-2">🎯 Key Question</h3>
                  <p className="text-gray-700 italic">
                    But can D-Wave maintain its edge in the rapidly evolving quantum landscape?
                  </p>
                </div>
              </div>

              <h2>Introduction to Quantum Annealing and D-Wave's Leadership</h2>
              <p>
                <a href="https://en.wikipedia.org/wiki/Quantum_annealing" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Quantum annealing</a> 
                is a specialized quantum computing method designed to solve optimization problems by 
                leveraging quantum mechanics, such as superposition and tunneling, to explore vast 
                solution spaces simultaneously. Unlike classical computers, which evaluate solutions 
                sequentially, quantum annealing finds optimal or near-optimal solutions faster for 
                complex problems.
              </p>

              <p>
                <a href="https://www.dwavesys.com/company/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">D-Wave Systems</a>, 
                founded in 1999 in Burnaby, Canada, pioneered this approach, launching the first 
                commercial quantum computer in 2011. By 2025, D-Wave's quantum annealers, with over 
                5,000 qubits, are tackling challenges that would take classical supercomputers 
                millions of years, as evidenced by their breakthrough in magnetic materials simulation.
              </p>

              <blockquote className="border-l-4 border-blue-500 bg-blue-50 p-4 my-6">
                <p className="text-gray-700 italic">
                  "D-Wave's Advantage solved a spin glass simulation in minutes, a task estimated to 
                  take 1 million years on a classical supercomputer, per Science."
                </p>
                <footer className="text-sm text-gray-500 mt-2">— Research findings published in Science journal</footer>
              </blockquote>

              <h2>The Evolution of D-Wave Technology Over 20 Years</h2>
              <p>
                D-Wave's technology has evolved dramatically, cementing its role in quantum optimization. 
                By 2025, the <a href="https://www.dwavesys.com/media/fawfas2q/14-1049a-a_advantage2_prototype_product_brief.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Advantage2 prototype</a>, 
                with 5,000+ qubits and enhanced connectivity (15–20 qubits per node), outperforms 
                classical systems in real-world applications.
              </p>

              <h3>Key Technological Advancements Include:</h3>
              <ul>
                <li><strong>Increased Qubit Coherence:</strong> Reduced error rates improve solution accuracy</li>
                <li><strong>Hybrid Solvers:</strong> Combine quantum and classical methods for refined results</li>
                <li><strong>Fast Anneal Feature:</strong> Enables precise quantum calculations, per <a href="https://www.nature.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Nature</a> (2022)</li>
              </ul>

              <div className="not-prose">
                <TechTimeline />
              </div>

              <h3>Global Expansion and Cloud Access</h3>
              <p>
                D-Wave's <a href="https://cloud.dwavesys.com/leap/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Leap™ cloud service</a> 
                provides access to these systems, with 83% booking growth in Asia-Pacific in 2025, 
                per D-Wave internal reports. Collaborations with 11 institutions worldwide, including 
                <a href="https://www.titech.ac.jp/english/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Tokyo Institute of Technology</a>, 
                have driven innovations like quantum AI drug discovery.
              </p>

              <div className="not-prose bg-green-50 rounded-xl p-6 border border-green-200 my-8">
                <h3 className="font-bold text-lg text-gray-900 mb-4">🔬 Research Breakthrough</h3>
                <p className="text-gray-700 mb-4">
                  D-Wave's hybrid solvers show a 100x–1,000x speedup over classical heuristics for 
                  problems with 1,000+ variables, per <a href="https://www.nature.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Nature</a> research publications.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-600">100x-1000x</div>
                    <div className="text-sm text-gray-600">Speedup Factor</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">1,000+</div>
                    <div className="text-sm text-gray-600">Variables</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">Nature</div>
                    <div className="text-sm text-gray-600">Published</div>
                  </div>
                </div>
              </div>

              <h2>Real-World Applications and Market Impact</h2>
              <p>
                D-Wave's quantum systems are addressing practical challenges across multiple industries:
              </p>

              <h3>Logistics and Supply Chain</h3>
              <ul>
                <li><strong>Route optimization:</strong> Solving vehicle routing problems with thousands of constraints</li>
                <li><strong>Warehouse management:</strong> Optimizing inventory placement and retrieval</li>
                <li><strong>Supply chain resilience:</strong> Modeling disruption scenarios and mitigation strategies</li>
              </ul>

              <h3>Financial Services</h3>
              <ul>
                <li><strong>Portfolio optimization:</strong> Balancing risk and return across complex asset portfolios</li>
                <li><strong>Fraud detection:</strong> Identifying patterns in transaction data</li>
                <li><strong>Credit risk modeling:</strong> Assessing default probabilities with multiple variables</li>
              </ul>

              <h3>Artificial Intelligence and Machine Learning</h3>
              <ul>
                <li><strong>Feature selection:</strong> Identifying relevant variables in large datasets</li>
                <li><strong>Neural network training:</strong> Optimizing network architectures and parameters</li>
                <li><strong>Clustering algorithms:</strong> Grouping data points for pattern recognition</li>
              </ul>

              <h2>Competitive Landscape Analysis</h2>
              <p>
                D-Wave faces competition from tech giants and quantum startups, each pursuing different 
                approaches to quantum computing:
              </p>

              <div className="not-prose">
                <CompetitiveAnalysis />
              </div>

              <h3>D-Wave's Competitive Advantages</h3>
              <ul>
                <li><strong>Commercial maturity:</strong> Over a decade of commercial quantum systems deployment</li>
                <li><strong>Optimization focus:</strong> Specialized approach yields practical near-term benefits</li>
                <li><strong>Qubit count leadership:</strong> 5,000+ qubits exceed most gate-based competitors</li>
                <li><strong>Cloud accessibility:</strong> Easy access through Leap platform reduces barriers to adoption</li>
              </ul>

              <h2>Financial Performance and Market Position</h2>
              <p>
                As a public company trading on <a href="https://www.nyse.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">NYSE</a> 
                under ticker QBTS, D-Wave provides regular financial disclosures that offer insight 
                into the quantum computing market's commercial development.
              </p>

              <h3>Recent Financial Highlights</h3>
              <ul>
                <li><strong>Revenue growth:</strong> Expanding customer base and contract values</li>
                <li><strong>R&D investment:</strong> Continued investment in next-generation technologies</li>
                <li><strong>Strategic partnerships:</strong> Collaborations with major technology companies</li>
                <li><strong>Geographic expansion:</strong> Strong growth in Asia-Pacific markets</li>
              </ul>

              <h2>Technical Challenges and Future Roadmap</h2>
              <p>
                Despite significant progress, D-Wave faces ongoing technical challenges that could 
                impact its competitive position:
              </p>

              <h3>Current Limitations</h3>
              <ul>
                <li><strong>Problem scope:</strong> Quantum annealing limited to optimization problems</li>
                <li><strong>Error rates:</strong> Quantum noise and decoherence affect solution quality</li>
                <li><strong>Classical competition:</strong> Improving classical algorithms reduce quantum advantage</li>
                <li><strong>Integration complexity:</strong> Embedding real-world problems requires expertise</li>
              </ul>

              <h3>Future Development Priorities</h3>
              <ul>
                <li><strong>Error correction:</strong> Implementing quantum error correction protocols</li>
                <li><strong>Coherence improvement:</strong> Extending qubit coherence times</li>
                <li><strong>Software ecosystem:</strong> Developing user-friendly programming tools</li>
                <li><strong>Hybrid algorithms:</strong> Advancing quantum-classical hybrid approaches</li>
              </ul>

              <h2>Investment Implications and Market Outlook</h2>
              <p>
                The quantum computing market represents a long-term growth opportunity with significant 
                near-term uncertainty. <a href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/quantum-computing-funding-remains-strong-but-talent-gap-raises-concern" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">McKinsey</a> 
                estimates the quantum computing market could reach $850 billion by 2040, with 
                optimization applications among the earliest commercial applications.
              </p>

              <blockquote className="border-l-4 border-purple-500 bg-purple-50 p-4 my-6">
                <p className="text-gray-700 italic">
                  "D-Wave's focus on optimization problems positions it well for near-term commercial 
                  applications, but the company must continue innovating to maintain its technological 
                  edge as competitors advance their own quantum systems."
                </p>
                <footer className="text-sm text-gray-500 mt-2">— Quantum computing market analysis</footer>
              </blockquote>

              <h3>Key Investment Considerations</h3>
              <ul>
                <li><strong>Market timing:</strong> Early commercial applications emerging now</li>
                <li><strong>Technology risk:</strong> Rapidly evolving competitive landscape</li>
                <li><strong>Scalability:</strong> Ability to expand beyond optimization problems</li>
                <li><strong>Customer adoption:</strong> Enterprise willingness to adopt quantum solutions</li>
              </ul>

              <h2>Conclusion: Quantum Optimization's Commercial Reality</h2>
              <p>
                D-Wave's achievement of quantum computational supremacy on real-world optimization 
                problems marks a significant milestone in the commercialization of quantum computing. 
                The company's 25-year journey from quantum annealing research to practical applications 
                demonstrates the potential for quantum technologies to solve previously intractable problems.
              </p>

              <p>
                However, maintaining leadership in the rapidly evolving quantum landscape requires 
                continued innovation and expansion beyond optimization applications. As classical 
                computing improves and gate-based quantum computers advance, D-Wave must evolve its 
                technology and business model to sustain its competitive advantages.
              </p>

              <p>
                The question of whether D-Wave can maintain its edge ultimately depends on the 
                company's ability to continue delivering practical quantum advantages while expanding 
                into new problem domains and market segments. The next few years will be critical 
                in determining whether D-Wave's quantum annealing approach can establish sustainable 
                commercial advantages in the emerging quantum computing ecosystem.
              </p>
            </article>

            {/* Related Articles */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mt-8">
              <h3 className="font-bold text-lg text-gray-900 mb-4">🔗 Related Coverage</h3>
              <div className="grid gap-3">
                <Link href="/news/quantum-computing" className="text-blue-600 hover:underline font-medium">
                  ← Back to Quantum Computing Hub
                </Link>
                <Link href="/news" className="text-blue-600 hover:underline font-medium">
                  All Technology News →
                </Link>
                <a href="https://www.dwavesys.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                  D-Wave Official Website →
                </a>
                <a href="https://cloud.dwavesys.com/leap/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                  Try D-Wave Leap Cloud →
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              
              {/* Article Info */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">📊 Article Information</h3>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-gray-500">Published</dt>
                    <dd className="font-medium">January 15, 2026</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Author</dt>
                    <dd className="font-medium">ObjectWire Quantum Team</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Read Time</dt>
                    <dd className="font-medium">12 minutes</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Category</dt>
                    <dd className="font-medium">Quantum Computing</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Stock Ticker</dt>
                    <dd className="font-medium">NYSE: QBTS</dd>
                  </div>
                </dl>
              </div>

              {/* Company Facts */}
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="font-bold text-gray-900 mb-4">🏢 D-Wave Quick Facts</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Founded: 1999, Burnaby, Canada</li>
                  <li>• First commercial quantum computer: 2011</li>
                  <li>• Current qubits: 5,000+ (Advantage2)</li>
                  <li>• Approach: Quantum annealing</li>
                  <li>• Cloud platform: Leap™</li>
                  <li>• Focus: Optimization problems</li>
                </ul>
              </div>

              {/* Market Data */}
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="font-bold text-gray-900 mb-4">📈 Market Context</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Quantum market size: $850B by 2040</li>
                  <li>• APAC growth: 83% increase</li>
                  <li>• Research partners: 11 institutions</li>
                  <li>• Performance advantage: 1000x speedup</li>
                </ul>
              </div>

              {/* External Resources */}
              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                <h3 className="font-bold text-gray-900 mb-4">🔗 Key Resources</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a href="https://www.dwavesys.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                      D-Wave Official Site →
                    </a>
                  </li>
                  <li>
                    <a href="https://www.science.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                      Science Journal →
                    </a>
                  </li>
                  <li>
                    <a href="https://www.nature.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                      Nature Research →
                    </a>
                  </li>
                  <li>
                    <a href="https://cloud.dwavesys.com/leap/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                      Leap Cloud Platform →
                    </a>
                  </li>
                </ul>
              </div>

              {/* Share */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">📤 Share This Analysis</h3>
                <div className="space-y-3">
                  <button className="w-full bg-blue-500 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors">
                    Share on LinkedIn
                  </button>
                  <button className="w-full bg-green-500 text-white py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors">
                    Share on Twitter
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