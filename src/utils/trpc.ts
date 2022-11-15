import type { AppRouter } from '~/server/routers/_app'

import { loggerLink, httpBatchLink } from '@trpc/client'
import { createTRPCNext } from '@trpc/next'
import superjson from 'superjson'

function getBaseUrl() {
  if (typeof window !== 'undefined') return ''

  if (process.env.NEXT_PUBLIC_VERCEL_URL)
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`

  return `http://localhost:${process.env.PORT ?? 3000}`
}

export const trpc = createTRPCNext<AppRouter>({
  config({ ctx }) {
    return {
      queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
      headers() {
        if (ctx?.req) {
          return {
            ...ctx.req.headers,
            'x-ssr': 1,
          }
        }
        return {}
      },
      links: [
        loggerLink(),
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
          maxURLLength: 2083,
        }),
      ],
      transformer: superjson,
    }
  },
  ssr: true,
})
