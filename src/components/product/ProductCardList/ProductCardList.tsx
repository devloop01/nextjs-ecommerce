import { FC } from 'react'

import s from './ProductCardList.module.css'

import ProductCard from '../ProductCard'

interface Product {
  slug?: string
  image: string
  name: string
  title: string
  price: number
  discount: number
}

type Props = {
  products: Product[]
}

const ProductCardList: FC<Props> = ({ products }) => {
  return (
    <div className="container mx-auto my-6">
      <div className="flex flex-wrap gap-3">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductCardList
