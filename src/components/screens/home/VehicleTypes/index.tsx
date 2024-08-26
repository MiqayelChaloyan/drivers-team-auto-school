'use client'

import Image from 'next/image';

import { urlForImage } from '@/sanity/lib/imageUrlBuilder';

import { ImagePath } from '@/src/types';

import { Titles } from '@/src/constants';


interface Props {
  data?: CAR_TYPE_DETALIS_QUERYResult | any;
};

const VehicleTypes = ({ data }: Readonly<Props>) => {
  const { typesOfCars, image } = data;
  const path: ImagePath = urlForImage(image);

  return (
    <section id="vehicle-types">
      <div className="max-w-7xl pl-6 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200">
        <h1 className="mb-0 text-2xl font-bold md:text-4xl text-[#040240]">
          {Titles.cars}
        </h1>
        <div className="mt-0">
          <span className="inline-block w-40 h-1 bg-[#040240] rounded-full"></span>
          <span className="inline-block w-3 h-1 ml-1 bg-[#040240] rounded-full"></span>
          <span className="inline-block w-1 h-1 ml-1 bg-[#040240] rounded-full"></span>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 sm:py-4 lg:py-4">
        <div className="mx-auto h-80 sm:h-80 lg:h-[600px] w-full lg:w-full">
          <img
            src={path?.src}
            alt={image?.alt}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default VehicleTypes;