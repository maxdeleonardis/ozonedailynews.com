# Component Migration Guide

## Before & After: Migrating to DynamicNewsArticle

This guide shows how to convert existing article pages to use the new `DynamicNewsArticle` component.

## Example: Converting a News Article

### ❌ BEFORE (Manual HTML Structure)

```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Article Title | ObjectWire',
  description: 'Article description',
};

export default function ArticlePage() {
  return (
    <article className="min-h-screen bg-white">
      <header className="border-b-2 border-black">
        <div className="container py-8 md:py-12">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <a href="/">Home</a>
            <span>/</span>
            <a href="/news">News</a>
          </nav>
          
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-red-600 text-white text-xs font-bold px-3 py-1">
              INVESTIGATION
            </span>
            <span className="text-sm text-gray-500">8 min read</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-6">
            Article Title Goes Here
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mb-6">
            Article subtitle goes here
          </p>

          <div className="flex items-center gap-3 border-t pt-6">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">JD</span>
            </div>
            <div>
              <p className="font-semibold">John Doe</p>
              <p className="text-gray-500">Reporter</p>
            </div>
            <div className="text-gray-500 ml-4">
              <time>January 30, 2026</time>
            </div>
          </div>
        </div>
      </header>

      <div className="container py-12">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <div className="prose prose-lg max-w-none">
              <p>Article content...</p>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="border border-gray-200 mb-8">
              <div className="bg-black text-white px-4 py-2">
                <h3 className="font-bold text-sm">RELATED COVERAGE</h3>
              </div>
              <div className="p-4">
                {/* Manual related article links */}
              </div>
            </div>
          </aside>
        </div>
      </div>

      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="container py-8">
          {/* Footer content */}
        </div>
      </footer>
    </article>
  );
}
```

**Problems with this approach:**
- 🔴 150+ lines of boilerplate code
- 🔴 Easy to make styling mistakes
- 🔴 Hard to maintain consistency
- 🔴 No type safety
- 🔴 Repetitive across articles
- 🔴 Difficult to update site-wide

### ✅ AFTER (Using DynamicNewsArticle)

```tsx
import type { Metadata } from 'next';
import { DynamicNewsArticle } from '@/components/DynamicNewsArticle';

export const metadata: Metadata = {
  title: 'Article Title | ObjectWire',
  description: 'Article description',
};

export default function ArticlePage() {
  return (
    <DynamicNewsArticle
      breadcrumbs={[
        { href: '/', label: 'Home' },
        { href: '/news', label: 'News' },
      ]}
      categories={[
        { label: 'INVESTIGATION', color: 'red' },
      ]}
      readTime="8 min read"
      title="Article Title Goes Here"
      subtitle="Article subtitle goes here"
      author={{
        name: 'John Doe',
        department: 'Reporter',
        initials: 'JD',
      }}
      publishDate="January 30, 2026"
      relatedArticles={[
        {
          href: '/related-article',
          category: 'INVESTIGATION',
          categoryColor: 'text-red-600',
          title: 'Related Article Title',
        },
      ]}
    >
      <p>Article content...</p>
    </DynamicNewsArticle>
  );
}
```

**Benefits of this approach:**
- ✅ 40 lines instead of 150+
- ✅ Type-safe props with IntelliSense
- ✅ Consistent styling automatically
- ✅ Easy to maintain and update
- ✅ Reusable across all articles
- ✅ Site-wide changes in one place

## Migration Steps

### Step 1: Install the Component

The component is already in your project at:
```
components/DynamicNewsArticle.tsx
```

### Step 2: Identify Articles to Migrate

Look for files with this pattern:
```tsx
<article className="min-h-screen bg-white">
  <header className="border-b-2 border-black">
    // Manual header structure
  </header>
  <div className="container py-12">
    // Manual content structure
  </div>
</article>
```

### Step 3: Extract Article Data

