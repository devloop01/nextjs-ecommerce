import { FC } from 'react'
import cn from 'clsx'

import s from './QuantityButton.module.css'

import { PlusIcon, MinusIcon } from '@components/icons'

export interface QuantityButtonProps {
  className?: string
  quantity: number
  increase?: () => void
  decrease?: () => void
  max?: number
}

const QuantityButton: FC<QuantityButtonProps> = (props) => {
  const { className, quantity = 0, increase, decrease } = props

  const rootClassName = cn(s.root, className)

  return (
    <>
      {quantity > 0 ? (
        <div className={rootClassName}>
          <button onClick={decrease}>
            <MinusIcon className="h-5 w-5" />
          </button>
          <span className={s.quantityText}>{quantity}</span>
          <button onClick={increase}>
            <PlusIcon className="h-5 w-5" />
          </button>
        </div>
      ) : (
        <button onClick={increase} className={rootClassName}>
          <span>Add</span>
        </button>
      )}
    </>
  )
}

export default QuantityButton
