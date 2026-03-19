import type { Metadata } from "next";
import {
  NewsArticle,
  HighlightBox,
  Timeline,
  RelatedStories,
} from "@/components/NewsArticle";
import { NewsArticleSchema } from "@/components/NewsArticleSchema";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sidemen Inside Season 3: Netflix Spring 2026 Release Confirmed — Full Cast & Details | ObjectWire",
  description:
    "Inside UK Season 3 is confirmed for a spring 2026 Netflix premiere. Full 12-person cast revealed including Eddie Hall, AB, Saffron Barker, Chloe Ferry and more. Everything you need to know.",
  keywords: [
    "Inside Season 3 Netflix",
    "Sidemen Inside UK Season 3",
    "Inside Netflix 2026",
    "Inside Season 3 cast",
    "Inside Season 3 release date",
    "Sidemen Netflix show",
    "Eddie Hall Inside Sidemen",
    "AB Sidemen Netflix",
    "Sidemen Productions Season 3",
    "Inside UK cast 2026",
  ],
  alternates: {
    canonical: "https://www.objectwire.org/youtube/sidemen/inside-uk/season3",
  },
  openGraph: {
    title: "Sidemen Inside Season 3: Netflix Spring 2026 — Full Cast Revealed",
    description:
      "The Sidemen have completed filming on Inside Season 3. Netflix spring premiere confirmed, full 12-person cast announced on February 22, 2026.",
    type: "article",
    url: "https://www.objectwire.org/youtube/sidemen/inside-uk/season3",
    siteName: "ObjectWire",
    section: "Entertainment",
    images: [
      {
        url: "/sidemen/inside_season_3_sidemen_uk.PNG",
        width: 1200,
        height: 630,
        alt: "Inside Season 3 Sidemen UK Netflix",
      },
    ],
  },
};

