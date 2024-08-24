'use client';

import React from 'react';

import { Dialog } from '@/src/context/index';

import { useSelector, useDispatch } from 'react-redux';
import * as Action from '@/src/reducer/store/modalReducer';

import { IoMdCheckmark } from 'react-icons/io';
import { BiError } from 'react-icons/bi';

import { Mardoto } from '@/src/constants/font';
import { Buttons, Texts, Titles } from '@/src/constants';
import { StateModal } from '@/src/types';


const Modal = () => {
    const { status, isStatus } = useSelector((state: StateModal) => state.modal);
    const dispatch = useDispatch();

    const message = status === 'success' ? Texts.success : Texts.error;
    const IconComponent = status === 'success' ? IoMdCheckmark : BiError;
    const iconBgColor = status === 'success' ? '#22c55e' : '#ec3237';

    const handleClose = () => {
        dispatch(Action.closeModal());
    };

    return (
        <Dialog
            size="xl"
            open={isStatus}
            handler={() => null}
            className="bg-transparent shadow-none border-none"
            animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0.9, y: -100 },
            }}
        >
            <div className={`container bg-white mx-auto w-full max-w-[30rem] p-5 rounded-3xl text-center ${Mardoto.className}`}>
                <div className={`p-2 mt-5 mb-5 mx-auto w-[50px] h-[50px] rounded-3xl flex items-center justify-center`} style={{ backgroundColor: iconBgColor }}>
                    <IconComponent size={50} color="white" />
                </div>
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

export default Modal;
