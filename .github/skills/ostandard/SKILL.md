---
name: ostandard
description: "Use when: writing, editing, or reviewing any ObjectWire article component or Supabase article record. Covers SEO, formatting standards, heading conventions, and content structure required for all ObjectWire editorial content. Invoke with: OStandard, article standard, writing standard, article component, Supabase article."
---

# OStandard — ObjectWire Article & SEO Writing Standard

Every article component written for ObjectWire, and every article record synced to Supabase, **must** conform to this standard without exception.

---

## 1. Title Formatting

- **Use `|` to separate the article title from the site name** — never `:` or `—`
  - ✅ `Trump Backs Musk on DOGE Cuts | ObjectWire`
  - ❌ `Trump Backs Musk on DOGE Cuts: ObjectWire`
  - ❌ `Trump Backs Musk on DOGE Cuts — ObjectWire`

- **Never use a dash `—` or `–` in any heading (H1–H6), title, or meta title**
  - Replace em dashes and en dashes with a comma, `|`, or rewrite the clause
  - ✅ `Google Fires 200 Engineers | Layoffs Hit Search Division`
  - ❌ `Google Fires 200 Engineers — Search Division Hit`

- Titles should be **sentence-case** for readability but can be **title-case** for breaking/featured pieces
- Keep titles under **65 characters** for full Google SERP display

---

## 2. Meta Description

- 140–160 characters
- Must contain the **primary keyword** in the first half of the sentence
- Written as a direct, factual summary — no clickbait phrasing
- No trailing punctuation

---

## 3. Headings Structure

Every article **must** have multiple niche, specific, and relevant subheadings. Generic headings like "Background" or "Overview" are not acceptable.

### Rules
- **H1** — Article title only. One per article.
- **H2** — Major section breaks. Must be specific and keyword-rich.
- **H3** — Sub-points within an H2 section.
- **Never use `—` or `–` in any heading**. Use `|` or restructure.
- Headings must describe what the section actually contains — a reader skimming only the headings should understand the article's full narrative arc.

### Examples of Good vs Bad Subheadings
| ❌ Avoid | ✅ Use Instead |
|---|---|
| Background | How the Policy Was Drafted in 2024 |
| Overview | What DOGE's Budget Cuts Actually Target |
| Details | The $14B in Spending Musk Has Flagged for Removal |
| Reaction | Senate Democrats Push Back on Musk's Federal Role |
| What Happens Next | Why the Courts May Block Implementation by June |

### Minimum Subheading Count by Length
| Article Length | Minimum H2s | Minimum H3s |
|---|---|---|
| Short (< 600 words) | 2 | 1 |
| Standard (600–1200 words) | 4 | 2 |
| Long-form (1200–2500 words) | 6 | 4 |
| Feature / Investigation (2500+) | 8 | 6 |

---

## 4. SEO — Keyword Usage

- **Primary keyword** must appear in: H1, first 100 words of body, at least one H2, meta description
- **Secondary keywords** (2–4) should appear naturally in subheadings and body
- No keyword stuffing — each keyword should read as natural editorial language
- Use **niche, specific long-tail variants** in H3s (e.g. "how DOGE layoffs affect federal contractors in Virginia")

---

## 5. Content Niche & Depth

- Every article must have **specific, verifiable facts** — numbers, names, dates, and sources
- Niche subheadings must match the article's actual content — no filler sections
- **Each H2 section must be self-contained** — a reader jumping to that section should understand it without reading the rest
- Include at least one of the following in every long-form piece:
  - A data table or comparison block
  - A quoted statement or attributed claim
  - A timeline or numbered list of key events

---

## 6. Supabase Field Standards

When writing or syncing an article record to Supabase, populate fields as follows:

| Field | Requirement |
|---|---|
| `title` | Plain title only — no site suffix (e.g. `"Trump Backs Musk on DOGE Cuts"`) |
| `meta_title` | Full title with site suffix using `|` (e.g. `"Trump Backs Musk on DOGE Cuts | ObjectWire"`) |
| `excerpt` / `description` | 140–160 chars, primary keyword in first half |
| `category` | Lowercase slug — `technology`, `finance`, `entertainment`, `news`, `gaming`, `sports` |
| `author_name` | Full name as it appears on the byline |
| `published_at` | ISO 8601 UTC timestamp |
| `breaking` | `true` only if the story is a live developing situation |
| `featured` | `true` only for editor-selected lead stories |
| `tags` | Array of 3–8 lowercase, hyphenated strings |
| `slug` | Lowercase, hyphenated, no stop words unless critical for SEO |

---

## 7. Slug Conventions

- All lowercase, hyphen-separated
- Remove stop words (`the`, `a`, `an`, `of`, `in`, `on`, `at`) unless removing them breaks SEO intent
- Max 6–8 words
- Must reflect the primary keyword
- ✅ `trump-doge-federal-layoffs-2026`
- ❌ `the-story-of-how-trump-backed-elon-musk-on-doge-cuts-in-2026`

---

## 8. Component Checklist (before shipping any article page)

- [ ] H1 title uses `|` not `—` if site name is appended
- [ ] No `—` or `–` in any heading
- [ ] Minimum subheading count met for article length
- [ ] All subheadings are niche and specific — no generic section names
- [ ] Primary keyword in H1, first paragraph, and at least one H2
- [ ] Meta description is 140–160 characters
- [ ] Supabase `title`, `meta_title`, `excerpt`, `slug` all populated correctly
- [ ] `category` is a valid lowercase slug
- [ ] `tags` array has 3–8 entries
- [ ] `published_at` is set
