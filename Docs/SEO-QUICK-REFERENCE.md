# 🎯 Quick Reference: Using the New SEO Features

## 🍞 Breadcrumbs

### Basic Usage
```tsx
import Breadcrumb from '@/components/Breadcrumb';

<Breadcrumb 
  items={[
    { name: 'Home', item: '/' },
    { name: 'News', item: '/news' },
    { name: 'Article Title', item: '/news/article' }
  ]}
/>
```

### Helper Patterns
```tsx
import { breadcrumbPatterns } from '@/components/Breadcrumb';

// News article
breadcrumbPatterns.news('Article Title', 'news/article-slug')

// News with category
breadcrumbPatterns.newsCategory('Technology', 'Article', 'slug')

// Nested topics (Google → Waymo)
breadcrumbPatterns.nestedTopic('Google', 'google', 'Waymo', 'waymo')
```

---

## 🔗 Related Articles

### Full Grid (Bottom of Article)
```tsx
import RelatedArticles from '@/components/RelatedArticles';

<RelatedArticles 
  currentSlug="news/article-slug"
  currentCategory="Technology"
  currentTags={["Microsoft", "Privacy"]}
  maxArticles={3}
/>
```

### Sidebar Compact
```tsx
import { RelatedArticlesSidebar } from '@/components/RelatedArticles';

<RelatedArticlesSidebar 
  currentSlug="news/article-slug"
  currentCategory="Technology"
  maxArticles={5}
/>
```

---

## 🔍 Site Search

### Already Integrated!
- Click search icon in header
- Type query + Enter
- Results at `/search?q={query}`

### Direct Links
```tsx
<Link href="/search?q=microsoft">Search Microsoft</Link>
<Link href="/search">Search Page</Link>
```

---

## 📦 Full Article Template

```tsx
import Breadcrumb from "@/components/Breadcrumb";
import RelatedArticles from "@/components/RelatedArticles";

export default function MyArticle() {
  return (
    <main>
      <div className="hero">
        <Breadcrumb items={[
          { name: 'Home', item: '/' },
          { name: 'News', item: '/news' },
          { name: 'My Article', item: '/news/my-article' }
        ]} />
        {/* Hero content */}
      </div>

      <div className="container">
        <article>
          {/* Article content */}
        </article>

        <RelatedArticles 
          currentSlug="news/my-article"
          currentCategory="Technology"
          currentTags={["Tag1", "Tag2"]}
        />
      </div>
    </main>
  );
}
```

---

## ✅ Checklist for Each Article

- [ ] Import Breadcrumb component
- [ ] Import RelatedArticles component
- [ ] Add breadcrumb in hero section
- [ ] Add related articles after content
- [ ] Verify correct slug/category/tags
- [ ] Test on page

**Time per article**: ~2 minutes

---

## 🎨 Styling Tips

### Custom Breadcrumb Colors
```tsx
<Breadcrumb 
  items={items}
  className="text-blue-200"  // Light text on dark bg
/>
```

### Related Articles Spacing
```tsx
<RelatedArticles 
  currentSlug="slug"
  className="mt-12 pt-8"  // Add top margin/padding
/>
```

---

**Questions?** See `/Docs/SEO-FEATURES-IMPLEMENTATION.md` for full guide.
