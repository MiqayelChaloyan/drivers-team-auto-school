'use client'

import { motion, Variants, useAnimationControls, useScroll } from "framer-motion";
import { useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";


const ScrollToTopContainerVariants: Variants = {
    hide: { opacity: 1, y: 300 },
    show: { opacity: 1, y: 0 },
};

const ScrollBackToTop = () => {
    const { scrollYProgress } = useScroll();
    const controls = useAnimationControls();

    useEffect(() => {
        return scrollYProgress.on('change', (latestValue) => {
            if (latestValue > 0.2) {
                controls.start('show');
            } else {
                controls.start('hide');
            }
        });
    });

    const isBrowser = () => typeof window !== 'undefined';

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <motion.button
            type="button"
            onClick={scrollToTop}
            variants={ScrollToTopContainerVariants}
            initial="hide"
            animate={controls}
            // data-twe-ripple-init
            // data-twe-ripple-color="light"
            className="!fixed bottom-5 end-5 rounded-full bg-red-600 p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg"
            id="btn-back-to-top"
        >
            <FaArrowUp size={25} />
        </motion.button>
    )
}

export default ScrollBackToTop;