'use client'

import { FaStar } from 'react-icons/fa6';


interface Props {
    review: REVIEW;
};

const Review = ({ review }: Readonly<Props>) => {
    return (
        <div className="swiper-slide group bg-[#374151] border border-solid border-white rounded-2xl p-6 transition-all duration-500 w-full">
            <div className="flex items-start mb-9 gap-2 text-amber-500  swiper-slide-active:text-indigo-600">
                <FaStar size={20} />
                <p className="cursor-default text-white font-medium  swiper-slide-active:text-indigo-600">
                    {review.rating}
                </p>
            </div>
            <p className="cursor-default text-sm text-white leading-1 h-24 mb-9">
                {review.feedback}
            </p>
            <div className="flex items-center gap-5">
                <div className="grid gap-1">
                    <h5 className="cursor-default text-white font-medium swiper-slide-active:text-indigo-600">
                        {review.user}
                    </h5>
                </div>
            </div>
        </div>
    )
};

export default Review;