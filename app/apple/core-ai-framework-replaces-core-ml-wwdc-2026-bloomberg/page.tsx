import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import JackArticle, {
  JackSection,
  JackCaseOverview,
  JackCallout,
  JackStats,
} from '@/components/JackArticle';

const SLUG =
  '/apple/core-ai-framework-replaces-core-ml-wwdc-2026-bloomberg';

const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL =
  'https://www.objectwire.org/apple/apple-core-ai-framework-wwdc-2026-core-ml-replacement.jpg';

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    'Apple Plans Core AI Framework to Replace Core ML at WWDC 2026, Bloomberg Reports | ObjectWire',
  description:
    "Apple intends to introduce a new developer framework called Core AI at WWDC 2026 in June, replacing Core ML — the on-device machine learning toolkit Apple has shipped since iOS 11 in 2017. Bloomberg's Mark Gurman reported the change on March 1, 2026, calling the ML-to-AI terminology shift significant.",
  keywords: [
    'Apple Core AI framework WWDC 2026',
    'Core ML replaced Core AI Apple 2026',
    'Apple WWDC 2026 developer framework announcement',
    'Mark Gurman Core AI Bloomberg March 2026',
    'iOS 27 Core AI on-device AI framework',
    'Apple on-device machine learning AI 2026',
    'Apple Intelligence Core AI developer tools',
    'Apple Foundation Models framework 3 billion parameters',
    'WWDC 2026 iOS 27 iPadOS 27 macOS 27',
    'Apple Core ML generative AI LLM optimization',
    'Apple Gemini Siri integration 2026',
    'Apple developer AI framework replacement 2026',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title:
      "Apple Is Replacing Core ML With 'Core AI' at WWDC 2026 — Bloomberg",
    description:
      "Bloomberg's Mark Gurman reports Apple will introduce Core AI at WWDC 2026, replacing the Core ML developer framework shipped since 2017. The function stays the same — on-device AI model integration — but the branding catches up with the industry.",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-03-01T22:00:00Z',
    modifiedTime: '2026-03-01T22:00:00Z',
    section: 'Technology',
    tags: [
      'Apple',
      'Core AI',
      'Core ML',
      'WWDC 2026',
      'iOS 27',
      'Apple Intelligence',
      'Developer Tools',
      'On-Device AI',
      'Mark Gurman',
      'Bloomberg',
      'Technology',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      "Apple Rebrands Core ML as Core AI for WWDC 2026 — Gurman Reports",
    description:
      "Apple is replacing Core ML with Core AI at WWDC 2026. Same on-device model integration purpose, new branding. Bloomberg Power On March 1, 2026.",
    images: [IMAGE_URL],
  },
};

// ─── Infobox data ─────────────────────────────────────────────────────────────

