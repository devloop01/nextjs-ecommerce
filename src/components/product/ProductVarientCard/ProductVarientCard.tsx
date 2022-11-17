import type { Product } from '@prisma/client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import cn from 'clsx'

import s from './ProductVarientCard.module.css'

interface ProductVarientCardProps {
  className?: string
  product: Product
  active?: boolean
}

const ProductVarientCard: React.FC<ProductVarientCardProps> = ({
  className,
  product,
  active = false,
}) => {
  const productDetails = {
    units: 2,
    amount: 1,
    price: {
      current: 77,
      real: 100,
    },
    offer: 23,
  }

  const rootClassName = cn(className, s.root)
  const rootContainerClassName = cn(s.rootContainer, {
    'rounded-lg border-gray-300': !active,
    'border-green-300': active,
  })

  return (
    <div className={rootClassName}>
      <div className={rootContainerClassName}>
        <div className={s.radio}>
          <div className={cn(s.radioInner, !active && 'hidden')}></div>
        </div>
        <div className={s.details}>
          <p className="font-bold">
            {productDetails.amount} x {productDetails.units} kg
          </p>

          <div className="mt-0.5">
            <span className="mr-2 font-medium">
              ₹{productDetails.price.current}
            </span>
            <span className="text-gray-400 line-through">
              ₹{productDetails.price.real}
            </span>
          </div>
        </div>
      </div>
      <div className={cn(s.offer, !active && 'hidden')}>
        {productDetails.offer}% OFF
      </div>
    </div>
  )
}

export default ProductVarientCard
