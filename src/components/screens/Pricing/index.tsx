'use client'

import React from 'react';
import PricingPlan from './PricingPlan';

const plans = [
    {
        title: "Տեսական դասընթաց",
        description: "For individuals and organizations who want to try our system",
        features: ["24 դ/ժ տեսական"],
        price: "30000",
        link: "#",
        buttonClass: "bg-gray-200 text-gray-500 hover:bg-gray-300 active:text-gray-700",
        buttonText: "Join for free",
        highlight: false,
        hatred: ''
    },
    {
        title: "Գործնական դասընթաց",
        description: "Maximum performance for organisations",
        features: ["1 դ/ժ գործնական"],
        price: "7000",
        link: "#",
        buttonClass: "bg-gray-800 text-white hover:bg-gray-700 active:bg-gray-600",
        buttonText: "Contact Sales",
        highlight: false,
        hatred: ''
    },
    {
        title: `Քննականn երթուղի`,
        description: "Maximum pe rformance for organisations",
        features: ["1 դ/ժ գործնական"],
        price: "7000",
        link: "#",
        buttonClass: "bg-gray-800 text-white hover:bg-gray-700 active:bg-gray-600",
        buttonText: "Contact Sales",
        highlight: false,
        hatred: ''
    },
    {
        title: "Փաթեթ Ամբողջական",
        description: "Advanced features for Individuals and organizations",
        features: ["30 դ/ժ տեսական", "10 ժ գործնական"],
        price: "85000",
        link: "#",
        buttonClass: "bg-indigo-500 text-white hover:bg-indigo-600 active:bg-indigo-700",
        buttonText: "Continue with Team",
        highlight: false,
        hatred: ''
    },
];


const Pricing = () => {
    return (
        <div className="bg-gray-100 py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">Փաթեթներ</h2>
                <div className="mb-6 grid gap-6 sm:grid-cols-2 md:mb-8 lg:grid-cols-4 lg:gap-8">
                    {plans.map((plan, index) => (
                        <PricingPlan key={index} plan={plan} />
                    ))}
                </div>
                <div className="text-center text-sm text-gray-500 sm:text-base">
                    Need help deciding? <a href="#" className="text-gray-500 underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">Get in touch</a>.
                </div>
            </div>
        </div>
    );
}

export default Pricing;
