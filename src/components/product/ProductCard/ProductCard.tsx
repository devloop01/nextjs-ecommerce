import type { Product } from '@prisma/client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import cn from 'clsx'

import s from './ProductCard.module.css'

import { QuantityButton } from '~/components/ui'

export interface ProductCardProps {
  className?: string
  product: Product
}

export const ProductCard: React.FC<ProductCardProps> = ({
  className,
  product,
}) => {
  const [maxQuantity, setMaxQuantity] = useState<number>(() =>
    Math.floor(Math.random() * 8)
  )
  const [innerText, setInnerText] = useState<string | null>(null)
  const [offer, setOffer] = useState<number>(0)
  const [units, setUnits] = useState<number>(0)
  const [disabled, setDisabled] = useState<boolean>(false)

  useEffect(() => {
    setInnerText(() => (maxQuantity === 0 ? 'Out Of Stock' : null))
    setDisabled(() => maxQuantity === 0)
    setOffer(() => 5 + Math.floor(Math.random() * 12))
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
            quality="85"
            width={320}
            height={320}
          />
        </div>

        <div className={s.detailsContainer}>
          <span className={s.name}>{product?.name}</span>

          <div className="flex justify-between">
            <span className={s.units}>{units} kg</span>
            <div className={s.priceContainer}>
              <span className={s.price}>
                Rs. {product?.price?.value - units}
              </span>
              <span className={s.price}>Rs. {product?.price?.value}</span>
            </div>
          </div>

          <div className={s.offer}>
            <span> {offer} % off</span>
          </div>
        </div>
      </Link>

      <div className={s.actions}>
        <div className={s.actionsContainer}>
          <QuantityButton
            width="w-full"
            maxQuantity={maxQuantity}
            innerText={innerText}
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  )
}

export default ProductCard
