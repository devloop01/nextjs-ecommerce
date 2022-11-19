import { FC } from 'react'
import cn from 'clsx'

import s from './LocationNavigation.module.css'

import { MapPinIcon } from '~/components/icons'

export type LocationNavigationProps = {
  className?: string
  variant?: 'flat' | 'stacked'
}

export const LocationNavigation: FC<LocationNavigationProps> = ({
  className,
  variant = 'stacked',
}) => {
  const rootClassName = cn(s.root, className)

  const rootContainerClassName = cn({
    [s.flat]: variant === 'flat',
    [s.stacked]: variant === 'stacked',
  })

  return (
    <>
      <div className={rootClassName}>
        <div className={rootContainerClassName}>
          <MapPinIcon className={s.icon} />
          <div className={s.textContainer}>
            <span className={s.deliver}>Deliver to Sikriti</span>
            {variant === 'flat' && <span>&#8211;</span>}
            <span className={s.address}>Mathabhanga, 736146</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default LocationNavigation
