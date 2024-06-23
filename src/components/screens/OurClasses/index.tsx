'use client';


const OurClasses = () => {
    return (
        <div className="bg-gradient-to-r from-gray-900 to-black w-full">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8  lg:py-20">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="pb-1 text-4xl font-extrabold text-white">Elegant Gradient Stats Section</h2>
            <p className="mt-3 text-lg text-white">Explore the latest updates in our stylish statistics showcase!</p>
          </div>
          <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-4 sm:gap-8">
            <div className="flex flex-col">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-white">Components</dt>
              <dd className="order-1 text-5xl font-extrabold text-white">1600</dd>
            </div>
            <div className="flex flex-col mt-10 sm:mt-0">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-white">Free</dt>
              <dd className="order-1 text-5xl font-extrabold text-white">1600</dd>
            </div>
            <div className="flex flex-col mt-10 sm:mt-0">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-white">Dark Mode</dt>
              <dd className="order-1 text-5xl font-extrabold text-white">1200</dd>
            </div>
            <div className="flex flex-col mt-10 sm:mt-0">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-white">Categories</dt>
              <dd className="order-1 text-5xl font-extrabold text-white">90</dd>
            </div>
          </dl>
        </div>
      </div>
    )
}

export default OurClasses;