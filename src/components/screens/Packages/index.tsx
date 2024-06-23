'use client'

import React from 'react';
import PlanCard from './PlanCard';

const plans = [
    {
        id: 1,
        title: 'Տեսական հեռավար',
        price: '֏20000',
        period: '/ ամիս',
        features: [
            '15 դ/ժ տեսական',
        ],
        bgColor: 'bg-gray-50',
        btnColor: 'bg-gray-600',
        hoverColor: 'hover:bg-gray-100'
    },
    {
        id: 2,
        title: 'Փաթեթ Ամբողջական',
        price: '֏50000',
        period: '/ ամիս',
        features: [
            '30 դ/ժ տեսական',
            '10 ժ գործնական'
        ],
        bgColor: 'bg-indigo-50',
        // btnColor: 'bg-indigo-600',
        btnColor: 'bg-gray-600',
        hoverColor: 'hover:bg-indigo-100',
        popular: false
    },
    {
        id: 3,
        title: 'Տեսական (խմբային)',
        price: '֏35000',
        period: '/ ամիս',
        features: [
            '10 դ/ժ տեսական',
        ],
        bgColor: 'bg-gray-50',
        btnColor: 'bg-gray-600',
        hoverColor: 'hover:bg-gray-100'
    }
];

const Packages = () => {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* <div className="mb-12">
                    <h2 className="font-manrope text-5xl text-center font-bold text-gray-900 mb-4">Փաթեթներ</h2>
                    <p className="text-gray-500 text-center leading-6 mb-9">Drivers Team Auto School - Սովորեք Վարել Վստահ և Անվտանգ </p>
                </div> */}
                  <div className="max-w-2xl mx-auto text-center">
                    {/* <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Numbers tell our story</h2> */}
                    <span className="flex items-center">
                        <span className="h-px flex-1 bg-black"></span>
                        <h2 className="shrink-0 px-6  mb-4 text-3xl font-bold text-black sm:text-4xl lg:text-5xl">Փաթեթներ</h2>
                        <span className="h-px flex-1 bg-black"></span>
                    </span>
                    <p className="text-gray-500 text-center leading-6 mb-9">Drivers Team Auto School - Սովորեք Վարել Վստահ և Անվտանգ </p>
                </div>
                <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-8 lg:space-y-0 lg:items-center">
                    {plans.map((plan, index) => (
                        <PlanCard
                            key={index}
                            title={plan.title}
                            price={plan.price}
                            period={plan.period}
                            features={plan.features}
                            bgColor={plan.bgColor}
                            btnColor={plan.btnColor}
                            hoverColor={plan.hoverColor}
                            popular={plan.popular}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Packages;
