import { AuthOptions } from 'next-auth/core/types'
import NextAuth from 'next-auth'
import DiscordProvider from 'next-auth/providers/discord'

import { env } from '~/env/server.mjs'
import { prisma } from '~/server/db/client'

export const authOptions: AuthOptions = {
  callbacks: {
    session({ session, token, user }) {
      if (session.user) {
        session.user.id = user.id
      }
      return session
    },
  },

  providers: [
    DiscordProvider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),
  ],
}

export default NextAuth(authOptions)
