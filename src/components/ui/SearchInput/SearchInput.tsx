import { FC } from 'react'
import cn from 'clsx'

import s from './SearchInput.module.css'

import { SearchIcon } from '~/components/icons'
import { Button } from '~/components/ui'

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
        placeholder="Search for veggies & fruits"
      />
      <Button type="button" className="!rounded-l-none">
        Search
      </Button>
    </div>
  )
}

export default SearchInput
