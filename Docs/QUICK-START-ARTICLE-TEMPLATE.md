# Quick Start: Creating Articles with DynamicNewsArticle

## 5-Minute Setup Guide

### Step 1: Create Your Article File

Create a new page file in the `app` directory:

```bash
app/
  your-article-slug/
    page.tsx
```

### Step 2: Copy This Template

```tsx
import type { Metadata } from 'next';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import {
  DynamicNewsArticle,
  CaseOverview,
  ArticleQuote,
  StatisticsBox,
} from '@/components/DynamicNewsArticle';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Your Article Title | ObjectWire',
  description: 'Your article description for SEO',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  alternates: {
    canonical: 'https://www.objectwire.org/your-article-slug',
  },
  openGraph: {
    type: 'article',
    title: 'Your Article Title',
    description: 'Your article description',
    publishedTime: '2026-01-30T10:00:00Z',
    section: 'News',
  },
};

export default function YourArticlePage() {
  return (
    <>
      <NewsArticleSchema
        title="Your Article Title"
        description="Your article description"
        author="Your Name"
        publishedTime="2026-01-30T10:00:00Z"
        articleUrl="https://objectwire.org/your-article-slug"
        section="News"
        keywords={['keyword1', 'keyword2']}
      />

      <DynamicNewsArticle
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/news', label: 'News' },
        ]}
        categories={[
          { label: 'NEWS', color: 'blue' },
        ]}
        readTime="5 min read"
        title="Your Article Title Goes Here"
        subtitle="Your engaging subtitle that makes people want to read"
        author={{
          name: 'Your Name',
          department: 'Editorial Team',
        }}
        publishDate="January 30, 2026"
        relatedArticles={[
          {
            href: '/related-article',
            category: 'RELATED',
            categoryColor: 'text-blue-600',
            title: 'Related Article Title',
          },
        ]}
        sources={[
          {
            number: 1,
            url: 'https://source.com',
            title: 'Source Name',
            description: 'Source description',
          },
        ]}
      >
        {/* Your article content starts here */}
        
        <p className="text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:leading-none">
          Your opening paragraph with a drop cap. Make it engaging and summarize the key points.
        </p>

        <p>
          Regular paragraphs go here. You can include links, bold text, and other formatting.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Section Heading
        </h2>

        <p>More content...</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Bullet point 1</li>
          <li>Bullet point 2</li>
        </ul>

      </DynamicNewsArticle>
    </>
  );
}
```

### Step 3: Add Visual Components

Enhance your article with sub-components:

#### Case Overview Box
```tsx
<CaseOverview
  title="KEY FACTS"
  color="blue"
  items={[
    { label: 'Date:', value: 'January 30, 2026' },
    { label: 'Impact:', value: 'Major industry shift' },
  ]}
/>
```

#### Statistics
```tsx
<StatisticsBox
  title="BY THE NUMBERS"
  color="blue"
  stats={[
    { value: '100K', label: 'Users' },
    { value: '$50M', label: 'Revenue' },
  ]}
/>
```

#### Quote
```tsx
<ArticleQuote
  quote="This is a game-changing development."
  author="John Doe"
  title="Industry Expert"
/>
```

### Step 4: Test Locally

```bash
npm run dev
```

Visit: `http://localhost:3000/your-article-slug`

### Step 5: Deploy

```bash
git add .
git commit -m "Add new article: Your Article Title"
git push
```

## Common Article Types

### Investigation Article

```tsx
categories={[
  { label: 'INVESTIGATION', color: 'red' },
  { label: 'BREAKING', color: 'black' },
]}
```

Include:
- Case overview box
- Timeline sidebar
- Key figures
- Document links
- Source citations

### Breaking News

```tsx
categories={[
  { label: 'BREAKING', color: 'red' },
]}
```

Include:
- Quick facts box
- Live updates section
- Related articles

### Feature Story

```tsx
categories={[
  { label: 'FEATURE', color: 'purple' },
]}
```

Include:
- Rich media (images, videos)
- Quotes
- Statistics
- Related content

### Analysis/Opinion

```tsx
categories={[
  { label: 'ANALYSIS', color: 'blue' },
]}
```

Include:
- Author bio
- Related articles
- Data visualizations

## Color Guide

| Color | Use For |
|-------|---------|
| `red` | Breaking news, investigations, urgent |
| `blue` | Technology, business, analysis |
| `green` | Environment, health, positive |
| `purple` | Politics, opinion, features |
| `orange` | Entertainment, culture |
| `yellow` | Warnings, updates |
| `black` | Special reports, announcements |

## Quick Tips

✅ **DO:**
- Use descriptive titles (50-60 characters)
- Write engaging subtitles
- Include breadcrumbs for navigation
- Add related articles in sidebar
- Cite sources
- Use sub-components to break up text
- Test on mobile devices

❌ **DON'T:**
- Make titles too long (>70 chars)
- Skip breadcrumbs
- Forget to add keywords
- Use too many categories (max 3)
- Leave sidebar empty
- Forget source citations
- Use low-quality images

## Checklist

Before publishing, verify:

- [ ] Title is compelling and SEO-friendly
- [ ] Subtitle summarizes the article
- [ ] Metadata is complete (title, description, keywords)
- [ ] Breadcrumbs are correct
- [ ] Author info is filled out
- [ ] Dates are in proper format
- [ ] At least 2-3 related articles in sidebar
- [ ] Sources are cited
- [ ] Images have alt text
- [ ] Article reads well on mobile
- [ ] Links open correctly
- [ ] No spelling/grammar errors

## Need Help?

- 📖 Full Documentation: `/Docs/DYNAMIC-NEWS-ARTICLE-COMPONENT.md`
- 💡 Example Article: `/example-investigation`
- 🔍 Real Example: `/minnesota-feeding-our-future-fraud`
- 🎨 Component Source: `/components/DynamicNewsArticle.tsx`

## Support

For questions or issues, contact the editorial team or check the documentation.

---

**Happy Writing! 📝**
