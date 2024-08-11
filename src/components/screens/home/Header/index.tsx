'use client';

import Image from 'next/image';

import { Link as ScrollLink } from 'react-scroll';

import { urlForImage } from '@/sanity/lib/imageUrlBuilder';

import { ImagePath } from '@/src/types';


interface Props {
  data?: MAIN_QUERYResult | any
};

export const Header = ({ data }: Readonly<Props>) => {
  const { title, description, images, bg_image } = data;
  const pathLeft: ImagePath = urlForImage(images.imageOne);
  const pathRight: ImagePath = urlForImage(images.imageTwo);
  const pathBgImage: ImagePath = urlForImage(bg_image);

  return (
    <div className="relative">
      <div
        className="absolute w-full h-full inset-0 top-0 left-0 bg-cover bg-center bg-no-repeat opacity-120 bg-fixed bg-gray-700 bg-blend-multiply"
        style={{ backgroundImage: `url(${pathBgImage?.src})` }}
      />
      <div className="relative bg-opacity-75 bg-deep-purple-accent-700">
        <svg
          className="absolute inset-x-0 bottom-0 text-white"
          viewBox="0 0 1160 160"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg>
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-30">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-20 xl:pr-16 xl:w-7/12">
              <div className="max-w-7xl mb-4 mx-auto text-xl md:text-5xl font-bold text-white dark:text-neutral-200 font-sans">
                <h1 className="mb-0 text-2xl font-bold md:text-4xl text-[#ec3237]">
                  {title}
                </h1>
                <div className="mt-0">
                  <span className="inline-block w-40 h-1 bg-[#ec3237] rounded-full"></span>
                  <span className="inline-block w-3 h-1 ml-1 bg-[#ec3237] rounded-full"></span>
                  <span className="inline-block w-1 h-1 ml-1 bg-[#ec3237] rounded-full"></span>
                </div>
              </div>
              <p className="max-w-xl mb-10 text-base text-gray-200 md:text-lg">
                {description}
              </p>
              <ScrollLink
                to="pricing"
                hashSpy={false}
                offset={-110}
                isDynamic={false}
                smooth={false}
                duration={500}
                aria-label="Scroll down"
                className="flex items-center justify-center w-10 h-10 mx-auto cursor-pointer text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="currentColor"
                >
                  <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
                </svg>
              </ScrollLink>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div>
                <div>
                  <div className="grid grid-cols-2 gap-2 mt-8 mb-3">
                    <Image
                      src={pathLeft?.src}
                      alt={images.imageOne?.alt}
                      width={500}
                      height={500}
                      className="w-full rounded-lg"
                      priority
                    />
                    <Image
                      src={pathRight?.src}
                      alt={images.imageTwo?.alt}
                      width={500}
                      height={500}
                      className="mt-4 w-full lg:mt-10 rounded-lg"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
