# Installation Instructions

## Required Package

The new architecture requires `@supabase/ssr` for proper server-side Supabase client management.

### Install the package:

```bash
npm install @supabase/ssr
```

Or with yarn:

```bash
yarn add @supabase/ssr
```

Or with pnpm:

```bash
pnpm add @supabase/ssr
```

## Verification

After installation, verify the package is in your `package.json`:

```json
{
  "dependencies": {
    "@supabase/ssr": "^0.5.2",
    "@supabase/supabase-js": "^2.90.1"
  }
}
```

## Then Run

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Update database schema:**
   - Go to Supabase Dashboard → SQL Editor
   - Run `supabase/setup.sql`
   - Run `supabase/migrate-status.sql` (if you have existing articles)

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Test the flow:**
   - Navigate to `/admin/editor/new`
   - Create an article and click "Save Draft"
   - Verify it's NOT visible on `/blog`
   - Click "Publish"
   - Verify it IS visible on `/blog`

## Troubleshooting

If you see TypeScript errors about `@supabase/ssr`:
1. Make sure you installed the package: `npm install @supabase/ssr`
2. Restart your TypeScript server in VS Code: `Cmd/Ctrl + Shift + P` → "Restart TypeScript Server"
3. Clear Next.js cache: `rm -rf .next && npm run dev`
