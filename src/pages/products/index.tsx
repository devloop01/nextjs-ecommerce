import type { NextPage } from 'next'

import { trpc } from '~/utils/trpc'

import { ProductCardList } from '~/components/product'
import { Container } from '~/components/ui'

const ProductsPage: NextPage = () => {
  const products = trpc.product.all.useQuery()

  return (
    <Container className="mt-6">
      <h1>Products page</h1>
      {products.isLoading && <p>Loading.......</p>}
      {products.error && (
        <h2 style={{ color: 'red' }}>{products.error.message}</h2>
      )}
      {products.data && (
        <ProductCardList products={Array(10).fill(products.data).flat()} />
      )}
    </Container>
  )
}

export default ProductsPage
