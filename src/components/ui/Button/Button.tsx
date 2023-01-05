import cn from 'clsx'
import { cva } from 'class-variance-authority'
import React, { forwardRef, ButtonHTMLAttributes, useRef } from 'react'
import { mergeRefs } from 'react-merge-refs'

import s from './Button.module.css'

import { LoadingDots } from '~/components/ui'

export type ButtonProps = {
  className?: string
  variant?: 'primary' | 'secondary' | 'danger' | 'naked'
  active?: boolean
  type?: 'submit' | 'reset' | 'button'
  fullWidth?: boolean
  loading?: boolean
  disabled?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonProps> = forwardRef((props, buttonRef) => {
  const {
    className,
    variant = 'primary',
    children,
    active,
    fullWidth = false,
    loading = false,
    disabled = false,
    style = {},
    ...rest
  } = props
  const ref = useRef<any>(null)

  const rootClassName = cn(
    s.root,
    fullWidth && 'w-full',
    {
      [s.primary]: variant === 'primary',
      [s.secondary]: variant === 'secondary',
      [s.danger]: variant === 'danger',
      [s.naked]: variant === 'naked',
      [s.loading]: loading,
      [s.disabled]: disabled,
    },
    className
  )

  return (
    <button
      aria-pressed={active}
      data-variant={variant}
      ref={mergeRefs([ref, buttonRef])}
      className={rootClassName}
      disabled={disabled}
      {...rest}
    >
      {children}
      {loading && (
        <i className="m-0 flex pl-2">
          <LoadingDots />
        </i>
      )}
    </button>
  )
})

export default Button
