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

const SLUG = '/influencer/daddywellness';

export const metadata: Metadata = {
  title: 'Richie Lovelace (Daddy Wellness) — Wellness Influencer, Dialed University | ObjectWire',
  description:
    'Richie Lovelace, known online as Daddy Wellness, is a Miami-based wellness entrepreneur and content creator with over 2 million Instagram followers. He founded Dialed University and hosts the TSL Time podcast.',
  keywords: [
    'Richie Lovelace Daddy Wellness',
    'Daddy Wellness Instagram',
    'Dialed University',
    'Dialed Degen Method',
    'TSL Time podcast',
    'wellness influencer Miami',
    'daddywellness YouTube',
    'Daddy Wellness 2 million followers',
    'Richie Lovelace influencer',
    'Daddy Wellness Skool',
    'wellness content creator 2026',
    'SIUUUP Daddy Wellness',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: 'Richie Lovelace (Daddy Wellness) — 2M-Follower Wellness Influencer & Founder of Dialed University',
    description:
      'Profile of Richie Lovelace (Daddy Wellness) — former growth equity professional turned Miami-based wellness creator, founder of Dialed University, and host of TSL Time podcast. 2M+ Instagram followers.',
    type: 'profile',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
  },
};

const tocItems = [
  { id: 'overview', label: 'Overview' },
  { id: 'early-career', label: 'Early Career & Transition' },
  { id: 'platform-growth', label: 'Platform Growth & Metrics' },
  { id: 'dialed-degen', label: 'Dialed Degen Method' },
  { id: 'content-themes', label: 'Content Themes' },
  { id: 'dialed-university', label: 'Dialed University' },
  { id: 'tsl-time', label: 'TSL Time Podcast' },
  { id: 'business', label: 'Business & Monetization' },
  { id: 'personal', label: 'Personal Details' },
];

const infoBoxItems = [
  { label: 'Real Name', value: 'Richie Lovelace' },
  { label: 'Online Handle', value: '@daddywellness' },
  { label: 'Age', value: '~25 (as of 2026)' },
  { label: 'Location', value: 'Miami, Florida, USA' },
  { label: 'Instagram', value: '2M+ followers' },
  { label: 'YouTube', value: '64.5K subscribers, 764+ videos' },
  { label: 'Tagline', value: '"World\'s Healthiest Degen"' },
  { label: 'Founded', value: 'Dialed University (Skool platform)' },
  { label: 'Podcast', value: 'TSL Time' },
  { label: 'Started', value: '2019 (Instagram launch)' },
  { label: 'Prior Career', value: 'Growth equity' },
  { label: 'Reported Revenue', value: '~$20,000–$50,000/month (community)' },
];

