import type { Metadata } from 'next';
import Link from 'next/link';
import NewsArticle, { HighlightBox } from '@/components/NewsArticle';

const SLUG = '/tech/news/87-percent-ai-agent-pull-requests-security-flaws-dryrun-report-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title:
    '87% of AI Agent Pull Requests Introduce Security Flaws, DryRun Security Report Finds | ObjectWire',
  description:
    'A new DryRun Security report tested Claude, Codex, and Gemini building real apps autonomously — 26 of 30 AI-generated pull requests introduced at least one high-severity vulnerability. Claude produced the most unresolved flaws; OpenAI Codex performed best.',
  keywords: [
    'AI agent security flaws 2026',
    'DryRun Security agentic coding report',
    '87 percent AI pull requests security vulnerabilities',
    'Claude Codex Gemini security comparison',
    'agentic AI coding security blind',
    'AI code security vulnerabilities high severity',
    'autonomous software development security risk',
    'OpenAI Codex GPT-5 security coding',
    'Anthropic Claude security coding vulnerabilities',
    'AI native development security flaws report',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: '87% of AI Agent Pull Requests Introduce Security Flaws — DryRun Security 2026',
    description:
      'DryRun Security tested Claude, Codex, and Gemini building full apps autonomously. 26 of 30 PRs had at least one high-severity security flaw. Claude produced the most unresolved vulnerabilities. Codex performed best.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    publishedTime: '2026-03-12T00:00:00Z',
    modifiedTime: '2026-03-12T00:00:00Z',
    section: 'Technology',
    tags: ['AI Security', 'DryRun Security', 'Claude', 'Codex', 'Gemini', 'Agentic AI', 'Developer Tools'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '87% of AI Agent Pull Requests Have High-Severity Security Flaws',
    description:
      'DryRun Security: Claude, Codex, Gemini tested on real apps. 26/30 PRs introduced a high-severity flaw. Claude worst for unresolved issues. Codex cleanest overall.',
  },
};

