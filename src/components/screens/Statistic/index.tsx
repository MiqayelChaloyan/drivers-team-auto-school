'use client'

const Statistic = () => {
    return (
        //     <div className="dark:bg-gray-900">
        //     <div className="pb-20">
        //       <div className="mx-auto bg-gradient-to-l from-indigo-600 to-indigo-700 h-96">
        //         <div className="mx-auto container w-full flex flex-col justify-center items-center">
        //           <div className="flex justify-center items-center flex-col">
        //             <div className="mt-20">
        //               <h2 className="lg:text-6xl md:text-5xl text-4xl font-black leading-10 text-white">Մեր Առավելությունները</h2>
        //             </div>
        //             <div className="mt-6 mx-2 md:mx-0 text-center">
        //               <p className="lg:text-lg md:text-base leading-6 text-sm  text-white">5 years, consistent quality and you get results. No matter what</p>
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        //       <div className="mx-auto container md:-mt-28 -mt-20 flex justify-center items-center">
        //         <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-x-2 gap-y-2 lg:gap-x-6 md:gap-x-6 md:gap-y-6 md:gap-y-6">
        //           <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
        //             <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">40+</h2>
        //             <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">Շրջանավարտ</p>
        //           </div>
        //           <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
        //             <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">3+</h2>
        //             <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">Տարի Մեքենավարության Ոլորտում</p>
        //           </div>
        //           <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
        //             <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">10+</h2>
        //             <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">Տարվա Փորձով Ուսուցիչներ</p>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
            <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    {/* <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Numbers tell our story</h2> */}
                    <span className="flex items-center">
                        <span className="h-px flex-1 bg-black"></span>
                        <h2 className="shrink-0 px-6 text-3xl font-bold text-black sm:text-4xl lg:text-5xl">Numbers tell our story</h2>
                        <span className="h-px flex-1 bg-black"></span>
                    </span>
                    <p className="mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
                </div>

                <div className="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
                    <div>
                        <h3 className="font-bold text-7xl">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600"> 6+ </span>
                        </h3>
                        <p className="mt-4 text-xl font-medium text-gray-900">Years in business</p>
                        <p className="text-base mt-0.5 text-gray-500">Creating the successful path</p>
                    </div>

                    <div>
                        <h3 className="font-bold text-7xl">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600"> 4821 </span>
                        </h3>
                        <p className="mt-4 text-xl font-medium text-gray-900">Projects delivered</p>
                        <p className="text-base mt-0.5 text-gray-500">In last 6 years</p>
                    </div>

                    <div>
                        <h3 className="font-bold text-7xl">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600"> 37+ </span>
                        </h3>
                        <p className="mt-4 text-xl font-medium text-gray-900">Team members</p>
                        <p className="text-base mt-0.5 text-gray-500">Working for your success</p>
                    </div>
                </div>
            </div>
        </section>

    );
};


export default Statistic;