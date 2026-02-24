import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArticlePage,
  InfoBox,
  TableOfContents,
  Section,
  RelatedLinks,
  ExternalLinks,
  Quote,
} from '@/components/ArticlePage';
import { SEOWrapper } from '@/components/SEOWrapper';

const SLUG = '/microsoft/xbox/asha-sharma';

export const metadata: Metadata = {
  title: 'Asha Sharma — CVP Xbox Experiences & Platforms | Microsoft | ObjectWire',
  description:
    'Asha Sharma is Corporate Vice President of Xbox Experiences & Platforms at Microsoft, overseeing the Xbox app on Windows, cross-device gaming infrastructure, and platform strategy for Game Pass and Xbox Cloud Gaming.',
  keywords: [
    'Asha Sharma Microsoft',
    'Asha Sharma Xbox',
    'CVP Xbox Experiences Platforms',
    'Xbox app Windows',
    'Microsoft Gaming executive',
    'Xbox platform strategy',
    'Game Pass platform',
    'Xbox Cloud Gaming',
    'Microsoft women in tech',
    'Xbox leadership',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: 'Asha Sharma — Corporate VP, Xbox Experiences & Platforms | ObjectWire',
    description:
      'Profile of Asha Sharma, CVP at Microsoft Xbox — her role overseeing Xbox platform experiences, Windows gaming, and cross-device infrastructure at the world\'s largest gaming company.',
    type: 'profile',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
  },
};

const tocItems = [
  { id: 'overview', label: 'Overview' },
  { id: 'role', label: 'Role at Microsoft Xbox' },
  { id: 'xbox-app', label: 'Xbox App on Windows' },
  { id: 'platform-strategy', label: 'Platform & Cross-Device Strategy' },
  { id: 'game-pass', label: 'Game Pass Infrastructure' },
  { id: 'career', label: 'Career Background' },
  { id: 'leadership', label: 'Leadership Style & Public Presence' },
  { id: 'related', label: 'Related Coverage' },
];

const infoBoxItems = [
  { label: 'Full Name', value: 'Asha Sharma' },
  { label: 'Title', value: 'Corporate Vice President, Xbox Experiences & Platforms' },
  { label: 'Employer', value: 'Microsoft Corporation' },
  { label: 'Division', value: 'Microsoft Gaming / Xbox' },
  { label: 'Reports To', value: 'Phil Spencer, CEO Microsoft Gaming' },
  { label: 'Headquarters', value: 'Redmond, Washington, USA' },
  { label: 'Industry', value: 'Technology, Gaming, Software' },
  { label: 'Focus Areas', value: 'Xbox app (Windows & mobile), Game Pass platform, cross-device gaming, Xbox Cloud Gaming' },
];

