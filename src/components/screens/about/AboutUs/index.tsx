'use client'

import { urlForImage } from '@/sanity/lib/imageUrlBuilder';
import components from '@/src/config/PortableTextComponents';

import { PortableText } from '@portabletext/react';

import { Titles } from '@/src/constants';
import { ImagePath } from '@/src/types';


interface Props {
    data: ABOUT_US_QUERYResult | any
};

const About = ({ data }: Readonly<Props>) => {
    const { bg_image, description, content: value, image } = data[0];

    const pathBg: ImagePath = urlForImage(bg_image);
    const path: ImagePath = urlForImage(image);


    return (
        <section id='about-us'>
            <div
                className="w-full h-full inset-0 bottom-0 left-0 bg-cover bg-bottom bg-no-repeat opacity-120 bg-gray-700 bg-blend-multiply"
                style={{ backgroundImage: `url(${pathBg?.src})` }}
            >
                <div className="mx-auto max-w-7xl px-5 py-16 md:px-7 md:py-20">
                    <h1 className="text-white mb-6 max-w-3xl text-4xl font-bold md:mb-10 md:text-6xl lg:mb-12">
                        {description}
                    </h1>
                </div>
            </div>
            <div className="mx-auto max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
                <div className="relative bottom-0 flex max-w-7xl flex-col gap-4 lg:flex-row lg:justify-end">
                    <div className="max-w-xl lg:mr-[520px] lg:max-w-xs">
                        <div className="max-w-7xl pl-0 mb-10 mx-auto text-xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200">
                            <h1 className="mb-0 text-[#ec3237] text-2xl font-bold md:text-4xl">
                                {Titles.aboutUs}
                            </h1>
                            <div className="mt-0">
                                <span className="inline-block w-40 h-1 bg-[#ec3237] rounded-full"></span>
                                <span className="inline-block w-3 h-1 ml-1 bg-[#ec3237] rounded-full"></span>
                                <span className="inline-block w-1 h-1 ml-1 bg-[#ec3237] rounded-full"></span>
                            </div>
                        </div>
                        <div className="mt-2 text-left">
                            <PortableText
                                value={value}
                                components={components}
                            />
                        </div>
                    </div>
                    <img
                        src={path?.src}
                        alt={image?.alt}
                        className="relative bottom-0 right-0 mt-12 w-[480px] object-cover lg:absolute lg:mt-0 lg:h-[650px]"
                    />
                </div>
            </div>
        </section>

    )
};

export default About;