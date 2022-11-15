import { FC } from 'react'
import Link from 'next/link'

import s from './Header.module.css'

import { MapPinIcon } from '~/components/icons'
import { SearchInput } from '~/components/ui'
import { UserNav } from '~/components/common'

type Props = {}

const Header: FC<Props> = ({}) => {
  return (
    <header className={s.root}>
      <div className={s.rootContainer}>
        <div className="flex gap-8">
          <Link href="/" className="flex items-center">
            <span className="self-center whitespace-nowrap text-3xl font-bold text-green-400">
              Veggie
            </span>
          </Link>
          <div className="hidden cursor-pointer lg:block">
            <span className="ml-4 block text-sm font-semibold">
              Deliver to Sikriti
            </span>
            <div className="flex items-center">
              <MapPinIcon className="mb-1 h-4 w-4" />
              <span className="text-base font-normal">Mathabhanga, 736146</span>
            </div>
          </div>
        </div>

        <div className="mx-10 hidden grow md:block xl:mx-20">
          <SearchInput />
        </div>

        <UserNav />
      </div>

      <div className="block grow px-4 pb-4 md:hidden">
        <SearchInput />
      </div>

      <div className="flex cursor-pointer items-center gap-1 border-t px-2 py-2.5 lg:hidden">
        <MapPinIcon className="k h-5 w-5" />
        <span className="block text-sm font-semibold">Deliver to Sikriti</span>
        <span> - </span>
        <span className="text-sm font-semibold">Mathabhanga, 736146</span>
      </div>
    </header>
  )
}

export default Header
