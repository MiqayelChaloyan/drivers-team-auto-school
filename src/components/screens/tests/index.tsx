'use client'

import React, { useEffect, useState } from 'react';
// import { generateQuestionnaires } from './generateQuestionnaires';
import Link from 'next/link';


import * as Action from '@/src/reducer/store/testReducer'
import { useDispatch } from 'react-redux';



const Tests = () => {
    const [tests, setTests] = useState<any>([]);

    const dispatch = useDispatch();


    useEffect(() => {
        const loadTests = async () => {
            try {
                // const generatedTests = await generateQuestionnaires(); 
                // setTests(generatedTests)
                // dispatch(Action.startExamAction(generatedTests))
                // dispatch(Action.updateLoader(false))
            } catch (error) {
                console.error("Failed to load tests:", error);
            }
        };

        loadTests();
    }, []);


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
                    {[1,2,3,5]?.map((test: any, index: number) => (
                        <Link
                            href={`/tests/${index}`}
                            key={index}
                            className='relative overflow-hidden'
                            aria-label={`/tests/${index}`}
                        >
                            <div className={`relative overflow-hidden bg-white shadow-md rounded-xl h-40`}>
                                <div className="p-5">
                                    <h2 className="mt-1 text-5xl font-bold text-gray-900 sm:mt-1">{index + 1}</h2>
                                    <h3 className="mt-5 text-2xl font-bold text-gray-900 sm:mt-10">Թեստ</h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tests;
