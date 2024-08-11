import { Navigation, Pagination } from 'swiper/modules';

export type ImagePath = { src: string, width: number, height: number } | any;

export interface SwiperTypes {
    slidesPerView: number,
    spaceBetween: number,
    centeredSlides: boolean,
    loop: boolean,
    pagination: {
        clickable: boolean,
        el: string,
    },
    navigation: {
        nextEl: string,
        prevEl: string,
    },
    modules: (typeof Navigation | typeof Pagination)[],
    breakpoints: {
        0: {
            slidesPerView: number,
            spaceBetween: number,
        },
        768: {
            slidesPerView: number,
            spaceBetween: number,
        },
        1024: {
            slidesPerView: number,
            spaceBetween: number,
        },
    }
};