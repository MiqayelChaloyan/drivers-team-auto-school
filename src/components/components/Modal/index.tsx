'use client'

import React from 'react';

import { Dialog } from '@material-tailwind/react';

import { useSelector, useDispatch } from 'react-redux';
import * as Action from '@/src/reducer/store/modalReducer';

import { Mardoto } from '@/src/constants/font';
import { Buttons, Texts, Titles } from '@/src/constants';


const SuccessModal = () => {
    const { status } = useSelector((state: any) => state.modal);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(Action.closeModal());
    };

    let message = status === 'success' ? Texts.success : Texts.error;


    return (
        <Dialog
            open={status !== 'idle'}
            handler={handleClose}
            className="container bg-transparent shadow-none border-none"
        >
            <div className={`bg-white mx-auto w-full max-w-[30rem] p-5 rounded-3xl text-center ${Mardoto.className}`}>
                <h2 className="text-black text-xl font-semibold mb-4">
                    {Titles.send}
                </h2>
                <p className="text-gray-600 mb-6">
                    {message}
                </p>
                <div className="flex justify-center">
                    <button
                        type="button"
                        onClick={handleClose}
                        className="block w-full max-w-xs mx-auto bg-[#ec3237] text-white rounded-lg px-3 py-3 font-semibold"
                    >
                        {Buttons.ok}
                    </button>
                </div>
            </div>
        </Dialog>
    );
};

export default SuccessModal;