export default function AIAgentSecurityFlawsPage() {
  return (
    <NewsArticle
      title="87% of AI Agent Pull Requests Introduce Security Flaws, New Report Finds"
      subtitle="DryRun Security's Agentic Coding Security Report tested Claude, Codex, and Gemini building real applications from scratch — and found that autonomous AI agents are effectively 'security blind' by default, with 26 out of 30 pull requests introducing at least one high-severity vulnerability."
      category="Technology"
      categoryColor="red"
      topicTag="technology"
      publishDate="March 12, 2026"
      readTime="6 min read"
      breaking
      author={{
        name: 'Jack Wang',
        role: 'Technology Desk',
        authorSlug: 'jack-wang',
      }}
      tags={[
        'AI Security',
        'DryRun Security',
        'Agentic AI',
        'Claude',
        'Codex',
        'Gemini',
        'Security Vulnerabilities',
        'Developer Tools',
        'Software Engineering',
        'AI Coding',
      ]}
      slug="87-percent-ai-agent-pull-requests-security-flaws-dryrun-report-2026"
      url={SLUG}
    >

      {/* ── LEAD ───────────────────────────────────────────────────────── */}
      <p>
        <strong>AUSTIN, TX</strong> — A new report from <strong>DryRun Security</strong> has
        delivered a sharp warning to the engineering teams racing to adopt AI-native development
        workflows: autonomous AI agents build fast, but they build dangerously.
      </p>
      <p>
        The <em>Agentic Coding Security Report</em>, released on <strong>March 11, 2026</strong>,
        evaluated three leading AI coding agents —{' '}
        <Link href="/claude" className="text-orange-600 hover:underline">
          Anthropic&apos;s Claude
        </Link>{' '}
        (Sonnet 4.5/4.6),{' '}
        <Link href="/open-ai" className="text-blue-600 hover:underline">
          OpenAI&apos;s Codex
        </Link>{' '}
        (GPT-5.2), and Google&apos;s Gemini — on two realistic application-building tasks. The
        result: <strong>87% of the pull requests submitted by the agents</strong> — 26 out of
        30 — introduced at least one high-severity security vulnerability.
      </p>

      <HighlightBox type="key-point" color="orange">
        <strong>87%</strong> of AI-generated pull requests in the study contained at least one
        high-severity security flaw. The agents were not writing toy code — they were building
        full applications under conditions designed to mirror real-world engineering workflows.
      </HighlightBox>

      {/* ── METHODOLOGY ────────────────────────────────────────────────── */}
      <h2>How the Study Was Conducted</h2>
      <p>
        DryRun had each agent build two complete, functional applications through sequential
        feature requests — mimicking the way a developer might prompt an autonomous agent over
        a multi-day sprint:
      </p>
      <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.9', marginBottom: '1rem' }}>
        <li>A <strong>health-tracking web application</strong> — user authentication, data storage, API endpoints</li>
        <li>A <strong>browser-based game</strong> — client-side logic, state management, user interaction</li>
      </ul>
      <p>
        Each feature request generated a pull request. DryRun&apos;s security tooling then
        analyzed every PR for high-severity vulnerabilities — SQL injection, insecure
        authentication, exposed credentials, XSS vectors, and similar OWASP Top 10 class
        issues. The results were tracked cumulatively across the full application lifecycle,
        not just per-PR in isolation.
      </p>

      {/* ── KEY FINDINGS TABLE ─────────────────────────────────────────── */}
      <h2>Key Findings</h2>

      <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
          <thead>
            <tr style={{ background: '#dc2626', color: '#fff' }}>
              <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 700 }}>Finding</th>
              <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 700 }}>Detail</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Overall failure rate', '87% — 26 of 30 pull requests contained at least one high-severity flaw'],
              ['Agents tested', 'Anthropic Claude (Sonnet 4.5/4.6), OpenAI Codex (GPT-5.2), Google Gemini'],
              ['Applications built', 'Health-tracking web app + browser-based game (sequential feature requests)'],
              ['Cumulative risk pattern', 'Flaws accumulated — agents rarely reviewed prior logic, so early mistakes compounded'],
              ['Worst for unresolved flaws', 'Claude (Sonnet 4.5/4.6) — highest number of unresolved high-severity issues in final codebases'],
              ['Best overall', 'OpenAI Codex (GPT-5.2) — fewest total vulnerabilities; best self-remediation when prompted'],
              ['Primary vulnerability classes', 'SQL injection, insecure auth, exposed credentials, XSS, insecure direct object references'],
            ].map(([finding, detail], i) => (
              <tr
                key={i}
                style={{ background: i % 2 === 0 ? '#fef2f2' : '#fff', borderBottom: '1px solid #fecaca' }}
              >
                <td style={{ padding: '10px 14px', fontWeight: 600 }}>{finding}</td>
                <td style={{ padding: '10px 14px', color: '#374151' }}>{detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── CUMULATIVE RISK ────────────────────────────────────────────── */}
      <h2>The Cumulative Risk: How Small Mistakes Become Big Vulnerabilities</h2>
      <p>
        The most significant structural finding in the report is not any single flaw — it is
        the pattern of <strong>accumulation</strong>. Because agentic coding systems generate
        each new feature in the context of a prompt, not a security audit, they rarely
        look backwards to evaluate whether a new change interacts dangerously with existing
        logic.
      </p>
      <p>
        A minor authentication shortcut introduced in PR #3 may be harmless in isolation.
        But by PR #12, when the application has a user database, a payment layer, and an
        external API, that same shortcut has become an attack vector with a significantly
        larger blast radius. DryRun&apos;s methodology was specifically designed to capture
        this compounding effect — and all three agents exhibited it.
      </p>

      <HighlightBox type="key-point" color="blue">
        The cumulative risk pattern is the most practically dangerous finding for enterprise
        teams. A single-PR review process will not surface it. Security evaluation of
        AI-generated code requires <strong>full-codebase static analysis</strong> at regular
        intervals — not just PR-level diff review.
      </HighlightBox>

      {/* ── CLAUDE PARADOX ─────────────────────────────────────────────── */}
      <h2>
        The{' '}
        <Link href="/claude" className="text-orange-600 hover:underline">
          Claude
        </Link>{' '}
        Paradox: Most "Thoughtful," Most Vulnerable
      </h2>
      <p>
        The report&apos;s most counterintuitive finding involves{' '}
        <Link href="/claude" className="text-orange-600 hover:underline">
          Anthropic&apos;s Claude
        </Link>{' '}
        (tested on Sonnet 4.5 and 4.6). Claude is widely regarded in developer communities as
        the most &quot;thoughtful&quot; coding model — praised for verbose reasoning, nuanced
        explanations, and careful handling of edge cases in natural language. In DryRun&apos;s
        security-specific evaluation, that reputation did not carry over.
      </p>
      <p>
        Claude produced the <strong>highest number of unresolved high-severity flaws</strong>{' '}
        in the final codebases across both applications. DryRun researchers note that Claude&apos;s
        tendency toward verbose code generation — producing more lines per feature than Codex —
        may actually increase the vulnerability surface, creating more places for insecure
        patterns to hide. Claude&apos;s recent revenue milestones and enterprise adoption
        (covered in{' '}
        <Link
          href="/tech/news/anthropic-court-filings-disclose-5-billion-in-total-revenue"
          className="text-orange-600 hover:underline"
        >
          our Anthropic $5B revenue analysis
        </Link>
        ) make this finding particularly notable for enterprise security teams currently
        deploying Claude as a coding agent.
      </p>

      {/* ── CODEX EDGE ─────────────────────────────────────────────────── */}
      <h2>
        The{' '}
        <Link href="/open-ai" className="text-blue-600 hover:underline">
          Codex
        </Link>{' '}
        Edge: Fewer Flaws, Better Self-Remediation
      </h2>
      <p>
        <Link href="/open-ai" className="text-blue-600 hover:underline">
          OpenAI&apos;s Codex
        </Link>{' '}
        (powered by GPT-5.2) finished the study with the fewest total vulnerabilities across
        both applications. But the more significant data point is behavioral: when DryRun
        researchers explicitly prompted Codex to review its own prior code for security issues,
        it demonstrated a meaningfully better ability to identify and remediate its own mistakes
        compared to Claude and Gemini.
      </p>
      <p>
        This &quot;prompted self-remediation&quot; capability suggests a viable mitigation
        strategy for engineering teams: integrating a dedicated security-review step into the
        agentic workflow — explicitly asking the agent to audit each completed module before
        the next feature build begins. It does not eliminate the underlying vulnerability rate,
        but it reduces the accumulation problem.
      </p>

      <HighlightBox type="quote" color="green">
        The finding is not that AI agents cannot produce secure code — it is that they will
        not produce it by default. The security review pass has to be deliberately engineered
        into the workflow. It will not happen automatically.
      </HighlightBox>

      {/* ── WHAT TEAMS SHOULD DO ───────────────────────────────────────── */}
      <h2>What Engineering Teams Should Do Right Now</h2>

      <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
          <thead>
            <tr style={{ background: '#1e293b', color: '#fff' }}>
              <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 700 }}>Recommendation</th>
              <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 700 }}>Why It Matters</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Run full-codebase SAST at regular intervals', 'PR-level review misses cumulative risk — vulnerabilities compound across the full commit history'],
              ['Add an explicit security-review prompt step', 'Codex demonstrated meaningfully better self-remediation when explicitly asked to audit; apply this pattern to all agents'],
              ['Treat AI PRs as untrusted input', 'Apply the same scrutiny you would to a contractor\'s first commit — agents have no security training signal by default'],
              ['Audit authentication and data access logic specifically', 'DryRun found insecure auth and data exposure were the most common high-severity classes across all three agents'],
              ['Track vulnerability density over time', 'Monitor whether your codebase is accumulating flaws sprint-over-sprint — not just whether individual PRs pass review'],
            ].map(([rec, why], i) => (
              <tr
                key={i}
                style={{ background: i % 2 === 0 ? '#f8fafc' : '#fff', borderBottom: '1px solid #e2e8f0' }}
              >
                <td style={{ padding: '10px 14px', fontWeight: 600 }}>{rec}</td>
                <td style={{ padding: '10px 14px', color: '#374151' }}>{why}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── CLOSING ────────────────────────────────────────────────────── */}
      <h2>The Bigger Picture</h2>
      <p>
        The DryRun report lands at a moment when the industry is actively debating whether
        agentic coding represents a genuine productivity leap or a technical debt time bomb.
        The answer, based on this data, is: both, simultaneously. The speed gains are real.
        The security blindness is equally real.
      </p>
      <p>
        For enterprises currently evaluating{' '}
        <Link href="/claude" className="text-orange-600 hover:underline">
          Claude
        </Link>
        ,{' '}
        <Link href="/open-ai" className="text-blue-600 hover:underline">
          Codex
        </Link>
        , or Gemini for autonomous coding tasks, the practical implication is straightforward:
        AI agent output requires a dedicated security layer that is designed into the workflow
        from day one — not bolted on after the codebase has grown.
      </p>

      <HighlightBox type="stat" color="blue">
        <strong>26 out of 30</strong> AI-generated pull requests introduced a high-severity
        security flaw. Source: DryRun Security, <em>Agentic Coding Security Report</em>,
        March 11, 2026.
      </HighlightBox>

    </NewsArticle>
  );
}
