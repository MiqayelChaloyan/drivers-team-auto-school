'use client'

import { Swiper, SwiperSlide } from 'swiper/react';

import { options } from './options';

import { FaArrowRight } from 'react-icons/fa6';
import { FaArrowLeft } from 'react-icons/fa6';

import Review from './Review';

import { Titles } from '@/src/constants';

import './styles.css';


interface Props {
    reviews: REVIEWS_QUERYResult | any
};

const Reviews = ({ reviews }: Readonly<Props>) => {
    return (
        <section className="relative bg-white py-10">
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <div className="mb-14 flex flex-col justify-center items-center sm:flex-row sm:items-center sm:justify-between max-sm:gap-8">
                    <div className="text-4xl mb-10 text-center font-bold text-gray-900 lg:text-left">
                        <div className="max-w-7xl pl-0 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200">
                            <h1 className="mb-0 text-2xl text-[#040240] font-bold md:text-4xl">
                                {Titles.reviews}
                            </h1>
                            <div className="mt-0">
                                <span className="inline-block w-40 h-1 bg-[#040240] rounded-full"></span>
                                <span className="inline-block w-3 h-1 ml-1 bg-[#040240] rounded-full"></span>
                                <span className="inline-block w-1 h-1 ml-1 bg-[#040240] rounded-full"></span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-8">
                        <button id="slider-button-left"
                            className="swiper-button-prev group flex justify-center items-center border border-solid border-[#040240] w-12 h-12 transition-all duration-500 rounded-full hover:bg-[#040240]"
                        >
                            <FaArrowLeft color='#040240' />
                        </button>
                        <button id="slider-button-right"
                            className="swiper-button-next group flex justify-center items-center border border-solid border-[#040240] w-12 h-12 transition-all duration-500 rounded-full hover:bg-[#040240]"
                            data-carousel-next>
                            <FaArrowRight color='#040240' />
                        </button>
                    </div>
                </div>
                <div className="swiper mySwiper">
                    <Swiper {...options}>
                        {reviews[0].reviews?.map((review: REVIEW) => (
                            <SwiperSlide key={review._key}>
                                <Review review={review} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </section>
    );
};

export default Reviews;
