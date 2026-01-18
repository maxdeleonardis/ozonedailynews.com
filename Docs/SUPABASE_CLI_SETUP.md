# Supabase CLI Setup Guide

## Setup Instructions

### 1. Install Supabase CLI
Already installed as dev dependency:
```bash
npm install supabase --save-dev
```

### 2. Login to Supabase
Already completed:
```bash
npx supabase login
```

### 3. Link Your Project
You need to link your local project to your Supabase project. Get your project reference from your Supabase dashboard URL:

```
https://supabase.com/dashboard/project/YOUR_PROJECT_REF
```

Then run:
```bash
npx supabase link --project-ref YOUR_PROJECT_REF
```

Enter your database password when prompted.

### 4. Push Migrations to Supabase

Once linked, push the blog_posts table and storage migrations:

```bash
npx supabase db push
```

This will:
- Create the `blog_posts` table with all columns
- Set up indexes for performance
- Configure Row Level Security policies
- Create the `blog-images` storage bucket
- Set up storage policies

### 5. Verify Setup

Check if tables were created:
```bash
npx supabase db diff
```

Or go to your Supabase dashboard:
- **Database** → **Tables** → Check for `blog_posts` table
- **Storage** → Check for `blog-images` bucket

### 6. Test the Connection

Start your dev server and test creating a blog post:
```bash
npm run dev
```

Visit: http://localhost:3000/admin/editor

## Available Commands

### Database Commands
```bash
# Check migration status
npx supabase migration list

# Create new migration
npx supabase migration new migration_name

# Push local migrations to remote
npx supabase db push

# Pull remote changes to local
npx supabase db pull

# Reset local database
npx supabase db reset
```

### Project Commands
```bash
# Show current project status
npx supabase status

# Show project settings
npx supabase projects list

# Unlink project
npx supabase unlink
```

## Troubleshooting

### Error: "Project not linked"
Run: `npx supabase link --project-ref YOUR_PROJECT_REF`

### Error: "Invalid database password"
Get password from Supabase dashboard → Settings → Database → Reset password

### Error: "Migration already exists"
The migration was already applied. Check with:
```bash
npx supabase migration list
```

### Error: "Connection timeout"
Check your internet connection and Supabase project status

## Migration Files

Your project has these migrations:

1. **20260113000000_create_blog_posts.sql**
   - Creates `blog_posts` table
   - Adds indexes for performance
   - Sets up RLS policies
   - Creates update trigger

2. **20260114000000_create_storage.sql**
   - Creates `blog-images` bucket
   - Configures storage policies
   - Sets file size limits (10MB)
   - Allows specific image types

## Database Schema

### blog_posts Table

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| created_at | TIMESTAMP | Auto-generated |
| updated_at | TIMESTAMP | Auto-updated |
| published_at | TIMESTAMP | When published |
| title | TEXT | Post title (required) |
| slug | TEXT | URL slug (unique) |
| excerpt | TEXT | Meta description |
| author | TEXT | Author name |
| category | TEXT | Post category |
| tags | TEXT[] | Array of tags |
| read_time | TEXT | Estimated read time |
| blocks | JSONB | Content blocks |
| status | TEXT | draft or published |
| featured_image | TEXT | Image URL |
| meta_title | TEXT | SEO title |
| meta_description | TEXT | SEO description |

### Row Level Security Policies

- **Public Read**: Anyone can view published posts
- **Authenticated Full Access**: Logged-in users can create/edit/delete

## Next Steps

1. Link your Supabase project
2. Push migrations
3. Verify tables in dashboard
4. Test creating a blog post
5. Deploy to production with same migrations
