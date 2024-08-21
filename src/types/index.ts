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

export interface Question {
    id: number;
    question: string;
    answers: string[];
    correct_answer: string;
    image?: string | null;
};

export interface TestState {
    [x: string]: any;
    tests: Question[][];
    selectedTest: Question[];
    trace: number;
    score: number;
    answers: Answer[];
    isLoading: boolean;
    isTestEnded: boolean;
};

export interface RootState {
    questions: TestState;
};

export interface Answer {
    question: string;
    step: number;
    selectedAnswer: string;
};

export interface Step {
    test: number;
    step: number;
    selectedAnswer: string;
};

export interface TestEnd {
    isClose: boolean;
    test: number;
};