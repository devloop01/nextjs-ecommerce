import { FC } from 'react'
import cn from 'clsx'

import s from './SearchInput.module.css'

import { SearchIcon } from '~/components/icons'

type SearchInputProps = {
  className?: string
}

export const SearchInput: FC<SearchInputProps> = ({ className }) => {
  return (
    <div className={cn(s.root, className)}>
      <label htmlFor="item-search" className={s.label}>
        Search
      </label>
      <SearchIcon className={s.icon} />
      <input
        type="search"
        id="item-search"
        className={s.inputField}
        placeholder="Search for veggies"
      />
      <button type="button" className={s.btn}>
        Search
      </button>
    </div>
  )
}

export default SearchInput
