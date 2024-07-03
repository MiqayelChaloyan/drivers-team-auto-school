'use client'

import { useState } from "react";
import { LuClock9 } from "react-icons/lu";

const Snackbar = () => {
    const [isVisible, setIsVisible] = useState<boolean>(true);

    return isVisible && (
        <div className="flex items-center justify-between gap-4 bg-gray-900 px-4 py-3 text-white transition duration-[2000ms] ease-in-out">
            <div className="flex items-center">
                <LuClock9 size={17} />
                <p className="text-sm font-medium px-2">Աշխատանքային ժամեր - 10։00 - 21։00</p>
            </div>
            <button
                aria-label="Dismiss"
                className="shrink-0 rounded-lg bg-black/10 p-1 transition hover:bg-black/20"
                onClick={() => setIsVisible(false)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                    />
                </svg>
            </button>
        </div>
    )
}

export default Snackbar;