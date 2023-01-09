import * as trpcNext from '@trpc/server/adapters/next'

import { env } from '~/env/server.mjs'
import { appRouter } from '~/server/trpc/router/_app'
import { createContext } from '~/server/trpc/context'

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
  onError:
    env.NODE_ENV === 'development'
      ? ({ path, error }) => {
          console.error(`❌ tRPC failed on ${path}: ${error}`)
        }
      : undefined,
})
