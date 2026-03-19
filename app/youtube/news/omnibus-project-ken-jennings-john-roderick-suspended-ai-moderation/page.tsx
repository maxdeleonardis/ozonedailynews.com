import type { Metadata } from 'next';
import NewsArticle, { HighlightBox } from '@/components/NewsArticle';

const SLUG = '/youtube/news/omnibus-project-ken-jennings-john-roderick-suspended-ai-moderation';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title:
    'YouTube Suspends "The Omnibus Project" for 90 Days After AI Flags 2019 Antisemitism Debunking Episode | ObjectWire',
  description:
    "YouTube's AI hate speech filter issued a three-month suspension to Ken Jennings and John Roderick's Omnibus Project podcast — targeting a 2019 episode that debunked The Protocols of the Elders of Zion. The automated appeals system rejected their appeal in minutes.",
  keywords: [
    'YouTube suspends Omnibus Project podcast',
    'Ken Jennings John Roderick YouTube ban 2026',
    'YouTube AI moderation false positive',
    'Protocols of the Elders of Zion debunking YouTube strike',
    'YouTube contextual blindness AI moderation',
    'YouTube three strikes policy podcast',
    'automated content moderation error educational content',
    'YouTube hate speech filter false flag',
    'Omnibus Project suspension June 2026',
    'AI moderation satire educational content problem',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'YouTube AI Flags Antisemitism Debunking as Hate Speech — Suspends "The Omnibus Project" 90 Days',
    description:
      "Ken Jennings and John Roderick's podcast is suspended until June 6, 2026 after YouTube's AI flagged a 2019 episode debunking The Protocols of the Elders of Zion. Automated appeal rejected in minutes.",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    publishedTime: '2026-03-12T00:00:00Z',
    modifiedTime: '2026-03-12T00:00:00Z',
    section: 'Technology',
    tags: ['YouTube', 'Ken Jennings', 'John Roderick', 'Omnibus Project', 'AI Moderation', 'Content Moderation'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YouTube AI Flagged a Podcast Episode Debunking Antisemitism as Hate Speech',
    description:
      "The Omnibus Project is suspended until June 6. YouTube's AI hit a 2019 debunking episode with a strike for \"promoting violence against protected groups.\" The automated appeal was rejected in minutes.",
  },
};

