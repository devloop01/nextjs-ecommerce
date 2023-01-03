import z from 'zod'

import { router, publicProcedure } from '../trpc'

// routers
import { productRouter } from './product'

export const appRouter = router({
  // route: /api/trpc/hello
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .output(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        text: 'Hello from server using tRPC!! your text is : ' + input.text,
      }
    }),

  // route: /api/product
  product: productRouter,
})

export type AppRouter = typeof appRouter
