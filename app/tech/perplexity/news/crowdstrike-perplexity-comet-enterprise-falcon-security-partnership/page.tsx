import type { Metadata } from 'next';
import NewsArticle, { HighlightBox } from '@/components/NewsArticle';

const SLUG = '/tech/perplexity/news/crowdstrike-perplexity-comet-enterprise-falcon-security-partnership';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title:
    'CrowdStrike & Perplexity Unite to Shield the "Agentic" Workforce | ObjectWire',
  description:
    'CrowdStrike and Perplexity announced a major strategic partnership at Ask 2026, embedding the Falcon security platform directly into Comet Enterprise — Perplexity\'s AI-native browser. The first major deployment of CrowdStrike\'s $420M Seraphic Security acquisition.',
  keywords: [
    'CrowdStrike Perplexity partnership 2026',
    'Comet Enterprise browser security',
    'CrowdStrike Falcon Comet browser integration',
    'Seraphic Security CrowdStrike acquisition',
    'agentic AI security enterprise',
    'browser security JavaScript engine randomization',
    'shadow AI enterprise prevention',
    'Ask 2026 CrowdStrike announcement',
    'man-in-the-browser attack prevention',
    'Perplexity Comet Enterprise Falcon',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'CrowdStrike & Perplexity Unite to Shield the "Agentic" Workforce',
    description:
      'Falcon security is now embedded inside Comet Enterprise. The partnership marks the first major deployment of CrowdStrike\'s $420M Seraphic Security acquisition — and a new front line in enterprise AI defense.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    publishedTime: '2026-03-12T00:00:00Z',
    modifiedTime: '2026-03-12T00:00:00Z',
    section: 'Technology',
    tags: ['CrowdStrike', 'Perplexity', 'Comet', 'Cybersecurity', 'Agentic AI', 'Enterprise Security'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CrowdStrike Brings Falcon Inside Perplexity\'s AI Browser',
    description:
      'The partnership embeds real-time threat detection directly into Comet Enterprise — the first deployment of CrowdStrike\'s $420M Seraphic acquisition.',
  },
};

