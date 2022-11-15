import { FC } from 'react'
import cn from 'clsx'

import s from './UserNav.module.css'

import { ShoppingCartIcon, UserIcon, MapPinIcon } from '~/components/icons'

type Props = { className?: string }

const UserNav: FC<Props> = ({ className }) => {
  return (
    <nav className={cn(s.root, className)}>
      <ul className={s.list}>
        <li>
          <button type="button" className="p-2">
            <ShoppingCartIcon className="h-5 w-5" />
          </button>
        </li>
        <li>
          <button type="button" className="flex items-center gap-2 p-2">
            <UserIcon className="h-5 w-5" />
            <span className="hidden text-sm font-semibold">Log In</span>
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default UserNav
