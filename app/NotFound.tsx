import React from 'react'

const NotFound = () => {
  return (
    <section className="bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">Something is missing.</p>
            <p className="text-white mb-4 text-lg font-light dark:text-gray-400">Sorry, we can not find that page. You will find lots to explore on the home page. </p>
            <a href="" className="inline-flex bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4 text-white">Back to Homepage</a>
        </div>   
    </div>
</section>
  )
}

export default NotFound