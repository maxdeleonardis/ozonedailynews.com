# Testing Checklist for Google Sign-In & Analytics

Use this checklist to verify everything works correctly.

## ✅ Pre-Testing Setup

- [ ] `.env.local` file created with all required variables
- [ ] NEXTAUTH_SECRET generated and added
- [ ] Google OAuth credentials configured
- [ ] Google Analytics Measurement ID added
- [ ] Dependencies installed (`npm install` completed)
- [ ] Development server running (`npm run dev`)

---

## 🔐 Google Sign-In Tests

### Basic Authentication Flow
- [ ] Sign-in button appears in header (when not signed in)
- [ ] Clicking "Sign in with Google" opens Google OAuth
- [ ] Can complete Google authentication successfully
- [ ] Redirected back to site after authentication
- [ ] User profile picture/avatar appears in header
- [ ] Clicking avatar opens dropdown menu
- [ ] Dropdown shows user name and email
- [ ] Can navigate to account settings (if implemented)
- [ ] "Sign Out" button appears in dropdown
- [ ] Signing out works and returns to sign-in button
- [ ] Session persists on page refresh

### Error Handling
- [ ] Proper error message if OAuth fails
- [ ] Handles cancelled authentication gracefully
- [ ] Loading state shows during authentication

---

## 🍪 Cookie Consent Tests

### Initial Visit
- [ ] Cookie banner appears at bottom on first visit
- [ ] Banner has clear message about cookies
- [ ] Three buttons visible: "Customize", "Reject All", "Accept All"
- [ ] Privacy policy link works

