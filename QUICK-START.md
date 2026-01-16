# 🚀 Quick Start Guide: Google Sign-In & Analytics

This guide will walk you through setting up Google Sign-In and advanced cookie tracking analytics on your ObjectWire site.

## ✅ What We've Built

All the code has been implemented! Here's what's ready:

### 🔐 Authentication Components
- ✅ NextAuth.js with Google OAuth provider
- ✅ Sign-in button with Google branding
- ✅ User profile dropdown menu
- ✅ Session management
- ✅ Auth provider wrapper

### 📊 Analytics & Tracking
- ✅ Google Analytics 4 integration
- ✅ Cookie consent management
- ✅ Advanced event tracking
- ✅ GDPR-compliant cookie banner
- ✅ User preference storage

### 🎨 UI Components
- ✅ Cookie consent banner
- ✅ Cookie settings modal
- ✅ Auth button (sign in/profile)
- ✅ Integrated into layout

---

## 📝 Step-by-Step Setup

### Step 1: Set Up Google Cloud Console (5 minutes)

1. **Go to Google Cloud Console**: https://console.cloud.google.com/
2. **Create a new project** (or select existing)
3. **Enable APIs**:
   - Go to "APIs & Services" → "Library"
   - Search for "Google+ API" and enable it

4. **Create OAuth Credentials**:
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "OAuth client ID"
   - Select "Web application"
   - Add these redirect URIs:
     - `http://localhost:3000/api/auth/callback/google` (dev)
     - `https://objectwire.org/api/auth/callback/google` (prod)
   - Copy your Client ID and Client Secret

### Step 2: Set Up Google Analytics (3 minutes)

