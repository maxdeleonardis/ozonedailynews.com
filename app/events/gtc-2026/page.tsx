import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';

export const metadata: Metadata = {
  title: 'GTC 2026 — Nvidia GPU Technology Conference: Jensen Huang Keynote, Vera Rubin, Intel Partnership | ObjectWire',
  description:
    "Full coverage of Nvidia GTC 2026 in San Jose, CA — the world's premier AI conference. Jensen Huang's keynote on March 16, the Vera Rubin VR200 NVL72 GPU platform, the mystery \"Feynman\" chip, Agentic AI, OpenClaw, and the landmark Intel-Nvidia partnership on display.",
  keywords: [
    'Nvidia GTC 2026',
    'GTC 2026 San Jose',
    'Jensen Huang keynote GTC 2026',
    'Vera Rubin GPU VR200 NVL72',
    'Feynman chip Nvidia',
    'silicon photonics 1.6nm Nvidia',
    'Nvidia Intel partnership GTC',
    'NVLink Intel x86',
    'Agentic AI GTC 2026',
    'OpenClaw AI agents',
    'Nvidia GTC 2026 March 16',
    'GPU Technology Conference 2026',
    'AI conference 2026',
    'Nvidia Intel SOC chiplet',
    'Intel 18A Nvidia chips',
  ],
  openGraph: {
    title: 'GTC 2026 — Nvidia\'s "Age of AI" Summit: Vera Rubin, Feynman Chip & Intel Alliance',
    description:
      "30,000+ attendees descend on San Jose as GTC 2026 opens March 16. Jensen Huang keynotes from SAP Center. The Vera Rubin VR200 NVL72 GPU platform, a mystery \"Feynman\" silicon photonics chip, Agentic AI, and a landmark Intel-Nvidia partnership take center stage.",
    type: 'website',
    images: ['/nvidia/gtc-2026-hero.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GTC 2026 — Jensen Huang, Vera Rubin, Feynman & Intel × Nvidia | ObjectWire',
    description:
      "GTC 2026 opens March 16 in San Jose. 30,000+ attendees. Jensen Huang keynote at SAP Center. Vera Rubin GPU, mystery Feynman chip, Agentic AI, and the Intel-Nvidia \"frenemy\" alliance on full display.",
  },
  alternates: {
    canonical: 'https://www.objectwire.org/events/gtc-2026',
  },
};

export default function GTC2026Page() {
  return (
    <>
      <NewsArticleSchema
        title="GTC 2026 — Nvidia GPU Technology Conference Coverage"
        description="Full ObjectWire coverage of Nvidia GTC 2026 in San Jose, CA, opening March 16, 2026. Jensen Huang keynote, Vera Rubin VR200 NVL72, the Feynman chip, Agentic AI, OpenClaw, and the Intel-Nvidia partnership."
        publishedTime="2026-03-14T00:00:00Z"
        modifiedTime="2026-03-14T00:00:00Z"
        author="ObjectWire Technology Desk"
        articleUrl="https://www.objectwire.org/events/gtc-2026"
        section="Technology"
        keywords={[
          'Nvidia GTC 2026',
          'Jensen Huang',
          'Vera Rubin GPU',
          'Feynman chip',
          'Intel Nvidia partnership',
          'Agentic AI',
          'NVLink Intel',
          'AI conference',
        ]}
      />

      <main className="min-h-screen bg-white">

        {/* ── Hero ── */}
        <div className="bg-gradient-to-r from-green-900 via-emerald-900 to-teal-900 text-white">
          <div className="container mx-auto px-4 py-16 max-w-7xl">
            <div className="grid md:grid-cols-3 gap-8 items-start">

              {/* Main Info */}
              <div className="md:col-span-2">
                <p className="text-green-300 text-sm font-mono tracking-wider mb-4 uppercase">
                  March 16–21, 2026 · SAP Center & Convention Center, San Jose, CA
                </p>
                <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight text-white">
                  GTC 2026
                </h1>
                <p className="text-xl text-green-100 mb-2 font-semibold">
                  Nvidia GPU Technology Conference — "The Age of AI"
                </p>
                <p className="text-lg text-gray-100 mb-8 leading-relaxed">
                  The world's most influential AI conference returns to Silicon Valley. Over 30,000
                  in-person attendees and hundreds of thousands of virtual participants turn to GTC
                  for the biggest hardware, software, and partnership announcements defining the
                  next era of artificial intelligence.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {[
                    { value: '30,000+', label: 'In-Person' },
                    { value: '100s of K', label: 'Virtual' },
                    { value: 'Mar 16', label: 'Jensen Keynote' },
                    { value: '900+', label: 'Sessions' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white/10 rounded-lg p-4 backdrop-blur text-center">
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                      <p className="text-sm text-green-200">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.nvidia.com/en-us/gtc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-green-800 font-semibold px-5 py-2.5 rounded-lg hover:bg-green-50 transition-colors text-sm"
                  >
                    🟢 Official Site — nvidia.com/gtc
                  </a>
                  <span className="inline-flex items-center gap-2 bg-white/15 text-white font-medium px-5 py-2.5 rounded-lg text-sm border border-white/20">
                    📍 SAP Center, San Jose, CA
                  </span>
                </div>
              </div>

              {/* Quick Facts Card */}
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                <h3 className="font-bold text-lg mb-4 text-white">Event Details</h3>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-green-300 text-xs uppercase tracking-wider mb-0.5">Dates</dt>
                    <dd className="font-semibold text-white">March 16–21, 2026</dd>
                  </div>
                  <div>
                    <dt className="text-green-300 text-xs uppercase tracking-wider mb-0.5">Keynote</dt>
                    <dd className="font-semibold text-white">Mon, March 16 — 11:00 AM PT<br />SAP Center, San Jose</dd>
                  </div>
                  <div>
                    <dt className="text-green-300 text-xs uppercase tracking-wider mb-0.5">Location</dt>
                    <dd className="font-semibold text-white">SAP Center &amp; San Jose<br />Convention Center, CA</dd>
                  </div>
                  <div>
                    <dt className="text-green-300 text-xs uppercase tracking-wider mb-0.5">Host</dt>
                    <dd className="font-semibold text-white">Nvidia Corporation</dd>
                  </div>
                  <div>
                    <dt className="text-green-300 text-xs uppercase tracking-wider mb-0.5">Theme</dt>
                    <dd className="font-semibold text-white">"The Age of AI"</dd>
                  </div>
                  <div>
                    <dt className="text-green-300 text-xs uppercase tracking-wider mb-0.5">Website</dt>
                    <dd>
                      <a
                        href="https://www.nvidia.com/en-us/gtc/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-300 hover:text-white underline underline-offset-2 transition-colors"
                      >
                        nvidia.com/gtc
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* ── What Is GTC ── */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4 py-12 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">What Is GTC?</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  The <strong>GPU Technology Conference</strong> is{' '}
                  <Link href="/nvidia" className="text-green-700 font-medium hover:underline">
                    Nvidia
                  </Link>
                  's annual flagship event and, over the last five years, has evolved from a
                  graphics-focused developer conference into the definitive{' '}
                  <strong>"World's Fair" for Artificial Intelligence</strong>. Every major player
                  in AI infrastructure — chipmakers, cloud providers, software companies, and
                  enterprise buyers — treats GTC as the calendar event where the industry's
                  next year is defined.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  GTC 2026 is expected to be the largest edition ever, with over{' '}
                  <strong>30,000 in-person attendees</strong> in San Jose and hundreds of thousands
                  joining virtually. The event's scale and the weight of expected announcements
                  have drawn comparisons to the original Apple Macintosh reveals and Intel
                  Developer Forums at their peak — moments when a single week reshaped an
                  entire industry's trajectory.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '🤖', title: 'AI Hardware', desc: 'Next-generation GPU and inference chip platforms, including the Vera Rubin architecture and the rumored Feynman chip' },
                  { icon: '🔗', title: 'Partnerships', desc: 'The Intel-Nvidia "frenemy" alliance goes public with NVLink x86 CPUs, foundry discussions, and consumer SOC chiplets' },
                  { icon: '🧠', title: 'Agentic AI', desc: 'Autonomous AI systems that execute complex workflows — not just answer questions — take center stage at GTC 2026' },
                  { icon: '⚙️', title: 'Software & Frameworks', desc: 'OpenClaw, CUDA extensions, and new inference optimization tools for the post-Blackwell era' },
                ].map((item) => (
                  <div key={item.title} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h3 className="font-bold text-gray-900 mb-1 text-sm">{item.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Jensen Keynote ── */}
        <div className="container mx-auto px-4 py-14 max-w-7xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Keynote</span>
            <h2 className="text-3xl font-bold text-gray-900">Jensen Huang's Opening Keynote — March 16, 11:00 AM PT</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="md:col-span-2 prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                <Link href="/nvidia" className="text-green-700 font-medium hover:underline">
                  Nvidia
                </Link>{' '}
                founder and CEO <strong>Jensen Huang</strong> will deliver the opening keynote from
                the <strong>SAP Center</strong> — San Jose's 18,000-seat arena — on Monday, March 16
                at <strong>11:00 AM PT</strong>. The venue choice alone signals the scale of ambition:
                Huang has previously used the arena format to turn product announcements into
                theatrical events that drive global media coverage and stock market movements
                simultaneously.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Huang has teased the keynote with characteristic dramatic framing, hinting at
                innovations that will <em>"surprise the world."</em> Analysts and industry insiders
                have spent weeks parsing his public statements and supply chain signals to reconstruct
                what is likely to be unveiled. The two headline items generating the most anticipation
                are the <strong>Vera Rubin VR200 NVL72 GPU platform</strong> and a mysterious
                new silicon architecture referred to internally as <strong>"Feynman."</strong>
              </p>
              <p className="text-gray-700 leading-relaxed">
                The keynote will also address{' '}
                <Link href="/nvidia/news/JensenHuang-AI-Agent-Will-Boost-Enterprise-Software-Value" className="text-green-700 font-medium hover:underline">
                  Agentic AI and its implications for enterprise software
                </Link>{' '}
                — a theme Huang has been developing in public forums throughout early 2026, arguing
                that AI agents increase rather than displace the value of platforms like ServiceNow,
                SAP, and Oracle.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="font-bold text-green-900 mb-4 text-sm uppercase tracking-wide">Keynote At a Glance</h3>
              <dl className="space-y-3 text-sm">
                {[
                  { label: 'Speaker', value: 'Jensen Huang, Founder & CEO' },
                  { label: 'Date', value: 'Monday, March 16, 2026' },
                  { label: 'Time', value: '11:00 AM PT' },
                  { label: 'Venue', value: 'SAP Center, San Jose' },
                  { label: 'Expected Topics', value: 'Vera Rubin · Feynman · Agentic AI · Intel Alliance' },
                  { label: 'Available', value: 'Live stream via nvidia.com/gtc' },
                ].map((item) => (
                  <div key={item.label}>
                    <dt className="text-green-700 text-xs uppercase tracking-wider">{item.label}</dt>
                    <dd className="font-semibold text-gray-900">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* ── Expected Announcements ── */}
        <div className="bg-gray-50 border-y border-gray-200">
          <div className="container mx-auto px-4 py-14 max-w-7xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">What to Expect: Key Announcements</h2>
            <p className="text-gray-600 mb-10 text-lg">
              Based on Nvidia's public statements, supply chain analysis, and analyst briefings, here are
              the major announcements expected at GTC 2026.
            </p>

            <div className="grid md:grid-cols-2 gap-8">

              {/* Vera Rubin */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-4">
                  <p className="text-green-100 text-xs font-mono uppercase tracking-widest mb-1">GPU Platform</p>
                  <h3 className="text-white text-xl font-bold">Vera Rubin — VR200 NVL72</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    The official launch of the <strong>VR200 NVL72 GPU platform</strong> — the next
                    architecture after Blackwell — is the most anticipated hardware announcement of
                    GTC 2026. Named after pioneering astronomer Vera Rubin, the platform is expected
                    to deliver a <strong>3.3x inference performance boost</strong> over the previous
                    Blackwell generation and slash per-token costs by <strong>up to 90%</strong>.
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    The 72-chip NVLink rack configuration (NVL72) builds on the NVL36 Blackwell
                    cluster architecture, scaling the interconnect fabric to support larger model
                    inference in a single rack footprint.{' '}
                    <Link href="/nvidia/nvidia-groq-lpu-inference-platform-gtc-2026-20-billion-licensing-deal" className="text-green-700 font-medium hover:underline">
                      The Groq LPU licensing deal
                    </Link>{' '}
                    is expected to play a role in how inference is handled within the Vera Rubin
                    ecosystem.
                  </p>
                  <div className="bg-green-50 rounded-lg p-4 text-sm">
                    <ul className="space-y-1 text-gray-700">
                      <li>• <strong>3.3x</strong> inference performance vs. Blackwell</li>
                      <li>• Up to <strong>90% reduction</strong> in token costs</li>
                      <li>• <strong>NVL72</strong> rack: 72-chip NVLink configuration</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Feynman */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="bg-gradient-to-r from-teal-600 to-cyan-700 px-6 py-4">
                  <p className="text-teal-100 text-xs font-mono uppercase tracking-widest mb-1">Mystery Architecture</p>
                  <h3 className="text-white text-xl font-bold">The "Feynman" Chip</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    Huang's promise to "surprise the world" has focused analyst attention on a
                    rumored architecture codenamed <strong>"Feynman"</strong> — a chip that, if
                    the supply chain signals are accurate, would represent the most fundamental
                    architectural departure in Nvidia's history.
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    Feynman is speculated to leverage <strong>silicon photonics</strong> — transmitting
                    data using light rather than electrons — built on a <strong>1.6nm process node</strong>.
                    If confirmed, this would place Nvidia beyond the 2nm frontier where both{' '}
                    <Link href="/intel/18a-high-volume-manufacturing" className="text-green-700 font-medium hover:underline">
                      Intel's 18A
                    </Link>{' '}
                    and TSMC's N2 currently operate, and would dramatically reduce memory bandwidth
                    bottlenecks that currently limit large model inference.
                  </p>
                  <div className="bg-teal-50 rounded-lg p-4 text-sm">
                    <ul className="space-y-1 text-gray-700">
                      <li>• <strong>Silicon photonics</strong> — data via light, not electrons</li>
                      <li>• Rumored <strong>1.6nm</strong> process node</li>
                      <li>• Could revolutionize memory bandwidth for LLM inference</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Agentic AI */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="bg-gradient-to-r from-violet-600 to-purple-700 px-6 py-4">
                  <p className="text-violet-100 text-xs font-mono uppercase tracking-widest mb-1">Software Platform</p>
                  <h3 className="text-white text-xl font-bold">Agentic AI &amp; OpenClaw</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    Alongside hardware, GTC 2026 is positioning itself as the defining event for{' '}
                    <strong>Agentic AI</strong> — autonomous systems that don't simply answer
                    questions but execute complex, multi-step workflows across tools, databases,
                    and external systems independently.
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    A major focus will be <strong>OpenClaw</strong>, an open-source project for
                    building and deploying <em>persistent</em> AI agents — systems that maintain
                    state and memory across sessions rather than resetting with each query.{' '}
                    <Link href="/nvidia/news/JensenHuang-AI-Agent-Will-Boost-Enterprise-Software-Value" className="text-green-700 font-medium hover:underline">
                      Jensen Huang has been explicit
                    </Link>{' '}
                    that he sees agentic AI as the next $10 trillion layer of the software stack —
                    above and alongside existing enterprise platforms.
                  </p>
                  <div className="bg-violet-50 rounded-lg p-4 text-sm">
                    <ul className="space-y-1 text-gray-700">
                      <li>• <strong>OpenClaw</strong> — open-source persistent AI agent framework</li>
                      <li>• Focus on multi-step autonomous workflow execution</li>
                      <li>• New CUDA extensions for agentic workload optimization</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Intel Frenemy */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-4">
                  <p className="text-blue-100 text-xs font-mono uppercase tracking-widest mb-1">Strategic Partnership</p>
                  <h3 className="text-white text-xl font-bold">Intel × Nvidia: The Frenemy Alliance</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    The most surprising development heading into GTC 2026 is the confirmed presence
                    of{' '}
                    <Link href="/intel" className="text-green-700 font-medium hover:underline">
                      Intel
                    </Link>
                    {' '}as a strategic partner — once Nvidia's primary CPU rival, now a collaborator
                    following their landmark <strong>September 2025 agreement</strong> in which
                    Nvidia invested <strong>$5 billion</strong> in Intel stock.
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    Intel is showcasing new <strong>x86 CPUs with native NVLink support</strong> —
                    a fundamental architectural integration that allows unprecedented data throughput
                    between Intel processors and Nvidia GPUs, eliminating PCIe bandwidth as a
                    bottleneck in AI training and inference systems. The partnership also includes
                    the first glimpse at <strong>Intel x86 SOCs integrating Nvidia RTX GPU
                    chiplets</strong>, targeting thin-and-light laptops with professional AI
                    inference capability.
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    Analysts are also watching for any confirmation that{' '}
                    <Link href="/intel/18a-high-volume-manufacturing" className="text-green-700 font-medium hover:underline">
                      Intel's 18A foundry process
                    </Link>{' '}
                    will manufacture future Nvidia chips — which would be the most significant
                    Intel Foundry customer win since the company restructured its foundry business.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4 text-sm">
                    <ul className="space-y-1 text-gray-700">
                      <li>• <strong>$5B</strong> Nvidia investment in Intel (Sept 2025)</li>
                      <li>• Intel x86 CPUs with <strong>native NVLink</strong> support</li>
                      <li>• Intel x86 + <strong>Nvidia RTX chiplet</strong> SOCs for laptops</li>
                      <li>• Potential <strong>Intel 18A foundry</strong> confirmation for Nvidia chips</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ── The Five-Layer Cake ── */}
        <div className="container mx-auto px-4 py-14 max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">The "Five-Layer Cake" of AI Infrastructure</h2>
          <p className="text-gray-600 mb-8 text-lg max-w-3xl">
            Industry analysts have framed the Intel-Nvidia overlap as a{' '}
            <strong>"Five-Layer Cake"</strong> — five distinct AI infrastructure layers where the two companies
            now both operate and, in some cases, collaborate.
          </p>

          <div className="space-y-3">
            {[
              {
                number: '1',
                layer: 'Process & Fabrication',
                desc: 'Intel 18A foundry as a potential manufacturer of future Nvidia networking and secondary chips. The most consequential — and least confirmed — layer of the partnership.',
                link: '/intel/18a-high-volume-manufacturing',
                linkLabel: 'Intel 18A high-volume manufacturing →',
                color: 'border-l-blue-500',
                bg: 'bg-blue-50',
              },
              {
                number: '2',
                layer: 'CPU + GPU Integration',
                desc: 'Intel x86 CPUs with native NVLink support, enabling direct high-bandwidth CPU-GPU data paths that eliminate the PCIe bottleneck in AI servers and workstations.',
                link: '/intel',
                linkLabel: 'Intel coverage →',
                color: 'border-l-indigo-500',
                bg: 'bg-indigo-50',
              },
              {
                number: '3',
                layer: 'Consumer SOC Chiplets',
                desc: 'Intel x86 cores fused with Nvidia RTX GPU chiplets on a single SoC substrate — targeting mainstream laptops with AI inference performance previously exclusive to discrete GPU workstations.',
                link: '/intel',
                linkLabel: 'Intel coverage →',
                color: 'border-l-violet-500',
                bg: 'bg-violet-50',
              },
              {
                number: '4',
                layer: 'Inference Platform',
                desc: 'The Vera Rubin NVL72 and the Groq LPU-integrated inference stack, where Intel CPUs serve as host processors orchestrating Nvidia\'s inference accelerator racks.',
                link: '/nvidia/nvidia-groq-lpu-inference-platform-gtc-2026-20-billion-licensing-deal',
                linkLabel: 'Nvidia Groq inference platform →',
                color: 'border-l-green-500',
                bg: 'bg-green-50',
              },
              {
                number: '5',
                layer: 'Agentic Software Stack',
                desc: 'OpenClaw and Nvidia\'s agentic AI frameworks running on Intel-powered edge and enterprise hardware — extending the partnership from data center silicon to distributed software.',
                link: '/nvidia/news/JensenHuang-AI-Agent-Will-Boost-Enterprise-Software-Value',
                linkLabel: 'Jensen Huang on agentic AI →',
                color: 'border-l-teal-500',
                bg: 'bg-teal-50',
              },
            ].map((item) => (
              <div key={item.number} className={`${item.bg} border-l-4 ${item.color} rounded-r-xl p-5 flex gap-5 items-start`}>
                <span className="text-3xl font-black text-gray-300 leading-none mt-1 w-8 shrink-0">{item.number}</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.layer}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-2">{item.desc}</p>
                  <Link href={item.link} className="text-green-700 text-sm font-medium hover:underline">
                    {item.linkLabel}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Coverage Links ── */}
        <div className="bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto px-4 py-12 max-w-7xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">ObjectWire GTC 2026 Coverage</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  href: '/nvidia/nvidia-groq-lpu-inference-platform-gtc-2026-20-billion-licensing-deal',
                  category: 'Nvidia',
                  title: 'Nvidia Groq LPU Inference Platform — $20B Licensing Deal',
                  desc: "How Nvidia's $20B deal with Groq shapes the inference platform being unveiled at GTC.",
                  color: 'border-t-green-500',
                },
                {
                  href: '/nvidia/news/JensenHuang-AI-Agent-Will-Boost-Enterprise-Software-Value',
                  category: 'Nvidia',
                  title: "Jensen Huang: AI Agents Will Boost Enterprise Software's Value",
                  desc: 'The philosophical framing behind the Agentic AI focus at GTC 2026.',
                  color: 'border-t-green-500',
                },
                {
                  href: '/nvidia/news/qualcomm-nvidia-6g-coalitions-mwc-2026',
                  category: 'Nvidia',
                  title: 'Nvidia 6G AI Infrastructure Alliance — MWC 2026',
                  desc: "Nvidia's 6G coalition launch at MWC 2026, a prelude to GTC's broader network AI story.",
                  color: 'border-t-green-500',
                },
                {
                  href: '/intel/18a-high-volume-manufacturing',
                  category: 'Intel',
                  title: 'Intel 18A: High-Volume Manufacturing Begins',
                  desc: "Intel's 18A process node enters HVM — the foundry milestone that makes the Nvidia partnership credible.",
                  color: 'border-t-blue-500',
                },
                {
                  href: '/intel',
                  category: 'Intel',
                  title: 'Intel Hub — Full Coverage',
                  desc: "All ObjectWire coverage of Intel's strategy, products, and foundry business.",
                  color: 'border-t-blue-500',
                },
                {
                  href: '/nvidia',
                  category: 'Nvidia',
                  title: 'Nvidia Hub — Full Coverage',
                  desc: "All ObjectWire coverage of Nvidia's AI strategy, hardware, and partnerships.",
                  color: 'border-t-green-500',
                },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`bg-white rounded-xl border border-gray-200 border-t-4 ${item.color} p-5 hover:shadow-md transition-shadow block`}
                >
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{item.category}</p>
                  <h3 className="font-bold text-gray-900 text-sm mb-2 leading-snug">{item.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>

      </main>
    </>
  );
}