From the old code, identify:
- Breadcrumbs
- Category badges
- Title & subtitle
- Author info
- Publish/update dates
- Sidebar content
- Footer links

### Step 4: Convert to Component Props

Map the old structure to props:

| Old Code | New Prop |
|----------|----------|
| Breadcrumb `<a>` tags | `breadcrumbs` array |
| Category `<span>` badges | `categories` array |
| `<h1>` title | `title` string |
| Subtitle paragraph | `subtitle` string |
| Author div | `author` object |
| Date `<time>` | `publishDate` string |
| Sidebar links | `relatedArticles` array |

### Step 5: Move Content

Move the article body content to the component's children:

```tsx
<DynamicNewsArticle {...props}>
  {/* Your existing article content */}
  <p>First paragraph...</p>
  <h2>Section heading...</h2>
  <p>More content...</p>
</DynamicNewsArticle>
```

### Step 6: Add Sub-Components

Enhance with specialized components:

```tsx
import {
  DynamicNewsArticle,
  CaseOverview,
  StatisticsBox,
  ArticleQuote,
} from '@/components/DynamicNewsArticle';

<DynamicNewsArticle {...props}>
  <CaseOverview
    items={[
      { label: 'Fact 1:', value: 'Description' },
    ]}
  />
  
  <p>Article content...</p>
  
  <ArticleQuote
    quote="Important quote"
    author="Person Name"
  />
</DynamicNewsArticle>
```

## Real-World Example: Gatik Article

### Before (Original Implementation)

See: `app/news/gatik-first-us-driverless-trucks-commercially/page.tsx`

The original file used the `NewsArticle` component with manual content structure:
- 327 lines of code
- Mixed component and content
- No sidebar structure
- Manual styling throughout

### After (Migrated to DynamicNewsArticle)

```tsx
<DynamicNewsArticle
  breadcrumbs={[
    { href: '/', label: 'Home' },
    { href: '/news', label: 'News' },
    { href: '/autonomous-vehicles', label: 'Autonomous Vehicles' },
  ]}
  categories={[
    { label: 'AUTONOMOUS VEHICLES', color: 'blue' },
    { label: 'BREAKING', color: 'red' },
  ]}
  readTime="6 min read"
  title="Gatik Becomes First U.S. Company to Operate Fully Driverless Commercial Trucks"
  subtitle="Autonomous trucking startup achieves historic milestone as first company to run commercial trucks on public roads without safety drivers"
  author={{
    name: 'ObjectWire Transportation Desk',
    department: 'Transportation & Logistics Reporter',
  }}
  publishDate="January 27, 2026"
  relatedArticles={[
    {
      href: '/gatik',
      category: 'COMPANY PROFILE',
      categoryColor: 'text-blue-600',
      title: 'Gatik: Complete Company Overview',
    },
    {
      href: '/autonomous-vehicles',
      category: 'TECHNOLOGY',
      categoryColor: 'text-blue-600',
      title: 'Autonomous Vehicles Hub',
    },
  ]}
  timeline={[
    { date: '2017', description: 'Gatik founded' },
    { date: '2021', description: 'First autonomous deliveries' },
    { date: '2026', description: 'Full driverless approval', highlight: true },
  ]}
  sources={[
    {
      number: 1,
      url: 'https://gatik.ai',
      title: 'Gatik Official Website',
      description: 'Company announcements and technology overview',
    },
  ]}
>
  {/* Article content with sub-components */}
</DynamicNewsArticle>
```

## Component Comparison Matrix

