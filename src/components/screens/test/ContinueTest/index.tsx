'use client';

import React, { useEffect, useState } from 'react';
import { Dialog } from '@material-tailwind/react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'next/navigation';
import * as Action from '@/src/reducer/store/testReducer';

const again = 'Սկսել նորից';
const continueTest = 'Շարունակել';


const ContinueTest = ({open, handleStartOver, handleContinue}: any) => {


    return (
        <Dialog open={open} handler={() => null}>
            <div>
                <h1 className="mt-8 md:mt-12 text-3xl lg:text-4xl font-semibold leading-10 text-center text-gray-800">
                    Ցանկանու՞մ եք շարունակել այնտեղ, որտեղ թողել եք:?
                </h1>
                <div className="mt-12 md:mt-14 w-full flex justify-center">
                    <button
                        onClick={handleStartOver}
                        className="w-full sm:w-auto border border-gray-800 text-base font-medium text-gray-800 py-5 px-14 hover:border-[#ec3237] hover:bg-[#ec3237] hover:text-white"
                    >
                        {again}
                    </button>
                    <button
                        onClick={handleContinue}
                        className="w-full sm:w-auto border border-gray-800 text-base font-medium text-gray-800 py-5 px-14 hover:border-[#ec3237] hover:bg-[#ec3237] hover:text-white"
                    >
                        {continueTest}
                    </button>
                </div>
            </div>
        </Dialog>
    );
};

export default ContinueTest;
