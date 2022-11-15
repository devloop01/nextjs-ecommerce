import { FC } from 'react'

import { trpc } from '~/utils/trpc'

import { ProductCardList } from '~/components/product'

const HomePage: FC = () => {
  const products = trpc.product.products.useQuery()

  return (
    <>
      {products.isLoading && <p>Loading.......</p>}
      {products.error && (
        <h2 style={{ color: 'red' }}>{products.error.message}</h2>
      )}
      {products.data && (
        <ProductCardList products={Array(10).fill(products.data).flat()} />
      )}
    </>
  )
}

export default HomePage
