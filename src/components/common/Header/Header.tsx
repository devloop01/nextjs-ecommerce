import { FC } from 'react'
import Link from 'next/link'

import s from './Header.module.css'

import { Container, SearchInput } from '~/components/ui'
import { LocationNavigation, UserNav } from '~/components/common'

type HeaderProps = {}

export const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className={s.root}>
      <Container className="px-4 md:px-8 lg:px-16" clean>
        <div className={s.rootContainer}>
          <div className="flex gap-8">
            <Link href="/" className="flex items-center">
              <span className="self-center whitespace-nowrap text-3xl font-bold text-green-400">
                Veggie
              </span>
            </Link>
            <LocationNavigation className="hidden lg:block" />
          </div>

          <div className="mx-10 hidden grow md:block xl:mx-20">
            <SearchInput />
          </div>

          <UserNav className="ml-12" />
        </div>

        <div className="block grow px-4 pb-4 md:hidden">
          <SearchInput />
        </div>

        <LocationNavigation variant="flat" className="lg:hidden" />
      </Container>
    </header>
  )
}

export default Header
