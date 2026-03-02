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
//   NEXTAUTH_URL             — https://www.objectwire.org   (prod)
//                              http://localhost:3000          (local)
//
// Google Cloud Console — Authorized Redirect URIs to add:
//   https://www.objectwire.org/api/auth/callback/google
//   http://localhost:3000/api/auth/callback/google
//
// Discord Dev Portal — OAuth2 Redirect URIs to add:
//   https://www.objectwire.org/api/auth/callback/discord
//   http://localhost:3000/api/auth/callback/discord
// =============================================================================

import NextAuth, { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import DiscordProvider from 'next-auth/providers/discord';

export const authOptions: AuthOptions = {
  providers: [
    // ── Google Sign-In ──────────────────────────────────────────────────────
    GoogleProvider({
      clientId:     process.env.GOOGLE_CLIENT_ID     ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
      authorization: {
        params: {
          // Force account chooser so users can switch accounts
          prompt: 'select_account',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),

    // ── Discord Sign-In (used by DiscordComments) ───────────────────────────
    DiscordProvider({
      clientId:     process.env.DISCORD_CLIENT_ID     ?? '',
      clientSecret: process.env.DISCORD_CLIENT_SECRET ?? '',
      authorization: {
        params: {
          scope: 'identify email',
        },
      },
    }),
  ],

  // Persist provider-specific fields into the JWT so they're available
  // in session.user on the client.
  callbacks: {
    async jwt({ token, account, profile }) {
      // ── Google ────────────────────────────────────────────────────────────
      if (account?.provider === 'google' && profile) {
        const p = profile as {
          sub?: string;
          name?: string;
          email?: string;
          picture?: string;
        };
        token.provider = 'google';
        token.googleId = p.sub;
        token.name     = p.name;
        token.email    = p.email;
        token.picture  = p.picture;
      }

      // ── Discord ───────────────────────────────────────────────────────────
      if (account?.provider === 'discord' && profile) {
        const p = profile as {
          id?: string;
          username?: string;
          discriminator?: string;
          avatar?: string;
          global_name?: string;
        };
        token.provider             = 'discord';
        token.discordId            = p.id;
        token.discordUsername      = p.global_name || p.username || 'Unknown';
        token.discordDiscriminator = p.discriminator;
        token.discordAvatar        = p.avatar
          ? `https://cdn.discordapp.com/avatars/${p.id}/${p.avatar}.png`
          : `https://cdn.discordapp.com/embed/avatars/0.png`;
      }

      return token;
    },

    async session({ session, token }) {
      session.user = {
        ...session.user,
        // @ts-expect-error — extended session fields
        provider:             token.provider,
        googleId:             token.googleId,
        discordId:            token.discordId,
        discordUsername:      token.discordUsername,
        discordDiscriminator: token.discordDiscriminator,
        discordAvatar:        token.discordAvatar,
      };
      return session;
    },
  },

  pages: {
    signIn: '/api/auth/signin',
    error:  '/api/auth/error',
  },

  // Secure cookies on production (HTTPS). NextAuth sets this automatically
  // when NEXTAUTH_URL starts with https://, but we make it explicit.
  useSecureCookies: process.env.NEXTAUTH_URL?.startsWith('https://') ?? false,

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
