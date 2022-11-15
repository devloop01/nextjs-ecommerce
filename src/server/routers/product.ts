// import type { ProductSchema } from '~/schema/product'

// import { PrismaClientKnownRequestError } from '@prisma/client/runtime'
import { TRPCError } from '@trpc/server'
import { z } from 'zod'

import { router, publicProcedure } from '../trpc'

export const productRouter = router({
  products: publicProcedure.query(async ({ ctx }) => {
    const products = await ctx.prisma.product.findMany()

    if (!products) {
      throw new TRPCError({
        code: 'NOT_FOUND',
        message: 'no products found!',
      })
    }

    return products
  }),
})
