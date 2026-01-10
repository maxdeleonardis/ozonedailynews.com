# Supabase Integration Guide

## Overview
This document outlines the Supabase integration for ObjectWire, enabling:
- User authentication (email/password, OAuth)
- Article management and real-time updates
- Email newsletter subscriptions
- User preferences and saved articles
- Article view tracking

## Project Structure After Integration

```
lib/
  ├── supabase.ts           # Supabase client & type definitions
  ├── auth-context.tsx      # Auth provider & hooks
  ├── articles.ts           # Article queries & functions
  └── email.ts              # Newsletter subscription functions

components/
  └── EmailCapture-with-supabase.tsx  # Updated email component

app/
  └── layout-with-supabase.tsx        # Updated layout with AuthProvider
  └── auth/
      └── callback.ts                 # OAuth callback handler

.env.example                # Environment variables template
```

## Database Schema

### articles table
```sql
- id (UUID, primary key)
- title (text)
- slug (text, unique)
- excerpt (text)
- content (text)
- category (text)
- author (text)
- featured (boolean)
- published_at (timestamp)
- created_at (timestamp)
- image_url (text, optional)
- view_count (integer, default 0)
```

### subscribers table
```sql
- id (UUID, primary key)
- email (text, unique)
- subscribed_at (timestamp)
- is_active (boolean)
- preferences (jsonb) {
    categories: string[],
    frequency: 'daily' | 'weekly' | 'never'
  }
```

### user_preferences table
```sql
- id (UUID, primary key)
- user_id (UUID, foreign key to auth.users)
- read_articles (UUID[])
- saved_articles (UUID[])
- preferred_categories (text[])
- dark_mode (boolean)
```

## Installation Steps

1. **Install Supabase client:**
```bash
npm install @supabase/supabase-js
```

2. **Create Supabase project:**
   - Go to https://supabase.com
   - Create a new project
   - Copy URL and Anon Key

3. **Add environment variables:**
   - Copy `.env.example` to `.env.local`
   - Fill in SUPABASE_URL and ANON_KEY

4. **Create database tables** using Supabase SQL editor

5. **Update your layout.tsx:**
   ```tsx
   import { AuthProvider } from '@/lib/auth-context';
   
   export default function RootLayout({ children }) {
     return (
       <html>
         <body>
           <AuthProvider>
             {children}
           </AuthProvider>
         </body>
       </html>
     );
   }
   ```

## Key Features

### Authentication
```tsx
import { useAuth } from '@/lib/auth-context';

function MyComponent() {
  const { user, signIn, signOut } = useAuth();
  // Use throughout your app
}
```

### Article Management
```tsx
import { getFeaturedArticles, getArticleBySlug } from '@/lib/articles';

// In your pages
const articles = await getFeaturedArticles();
const article = await getArticleBySlug('article-slug');
```

### Email Subscriptions
```tsx
import { subscribeToNewsletter } from '@/lib/email';

const subscriber = await subscribeToNewsletter(
  'user@example.com',
  ['News', 'Technology'],
  'weekly'
);
```

### Real-time Updates
```tsx
import { subscribeToArticles } from '@/lib/articles';

useEffect(() => {
  const unsubscribe = subscribeToArticles((article) => {
    console.log('New article:', article);
  });
  return unsubscribe;
}, []);
```

## Security Considerations

1. **Row-Level Security (RLS):**
   - Enable RLS on all tables
   - Users can only access their own preferences
   - Public access to published articles

2. **Environment Variables:**
   - Never commit `.env.local` to git
   - Use `.env.example` for configuration template
   - Use service role key only on server-side

3. **API Keys:**
   - Anon key for client-side operations
   - Service role key for server-side operations
   - Rotate keys regularly

## API Endpoints

All database operations use Supabase's auto-generated API:
- REST API: `https://your-project.supabase.co/rest/v1/`
- Real-time: WebSocket subscriptions
- Auth: Supabase auth endpoints

## Migration from Current Setup

### Current: Static articles
```tsx
// Current
const articles = [{ title: "...", slug: "..." }];
```

### After: Database-driven
```tsx
// After integration
const articles = await getFeaturedArticles();
```

### Current: Email form
```tsx
// Current
<form onSubmit={handleEmail}>...</form>
```

### After: Supabase subscription
```tsx
// After integration
const subscriber = await subscribeToNewsletter(email);
```

## Cost Structure

**Supabase Free Tier:**
- 500MB database
- 1GB file storage
- Unlimited API requests
- Auth: up to 50,000 users
- Real-time: 2 concurrent users

**Perfect for:** Development and small-scale deployments

**Upgrade when:** You exceed storage limits or need higher concurrency

## Next Steps

1. Create Supabase project
2. Set up environment variables
3. Create database tables using SQL
4. Integrate AuthProvider into layout
5. Update article components to use database
6. Migrate email subscription logic
7. Add real-time features

## Resources

- [Supabase Docs](https://supabase.com/docs)
- [Supabase + Next.js](https://supabase.com/docs/guides/auth/auth-helpers/nextjs)
- [Supabase CLI](https://supabase.com/docs/guides/cli)
