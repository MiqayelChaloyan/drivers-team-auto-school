'use client'
import React from 'react';


interface Props {
  data: ADVANTAGE[];
}

const OurCompetitiveAdvantages = ({ data }: Readonly<Props>) => {
  return (
    <div className="bg-[#232331] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <dl className="mt-1 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {data?.map((stat) => (
              <div key={stat._key} className="flex flex-col bg-[#ec3237] p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-300">{stat.title}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">{stat.quantity}{stat.isPlusSign && '+'}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default OurCompetitiveAdvantages;