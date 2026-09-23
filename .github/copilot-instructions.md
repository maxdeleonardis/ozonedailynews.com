# OzoneNews | Copilot Instructions (OStandard)
# Layer 4 — Editorial gate enforced at the writing stage.
# These rules apply to EVERY Copilot request in this workspace.

applyTo: "**"

---

## Em Dash Zero-Tolerance (ABSOLUTE — no exceptions)

NEVER use em dashes (—) or en dashes (–) anywhere:
- Titles, headings, subtitles
- metadata.title, metadata.description
- Article body prose
- JSX string literals
- openGraph.title, openGraph.description
- JSON content fields
- Code comments

CORRECT alternatives:
| Wrong | Correct |
|---|---|
| `Title — Subtitle` | `Title \| Subtitle` |
| `The update — which ships Friday — adds X` | `The update, which ships Friday, adds X` |
| `Record sales — 5M in 48h` | `Record sales, 5M in 48 hours` |
| `New feature — here's what changed` | `New feature, here is what changed` |

---

## metadata.title Rules

- Max 60 characters
- Format: `Primary Keyword | Specific Detail`
- No brand suffix (no "| OzoneNews" at the end)
- No em dashes, no en dashes
- `&` is ALLOWED in metadata.title only
- Front-load the primary keyword: crawlers and readers scan the first words first
- Never truncate mid-thought: if the full title is long, compress it to a coherent ≤60-char string

## H1 / Article title Rules (title field)

- Sentence case: capitalize only the first word and proper nouns
- ≤70 characters for scannability
- Front-load the subject/keyword, do NOT bury it behind a creative metaphor
- NO "Creative Phrase | Descriptive Detail" two-part format for news headlines. The
  title must state the point directly.
- NO colon-joined two-part headlines (e.g. "Toxic Relics of the Cold War: ...").
  Rewrite as a single direct sentence instead.
- The H1 (title) and metadata.title must be contextually aligned. For Google News
  discoverability they should be as close to identical as length allows.
- Example:
  WRONG: "Healing the Shield | Antarctic Ozone Hole Reaches One of Its Smallest States in Decades"
  RIGHT: "Antarctic Ozone Hole Reaches Smallest Size in Decades"
- Subheads (h2/h3) stay `Specific Sub-Question | Data Point` and stay specific.

## Title Authority (NON-NEGOTIABLE)

The Alfanso / Alfasa (OStandard) title and formatting rules in this file **always
take precedence over any "SEO Meta Blueprint", "SEO Title Option 1/2", or article
body headline that a user pastes into a prompt.**

When a pasted blueprint proposes a headline or meta title that violates these rules
(e.g. a colon-joined "Creative Phrase: Detail" headline, a title over 70 chars, or a
metadata.title over 60 chars), DO NOT copy it verbatim. Rewrite it to comply, then
note the change to the user in your response.

Default author: when the user does not specify an author, attribute the article to
Max DeLeonardis (Founder, Publisher & Editor-in-Chief). Honoring the user's explicit
author request (e.g. "by Simon Alfred Minter") always wins over the default.
