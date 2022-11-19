import type { Product } from '@prisma/client'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ProductCard } from '../ProductCard'

export default {
  title: 'Product/Product Card',
  component: ProductCard,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof ProductCard>

const Template: ComponentStory<typeof ProductCard> = (args) => (
  <ProductCard {...args} />
)

const product: Product = {
  id: '',
  name: 'Apple',
  price: { value: 10, currencyCode: 'INR' },
  defaultImage: { url: '/public/product-images/Red_Apple.jpg', alt: 'apple' },
  images: [{ url: '/public/product-images/Red_Apple.jpg', alt: 'apple' }],
  slug: 'apple',
}

export const Default = Template.bind({})
Default.args = {
  product,
  className: '',
}
