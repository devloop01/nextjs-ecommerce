import React from 'react'

type Props = {
  className?: string
}

const Search: React.FC<Props> = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="M21 21L16.65 16.65"></path>
    </svg>
  )
}

export default Search
