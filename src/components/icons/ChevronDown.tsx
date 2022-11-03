import React from 'react'

type Props = {
  className?: string
}

const ChevronDown: React.FC<Props> = ({ ...props }) => {
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
      <path d="M6 9L12 15 18 9"></path>
    </svg>
  )
}

export default ChevronDown