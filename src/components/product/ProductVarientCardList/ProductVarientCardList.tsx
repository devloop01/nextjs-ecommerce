import type { Product, ProductPack } from '@prisma/client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import cn from 'clsx'

import s from './ProductVarientCardList.module.css'

import { ProductVarientCard } from '~/components/product'

interface ProductVarientCardProps {
  className?: string
  product: Product
}

const ProductVarientCardList: React.FC<ProductVarientCardProps> = ({
  className,
  product,
}) => {
  const rootClassName = cn(className, s.root)

  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
  }

  return (
    <div className={rootClassName} onClick={onClick}>
      {product.packs.map((pack, i) => (
        <ProductVarientCard
          pack={pack}
          pricePerUnit={product.pricePerUnit}
          discount={product.discount}
          active={i === 0}
          key={i}
        />
      ))}
    </div>
  )
}

export default ProductVarientCardList
