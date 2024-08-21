'use client';

import React, { useEffect, useState } from 'react';
import { Dialog } from '@material-tailwind/react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'next/navigation';
import * as Action from '@/src/reducer/store/testReducer';
import { RootState } from '@/src/types';
import { Mardoto } from '@/src/constants/font';

const again = 'Սկսել նորից';
const continueTest = 'Շարունակել';


const ContinueTest = () => {
    const { isOpenModal } = useSelector((state: RootState) => state.questions);
    const params = useSearchParams();
    const query = params.get('test');
    const dispatch = useDispatch();

    const handleStartOver = () => {
        dispatch(Action.handleStartOver(Number(query) - 1));
    }

    const handleContinue = () => {
        dispatch(Action.handleContinue(Number(query) - 1))
    }

    return (
        <Dialog open={isOpenModal} handler={() => null}>
            <div className={`container mx-auto px-4 md:px-10 py-5 ${Mardoto.className}`}>
                <h1 className="mt-8 md:mt-12 text-2xl lg:text-3xl font-semibold leading-10 text-center text-gray-800">
                    Ցանկանու՞մ եք շարունակել այնտեղ, որտեղ թողել եք ?
                </h1>
                <div className="mt-12 md:mt-14 w-full flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4">
                    <button
                        onClick={handleStartOver}
                        className="w-full sm:w-auto border border-gray-800 text-base font-medium text-gray-800 py-5 px-6 sm:px-14 hover:border-[#ec3237] hover:bg-[#ec3237] hover:text-white"
                    >
                        {again}
                    </button>
                    <button
                        onClick={handleContinue}
                        className="w-full sm:w-auto border border-gray-800 text-base font-medium text-gray-800 py-5 px-6 sm:px-14 hover:border-[#ec3237] hover:bg-[#ec3237] hover:text-white"
                    >
                        {continueTest}
                    </button>
                </div>

            </div>
        </Dialog>
    );
};

export default ContinueTest;
