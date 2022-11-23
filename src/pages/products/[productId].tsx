import type { NextPage } from 'next'

import { useRouter } from 'next/router'

import { trpc } from '~/utils/trpc'

import { ProductView } from '~/components/product'
import Image from 'next/image'

const ProductPage: NextPage = () => {
  const router = useRouter()

  const { productId } = router.query

  const product = trpc.product.byId.useQuery({ id: productId as string })

  return (
    <>
      {product.isLoading && <p>Loading.......</p>}
      {product.error && (
        <h2 style={{ color: 'red' }}>{product.error.message}</h2>
      )}
      {product.data && <ProductView product={product.data} />}
    </>
  )
}

export default ProductPage
