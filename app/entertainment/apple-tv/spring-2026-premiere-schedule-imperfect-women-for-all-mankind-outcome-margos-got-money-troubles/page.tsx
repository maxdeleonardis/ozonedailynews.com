import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox, TagsSection } from '@/components/NewsArticle';

const SLUG =
  '/entertainment/apple-tv/spring-2026-premiere-schedule-imperfect-women-for-all-mankind-outcome-margos-got-money-troubles';
const FULL_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = 'https://www.objectwire.org/apple/apple-tv-spring-2026-slate.jpg';

export const metadata: Metadata = {
  title: 'Apple TV+ Spring 2026 Lineup: Imperfect Women, For All Mankind S5, Outcome & More | ObjectWire',
  description:
    "Apple TV+ launches its biggest spring slate yet with five high-profile premieres across five weeks — from March 18 to April 15. Headlined by the SXSW breakout Margo's Got Money Troubles, Keanu Reeves in Outcome, Elisabeth Moss in Imperfect Women, and the long-awaited For All Mankind Season 5.",
  keywords: [
    'Apple TV+ spring 2026',
    "Margo's Got Money Troubles Apple TV+",
    'Imperfect Women Apple TV',
    'For All Mankind Season 5',
    'Outcome Keanu Reeves Apple TV',
    'Apple TV spring premiere schedule',
    'Elisabeth Moss Apple TV',
    'Jonah Hill Outcome film',
    'SXSW 2026 Apple TV',
    'Apple TV+ new shows 2026',
    'Michelle Pfeiffer Apple TV',
    'Your Friends and Neighbors Season 2',
    'Apple TV+ original series',
    'Kerry Washington Apple TV',
    'Jon Hamm Apple TV+',
  ],
  openGraph: {
    title: 'Apple TV+ Spring 2026: Five-Week Premiere Blitz From March 18 to April 15',
    description:
      "Apple TV+ kicks off a five-week spring slate with Imperfect Women (March 18), For All Mankind S5 (March 27), Your Friends & Neighbors S2 (April 3), Outcome (April 10), and the SXSW hit Margo's Got Money Troubles (April 15).",
    url: FULL_URL,
    type: 'article',
    images: [{ url: IMAGE_URL, alt: 'Apple TV+ Spring 2026 Premier Schedule' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Apple TV+ Spring 2026: Margo's Got Money Troubles, Outcome, For All Mankind S5 & More",
    description:
      "Five weeks, five major premieres. Apple TV+'s spring 2026 blitz runs March 18 – April 15 with Elisabeth Moss, Keanu Reeves, Jon Hamm, and the SXSW breakout starring Elle Fanning and Michelle Pfeiffer.",
    images: [IMAGE_URL],
  },
  alternates: { canonical: FULL_URL },
};

const breadcrumbItems = [
  { name: 'Home', item: '/' },
  { name: 'Entertainment', item: '/entertainment' },
  { name: 'Apple TV+', item: '/entertainment/apple-tv' },
];

const articleTags = [
  'Apple TV+',
  'Apple',
  "Margo's Got Money Troubles",
  'Imperfect Women',
  'For All Mankind',
  'Outcome',
  'Your Friends & Neighbors',
  'Elisabeth Moss',
  'Keanu Reeves',
  'Jonah Hill',
  'Jon Hamm',
  'Elle Fanning',
  'Michelle Pfeiffer',
  'SXSW 2026',
  'Streaming',
  'Entertainment',
];

export default function AppleTVSpring2026SlatePagePage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Apple TV+ Spring 2026 Premiere Schedule: Imperfect Women, For All Mankind S5, Outcome, and the SXSW Hit Margo's Got Money Troubles"
        description="Apple TV+ has officially launched its high-stakes spring 2026 slate — a five-week premiere blitz running from March 18 to April 15 anchored by five major originals including the SXSW breakout Margo's Got Money Troubles and Keanu Reeves in Outcome."
        author="ObjectWire Entertainment Desk"
        publishedTime="2026-03-14T00:00:00Z"
        modifiedTime="2026-03-14T00:00:00Z"
        articleUrl={FULL_URL}
        imageUrl={IMAGE_URL}
        section="Entertainment"
        keywords={[
          'Apple TV+',
          "Margo's Got Money Troubles",
          'Imperfect Women',
          'For All Mankind Season 5',
          'Outcome',
          'SXSW 2026',
          'Keanu Reeves',
          'Elisabeth Moss',
          'Streaming 2026',
        ]}
      />
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>
      <NewsArticle
        title="Apple TV+ Spring 2026: Five-Week Premiere Blitz Kicks Off March 18"
        subtitle="Apple TV+ has officially locked in its most concentrated spring rollout to date — five major originals across five weeks, headlined by the SXSW breakout Margo's Got Money Troubles, Keanu Reeves in Outcome, and the long-awaited fifth season of For All Mankind."
        category="Entertainment"
        categoryColor="purple"
        topicTag="entertainment"
        publishDate="March 14, 2026"
        readTime="6 min read"
        author={{ name: 'ObjectWire Entertainment Desk', role: 'Entertainment Reporter' }}
        thumbnail={{ src: IMAGE_URL, alt: 'Apple TV+ Spring 2026 premiere schedule' }}
        tags={articleTags}
        trending={true}
        slug={SLUG}
        url={FULL_URL}
      >

        {/* ------------------------------------------------------------------ */}
        {/* SECTION 1 — THE LEAD */}
        {/* ------------------------------------------------------------------ */}
        <h2>Apple TV+ Bets Big on Spring With Its Most Loaded Five-Week Slate Yet</h2>
        <p>
          <a href="/apple">Apple</a>'s streaming service has officially kicked off its
          high-stakes spring schedule, anchoring its 2026 programming calendar with a
          massive five-week premiere run that stretches from <strong>March 18</strong> to{' '}
          <strong>April 15</strong>. The blitz brings together prestige drama, dark comedy,
          fan-favorite returning series, and a film debut — a rare concentration of originals
          that signals <strong>Apple TV+</strong>'s intent to own the streaming conversation
          heading into the summer competitive window.
        </p>
        <p>
          The slate's timing is notable. <a href="/apple">Apple</a> is deploying these
          titles in a streaming landscape that has rarely seen this level of originals output
          compressed into a single month and a half from one platform. The company's
          strategy appears designed not just to attract new subscribers, but to build
          appointment-viewing momentum — a commodity that has defined HBO's cultural dominance
          and one that Apple has been steadily assembling since the launches of{' '}
          <em>Ted Lasso</em>, <em>Severance</em>, and <em>The Morning Show</em>.
        </p>

        {/* Full Schedule Table */}
        <HighlightBox color="blue">
          <p><strong>The Five-Week Apple TV+ Spring 2026 Premiere Schedule</strong></p>
          <ul>
            <li>
              <strong>March 18</strong> — <em>Imperfect Women</em> — Psychological Thriller —
              Elisabeth Moss, Kerry Washington, Kate Mara
            </li>
            <li>
              <strong>March 27</strong> — <em>For All Mankind</em> (Season 5) — Prestige Sci-Fi —
              Joel Kinnaman, Wrenn Schmidt
            </li>
            <li>
              <strong>April 3</strong> — <em>Your Friends &amp; Neighbors</em> (Season 2) —
              Dark Comedy / Thriller — Jon Hamm, Amanda Peet
            </li>
            <li>
              <strong>April 10</strong> — <em>Outcome</em> — Dark Comedy Film —
              Keanu Reeves, Cameron Diaz, Jonah Hill
            </li>
            <li>
              <strong>April 15</strong> — <em>Margo's Got Money Troubles</em> — Comedy / Drama —
              Elle Fanning, Michelle Pfeiffer, Nick Offerman
            </li>
          </ul>
        </HighlightBox>

        {/* ------------------------------------------------------------------ */}
        {/* SECTION 2 — MARGO'S */}
        {/* ------------------------------------------------------------------ */}
        <h2>The SXSW Breakout: Margo's Got Money Troubles Is Already a "Modern Classic"</h2>
        <p>
          The clear headline of the spring slate — at least among critics — is{' '}
          <strong><em>Margo's Got Money Troubles</em></strong>, which premiered its first
          three episodes at <strong>SXSW 2026</strong> in Austin this week to reviews that
          have been extraordinary even by festival standards. Critics are calling it a{' '}
          <strong>"modern classic"</strong>, with special praise directed at{' '}
          <strong>Michelle Pfeiffer</strong> in a role that has already generated early
          awards-season discussion. Pfeiffer plays an ex-Hooters waitress in a performance
          critics describe as both unexpectedly funny and dramatically rich.
        </p>
        <p>
          The series stars <strong>Elle Fanning</strong> as Margo — a young woman navigating
          financial chaos — alongside <strong>Nick Offerman</strong> in a supporting role
          that early reviews suggest is among the best work of his career. The show officially
          lands on <a href="/apple">Apple TV+</a> on <strong>April 15</strong>, making it
          the anchor closer of the five-week blitz and the title most likely to generate
          sustained cultural conversation through the spring and into summer.
        </p>
        <p>
          The SXSW reception places <em>Margo's Got Money Troubles</em> among a small
          group of Apple originals that arrived with critical momentum already fully formed
          before their streaming debut — a position that historically correlates with the
          kind of word-of-mouth run that drives subscription conversion at scale.
        </p>

        <HighlightBox color="green">
          <ul>
            <li><strong>Premiere date:</strong> April 15, 2026 on Apple TV+</li>
            <li><strong>Festival debut:</strong> SXSW 2026, Austin, TX — first three episodes screened</li>
            <li><strong>Critical reception:</strong> "Modern classic" — early unanimous praise</li>
            <li><strong>Stars:</strong> Elle Fanning, Michelle Pfeiffer (praised as awards-caliber), Nick Offerman</li>
            <li><strong>Genre:</strong> Comedy / Drama</li>
          </ul>
        </HighlightBox>

        {/* ------------------------------------------------------------------ */}
        {/* SECTION 3 — IMPERFECT WOMEN */}
        {/* ------------------------------------------------------------------ */}
        <h2>Imperfect Women: The Thriller Pillar Opening the Slate on March 18</h2>
        <p>
          The spring blitz opens with <strong><em>Imperfect Women</em></strong> on{' '}
          <strong>March 18</strong> — a psychological thriller based on Araminta Hall's
          novel of the same name. The series follows three lifelong friends whose carefully
          constructed lives begin to unravel in the aftermath of a shocking crime,
          and <a href="/apple">Apple</a> is positioning it as a{' '}
          <strong>"conversation-starting drama"</strong> designed to anchor the sort of
          collective viewing and social media discourse that has defined breakout prestige
          series in recent years.
        </p>
        <p>
          The cast assembled for <em>Imperfect Women</em> is among the most decorated of
          any Apple original in recent memory:{' '}
          <strong>Elisabeth Moss</strong> — a two-time Emmy winner whose prestige television
          credentials (<em>The Handmaid's Tale</em>, <em>Mad Men</em>) are unmatched in the
          current landscape — leads alongside <strong>Kerry Washington</strong> and{' '}
          <strong>Kate Mara</strong>. The trio of lead performances is expected to be a
          primary critical focus when the show drops.
        </p>

        {/* ------------------------------------------------------------------ */}
        {/* SECTION 4 — FOR ALL MANKIND */}
        {/* ------------------------------------------------------------------ */}
        <h2>For All Mankind Season 5: The Sci-Fi Veteran Returns March 27</h2>
        <p>
          <strong><em>For All Mankind</em></strong> returns for its fifth season on{' '}
          <strong>March 27</strong>, picking up in the <strong>2010s</strong> and dealing
          with the political and human fallout from the{' '}
          <strong>"Goldilocks asteroid heist"</strong> that defined last season's final arc.
          The series remains one of <a href="/apple">Apple TV+</a>'s most consistent
          critical performers — a cornerstone of the platform's premium genre reputation —
          and its return is expected to re-activate one of the service's most engaged
          subscriber communities.
        </p>
        <p>
          <strong>Joel Kinnaman</strong> and <strong>Wrenn Schmidt</strong> lead returning
          casts into what showrunners have described as the season with the most globally
          expansive scope since the series premiered. Season 5 arrives at a moment when
          space-race narratives carry renewed real-world resonance — a cultural context
          that <a href="/apple">Apple</a>'s marketing team is expected to lean into
          aggressively heading into March 27.
        </p>

        {/* ------------------------------------------------------------------ */}
        {/* SECTION 5 — YOUR FRIENDS & NEIGHBORS */}
        {/* ------------------------------------------------------------------ */}
        <h2>Your Friends & Neighbors Season 2: Jon Hamm's Dark Comedy Returns April 3</h2>
        <p>
          <strong>Jon Hamm</strong> returns for the second season of{' '}
          <strong><em>Your Friends &amp; Neighbors</em></strong> on <strong>April 3</strong>.
          The show — a dark comedy-thriller that drew favorable comparisons to <em>Big Little
          Lies</em> in its first run — picks up the thread of Hamm's morally slippery
          protagonist navigating the social wreckage of affluent suburban life, alongside{' '}
          <strong>Amanda Peet</strong>.
        </p>
        <p>
          Season 2's positioning in the middle of the five-week window serves a strategic
          purpose: it bridges the opening prestige drama of <em>Imperfect Women</em> and the
          film event of <em>Outcome</em>, giving existing subscribers a reason to stay
          engaged and new subscribers a lower-stakes entry point into the slate before the
          bigger film and SXSW titles land.
        </p>

        {/* ------------------------------------------------------------------ */}
        {/* SECTION 6 — OUTCOME */}
        {/* ------------------------------------------------------------------ */}
        <h2>Outcome: Keanu Reeves, Cameron Diaz, and Jonah Hill's Return to Film on April 10</h2>
        <p>
          One of the most buzzed-about entries in the slate is <strong><em>Outcome</em></strong>
          — a dark comedy film arriving on <strong>April 10</strong> that is directed by and{' '}
          stars <strong>Jonah Hill</strong>, with <strong>Keanu Reeves</strong> playing a
          Hollywood star being extorted with a mysterious video, and{' '}
          <strong>Cameron Diaz</strong> rounding out the principal cast.
        </p>
        <p>
          <em>Outcome</em> marks a significant star-powered film addition to{' '}
          <a href="/apple">Apple TV+</a>'s spring calendar and represents Jonah Hill's most
          high-profile directorial outing to date. The film's premise — an A-list actor
          caught in an escalating blackmail scenario — lands in a media environment acutely
          attuned to the intersection of celebrity, power, and digital vulnerability, giving
          it natural cultural traction beyond its pure entertainment value.
        </p>

        <HighlightBox color="purple">
          <ul>
            <li><strong>Outcome:</strong> Dark comedy film — April 10 — directed by Jonah Hill</li>
            <li><strong>Keanu Reeves</strong> plays a Hollywood star entangled in an extortion plot</li>
            <li><strong>Cameron Diaz</strong> co-stars in one of her most high-profile roles in years</li>
            <li>Marks Hill's most ambitious directorial project to date</li>
          </ul>
        </HighlightBox>

        {/* ------------------------------------------------------------------ */}
        {/* SECTION 7 — STRATEGIC CONTEXT */}
        {/* ------------------------------------------------------------------ */}
        <h2>Why This Slate Matters: Apple TV+ Is Competing for Cultural Anchoring, Not Just Subscribers</h2>
        <p>
          The concentration of five major titles across five weeks is not accidental.{' '}
          <a href="/apple">Apple TV+</a> has spent the last three years building subscriber
          scale through individual breakout hits — but the spring 2026 slate represents
          a more sophisticated strategic posture: creating a sustained window of must-watch
          content dense enough that canceling the subscription feels like a real loss, not
          just a deferred option.
        </p>
        <p>
          The platform's competitive context has shifted sharply in 2026. The{' '}
          <a href="/entertainment/news/paramount-skydance-acquires-warner-bros-discovery-110-billion">
            Paramount Skydance acquisition of Warner Bros. Discovery
          </a>{' '}
          for $110 billion has created a consolidated streaming giant combining Max, HBO,
          Paramount+, and legacy Warner Bros. IP — a catalog behemoth that Apple cannot
          match on library depth. Apple's answer is differentiation through originals quality
          and concentrated scheduling momentum, not volume.
        </p>
        <p>
          The SXSW breakout status of <em>Margo's Got Money Troubles</em> is particularly
          valuable in this context. Festival prestige before a streaming debut creates a
          media cycle that paid advertising cannot replicate — it generates editorial
          coverage, social media conversation, and critic credibility simultaneously.{' '}
          <a href="/apple">Apple</a> has now engineered that advantage into the closing
          position of its most important seasonal window.
        </p>

        <HighlightBox color="orange">
          <ul>
            <li>
              Apple TV+ has over <strong>100 million global subscribers</strong> across
              its 2.2 billion active device ecosystem — per{' '}
              <a href="/apple/news/f1-apple-tv-espn-domenicali">F1 CEO Domenicali's recent assessment</a>
            </li>
            <li>The spring window sits ahead of summer renewal cycles — a critical period for subscriber retention</li>
            <li>Five distinct genres across five titles minimizes audience overlap and maximizes household reach</li>
            <li>
              Apple's shift to <a href="/apple/news/apple-video-podcasts-youtube">
                video and podcast distribution on YouTube
              </a>{' '}
              creates additional promotional surface area for these launches
            </li>
          </ul>
        </HighlightBox>

        {/* ------------------------------------------------------------------ */}
        {/* CLOSING */}
        {/* ------------------------------------------------------------------ */}
        <h2>What to Watch For: Five Weeks That Could Define Apple TV+'s 2026</h2>
        <p>
          The spring 2026 Apple TV+ slate is the platform's most credible bid yet for
          the kind of sustained cultural moment that HBO built through decades of prestige
          programming — compressed into five weeks. The combination of a genuine SXSW
          critical breakout, a franchise heavyweight returning at the height of its powers,
          a star-loaded dark comedy film, and a prestige thriller anchored by some of
          television's most decorated performers gives <a href="/apple">Apple TV+</a> an
          unusually strong hand.
        </p>
        <p>
          The variables that will determine whether this converts into lasting subscriber
          momentum are familiar: audience retention beyond the premiere window, critical
          consensus once full seasons are reviewed, and whether <em>Margo's Got Money
          Troubles</em> — the SXSW favorite — lives up to its early billing when the
          full series is available on April 15. If it does, <a href="/apple">Apple</a>{' '}
          will close the spring window with one of the most talked-about new shows on any
          platform in 2026.
        </p>
        <p>
          ObjectWire will publish individual reviews and coverage for each title as
          they premiere. Follow our <a href="/entertainment">entertainment desk</a> for
          ongoing coverage.
        </p>

        <TagsSection tags={articleTags} />
      </NewsArticle>
    </SEOWrapper>
  );
}