export default function InsideSeason3Page() {
  return (
    <>
      <NewsArticleSchema
        title="Sidemen Inside Season 3: Netflix Spring 2026 Release Confirmed with Full Cast and Production Details"
        description="Inside UK Season 3 is confirmed for a spring 2026 Netflix premiere. Full 12-person cast revealed including Eddie Hall, AB, Saffron Barker and more."
        publishedTime="2026-02-23T09:00:00Z"
        modifiedTime="2026-02-23T09:00:00Z"
        author="ObjectWire Editorial Team"
        articleUrl="https://www.objectwire.org/youtube/sidemen/inside-uk/season3"
        section="Entertainment"
        keywords={[
          "Inside Season 3",
          "Sidemen Netflix",
          "Inside UK 2026",
          "Netflix spring 2026",
        ]}
      />

      <NewsArticle
        title="Sidemen Inside Season 3: Netflix Spring 2026 Release Confirmed with Full Cast and Production Details"
        subtitle="The Sidemen have wrapped filming on Season 3 — Netflix confirms spring premiere window with a 12-person cast drawn from reality TV, streaming, and sports"
        category="Entertainment"
        categoryColor="red"
        breaking={true}
        publishDate="February 23, 2026"
        readTime="6 min read"
        author={{
          name: "ObjectWire Editorial",
          role: "Entertainment Desk",
        }}
        heroImage={{
          src: "/sidemen/inside_season_3_sidemen_uk.PNG",
          alt: "Inside Season 3 Sidemen UK Netflix — official promotional image",
          caption:
            "Inside Season 3 official promotional artwork — Netflix, spring 2026",
        }}
        tags={[
          "Sidemen",
          "Netflix",
          "Inside",
          "Season3",
          "EddieHall",
          "AB",
          "SaffronBarker",
          "ChloeFerrry",
          "SidemenProductions",
          "Reality TV",
        ]}
      >
        {/* Lede */}
        <p className="text-xl leading-relaxed">
          The{" "}
          <Link
            href="/youtube/sidemen"
            className="text-purple-600 font-semibold hover:underline"
          >
            Sidemen
          </Link>{" "}
          have completed production on <strong>Inside UK Season 3</strong>, with Netflix
          confirming an exclusive <strong>spring 2026 premiere</strong> for the reality
          competition series. Filming wrapped in late 2025 following the rapid production
          cycle established in prior seasons. Multiple reports, including fan compilations
          and social media posts from official channels, point to{" "}
          <strong>March 23, 2026</strong> as the most frequently cited release date.
        </p>

        <p>
          Season 3 features 12 contestants living together for seven days in a house,
          competing in challenges that directly reduce or preserve a shared{" "}
          <strong>£1 million prize fund</strong>. The format retains core mechanics from
          Seasons 1 and 2, including temptation rooms, tuck shop spending, voting
          eliminations, and a final split-or-steal decision.
        </p>

        {/* Official Trailer */}
        <h2>Official Trailer</h2>
        <div className="my-6 rounded-xl overflow-hidden shadow-lg aspect-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/T4z1Hmmv4pA"
            title="Inside Season 3 Official Trailer — Sidemen Netflix"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        {/* Official Announcement — Instagram */}
        <h2>Official Cast Announcement</h2>
        <p>
          The full cast was officially unveiled by the Sidemen on{" "}
          <strong>February 22, 2026</strong>. See the original post below:
        </p>
        <div className="my-6 rounded-xl overflow-hidden border border-gray-200 shadow-lg">
          <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white px-4 py-3 flex items-center gap-3">
            <span className="text-xl">📸</span>
            <span className="font-bold">Instagram</span>
            <span className="text-white/70">@Sidemen</span>
          </div>
          <div className="p-4 bg-gray-50">
            <p className="text-gray-700 mb-3">
              Official cast reveal for <strong>Inside Season 3</strong> — 12
              contestants, £1 million on the line. View the full announcement:
            </p>
            <a
              href="https://www.instagram.com/p/DVEpfBTDWX5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-1 text-purple-600 hover:underline font-medium text-sm"
            >
              View cast announcement on Instagram →
            </a>
          </div>
        </div>

        {/* Official Confirmation */}
        <h2>Official Confirmation and Release Timeline</h2>
        <p>
          Netflix greenlit Season 3 following the strong performance of Season 2, which
          reached the UK Netflix Top 10 within days of its March 2025 debut. The spring
          2026 window aligns with the March release pattern seen in Season 2. No exact day
          has been published by Netflix, but <strong>March 23, 2026</strong> appears
          consistently in fan tracking and secondary reports.
        </p>

        <Timeline
          events={[
            {
              time: "March 2025",
              title: "Season 2 premieres on Netflix",
              description:
                "Enters UK Netflix Top 10 within days, driving Netflix to greenlight Season 3.",
            },
            {
              time: "Mid–Late 2025",
              title: "Season 3 production and filming",
              description:
                "Sidemen Productions films all episodes; cast kept under NDA through late 2025.",
            },
            {
              time: "February 22, 2026",
              title: "Full cast officially revealed",
              description:
                "All 12 contestants announced via official Sidemen social channels.",
            },
            {
              time: "March 23, 2026 (projected)",
              title: "Season 3 premieres on Netflix",
              description:
                "Most frequently cited date across fan tracking and secondary reporting. Not yet confirmed by Netflix.",
            },
          ]}
        />

        {/* Cast Section */}
        <h2>Confirmed Cast for Season 3</h2>
        <p>
          The full 12-person lineup was officially revealed in{" "}
          <strong>Sidemen posts on February 22, 2026</strong>:
        </p>

        <div className="my-6 divide-y divide-gray-100 border border-gray-200 rounded-xl overflow-hidden">
          {[
            {
              name: "Eddie Hall",
              bio: "Former 2017 World's Strongest Man, holder of the 500 kg deadlift world record.",
            },
            {
              name: "Marlon Lundgren Garcia",
              bio: "Streamer and content creator.",
            },
            {
              name: "AB (Alfie Buttle)",
              bio: (
                <>
                  YouTube personality and frequent Sidemen collaborator. See{" "}
                  <Link
                    href="/youtube/sidemen/alfie-buttle"
                    className="text-purple-600 hover:underline"
                  >
                    AB's full profile
                  </Link>
                  .
                </>
              ),
            },
            {
              name: "Saffron Barker",
              bio: "Lifestyle influencer and former Strictly Come Dancing contestant.",
            },
            {
              name: "Chloe Ferry",
              bio: "Geordie Shore reality star.",
            },
            {
              name: "Ben Azelart",
              bio: "YouTube prank and challenge creator.",
            },
            {
              name: "Lydia Violet",
              bio: "Gaming and cosplay content creator.",
            },
            {
              name: "Alhan Gençay",
              bio: "Presenter and entrepreneur.",
            },
            {
              name: "Chian Reynolds",
              bio: "Digital personality and journalist.",
            },
            {
              name: "Indiyah Polack",
              bio: "Love Island alum.",
            },
            {
              name: "Expressions Oozing",
              bio: "Football pundit and online creator.",
            },
            {
              name: "Anna Malygon",
              bio: "TikTok creator and model.",
            },
          ].map((contestant, i) => (
            <div key={i} className="flex items-start gap-4 px-5 py-4 bg-white">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-black text-sm flex-shrink-0">
                {i + 1}
              </div>
              <div>
                <p className="font-bold text-gray-900">{contestant.name}</p>
                <p className="text-sm text-gray-600">{contestant.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <p>
          The cast draws from reality television, streaming, strength sports, and influencer
          spaces, mirroring the diverse recruitment seen in Seasons 1 and 2.
        </p>

        {/* Format */}
        <h2>Core Format and Prize Mechanics</h2>
        <p>Contestants compete over seven days with the following mechanics:</p>

        <ul>
          <li>
            <strong>Prize fund starts at £1 million</strong> — deductions occur through
            spending or challenge failures.
          </li>
          <li>
            <strong>Tuck Shop</strong> — items purchased reduce the total prize pot.
          </li>
          <li>
            <strong>Temptation Room</strong> — solo access for 30 minutes; giving in to
            temptation lowers the fund.
          </li>
          <li>
            <strong>Team and individual challenges</strong> — success preserves or
            increases value; failure deducts.
          </li>
          <li>
            <strong>Voting and eliminations</strong> — periodic removals narrow the field.
          </li>
          <li>
            <strong>Final two-player dilemma</strong> — remaining contestants decide to
            split or steal the remaining amount.
          </li>
        </ul>

        <HighlightBox type="key-point" color="purple">
          These elements create strategic tension between cooperation and self-interest —
          the core drama engine that drove Seasons 1 and 2 to millions of views per episode.
        </HighlightBox>

        {/* Sidemen Productions */}
        <h2>Production Under Sidemen Productions</h2>
        <p>
          Season 3 marks the first major project from{" "}
          <strong>Sidemen Productions</strong>, the newly formed company established by the{" "}
          <Link
            href="/youtube/sidemen"
            className="text-purple-600 hover:underline"
          >
            Sidemen
          </Link>{" "}
          (
          <Link
            href="/youtube/sidemen/zerkaa"
            className="text-purple-600 hover:underline"
          >
            Joshua Bradley
          </Link>
          ,{" "}
          <Link
            href="/youtube/sidemen/tbjzl"
            className="text-purple-600 hover:underline"
          >
            Tobi Brown
          </Link>
          ,{" "}
          <Link
            href="/youtube/sidemen/miniminter"
            className="text-purple-600 hover:underline"
          >
            Simon Minter
          </Link>
          ,{" "}
          <Link
            href="/youtube/sidemen/ksi"
            className="text-purple-600 hover:underline"
          >
            Olajide Olatunji
          </Link>
          ,{" "}
          <Link
            href="/youtube/sidemen/behzinga"
            className="text-purple-600 hover:underline"
          >
            Ethan Payne
          </Link>
          ,{" "}
          <Link
            href="/youtube/sidemen/vikkstar"
            className="text-purple-600 hover:underline"
          >
            Vikram Barn
          </Link>
          ,{" "}
          <Link
            href="/youtube/sidemen/w2s"
            className="text-purple-600 hover:underline"
          >
            Harry Lewis
          </Link>
          ). Adam Cohen serves as Head of Sidemen Productions, with a new London
          headquarters under development. Production was self-funded by the Sidemen,
          maintaining their focus on UK-centric content while positioning for broader
          international collaborations.
        </p>

        {/* Viewer Metrics */}
        <h2>Viewer Metrics from Previous Seasons</h2>
        <p>
          Season 2 achieved placement in the UK Netflix Top 10 shortly after its March
          2025 release, building on Season 1's audience retention metrics. The series
          averages millions of views per episode across platforms, driven by the Sidemen's
          combined YouTube subscriber base of over{" "}
          <strong>140 million subscribers</strong> across channels.
        </p>
        <p>
          The format's mix of social dynamics, high-stakes decisions, and challenge variety
          has driven repeat viewership in the UK and internationally. The series sits
          alongside{" "}
          <Link
            href="/youtube/sidemen/inside-uk"
            className="text-purple-600 hover:underline"
          >
            the Sidemen's Netflix documentary
          </Link>{" "}
          as part of their expanding presence on mainstream streaming platforms.
        </p>

        <HighlightBox type="quote" color="purple">
          "When a £1 million pot shrinks faster than a Sideman's patience in the
          temptation room, the only thing guaranteed is that someone walks away richer —
          and everyone else walks away wiser."
        </HighlightBox>

        {/* External reference */}
        <p className="text-sm text-gray-500 mt-4">
          Further release date speculation and additional cast analysis:{" "}
          <a
            href="https://www.businessupturn.com/entertainment/ott/inside-season-3-release-date-speculation-cast-news-and-plot-details-everything-we-know-so-far/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 hover:underline"
          >
            Business Upturn — Inside Season 3: Release Date, Cast & Plot Details
          </a>
        </p>

        {/* Related Stories */}
        <RelatedStories
          stories={[
            {
              href: "/youtube/sidemen/inside-uk",
              title: "Inside — The Sidemen's Netflix Documentary Series",
              category: "Entertainment",
              date: "February 2024",
            },
            {
              href: "/youtube/sidemen",
              title: "The Sidemen — Complete Group Profile",
              category: "YouTube",
              date: "February 2026",
            },
            {
              href: "/youtube/sidemen/alfie-buttle",
              title: "AB (Alfie Buttle) — YouTube Profile & Young LA Partnership",
              category: "YouTube",
              date: "February 2026",
            },
            {
              href: "/youtube/sidemen/ksi",
              title: "KSI — Boxing, Music & the PRIME Empire",
              category: "YouTube",
              date: "February 2026",
            },
            {
              href: "/netflix",
              title: "Netflix — UK & Global Content Coverage",
              category: "streaming",
              date: "February 2026",
            },
          ]}
        />
      </NewsArticle>
    </>
  );
}
