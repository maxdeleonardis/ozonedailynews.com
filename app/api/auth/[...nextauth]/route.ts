// =============================================================================
// NextAuth — Google + Discord OAuth Providers
// =============================================================================
// Required environment variables (set in Vercel / hosting dashboard):
//
//   GOOGLE_CLIENT_ID         — Google Cloud Console > APIs & Services > Credentials
//   GOOGLE_CLIENT_SECRET     — same as above
//   DISCORD_CLIENT_ID        — Discord Developer Portal > OAuth2 > Client ID
//   DISCORD_CLIENT_SECRET    — Discord Developer Portal > OAuth2 > Client Secret
//   NEXTAUTH_SECRET          — random secret: openssl rand -base64 32
//   NEXTAUTH_URL             — https://www.ozonenetwork.news   (prod)
//                              http://localhost:3000          (local)
//
// Google Cloud Console — Authorized Redirect URIs to add:
//   https://www.ozonenetwork.news/api/auth/callback/google
//   http://localhost:3000/api/auth/callback/google
//
// Discord Dev Portal — OAuth2 Redirect URIs to add:
//   https://www.ozonenetwork.news/api/auth/callback/discord
//   http://localhost:3000/api/auth/callback/discord
// =============================================================================

import NextAuth from 'next-auth';
import { authOptions } from '@/lib/auth-options';

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
