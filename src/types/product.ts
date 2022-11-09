import { Image } from './common'

export interface ProductPrice {
  value: number
  currencyCode?: 'USD' | 'EUR' | 'ARS' | 'GBP' | string
  retailPrice?: number
}

export interface Product {
  id: string
  name: string
  description: string
  descriptionHtml?: string
  sku?: string
  slug?: string
  path?: string
  images: Image[]
  price: ProductPrice
  vendor?: string
}
