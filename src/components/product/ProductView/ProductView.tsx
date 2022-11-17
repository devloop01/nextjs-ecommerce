import type { Product } from '@prisma/client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import cn from 'clsx'

import s from './ProductView.module.css'

import { QuantityButton, Container } from '~/components/ui'
import { ChevronRightIcon } from '~/components/icons'
import { ProductVarientCard } from '~/components/product'

interface ProductViewProps {
  className?: string
  product: Product
  relatedProducts?: Product[]
}

const ProductView: React.FC<ProductViewProps> = ({ className, product }) => {
  const [quantity, setQuantity] = useState<number>(0)

  const increateQuantity = (n = 1) => {
    setQuantity((v) => v + n)
  }

  return (
    <Container>
      <div className="grid w-full grid-cols-2 bg-gray-100">
        <div className="w-full bg-gray-200">
          <div>
            <div className="h-[600px] w-full bg-gray-300">
              <Image
                src={product.defaultImage.url}
                alt={product.defaultImage.alt ?? ''}
                width={512}
                height={512}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="h-24 bg-gray-300"></div>
          </div>
          <hr />
        </div>
        <div className="flex w-full flex-col gap-4 bg-gray-200 text-sm font-normal text-black">
          <nav className="breadcrumb flex items-center">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <ChevronRightIcon className="w-4" />
            <Link href="/products" className="hover:underline">
              Products
            </Link>
            <ChevronRightIcon className="w-4" />
            <span className="pointer-events-none text-gray-500">
              {product.name}
            </span>
          </nav>

          <span className="text-4xl">{product.name}</span>

          <div className="flex items-start gap-3">
            <ProductVarientCard product={product} active />
            <ProductVarientCard product={product} />
          </div>

          <div className="">
            <QuantityButton
              className=""
              quantity={quantity}
              increase={() => increateQuantity(1)}
              decrease={() => increateQuantity(-1)}
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ProductView