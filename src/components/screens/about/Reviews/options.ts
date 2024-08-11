import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { SwiperTypes } from '@/src/types';

import './styles.css';

export const options: SwiperTypes = {
    slidesPerView: 3,
    spaceBetween: 28,
    centeredSlides: false,
    loop: true,
    pagination: {
        clickable: true,
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    modules: [Navigation, Pagination, Autoplay],
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 28,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 32,
        },
    }
};