### Accept All Flow
- [ ] Clicking "Accept All" closes banner
- [ ] Preferences saved (banner doesn't reappear on refresh)
- [ ] Google Analytics starts loading
- [ ] Analytics cookies set in browser

### Reject All Flow
- [ ] Clicking "Reject All" closes banner
- [ ] Preferences saved
- [ ] Only essential cookies remain
- [ ] Analytics scripts don't load
- [ ] No GA cookies in browser

### Customize Flow
- [ ] Clicking "Customize" opens settings modal
- [ ] Modal shows 4 cookie categories:
  - Essential (always on, greyed out)
  - Analytics (toggleable)
  - Marketing (toggleable)
  - Preferences (toggleable)
- [ ] Each category has clear description
- [ ] Toggles work smoothly
- [ ] "Save Preferences" saves and closes modal
- [ ] Saved preferences persist on refresh

### Cookie Settings Modal
- [ ] Modal has close button (X)
- [ ] Clicking outside modal doesn't close it
- [ ] "Reject All" button works from modal
- [ ] Toggle switches have smooth animation
- [ ] Essential cookies toggle is disabled

---

## 📊 Analytics Tests

### Page View Tracking
- [ ] Navigate to homepage
- [ ] Check GA4 Real-Time report shows page view
- [ ] Navigate to different pages
- [ ] Each navigation tracked in GA4
- [ ] Page titles appear correctly in GA4

### Custom Event Tracking
Test these if implemented in your components:

- [ ] User sign-in tracked as event
- [ ] User sign-out tracked as event
- [ ] Article reads tracked with duration
- [ ] Search queries tracked
- [ ] Outbound links tracked
- [ ] Newsletter signups tracked

### Cookie Consent Respect
- [ ] With cookies rejected: No GA events sent
- [ ] After accepting cookies: GA events start sending
- [ ] Cookie preferences respected on page reload

---

## 🎨 UI/UX Tests

### Responsive Design
- [ ] Cookie banner looks good on mobile
- [ ] Cookie settings modal scrolls on mobile
- [ ] Auth button works on mobile
- [ ] User dropdown accessible on mobile
- [ ] Sign-in button responsive

### Visual Polish
- [ ] Google logo appears correctly on sign-in button
- [ ] User avatar displays properly (or initials)
- [ ] Dropdown menu styled consistently
- [ ] Cookie banner doesn't block content
- [ ] No layout shift when banner appears

### Accessibility
- [ ] Can tab through cookie banner buttons
- [ ] Can close modal with Escape key
- [ ] Focus states visible on all interactive elements
- [ ] Screen reader friendly labels

---

## 🔒 Security Tests

### Session Management
- [ ] Session expires after 30 days (or configured time)
- [ ] Can't access protected pages without auth (if any)
- [ ] Session cookie has Secure flag in production
- [ ] Session cookie has HttpOnly flag

### Cookie Security
- [ ] Cookies use SameSite=Lax
- [ ] No sensitive data in cookies
- [ ] Cookie preferences properly encoded
- [ ] No XSS vulnerabilities in cookie handling

---

## 🌐 Browser Compatibility

Test in multiple browsers:

### Chrome/Edge
- [ ] Sign-in works
- [ ] Cookie banner works
- [ ] Analytics tracks

### Firefox
- [ ] Sign-in works
- [ ] Cookie banner works
- [ ] Analytics tracks

### Safari
- [ ] Sign-in works
- [ ] Cookie banner works
- [ ] Analytics tracks
- [ ] ITP doesn't break functionality

### Mobile Browsers
- [ ] iOS Safari works
- [ ] Android Chrome works

---

## 🚀 Production Tests

### Environment Setup
- [ ] Production environment variables set
- [ ] NEXTAUTH_URL set to production domain
- [ ] Google OAuth production redirect URI added
- [ ] Cookie domain set to production domain

### Build & Deploy
- [ ] `npm run build` completes without errors
- [ ] No TypeScript errors
- [ ] No console warnings in production
- [ ] All pages render correctly

### Production Functionality
- [ ] Google Sign-In works on production URL
- [ ] Cookie banner appears for new visitors
- [ ] Analytics tracks on production
- [ ] Session persists across production pages

---

## 🐛 Common Issues & Solutions

### Issue: redirect_uri_mismatch
**Check**: Google Console redirect URI exactly matches your callback URL

### Issue: Cookie banner not appearing
**Solution**: Clear all cookies for the domain and refresh

### Issue: Analytics not tracking
**Check**: 
1. Cookie consent accepted
2. Measurement ID correct
3. Wait 5-10 minutes
4. Check browser console for errors

### Issue: Session not persisting
**Check**:
1. NEXTAUTH_SECRET is set
2. NEXTAUTH_URL matches current domain
3. Cookies enabled in browser

### Issue: Build errors
**Solution**: 
1. Run `npm install` again
2. Delete `.next` folder
3. Run `npm run build` again

---

## 📈 Performance Tests

### Load Time
- [ ] Cookie banner loads quickly
- [ ] Auth check doesn't block page render
- [ ] Analytics script loads asynchronously

### Network
- [ ] No unnecessary network requests
- [ ] Analytics events batched appropriately
- [ ] OAuth redirects work smoothly

---

## ✅ Final Checklist

Before deploying to production:

- [ ] All tests above passed
- [ ] Documentation reviewed
- [ ] Environment variables set in hosting platform
- [ ] Google Cloud Console production URIs added
- [ ] Privacy policy updated with cookie information
- [ ] Terms of service includes authentication terms
- [ ] Analytics dashboard set up and monitored
- [ ] Error tracking configured (Sentry, etc.)

---

## 📝 Notes

Record any issues found during testing:

```
Issue:
Steps to reproduce:
Expected behavior:
Actual behavior:
Solution:
```

---

**Last Updated**: January 16, 2026
**Tested By**: _________________
**Date**: _________________
**Environment**: [ ] Development [ ] Production
**Result**: [ ] PASS [ ] FAIL

---

## 🎉 Success Criteria

All tests passed when:
- ✅ Users can sign in with Google
- ✅ Cookie consent banner works properly
- ✅ User preferences are respected
- ✅ Analytics tracks correctly
- ✅ Session management is secure
- ✅ Works across all browsers
- ✅ Production deployment successful
