// =============================================================================
// NextAuth shared authOptions — imported by the route handler and any
// server-side code that needs getServerSession(authOptions).
// =============================================================================

import type { AuthOptions } from 'next-auth';
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

  useSecureCookies: process.env.NEXTAUTH_URL?.startsWith('https://') ?? false,

  secret: process.env.NEXTAUTH_SECRET,
};