const frameworkFacts = [
  { label: 'New Framework',      value: 'Core AI' },
  { label: 'Replaces',           value: 'Core ML (launched with iOS 11, 2017)' },
  { label: 'Unveil Event',       value: 'WWDC 2026 — early-to-mid June 2026' },
  { label: 'Source',             value: "Bloomberg Power On — Mark Gurman, March 1, 2026" },
  { label: 'Core Purpose',       value: 'On-device AI model integration for developers — unchanged' },
  { label: 'Terminology Shift',  value: '"Machine learning" → "AI" — Gurman calls it significant' },
  { label: 'Transition',         value: 'Both frameworks may coexist during transition period' },
  { label: 'Platform Scope',     value: 'iOS 27, iPadOS 27, macOS 27, watchOS, tvOS, visionOS' },
  { label: 'Related Framework',  value: 'Foundation Models (Jun 2025) — ~3B parameter on-device LLM for developers' },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AppleCoreAIWWDC2026Page() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Apple Plans Core AI Framework to Replace Core ML at WWDC 2026, Bloomberg Reports"
        description="Apple intends to introduce a new developer framework called Core AI at WWDC 2026, replacing Core ML — the on-device machine learning toolkit shipped since iOS 11 in 2017. Bloomberg's Mark Gurman reported the change on March 1, 2026."
        author="Alfansa"
        authorUrl="https://www.objectwire.org/team/alfansa"
        publishedTime="2026-03-01T22:00:00Z"
        modifiedTime="2026-03-01T22:00:00Z"
        imageUrl={IMAGE_URL}
        articleUrl={ARTICLE_URL}
        section="Technology"
        keywords={[
          'Apple Core AI framework WWDC 2026',
          'Core ML replacement Apple',
          'Mark Gurman Bloomberg Core AI',
          'iOS 27 developer tools AI',
          'Apple on-device AI 2026',
          'WWDC 2026 Apple Intelligence',
        ]}
      />

      <JackArticle
        layout="news"
        title="Apple Plans Core AI Framework to Replace Core ML at WWDC 2026, Bloomberg Reports"
        subtitle="Apple intends to introduce a new developer framework called Core AI at WWDC 2026 in June, replacing Core ML — the on-device machine learning toolkit shipped since iOS 11 in 2017. Bloomberg's Mark Gurman broke the news on March 1, 2026, describing the ML-to-AI terminology shift as significant while noting the framework's core purpose remains the same."
        categoryLabel="Technology"
        categories={[
          { label: 'Technology', color: 'blue' },
          { label: 'Apple', color: 'black' },
        ]}
        publishDate="March 1, 2026"
        publishDateISO="2026-03-01T22:00:00Z"
        modifiedDateISO="2026-03-01T22:00:00Z"
        readTime="5 min read"
        author={{
          name: 'Alfansa',
          department: 'ObjectWire Technology Desk',
          url: 'https://www.objectwire.org/team/alfansa',
        }}
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/apple', label: 'Apple' },
          { href: SLUG, label: 'Core AI Framework WWDC 2026' },
        ]}
        relatedArticles={[
          {
            href: '/apple',
            category: 'Apple',
            categoryColor: 'text-gray-800',
            title: 'Apple Coverage Hub — ObjectWire',
          },
          {
            href: '/apple/news/apple-march-2026-products-macbook-iphone-17e-ipad-air-m5',
            category: 'Apple',
            categoryColor: 'text-gray-800',
            title: 'Apple March 2–4, 2026: MacBook, iPhone 17e, iPad Air M4, MacBook Air M5',
          },
          {
            href: '/tech',
            category: 'Technology',
            categoryColor: 'text-blue-600',
            title: 'Technology Desk — ObjectWire',
          },
          {
            href: '/open-ai',
            category: 'AI',
            categoryColor: 'text-green-600',
            title: 'OpenAI Coverage — ObjectWire',
          },
        ]}
        timeline={[
          { date: '2017 (iOS 11)', description: 'Apple launches Core ML — unified on-device machine learning API for developers.' },
          { date: '2024–2025', description: 'Apple Intelligence rollout integrates Core ML with private cloud compute and on-device models.' },
          { date: 'Jun 2025', description: 'Foundation Models framework introduced — developers access ~3B parameter on-device LLM.' },
          { date: 'Mar 1, 2026', description: 'Mark Gurman (Bloomberg Power On) reports Core AI will replace Core ML at WWDC 2026.', highlight: true },
          { date: 'Jun 2026 (est.)', description: 'WWDC 2026 — Core AI unveil alongside iOS 27, iPadOS 27, macOS 27 previews.', highlight: true },
        ]}
        documents={[
          { href: 'https://www.bloomberg.com', label: 'Bloomberg Power On — Gurman, March 1, 2026', icon: '📰' },
          { href: 'https://developer.apple.com/machine-learning', label: 'Apple Developer — Core ML Documentation', icon: '🔗' },
          { href: 'https://machinelearning.apple.com', label: 'Apple Machine Learning Research', icon: '📄' },
        ]}
        accentColor="black"
        articleUrl={ARTICLE_URL}
        description="Apple will replace Core ML with a new Core AI framework at WWDC 2026. Bloomberg's Mark Gurman reported the change on March 1, 2026."
        section="Technology"
        keywords={['Apple Core AI WWDC 2026', 'Core ML replacement', 'iOS 27 developer AI framework', 'Mark Gurman Bloomberg']}
        showCorrections
        showEditorialStandards
        footerTagline="When 'machine learning' gets rebranded to 'AI,' the only thing replaced is three letters on the API docs."
        footerLinks={[
          { href: '/apple', label: 'Apple Hub' },
          { href: '/tech', label: 'Technology Desk' },
        ]}
      >

        {/* ── Lede ─────────────────────────────────────────────── */}
        <p>
          Apple intends to introduce a new developer framework called <strong>Core AI</strong> at
          its <strong>Worldwide Developers Conference (WWDC) in June 2026</strong>, replacing{' '}
          <strong>Core ML</strong> — the on-device machine learning toolkit Apple has shipped
          across iOS, iPadOS, macOS, and other platforms since{' '}
          <strong>iOS 11 in 2017</strong>. Bloomberg&apos;s{' '}
          <strong>Mark Gurman</strong> reported the change in his{' '}
          <a href="https://www.bloomberg.com" target="_blank" rel="noopener noreferrer">
            Power On newsletter on March 1, 2026
          </a>, calling the shift from &quot;ML&quot; to &quot;AI&quot; in the framework name
          significant while noting that the underlying purpose — helping developers integrate
          external AI models into apps with on-device execution — remains the same.
        </p>

        <JackCallout accentColor="black" label="Gurman — March 1, 2026">
          &quot;The switch from &apos;ML&apos; to &apos;AI&apos; is significant&quot; because
          &quot;machine learning&quot; is viewed as dated and less resonant with both developers
          and consumers than &quot;AI.&quot; The core function — enabling developers to integrate
          outside AI models into apps — is unchanged.
        </JackCallout>

        <JackCaseOverview
          title="Core AI — At a Glance"
          accentColor="black"
          items={frameworkFacts}
        />

        {/* ── Section 1 ────────────────────────────────────────── */}
        <JackSection number={1} title="Background: Core ML and Apple's On-Device AI Evolution" accentColor="black">
          <p>
            Core ML launched in 2017 as part of iOS 11, providing developers a unified API to
            integrate trained machine learning models into apps — with all inference running
            on-device to preserve privacy and performance. It supports CNNs, transformers,
            diffusion models, and more, across image, text, and audio tasks.
          </p>
          <JackStats
            title="Core ML / Core AI Timeline"
            accentColor="black"
            stats={[
              { value: '2017', label: 'Core ML launches with iOS 11' },
              { value: '~3B', label: 'Parameters in Apple on-device Foundation Models (2025)' },
              { value: 'Jun 2026', label: 'Core AI expected at WWDC' },
              { value: '9', label: "Years Core ML has shipped across Apple platforms" },
            ]}
          />
          <JackCaseOverview
            title="Key Milestones — Core ML to Core AI"
            accentColor="black"
            items={[
              { label: '2017:', value: 'Core ML debuts with iOS 11 — on-device ML inference for app developers.' },
              { label: '2024–2025:', value: 'Apple Intelligence integrates Core ML with private cloud compute and on-device models for Siri and Visual Intelligence.' },
              { label: 'Jun 2025:', value: 'Foundation Models framework released — developers access a ~3B parameter on-device language model for generative AI features.' },
              { label: 'Mar 2026:', value: 'Core ML updated with advanced generative model optimization, granular weight compression, and multi-function state management.' },
              { label: 'Jun 2026 (planned):', value: 'Core AI replaces Core ML at WWDC 2026 — same on-device purpose, new name aligned with industry terminology.' },
            ]}
          />
        </JackSection>

        {/* ── Section 2 ────────────────────────────────────────── */}
        <JackSection number={2} title="What Changes and What Doesn't" accentColor="black">
          <p>
            Based on Gurman&apos;s reporting, <strong>Core AI</strong> is not a ground-up
            architectural replacement — it is a rebranding and modernization of Core ML within
            Apple&apos;s broader push to align its developer tools with the &quot;AI&quot;
            terminology that has become standard across the industry since 2023.
          </p>
          <JackCaseOverview
            title="Core ML vs. Core AI"
            accentColor="black"
            items={[
              { label: 'Name:', value: 'Core ML → Core AI' },
              { label: 'Purpose:', value: 'Unchanged — on-device integration of external AI models into apps.' },
              { label: 'Execution model:', value: 'On-device inference remains the default, preserving Apple\'s privacy positioning.' },
              { label: 'Transition approach:', value: 'Both frameworks may coexist during the transition, per MacTech — similar to past Apple API evolutions.' },
              { label: 'Backward compatibility:', value: 'Full details pending WWDC sessions; developers using Core ML in existing apps likely see a migration path.' },
            ]}
          />
          <JackCallout accentColor="blue" label="Foundation Models Context">
            Core AI sits alongside — not replacing — the{' '}
            <strong>Foundation Models framework</strong> introduced in June 2025, which gives
            developers direct access to Apple&apos;s own ~3B parameter on-device language model.
            Core AI handles integration of{' '}
            <em>external</em> AI models into apps; Foundation Models surfaces{' '}
            <em>Apple&apos;s own</em> on-device LLM. Both are part of the Apple Intelligence
            developer stack.
          </JackCallout>
        </JackSection>

        {/* ── Section 3 ────────────────────────────────────────── */}
        <JackSection number={3} title="WWDC 2026: Expected Scope" accentColor="black">
          <p>
            WWDC 2026 — expected in early-to-mid June — will preview Apple&apos;s full next
            OS generation alongside the Core AI announcement. No official dates have been
            confirmed as of March 1, 2026.
          </p>
          <JackCaseOverview
            title="WWDC 2026 — Expected Announcements"
            accentColor="black"
            items={[
              { label: 'OS previews:', value: 'iOS 27, iPadOS 27, macOS 27, watchOS, tvOS, visionOS.' },
              { label: 'Developer AI tools:', value: 'Core AI unveil — the centerpiece AI framework announcement.' },
              { label: 'Siri & Gemini:', value: 'Further Gemini integration for Siri enhancements and chatbot-like capabilities, per Bloomberg January 2026 reports.' },
              { label: 'Apple Intelligence:', value: 'Expanded on-device and private cloud compute features building on 2025 rollout.' },
            ]}
          />
          <p>
            The Core AI announcement will arrive in the same week Apple previews what developers
            will build on for the next year — making the WWDC session details more consequential
            than the name change itself. For Apple&apos;s March 2026 hardware lineup — including
            the new entry-level MacBook, iPhone 17e, and MacBook Air M5 — see our{' '}
            <Link
              href="/apple/news/apple-march-2026-products-macbook-iphone-17e-ipad-air-m5"
              className="font-medium underline hover:opacity-70"
            >
              Apple March 2–4 product coverage
            </Link>.
          </p>
          <p>
            <em>
              When &quot;machine learning&quot; gets rebranded to &quot;AI&quot; in the same
              framework slot, the only thing truly replaced is three letters on the API docs.
            </em>
          </p>
        </JackSection>

      </JackArticle>
    </SEOWrapper>
  );
}
