import os

new_content = r"""import type { Metadata } from "next";
import {
  ObjectDesign,
  ObjSection,
  ObjHighlight,
  ObjQuote,
  ObjCallout,
  ObjTimeline,
  ObjStatGrid,
} from "@/components/ObjectDesign";
import { DataTable } from "@/components/ArticlePage";
import { NewsArticleSchema } from "@/components/NewsArticleSchema";

export const metadata: Metadata = {
  title: "Grand Theft Auto VI — Release Date, Price, & Everything We Know | ObjectWire",
  description:
    "Complete guide to Grand Theft Auto VI: confirmed November 19, 2026 release date, global pricing speculation including India ₹5,999–₹6,999 and US $89.99–$124.19 retailer leaks, platforms, protagonists Lucia & Jason, gameplay, and Rockstar's development timeline.",
  keywords: [
    "GTA 6",
    "Grand Theft Auto VI",
    "GTA 6 release date",
    "GTA 6 price",
    "GTA 6 India price",
    "GTA 6 UK price",
    "GTA 6 November 2026",
    "Rockstar Games GTA 6",
    "GTA 6 Vice City",
    "GTA 6 Lucia",
    "GTA 6 PC",
    "GTA 6 PS5",
    "GTA 6 Xbox Series X",
    "GTA 6 gameplay",
    "Take-Two Interactive",
  ],
  alternates: {
    canonical: "https://www.objectwire.org/video-games/gta-6",
  },
  openGraph: {
    title: "Grand Theft Auto VI — Release Date, Price & Full Guide",
    description:
      "November 19, 2026 confirmed. Global price speculation reaches £89.99 in the UK and ₹6,999 in India. Everything known about GTA 6.",
    type: "article",
    url: "https://www.objectwire.org/video-games/gta-6",
    siteName: "ObjectWire",
    section: "Video Games",
  },
  twitter: {
    card: "summary_large_image",
    title: "GTA 6 — Release Date, Price & Full Guide | ObjectWire",
    description:
      "Confirmed: November 19, 2026. UK retailer posts £89.99 listing. India brace for ₹5,999–₹6,999. Complete GTA VI encyclopedia.",
  },
};

export default function GTA6Page() {
  return (
    <>
      <NewsArticleSchema
        title="Grand Theft Auto VI — Release Date, Price Controversy & Complete Guide"
        description="Complete guide to GTA 6: confirmed November 19, 2026 release, global pricing speculation, protagonists, Vice City setting, gameplay mechanics, and Rockstar's development timeline."
        publishedTime="2026-02-24T10:00:00Z"
        modifiedTime="2026-02-24T10:00:00Z"
        author="ObjectWire Gaming Desk"
        articleUrl="https://www.objectwire.org/video-games/gta-6"
        section="Video Games"
        keywords={["GTA 6", "Grand Theft Auto VI", "Rockstar Games", "GTA 6 price", "GTA 6 release date", "Vice City"]}
      />

      <ObjectDesign
        title="Grand Theft Auto VI"
        subtitle="Rockstar's most anticipated release heads to a modern Vice City — November 19, 2026."
        category="Video Games"
        categoryColor="orange"
        publishDate="February 24, 2026"
        lastUpdated="February 24, 2026"
        trending
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/video-games", label: "Video Games" },
          { href: "/video-games/gta-6", label: "GTA VI" },
        ]}
        infoBox={{
          title: "Grand Theft Auto VI",
          accentColor: "orange",
          items: [
            { label: "Developer", value: "Rockstar Games" },
            { label: "Publisher", value: "Take-Two Interactive" },
            { label: "Release Date", value: "November 19, 2026" },
            { label: "Platforms", value: "PS5 · Xbox Series X/S · PC (TBA)" },
            { label: "Series", value: "Grand Theft Auto" },
            { label: "Setting", value: "Leonida (Vice City), Florida" },
            { label: "Protagonists", value: "Lucia (primary) · Jason (secondary)" },
            { label: "Mode", value: "Single-player · GTA Online" },
            { label: "Engine", value: "RAGE (Rockstar Advanced Game Engine)" },
            { label: "US Price (speculated)", value: "$89.99 – $124.19" },
            { label: "UK Price (speculated)", value: "£60.99 – £89.99" },
            { label: "India Price (speculated)", value: "₹5,999 – ₹12,000+" },
            { label: "Age Rating", value: "ESRB M (Mature 17+) — expected" },
          ],
        }}
        tableOfContents={[
          { id: "overview", label: "Overview" },
          { id: "release", label: "Release Date & Platforms" },
          { id: "pricing", label: "Pricing Controversy" },
          { id: "global-pricing", label: "Global Price Breakdown", level: 2 },
          { id: "setting", label: "Setting — Leonida & Vice City" },
          { id: "protagonists", label: "Protagonists" },
          { id: "gameplay", label: "Gameplay" },
          { id: "development", label: "Development History" },
          { id: "trailer", label: "Trailers & Marketing" },
          { id: "reception", label: "Anticipation & Reception" },
          { id: "references", label: "References" },
        ]}
        tags={["GTA6", "RockstarGames", "VideoGames", "GrandTheftAuto", "ViceCity", "PS5", "Xbox", "Gaming2026"]}
        relatedLinks={[
          { href: "/video-games", label: "Video Games Hub", description: "ObjectWire's full video games coverage", category: "Hub" },
          { href: "/tech", label: "Tech Coverage", description: "Gaming hardware, GPUs, and tech news", category: "Technology" },
          { href: "/finance", label: "Finance", description: "Take-Two Interactive stock and gaming industry analysis", category: "Finance" },
          { href: "/entertainment", label: "Entertainment", description: "Film, TV, and pop culture coverage", category: "Entertainment" },
        ]}
        externalLinks={[
          { href: "https://www.rockstargames.com/VI", label: "Grand Theft Auto VI — Official Rockstar Games Site" },
          { href: "https://www.youtube.com/watch?v=QdBZExpgErs", label: "GTA VI Official Trailer 1 (YouTube)" },
          { href: "https://www.insider-gaming.com/", label: "Insider Gaming — Original pricing leak report" },
          { href: "https://beebom.com/", label: "Beebom — India pricing analysis" },
          { href: "https://en.wikipedia.org/wiki/Grand_Theft_Auto_VI", label: "Grand Theft Auto VI — Wikipedia" },
        ]}
      >

        {/* ── KEY STATS ──────────────────────────────────────────────── */}
        <ObjStatGrid
          accentColor="orange"
          columns={4}
          stats={[
            { value: "Nov 19", label: "Release Date", description: "2026 — PS5 & Xbox Series X/S" },
            { value: "$89.99+", label: "Speculated US Price", description: "Up to $124.19 per leaked listings" },
            { value: "200M+", label: "Trailer 1 Views", description: "Fastest gaming trailer in YouTube history" },
            { value: "~$2B", label: "Est. Budget", description: "Most expensive game ever produced" },
          ]}
        />

        {/* ── OVERVIEW ───────────────────────────────────────────────── */}
        <ObjSection id="overview" title="Overview" accentColor="orange">
          <p>
            <strong>Grand Theft Auto VI</strong> (stylised as <em>GTA VI</em>) is an upcoming
            open-world action-adventure game developed by{" "}
            <a href="https://www.rockstargames.com/" target="_blank" rel="noopener noreferrer">
              Rockstar Games
            </a>{" "}
            and published by{" "}
            <a href="https://www.take2games.com/" target="_blank" rel="noopener noreferrer">
              Take-Two Interactive
            </a>
            . Announced via a landmark first trailer in December 2023, the game is the eighth main
            entry and direct successor to the all-time best-selling{" "}
            <em>Grand Theft Auto V</em> (2013). It is scheduled for release on{" "}
            <strong>November 19, 2026</strong>, for PlayStation 5 and Xbox Series X/S — with a PC
            release date yet to be confirmed.
          </p>

          <p>
            The game introduces <strong>Lucia</strong> as the franchise&apos;s first playable female
            protagonist in the mainline series, accompanied by a male co-protagonist named{" "}
            <strong>Jason</strong>. Set in a fictionalised, vastly expanded version of Miami and
            surrounding Florida, the game world — called <em>Leonida</em> — is the largest and most
            detailed environment Rockstar has ever constructed.
          </p>

          <p>
            As of February 2026, GTA VI is generating one of the largest pre-release conversations
            in gaming history. The primary topic dominating discourse is pricing: a wave of retailer
            listings and leaks has placed the base edition between <strong>$89.99 and $124.19</strong>{" "}
            in the United States, <strong>£60.99 and £89.99</strong> in the United Kingdom, and as
            high as <strong>₹12,000</strong> in India — none of which have been confirmed.
          </p>

          <ObjCallout type="warning" title="Pricing Not Yet Confirmed">
            All price figures cited in this article are sourced from unverified retailer listings
            and leaks. Rockstar Games and Take-Two Interactive have not announced official pricing
            as of February 24, 2026.
          </ObjCallout>
        </ObjSection>

        {/* ── RELEASE DATE & PLATFORMS ───────────────────────────────── */}
        <ObjSection id="release" title="Release Date & Platforms" accentColor="orange">
          <p>
            Rockstar Games confirmed the release date of <strong>November 19, 2026</strong> for
            PlayStation 5 and Xbox Series X/S in the second official trailer published in May 2025.
            The date makes GTA VI a major holiday season title, positioned to dominate the
            2026 Q4 gaming market.
          </p>

          <p>
            A PC version has not been given a release date. Rockstar historically releases PC
            editions of GTA games 12–24 months after console launches; if that pattern holds, a PC
            release could arrive in late 2027 or early 2028. The game will be distributed digitally
            via the{" "}
            <a href="https://www.rockstargames.com/launcher" target="_blank" rel="noopener noreferrer">
              Rockstar Games Launcher
            </a>{" "}
            and console storefronts, alongside physical editions.
          </p>

          <DataTable
            headers={["Platform", "Release Date", "Distribution", "Notes"]}
            rows={[
              ["PlayStation 5", "November 19, 2026", "PlayStation Store + Physical", "Native PS5 — no PS4 version"],
              ["Xbox Series X/S", "November 19, 2026", "Xbox / Microsoft Store + Physical", "Xbox One not supported"],
              ["PC (Windows)", "TBA (2027–2028 est.)", "Rockstar Games Launcher / Steam", "No date confirmed"],
            ]}
          />

          <ObjCallout type="note" title="Current-Gen Exclusive">
            GTA VI is a current-gen exclusive. PlayStation 4 and Xbox One versions have been ruled
            out entirely, reflecting the game&apos;s technical demands and Rockstar&apos;s focus on
            next-generation hardware capabilities.
          </ObjCallout>
        </ObjSection>

        {/* ── PRICING CONTROVERSY ────────────────────────────────────── */}
        <ObjSection id="pricing" title="Pricing Controversy" accentColor="orange">
          <p>
            As GTA VI&apos;s November 2026 release inches closer, a wave of unverified retailer
            listings has ignited a global conversation about the future of video game pricing — and
            whether the industry is on the cusp of a permanent step-up from the $70/£70 standard
            established in 2020.
          </p>

          <p>
            The latest round of speculation began when digital storefront{" "}
            <strong>Loaded</strong> (formerly CDKeys) briefly listed the Xbox Series X/S version of
            GTA 6 at <strong>£89.99</strong> in the UK, with a US listing showing{" "}
            <strong>$124.19</strong>, as first reported by{" "}
            <a href="https://www.insider-gaming.com/" target="_blank" rel="noopener noreferrer">
              Insider Gaming
            </a>
            . A separate PC listing via the Rockstar Games Launcher appeared at{" "}
            <strong>£60.99</strong>.{" "}
            <a href="https://beebom.com/" target="_blank" rel="noopener noreferrer">
              Beebom
            </a>{" "}
            reported that the US listing initially showed $89.99 before being lowered — indicating
            either an internal correction or dynamic placeholder pricing.
          </p>

          <ObjQuote source="Insider Gaming" sourceRole="February 2026">
            Loaded (formerly CDKeys) briefly listed the Xbox Series X/S version of GTA 6 at £89.99
            for the UK, with a US listing showing $124.19.
          </ObjQuote>

          <p>
            Industry observers have widely dismissed these figures as placeholder prices. Retailers
            routinely post estimated figures ahead of official publisher announcements. The wide
            range between Loaded&apos;s $89.99 and $124.19 figures — and their rapid fluctuation —
            is consistent with placeholder behaviour rather than confirmed retail pricing.
          </p>

          <ObjHighlight type="key-point" color="orange">
            Take-Two CEO <strong>Strauss Zelnick</strong> has described GTA VI as &ldquo;the most
            captivating entertainment experience ever created&rdquo; and signalled pricing above the
            current $69.99 standard — though no official price has been announced.
          </ObjHighlight>

          <ObjCallout type="insight" title="Analyst Consensus">
            Most industry analysts project a US base price of <strong>$79.99</strong> for standard
            editions, with deluxe and collector&apos;s editions potentially reaching $99.99 or above.
            The $124.19 Loaded listing is considered an outlier likely reflecting a premium bundle.
          </ObjCallout>
        </ObjSection>

        {/* ── GLOBAL PRICING ─────────────────────────────────────────── */}
        <ObjSection id="global-pricing" title="Global Price Speculation — By Region" level={3} accentColor="orange">
          <p>
            The pricing debate is especially acute in markets where currency weakness amplifies any
            dollar-denominated increase. The following table summarises publicly reported
            speculative prices alongside the current $69.99 equivalent for context.
          </p>

          <DataTable
            headers={["Region", "Currency", "Current Gen Standard", "Speculated GTA 6 Base", "Speculated Premium", "Source"]}
            rows={[
              ["United States", "USD", "$69.99", "$79.99 – $89.99", "$99.99 – $124.19", "Loaded / Insider Gaming"],
              ["United Kingdom", "GBP", "£69.99", "£60.99 (PC) – £79.99", "£89.99", "Loaded UK listing"],
              ["European Union", "EUR", "€69.99", "€79.99 – €89.99", "€99.99+", "Analyst estimates"],
              ["India", "INR", "₹3,999 – ₹4,999", "₹5,999 – ₹6,999", "₹12,000+", "Retailer speculation / Beebom"],
              ["Australia", "AUD", "A$109.99", "A$119.99 – A$129.99", "A$149.99+", "Analyst estimates"],
              ["Canada", "CAD", "C$89.99", "C$99.99 – C$109.99", "C$129.99+", "Analyst estimates"],
            ]}
          />

          <ObjQuote source="Beebom" sourceRole="February 2026">
            A wave of unverified pricing leaks and retailer listings has Indian gamers bracing for
            what could be the most expensive mainstream game launch in the country&apos;s history.
          </ObjQuote>

          <ObjHighlight type="stat" color="orange">
            Premium editions above ₹12,000 would make GTA VI the most expensive mainstream game
            launch in India&apos;s history if confirmed — the speculated ₹5,999–₹6,999 base price
            alone represents a 20–75% increase over current AAA standards in the country.
          </ObjHighlight>
        </ObjSection>

        {/* ── SETTING ────────────────────────────────────────────────── */}
        <ObjSection id="setting" title="Setting — Leonida & Vice City" accentColor="orange">
          <p>
            GTA VI is set in <strong>Leonida</strong>, a fictional US state inspired by Florida.
            The map encompasses <strong>Vice City</strong> — a reimagined, modern version of the
            Miami-inspired city first introduced in{" "}
            <a href="https://en.wikipedia.org/wiki/Grand_Theft_Auto:_Vice_City" target="_blank" rel="noopener noreferrer">
              Grand Theft Auto: Vice City
            </a>{" "}
            (2002) — alongside surrounding regions including Everglades-inspired swamplands,
            small towns, and coastal areas.
          </p>

          <p>
            According to Rockstar, Leonida is the largest open world the studio has ever built.
            The map includes:
          </p>

          <ul>
            <li>
              <strong>Vice City metro area</strong> — dense urban environment, neon-lit beachfront,
              luxury real estate, and sprawling suburbs
            </li>
            <li>
              <strong>Port Leonida</strong> — industrial docklands, shipping operations, and working
              port facilities
            </li>
            <li>
              <strong>Rural Leonida</strong> — Everglades-style swamplands, trailer parks, small
              towns, and highways
            </li>
            <li>
              <strong>Keys-inspired islands</strong> — coastal archipelago accessible by boat and
              aircraft
            </li>
          </ul>

          <p>
            The setting is designed to explore contemporary American excess, social media culture,
            influencer culture, and economic inequality — themes signalled in the first trailer,
            which featured viral video aesthetics and commentary on content creation.
          </p>
        </ObjSection>

        {/* ── PROTAGONISTS ───────────────────────────────────────────── */}
        <ObjSection id="protagonists" title="Protagonists" accentColor="orange">
          <p>
            GTA VI marks a historic first for the mainline series: <strong>Lucia</strong> is the
            franchise&apos;s first female protagonist. Appearing prominently in the debut trailer
            wearing prison clothing alongside a male counterpart, Lucia is the primary playable
            character. Her co-protagonist, <strong>Jason</strong>, appears alongside her in what
            the trailer frames as a Bonnie-and-Clyde dynamic.
          </p>

          <DataTable
            headers={["Character", "Role", "Status", "Details"]}
            rows={[
              ["Lucia", "Primary protagonist", "Confirmed", "First female protagonist in mainline GTA; Hispanic heritage implied"],
              ["Jason", "Secondary protagonist", "Confirmed", "Male co-lead; Bonnie-and-Clyde dynamic with Lucia"],
            ]}
          />

          <ObjHighlight type="key-point" color="orange">
            Lucia is the first woman to lead a mainline GTA game in the series&apos; 28-year history.
            This dual-protagonist structure echoes GTA V&apos;s three-character system but with a
            tighter, story-driven focus.
          </ObjHighlight>
        </ObjSection>

        {/* ── GAMEPLAY ───────────────────────────────────────────────── */}
        <ObjSection id="gameplay" title="Gameplay" accentColor="orange">
          <p>
            Based on the two official trailers and corroborating details from Rockstar&apos;s 2022
            development leaks, GTA VI is expected to feature:
          </p>

          <ul>
            <li>
              <strong>Open world</strong> — Freely explorable Leonida state with dynamic weather,
              traffic, and NPC routines
            </li>
            <li>
              <strong>Dual-protagonist switching</strong> — Seamless transitions between Lucia and
              Jason during gameplay and story missions
            </li>
            <li>
              <strong>Evolved combat</strong> — Refined shooting and cover mechanics building on
              Red Dead Redemption II&apos;s targeting system
            </li>
            <li>
              <strong>Heists and missions</strong> — Multi-stage criminal operations consistent with
              GTA series tradition
            </li>
            <li>
              <strong>Vehicle customisation</strong> — Cars, boats, and aircraft with expanded
              customisation options
            </li>
            <li>
              <strong>GTA Online successor</strong> — A new multiplayer experience expected to
              evolve the GTA Online model introduced with GTA V
            </li>
          </ul>

          <p>
            The 2022 Rockstar development leak — one of the largest in gaming history — revealed
            over 90 videos of early gameplay footage, confirming NPC robbery interactions, swimming
            animations with clothing physics, and crouch-walking combat.
          </p>

          <ObjCallout type="note" title="2022 Gameplay Leak">
            The 2022 gameplay leak content is considered credible by the gaming press and has been
            corroborated by subsequent leaked screenshots. Rockstar acknowledged the leak but
            stated that the footage did not represent the final product.
          </ObjCallout>
        </ObjSection>

        {/* ── DEVELOPMENT HISTORY ────────────────────────────────────── */}
        <ObjSection id="development" title="Development History" accentColor="orange">
          <p>
            GTA VI entered full production around 2018–2019, following the completion of{" "}
            <em>Red Dead Redemption II</em>. Development has spanned approximately 8 years
            in various forms — one of the longest development timelines in mainstream gaming history.
            Industry estimates place the combined development and marketing budget at over{" "}
            <strong>$2 billion</strong>.
          </p>

          <ObjTimeline
            accentColor="orange"
            events={[
              { time: "2013", title: "GTA V Released", description: "Development seeds for the sequel begin immediately after launch." },
              { time: "2018–2019", title: "GTA VI Enters Full Production", description: "Full development begins following the completion of Red Dead Redemption II." },
              { time: "September 2022", title: "Massive Development Leak", description: "90+ early gameplay videos released by hacker — the largest gaming leak in history. Rockstar confirms the breach." },
              { time: "December 5, 2023", title: "Official Trailer 1", description: "Confirms Vice City setting, Lucia as female protagonist, Florida world. Reaches 200M+ YouTube views." },
              { time: "May 2024", title: "Take-Two Release Window Confirmed", description: "Take-Two confirms fiscal year 2025 window during earnings call." },
              { time: "May 2025", title: "Official Trailer 2 — Date Confirmed", description: "November 19, 2026 console release date confirmed for PS5 and Xbox Series X/S." },
              { time: "February 2026", title: "Retailer Pricing Leaks", description: "Loaded / CDKeys lists GTA 6 at £89.99 (UK) and $124.19 (US). Global markets react." },
              { time: "November 19, 2026", title: "Console Launch", description: "Confirmed release for PlayStation 5 and Xbox Series X/S." },
            ]}
          />
        </ObjSection>

        {/* ── TRAILERS ───────────────────────────────────────────────── */}
        <ObjSection id="trailer" title="Trailers & Marketing" accentColor="orange">
          <p>
            Rockstar has released two official trailers for GTA VI to date:
          </p>

          <DataTable
            headers={["Trailer", "Release Date", "Views (YouTube)", "Key Reveals"]}
            rows={[
              ["Trailer 1", "December 5, 2023", "200M+ (fastest gaming trailer)", "Lucia protagonist, Vice City/Florida setting, social media themes"],
              ["Trailer 2", "May 2025", "TBA", "November 19, 2026 release date, Jason confirmed, extended world showcase"],
            ]}
          />

          <ObjHighlight type="stat" color="orange">
            The first trailer set a YouTube record for the fastest gaming video to reach 100 million
            views, surpassing the previous record held by Cyberpunk 2077. Within 24 hours it had
            accumulated over 90 million views.
          </ObjHighlight>
        </ObjSection>

        {/* ── RECEPTION ──────────────────────────────────────────────── */}
        <ObjSection id="reception" title="Anticipation & Critical Reception" accentColor="orange">
          <p>
            GTA VI is one of the most anticipated games in history. On Metacritic&apos;s pre-release
            &ldquo;Most Anticipated&rdquo; charts it has held the top position since the first
            trailer&apos;s release. Pre-order interest has been reported across all major platforms,
            with retailers and analysts expecting record-breaking day-one sales.
          </p>

          <p>
            However, the pricing controversy has added a note of tension. Gaming communities —
            particularly in price-sensitive markets including India, Brazil, and Southeast Asia —
            have expressed concern that a price tag above the current $69.99/£69.99 standard would
            represent an accessibility barrier at odds with the franchise&apos;s historically broad
            appeal.
          </p>

          <ObjQuote source="Analyst Consensus" sourceRole="Q4 2025">
            GTA VI will be the defining commercial event of 2026 in entertainment. The pricing
            question is secondary to the certainty that it will break every sales record when
            it launches.
          </ObjQuote>

          <p>
            Take-Two CEO Strauss Zelnick has framed the pricing debate in terms of value: the
            company believes the scope and quality of GTA VI&apos;s content justifies a price above
            the current industry baseline. The question of whether consumers agree will be answered
            at launch — and will likely set the pricing norm for AAA games for the following decade.
          </p>
        </ObjSection>

        {/* ── REFERENCES ─────────────────────────────────────────────── */}
        <ObjSection id="references" title="References" accentColor="orange">
          <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700">
            <li>
              Insider Gaming —{" "}
              <a href="https://www.insider-gaming.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Loaded / CDKeys lists GTA 6 at £89.99 and $124.19
              </a>
              , February 2026
            </li>
            <li>
              Beebom —{" "}
              <a href="https://beebom.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                GTA 6 pricing speculation for India reaches ₹6,999
              </a>
              , February 2026
            </li>
            <li>Rockstar Games — Official GTA VI Trailer 1, December 5, 2023</li>
            <li>Rockstar Games — Official GTA VI Trailer 2, May 2025 (November 19, 2026 release date confirmed)</li>
            <li>Take-Two Interactive — Earnings Call Q2 FY2026, Strauss Zelnick pricing comments</li>
          </ol>
        </ObjSection>

      </ObjectDesign>
    </>
  );
}
"""

path = r"c:\Users\Allied Gaming\Documents\GitHub\Object-wire26-\app\video-games\gta-6\page.tsx"
with open(path, "w", encoding="utf-8") as f:
    f.write(new_content)

print(f"Written {len(new_content)} chars to {path}")
print("First line:", new_content.splitlines()[0])
print("Last line:", new_content.splitlines()[-1])
