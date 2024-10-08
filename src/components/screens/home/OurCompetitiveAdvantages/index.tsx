'use client'

import React from 'react';


interface Props {
  data: COMPETITIVE_ADVANTAGES_QUERYResult | any;
};

const OurCompetitiveAdvantages = ({ data }: Readonly<Props>) => {
  return (
    <div className="bg-[#1e1b4b] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <dl className="mt-1 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {data.competitiveAdvantages?.map((stat: ADVANTAGE) => (
              <div key={stat._key} className="flex flex-col bg-[#040240] p-8">
                <dt className="text-sm font-semibold leading-6 text-white">{stat.title}</dt>
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