'use client'

import React, { useEffect, useState } from 'react';
// import { generateQuestionnaires } from './generateQuestionnaires';
import Link from 'next/link';


import * as Action from '@/src/reducer/store/testReducer'
import { useDispatch, useSelector } from 'react-redux';
import { generateQuestionnaires } from '@/src/utils/generateQuestionnaires';



const Tests = () => {
    const tests = useSelector((state: any) => state.questions?.tests);
    // const isViewAnswer = useSelector((state: any) => state.questions?.isViewAnswer);

    const dispatch = useDispatch();

    const startExam = () => {
        const data: any = generateQuestionnaires();
        dispatch(Action.startExamAction(data))
        dispatch(Action.updateLoader(false))
        // dispatch(Action.viewAnswerRemove());
    };

    useEffect(() => {
        dispatch(Action.resetAllAction());
        startExam();
    }, []);

    console.log(tests)

    return (
        <section className="py-12 bg-white text-gray-100 sm:py-12 lg:py-16">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-7xl pl-0 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200">
                    <h1 className="text-center mb-0 text-2xl font-bold md:text-4xl text-[#ec3237]">
                        Թեստեր
                    </h1>
                </div>
                {/* <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
                    <h2 className="text-3xl font-bold leading-tight text-gray-50 sm:text-4xl xl:text-5xl mb-6">Թեստեր</h2>
                    <p className="mb-4">
                        Մերօրյա առաջնահերթություններից է անձնական փոխադրամիջոցի առկայությունը: Իսկ ապահով և արդյունավետ ընթացքի գրավականը՝ վարորդական հմուտ և որակյալ հմտություններն են:
                    </p>
                </div> */}

                <div className="grid max-w-4xl lg:max-w-5xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
                    {tests?.map((_: any, index: number) => (
                        <Link
                            href={`/tests/examen/${index}`}
                            key={index}
                            // className='relative overflow-hidden'
                            className="rounded-md border border-solid border-gray-300 bg-white p-6 text-black"

                            aria-label={`/tests/examen/${index}`}
                        >
                            {/* <div className={`relative overflow-hidden border border-[#ec3237] bg-[#ec3237] shadow-md rounded-xl h-30`}>
                                <div className="p-5">
                                    <h2 className="mt-1 text-3xl font-bold text-white sm:mt-1">{index + 1}</h2>
                                    <h3 className="mt-5 text-2xl font-bold text-white sm:mt-5">Թեստ</h3>
                                </div>
                            </div> */}


                            <h5 className="mb-2 text-xl font-bold">{index + 1}</h5>
                            <p className="text-sm">
                                Թեստ
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tests;
