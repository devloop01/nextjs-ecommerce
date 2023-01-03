import type {
  ProductDiscount,
  ProductPack,
  ProductPricePerUnit,
} from '@prisma/client'

import React, { useCallback, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import cn from 'clsx'

import s from './ProductVarientCard.module.css'

interface ProductVarientCardProps {
  className?: string
  pricePerUnit: ProductPricePerUnit
  pack: ProductPack
  discount: ProductDiscount
  active?: boolean
}

const ProductVarientCard: React.FC<ProductVarientCardProps> = ({
  className,
  pricePerUnit,
  pack,
  discount,
  active = false,
}) => {
  const rootClassName = cn(className, s.root)
  const rootContainerClassName = cn(s.rootContainer, {
    'rounded-lg border-gray-300': !active,
    'border-green-300': active,
  })

  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
  }

  const convert = useCallback((q: number, u: string) => {
    if (u === 'g') {
      return q / 1000
    }
    return q
  }, [])

  const [currentPrice, setCurrentPrice] = useState<number>(0)
  const [discountedPrice, setDiscountedPrice] = useState<number>(0)

  useEffect(() => {
    setCurrentPrice(() => {
      const p = convert(pack.amount, pack.unit) * pricePerUnit.price
      setDiscountedPrice(() => p - (p * discount.value) / 100)
      return p
    })
  }, [])

  return (
    <div className={rootClassName} onClick={onClick}>
      <div className={rootContainerClassName}>
        <div className={s.radio}>
          <div className={cn(s.radioInner, !active && 'hidden')}></div>
        </div>
        <div className={s.details}>
          <p className="font-bold">
            {pack.amount}
            {pack.unit}
          </p>

          <div className="mt-0.5">
            <span className="mr-2 font-medium">₹{discountedPrice}</span>
            <span className="text-gray-400 line-through">₹{currentPrice}</span>
          </div>
        </div>
      </div>
      <div className={cn(s.offer, !active && 'hidden')}>
        {discount.value}% OFF
      </div>
    </div>
  )
}

export default ProductVarientCard
