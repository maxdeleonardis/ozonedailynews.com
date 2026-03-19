import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox, TagsSection } from '@/components/NewsArticle';

const SLUG =
  '/entertainment/apple-tv/apple-tv-plus-outcome-trailer-keanu-reeves-jonah-hill-april-2026';
const FULL_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = 'https://www.objectwire.org/apple/apple-tv-outcome-trailer-2026.jpg';

export const metadata: Metadata = {
  title: 'Apple TV+ "Outcome" Trailer: Keanu Reeves & Jonah Hill in Hollywood Satire | ObjectWire',
  description:
    'Apple TV+ released the first full trailer for "Outcome" on March 16, 2026. Directed by Jonah Hill, the dark comedy-drama stars Keanu Reeves as fictional Hollywood icon Reef Hawk — a global premiere is set for April 10, 2026.',
  keywords: [
    'Outcome Apple TV+',
    'Outcome trailer 2026',
    'Keanu Reeves Outcome Apple TV',
    'Jonah Hill director Outcome',
    'Reef Hawk Hollywood satire',
    'Outcome April 10 2026',
    'Apple TV+ new movies 2026',
    'Cameron Diaz Outcome film',
    'Martin Scorsese acting role',
    'Outcome cast ensemble',
    'Apple TV spring 2026',
    'Jonah Hill Strong Baby Productions',
    'dark comedy film 2026',
    'celebrity apology tour movie',
  ],
  openGraph: {
    title: 'Apple TV+ Unveils "Outcome" Trailer: Keanu Reeves as Hollywood\'s Reef Hawk',
    description:
      'The first full trailer for Jonah Hill\'s "Outcome" is here. Keanu Reeves plays extorted movie star Reef Hawk on an apology tour to save his legacy. Global premiere April 10, 2026 on Apple TV+.',
    url: FULL_URL,
    type: 'article',
    images: [{ url: IMAGE_URL, alt: 'Keanu Reeves in Outcome Apple TV+ 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Keanu Reeves Is Reef Hawk in Apple TV+\'s "Outcome" — Trailer & April 10 Premiere Date',
    description:
      'Jonah Hill\'s dark comedy-drama "Outcome" drops its first full trailer. Keanu Reeves, Cameron Diaz, Martin Scorsese, and a stacked ensemble. Premieres April 10, 2026.',
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
  'Outcome',
  'Keanu Reeves',
  'Jonah Hill',
  'Cameron Diaz',
  'Matt Bomer',
  'Martin Scorsese',
  'Reef Hawk',
  'Apple Studios',
  'Dark Comedy',
  'Hollywood Satire',
  'Streaming 2026',
  'Entertainment',
  'Film',
];

export default function OutcomeTrailerAppleTVPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title={`Apple TV+ Unveils "Outcome" Trailer Featuring Reef Hawk's Dark Hollywood Reckoning`}
        description="Apple TV+ released the first full trailer for 'Outcome' on March 16, 2026. Directed by Jonah Hill and starring Keanu Reeves as blackmailed Hollywood icon Reef Hawk, the dark comedy-drama is set to premiere globally on April 10, 2026."
        author="ObjectWire Entertainment Desk"
        publishedTime="2026-03-18T00:00:00Z"
        modifiedTime="2026-03-18T00:00:00Z"
        articleUrl={FULL_URL}
        imageUrl={IMAGE_URL}
        section="Entertainment"
        keywords={[
          'Outcome Apple TV+',
          'Keanu Reeves',
          'Jonah Hill',
          'Reef Hawk',
          'Apple TV+ spring 2026',
          'dark comedy film',
          'Hollywood satire 2026',
        ]}
      />
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>
      <NewsArticle
        title={`Apple TV+ Unveils "Outcome" Trailer — Keanu Reeves Leads Reef Hawk's Dark Hollywood Reckoning`}
        subtitle={`Directed and co-written by Jonah Hill, the dark comedy-drama follows fictional A-lister Reef Hawk on a "spiritually cleansing" apology tour to uncover who is blackmailing him — and whether his redemption is real or just damage control. Global premiere: April 10, 2026.`}
        category="Entertainment"
        categoryColor="purple"
        topicTag="entertainment"
        publishDate="March 18, 2026"
        readTime="5 min read"
        author={{ name: 'ObjectWire Entertainment Desk', role: 'Entertainment Reporter' }}
        thumbnail={{ src: IMAGE_URL, alt: 'Keanu Reeves as Reef Hawk in Outcome Apple TV+ 2026' }}
        tags={articleTags}
        trending={true}
        slug={SLUG}
        url={FULL_URL}
      >
        {/* ------------------------------------------------------------------ */}
        {/* SECTION 1 — THE LEAD */}
        {/* ------------------------------------------------------------------ */}
        <h2>The Trailer Has Arrived — And It's Not What Hollywood Expected</h2>
        <p>
          <strong>CULVER CITY, CA</strong> — <a href="/apple">Apple TV+</a> officially
          released the first trailer for <strong><em>Outcome</em></strong> on{' '}
          <strong>Monday, March 16, 2026</strong>, confirming a global premiere date of{' '}
          <strong>April 10, 2026</strong>. Directed and co-written by{' '}
          <strong>Jonah Hill</strong>, the dark comedy-drama stars{' '}
          <strong>Keanu Reeves</strong> as a fictional Hollywood icon forced into an
          introspective "apology tour" to save his crumbling career.
        </p>
        <p>
          The trailer arrived after a high-profile social media teaser campaign and reveals
          a film that deliberately navigates the thin line between{' '}
          <strong>celebrity satire</strong> and a genuine character study on
          accountability — a combination that has rarely been attempted with this level of
          star power in the streaming era.
        </p>

        <HighlightBox color="purple">
          <p><strong>Key Release Details</strong></p>
          <ul>
            <li><strong>Title:</strong> <em>Outcome</em></li>
            <li><strong>Platform:</strong> Exclusively on <a href="/apple">Apple TV+</a></li>
            <li><strong>Global Premiere:</strong> Friday, April 10, 2026</li>
            <li><strong>Director / Co-writer:</strong> Jonah Hill (co-written with Ezra Woods)</li>
            <li><strong>Studio:</strong> Apple Studios &amp; Strong Baby Productions</li>
            <li><strong>Cinematography:</strong> Benoît Debie</li>
            <li><strong>Original Score:</strong> Jon Brion</li>
          </ul>
        </HighlightBox>

        {/* ------------------------------------------------------------------ */}
        {/* SECTION 2 — THE PLOT */}
        {/* ------------------------------------------------------------------ */}
        <h2>The Plot: Reef Hawk's "Soul-Searching" Journey Through His Own Wreckage</h2>
        <p>
          The film centers on <strong>Reef Hawk</strong> (Keanu Reeves), described in the
          trailer as <em>"America's favorite movie star"</em> — an actor who has been
          living in a self-imposed five-year sabbatical when his quiet life is shattered
          by blackmail.
        </p>
        <p>
          A mysterious video from Reef's past — implied in the trailer to be connected to
          a secret heroin addiction — surfaces in the hands of an unknown extortionist,
          threatening to permanently cancel his legacy. Under the guidance of his eccentric
          crisis lawyer <strong>Ira Slitz</strong> (Jonah Hill, appearing unrecognizable
          with a bald head and gray beard), Reef embarks on a <em>"spiritually cleansing"</em>{' '}
          journey: he will identify the blackmailer by methodically apologizing to every
          person he has ever wronged.
        </p>
        <p>
          The film's central dramatic tension hangs on an unresolved question: are Reef's
          apologies a <strong>genuine attempt at redemption</strong>, or merely a tactical
          move to protect his fame and neutralize the threat? The trailer refuses to answer
          cleanly — a deliberate choice that Hill and co-writer Ezra Woods appear to be
          using as the film's primary engine.
        </p>

        <HighlightBox color="blue">
          <p><strong>The Three-Act Setup (As Seen in the Trailer)</strong></p>
          <ul>
            <li>
              <strong>The Extortion:</strong> A mystery video tied to a hidden heroin
              addiction threatens to "cancel" Reef Hawk's legacy permanently
            </li>
            <li>
              <strong>The Strategy:</strong> Crisis lawyer Ira Slitz engineers an apology
              tour — find the blackmailer by making amends with everyone Reef has wronged
            </li>
            <li>
              <strong>The Question:</strong> Is the apology tour sincere transformation or
              calculated self-preservation? The film doesn't let the audience off the hook
            </li>
          </ul>
        </HighlightBox>

        {/* ------------------------------------------------------------------ */}
        {/* SECTION 3 — CAST */}
        {/* ------------------------------------------------------------------ */}
        <h2>A "Stacked" Ensemble: Hollywood Legends Meet Modern Comedy Staples</h2>
        <p>
          The trailer and official poster confirm one of the most eclectic casts assembled
          for a streaming film in recent memory — a deliberate blend of{' '}
          <strong>veteran Hollywood icons</strong> and <strong>modern comedy talent</strong>{' '}
          that underscores the film's satirical relationship with celebrity culture.
        </p>

        <HighlightBox color="blue">
          <p><strong>Confirmed Cast</strong></p>
          <ul>
            <li><strong>Keanu Reeves</strong> — Reef Hawk, the extorted movie star</li>
            <li>
              <strong>Jonah Hill</strong> — Ira Slitz, Reef's eccentric crisis lawyer
              (bald, gray-bearded, unrecognizable)
            </li>
            <li><strong>Cameron Diaz</strong> — Kyle, Reef's lifelong best friend</li>
            <li><strong>Matt Bomer</strong> — Xander, Reef's other close confidant</li>
            <li>
              <strong>Martin Scorsese</strong> — Richie "Red" Rodriguez (a rare acting
              role for the legendary director)
            </li>
            <li><strong>Susan Lucci</strong> — Dinah Hawk, Reef's mother</li>
            <li><strong>Laverne Cox</strong> — Virginia Allen Green</li>
            <li><strong>David Spade</strong> — Buddy</li>
            <li><strong>Roy Wood Jr.</strong> — Reverend Leondrus Carter</li>
            <li><strong>Kaia Gerber</strong> — Featured ensemble role</li>
          </ul>
        </HighlightBox>

        <p>
          The casting of <strong>Martin Scorsese</strong> in an acting role is one of the
          trailer's most eye-catching details. As Richie "Red" Rodriguez, Scorsese appears
          to be one of the figures on Reef's apology list — a meta-textual casting choice
          given Scorsese's own well-documented and occasionally contentious relationship
          with Hollywood's blockbuster machinery. The moment reads as both a wink to
          cinephiles and a signal that{' '}
          <em>Outcome</em> is operating with genuine insider knowledge of the industry it
          is satirizing.
        </p>
        <p>
          <strong>Cameron Diaz</strong>'s return to a high-profile streaming project
          continues a pattern of selective post-retirement appearances, and her casting as
          Reef's best friend Kyle positions her as a potential moral anchor — or
          complicating variable — in the apology tour narrative. <strong>Matt Bomer</strong>{' '}
          as Xander rounds out Reef's inner circle.
        </p>

        {/* ------------------------------------------------------------------ */}
        {/* SECTION 4 — DIRECTORIAL VISION */}
        {/* ------------------------------------------------------------------ */}
        <h2>The "Meta" Vision: Jonah Hill's Third Major Directorial Effort</h2>
        <p>
          <em>Outcome</em> is Jonah Hill's third major directorial outing, following the
          acclaimed <em>Mid90s</em> (2018) and the introspective documentary{' '}
          <em>Stutz</em> (2022 on Netflix). Both previous films explored identity, shame,
          and the machinery of self-image — themes that <em>Outcome</em> appears to extend
          into the explicitly <strong>Hollywood context</strong>.
        </p>
        <p>
          Critics who attended the <strong>2026 Apple TV Press Day</strong> noted that
          Hill — who co-wrote the script with <strong>Ezra Woods</strong> — appears to be
          channeling personal experience with fame's cost into Reef Hawk. The character
          functions as a fictional surrogate through which Hill interrogates what it means
          to be beloved, exposed, and asked to perform sincerity in public.
        </p>
        <p>
          The film's technical collaborators reinforce its tonal ambitions:{' '}
          <strong>Benoît Debie</strong> (known for his work on <em>Irreversible</em>,{' '}
          <em>Enter the Void</em>, and the <em>Spring Breakers</em> cinematography that
          defined a visual aesthetic for a generation) brings a visually distinct grammar
          to the project. <strong>Jon Brion</strong>'s original score — whose fingerprints
          on films like <em>Punch-Drunk Love</em> and <em>Magnolia</em> signal emotional
          depth over irony — suggests the film intends to earn its comedy rather than
          coast on it.
        </p>

        <HighlightBox color="green">
          <p><strong>Creative Team</strong></p>
          <ul>
            <li>
              <strong>Director / Co-writer:</strong> Jonah Hill (his third feature — after
              <em> Mid90s</em> and <em>Stutz</em>)
            </li>
            <li><strong>Co-writer:</strong> Ezra Woods</li>
            <li>
              <strong>Cinematographer:</strong> Benoît Debie (<em>Irreversible</em>,{' '}
              <em>Spring Breakers</em>)
            </li>
            <li>
              <strong>Original Score:</strong> Jon Brion (<em>Magnolia</em>,{' '}
              <em>Eternal Sunshine of the Spotless Mind</em>)
            </li>
            <li>
              <strong>Production:</strong> Apple Studios &amp; Strong Baby Productions
            </li>
          </ul>
        </HighlightBox>

        {/* ------------------------------------------------------------------ */}
        {/* SECTION 5 — CONTEXT & STAKES */}
        {/* ------------------------------------------------------------------ */}
        <h2>Why "Outcome" Arrives at the Right Cultural Moment</h2>
        <p>
          The film's premise — a celebrity racing to outrun a cancellation-by-exposure
          while performing authentic accountability — lands in a media environment that
          has spent the last decade constructing and deconstructing the public apology
          as a cultural genre. <em>Outcome</em> is positioned to function as both
          entertainment and a kind of{' '}
          <strong>institutional mirror</strong> for how Hollywood processes moral failure.
        </p>
        <p>
          Its April 10 placement in{' '}
          <a href="/entertainment/apple-tv/spring-2026-premiere-schedule-imperfect-women-for-all-mankind-outcome-margos-got-money-troubles">
            Apple TV+'s five-week spring blitz
          </a>{' '}
          gives it significant runway heading into the summer cultural conversation window.
          Apple has structured its spring slate such that <em>Outcome</em> arrives as the
          penultimate event — capping a month of prestige drama and dark comedy with a{' '}
          <strong>film-event premiere</strong> before the SXSW breakout{' '}
          <em>Margo's Got Money Troubles</em> closes the run on April 15.
        </p>
        <p>
          Industry observers noted that the trailer's "stacked ensemble" strategy is also
          a subscription-acquisition tool: with{' '}
          <strong>Keanu Reeves, Cameron Diaz, Martin Scorsese, and Jonah Hill</strong> all
          attached to a single film on a single platform, the marketing reach extends
          across multiple distinct audience segments simultaneously.
        </p>

        <HighlightBox color="purple">
          <p>
            <em>
              "In Outcome, Jonah Hill is digging into something personal while wrapping it
              in an offbeat Hollywood story. It's Keanu as a version of himself we've never
              seen — one with serious amends to make."
            </em>
          </p>
          <p>— Industry Sentiment, 2026 Apple TV Press Day</p>
        </HighlightBox>

        {/* ------------------------------------------------------------------ */}
        {/* TAGS */}
        {/* ------------------------------------------------------------------ */}
        <TagsSection tags={articleTags} />
      </NewsArticle>
    </SEOWrapper>
  );
}
