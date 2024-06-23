
'use client'


const OurTeam = () => {
    return (
        <section className="py-24 ">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center mb-8">
                    {/* // <span className="flex items-center">
                    //     <span className="h-px flex-1 bg-black"></span>
                    //     <h2 className="shrink-0 px-6  mb-4 text-3xl font-bold text-black sm:text-4xl lg:text-5xl">Մեր թիմը</h2>
                    //     <span className="h-px flex-1 bg-black"></span>
                    // </span>
                    // <p className="text-gray-600 mt-3">
                    //     Մեր թիմը մեր ընտանիքն է: Յուրաքանչյուր աշխատակից ընկերության հիմքն ու հոգին է:
                    // </p> */}
                    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">Մեր թիմը</h2>
                    <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
                </div>


                <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">

                    <div className="block group md:col-span-2 lg:col-span-1 ">
                        <div className="relative mb-6">
                            <img src="https://pagedone.io/asset/uploads/1696238374.png" alt="Antonio image"
                                className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600" />
                        </div>
                        <h4
                            className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
                            Antonio Roberto </h4>
                        <span
                            className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">Founder</span>
                    </div>
                    <div className="block group md:col-span-2 lg:col-span-1 ">
                        <div className="relative mb-6">
                            <img src="https://pagedone.io/asset/uploads/1696238396.png" alt="Patricia image"
                                className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600" />
                        </div>
                        <h4
                            className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
                            Patricia Angely </h4>
                        <span
                            className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">Co-Founder</span>
                    </div>
                    <div className="group group md:col-span-2 lg:col-span-1">
                        <div className="relative mb-6">
                            <img src="	https://pagedone.io/asset/uploads/1696238411.png" alt="Jerom image"
                                className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600" />
                        </div>
                        <h4
                            className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
                            Jerom Bell </h4>
                        <span
                            className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">Chairman</span>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </section>
    )
}

export default OurTeam;