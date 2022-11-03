import React from 'react'

import { Search, ShoppingCart, ChevronDown, User } from '@components/icons'

const Navbar: React.FC = () => {
  return (
    <header className="px-2 py-2.5">
      <div className="container mx-auto h-20 flex flex-nowrap justify-between items-center">
        <div className="flex">
          <a href="#" className="flex items-center mx-8">
            <span className="self-center text-3xl font-bold whitespace-nowrap">
              Veggie
            </span>
          </a>

          <div className="flex flex-col mx-8 cursor-pointer">
            <h2 className="font-semibold text-lg">Delivery in 16 minutes</h2>
            <span className="font-normal text-sm flex">
              <span className="">Kolkata, West Bengal, India</span>
              <ChevronDown className="w-5 h-5 text-black" />
            </span>
          </div>
        </div>

        <div className="grow mx-8">
          <form className="">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only"
            >
              Search
            </label>
            <div className="relative flex">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-gray-600" />
              </div>
              <input
                type="search"
                id="default-search"
                className="pl-10 w-full text-sm text-900 bg-gray-50 rounded-l-lg border border-gray-300 focus:border-gray-800 focus:outline-none"
                placeholder="Search for veggies"
                required
              />
              <button
                type="submit"
                className="text-white px-6 py-3 rounded-r-lg bg-gray-900 focus:outline-none"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        <div className="flex px-8">
          <button type="button" className="p-2 mr-4">
            <ShoppingCart className="w-5 h-5" />
          </button>
          <button type="button" className="flex gap-2 font-medium text-sm p-2">
            <User className="w-5 h-5" />
            <span className="font-semibold">Log In</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
