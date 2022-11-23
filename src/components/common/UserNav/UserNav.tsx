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
            <button type="button" className="flex items-center gap-2 p-2">
              <UserIcon className={s.icon} />
              <span className="hidden text-sm font-semibold">Log In</span>
            </button>
          </li>
        ) : (
          <Button>Login</Button>
        )}
        <li>
          <button type="button" className="p-2">
            <ShoppingCartIcon className={s.icon} />
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default UserNav
