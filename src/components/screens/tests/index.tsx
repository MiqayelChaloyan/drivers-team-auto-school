'use client'

import React, { useEffect } from 'react';

import Link from 'next/link';

import * as Action from '@/src/reducer/store/testReducer'
import { useDispatch, useSelector } from 'react-redux';

import Loader from '@/src/lib/ui/Loader';

import { Question, RootState } from '@/src/types';

import { Pages } from '@/src/constants/pages';
import { Texts, Titles } from '@/src/constants';


const Tests = () => {
    const { tests, isLoading } = useSelector((state: RootState) => state.questions);
    const dispatch = useDispatch();

    const _startExam = () => {
        dispatch(Action.startExamAction())
    };

    useEffect(() => {
        dispatch(Action.resetAllAction())
        _startExam();
    }, []);

    const _startTest = (index: number) => {
        dispatch(Action.startTest(index));
    };


    if (isLoading) {
        return <Loader />;
    };

    return (
        <section className="bg-[#dddfeb] py-12 text-gray-100 sm:py-12 lg:py-16">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-7xl pl-0 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200">
                    <h1 className="text-center mb-0 text-2xl font-bold md:text-4xl text-[#ec3237]">
                        {Titles.tests}
                    </h1>
                </div>
                <div className="grid max-w-4xl lg:max-w-5xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
                    {tests?.map((_: Question[], index: number) => (
                        <Link
                            key={index}
                            href={{ pathname: Pages.TEST, query: { test: index + 1 } }}
                            className="rounded-md border border-solid border-gray-300 bg-[white] p-6 text-black"
                            aria-label={Pages.TEST}
                            onClick={() => _startTest(index)}
                        >
                            <h5 className="mb-2 text-xl font-bold">
                                {index + 1}
                            </h5>
                            <p className="text-md">
                                {Texts.test}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tests;