export default function CrowdStrikePerplexityCometPage() {
  return (
    <NewsArticle
      title='CrowdStrike & Perplexity Unite to Shield the "Agentic" Workforce'
      subtitle="The two companies announced a major strategic partnership at Ask 2026, embedding the CrowdStrike Falcon platform directly into Comet Enterprise — and deploying Seraphic Security's browser-layer defense for the first time at scale."
      category="Cybersecurity"
      categoryColor="red"
      topicTag="technology"
      publishDate="March 12, 2026"
      readTime="5 min read"
      breaking
      author={{
        name: 'Jack Wang',
        role: 'Technology Desk',
        authorSlug: 'jack-wang',
      }}
      tags={[
        'CrowdStrike',
        'Perplexity',
        'Comet Enterprise',
        'Cybersecurity',
        'Falcon',
        'Seraphic Security',
        'Ask 2026',
        'Agentic AI',
        'Enterprise Security',
        'Browser Security',
      ]}
      slug="crowdstrike-perplexity-comet-enterprise-falcon-security-partnership"
      url={SLUG}
    >

      {/* ── SETTING THE SCENE ──────────────────────────────────────────── */}
      <p>
        <strong>SAN FRANCISCO, CA</strong> — On the same stage where Perplexity CEO Aravind
        Srinivas declared &quot;AI is the computer&quot; at <strong>Ask 2026</strong>,
        CrowdStrike and Perplexity announced a strategic partnership that directly addresses the
        security problem Srinivas&apos;s vision creates: <em>who guards the AI doing the work?</em>
      </p>
      <p>
        The collaboration integrates the <strong>CrowdStrike Falcon</strong> security platform
        directly into <strong>Comet Enterprise</strong> — Perplexity&apos;s AI-native browser —
        creating a specialized defense layer for employees working alongside autonomous AI agents.
        For CrowdStrike, it also marks the <strong>first major public deployment</strong> of
        technology from its{' '}
        <strong>$420 million acquisition of Seraphic Security</strong> in January 2026.
      </p>

      {/* ── THE AGENTIC ATTACK SURFACE ─────────────────────────────────── */}
      <h2>The New Front Door of the Enterprise</h2>
      <p>
        As enterprises shift from static web browsing to &quot;agentic&quot; workflows — where
        AI browsers like Comet autonomously research, draft, and execute multi-step tasks — the
        security attack surface has fundamentally changed. The browser is no longer a passive
        display layer. It is an active execution environment with access to internal systems,
        credentials, and sensitive data.
      </p>
      <p>
        This creates two distinct threat categories that traditional endpoint detection was not
        built to handle: <strong>data exfiltration via AI</strong> (employees or rogue agents
        pasting sensitive data into LLMs), and <strong>&quot;shadow AI&quot; usage</strong>
        (unsanctioned AI tools running undetected inside corporate networks). The
        CrowdStrike-Perplexity partnership targets both simultaneously.
      </p>

      <HighlightBox type="key-point" color="orange">
        Enterprises are deploying agentic AI browsers before the security tooling needed to
        govern them exists. This partnership is a direct response to that gap — embedding
        detection at the layer where agentic work actually happens.
      </HighlightBox>

      {/* ── FALCON INSIDE COMET ────────────────────────────────────────── */}
      <h2>Falcon Inside Comet: What It Does</h2>
      <p>
        Enterprise administrators can now opt in to <strong>Falcon-powered monitoring</strong>{' '}
        within the Comet browser. The integration operates at the browser runtime level, meaning
        security policies are enforced inside the execution context — not at the network
        perimeter. Key capabilities include:
      </p>

      {/* Inline feature table */}
      <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
          <thead>
            <tr style={{ background: '#dc2626', color: '#fff' }}>
              <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 700 }}>Capability</th>
              <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 700 }}>What It Prevents</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Real-time web threat detection', 'Malicious scripts, phishing pages, and drive-by attacks within the browser session'],
              ['Data loss prevention (DLP)', 'Employees or agents pasting sensitive code, credentials, or PII into external LLMs'],
              ['Shadow AI enforcement', 'Unsanctioned AI tools running inside corporate Comet sessions without admin approval'],
              ['Session monitoring', 'Full audit trail of agentic task execution — who authorized what, and when'],
              ['Policy-based controls', 'Admins can restrict which LLMs, tools, and external services Comet agents can reach'],
            ].map(([cap, desc], i) => (
              <tr
                key={i}
                style={{ background: i % 2 === 0 ? '#fef2f2' : '#fff', borderBottom: '1px solid #fecaca' }}
              >
                <td style={{ padding: '10px 14px', fontWeight: 600 }}>{cap}</td>
                <td style={{ padding: '10px 14px', color: '#374151' }}>{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── SERAPHIC FACTOR ────────────────────────────────────────────── */}
      <h2>The Seraphic Factor: A $420M Bet Goes Live</h2>
      <p>
        The technical core of this partnership is <strong>Seraphic Security</strong>, an
        enterprise browser security company CrowdStrike acquired for{' '}
        <strong>$420 million in January 2026</strong>. At the time of the acquisition, analysts
        questioned the price tag relative to Seraphic&apos;s revenue and market share. The Ask
        2026 announcement provides the clearest signal yet of why CrowdStrike paid it.
      </p>
      <p>
        Seraphic&apos;s core technology — what CrowdStrike internally refers to as its
        &quot;secret sauce&quot; — works by <strong>randomizing a browser&apos;s JavaScript
        engine</strong> at runtime. This technique defeats an entire class of browser-based
        attacks that rely on predictable memory layouts and JavaScript execution patterns:
      </p>

      <HighlightBox type="quote" color="blue">
        By randomizing the JavaScript engine itself, Seraphic closes the attack window before
        session hijacking or man-in-the-browser exploits can find a foothold — regardless of
        the specific vulnerability being targeted.
      </HighlightBox>

      <h3>How JavaScript Engine Randomization Works</h3>
      <p>
        Traditional browser attacks — including session hijacking, credential theft, and
        man-in-the-browser (MitB) attacks — rely on the attacker knowing how the browser&apos;s
        JavaScript engine will behave at a memory level. They exploit <strong>predictable
        object layouts, function pointer locations, and garbage collection patterns</strong>.
      </p>
      <p>
        Seraphic&apos;s approach re-randomizes these internal structures each time the browser
        session initializes, meaning any exploit payload crafted against a known engine layout
        will silently fail. The technique is particularly effective against zero-day attacks,
        where the vulnerability exists but a specific exploit has not yet been publicly
        catalogued — and therefore cannot be patched or signature-detected.
      </p>

      <HighlightBox type="key-point" color="orange">
        Seraphic&apos;s randomization defense is architecture-agnostic — it does not require
        knowing what the attacker will do. It makes the browser an unpredictable target by
        default, shifting the cost of exploitation back onto the attacker on every session.
      </HighlightBox>

      {/* ── ENTERPRISE FIT ─────────────────────────────────────────────── */}
      <h2>Why This Partnership Makes Sense Now</h2>
      <p>
        The timing is not accidental. Perplexity&apos;s <strong>Personal Computer</strong>{' '}
        announcement at the same conference extends Comet from a browser into a 24/7 autonomous
        agent that accesses files, apps, and external services continuously — even while the
        user is away. The security implications of a browser that never sleeps require a
        security layer that never sleeps either.
      </p>
      <p>
        CrowdStrike, for its part, has been building toward browser-native security since
        acquiring Seraphic. Comet Enterprise provides the ideal deployment vehicle: a managed,
        enterprise-grade AI browser where every session is already instrumented, logged, and
        running under admin control — a far cleaner integration surface than trying to retrofit
        Seraphic into a general-purpose consumer browser like Chrome or Edge.
      </p>

      {/* ── PARTNERSHIP SUMMARY TABLE ──────────────────────────────────── */}
      <h2>Partnership at a Glance</h2>
      <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
          <thead>
            <tr style={{ background: '#1e293b', color: '#fff' }}>
              <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 700 }}>Detail</th>
              <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 700 }}>Summary</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Announced', 'March 11, 2026 — Ask 2026 developer conference, San Francisco'],
              ['Parties', 'CrowdStrike (Falcon / Seraphic) + Perplexity (Comet Enterprise)'],
              ['Integration Layer', 'Falcon monitoring embedded inside Comet browser runtime'],
              ['Seraphic Technology', 'JS engine randomization — stops session hijacking & MitB attacks'],
              ['Seraphic Acquisition', '$420 million — January 2026'],
              ['Availability', 'Opt-in for Comet Enterprise admins — rollout timeline TBA'],
              ['Target Customer', 'Enterprises deploying agentic AI workflows at scale'],
              ['Key Threats Addressed', 'Data exfiltration, shadow AI, session hijacking, man-in-the-browser'],
            ].map(([detail, summary], i) => (
              <tr
                key={i}
                style={{ background: i % 2 === 0 ? '#f8fafc' : '#fff', borderBottom: '1px solid #e2e8f0' }}
              >
                <td style={{ padding: '10px 14px', fontWeight: 600, whiteSpace: 'nowrap' }}>{detail}</td>
                <td style={{ padding: '10px 14px', color: '#374151' }}>{summary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <HighlightBox type="stat" color="orange">
        Ask 2026 positioned Perplexity not just as an AI company, but as enterprise
        infrastructure. The CrowdStrike partnership is the clearest signal that the
        &quot;agentic browser&quot; is being treated as a new endpoint — one that needs its
        own security stack from day one.
      </HighlightBox>

    </NewsArticle>
  );
}
