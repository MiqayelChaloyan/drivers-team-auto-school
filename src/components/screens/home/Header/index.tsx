'use client';

import Image from 'next/image';

import { Link as ScrollLink } from 'react-scroll';

import { urlForImage } from '@/sanity/lib/imageUrlBuilder';

import { ImagePath } from '@/src/types';


interface Props {
  data?: MAIN_QUERYResult | any
};

export const Header = ({ data }: Readonly<Props>) => {
  const { description, images, bg_image } = data;
  const pathLeft: ImagePath = urlForImage(images.imageOne);
  const pathRight: ImagePath = urlForImage(images.imageTwo);
  const pathBgImage: ImagePath = urlForImage(bg_image);

  return (
    <div className="relative">
      <div
        className="absolute w-full h-full inset-0 bg-cover bg-center bg-no-repeat opacity-120 bg-gray-900 bg-blend-multiply z-0"
        style={{ backgroundImage: `url(${pathBgImage?.src})` }}
      />
      <div className="relative bg-opacity-75 bg-deep-purple-accent-700 z-0">
        <div className="relative px-4 py-10 sm:py-16 lg:py-24 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="flex flex-col xl:flex-row items-center justify-between">
            <div className="w-full max-w-xl mb-8 xl:mb-16 xl:pr-16 xl:w-7/12 text-center xl:text-left">
              <p className="max-w-xl mb-8 text-sm sm:text-base text-gray-200 md:text-lg">
                {description}
              </p>
              <ScrollLink
                to="our-students"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                aria-label="Scroll down"
              >
                <div className="flex mt-5 justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-8 w-8 sm:h-10 sm:w-10 animate-bounce rounded-full bg-white p-1.5 sm:p-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
                  </svg>
                </div>
              </ScrollLink>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="grid grid-cols-2 gap-4 mt-6">
                <Image
                  src={pathLeft?.src}
                  alt={images.imageOne?.alt}
                  width={500}
                  height={500}
                  className="w-full h-auto rounded-lg"
                  priority
                />
                <Image
                  src={pathRight?.src}
                  alt={images.imageTwo?.alt}
                  width={500}
                  height={500}
                  className="w-full h-auto mt-4 lg:mt-10 rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[-1px] left-0 right-[0.1px]">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
        </svg>
      </div>
    </div>
  );
};

export default Header;
