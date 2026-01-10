# Supabase Integration - Setup Instructions

## Step 1: Run the SQL Setup

1. Go to your Supabase dashboard: https://supabase.com/dashboard
2. Select your project: **jdmdgndgmclsalrssxu**
3. Click on "SQL Editor" in the left sidebar
4. Click "New Query"
5. Copy and paste the entire contents of `supabase/setup.sql`
6. Click "Run" to execute

This will:
- Create the `articles` table with proper schema
- Set up Row Level Security (RLS) policies to allow anonymous writes
- Create indexes for better performance
- Add automatic `updated_at` timestamp triggers

## Step 2: Verify the Setup

After running the SQL, verify it worked:

```sql
-- Check if table exists
SELECT * FROM articles LIMIT 5;

-- Check RLS policies
SELECT * FROM pg_policies WHERE tablename = 'articles';
```

You should see:
- Table exists (even if empty)
- 4 policies: read, insert, update, delete for anonymous users

## Step 3: Test the Integration

1. Restart your dev server: `npm run dev`
2. Go to `/admin/dashboard`
3. Click "New Article" 
4. Create a test article
5. Check Supabase dashboard → Table Editor → articles table
6. You should see your new article!

## Common Issues

### "Failed to fetch" Error
- Check that environment variables are set in `.env.local`
- Verify the Supabase URL and key are correct
- Make sure your internet connection is working

### "Row Level Security" Error
- Run the SQL setup script again
- Verify the policies show `TO anon` not just `TO authenticated`

### Articles Not Appearing
- Check the browser console for errors
- Verify the `content` field is storing JSONB correctly
- Make sure the `slug` field is unique

## Current Configuration

Your Supabase credentials (from `.env.local`):
- URL: `https://jdmdgndgmclsalrssxu.supabase.co`
- Project Ref: `jdmdgndgmclsalrssxu`
- Database Password: `ObjectiveLogic@26`

## Next Steps After Setup

Once Supabase is working:
1. All articles will persist across page refreshes
2. Articles are backed up in the cloud
3. You can access/edit from any device
4. Ready for multi-user collaboration in the future
