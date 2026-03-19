import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import JackArticle, {
  JackSection,
  JackCaseOverview,
  JackCallout,
} from '@/components/JackArticle';

const SLUG =
  '/technology/grok-xai-pentagon-classified-approval-federal-safety-warnings-2026';

const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL =
  'https://www.objectwire.org/technology/grok-pentagon-federal-safety-2026.jpg';

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "Federal Agencies Flagged Grok's Safety Risks. The Pentagon Approved It for Classified Use Anyway. | ObjectWire",
  description:
    "The GSA found Grok-4 failed federal safety standards. The NSA identified unique security vulnerabilities. The Biden-era CDAO rejected it. Then the Pentagon authorized xAI's Grok for classified military environments in February 2026 under a $200M contract — over documented objections.",
  keywords: [
    'Grok xAI Pentagon classified approval 2026',
    'federal agencies Grok safety warnings GSA NSA',
    'Grok-4 failed federal safety standards',
    'Pentagon AI contract xAI 2026',
    'NSA Grok unique security vulnerabilities',
    'CDAO Grok rejection Biden administration',
    'Elon Musk xAI government AI classified',
    'Susie Wiles xAI White House contact',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title:
      "GSA: Grok Failed Federal Safety Standards. NSA: Unique Vulnerabilities. Pentagon: Approved.",
    description:
      "Multiple federal agencies flagged xAI's Grok chatbot as unsafe before the Pentagon authorized it for classified use in February 2026. The WSJ reported the full paper trail on February 27, 2026.",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-03-01T22:00:00Z',
    modifiedTime: '2026-03-01T22:00:00Z',
    section: 'Technology',
    tags: [
      'xAI', 'Grok', 'Pentagon', 'GSA', 'NSA', 'AI Safety',
      'Federal AI', 'Classified AI', 'Elon Musk', 'National Security', 'Technology',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "The GSA Said Grok Failed Safety Standards. The NSA Found Unique Vulnerabilities. The Pentagon Approved It.",
    description:
      "Federal agencies documented Grok's risks for over a year before the Pentagon cleared it for classified use in February 2026. The WSJ reported it all on February 27.",
    images: [IMAGE_URL],
  },
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function GrokPentagonApprovalBriefPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Federal Agencies Flagged Grok's Safety Risks. The Pentagon Approved It for Classified Use Anyway."
        description="The GSA, NSA, and Biden-era CDAO all documented safety and security concerns about xAI's Grok before the Pentagon authorized it for classified military environments in February 2026 under a $200M contract."
        author="Alfansa"
        authorUrl="https://www.objectwire.org/team/alfansa"
        publishedTime="2026-03-01T22:00:00Z"
        modifiedTime="2026-03-01T22:00:00Z"
        imageUrl={IMAGE_URL}
        articleUrl={ARTICLE_URL}
        section="Technology"
        keywords={[
          'Grok Pentagon classified 2026',
          'GSA Grok safety report',
          'NSA Grok vulnerabilities',
          'federal AI safety 2026',
          'xAI government deployment',
        ]}
      />

      <JackArticle
        layout="news"
        title="Federal Agencies Flagged Grok's Safety Risks. The Pentagon Approved It for Classified Use Anyway."
        subtitle="The GSA called Grok-4 non-compliant with federal safety standards. The NSA found unique security vulnerabilities absent from other models. The CDAO rejected it outright. White House Chief of Staff Susie Wiles called a senior xAI executive. Then the Pentagon approved it for classified military use under a $200M contract — February 2026."
        categoryLabel="Technology"
        categories={[
          { label: 'Technology', color: 'blue' },
          { label: 'AI Policy', color: 'red' },
        ]}
        publishDate="March 1, 2026"
        publishDateISO="2026-03-01T22:00:00Z"
        modifiedDateISO="2026-03-01T22:00:00Z"
        readTime="4 min read"
        author={{
          name: 'Alfansa',
          department: 'ObjectWire Technology Desk',
          url: 'https://www.objectwire.org/team/alfansa',
        }}
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/technology', label: 'Technology' },
          { href: SLUG, label: 'Grok Pentagon Classified Approval' },
        ]}
        relatedArticles={[
          {
            href: '/tech/federal-agencies-grok-safety-concerns-pentagon-classified-approval-2026',
            category: 'Deep Dive',
            categoryColor: 'text-red-600',
            title: 'Full Analysis: Federal Agencies, Grok Safety Concerns & the Pentagon Approval — ObjectWire Tech',
          },
          {
            href: '/tech',
            category: 'Technology',
            categoryColor: 'text-blue-600',
            title: 'Technology Desk — ObjectWire',
          },
          {
            href: '/elon-musk',
            category: 'Elon Musk',
            categoryColor: 'text-gray-700',
            title: 'Elon Musk Coverage — ObjectWire',
          },
          {
            href: '/open-ai',
            category: 'AI',
            categoryColor: 'text-green-600',
            title: 'OpenAI Coverage — ObjectWire',
          },
        ]}
        timeline={[
          { date: 'Nov 2024', description: 'NSA classified review: unique Grok vulnerabilities not found in other models including Claude.' },
          { date: 'Jul 2025', description: 'Pentagon awards up to $200M AI contract to xAI, Google, OpenAI, and Anthropic.' },
          { date: 'Jan 15, 2026', description: 'GSA 33-page report: Grok-4 fails federal safety and alignment standards.', highlight: true },
          { date: 'Early Jan 2026', description: 'White House Chief of Staff Susie Wiles contacts senior xAI executive.' },
          { date: 'Feb 27, 2026', description: 'Pentagon approves Grok for classified environments. WSJ publishes full account.', highlight: true },
        ]}
        documents={[
          { href: 'https://www.wsj.com/politics/national-security/elon-musk-xai-grok-security-safety-government-73ab4f6e', label: 'WSJ — Grok Safety Report, Feb 27, 2026', icon: '📰' },
        ]}
        accentColor="red"
        articleUrl={ARTICLE_URL}
        description="Federal agencies flagged Grok as unsafe before the Pentagon approved it for classified military use in February 2026 under a $200M contract."
        section="Technology"
        keywords={['Grok Pentagon 2026', 'GSA NSA Grok safety', 'federal AI classified deployment']}
        showCorrections
        showEditorialStandards
        footerTagline="Government AI is moving fast. The safety reviews aren't keeping up."
        footerLinks={[
          { href: '/technology', label: 'Technology' },
          { href: '/tech', label: 'Tech Desk' },
        ]}
      >

        {/* ── Lede ─────────────────────────────────────────────── */}
        <p>
          The <strong>General Services Administration</strong> said Grok-4 failed to meet federal
          safety and alignment standards. The <strong>National Security Agency</strong> identified
          security vulnerabilities unique to Grok — absent from models like Anthropic&apos;s Claude
          — in a classified November 2024 review. The Biden-era{' '}
          <strong>Chief Digital and AI Office</strong> declined Grok entirely, citing training data
          opacity and weak guardrails. White House Chief of Staff{' '}
          <strong>Susie Wiles</strong> personally contacted a senior xAI executive after the
          warnings reached her office.
        </p>
        <p>
          Then, during the week of <strong>February 27, 2026</strong>, the Pentagon authorized
          xAI&apos;s <strong>Grok</strong> for use in classified military environments under a
          contract worth up to <strong>$200 million</strong> — shared with Google, OpenAI, and
          Anthropic. The Wall Street Journal reported the full sequence the same day.
        </p>

        {/* ── Section 1 ────────────────────────────────────────── */}
        <JackSection number={1} title="What Each Agency Found" accentColor="red">
          <JackCaseOverview
            title="Agency Findings at a Glance"
            accentColor="red"
            items={[
              { label: 'GSA (Jan 15, 2026):',    value: '33-page report — Grok-4 failed safety and alignment standards. Sycophantic, susceptible to data poisoning. Elevated risk without layered oversight.' },
              { label: 'NSA (Nov 2024, classified):', value: 'Unique Grok security vulnerabilities not found in other AI models. Deterred Pentagon components from adoption.' },
              { label: 'CDAO (Biden era):',       value: 'Rejected outright — training data opacity, weak guardrails, non-compliance with responsible AI standards, insufficient red teaming.' },
              { label: 'Content testing (Dec–Jan 2026):', value: 'Grok allowed sexualized image edits including those involving children. xAI restricted image generation after discovery.' },
              { label: 'White House:',            value: 'Chief of Staff Susie Wiles contacted a senior xAI executive in early January 2026 following safety alerts.' },
            ]}
          />

          <JackCallout accentColor="red" label="Despite All of the Above">
            The Pentagon approved Grok for classified military environments during the week of
            February 27, 2026. No public disclosure was made of what remediation steps, if any,
            addressed the documented GSA and NSA concerns before authorization proceeded.
          </JackCallout>
        </JackSection>

        {/* ── Section 2 ────────────────────────────────────────── */}
        <JackSection number={2} title="Why This Matters" accentColor="red">
          <p>
            The Grok approval is the highest-profile example to date of AI safety evaluations
            being overridden in a sensitive federal context. The paper trail is unusually
            complete — multiple agencies, a classified NSA review, a White House escalation,
            and a formal GSA report — making it difficult to argue the risks were unknown.
          </p>
          <p>
            <strong>Public Citizen</strong> stated on February 27 that the deployment
            &quot;disregards internal warnings and could compromise national security.&quot; The
            broader concern is structural: if documented safety failures do not block deployment
            in classified environments, what function do the evaluations serve?
          </p>
          <p>
            For the full breakdown — including Grok&apos;s architecture, the conflict-of-interest
            questions around Elon Musk&apos;s dual role, and the competitive context among the
            four vendors on the $200M contract — see our{' '}
            <Link
              href="/tech/federal-agencies-grok-safety-concerns-pentagon-classified-approval-2026"
              className="font-semibold underline hover:opacity-70"
            >
              in-depth analysis on the Technology desk
            </Link>.
          </p>
          <p>
            <em>
              When internal government reviews call a model unsafe and the Pentagon approves it
              anyway, the question is no longer whether AI safety evaluations matter —
              it&apos;s whether anyone is required to follow them.
            </em>
          </p>
        </JackSection>

      </JackArticle>
    </SEOWrapper>
  );
}
