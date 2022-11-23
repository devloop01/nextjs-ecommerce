import { TRPCError, initTRPC } from '@trpc/server'
import superjson from 'superjson'

import { Context } from './context'

const t = initTRPC.context<Context>().create({ transformer: superjson })

export const router = t.router
export const middleware = t.middleware
export const mergeRouters = t.mergeRouters
export const publicProcedure = t.procedure
