# Supabase Database Setup for ObjectWire

## Overview
This guide will help you set up the Supabase database for storing articles in the ObjectWire platform.

## Prerequisites
- Supabase account (https://supabase.com)
- Project created in Supabase
- Environment variables configured in `.env.local`

## Environment Variables
Create a `.env.local` file in the root directory with:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Database Schema

### Articles Table

Run this SQL in your Supabase SQL Editor:

```sql
-- Create the articles table
CREATE TABLE IF NOT EXISTS articles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT,
  content JSONB,
  category TEXT NOT NULL DEFAULT 'News',
  author TEXT DEFAULT 'ObjectWire Editorial',
  featured BOOLEAN DEFAULT false,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  image_url TEXT,
  view_count INTEGER DEFAULT 0
);

-- Create index on slug for faster lookups
CREATE INDEX IF NOT EXISTS idx_articles_slug ON articles(slug);

-- Create index on category
CREATE INDEX IF NOT EXISTS idx_articles_category ON articles(category);

-- Create index on published_at for sorting
CREATE INDEX IF NOT EXISTS idx_articles_published_at ON articles(published_at DESC);

-- Enable Row Level Security
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Allow public read access" ON articles
  FOR SELECT
  TO public
  USING (true);

-- Create policy to allow authenticated users to insert
CREATE POLICY "Allow authenticated insert" ON articles
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Create policy to allow authenticated users to update
CREATE POLICY "Allow authenticated update" ON articles
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create policy to allow authenticated users to delete
CREATE POLICY "Allow authenticated delete" ON articles
  FOR DELETE
  TO authenticated
  USING (true);

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to call the function
CREATE TRIGGER update_articles_updated_at
    BEFORE UPDATE ON articles
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Function to increment view count
CREATE OR REPLACE FUNCTION increment_view_count(article_id UUID)
RETURNS void AS $$
BEGIN
  UPDATE articles
  SET view_count = view_count + 1
  WHERE id = article_id;
END;
$$ LANGUAGE plpgsql;
```

## How the Integration Works

### 1. **Article Storage**
- Articles are stored in the `articles` table in Supabase
- The `content` field stores article blocks as JSONB
- The `slug` field serves as the unique identifier (matching the ID)

### 2. **Real-Time Sync**
- Articles load from Supabase on app start
- All changes (add, update, delete) are synced to the database
- Auto-save functionality saves changes every 3 seconds

### 3. **Data Flow**

**Loading Articles:**
```
App Start → Supabase Query → Transform to Article Format → Update Local State
```

**Saving Articles:**
```
User Edit → Local State Update → Auto-save Timer → Supabase Update
```

**Publishing Articles:**
```
User Clicks Publish → Set published_at → Update Supabase → Update Local State
```

## Article Structure

### In Supabase (JSONB):
```json
{
  "slug": "article-slug",
  "title": "Article Title",
  "excerpt": "Brief summary",
  "content": [
    {
      "id": "block-123",
      "type": "heading",
      "content": "Heading Text",
      "level": 2
    },
    {
      "id": "block-456",
      "type": "paragraph",
      "content": "Paragraph text..."
    }
  ],
  "category": "Technology",
  "published_at": "2025-01-10T12:00:00Z"
}
```

### In App (TypeScript):
```typescript
interface Article {
  id: string;           // Same as slug
  title: string;
  slug: string;
  excerpt: string;
  blocks: ArticleBlock[];
  category: string;
  status: 'draft' | 'published';
  author: string;
  createdAt: string;
  updatedAt: string;
  readTime: string;
}
```

## Testing the Integration

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Navigate to the admin dashboard:**
   ```
   http://localhost:3000/admin/dashboard
   ```

3. **Create a test article:**
   - Click on the title to edit
   - Add a URL slug
   - Write an excerpt
   - Add content blocks
   - Click "Save" or wait for auto-save

4. **Verify in Supabase:**
   - Go to your Supabase project
   - Navigate to Table Editor
   - Select the `articles` table
   - You should see your new article

## Troubleshooting

### Articles not saving?
- Check console for errors
- Verify Supabase credentials in `.env.local`
- Ensure RLS policies are correctly set
- Check network tab for failed requests

### Articles not loading?
- Verify Supabase URL is correct
- Check if table exists
- Ensure RLS policies allow public read
- Look for console errors

### Fallback Behavior
If Supabase is unavailable:
- App loads default articles from memory
- Changes are stored locally only
- Alert shown when save fails

## Security Notes

- **Row Level Security (RLS)** is enabled for data protection
- Public can read published articles
- Only authenticated users can create/edit/delete
- Consider adding author-based policies for multi-user setups

## Next Steps

1. Set up authentication for the admin panel
2. Add image upload functionality
3. Implement article versioning
4. Add real-time collaboration features
5. Create automated backups

## Support

For issues or questions:
- Check Supabase documentation: https://supabase.com/docs
- Review Next.js guides: https://nextjs.org/docs
- Contact: support@objectwire.com
