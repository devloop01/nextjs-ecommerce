import React from 'react'

import { Search } from '@components/icons'

type Props = {}

const SearchInput: React.FC = (props: Props) => {
  return (
    <div>
      <label
        htmlFor="default-search"
        className="sr-only mb-2 text-sm font-medium text-gray-900"
      >
        Search
      </label>
      <div className="relative flex">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <Search className="h-5 w-5 text-gray-600" />
        </div>
        <input
          type="search"
          id="default-search"
          className="text-900 w-full rounded-l-lg border border-gray-300 bg-gray-50 pl-10 text-sm focus:border-gray-800 focus:outline-none"
          placeholder="Search for veggies"
          required
        />
        <button
          type="submit"
          className="rounded-r-lg bg-gray-900 px-6 py-3 text-white focus:outline-none"
        >
          Search
        </button>
      </div>
    </div>
  )
}

export default SearchInput
