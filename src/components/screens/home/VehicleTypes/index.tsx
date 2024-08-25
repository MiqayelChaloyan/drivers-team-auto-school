'use client'

import Image from 'next/image';

import { BsCircle } from 'react-icons/bs';

import { urlForImage } from '@/sanity/lib/imageUrlBuilder';

import { ImagePath } from '@/src/types';
import { ImagePaths, Titles } from '@/src/constants';
import { Palette } from '@/src/themes';


interface Props {
  data?: CAR_TYPE_DETALIS_QUERYResult | any;
};

const VehicleTypes = ({ data }: Readonly<Props>) => {
  const { typesOfCars, image } = data;
  const path: ImagePath = urlForImage(image);

  const typesList = typesOfCars?.map((type: string, index: number) => (
    <li key={index} className="flex items-center space-x-3 rtl:space-x-reverse">
      <BsCircle size={10} color={Palette.red} />
      <span>{type}</span>
    </li>
  ));

  return (
    <section id='vehicle-types'>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="lg:py-10">
            <div className="max-w-xl mb-6">
              <div className="max-w-7xl pl-0 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200">
                <h1 className="mb-0 text-2xl font-bold md:text-4xl text-[#ec3237]">
                  {Titles.vehicleTypes}
                </h1>
                <div className="mt-0">
                  <span className="inline-block w-40 h-1 bg-[#ec3237] rounded-full"></span>
                  <span className="inline-block w-3 h-1 ml-1 bg-[#ec3237] rounded-full"></span>
                  <span className="inline-block w-1 h-1 ml-1 bg-[#ec3237] rounded-full"></span>
                </div>
              </div>
            </div>
            <div>
              <ul className="space-y-4 pl-0 text-left text-[#1c1917] py-10">
                {typesList}
              </ul>
            </div>
          </div>
          <div className="relative h-80 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-[500px]">
            <Image
              src={path?.src}
              alt={image?.alt}
              width={500}
              height={500}
              priority
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleTypes;