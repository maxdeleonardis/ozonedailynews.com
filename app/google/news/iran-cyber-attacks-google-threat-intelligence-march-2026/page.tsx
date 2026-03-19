import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox } from '@/components/NewsArticle';

const SLUG = '/google/news/iran-cyber-attacks-google-threat-intelligence-march-2026';
const AUTHOR_NAME = 'ObjectWire Tech Desk';

export const metadata: Metadata = {
  title: 'Google Warns of Iran-Linked Cyber Attacks Targeting Global Infrastructure — March 2, 2026 | ObjectWire',
  description:
    'Google Threat Intelligence Group issued an alert March 2, 2026, warning that Iranian state-affiliated actors launched a coordinated cyber campaign targeting Israel, Gulf states, Europe, and North America, with 150+ hacktivist-claimed incidents logged in 72 hours.',
  keywords: [
    'Google Threat Intelligence Iran cyber attacks 2026',
    'Iranian cyber campaign March 2026',
    'Operation Roaring Lion Operation Epic Fury',
    'Iran hacktivist DDoS 2026',
    'CloudSEK Iran cyber incidents',
    'IRGC cyber units 2026',
    'Iran Israel cyber war 2026',
    'Mandiant Iranian threat actors',
    'Cloudflare DDoS Iran 1.2 Tbps',
    'Microsoft credential stuffing Iran',
    'Google threat intelligence group alert',
    'Iran critical infrastructure cyber attack',
    'Gulf Cooperation Council cyber attack',
    'Iranian state actor SCADA OT',
    'cyber escalation Middle East 2026',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: "Google Warns of Iran-Linked Cyber Attacks Targeting Global Infrastructure — March 2, 2026",
    description:
      "150+ hacktivist-claimed incidents in 72 hours. DDoS peaks at 1.2 Tbps. Google, Mandiant, Cloudflare, and Microsoft all issued alerts. No confirmed critical OT compromise as of March 2.",
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: [AUTHOR_NAME],
    publishedTime: '2026-03-02T00:00:00Z',
    modifiedTime: '2026-03-02T00:00:00Z',
    section: 'Tech',
    tags: [
      'Google', 'Cybersecurity', 'Iran', 'Threat Intelligence',
      'DDoS', 'IRGC', 'Middle East', 'Critical Infrastructure',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Google: Iran-Linked Actors Hit Israel, Gulf States & Western Infrastructure — 150+ Incidents in 72 Hrs",
    description:
      "Google Threat Intelligence Group alert March 2, 2026: Iranian state-aligned hacktivists targeted energy, finance, aviation, and telecoms in coordinated campaign tied to Operation Roaring Lion.",
  },
};

// ─── Timeline data ────────────────────────────────────────────────────────────
const timeline = [
  {
    date: 'Feb 28, 2026',
    event: 'Initial hacktivist claims appear on Telegram and X channels within hours of confirmed missile launches.',
    source: 'CloudSEK initial alert',
    color: 'border-orange-500 bg-orange-50',
    dot: 'bg-orange-500',
  },
  {
    date: 'Feb 28 – Mar 1',
    event: '150+ incidents logged: DDoS ~68%, defacements ~22%, data-exfiltration claims ~10%.',
    source: 'CloudSEK breakdown',
    color: 'border-red-500 bg-red-50',
    dot: 'bg-red-500',
  },
  {
    date: 'Mar 1, 2026',
    event: 'Google publishes warning of heightened Iranian cyber posture, citing reconnaissance against Western financial institutions.',
    source: 'Google blog post',
    color: 'border-blue-500 bg-blue-50',
    dot: 'bg-blue-500',
  },
  {
    date: 'Mar 2, 2026',
    event: 'Additional claims surface targeting European aviation firms and U.S. energy utilities.',
    source: 'Mandiant threat update',
    color: 'border-purple-500 bg-purple-50',
    dot: 'bg-purple-500',
  },
];

// ─── Sector breakdown ─────────────────────────────────────────────────────────
const sectors = [
  { label: 'Government', pct: '35%', color: 'bg-red-500' },
  { label: 'Finance', pct: '22%', color: 'bg-blue-500' },
  { label: 'Aviation / Transport', pct: '18%', color: 'bg-orange-500' },
  { label: 'Energy / Utilities', pct: '12%', color: 'bg-yellow-500' },
  { label: 'Telecommunications', pct: '8%', color: 'bg-purple-500' },
  { label: 'Other', pct: '5%', color: 'bg-gray-400' },
];

// ─── Geographic distribution ──────────────────────────────────────────────────
const geo = [
  { label: 'Israel', pct: '42%', color: 'bg-blue-600' },
  { label: 'Saudi Arabia', pct: '18%', color: 'bg-green-600' },
  { label: 'UAE', pct: '15%', color: 'bg-emerald-500' },
  { label: 'Bahrain', pct: '9%', color: 'bg-teal-500' },
  { label: 'Other Gulf States', pct: '8%', color: 'bg-cyan-500' },
  { label: 'Europe / North America', pct: '8%', color: 'bg-indigo-500' },
];

// ─── Industry assessments ─────────────────────────────────────────────────────
const assessments = [
  {
    firm: 'Google Threat Intelligence Group',
    finding: 'Elevated activity from groups previously linked to IRGC cyber units. Use of commodity tools + custom wipers. No confirmed OT compromise.',
    color: 'border-blue-400 bg-blue-50',
    icon: '🔵',
  },
  {
    firm: 'Mandiant',
    finding: '3–5× increase in Iranian-origin scanning against Middle East energy assets.',
    color: 'border-red-400 bg-red-50',
    icon: '🔴',
  },
  {
    firm: 'Cloudflare',
    finding: 'Iran-origin DDoS campaigns peaked at 1.2 Tbps on February 28, 2026.',
    color: 'border-orange-400 bg-orange-50',
    icon: '🟠',
  },
  {
    firm: 'Microsoft Threat Intelligence',
    finding: 'Credential-stuffing attempts against regional financial institutions.',
    color: 'border-green-400 bg-green-50',
    icon: '🟢',
  },
];

export default function IranCyberAttacksGoogleAlertPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Google Warns of Iran-Linked Cyber Attacks Targeting Global Infrastructure — March 2, 2026"
        description="Google Threat Intelligence Group issued an alert March 2, 2026, warning that Iranian state-affiliated actors launched a coordinated cyber campaign targeting Israel, Gulf states, Europe, and North America."
        author={AUTHOR_NAME}
        authorUrl="https://www.objectwire.org/team"
        publishedTime="2026-03-02T00:00:00Z"
        modifiedTime="2026-03-02T00:00:00Z"
        articleUrl={`https://www.objectwire.org${SLUG}`}
        section="Tech"
        keywords={[
          'Google Threat Intelligence Iran 2026',
          'Iranian cyber campaign',
          'Operation Roaring Lion',
          'IRGC cyber units',
          'hacktivist DDoS Middle East',
          'Iran critical infrastructure cyber',
        ]}
      />

      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'Google', item: '/google' },
              { name: 'News', item: '/google/news' },
              { name: 'Iran Cyber Attacks — Google Alert March 2026', item: SLUG },
            ]}
          />
        </div>
      </div>

      <NewsArticle
        title="Google Warns of Iran-Linked Cyber Attacks Targeting Global Infrastructure Amid Ongoing Conflict"
        subtitle="Google's Threat Intelligence Group issued an alert March 2, 2026, documenting a coordinated campaign by Iranian state-affiliated actors against Israel, Gulf states, and Western critical infrastructure — with 150+ hacktivist-claimed incidents logged in 72 hours."
        category="Tech"
        categoryColor="blue"
        topicTag="technology"
        publishDate="March 2, 2026"
        readTime="6 min read"
        breaking
        author={{
          name: AUTHOR_NAME,
          role: 'Technology & Cybersecurity',
        }}
        tags={[
          'Google',
          'Cybersecurity',
          'Iran',
          'Threat Intelligence',
          'DDoS',
          'IRGC',
          'Middle East',
          'Critical Infrastructure',
          'Mandiant',
          'Cloudflare',
        ]}
      >

        {/* Lede */}
        <p>
          <strong>Google&apos;s Threat Intelligence Group</strong> issued an alert on{' '}
          <strong>March 2, 2026</strong>, stating that Iranian state-affiliated actors and aligned
          hacktivist collectives have launched a coordinated cyber campaign targeting entities in{' '}
          <strong>Israel</strong>, <strong>Gulf Cooperation Council countries</strong>, and locations
          in <strong>Europe and North America</strong>. The activity correlates with the start of
          joint U.S.-Israeli military operations — designated{' '}
          <strong>Operation Roaring Lion</strong> (U.S.-led) and{' '}
          <strong>Operation Epic Fury</strong> (Israeli-led) — both initiated on{' '}
          <strong>February 28, 2026</strong>.
        </p>
        <p>
          Between February 28 and March 1, CloudSEK documented more than{' '}
          <strong>150 hacktivist-claimed incidents</strong> across public channels — primarily
          DDoS attacks, website defacements, and data-exfiltration operations against government,
          financial, aviation, telecommunications, and critical-infrastructure sectors. Google also
          identified increased scanning and reconnaissance from known Iranian-linked IP ranges
          targeting energy, finance, and transportation sectors in the region and beyond.
        </p>
        <p>
          <strong>No confirmed successful intrusions into critical operational technology systems
          have been publicly disclosed as of March 2, 2026.</strong>
        </p>

        <HighlightBox type="key-point" color="blue">
          <strong>Situation Summary:</strong> 150+ hacktivist incidents in 72 hrs &bull;
          DDoS peaks at 1.2 Tbps (Cloudflare) &bull; Google, Mandiant, Cloudflare & Microsoft
          all issued alerts &bull; No confirmed OT/SCADA compromise as of March 2, 2026 &bull;
          Tied to Operations Roaring Lion & Epic Fury (Feb 28, 2026).
        </HighlightBox>

        {/* Timeline */}
        <h2>Timeline of Reported Cyber Activity</h2>
        <p>
          Cyber activity escalated immediately following the first reported military strikes on
          February 28, 2026:
        </p>

        <div className="not-prose my-6 space-y-3">
          {timeline.map((item) => (
            <div key={item.date} className={`border-l-4 rounded-r-xl p-4 ${item.color} flex items-start gap-4`}>
              <div className={`w-3 h-3 rounded-full mt-1.5 shrink-0 ${item.dot}`} />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-gray-900 text-sm">{item.date}</span>
                  <span className="text-xs text-gray-500">— {item.source}</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{item.event}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tactics */}
        <h2>Key Tactics Observed in the Campaign</h2>
        <p>
          The majority of activity follows patterns previously associated with Iranian state actors
          and affiliated hacktivist groups:
        </p>
        <ul>
          <li>
            <strong>DDoS attacks</strong> — Volumetric floods targeting government portals and
            financial exchanges, with peaks exceeding <strong>1.2 Tbps</strong> in isolated cases
            (Cloudflare Radar, Feb 28–Mar 1)
          </li>
          <li>
            <strong>Website defacements</strong> — Replacement of homepages with political
            messaging on regional airline, bank, and ministry sites (Zone-H archive, Mar 1)
          </li>
          <li>
            <strong>Data-exfiltration claims</strong> — Public releases of alleged stolen documents
            from energy and telecom firms; authenticity remains unverified in most instances
          </li>
          <li>
            <strong>Reconnaissance scans</strong> — Increased port scanning and vulnerability
            probing from Iranian ASNs against OT/SCADA environments in Gulf states (Google
            Threat Intelligence indicators)
          </li>
        </ul>

        {/* Geographic + sector breakdown */}
        <h2>Affected Sectors and Geographic Scope</h2>
        <p>
          CloudSEK&apos;s March 1 report broke down the claim distribution by both geography
          and sector. Israel accounted for the largest share of targeted entities, while government
          and finance were the most frequently hit verticals.
        </p>

        <div className="not-prose my-6 grid md:grid-cols-2 gap-6">
          {/* Geographic */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">Geographic Distribution</h3>
            <div className="space-y-3">
              {geo.map((g) => (
                <div key={g.label}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700 font-medium">{g.label}</span>
                    <span className="font-bold text-gray-900">{g.pct}</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${g.color}`} style={{ width: g.pct }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sectors */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">Sectors Targeted</h3>
            <div className="space-y-3">
              {sectors.map((s) => (
                <div key={s.label}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700 font-medium">{s.label}</span>
                    <span className="font-bold text-gray-900">{s.pct}</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${s.color}`} style={{ width: s.pct }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p>
          Notable targets included regional stock exchanges, national airlines, central banks,
          port authorities, and power grid operators across the affected regions.
        </p>

        {/* Industry assessments */}
        <h2>Google and Industry Threat Assessments</h2>
        <p>
          Four major cybersecurity firms published or updated threat intelligence briefs between
          March 1–2, 2026:
        </p>

        <div className="not-prose my-6 grid sm:grid-cols-2 gap-4">
          {assessments.map((a) => (
            <div key={a.firm} className={`border-l-4 rounded-xl p-4 ${a.color}`}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{a.icon}</span>
                <span className="font-bold text-gray-900 text-sm">{a.firm}</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">{a.finding}</p>
            </div>
          ))}
        </div>

        <p>
          Google&apos;s alert specifically highlighted elevated activity from groups previously linked
          to Iran&apos;s <strong>Islamic Revolutionary Guard Corps (IRGC)</strong> cyber units, the
          use of commodity tools for initial access combined with custom wipers in select operations,
          and — crucially — no evidence of successful OT compromise at time of publication.
        </p>

        {/* Historical context */}
        <h2>Broader Context: Historical Comparisons</h2>
        <p>
          The current campaign volume significantly exceeds prior escalation periods tied to
          Iran-related tensions:
        </p>

        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full border-collapse rounded-xl overflow-hidden shadow-sm text-sm">
            <thead>
              <tr className="bg-slate-800 text-white">
                <th className="text-left px-4 py-3 font-semibold">Period</th>
                <th className="text-left px-4 py-3 font-semibold">Context</th>
                <th className="text-right px-4 py-3 font-semibold">Volume</th>
              </tr>
            </thead>
            <tbody>
              {[
                { period: '2020', context: 'U.S.–Iran tensions post-Soleimani', volume: '~200 incidents total', highlight: false },
                { period: '2024', context: 'Regional flare-ups (avg weekly)', volume: '80–120 claims/week', highlight: false },
                { period: 'Feb 28–Mar 1, 2026', context: 'Operations Roaring Lion & Epic Fury', volume: '150+ in 72 hours', highlight: true },
              ].map((row, i) => (
                <tr key={row.period} className={row.highlight ? 'bg-red-50 font-semibold' : i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="px-4 py-3 text-gray-900">{row.period}</td>
                  <td className="px-4 py-3 text-gray-700">{row.context}</td>
                  <td className={`px-4 py-3 text-right ${row.highlight ? 'text-red-700 font-bold' : 'text-gray-800'}`}>{row.volume}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          The 150+ incidents in 72 hours exceeds the prior <em>weekly</em> average from similar
          escalation periods in 2024, suggesting a more coordinated and rapid mobilization of
          hacktivist infrastructure — though elevated claiming volume does not necessarily equate
          to elevated real-world impact.
        </p>

        {/* Related context */}
        <div className="not-prose my-6 rounded-xl border border-blue-200 bg-blue-50 p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-3">Related Coverage — Google & Tech Security</p>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            {[
              { href: '/google', label: '🔵 Google 2026 Hub', desc: 'Gemini, AI Search & Alphabet strategy' },
              { href: '/google/agentic-vision', label: '🤖 Google Agentic Vision', desc: "Google's AI agent roadmap" },
              { href: '/google/waymo', label: '🚗 Waymo Coverage', desc: 'Autonomous vehicle updates' },
              { href: '/tech', label: '💻 Tech News Hub', desc: 'All technology coverage on ObjectWire' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex flex-col rounded-lg border border-blue-200 bg-white p-3 hover:border-blue-400 hover:shadow-sm transition-all"
              >
                <span className="font-semibold text-blue-700">{link.label}</span>
                <span className="text-gray-500 text-xs mt-0.5">{link.desc}</span>
              </Link>
            ))}
          </div>
        </div>

        <HighlightBox type="quote" color="blue">
          &ldquo;When state-backed hackers claim 150 incidents in three days but critical systems
          stay online, the real impact often measures in press releases rather than
          blackouts.&rdquo;
        </HighlightBox>

      </NewsArticle>
    </SEOWrapper>
  );
}
