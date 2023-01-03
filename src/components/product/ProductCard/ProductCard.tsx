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
  const originalPrice = useMemo<number>(() => {
    const currentPrice = product.pricePerUnit.price
    const discountAmount =
      product.pricePerUnit.price * (product.discount.value / 100)
    return currentPrice + discountAmount
  }, [])

  return (
    <div className={cn(s.root, className)}>
      <Link
        href={`/products/${product.id}`}
        aria-label={product.title}
        className={s.link}
      >
        <div className={s.imageContainer}>
          <Image
            src={product.images[0].url}
            alt={product.title}
            className={s.productImage}
            width={320}
            height={320}
          />
        </div>

        <div className={s.detailsContainer}>
          <span className={s.name}>{product.title}</span>

          <div className="flex justify-between">
            <span className={s.units}>
              Quantity: {product.packs[0].amount} {product.packs[0].unit}
            </span>
            <div className={s.priceContainer}>
              {product.discount ? (
                <>
                  <span className={s.price}>₹{product.pricePerUnit.price}</span>
                  <span className={s.price}>₹{originalPrice}</span>
                </>
              ) : (
                <span className={s.price}>₹{originalPrice}</span>
              )}
            </div>
          </div>

          {product.discount && (
            <div className={s.offer}>
              <span> {product.discount.value} % off</span>
            </div>
          )}
        </div>
      </Link>

      <div className={s.actions}>
        <div className={s.actionsContainer}>
          <QuantityButton
            width="w-full"
            maxQuantity={10}
            disabled={!product.inStock}
          />
        </div>
      </div>
    </div>
  )
}

export default ProductCard
