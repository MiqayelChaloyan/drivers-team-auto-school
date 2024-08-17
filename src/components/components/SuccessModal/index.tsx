'use client'

import { useSelector, useDispatch } from 'react-redux';
import * as Action from '@/src/reducer/store/modalReducer';

import { IoCloseOutline } from 'react-icons/io5';
import { BsSendExclamationFill } from "react-icons/bs";
import { BsSendCheckFill } from "react-icons/bs";

const SuccessModal = () => {
    const status = useSelector((state: any) => state.modal?.status);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(Action.closeModal());
    };

    if (status === 'success') {
        return (
            <div
                className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto">
                <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
                    <div className="my-8 text-center">
                        <button
                            type="button"
                            className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={handleClose}
                        >
                            <IoCloseOutline size={30} />
                        </button>
                        <div className="w-12 h-12 rounded-full bg-[#c8e6c9] p-2 flex items-center justify-center mx-auto mb-3.5">
                            <BsSendCheckFill size={30} color='#1b5e20' />
                        </div>
                        <p className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                            Մենք շուտով կապ կհաստատենք ձեզ հետ, շնորհակալություն մեզ գրելու համար:
                        </p>
                    </div>
                </div>
            </div>
        )
    };

    if (status === 'error') {
        return (<div
            className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto">
            <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
                <div className="my-8 text-center">
                    <button
                        type="button"
                        className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={handleClose}
                    >
                        <IoCloseOutline size={30} />
                    </button>
                    <div className="w-12 h-12 rounded-full bg-[#ffcdd2] p-2 flex items-center justify-center mx-auto mb-3.5">
                        <BsSendExclamationFill size={30} color='#d50000' />
                    </div>
                    <p className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                        Ինչ-որ բան այն չէ, խնդրում ենք ավելի ուշ նորից փորձեք:
                    </p>
                </div>
            </div>
        </div>
        )
    };
};

export default SuccessModal;