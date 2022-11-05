import React from 'react'

import { ProductCardList } from '@components/product'

const products = [
  {
    name: 'Apple',
    title: 'this is an apple',
    image: '/product-images/Red_Apple.jpg',
    price: 35,
    discount: 10,
  },
  {
    name: 'Banana',
    title: 'this is an apple',
    image: '/product-images/320px-Bananas_white_background_DS.jpg',
    price: 12,
    discount: 10,
  },
  {
    name: 'Grapes',
    title: 'this is an apple',
    image: '/product-images/320px-Table_grapes_on_white.jpg',
    price: 45,
    discount: 10,
  },
  {
    name: 'Pineapple',
    title: 'this is an apple',
    image: '/product-images/286px-Pineapple_and_cross_section.jpg',
    price: 200,
    discount: 10,
  },
]

const HomePage: React.FC = () => {
  return (
    <>
      <ProductCardList products={products} />
    </>
  )
}

export default HomePage
