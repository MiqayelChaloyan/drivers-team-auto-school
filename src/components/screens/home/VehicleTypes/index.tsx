'use client'

import Image from 'next/image';

import { BsCircle } from 'react-icons/bs';

import { urlForImage } from '@/sanity/lib/imageUrlBuilder';

import { ImagePath } from '@/src/types';
import { ImagePaths, Titles } from '@/src/constants';
import { Palette } from '@/src/themes';


interface Props {
  data?: CAR_TYPE_DETALIS_QUERYResult | any
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


















{/* <div className="relative flex flex-col py-1 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
          <div className="mb-1 lg:my-40 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
            <div className="max-w-7xl pl-0 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        <h1 className="text-2xl font-bold md:text-3xl">Մեքենաների տեսակներ</h1>
        <div className="my-6 w-16 border-t border-black"></div>
      </div>
              <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
                {typesList}
              </ul>
            </div>
          </div>
        </div>
        <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
          <Image
            src={path?.src}
            alt={image?.alt}
            width={500}
            height={500}
            className="object-cover w-full h-56 rounded lg:rounded-none sm:h-96 lg:h-full"
            priority
          />
        </div>
      </div>
    </section> */}
