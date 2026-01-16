# Google Sign-In & Advanced Analytics Implementation Guide

## 🎯 Overview
This guide walks you through implementing:
1. **Google Sign-In** with NextAuth.js
2. **Advanced Cookie Tracking** with GDPR compliance
3. **Google Analytics 4** with enhanced event tracking
4. **Cookie Consent Management** system

---

## 📋 Table of Contents
- [Prerequisites](#prerequisites)
- [Step 1: Google Cloud Console Setup](#step-1-google-cloud-console-setup)
- [Step 2: Environment Variables](#step-2-environment-variables)
- [Step 3: Install Dependencies](#step-3-install-dependencies)
- [Step 4: NextAuth Configuration](#step-4-nextauth-configuration)
- [Step 5: Authentication Components](#step-5-authentication-components)
- [Step 6: Analytics & Cookie Tracking](#step-6-analytics--cookie-tracking)
- [Step 7: Cookie Consent Banner](#step-7-cookie-consent-banner)
- [Step 8: Integration](#step-8-integration)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before starting, ensure you have:
- A Google Cloud Platform account
- Access to your Next.js project
- Node.js 18+ installed
- A domain name (for production OAuth)

---

## Step 1: Google Cloud Console Setup

### 1.1 Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click **Select a project** → **New Project**
3. Enter project name: `ObjectWire Auth`
4. Click **Create**

### 1.2 Enable Google+ API

1. In the sidebar, go to **APIs & Services** → **Library**
2. Search for "Google+ API"
3. Click **Enable**

### 1.3 Configure OAuth Consent Screen

1. Go to **APIs & Services** → **OAuth consent screen**
2. Select **External** (or Internal if using Google Workspace)
3. Click **Create**
4. Fill in the required fields:
   - **App name**: ObjectWire
   - **User support email**: your email
   - **Developer contact email**: your email
5. Add scopes (optional): `openid`, `profile`, `email`
6. Click **Save and Continue**
7. Add test users (in development)
8. Click **Save and Continue**

### 1.4 Create OAuth 2.0 Credentials

1. Go to **APIs & Services** → **Credentials**
2. Click **Create Credentials** → **OAuth client ID**
3. Select **Web application**
4. Configure:
   - **Name**: ObjectWire Web Client
   - **Authorized JavaScript origins**: 
     - `http://localhost:3000` (development)
     - `https://objectwire.org` (production)
   - **Authorized redirect URIs**:
     - `http://localhost:3000/api/auth/callback/google` (development)
     - `https://objectwire.org/api/auth/callback/google` (production)
5. Click **Create**
6. **Copy** the Client ID and Client Secret (you'll need these!)

### 1.5 Set Up Google Analytics 4 (GA4)

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click **Admin** (bottom left)
3. Create a new **Property** (if you don't have one)
4. Fill in property details:
   - **Property name**: ObjectWire
   - **Timezone**: Your timezone
   - **Currency**: USD
5. Click **Next** → **Create**
6. Set up a **Web Data Stream**:
   - **Website URL**: `https://objectwire.org`
   - **Stream name**: ObjectWire Production
7. Copy your **Measurement ID** (format: G-XXXXXXXXXX)

---

## Step 2: Environment Variables

Create a `.env.local` file in your project root:

```env
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-random-secret-here-generate-with-openssl

# Google OAuth
GOOGLE_CLIENT_ID=your-client-id-from-google-console.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-client-secret-from-google-console

# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Cookie Consent
NEXT_PUBLIC_COOKIE_DOMAIN=objectwire.org
```

### Generate NEXTAUTH_SECRET:

Run this command in your terminal:

```bash
openssl rand -base64 32
```

Or use Node.js:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

⚠️ **Important**: Add `.env.local` to your `.gitignore` file!

---

## Step 3: Install Dependencies

Run the following command to install all required packages:

```bash
npm install next-auth@latest cookies-next react-ga4 @analytics/google-analytics
```

Or with yarn:

```bash
yarn add next-auth@latest cookies-next react-ga4 @analytics/google-analytics
```

### Package Breakdown:
- **next-auth**: Authentication library for Next.js
- **cookies-next**: Cookie management utility
- **react-ga4**: Google Analytics 4 for React
- **@analytics/google-analytics**: Enhanced analytics tracking

---

## Step 4: NextAuth Configuration

### 4.1 Create NextAuth API Route

Create file: `app/api/auth/[...nextauth]/route.ts`

This file handles all authentication routes (/api/auth/signin, /api/auth/signout, etc.)

### 4.2 Create Auth Configuration

Create file: `lib/auth.ts`

This contains your NextAuth configuration with Google provider.

### 4.3 Session Type Definitions

Create file: `types/next-auth.d.ts`

This provides TypeScript types for the session object.

---

## Step 5: Authentication Components

### 5.1 Session Provider Wrapper

Create file: `components/AuthProvider.tsx`

This wraps your app to provide session context.

### 5.2 Sign-In Button

Create file: `components/SignInButton.tsx`

A button component that triggers Google Sign-In.

### 5.3 User Profile Dropdown

Create file: `components/UserProfile.tsx`

Displays user info and sign-out option when authenticated.

---

## Step 6: Analytics & Cookie Tracking

### 6.1 Analytics Utility

Create file: `lib/analytics.ts`

Handles all GA4 events and custom tracking.

### 6.2 Cookie Manager

Create file: `lib/cookie-manager.ts`

Manages cookie consent and storage.

### 6.3 Analytics Events

The system tracks:
- Page views
- User authentication events
- Article reads (time on page)
- Link clicks
- Search queries
- Social shares
- Newsletter signups
- Custom events

---

## Step 7: Cookie Consent Banner

### 7.1 Cookie Consent Component

Create file: `components/CookieConsent.tsx`

GDPR-compliant banner for managing cookie preferences.

### 7.2 Cookie Settings Modal

Create file: `components/CookieSettings.tsx`

Allows users to customize their cookie preferences:
- Essential cookies (always enabled)
- Analytics cookies (optional)
- Marketing cookies (optional)
- Preferences cookies (optional)

---

## Step 8: Integration

### 8.1 Update Root Layout

Modify `app/layout.tsx` to include:
- AuthProvider
- CookieConsent
- Enhanced GoogleAnalytics

### 8.2 Add Navigation Authentication

Update your navigation/header to show:
- Sign In button (when logged out)
- User Profile (when logged in)

---

## 🧪 Testing

### Test Google Sign-In

1. Start dev server: `npm run dev`
2. Navigate to `http://localhost:3000`
3. Click "Sign In with Google"
4. Complete Google authentication
5. Verify user info displays correctly
6. Test sign out

### Test Cookie Consent

1. Open browser DevTools → Application → Cookies
2. Clear all cookies
3. Refresh the page
4. Cookie consent banner should appear
5. Accept/Reject cookies
6. Verify preferences are saved
7. Check that GA4 loads only if accepted

### Test Analytics

1. Go to [GA4 Real-Time Report](https://analytics.google.com/)
2. Navigate your site
3. Verify events appear in real-time:
   - Page views
   - Sign in events
   - Custom events

### Test Production

1. Build the app: `npm run build`
2. Start production server: `npm start`
3. Test all features in production mode

---

## 🔧 Troubleshooting

### Google Sign-In Issues

**Error: "redirect_uri_mismatch"**
- Ensure redirect URIs in Google Console exactly match your app URL
- Include `/api/auth/callback/google` path
- Check for http vs https

**Error: "NEXTAUTH_SECRET missing"**
- Generate a secret: `openssl rand -base64 32`
- Add to `.env.local`

**Session not persisting**
- Check that cookies are enabled in browser
- Verify NEXTAUTH_URL matches your domain
- Clear browser cache and cookies

### Analytics Not Working

**GA4 not receiving events**
- Check Measurement ID is correct
- Verify cookie consent was accepted
- Check browser console for errors
- Disable ad blockers for testing

**Real-time reports empty**
- Wait 5-10 minutes for data to appear
- Check that GA4 script is loading (DevTools → Network)
- Verify `gtag` function exists in console

### Cookie Issues

**Cookies not saving**
- Check domain settings in `.env.local`
- Verify browser allows third-party cookies
- Check cookie expiration settings

**GDPR compliance**
- Ensure banner appears before any tracking
- Make rejection easy (same prominence as accept)
- Store user preferences

---

## 📚 Additional Resources

### Documentation
- [NextAuth.js Docs](https://next-auth.js.org/)
- [Google Analytics 4 Docs](https://developers.google.com/analytics/devguides/collection/ga4)
- [Google OAuth 2.0 Guide](https://developers.google.com/identity/protocols/oauth2)

### Privacy & Compliance
- [GDPR Cookie Consent Requirements](https://gdpr.eu/cookies/)
- [Google Analytics Data Privacy](https://support.google.com/analytics/answer/6004245)

### Best Practices
- Always obtain consent before tracking
- Provide clear opt-out mechanisms
- Implement proper data retention policies
- Use anonymization when possible

---

## 🎉 Success Checklist

- [ ] Google OAuth credentials created
- [ ] Environment variables configured
- [ ] Dependencies installed
- [ ] NextAuth routes working
- [ ] Google Sign-In functional
- [ ] User session persists
- [ ] Cookie consent banner displays
- [ ] User preferences saved
- [ ] GA4 receiving events
- [ ] Real-time tracking verified
- [ ] All tests passing
- [ ] Production deployment successful

---

## 📝 Notes

- **Security**: Never commit `.env.local` to version control
- **Privacy**: Always honor user cookie preferences
- **Performance**: Analytics scripts load asynchronously
- **Compliance**: Regularly review GDPR/CCPA requirements
- **Monitoring**: Check GA4 reports weekly for anomalies

---

## 🆘 Need Help?

If you encounter issues:
1. Check the troubleshooting section above
2. Review browser console for errors
3. Verify all environment variables are set
4. Check Google Cloud Console for API status
5. Review NextAuth.js documentation

---

**Last Updated**: January 2026
**Version**: 1.0.0
