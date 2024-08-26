'use client'

import Image from 'next/image';

import { urlForImage } from '@/sanity/lib/imageUrlBuilder';

import { ImagePath } from '@/src/types';


interface Props {
  data?: CAR_TYPE_DETALIS_QUERYResult | any;
};

const VehicleTypes = ({ data }: Readonly<Props>) => {
  const { typesOfCars, image } = data;
  const path: ImagePath = urlForImage(image);

  return (
    <section id="vehicle-types">
      <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 sm:py-4 lg:py-4">
        <div className="mx-auto h-80 sm:h-80 lg:h-[600px] w-[300px] lg:w-[600px]">
          <Image
            src={path?.src}
            alt={image?.alt}
            width={500}
            height={500}
            priority
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default VehicleTypes;