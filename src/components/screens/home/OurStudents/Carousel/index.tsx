"use client";

import React, {
    useEffect,
    useState,
    createContext,
} from "react";

import {
    IconArrowNarrowLeft,
    IconArrowNarrowRight,
} from "@tabler/icons-react";

import { motion } from "framer-motion";
import { cn } from "@/src/utils/cn";

interface CarouselProps {
    items: JSX.Element[];
    initialScroll?: number;
}






export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
    const carouselRef = React.useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = React.useState(false);
    const [canScrollRight, setCanScrollRight] = React.useState(true);

    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft = initialScroll;
            checkScrollability();
        }
    }, [initialScroll]);

    const checkScrollability = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
        }
    };

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    return (
        <div className="relative w-full">
            <div
                className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]"
                ref={carouselRef}
                onScroll={checkScrollability}
            >
                {/* <div
                    className={cn(
                        "absolute right-0  z-[1000] h-auto  w-[10%] overflow-hidden bg-gradient-to-l"
                    )}
                ></div> */}

                <div
                    className={cn(
                        "flex flex-row justify-start gap-4 pl-6",
                        "max-w-7xl mx-auto"
                    )}
                >
                    {items.map((item, index) => (
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.5,
                                    delay: 0.2 * index,
                                    ease: "easeOut",
                                    once: false,
                                },
                            }}
                            key={"card" + index}
                            className="last:pr-[5%] md:last:pr-[33%]  rounded-3xl"
                        >
                            {item}
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="flex justify-end gap-2 mr-10 mb-10">
                <button
                    className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
                    onClick={scrollLeft}
                    disabled={!canScrollLeft}
                >
                    <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
                </button>
                <button
                    className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
                    onClick={scrollRight}
                    disabled={!canScrollRight}
                >
                    <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
                </button>
            </div>
        </div>
    );
};





