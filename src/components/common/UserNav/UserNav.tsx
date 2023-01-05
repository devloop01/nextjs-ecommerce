import { FC } from 'react'
import cn from 'clsx'

import s from './UserNav.module.css'

import { ShoppingCartIcon, UserIcon } from '~/components/icons'
import { Button } from '~/components/ui'

type UserNavProps = {
  className?: string
  userName?: string
}

export const UserNav: FC<UserNavProps> = ({ className, userName }) => {
  return (
    <nav className={cn(s.root, className)}>
      <ul className={s.list}>
        {userName ? (
          <li>
            <Button type="button" variant="naked">
              <UserIcon className={s.icon} />
            </Button>
          </li>
        ) : (
          <Button>Login</Button>
        )}
        <li>
          <Button type="button" variant="naked">
            <ShoppingCartIcon className={s.icon} />
          </Button>
        </li>
      </ul>
    </nav>
  )
}

export default UserNav
