import { FC } from 'react'
import cn from 'clsx'

import s from './SearchInput.module.css'

import { SearchIcon } from '@components/icons'

type Props = {
  className?: string
}

const SearchInput: FC<Props> = ({ className }) => {
  return (
    <div className={cn(s.root, className)}>
      <label
        htmlFor="default-search"
        className="sr-only mb-2 text-sm font-medium text-gray-900"
      >
        Search
      </label>
      <div className="relative flex">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <SearchIcon className="h-5 w-5 text-gray-600" />
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
