import type { Product } from '@prisma/client'

import React, { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import cn from 'clsx'

import s from './ProductCard.module.css'

import { QuantityButton } from '~/components/ui'

export interface ProductCardProps {
  className?: string
  product: Product
  variant?: 'available' | 'unavailable'
}

export const ProductCard: React.FC<ProductCardProps> = ({
  className,
  product,
  variant,
}) => {
  const [units, setUnits] = useState<number>(0)
  const [disabled, setDisabled] = useState<boolean>(false)

  const originalPrice = useMemo<number>(() => {
    const currentPrice = product.price.value
    const discountAmount =
      product.price.value * (product.discount.discountPercent / 100)
    return currentPrice + discountAmount
  }, [])

  useEffect(() => {
    setDisabled(() => product.countInStock === 0)
    setUnits(() => 1 + Math.floor(Math.random() * 5))
  }, [])

  return (
    <div className={cn(s.root, className)}>
      <Link
        href={`/products/${product.id}`}
        aria-label={product.name}
        className={s.link}
      >
        <div className={s.imageContainer}>
          <Image
            src={product.defaultImage.url}
            alt={product.name}
            className={s.productImage}
            width={320}
            height={320}
          />
        </div>

        <div className={s.detailsContainer}>
          <span className={s.name}>{product.name}</span>

          <div className="flex justify-between">
            <span className={s.units}>Quantity: {units} kg</span>
            <div className={s.priceContainer}>
              {product.discount.active ? (
                <>
                  <span className={s.price}>₹{product.price.value}</span>
                  <span className={s.price}>₹{originalPrice}</span>
                </>
              ) : (
                <span className={s.price}>₹{originalPrice}</span>
              )}
            </div>
          </div>

          {product.discount.active && (
            <div className={s.offer}>
              <span> {product.discount.discountPercent} % off</span>
            </div>
          )}
        </div>
      </Link>

      <div className={s.actions}>
        <div className={s.actionsContainer}>
          <QuantityButton
            width="w-full"
            maxQuantity={product.countInStock}
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  )
}

export default ProductCard
