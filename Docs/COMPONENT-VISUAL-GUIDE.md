# DynamicNewsArticle Component Visual Guide

## Component Structure Overview

```
┌─────────────────────────────────────────────────────────────┐
│ ARTICLE HEADER                                              │
├─────────────────────────────────────────────────────────────┤
│ Breadcrumbs: Home / News / Category                        │
│ Category Badges: [INVESTIGATION] [BREAKING] • 8 min read   │
│                                                             │
│ TITLE: Large, Bold, Eye-Catching                           │
│                                                             │
│ Subtitle: Engaging description that summarizes content     │
│                                                             │
│ [Author Avatar] Author Name        Published: Date         │
│                 Department         Updated: Date           │
└─────────────────────────────────────────────────────────────┘

┌────────────────────────────┬────────────────────────────────┐
│ MAIN CONTENT (8 cols)      │ SIDEBAR (4 cols)               │
├────────────────────────────┼────────────────────────────────┤
│                            │ ┌──────────────────────────┐   │
│ ┌────────────────────────┐ │ │ RELATED COVERAGE         │   │
│ │ CASE OVERVIEW          │ │ │ ───────────────────────  │   │
│ │ • Key fact 1           │ │ │ [CATEGORY]               │   │
│ │ • Key fact 2           │ │ │ Article Title            │   │
│ │ • Key fact 3           │ │ │                          │   │
│ └────────────────────────┘ │ │ [CATEGORY]               │   │
│                            │ │ Article Title            │   │
│ Article body text...       │ └──────────────────────────┘   │
│                            │                                │
│ ## Section Heading         │ ┌──────────────────────────┐   │
│                            │ │ CASE TIMELINE            │   │
│ More article text...       │ │ ───────────────────────  │   │
│                            │ │ ● 2020 - Event happened  │   │
│ ┌────────────────────────┐ │ │ ● 2021 - Another event   │   │
│ │ HOW IT WORKED          │ │ │ ● 2022 - Major milestone │   │
│ │ ①  Step 1              │ │ └──────────────────────────┘   │
│ │    Description         │ │                                │
│ │ ②  Step 2              │ │ ┌──────────────────────────┐   │
│ │    Description         │ │ │ KEY DOCUMENTS            │   │
│ │ ③  Step 3              │ │ │ ───────────────────────  │   │
│ │    Description         │ │ │ 📄 Document 1            │   │
│ └────────────────────────┘ │ │ 📄 Document 2            │   │
│                            │ └──────────────────────────┘   │
│ ## Key Figures             │                                │
│                            │ ┌──────────────────────────┐   │
│ ┌─────────┬─────────┐      │ │ NEWSLETTER               │   │
│ │ Person 1│ Person 2│      │ │ ───────────────────────  │   │
│ │ Role    │ Role    │      │ │ Get updates...           │   │
│ │ Details │ Details │      │ │ [Email Input]            │   │
│ └─────────┴─────────┘      │ │ [SUBSCRIBE BUTTON]       │   │
│                            │ └──────────────────────────┘   │
│ ┌────────────────────────┐ │                                │
│ │ BY THE NUMBERS 📊      │ │                                │
│ │ ──────────────────────│ │                                │
│ │  100K   $50M   70+    │ │                                │
│ │  Users  Revenue Count │ │                                │
│ └────────────────────────┘ │                                │
│                            │                                │
│ > "This is a quote from   │                                │
│   someone important."     │                                │
│   — Author, Title         │                                │
│                            │                                │
│ [Video Embed Component]   │                                │
│                            │                                │
│ [Image Component]         │                                │
│                            │                                │
│ ┌────────────────────────┐ │                                │
│ │ SOURCES & REFERENCES   │ │                                │
│ │ ──────────────────────│ │                                │
│ │ [1] Source Name — Desc │ │                                │
│ │ [2] Source Name — Desc │ │                                │
│ └────────────────────────┘ │                                │
└────────────────────────────┴────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ ARTICLE FOOTER                                              │
├─────────────────────────────────────────────────────────────┤
│ Originally Published: Date      [Report a correction]       │
│ Last Updated: Date              [Editorial Standards]       │
└─────────────────────────────────────────────────────────────┘
```

## Color Schemes

### Category Badge Colors

```
RED        [INVESTIGATION]  Breaking news, urgent, critical
BLUE       [TECHNOLOGY]     Tech, business, standard news  
GREEN      [HEALTH]         Environment, health, positive
PURPLE     [POLITICS]       Politics, opinion, analysis
ORANGE     [CULTURE]        Entertainment, lifestyle
YELLOW     [UPDATE]         Warnings, developing stories
BLACK      [SPECIAL]        Major announcements, reports
```

### Sub-Component Color Variations

#### CaseOverview
```
┌─────────────────────────┐
│ RED THEME               │
│ Red border-left         │
│ Light red background    │
│ Red bullet points       │
└─────────────────────────┘

┌─────────────────────────┐
│ BLUE THEME              │
│ Blue border-left        │
│ Light blue background   │
│ Blue bullet points      │
└─────────────────────────┘
```

