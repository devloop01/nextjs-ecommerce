import { FC } from 'react'
import cn from 'clsx'

import s from './QuantityButton.module.css'

import { PlusIcon, MinusIcon } from '@components/icons'

export interface QuantityButtonProps {
  className?: string
  quantity: number
  increase?: () => any
  decrease?: () => any
  max?: number
}

const QuantityButton: FC<QuantityButtonProps> = (props) => {
  const { className, quantity = 0, increase, decrease } = props

  return (
    <>
      {quantity > 0 ? (
        <div className={cn(s.root, className)}>
          <button onClick={decrease} className={s.actionBtn}>
            <MinusIcon className="h-5 w-5" />
          </button>
          <span className={s.quantityText}>{quantity}</span>
          <button onClick={increase} className={s.actionBtn}>
            <PlusIcon className="h-5 w-5" />
          </button>
        </div>
      ) : (
        <button onClick={increase} className={cn(s.root, className)}>
          <span>Add</span>
        </button>
      )}
    </>
  )
}

export default QuantityButton
