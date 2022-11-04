import React from 'react'

import { Card } from '@components/ui'

type Props = {
  items: []
}

const CardList: React.FC<Props> = ({ items }) => {
  return (
    <div className="container mx-auto my-6">
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <Card />
        ))}
      </div>
    </div>
  )
}

export default CardList