## Responsive Behavior

### Desktop (lg+)
```
┌─────────────────────────────────────┐
│ Header (full width)                 │
├───────────────────┬─────────────────┤
│ Main Content      │ Sidebar         │
│ (8/12 cols)       │ (4/12 cols)     │
│                   │                 │
└───────────────────┴─────────────────┘
│ Footer (full width)                 │
└─────────────────────────────────────┘
```

### Mobile (<lg)
```
┌─────────────────────┐
│ Header              │
├─────────────────────┤
│ Main Content        │
│ (full width)        │
│                     │
├─────────────────────┤
│ Sidebar             │
│ (full width)        │
│ (stacked below)     │
├─────────────────────┤
│ Footer              │
└─────────────────────┘
```

## Component Hierarchy

```
DynamicNewsArticle (Main Container)
│
├── Header
│   ├── Breadcrumbs
│   ├── Category Badges
│   ├── Title
│   ├── Subtitle
│   └── Author & Date Info
│
├── Content Grid
│   ├── Main Content (Left)
│   │   ├── Article Body (children)
│   │   │   ├── CaseOverview
│   │   │   ├── ProcessDiagram
│   │   │   ├── KeyFigures
│   │   │   ├── StatisticsBox
│   │   │   ├── ArticleQuote
│   │   │   ├── VideoEmbed
│   │   │   └── ArticleImage
│   │   └── Sources & References
│   │
│   └── Sidebar (Right)
│       ├── Related Coverage
│       ├── Timeline
│       ├── Key Documents
│       └── Newsletter Signup
│
└── Footer
    ├── Publication Dates
    └── Editorial Links
```

## Typography Scale

```
H1 (Title)          text-3xl md:text-5xl font-black
H2 (Section)        text-2xl font-bold
H3 (Sub-section)    text-xl font-bold
Body                text-base (16px)
Large Body          text-lg
Small Text          text-sm
Extra Small         text-xs

Lead Paragraph      text-lg with drop cap (first-letter:text-5xl)
```

## Spacing System

```
Component Padding:   p-6 (24px)
Section Margin:      my-8 (32px top/bottom)
Header Padding:      py-8 md:py-12
Container Max:       container class (responsive)
Grid Gap:            gap-12 (48px)
```

## Border Styles

```
Header Bottom:       border-b-2 border-black
Section Divider:     border-b border-gray-200
Card Border:         border border-gray-200
Emphasis Border:     border-2 border-black
Left Accent:         border-l-4 border-{color}
```

## Interactive Elements

```
Links:              text-blue-600 hover:underline
Buttons:            bg-red-600 hover:bg-red-700
Category Badges:    Static (no hover)
Timeline Dots:      Decorative (no interaction)
```

## Accessibility Features

```
Semantic HTML:
  <article>         Main container
  <header>          Article header
  <nav>             Breadcrumbs
  <aside>           Sidebar
  <footer>          Article footer
  <time>            Dates
  <blockquote>      Quotes

ARIA Labels:
  breadcrumb        Navigation
  email             Input field

Alt Text:
  All images        Required
  Video titles      Required
```

## Example Layout Combinations

### Investigation Article
```
✓ Breadcrumbs
✓ RED category badge (INVESTIGATION)
✓ CaseOverview (red)
✓ ProcessDiagram (red)
✓ KeyFigures
✓ StatisticsBox
✓ Timeline sidebar
✓ Documents sidebar
✓ Related articles
✓ Sources citations
```

### Breaking News
```
✓ Breadcrumbs
✓ RED category badge (BREAKING)
✓ CaseOverview (red)
✓ ArticleQuote
✓ Related articles
✓ Newsletter signup
✓ Simple layout, fast to read
```

### Feature Story
```
✓ Breadcrumbs  
✓ PURPLE category badge (FEATURE)
✓ Rich media (VideoEmbed, ArticleImage)
✓ Multiple ArticleQuotes
✓ StatisticsBox
✓ Related articles
✓ Author bio emphasis
```

### Technical Analysis
```
✓ Breadcrumbs
✓ BLUE category badge (ANALYSIS)
✓ CaseOverview (blue)
✓ ProcessDiagram (blue)
✓ StatisticsBox (blue)
✓ Documents/sources
✓ Related technical articles
```

## Print Styles

Currently not implemented. Future enhancement:
- Hide sidebar on print
- Adjust margins for paper
- Include URLs for links
- Black and white optimization

## Performance Notes

- Images should be optimized (WebP, proper sizing)
- Videos are lazy-loaded via iframe
- No heavy JavaScript dependencies
- Server-side rendered (Next.js)
- Minimal client-side hydration

---

For implementation details, see:
- `/Docs/DYNAMIC-NEWS-ARTICLE-COMPONENT.md`
- `/components/DynamicNewsArticle.tsx`
