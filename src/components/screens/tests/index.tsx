import React from 'react';

const tests = [
    // group1: []
    1,2,3
];





const Tests = () => {
    return (
        <section className="py-12 bg-gray-900 text-gray-100 sm:py-12 lg:py-16">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
                    <h2 className="text-3xl font-bold leading-tight text-gray-50 sm:text-4xl xl:text-5xl mb-6">Թեստեր</h2>
                    <p className="mb-4">
                        Մերօրյա առաջնահերթություններից է անձնական փոխադրամիջոցի առկայությունը: Իսկ ապահով և արդյունավետ ընթացքի գրավականը՝ վարորդական հմուտ և որակյալ հմտություններն են:
                    </p>
                </div>
                <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
                    {tests.map((test, index) => (
                        <div key={index} className='relative overflow-hidden'>
                            {
                                <div className="absolute -inset-1">
                                    <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
                                </div>
                            }
                            <div className={`relative overflow-hidden bg-white shadow-md rounded-xl h-full`}>
                                <div className="p-9">
                                    {/* <h2 className="mt-6 text-5xl font-bold text-gray-900 sm:mt-10">{feature.icon}</h2> */}
                                    <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">Թեստ</h3>
                                    {/* <p className="mt-6 text-base text-gray-600">{feature.description}</p> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tests;
