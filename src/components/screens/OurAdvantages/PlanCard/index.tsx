'use client'

import React from 'react';

const PlanCard = ({ title, price, period, features, bgColor, btnColor, hoverColor, popular }: any) => {
    return (
        <div className={`flex flex-col mx-auto max-w-sm text-gray-900 rounded-2xl ${bgColor} p-6 xl:py-9 xl:px-12 transition-all duration-500 ${hoverColor}`}>
            {popular && (
                <div className="uppercase bg-gradient-to-r from-indigo-600 to-violet-600 rounded-t-2xl p-3 text-center text-white">
                    MOST POPULAR
                </div>
            )}
            <h3 className="font-manrope text-2xl font-bold mb-3">{title}</h3>
            <div className="flex items-center mb-6">
                <span className="font-manrope mr-2 text-6xl font-semibold text-indigo-600">{price}</span>
                <span className="text-xl text-gray-500">{period}</span>
            </div>
            <ul className="mb-12 space-y-6 text-left text-lg text-gray-500">
                {features.map((feature: any) => (
                    <li key={feature.id} className="flex items-center space-x-4">
                        <svg className="flex-shrink-0 w-6 h-6 text-indigo-600" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
            <a href="javascript:;" className={`py-2.5 px-5 ${btnColor} shadow-sm rounded-full transition-all duration-500 text-base text-white font-semibold text-center w-fit mx-auto hover:bg-indigo-700`}>
                ՏԵՍՆԵԼ ԱՎԵԼԻՆ
            </a>
        </div>
    );
}

export default PlanCard;