export default function DaddyWellnessPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <ArticlePage
        title="Richie Lovelace (Daddy Wellness)"
        subtitle="Wellness entrepreneur, content creator, and founder of Dialed University — Miami, FL"
        category="Influencer"
        lastUpdated="February 23, 2026"
        backLink={{ href: '/influencer', label: 'Influencer Hub' }}
        infoBox={{
          title: 'Richie Lovelace',
          image: {
            src: '/influncer/daddy_wellness.jpg',
            alt: 'Richie Lovelace — Daddy Wellness',
            caption: 'Richie Lovelace (@daddywellness)',
          },
          items: infoBoxItems,
        }}
        tableOfContents={tocItems}
        relatedLinks={[
          {
            href: '/influencer',
            label: 'Influencer Hub',
            description: 'ObjectWire coverage of content creators and digital entrepreneurs',
          },
          {
            href: '/influencer/serge-gatari',
            label: 'Serge Gatari — Influencer Profile',
            description: 'Skool community builder and online business creator',
          },
          {
            href: '/influencer/nick-shirley',
            label: 'Nick Shirley — Influencer Profile',
            description: 'Fitness and lifestyle content creator',
          },
          {
            href: '/bio-hacking',
            label: 'Bio-Hacking & Wellness Coverage',
            description: 'Health optimization, biohacking trends, and performance content',
          },
        ]}
      >
        <TableOfContents items={tocItems} />

        <Section id="overview" title="Overview">
          <p>
            <strong>Richie Lovelace</strong>, known online as <strong>Daddy Wellness</strong>, is a Miami-based
            wellness entrepreneur and content creator whose primary platform is{' '}
            <strong>Instagram (@daddywellness)</strong>, where he has accumulated over{' '}
            <strong>2 million followers</strong>. He operates under the self-styled tagline{' '}
            <em>&ldquo;World&rsquo;s Healthiest Degen&rdquo;</em> — a deliberate contradiction that defines his
            entire brand: elite-level personal health practice coexisting with a high-energy social lifestyle.
          </p>
          <p>
            Lovelace founded <strong>Dialed University</strong>, a Skool-hosted community platform built around
            his <em>Dialed Degen Method</em> — a framework encouraging users to pursue serious fitness goals
            without abandoning social activities, travel, or enjoyment. He also hosts the{' '}
            <strong>TSL Time podcast</strong>, which has featured guests including DJ Diplo and TikTok personality
            Mila Monet. His YouTube channel (<strong>@daddywellness</strong>) holds 64.5K subscribers and over
            764 videos as of February 2026, spanning fitness routines, travel vlogs, street interviews, and
            community content.
          </p>
          <p>
            Prior to transitioning into full-time content creation, Lovelace worked in{' '}
            <strong>growth equity</strong>. He launched his Instagram account in 2019 with gym skit videos and
            built toward the million-follower threshold through daily organic posting — a pace he has maintained
            and describes as central to his methodology.
          </p>
        </Section>

        <Section id="early-career" title="Early Career & Transition to Content Creation">
          <p>
            Before establishing himself as a content creator, Richie Lovelace worked in{' '}
            <strong>growth equity</strong> — private capital focused on scaling high-growth companies. The
            professional background distinguishes him from the majority of fitness influencers and has informed
            his approach to community monetization, audience funnel strategy, and platform leverage.
          </p>
          <p>
            Lovelace launched his Instagram account in <strong>2019</strong>, initially posting gym skit videos
            that combined comedy with fitness content. The format — entertaining rather than purely educational —
            attracted early growth and established the irreverent tone that has defined{' '}
            <em>@daddywellness</em> ever since. The transition from corporate finance to daily content creation
            was gradual, with consistent posting serving as the primary growth engine rather than any single
            viral moment.
          </p>
          <p>
            By the time he began discussing his business in podcast interviews, Lovelace described a community
            of <em>&ldquo;over 1 million healthy degens&rdquo;</em> — a figure that has since doubled, and a
            framing that reveals as much about his brand philosophy as his audience size. Unlike creators who
            position themselves as aspirational experts, the &ldquo;degen&rdquo; self-identification signals
            accessibility and authenticity to an audience that values results without pretense.
          </p>
          <Quote source="Daddy Wellness, Skool Stories Interview">
            &ldquo;I started posting gym skits every single day — no fancy camera, no strategy. I just showed
            up. That&rsquo;s still the whole thing.&rdquo;
          </Quote>
        </Section>

        <Section id="platform-growth" title="Platform Growth & Key Metrics">
          <p>
            As of February 2026, Richie Lovelace&rsquo;s digital footprint spans multiple platforms with
            Instagram as his dominant surface:
          </p>
          <ul>
            <li>
              <strong>Instagram (@daddywellness)</strong> — Over <strong>2 million followers</strong>, 1,900+
              following, 135+ posts. Bio describes him as &ldquo;World&rsquo;s Healthiest Host of
              @tsltime.&rdquo; The catchphrase <em>&ldquo;SIUUUP&rdquo;</em> — a riff on Cristiano Ronaldo&rsquo;s
              &ldquo;SIUUU&rdquo; celebration — originated in his content in 2024 and has become a recurring
              signature.
            </li>
            <li>
              <strong>YouTube (@daddywellness)</strong> — 64.5K subscribers, 764+ videos including Shorts.
              Recent uploads include a Miami feature with Josh Baker, a Brazil block party vlog, and Rio
              exploration content. The channel covers travel, fitness, podcasting, and lifestyle segments.
            </li>
            <li>
              <strong>Skool (Dialed University)</strong> — Community platform with paid membership. Reported
              monthly recurring revenue has been cited as both $20,000 and $50,000 in separate creator
              spotlights, with variation likely reflecting different periods and tier structures.
            </li>
            <li>
              <strong>X / Twitter</strong> — Limited presence. Variants including @daddywelness and
              @RichieLovelac exist but primary activity remains concentrated on Instagram and YouTube.
            </li>
          </ul>
          <p>
            The asymmetry between Instagram (2M followers) and YouTube (64.5K subscribers) is notable and
            deliberate — Lovelace built his brand entirely on Instagram&rsquo;s social graph before translating
            that audience into long-form content and community monetization.
          </p>
        </Section>

        <Section id="dialed-degen" title="The Dialed Degen Method">
          <p>
            The <strong>Dialed Degen Method</strong> is the philosophical and practical framework at the center
            of Lovelace&rsquo;s brand. In its simplest form, it rejects the binary choice between serious
            fitness and social enjoyment — arguing that peak physical performance and a vibrant social life are
            compatible, not competing, goals.
          </p>
          <p>
            The method frames fitness disciplines (training, nutrition, sleep, cortisol management) as the
            foundation that enables, rather than restricts, social degeneracy (festivals, travel, late nights,
            tequila). The practitioner is &ldquo;dialed&rdquo; in their health fundamentals, which gives them
            the metabolic and physiological resilience to absorb social experiences that would otherwise derail
            progress.
          </p>
          <p>
            In execution, the Dialed Degen Method manifests in Lovelace&rsquo;s own content: gym workouts
            documented alongside tequila train trips in Mexico, cortisol management content followed by
            festival vlogs, and structured fitness programming paired with a $20,000 golf trip gifted to his
            father. The framework is aspirational without being puritanical — a meaningful differentiator in a
            wellness content landscape often defined by restriction narratives.
          </p>
          <Quote source="Daddy Wellness, Podcast Episode">
            &ldquo;You don&rsquo;t have to choose. Get jacked, stay social, travel the world. That&rsquo;s
            the whole thing.&rdquo;
          </Quote>
        </Section>

        <Section id="content-themes" title="Content Themes">
          <p>
            Lovelace&rsquo;s content output across Instagram and YouTube covers several recurring categories:
          </p>
          <ul>
            <li>
              <strong>Fitness optimization</strong> — gym sessions, training splits, cortisol management
              protocols, and health biometrics; Lovelace has discussed investing over $250,000 in personal
              health optimization by age 30 in wellness content (a figure cross-referenced with collaborator
              and adjacent creator contexts)
            </li>
            <li>
              <strong>Travel vlogs</strong> — Brazil block parties, Rio explorations, Mexico tequila train,
              Miami lifestyle content; travel is framed as a feature of the Dialed Degen life rather than
              a departure from it
            </li>
            <li>
              <strong>Street interviews</strong> — man-on-the-street format conversations covering topics
              ranging from Taylor Swift to Zyns to mental health, generating broad organic reach
            </li>
            <li>
              <strong>Podcast content</strong> — TSL Time episodes with notable guests, distributed as both
              long-form audio and short-form video clips
            </li>
            <li>
              <strong>Community and personal milestones</strong> — including a documented $20,000 golf trip
              organized for his father, used as both personal content and a statement about creator monetization
              putting life experiences within reach
            </li>
            <li>
              <strong>Viral shorts</strong> — Zyn usage comedy, haircut content, humor-forward shorts
              optimized for Instagram Reels engagement
            </li>
          </ul>
        </Section>

        <Section id="dialed-university" title="Dialed University">
          <p>
            <strong>Dialed University</strong> is Lovelace&rsquo;s primary monetization vehicle — a paid
            community hosted on <strong>Skool</strong> that delivers the Dialed Degen Method as a structured
            program. The community centers on fitness programming, accountability, and lifestyle coaching for
            users who want to get in shape without sacrificing their social lives.
          </p>
          <p>
            Revenue figures for Dialed University have been cited in multiple creator-focused interviews and
            case studies, ranging from <strong>$15,000–$20,000 in monthly recurring revenue</strong> in
            student-led spotlights to <strong>$50,000/month</strong> in broader community discussions. The
            variance likely reflects the platform&rsquo;s growth trajectory across different time periods
            rather than contradictory reporting.
          </p>
          <p>
            Skool — the platform on which Dialed University operates — has become a significant hub for fitness
            and online business creators. Lovelace&rsquo;s success with the model has been featured in Skool&rsquo;s
            own promotional materials and creator spotlight interviews, positioning him as a case study in
            community-driven monetization for wellness creators with large social followings.
          </p>
        </Section>

        <Section id="tsl-time" title="TSL Time Podcast">
          <p>
            <strong>TSL Time</strong> is a podcast hosted by Lovelace, operating under the @tsltime handle and
            listed in his Instagram bio as his primary hosting credential. The show covers lifestyle, wellness,
            and culture — maintaining the Dialed Degen brand tone while providing longer-form content for
            Lovelace&rsquo;s audience.
          </p>
          <p>
            Notable guests on TSL Time have included <strong>DJ Diplo</strong> — the electronic music producer
            known for Major Lazer — and <strong>Mila Monet</strong>, a TikTok creator with significant
            platform presence. The booking of guests at Diplo&rsquo;s level indicates Lovelace&rsquo;s growing
            influence within the creator and entertainment ecosystem, and the crossover audiences these
            appearances generate.
          </p>
          <p>
            Podcast episodes are distributed across audio platforms and repurposed as short-form clips on
            Instagram and YouTube, functioning both as standalone content and as top-of-funnel audience
            acquisition for Dialed University.
          </p>
        </Section>

        <Section id="business" title="Business & Monetization">
          <p>
            Lovelace&rsquo;s revenue model is built primarily around <strong>community memberships</strong> via
            Dialed University rather than traditional creator monetization (YouTube ads, brand sponsorships as
            primary income). In documented interviews, he has described running no ads on his YouTube channel —
            a channel he acknowledged was still relatively small in earlier clips — and positioning organic
            Instagram posting as the primary growth and acquisition channel.
          </p>
          <p>Associated business and revenue streams include:</p>
          <ul>
            <li>
              <strong>Dialed University memberships</strong> — the core product; tiered coaching and community
              access with monthly recurring revenue reported between $20,000 and $50,000
            </li>
            <li>
              <strong>Coaching programs</strong> — individual and group fitness and lifestyle coaching tied to
              the Dialed Degen Method
            </li>
            <li>
              <strong>Brand collaborations</strong> — partnerships in fitness, lifestyle, and events spaces,
              consistent with his Miami-based content ecosystem
            </li>
            <li>
              <strong>TSL Time podcast</strong> — audience development and potential sponsorship inventory as
              guest profile grows
            </li>
          </ul>
          <p>
            The model follows a pattern common among creator-entrepreneurs who treat social media as a
            distribution channel for a community product rather than as the monetized asset itself — a
            structure that typically produces higher per-follower revenue than ad-dependent channels.
          </p>
        </Section>

        <Section id="personal" title="Personal Details & Public Presence">
          <p>
            Richie Lovelace is listed as approximately <strong>25 years old</strong> in biographical
            summaries as of 2026. He is based primarily in <strong>Miami, Florida</strong>, a location
            reflected consistently in his content — Miami pool scenes, South Beach events, and the broader
            high-energy social culture of the city are recurring visual and thematic anchors in his output.
          </p>
          <p>
            Global travel is a consistent secondary theme: Brazil (including Rio and block party content),
            Mexico (tequila train segments), and European and Central American destinations have all featured
            in recent uploads. Content from these locations is framed through the Dialed Degen lens — wellness
            practices maintained while fully immersed in local cultures and social scenes.
          </p>
          <p>
            Lovelace maintains an active daily posting schedule, with 2026 content continuing the consistent
            cadence that drove his initial growth. The discipline of daily posting — regardless of travel,
            events, or production quality — is itself part of the methodology he advocates to his community.
          </p>
        </Section>

        <RelatedLinks
          links={[
            {
              href: '/influencer',
              label: 'Influencer Hub — ObjectWire',
              description: 'Full coverage of content creators, digital entrepreneurs, and platform builders',
            },
            {
              href: '/influencer/serge-gatari',
              label: 'Serge Gatari',
              description: 'Skool community architect and online business creator profile',
            },
            {
              href: '/influencer/nick-shirley',
              label: 'Nick Shirley',
              description: 'Fitness and lifestyle content creator profile',
            },
            {
              href: '/bio-hacking',
              label: 'Bio-Hacking & Wellness',
              description: 'Health optimization, biohacking, and performance wellness coverage',
            },
          ]}
        />

        <ExternalLinks
          links={[
            {
              href: 'https://www.instagram.com/daddywellness/',
              label: 'Instagram — @daddywellness (2M+ followers)',
            },
            {
              href: 'https://www.youtube.com/@daddywellness',
              label: 'YouTube — @daddywellness (64.5K subscribers)',
            },
            {
              href: 'https://www.skool.com/dialed-university',
              label: 'Dialed University — Skool Community',
            },
          ]}
        />
      </ArticlePage>
    </SEOWrapper>
  );
}
