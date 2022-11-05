import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import cn from 'clsx'

import s from './ProductCard.module.css'

import { QuantityButton } from '@components/ui'

interface Props {
  className?: string
  product: {
    slug?: string
    image: string
    name: string
    title: string
    price: number
    discount: number
  }
}

const ProductCard: React.FC<Props> = ({ className, product }) => {
  const [quantity, setQuantity] = useState<number>(0)

  const increateQuantity = (n = 1) => {
    setQuantity((v) => v + n)
  }

  return (
    <Link href="/" aria-label={product.name} className={cn(s.root, className)}>
      <div className={s.imageContainer}>
        <Image
          src={product.image}
          alt={product.name}
          className={s.productImage}
          quality="85"
          width={320}
          height={320}
        />
      </div>
      <div className={s.detailsContainer}>
        <div className={s.details}>
          <span className={s.name}>{product.name}</span>
          <div className="flex justify-between">
            <span className={s.units}>10 units</span>
            <span className={s.price}>Rs. {product.price}</span>
          </div>
        </div>
        <div className={s.actions}>
          <QuantityButton
            className="w-full"
            quantity={quantity}
            increase={() => increateQuantity(1)}
            decrease={() => increateQuantity(-1)}
          />
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
