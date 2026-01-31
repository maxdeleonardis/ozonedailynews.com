# DynamicNewsArticle - Admin Integration Guide

## Adding Thumbnails & Hero Images

### Option 1: Hero Image in Component (Recommended)

Add a `heroImage` prop to your DynamicNewsArticle component:

```tsx
<DynamicNewsArticle
  heroImage={{
    src: "/images/apple-foldable-hero.jpg",
    alt: "Apple Foldable iPhone Concept",
    caption: "Apple's first foldable iPhone expected in H2 2026",
    credit: "Apple Inc. / ObjectWire"
  }}
  // ... other props
>
```

### Option 2: Manage via Admin Panel

For articles created with DynamicNewsArticle to appear in your admin panel, you need to:

## Integration Steps

### Step 1: Extend Blog Post Schema

Your current admin panel uses the `blog_posts` table with these fields:
- `featured_image` - Already exists! ✅
- `meta_title` - Already exists! ✅
- `meta_description` - Already exists! ✅

### Step 2: Create a Hybrid Article Type

You have two options:

#### Option A: Store DynamicNewsArticle Data in Database

Create articles using the admin panel but render with DynamicNewsArticle:

1. In admin editor, add metadata fields
2. Store article data in `blog_posts` table
3. Create dynamic route that reads from DB and renders with DynamicNewsArticle

#### Option B: Create Static Files with Metadata

Store metadata in database for listing/searching, but keep article as static file:

1. Create article as `.tsx` file (like you just did)
2. Add metadata entry to database
3. Admin panel shows all articles (DB + static)
4. Can update thumbnails/meta without touching code

## Quick Solution: Add Hero Image to Existing Component

Let's update the DynamicNewsArticle component to support hero images.

### Usage:

```tsx
<DynamicNewsArticle
  // ... existing props ...
  heroImage={{
    src: "https://example.com/image.jpg",
    alt: "Article hero image",
    caption: "Optional caption",
    credit: "Optional photo credit"
  }}
>
```

### For Thumbnails in Social/SEO:

Update your metadata:

```tsx
export const metadata: Metadata = {
  // ... existing metadata ...
  openGraph: {
    images: [
      {
        url: 'https://www.objectwire.org/images/apple-foldable.jpg',
        width: 1200,
        height: 630,
        alt: 'Apple Foldable iPhone',
      },
    ],
    // ... rest
  },
  twitter: {
    images: ['https://www.objectwire.org/images/apple-foldable.jpg'],
    // ... rest
  },
};
```

## Recommended Workflow

### For Now (Quick Solution):

1. **Create articles as `.tsx` files** using DynamicNewsArticle
2. **Add images to `/public/images/` folder**
3. **Reference in heroImage prop**
4. **Update metadata for SEO thumbnails**

### For Production (Full Integration):

I can create a system where:

1. **Article Registry** - JSON/DB listing all articles
2. **Admin Panel Integration** - Shows both DB posts and static articles
3. **Thumbnail Manager** - Upload/manage images via admin
4. **Meta Editor** - Edit titles/descriptions without touching code
5. **Publishing Workflow** - Draft → Review → Publish

Would you like me to implement the **full integration** or just **add hero image support to the component**?

## Quick Fix: Add Hero Image Now

If you want to add a hero image to your Apple article right now:

1. Download/create an image
2. Put it in `/public/images/apple-foldable-iphone.jpg`
3. I'll update your article to include it
4. I'll enhance the component to support hero images

Let me know which approach you prefer!
