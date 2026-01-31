# DynamicNewsArticle Component Documentation

## Overview

The `DynamicNewsArticle` component is a comprehensive, reusable template for creating SEO-optimized investigative journalism articles on ObjectWire. It was built by analyzing the structure of the [Minnesota Feeding Our Future fraud article](https://www.objectwire.org/minnesota-feeding-our-future-fraud) and extracting all its best practices into a reusable component system.

## Features

- ✅ **Fully Reusable** - Use for any article type (investigations, news, case studies)
- ✅ **SEO Optimized** - Proper semantic HTML, meta tags, and structured data
- ✅ **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- ✅ **Sidebar Widgets** - Timeline, related articles, documents, newsletter signup
- ✅ **Sub-Components** - Specialized components for case overviews, statistics, quotes, etc.
- ✅ **Customizable** - Multiple color schemes and optional features
- ✅ **Accessible** - Proper ARIA labels and semantic markup

## Installation

The component is located at:
```
components/DynamicNewsArticle.tsx
```

## Basic Usage

### 1. Import the Component

```tsx
import { DynamicNewsArticle } from '@/components/DynamicNewsArticle';
```

### 2. Basic Example

```tsx
<DynamicNewsArticle
  categories={[
    { label: 'INVESTIGATION', color: 'red' }
  ]}
  title="Your Article Title"
  subtitle="Your article subtitle"
  author={{
    name: 'Reporter Name',
    department: 'Editorial Team'
  }}
  publishDate="January 30, 2026"
>
  <p>Your article content goes here...</p>
</DynamicNewsArticle>
```

## Component Props

### Main Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `categories` | `CategoryBadge[]` | Yes | Category badges (e.g., INVESTIGATION, BREAKING NEWS) |
| `title` | `string` | Yes | Article headline |
| `author` | `ArticleAuthor` | Yes | Author information |
| `publishDate` | `string` | Yes | Publication date (display format) |
| `children` | `ReactNode` | Yes | Article content |
| `subtitle` | `string` | No | Article subtitle/description |
| `readTime` | `string` | No | Reading time (e.g., "8 min read") |
| `updatedDate` | `string` | No | Last updated date |
| `breadcrumbs` | `Breadcrumb[]` | No | Breadcrumb navigation |
| `relatedArticles` | `RelatedArticle[]` | No | Related content sidebar |
| `timeline` | `TimelineEvent[]` | No | Timeline sidebar |
| `documents` | `DocumentLink[]` | No | Document links sidebar |
| `sources` | `SourceReference[]` | No | Source citations footer |
| `showNewsletter` | `boolean` | No | Show newsletter signup (default: true) |
| `newsletterTitle` | `string` | No | Newsletter section title |
| `newsletterDescription` | `string` | No | Newsletter section description |
| `showCorrections` | `boolean` | No | Show corrections link (default: true) |
| `showEditorialStandards` | `boolean` | No | Show editorial standards link (default: true) |

### Type Definitions

```typescript
interface CategoryBadge {
  label: string;
  color?: "red" | "blue" | "green" | "purple" | "orange" | "yellow" | "black";
}

interface ArticleAuthor {
  name: string;
  department?: string;
  avatar?: string;
  initials?: string; // Auto-generated from name if not provided
}

interface Breadcrumb {
  href: string;
  label: string;
}

interface RelatedArticle {
  href: string;
  category: string;
  categoryColor?: string; // CSS class like "text-red-600"
  title: string;
}

interface TimelineEvent {
  date: string;
  description: string;
  highlight?: boolean; // Makes the dot red instead of gray
}

interface DocumentLink {
  href: string;
  label: string;
  icon?: string; // Emoji or icon (default: "📄")
}

interface SourceReference {
  number: number;
  url: string;
  title: string;
  description: string;
}
```

## Sub-Components

The component system includes specialized sub-components for article content:

### 1. CaseOverview

Highlighted box with bullet points for key facts.

```tsx
import { CaseOverview } from '@/components/DynamicNewsArticle';

<CaseOverview
  title="CASE OVERVIEW"
  color="red"
  items={[
    { label: '$250 million', value: 'stolen from federal programs' },
    { label: '70+ individuals', value: 'federally indicted' },
  ]}
/>
```

**Props:**
- `title` (string, optional) - Box title (default: "CASE OVERVIEW")
- `color` (string, optional) - Color theme: red, blue, yellow, black, green, purple, orange
- `items` (array, required) - Array of `{ label: string, value: string }`

### 2. ProcessDiagram

Numbered steps showing a process or structure.

```tsx
import { ProcessDiagram } from '@/components/DynamicNewsArticle';

<ProcessDiagram
  title="HOW IT WORKED"
  color="red"
  steps={[
    {
      title: 'Step 1',
      description: 'Description of first step'
    },
    {
      title: 'Step 2',
      description: 'Description of second step'
    },
  ]}
/>
```

**Props:**
- `title` (string, required) - Diagram title
- `color` (string, optional) - Color for numbered circles
- `steps` (array, required) - Array of `{ title: string, description: string }`

### 3. KeyFigures

Grid layout for displaying key people.

```tsx
import { KeyFigures } from '@/components/DynamicNewsArticle';

<KeyFigures
  figures={[
    {
      name: 'John Doe',
      role: 'CEO',
      description: 'Led the organization from 2015-2022',
      status: 'Indicted' // Optional
    },
  ]}
/>
```

**Props:**
- `figures` (array, required) - Array of person objects with name, role, description, and optional status

### 4. StatisticsBox

Eye-catching statistics display.

```tsx
import { StatisticsBox } from '@/components/DynamicNewsArticle';

<StatisticsBox
  title="BY THE NUMBERS"
  color="red"
  stats={[
    { value: '$250M+', label: 'Alleged Fraud' },
    { value: '70+', label: 'Indicted' },
    { value: '200+', label: 'Fake Sites' },
  ]}
/>
```

**Props:**
- `title` (string, optional) - Box title (default: "BY THE NUMBERS")
- `color` (string, optional) - Color theme
- `stats` (array, required) - Array of `{ value: string, label: string }`

### 5. ArticleQuote

Styled blockquote with attribution.

```tsx
import { ArticleQuote } from '@/components/DynamicNewsArticle';

<ArticleQuote
  quote="This is the quote text"
  author="John Doe"
  title="CEO, Company Name"
/>
```

**Props:**
- `quote` (string, required) - Quote text
- `author` (string, optional) - Person being quoted
- `title` (string, optional) - Title/affiliation of person

### 6. VideoEmbed

Responsive video embed for YouTube or Vimeo.

```tsx
import { VideoEmbed } from '@/components/DynamicNewsArticle';

<VideoEmbed
  videoId="dQw4w9WgXcQ"
  title="Video Title"
  caption="Video description or context"
  provider="youtube"
/>
```

**Props:**
- `videoId` (string, required) - YouTube or Vimeo video ID
- `title` (string, required) - Video title for accessibility
- `caption` (string, optional) - Caption below video
- `provider` (string, optional) - "youtube" or "vimeo" (default: "youtube")

### 7. ArticleImage

Image with caption and credit.

```tsx
import { ArticleImage } from '@/components/DynamicNewsArticle';

<ArticleImage
  src="/path/to/image.jpg"
  alt="Description of image"
  caption="Image caption"
  credit="Photo credit"
/>
```

**Props:**
- `src` (string, required) - Image URL
- `alt` (string, required) - Alt text for accessibility
- `caption` (string, optional) - Image caption
- `credit` (string, optional) - Photo credit

## Complete Example

See the full implementation example at:
```
app/example-investigation/page.tsx
```

Or check out the real-world usage in:
```
app/minnesota-feeding-our-future-fraud/page.tsx
```

## Best Practices

### 1. Always Include Breadcrumbs
Breadcrumbs improve SEO and user navigation.

```tsx
breadcrumbs={[
  { href: '/', label: 'Home' },
  { href: '/news', label: 'News' },
  { href: '/investigations', label: 'Investigations' },
]}
```

### 2. Use Appropriate Category Colors

- **Red**: Breaking news, urgent investigations, critical alerts
- **Blue**: Technology, business, standard investigations
- **Green**: Environment, health, positive news
- **Purple**: Politics, government, policy
- **Orange**: Entertainment, culture, lifestyle
- **Yellow**: Warnings, caution, developing stories
- **Black**: Special reports, major announcements

### 3. Fill the Sidebar

The sidebar widgets significantly improve user engagement:

```tsx
relatedArticles={[
  {
    href: '/related-article',
    category: 'INVESTIGATION',
    categoryColor: 'text-red-600',
    title: 'Related Article Title',
  },
]}
timeline={[
  { date: '2026-01', description: 'Event happened', highlight: true },
]}
documents={[
  { href: '/doc.pdf', label: 'Official Report', icon: '📄' },
]}
```

### 4. Include Source Citations

Always cite your sources at the end:

```tsx
sources={[
  {
    number: 1,
    url: 'https://example.com',
    title: 'Source Name',
    description: 'Brief description of source',
  },
]}
```

### 5. Use Sub-Components Strategically

Break up long text with visual components:
- Use `CaseOverview` at the start for quick facts
- Use `ProcessDiagram` to explain complex processes
- Use `StatisticsBox` for impactful numbers
- Use `ArticleQuote` to highlight important statements
- Use `KeyFigures` for person profiles

### 6. Proper Date Format

For SEO, use proper datetime format in metadata:
```tsx
publishedTime="2026-01-30T10:00:00Z"
```

But use readable format in the component:
```tsx
publishDate="January 30, 2026"
```

## SEO Optimization

The component works seamlessly with Next.js metadata and structured data:

```tsx
import type { Metadata } from 'next';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';

export const metadata: Metadata = {
  title: 'Article Title | ObjectWire',
  description: 'Article description',
  keywords: ['keyword1', 'keyword2'],
  alternates: {
    canonical: 'https://www.objectwire.org/article-slug',
  },
  openGraph: {
    type: 'article',
    title: 'Article Title',
    description: 'Article description',
    publishedTime: '2026-01-30T10:00:00Z',
    section: 'Investigation',
  },
};

export default function ArticlePage() {
  return (
    <>
      <NewsArticleSchema
        title="Article Title"
        description="Article description"
        author="Author Name"
        publishedTime="2026-01-30T10:00:00Z"
        articleUrl="https://objectwire.org/article-slug"
        section="Investigation"
        keywords={['keyword1', 'keyword2']}
      />
      
      <DynamicNewsArticle {...props}>
        {/* Content */}
      </DynamicNewsArticle>
    </>
  );
}
```

## Styling

The component uses Tailwind CSS classes and follows ObjectWire's design system:
- Black borders for emphasis
- Bold typography for headings
- Ample whitespace for readability
- Responsive grid layouts
- Accessible color contrasts

## Accessibility

The component includes:
- Proper semantic HTML (`<article>`, `<header>`, `<footer>`, `<aside>`)
- ARIA labels for navigation and forms
- Keyboard-accessible links and buttons
- Proper heading hierarchy
- Alt text support for images
- Video captions

## Browser Support

Works in all modern browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Future Enhancements

Potential improvements:
- [ ] Dark mode support
- [ ] Print stylesheet
- [ ] Social share buttons
- [ ] Reading progress indicator
- [ ] Table of contents generator
- [ ] Related articles auto-suggest
- [ ] Comment system integration

## Support

For questions or issues:
1. Check the example implementation at `/example-investigation`
2. Review the component source code
3. Consult the editorial team

## License

© 2026 ObjectWire. All rights reserved.
