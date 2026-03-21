// =============================================================================
// NextAuth configuration — kept in /lib so it can be imported by any server
// file without triggering the Next.js "invalid Route export" error.
// =============================================================================

import { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import DiscordProvider from 'next-auth/providers/discord';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { createClient } from '@/lib/supabase/server';

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

    // ── Discord Sign-In ─────────────────────────────────────────────────────
    DiscordProvider({
      clientId:     process.env.DISCORD_CLIENT_ID     ?? '',
      clientSecret: process.env.DISCORD_CLIENT_SECRET ?? '',
      authorization: {
        params: {
          scope: 'identify email',
        },
      },
    }),

    // ── Email + Password Sign-In ────────────────────────────────────────────
    CredentialsProvider({
      name: 'Email',
      credentials: {
        email:    { label: 'Email',    type: 'email'    },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const email = credentials.email.toLowerCase().trim();
        const supabase = await createClient();

        const { data: cred } = await supabase
          .from('user_credentials')
          .select('user_hash, email, password_hash')
          .eq('email', email)
          .single();

        if (!cred) return null;

        const valid = await bcrypt.compare(credentials.password, cred.password_hash);
        if (!valid) return null;

        // Fetch display name from public_profiles if it exists
        const { data: profile } = await supabase
          .from('public_profiles')
          .select('display_name, avatar_url')
          .eq('user_hash', cred.user_hash)
          .single();

        return {
          id:    cred.user_hash,
          email: cred.email,
          name:  profile?.display_name ?? email.split('@')[0],
          image: profile?.avatar_url ?? null,
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, account, profile, user }) {
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

      if (account?.provider === 'credentials' && user) {
        token.provider = 'email';
        token.email    = user.email ?? undefined;
        token.name     = user.name  ?? undefined;
        token.picture  = user.image ?? undefined;
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
