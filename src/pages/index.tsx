import type { NextPage } from 'next'

import { trpc } from '~/utils/trpc'

import { ProductCardList } from '~/components/product'
import { Container } from '~/components/ui'

const HomePage: NextPage = () => {
  const products = trpc.product.all.useQuery()

  return (
    <Container>
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

export default HomePage
