'use client'

import { Titles } from '@/src/constants';
import Feature from './Feature';


interface Props {
  data?: FETAURES_QUERYResult;
};

const Features = ({
  data
}: Readonly<Props>) => {
  return (
    <section id='features'>
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl pl-0 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200">
            <h1 className="mb-0 text-2xl font-bold md:text-4xl text-[#040240]">
              {Titles.features}
            </h1>
            <div className="mt-0">
              <span className="inline-block w-40 h-1 bg-[#040240] rounded-full"></span>
              <span className="inline-block w-3 h-1 ml-1 bg-[#040240] rounded-full"></span>
              <span className="inline-block w-1 h-1 ml-1 bg-[#040240] rounded-full"></span>
            </div>
          </div>
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {data?.features.map((feature: FEATURE) => (
                <Feature
                  key={feature._key}
                  icon={feature.icon}
                  headline={feature.title}
                  content={feature.content}
                />
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Features;