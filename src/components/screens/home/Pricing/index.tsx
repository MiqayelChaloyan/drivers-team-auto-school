'use client'

import React from 'react';
import PricingPlan from './PricingPlan';
// import { FaCar } from 'react-icons/fa';

const pricingPlans = [
    {
        name: 'Տեսական \n դասընթաց',
        price: 30000,
        features: ["24 դ/ժ տեսական"],
        buttonClass: 'text-white bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700',
    },
    {
        name: 'Գործնական \n դասընթաց',
        price: 7000,
        features: ["1 դ/ժ գործնական"],
        buttonClass: 'text-teal-900 bg-teal-accent-400 hover:bg-teal-accent-700',
    },
    {
        name: 'Քննական \n երթուղի',
        price: 7000,
        features: ["1 դ/ժ գործնական"],
        buttonClass: 'text-teal-900 bg-teal-accent-400 hover:bg-teal-accent-700',
    },
    {
        name: 'Փաթեթ \n Ամբողջական',
        price: 85000,
        features: ["30 դ/ժ տեսական", "10 ժ գործնական"],
        buttonClass: 'text-teal-900 bg-teal-accent-400 hover:bg-teal-accent-700',
    },
];

const Pricing = () => {
    return (
        <div id="pricing" className="relative w-full h-full">
            <div className="absolute hidden w-full bg-gray-50 lg:block h-96" />
            <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <h2 className="flex flex-row flex-nowrap items-center mt-24">
                            <span className="flex-grow block border-t border-black"></span>
                            <span className="relative inline-block">
                                <span className="relative mx-4 px-4 py-2.5">Փաթեթներ</span>
                            </span>
                            <span className="flex-grow block border-t border-black"></span>
                        </h2>
                    </div>
                    <p className="text-base text-gray-700 md:text-lg">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque rem aperiam, eaque ipsa quae.
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                    {pricingPlans.map((plan, index) => (
                        <div key={index}>
                            <PricingPlan plan={plan} />
                            <div className="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" />
                            <div className="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" />
                            {/* <div className="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" /> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Pricing;


