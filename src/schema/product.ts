// import { Product, ProductPrice, Image } from '@prisma/client'
import { z } from 'zod'

export const imageSchema = z.object({
  url: z.string(),
  alt: z.string().optional(),
})

export const productPriceSchema = z.object({
  value: z.number(),
  currencyCode: z.string().optional(),
})

export const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: productPriceSchema,
  defaultImage: imageSchema,
  images: z.array(imageSchema),
  slug: z.string(),
})

export type ImageSchema = z.TypeOf<typeof imageSchema>
export type ProductPriceSchema = z.TypeOf<typeof productPriceSchema>
export type ProductSchema = z.TypeOf<typeof productSchema>
