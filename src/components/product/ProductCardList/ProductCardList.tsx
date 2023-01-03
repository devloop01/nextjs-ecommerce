import type { Product } from '@prisma/client'

import { FC } from 'react'

import s from './ProductCardList.module.css'

import ProductCard from '../ProductCard'

type Props = {
  products: Product[]
}

const ProductCardList: FC<Props> = ({ products }) => {
  return (





    <div className='grid grid-cols-4 gap-1'>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  )
}

export default ProductCardList