1. **Go to Google Analytics**: https://analytics.google.com/
2. **Create a GA4 property** (if you don't have one)
3. **Set up a Data Stream**:
   - Choose "Web"
   - Enter your website URL: `https://objectwire.org`
   - Copy your Measurement ID (format: G-XXXXXXXXXX)

### Step 3: Configure Environment Variables (2 minutes)

1. **Create `.env.local` file** in your project root:

```bash
# Copy the example file
cp .env.local.example .env.local
```

2. **Edit `.env.local` and add your credentials**:

```env
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-generated-below

# Google OAuth Credentials (from Step 1)
GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-client-secret

# Google Analytics (from Step 2)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Cookie Configuration
NEXT_PUBLIC_COOKIE_DOMAIN=localhost
```

3. **Generate NEXTAUTH_SECRET**:

Run one of these commands:
```bash
# Using OpenSSL
openssl rand -base64 32

# Or using Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"

# Or using PowerShell
[Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Maximum 256 }))
```

Copy the output and paste it as your `NEXTAUTH_SECRET`.

### Step 4: Install Dependencies (already done!)

The packages have been installed:
- ✅ next-auth
- ✅ cookies-next
- ✅ react-ga4

### Step 5: Start the Development Server

```bash
npm run dev
```

### Step 6: Test Everything

1. **Open your browser**: http://localhost:3000

2. **Test Cookie Consent**:
   - You should see a cookie banner at the bottom
   - Click "Customize" to see cookie settings
   - Try accepting/rejecting cookies

3. **Test Google Sign-In**:
   - Click "Sign in with Google" in the header
   - Complete the Google authentication
   - You should see your profile picture/avatar
   - Click it to see the dropdown menu
   - Test sign out

4. **Test Analytics** (if accepted cookies):
   - Navigate between pages
   - Check Google Analytics Real-Time report
   - Events should appear within 5-10 minutes

---

## 🔧 Troubleshooting

### Issue: "redirect_uri_mismatch" error

**Solution**: Make sure the redirect URI in Google Console exactly matches:
- `http://localhost:3000/api/auth/callback/google` (for development)
- Include the full path including `/api/auth/callback/google`

### Issue: Cookie banner not appearing

**Solution**: Clear your browser cookies for localhost and refresh

### Issue: Sign-in not working

**Solution**: 
1. Check `.env.local` is in the root directory
2. Verify GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET are correct
3. Restart the dev server after changing .env.local

### Issue: Analytics not tracking

**Solution**:
1. Accept analytics cookies via the banner
2. Check your Measurement ID is correct
3. Wait 5-10 minutes for data to appear in GA4
4. Check browser console for errors

---

## 🎨 Customization

### Change Cookie Banner Design

Edit: `components/CookieConsent.tsx`

### Add More OAuth Providers

Edit: `lib/next-auth-config.ts`

Example for GitHub:
```typescript
import GitHubProvider from "next-auth/providers/github";

providers: [
  GoogleProvider({ /* ... */ }),
  GitHubProvider({
    clientId: process.env.GITHUB_ID!,
    clientSecret: process.env.GITHUB_SECRET!,
  }),
]
```

### Track Custom Events

Use the analytics utilities:

```typescript
import { trackEvent } from '@/lib/analytics';

// Track a button click
trackEvent('User Action', 'Button Click', 'Subscribe Button');

// Track article read
import { trackArticleRead } from '@/lib/analytics';
trackArticleRead('article-id-123', 180); // 180 seconds

// Track search
import { trackSearch } from '@/lib/analytics';
trackSearch('artificial intelligence');
```

### Customize Cookie Categories

Edit: `lib/cookie-manager.ts` and `components/CookieConsent.tsx`

---

## 📚 Files Created

Here's what was added to your project:

### Authentication
- `lib/next-auth-config.ts` - NextAuth configuration
- `app/api/auth/[...nextauth]/route.ts` - Auth API routes
- `types/next-auth.d.ts` - TypeScript types
- `components/AuthProvider.tsx` - Session provider
- `components/SignInButton.tsx` - Google sign-in button
- `components/UserProfile.tsx` - User dropdown menu
- `components/AuthButton.tsx` - Combined auth component

### Analytics & Cookies
- `lib/analytics.ts` - Analytics tracking utilities
- `lib/cookie-manager.ts` - Cookie management
- `lib/use-page-tracking.ts` - Page view tracking hook
- `components/CookieConsent.tsx` - Cookie banner & settings

### Documentation
- `IMPLEMENTATION-GUIDE.md` - Full detailed guide
- `QUICK-START.md` - This file!

### Updated Files
- `app/layout.tsx` - Integrated auth and cookie consent
- `components/GoogleAnalytics.tsx` - Enhanced with cookie consent
- `.env.local.example` - Environment variable template

---

## 🚀 Deployment

### For Production (Vercel, Netlify, etc.)

1. **Add environment variables** in your hosting platform:
   - All the variables from `.env.local`
   - Change `NEXTAUTH_URL` to your production domain

2. **Update Google Cloud Console**:
   - Add production redirect URI: `https://yourdomain.com/api/auth/callback/google`
   - Add authorized JavaScript origin: `https://yourdomain.com`

3. **Update Cookie Domain**:
   - Change `NEXT_PUBLIC_COOKIE_DOMAIN` to your domain (e.g., `objectwire.org`)

4. **Deploy**: Your CI/CD should handle the rest!

---

## 🎯 Next Steps

Now that everything is set up, you can:

1. **Track user behavior**: Events are automatically logged to GA4
2. **Analyze traffic**: Check GA4 dashboard for insights
3. **Customize tracking**: Add custom events for your specific needs
4. **Monitor sign-ins**: Track authentication patterns
5. **Optimize content**: Use analytics data to improve UX

---

## 📞 Need Help?

- Read the full guide: `IMPLEMENTATION-GUIDE.md`
- Check NextAuth docs: https://next-auth.js.org/
- Check GA4 docs: https://developers.google.com/analytics/devguides/collection/ga4

---

**✅ You're all set!** Your site now has Google Sign-In and GDPR-compliant analytics tracking.
