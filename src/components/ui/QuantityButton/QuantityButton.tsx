import { FC, useState } from 'react'
import cn from 'clsx'

import s from './QuantityButton.module.css'

import { PlusIcon, MinusIcon } from '~/components/icons'

const clamp = (num: number, min: number, max: number): number =>
  Math.min(Math.max(num, min), max)

export interface QuantityButtonProps {
  className?: string
  maxQuantity: number
  width?: number | string
  label?: string | null
  disabled?: boolean
  onChange?: (quantity: number) => void
}

const QuantityButton: FC<QuantityButtonProps> = ({
  className,
  maxQuantity,
  width = 'w-36',
  label = 'Add',
  disabled = false,
  onChange,
}) => {
  const [quantity, setQuantity] = useState<number>(0)

  const rootClassName = cn(s.root, className, width, {
    [s.active]: quantity > 0,
    [s.disabled]: disabled,
  })

  const increateQuantity = (n = 1) => {
    setQuantity((v) => {
      const q = clamp(v + n, 0, maxQuantity)
      onChange?.(q)
      return q
    })
  }

  const increase = () => {
    increateQuantity(1)
  }

  const decrease = () => {
    increateQuantity(-1)
  }

  return (
    <button type="button" className={rootClassName}>
      {quantity > 0 ? (
        <div className={s.rootContainer}>
          <div onClick={decrease}>
            <MinusIcon className="h-5 w-5" />
          </div>
          <span className={s.quantityText}>{quantity}</span>
          <div
            onClick={increase}
            className={cn(quantity === maxQuantity && 'opacity-50')}
          >
            <PlusIcon className="h-5 w-5" />
          </div>
        </div>
      ) : (
        <div className={s.rootContainer} onClick={increase}>
          <span>{label}</span>
        </div>
      )}
    </button>
  )
}

export default QuantityButton