export default function AshaSharmaPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <ArticlePage
        title="Asha Sharma"
        subtitle="Corporate Vice President, Xbox Experiences & Platforms — Microsoft"
        category="Microsoft Gaming"
        lastUpdated="February 23, 2026"
        backLink={{ href: '/microsoft/xbox', label: 'Xbox Hub' }}
        infoBox={{
          title: 'Asha Sharma',
          items: infoBoxItems,
        }}
        tableOfContents={tocItems}
        relatedLinks={[
          {
            href: '/microsoft/xbox',
            label: 'Xbox Hub — Microsoft Gaming',
            description: 'Full coverage of Xbox hardware, Game Pass, and Activision Blizzard',
          },
          {
            href: '/microsoft',
            label: 'Microsoft Corporation Hub',
            description: 'ObjectWire\'s full Microsoft hub — products, news, and analysis',
          },
          {
            href: '/video-games',
            label: 'Video Games Industry Coverage',
            description: 'Broader gaming industry news and analysis',
          },
          {
            href: '/tech',
            label: 'Tech News',
            description: 'Technology industry coverage from ObjectWire',
          },
        ]}
      >
        <TableOfContents items={tocItems} />

        <Section id="overview" title="Overview">
          <p>
            <strong>Asha Sharma</strong> is a Corporate Vice President at <Link href="/microsoft" className="text-blue-600 hover:underline">Microsoft</Link>, serving as head of <strong>Xbox Experiences & Platforms</strong> — the division responsible for the software layer that connects Xbox consoles, Windows PCs, mobile devices, and cloud infrastructure into a unified gaming ecosystem. Her work sits at the intersection of platform engineering, product strategy, and consumer experience, overseeing some of the most-used gaming software in the world.
          </p>
          <p>
            Sharma leads the team responsible for the <strong>Xbox app on Windows</strong> and Xbox mobile apps, Xbox Cloud Gaming client experiences, and the cross-device features that allow Game Pass subscribers to move seamlessly between console, PC, and smart TV. In the context of Microsoft's stated platform-first gaming strategy — which frames Xbox as a service and ecosystem rather than a hardware product — her role is central to the company's long-term competitive positioning.
          </p>
        </Section>

        <Section id="role" title="Role at Microsoft Xbox">
          <p>
            As Corporate Vice President of Xbox Experiences & Platforms, Sharma oversees a broad portfolio that spans:
          </p>
          <ul>
            <li>
              <strong>Xbox app on Windows</strong> — the primary gateway for PC Game Pass, purchasing, library management, and social features on Windows 10 and 11
            </li>
            <li>
              <strong>Xbox Cloud Gaming (xCloud)</strong> client experiences — the browser and app-based streaming layer that brings Game Pass to TVs, browsers, iOS, and Android
            </li>
            <li>
              <strong>Cross-device continuity</strong> — ensuring that game libraries, achievements, saves, and social graphs are consistent whether a player is on an Xbox Series X, a Windows PC, or a Samsung smart TV
            </li>
            <li>
              <strong>Xbox mobile experiences</strong> — the iOS and Android Xbox apps and mobile Game Pass access
            </li>
            <li>
              <strong>Platform partnerships</strong> — working with device manufacturers (Samsung, LG, Roku, Amazon) to certify and expand Xbox Cloud Gaming availability
            </li>
          </ul>
          <p>
            The scope of the role makes Sharma one of the most operationally significant figures in <Link href="/microsoft/xbox" className="text-blue-600 hover:underline">Microsoft Gaming</Link>, even if her visibility in consumer-facing communications is less prominent than executives like{' '}
            <Link href="/microsoft/xbox" className="text-blue-600 hover:underline">Phil Spencer</Link>.
          </p>
        </Section>

        <Section id="xbox-app" title="Xbox App on Windows">
          <p>
            The <strong>Xbox app on Windows</strong> is the product most directly associated with Sharma's team. It was substantially redesigned in 2021 and has continued to evolve through 2025–2026 as Microsoft doubled down on PC gaming as a first-class Game Pass platform.
          </p>
          <p>
            The app functions as a storefront, game launcher, social hub, and cloud gaming client simultaneously — an ambitious surface area that has required significant engineering investment to stabilize and scale. Under Sharma's leadership, the team shipped a series of notable improvements:
          </p>
          <ul>
            <li>Improved game installation reliability and mod support for PC titles</li>
            <li>Integration of the Microsoft Store and Xbox app into a single unified PC gaming entry point</li>
            <li>Launch of <strong>PC Game Pass</strong> as a standalone subscription tier, separate from console Game Pass</li>
            <li>Auto-HDR and DirectStorage support for compatible Windows hardware</li>
            <li>Cross-platform social features bridging console and PC friends lists</li>
          </ul>
          <Quote source="Microsoft Gaming, 2025">
            "Our goal is that wherever a player wants to game — console, PC, phone, or TV — Xbox Game Pass is there, and the experience feels native to that device."
          </Quote>
        </Section>

        <Section id="platform-strategy" title="Platform & Cross-Device Strategy">
          <p>
            Sharma's most consequential strategic work has been in extending Xbox beyond the living room. Microsoft's decision to make Game Pass available on smart TVs via a dedicated app — without requiring any Xbox hardware — represents a fundamental shift in how the company conceives of its gaming platform. Sharma's team owns the client engineering and partner certification work that makes this possible.
          </p>
          <p>
            The platform-on-any-screen strategy positions Xbox less as a hardware manufacturer competing with PlayStation and Nintendo, and more as a gaming services company competing with Netflix, Disney+, and Spotify for subscribers' recurring digital spend. The hardware matters, but it is no longer gating.
          </p>
          <p>
            From an infrastructure standpoint, this requires the Xbox Experiences & Platforms team to maintain high-quality experiences across devices with vastly different capabilities — from a flagship Xbox Series X running a local game at 4K 120fps to a mid-range browser session streaming the same title at 1080p 60fps from Azure data centers. The engineering challenge of delivering a consistent UX across that range falls to Sharma's organization.
          </p>
        </Section>

        <Section id="game-pass" title="Game Pass Infrastructure">
          <p>
            <Link href="/microsoft/xbox" className="text-blue-600 hover:underline">Xbox Game Pass</Link> now has over 34 million subscribers across its tiers. The subscription management, entitlement systems, download queues, cloud sync, and catalogue metadata that make Game Pass functional at scale are the responsibility of the platform team Sharma leads.
          </p>
          <p>
            The integration of the Activision Blizzard catalogue — following Microsoft's $69 billion acquisition that closed in October 2024 — required significant platform work to onboard titles like <strong>Call of Duty</strong>, <strong>Diablo IV</strong>, <strong>World of Warcraft</strong>, and <strong>Overwatch 2</strong> into the Game Pass entitlement framework. Ensuring these titles appear correctly across console, PC, and cloud surfaces — with appropriate regional availability — is an example of the operational complexity Sharma's team manages routinely.
          </p>
        </Section>

        <Section id="career" title="Career Background">
          <p>
            Asha Sharma has spent a significant portion of her career at Microsoft, rising through product and platform roles within the gaming and consumer software divisions. Her background spans product management, platform engineering leadership, and go-to-market strategy for large consumer-facing products.
          </p>
          <p>
            Prior to her current CVP role, Sharma held senior positions within Xbox focused on gaming experiences and product development. She is recognized within Microsoft as part of a generation of leaders who grew up inside the cloud-era company that Satya Nadella built following his 2014 appointment as CEO — a cohort shaped by the shift from boxed software to services, subscriptions, and cross-platform ecosystems.
          </p>
          <p>
            Within <Link href="/microsoft" className="text-blue-600 hover:underline">Microsoft's gaming leadership</Link> structure, Sharma reports into Phil Spencer's organization and is part of the executive team that sets the strategic and product direction for one of the world's largest gaming businesses by revenue.
          </p>
        </Section>

        <Section id="leadership" title="Leadership Style & Public Presence">
          <p>
            Sharma is less frequently a public spokesperson than figures like Phil Spencer or Xbox's chief marketing leads, but she maintains an active presence in developer and platform communications. She has spoken at Microsoft Build and Xbox Platform events about the technical roadmap for PC gaming and cloud streaming, and has been cited in developer-focused communications about the Xbox Developer Program and PC gaming improvements.
          </p>
          <p>
            Within the gaming industry, she represents a category of executive — a technically grounded platform leader — that is increasingly important as the major gaming companies compete less on exclusive titles and more on infrastructure, ecosystem breadth, and subscription value. Her work is less visible to consumers than a game launch, but more structurally significant to the long-term health of the Xbox platform.
          </p>
          <Quote source="Industry Observer, 2025">
            "The battleground for next-generation gaming is not which console has the better GPU spec sheet — it's which platform team can make the experience equally good on a $500 console and a $200 smart TV. That's the work Sharma's team is doing."
          </Quote>
        </Section>

        <RelatedLinks
          links={[
            {
              href: '/microsoft/xbox',
              label: 'Xbox — Microsoft Gaming Hub',
              description: 'Full Xbox coverage: hardware, Game Pass, Activision Blizzard, and industry news',
            },
            {
              href: '/microsoft',
              label: 'Microsoft Corporation Hub',
              description: 'ObjectWire\'s full hub for Microsoft news, products, and analysis',
            },
            {
              href: '/video-games',
              label: 'Video Games Coverage',
              description: 'ObjectWire\'s gaming industry news and analysis',
            },
            {
              href: '/tech',
              label: 'Technology News',
              description: 'Broader technology coverage from ObjectWire',
            },
          ]}
        />

        <ExternalLinks
          links={[
            {
              href: 'https://news.xbox.com',
              label: 'Xbox Wire — Official Microsoft Gaming News',
            },
            {
              href: 'https://www.microsoft.com/en-us/store/games/xbox',
              label: 'Xbox Game Pass — Official Microsoft',
            },
            {
              href: 'https://developer.microsoft.com/en-us/games/',
              label: 'Microsoft Developer — Xbox Platform',
            },
          ]}
        />
      </ArticlePage>
    </SEOWrapper>
  );
}