export default function OmnibusProjectSuspensionPage() {
  return (
    <NewsArticle
      title='YouTube Suspends "The Omnibus Project" for 90 Days After AI Flags 2019 Antisemitism Debunking'
      subtitle="Ken Jennings and John Roderick's long-running podcast has been silenced until June 6, 2026 — not for hate speech, but for an episode that spent its entire runtime debunking one of history's most notorious antisemitic texts."
      category="YouTube"
      categoryColor="red"
      topicTag="technology"
      publishDate="March 12, 2026"
      readTime="5 min read"
      author={{
        name: 'Jack Wang',
        role: 'Technology Desk',
        authorSlug: 'jack-wang',
      }}
      tags={[
        'YouTube',
        'Ken Jennings',
        'John Roderick',
        'Omnibus Project',
        'AI Moderation',
        'Content Moderation',
        'Hate Speech',
        'Contextual Blindness',
        'Podcast',
        'Free Speech',
      ]}
      slug="omnibus-project-ken-jennings-john-roderick-suspended-ai-moderation"
      url={SLUG}
    >

      {/* ── LEAD ───────────────────────────────────────────────────────── */}
      <p>
        YouTube has issued a <strong>three-month suspension</strong> to{' '}
        <em>The Omnibus Project</em>, the long-running podcast co-hosted by{' '}
        <em>Jeopardy!</em> champion <strong>Ken Jennings</strong> and musician{' '}
        <strong>John Roderick</strong>. The suspension bars the channel from uploading new
        content, hosting livestreams, or editing existing video metadata until{' '}
        <strong>June 6, 2026</strong>.
      </p>
      <p>
        The strike that triggered the ban was issued against a <strong>2019 episode</strong>.
        That episode did not promote hate speech. It spent its entire runtime doing the
        opposite: providing a detailed academic debunking of{' '}
        <em>The Protocols of the Elders of Zion</em> — one of history&apos;s most notorious
        antisemitic frauds. YouTube&apos;s AI moderation system flagged it anyway.
      </p>

      <HighlightBox type="key-point" color="orange">
        YouTube&apos;s automated hate speech filter flagged a podcast episode for{' '}
        <strong>&quot;promoting or inciting violence against protected groups&quot;</strong> —
        an episode whose entire purpose was to expose and condemn antisemitic conspiracy
        fiction. The automated appeal was rejected in minutes, without human review.
      </HighlightBox>

      {/* ── WHAT HAPPENED ──────────────────────────────────────────────── */}
      <h2>What Happened: The Strike, the Episode, the Penalty</h2>

      <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
          <thead>
            <tr style={{ background: '#dc2626', color: '#fff' }}>
              <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 700 }}>Detail</th>
              <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 700 }}>Summary</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Channel struck', 'The Omnibus Project — hosted by Ken Jennings & John Roderick'],
              ['Episode targeted', '2019 episode analyzing The Protocols of the Elders of Zion'],
              ['Episode purpose', 'Historical debunking — tracing the fraudulent origins of the text and proving it a fabrication'],
              ['AI classification', '"Promoting or inciting violence against protected groups"'],
              ['Suspension length', '90 days — channel muted until June 6, 2026'],
              ['What is blocked', 'New uploads, livestreams, and editing of existing video metadata'],
              ['Policy invoked', "YouTube's three-strikes policy"],
              ['Appeal outcome', 'Filed immediately — rejected by automated system within minutes'],
            ].map(([detail, summary], i) => (
              <tr
                key={i}
                style={{ background: i % 2 === 0 ? '#fef2f2' : '#fff', borderBottom: '1px solid #fecaca' }}
              >
                <td style={{ padding: '10px 14px', fontWeight: 600, whiteSpace: 'nowrap' }}>{detail}</td>
                <td style={{ padding: '10px 14px', color: '#374151' }}>{summary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── THE DEBUNKING EPISODE ──────────────────────────────────────── */}
      <h2>The Episode: Why Context Was Everything</h2>
      <p>
        <em>The Protocols of the Elders of Zion</em> is a fabricated antisemitic text first
        published in Russia in 1903, purporting to describe a Jewish plan for global domination.
        It has been conclusively exposed as a forgery since 1921, when{' '}
        <em>The Times</em> of London demonstrated it was plagiarized almost entirely from an
        1864 French political satire that had nothing to do with Jewish people.
      </p>
      <p>
        The Omnibus Project episode in question traced precisely this history: the text&apos;s
        origins, the journalism that exposed it as fraud, and the documented harm it caused
        when it was weaponized by 20th-century antisemitic movements. The hosts&apos; intent —
        debunking, condemnation, historical analysis — was unambiguous to any human listener.
        It was not unambiguous to a keyword-driven automated filter.
      </p>

      <HighlightBox type="quote" color="blue">
        &quot;Our AI systems are designed to protect the community from harmful content. While we
        offer an appeals process, the sheer volume of content necessitates automated first-pass
        reviews.&quot; — YouTube Spokesperson, early 2026
      </HighlightBox>

      {/* ── CONTEXTUAL BLINDNESS ───────────────────────────────────────── */}
      <h2>The "Contextual Blindness" Problem in AI Moderation</h2>
      <p>
        The Omnibus Project suspension has reignited a long-running debate about a specific,
        well-documented failure mode in automated content moderation: <strong>contextual
        blindness</strong> — the inability of keyword- and pattern-based AI systems to
        understand the purpose of speech, not just its surface features.
      </p>
      <p>
        The problem manifests in three recurring categories:
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
          <thead>
            <tr style={{ background: '#1e293b', color: '#fff' }}>
              <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 700 }}>Failure Mode</th>
              <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 700 }}>What the AI Misses</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Satire & Irony', 'A host mocking an extremist view is flagged for repeating the extremist language, regardless of tone or framing'],
              ['Educational Debunking', 'Naming or quoting a banned or harmful text — even to prove it is a fabrication — triggers the same filter as promoting it'],
              ['Historical Analysis', 'Reporting that a historical atrocity occurred reads the same to a pattern-matcher as endorsing it'],
              ['Counter-Speech', 'Activists and journalists directly engaging with hate speech to refute it are struck at the same rate as its originators'],
            ].map(([mode, miss], i) => (
              <tr
                key={i}
                style={{ background: i % 2 === 0 ? '#f8fafc' : '#fff', borderBottom: '1px solid #e2e8f0' }}
              >
                <td style={{ padding: '10px 14px', fontWeight: 600 }}>{mode}</td>
                <td style={{ padding: '10px 14px', color: '#374151' }}>{miss}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <HighlightBox type="key-point" color="purple">
        The core problem is not that AI is wrong about hate speech — it is that AI moderation
        systems are trained to detect <em>words and patterns</em>, not <em>intent and
        purpose</em>. A debunking episode and a propaganda episode can be lexically
        indistinguishable. Only context resolves the difference. Context requires human judgment.
      </HighlightBox>

      {/* ── FALLOUT ────────────────────────────────────────────────────── */}
      <h2>The Fallout: Failed Appeal, Creator Frustration</h2>
      <p>
        Ken Jennings and John Roderick addressed the ban publicly on X (formerly Twitter),
        expressing frustration not only with the initial strike but with the appeals process
        itself. The appeal — filed immediately after the suspension was issued — was rejected
        by an automated system within minutes, leading to accusations that no human ever
        reviewed the case.
      </p>
      <p>
        The rapid automated rejection is a known pattern. YouTube&apos;s appeals infrastructure
        routes flagged content through secondary automated review before escalating to human
        moderators — a triage system designed for scale, not nuance. For a three-strike penalty
        that effectively kills a channel&apos;s operations for a quarter of a year, critics argue
        that human review should be mandatory, not optional.
      </p>

      <HighlightBox type="key-point" color="green">
        A 90-day suspension under YouTube&apos;s three-strikes policy is one of the platform&apos;s
        most severe non-termination penalties. For podcast channels that depend on weekly upload
        cadence to maintain audience and advertiser relationships, a three-month blackout is
        commercially significant — not just an inconvenience.
      </HighlightBox>

      {/* ── BROADER SIGNIFICANCE ───────────────────────────────────────── */}
      <h2>Why This Case Matters Beyond One Podcast</h2>
      <p>
        The Omnibus Project is a minor channel by YouTube&apos;s scale, but the case is
        structurally significant. If a meticulously researched, historically grounded debunking
        episode by two well-known public figures — with years of documented good-faith content
        on the platform — can be swept into a 90-day suspension without human review, the
        implications for less prominent educational creators, journalists, and historians are
        considerably worse.
      </p>
      <p>
        The episode in question is nearly seven years old. It survived on YouTube for the
        entirety of that time before the automated system caught it. The strike was not
        triggered by a human complaint or a trending discussion — it was a retroactive sweep
        by an updated model, applied to archived content the platform had previously
        considered acceptable.
      </p>
      <p>
        That pattern — an AI model update quietly re-classifying years-old content as
        violations — is one of the least-discussed risks in algorithmic moderation. Creators
        who believe they built a compliant archive have no guarantee it will remain compliant
        as the platform&apos;s models evolve. The rules, effectively, change retroactively.
      </p>

      <HighlightBox type="stat" color="blue">
        The suspension runs until <strong>June 6, 2026</strong>. As of publication, no human
        review of the appeal has been confirmed. YouTube has not issued a specific response
        addressing the educational nature of the flagged episode.
      </HighlightBox>

    </NewsArticle>
  );
}
