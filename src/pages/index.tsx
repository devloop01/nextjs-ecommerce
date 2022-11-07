import { FC } from 'react'
import useSWR from 'swr'

import { ProductCardList } from '@components/product'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const HomePage: FC = () => {
  const { data, error } = useSWR<any[]>('/api/products', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
      <ProductCardList products={Array(10).fill(data).flat()} />
    </>
  )
}

export default HomePage
