'use client'

import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import * as Action from '@/src/reducer/store/modalReducer'

import { Texts, Buttons } from '@/src/constants';
import { Palette } from '@/src/themes';

import { IoIosCheckmarkCircle } from 'react-icons/io';


interface Props {
    data: PRICING_QUERYResult
}

const Pricing = ({ data }: Readonly<Props>) => {
    const [selectedPlan, setSelectedPlan] = useState<PRICE>(data.pricing[0]);
    const dispatch = useDispatch();

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const selectedId = e.target.value;
        const plan = data.pricing?.find(p => p._key === selectedId) as PRICE;
        setSelectedPlan(plan);
    };

    const handleOpenModal = () => {
        dispatch(Action.openeModal())
    };


    return (
        <section id='pricing'>
            <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
                <div className="rounded-xl bg-[#f5f5f4] px-6 py-12 sm:px-12 sm:py-16 md:py-20">
                    <div className="grid w-full place-items-center">
                        <div className="grid w-full grid-cols-2 sm:grid-cols-4 gap-2 rounded-xl bg-[#ec3237] py-2 px-3.5">
                            {data.pricing?.map((plan) => (
                                <div key={plan._key} className="relative">
                                    <input
                                        type="radio"
                                        name="option"
                                        id={`plan-${plan._key}`}
                                        value={plan._key}
                                        className="peer hidden"
                                        checked={selectedPlan._key === plan._key}
                                        onChange={handleChange}
                                    />
                                    <label
                                        htmlFor={`plan-${plan._key}`}
                                        className={`block text-base cursor-pointer text-white select-none rounded-lg p-2 text-center transition-all duration-300 ease-in-out transform 
                        peer-checked:bg-white peer-checked:text-[#ec3237] 
                        peer-checked:scale-105 peer-checked:shadow-lg`}
                                    >
                                        {plan.packagesName}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mx-auto grid h-auto w-full gap-4 rounded-md px-0 py-12 lg:grid-cols-2">
                        <div className="grid grid-cols-1 gap-4 rounded-md border border-[#d4d4d4] bg-[#374151] px-10 py-14 sm:grid-cols-2">
                            {selectedPlan.features?.map((feature, index) => (
                                <div className="flex items-center gap-2" key={index}>
                                    <IoIosCheckmarkCircle size={20} color={Palette.red} />
                                    <p className="text-sm sm:text-base text-white">{feature}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col rounded-md bg-[#ec3237] px-10 py-12 text-white">
                            <div className="flex w-full flex-col items-center justify-between sm:flex-row sm:items-center">
                                <h2 className="text-3xl font-bold md:text-5xl">
                                    ֏{selectedPlan.price}
                                    <span className="text-sm font-light sm:text-sm">/{selectedPlan.period}</span>
                                </h2>
                            </div>
                            <div className="mb-6 mt-6 border border-gray-100"></div>
                            <p className="text-white text-sm sm:text-base">
                                {selectedPlan.packagesName}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center space-y-4 m-10 mt-20 text-lg text-[#1c1917] text-center sm:flex-row sm:space-y-0 sm:space-x-4">
                    <span>{Texts.callUs}</span>
                    <a href="tel:+24300" className="flex items-center space-x-2 text-[#1c1917]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                        </svg>
                        <span className="font-semibold text-[#ec3237] hover:text-[#f87171]">+37477122212</span>
                    </a>
                    <span>{Texts.or}</span>
                </div>
                <button
                    type="submit"
                    className="block w-full sm:w-auto py-3 px-6 text-center rounded-xl transition bg-[#ec3237] hover:bg-[#f87171] mx-auto"
                    onClick={handleOpenModal}
                >
                    <span className="text-white font-semibold">
                        {Buttons.signUp}
                    </span>
                </button>
            </div>
        </section>
    )
};

export default Pricing;
