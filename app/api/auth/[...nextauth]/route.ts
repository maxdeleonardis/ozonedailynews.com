// =============================================================================
// NextAuth — Discord OAuth Provider
// =============================================================================
// Required environment variables:
//   DISCORD_CLIENT_ID        — from Discord Developer Portal > OAuth2 > Client ID
//   DISCORD_CLIENT_SECRET    — from Discord Developer Portal > OAuth2 > Client Secret
//   NEXTAUTH_SECRET          — random secret, generate with: openssl rand -base64 32
//   NEXTAUTH_URL             — e.g. https://www.objectwire.org
//
// Discord OAuth2 Redirect URI to register in Dev Portal:
//   https://www.objectwire.org/api/auth/callback/discord
// =============================================================================

import NextAuth, { AuthOptions } from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';

export const authOptions: AuthOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID ?? '',
      clientSecret: process.env.DISCORD_CLIENT_SECRET ?? '',
      authorization: {
        params: {
          // Request guilds + email scopes alongside identify
          scope: 'identify email',
        },
      },
    }),
  ],

  // Persist discord username + avatar into the JWT and session
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account?.provider === 'discord' && profile) {
        const p = profile as {
          id?: string;
          username?: string;
          discriminator?: string;
          avatar?: string;
          global_name?: string;
        };
        token.discordId = p.id;
        token.discordUsername = p.global_name || p.username || 'Unknown';
        token.discordDiscriminator = p.discriminator;
        token.discordAvatar = p.avatar
          ? `https://cdn.discordapp.com/avatars/${p.id}/${p.avatar}.png`
          : `https://cdn.discordapp.com/embed/avatars/0.png`;
      }
      return token;
    },

    async session({ session, token }) {
      session.user = {
        ...session.user,
        // @ts-expect-error — extended session fields
        discordId: token.discordId as string,
        discordUsername: token.discordUsername as string,
        discordDiscriminator: token.discordDiscriminator as string,
        discordAvatar: token.discordAvatar as string,
      };
      return session;
    },
  },

  pages: {
    // Redirect back to the page the user was on after sign-in
    signIn: '/api/auth/signin',
    error: '/api/auth/error',
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
