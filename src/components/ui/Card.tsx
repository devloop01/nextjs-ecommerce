import React from 'react'

type Props = {}

const Card: React.FC<Props> = () => {
  return (
    <div className="block max-w-sm rounded-lg bg-white p-6 shadow-lg">
      <h5 className="mb-2 text-xl font-medium leading-tight text-gray-900">
        Card title
      </h5>
      <p className="mb-4 text-base text-gray-700">
        Some quick example text to build on the card title and make up the bulk
        of the cards content.
      </p>
      <button
        type="button"
        className=" inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
      >
        Button
      </button>
    </div>
  )
}

export default Card
