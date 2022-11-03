import React from 'react'

const HomePage: React.FC = () => {
  return (
    <>
      <h1 className="text-3xl font-normal">Hello world!</h1>
      <div className="container">
        <div className="flex flex-wrap">
          <div className="flex justify-center">
            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
              <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
                Card title
              </h5>
              <p className="text-gray-700 text-base mb-4">
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </p>
              <button
                type="button"
                className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
