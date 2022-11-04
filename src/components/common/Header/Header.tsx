import React from 'react'

import { ShoppingCart, User, MapPin } from '@components/icons'
import { SearchInput } from '@components/ui'

const Navbar: React.FC = () => {
  return (
    <header className="shadow-md">
      <div className="mx-auto flex min-h-[4rem] items-center justify-between px-4 md:container md:min-h-[6rem] md:justify-start">
        <div className="flex gap-8">
          <a href="#" className="flex items-center">
            <span className="self-center whitespace-nowrap text-3xl font-bold">
              Veggie
            </span>
          </a>

          <div className="hidden cursor-pointer lg:block">
            <span className="ml-5 block text-sm font-semibold">
              Deliver to Sikriti
            </span>
            <div className="flex">
              <MapPin className="k h-5 w-5" />
              <span className="text-base">Mathabhanga, 736146</span>
            </div>
          </div>
        </div>

        <div className="mx-10 hidden grow md:block xl:mx-20">
          <SearchInput />
        </div>

        <div className="flex gap-4">
          <button type="button" className="p-2">
            <ShoppingCart className="h-5 w-5" />
          </button>
          <button type="button" className="flex items-center gap-2 p-2">
            <User className="h-5 w-5" />
            <span className="hidden text-sm font-semibold">Log In</span>
          </button>
        </div>
      </div>

      <div className="block grow px-4 pb-4 md:hidden">
        <SearchInput />
      </div>

      <div className="flex cursor-pointer items-center gap-1 border-t px-2 py-2.5 lg:hidden">
        <MapPin className="k h-5 w-5" />
        <span className="block text-sm font-semibold">Deliver to Sikriti</span>
        <span> - </span>
        <span className="text-sm font-semibold">Mathabhanga, 736146</span>
      </div>
    </header>
  )
}

export default Navbar