| Feature | Manual HTML | Old Components | DynamicNewsArticle |
|---------|-------------|----------------|---------------------|
| Lines of code | 150-300 | 80-150 | 40-60 |
| Type safety | ❌ | ⚠️ Partial | ✅ Full |
| Consistency | ❌ Manual | ⚠️ Depends | ✅ Automatic |
| Reusability | ❌ Copy-paste | ⚠️ Limited | ✅ Complete |
| Sidebar widgets | ❌ Manual | ❌ Not included | ✅ Built-in |
| SEO optimization | ⚠️ Manual | ⚠️ Partial | ✅ Automatic |
| Responsive design | ⚠️ Manual | ✅ Yes | ✅ Yes |
| Sub-components | ❌ None | ⚠️ Few | ✅ 7+ components |
| Maintenance | 🔴 Hard | ⚠️ Medium | ✅ Easy |
| Documentation | ❌ None | ⚠️ Basic | ✅ Comprehensive |

## Migration Checklist

For each article you migrate:

- [ ] Import `DynamicNewsArticle` and needed sub-components
- [ ] Convert header elements to props
- [ ] Move content inside component children
- [ ] Add breadcrumbs array
- [ ] Configure category badges
- [ ] Set up author object
- [ ] Add related articles (min 2-3)
- [ ] Include timeline if applicable
- [ ] Add document links if applicable
- [ ] Include source citations
- [ ] Test on desktop and mobile
- [ ] Verify all links work
- [ ] Check SEO metadata
- [ ] Review accessibility

## Common Migration Patterns

### Pattern 1: Investigation Article

```tsx
// Old: Custom boxes and manual structure
<div className="bg-red-50 border-l-4 border-red-600 p-6">
  <h3>CASE OVERVIEW</h3>
  <ul>
    <li>• Item 1</li>
  </ul>
</div>

// New: Use CaseOverview component
<CaseOverview
  title="CASE OVERVIEW"
  color="red"
  items={[
    { label: 'Item 1', value: 'Description' },
  ]}
/>
```

### Pattern 2: Statistics

```tsx
// Old: Manual grid
<div className="grid grid-cols-4 gap-4">
  <div>
    <p className="text-3xl font-black">100K</p>
    <p>Users</p>
  </div>
  // ...more stats
</div>

// New: Use StatisticsBox
<StatisticsBox
  stats={[
    { value: '100K', label: 'Users' },
  ]}
/>
```

### Pattern 3: Quotes

```tsx
// Old: Manual blockquote
<blockquote className="border-l-4 border-black pl-6 italic">
  "Quote text"
  <footer>— Author</footer>
</blockquote>

// New: Use ArticleQuote
<ArticleQuote
  quote="Quote text"
  author="Author"
/>
```

## Troubleshooting

### Issue: Styling Looks Different

**Solution:** The new component uses standardized styles. Adjust your content to use the sub-components instead of custom styles.

### Issue: Sidebar Not Showing

**Solution:** Make sure you're passing at least one sidebar prop:
- `relatedArticles`
- `timeline`
- `documents`
- `showNewsletter`

### Issue: TypeScript Errors

**Solution:** Import types from the component:
```tsx
import type {
  Breadcrumb,
  CategoryBadge,
  ArticleAuthor,
} from '@/components/DynamicNewsArticle';
```

### Issue: Layout Breaks on Mobile

**Solution:** The component is responsive by default. Check that you're not adding custom CSS that conflicts.

## Performance Impact

**Before Migration:**
- Manual HTML: More DOM nodes
- Inconsistent optimization
- Potential styling conflicts

**After Migration:**
- Optimized component structure
- Consistent rendering
- Better performance metrics

## Next Steps

1. Start with your most important articles
2. Use the example template as reference
3. Test thoroughly on multiple devices
4. Update documentation as you go
5. Get feedback from the team

## Resources

- 📖 Full Documentation: `/Docs/DYNAMIC-NEWS-ARTICLE-COMPONENT.md`
- 🚀 Quick Start: `/Docs/QUICK-START-ARTICLE-TEMPLATE.md`
- 🎨 Visual Guide: `/Docs/COMPONENT-VISUAL-GUIDE.md`
- 💡 Example: `/app/example-investigation/page.tsx`
- 🔍 Real Example: `/app/minnesota-feeding-our-future-fraud/page.tsx`

---

**Need help with migration? Contact the editorial team.**
