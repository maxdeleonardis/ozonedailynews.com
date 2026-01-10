# Supabase Setup Guide

This project uses Supabase CLI for database migrations and type generation.

## Prerequisites

- Node.js installed
- Supabase account (sign up at https://supabase.com)
- Docker Desktop running (for local development)

## Quick Start

### 1. Link to Your Supabase Project

First, create a project in the Supabase Dashboard, then link it:

```bash
npm run supabase:link
```

You'll need your project reference ID from the Supabase dashboard.

### 2. Push Migrations to Database

Apply the database schema and seed data:

```bash
npm run supabase:push
```

This will create the `articles` table with RLS policies and insert default articles.

### 3. Generate TypeScript Types

Generate type definitions from your database schema:

```bash
npm run supabase:types
```

This creates `lib/database.types.ts` with full type safety for your queries.

## Local Development

### Start Local Supabase

```bash
npm run supabase:start
```

This starts a local Supabase instance using Docker. You'll get:
- Local PostgreSQL database
- Auth server
- Storage server
- Edge Functions runtime

### Check Status

```bash
npm run supabase:status
```

Shows connection details for your local instance.

### Stop Local Supabase

```bash
npm run supabase:stop
```

### Reset Database

```bash
npm run supabase:reset
```

⚠️ This will drop all data and re-run migrations from scratch.

## Creating Migrations

### New Migration

```bash
npm run supabase:migrate <migration_name>
```

Example:
```bash
npm run supabase:migrate add_comments_table
```

This creates a new timestamped SQL file in `supabase/migrations/`.

## Environment Variables

Add to your `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

Get these values from:
- Supabase Dashboard → Project Settings → API

## Database Schema

### Articles Table

The main content table with the following structure:

```sql
- id: UUID (primary key)
- slug: TEXT (unique, used as article ID)
- title: TEXT
- excerpt: TEXT
- content: JSONB (array of content blocks)
- category: TEXT
- author: TEXT
- featured: BOOLEAN
- published_at: TIMESTAMPTZ (NULL = draft)
- created_at: TIMESTAMPTZ
- updated_at: TIMESTAMPTZ (auto-updated)
- image_url: TEXT
- view_count: INTEGER
```

### Content Block Structure

The `content` field stores an array of blocks in JSONB format:

```json
[
  {
    "id": "1",
    "type": "heading",
    "content": "Your Heading"
  },
  {
    "id": "2",
    "type": "paragraph",
    "content": "Your paragraph text..."
  }
]
```

Supported block types:
- `heading` - H2 headings
- `paragraph` - Regular text
- `quote` - Blockquotes
- `list` - Bullet lists
- `code` - Code blocks

### Row Level Security (RLS)

**Public Access:**
- ✅ Read all published articles (`published_at IS NOT NULL`)

**Authenticated Users:**
- ✅ Read all articles (including drafts)
- ✅ Create new articles
- ✅ Update existing articles
- ✅ Delete articles

## Troubleshooting

### "Supabase not configured" Error

Make sure you have:
1. Created `.env.local` with Supabase credentials
2. Restarted the dev server after adding env variables

### Migration Errors

If migrations fail:
1. Check SQL syntax in migration files
2. Ensure you're on the latest Supabase CLI: `npm install -D supabase@latest`
3. Try resetting: `npm run supabase:reset`

### Type Generation Fails

Make sure:
1. You've run migrations first: `npm run supabase:push`
2. Your database schema is valid
3. You're connected to the correct project

## Useful Commands

```bash
# Check Supabase CLI version
npx supabase --version

# View all projects
npx supabase projects list

# Run SQL directly
npx supabase db execute --file ./path/to/file.sql

# View database logs
npx supabase db logs
```

## Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase CLI Reference](https://supabase.com/docs/reference/cli)
- [Row Level Security Guide](https://supabase.com/docs/guides/auth/row-level-security)
