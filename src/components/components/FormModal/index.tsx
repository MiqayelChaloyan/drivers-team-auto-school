'use client'

import { useSelector, useDispatch } from 'react-redux';
import { IoCloseOutline } from 'react-icons/io5';
import { FaPhone } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import * as Action from '@/src/reducer/store/modalReducer';
import { useEffect, useRef } from 'react';

const FormModal = () => {
    const isOpen = useSelector((state: any) => state.modal?.isOpen);
    const dispatch = useDispatch();
    const modalRef = useRef<HTMLDivElement>(null);

    const handleCloseModal = () => {
        dispatch(Action.closeModal());
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            handleCloseModal();
        }
    }

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [isOpen]);

    return isOpen && (
        <div className="fixed inset-0 p-4 flex justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto">
            <div ref={modalRef} className="w-full max-w-[600px] p-8 relative bg-[#F4F4F7] text-gray-500 rounded-3xl shadow-xl">
                <button
                    className="absolute top-4 right-4 text-gray-400 hover:text-red-500"
                    onClick={handleCloseModal}
                >
                    <IoCloseOutline size={30} />
                </button>
                <div className="text-center mb-10">
                    <h1 className="font-bold text-3xl text-gray-900 mb-3">Գրանցվել</h1>
                    <p>Գրանցվելու համար մուտքագրեք ձեր տվյալները</p>
                </div>
                <div>
                    <div className="flex -mx-3">
                        <div className="w-1/2 px-3 mb-5">
                            <div>
                                <label htmlFor="firstName" className="text-xs font-semibold px-1">Անուն</label>
                                <div className="relative">
                                    <input
                                        id="firstName"
                                        type="text"
                                        className="w-full pl-5 pr-3 py-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 px-3 mb-5">
                            <div>
                                <label htmlFor="lastName" className="text-xs font-semibold px-1">Ազգանուն</label>
                                <div className="relative">
                                    <input
                                        id="lastName"
                                        type="text"
                                        className="w-full pl-5 pr-3 py-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-5">
                            <label htmlFor="email" className="text-xs font-semibold px-1">էլփոստի հասցեն</label>
                            <div className="relative">
                                <input
                                    id="email"
                                    type="email"
                                    className="w-full pl-5 pr-3 py-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                />
                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    <MdAlternateEmail size={13} />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-12">
                            <label htmlFor="phone" className="text-xs font-semibold px-1">Հեռախոսահամար</label>
                            <div className="relative flex">
                                <div className="w-10 z-10 pl-[5px] text-center pointer-events-none flex items-center justify-center">+374</div>
                                <input
                                    id="phone"
                                    type="text"
                                    className="w-full -ml-10 pl-10 pr-3 py-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                    placeholder="| XX-XX-XX-XX"
                                />
                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    <FaPhone size={13} />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-5">
                            <button className="block w-full max-w-xs mx-auto bg-[#ec3237] hover:bg-[#87D37C] focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">Ուղարկել</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormModal;
