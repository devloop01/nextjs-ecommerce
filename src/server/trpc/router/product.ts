// import { PrismaClientKnownRequestError } from '@prisma/client/runtime'
import { TRPCError } from '@trpc/server'
import { z } from 'zod'

import { router, publicProcedure } from '../trpc'

export const productByIdInput = z.object({ id: z.string() })

export const productRouter = router({
  all: publicProcedure.query(async ({ ctx }) => {
    const products = await ctx.prisma.product.findMany()

    if (!products) {
      throw new TRPCError({
        code: 'NOT_FOUND',
        message: 'no products found!',
      })
    }

    return products
  }),

  byId: publicProcedure
    .input(productByIdInput)
    .query(async ({ ctx, input }) => {
      const product = await ctx.prisma.product.findUnique({
        where: {
          id: input.id,
        },
      })

      if (!product) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'Product Not Found!',
        })
      }

      return product
    }),
})
