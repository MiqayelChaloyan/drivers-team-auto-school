'use client'

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { ImagePaths } from "@/constants";
import { Pages } from '@/constants/pages';
import PhoneIcon from "@/lib/ui/PhoneIcon";


const navigationLinks = [
    {
        path: 'tel:+37477122212', label: <PhoneIcon />
    },
    { path: Pages.HOME, label: 'Մեր Մասին' },
    { path: Pages.TESTS, label: 'Գնացուցակ' },
    { path: Pages.TESTS, label: 'Թեստեր' },
];

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="relative flex items-center justify-between">
                <a
                    href="/"
                    aria-label="Company"
                    title="Company"
                    className="inline-flex items-center"
                >
                    <Image
                        className="w-[7rem]"
                        src={ImagePaths.logoURL}
                        alt="footer_logo"
                        priority
                        width={0}
                        height={0}
                    />
                </a>
                <ul className="flex items-center hidden space-x-8 lg:flex">
                    {navigationLinks.map((link, key) => (
                        <li key={key}
                        >
                            <Link
                                href={`${link.path}`}
                                aria-label={link.path}
                                className="text-base font-medium text-gray-500 hover:text-gray-900"
                                prefetch={true}
                                passHref
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className="flex items-center hidden space-x-8 lg:flex">
                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                        <Link
                            href={'#'}
                            aria-label={'#'}
                            className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                            prefetch={true}
                            passHref
                        >
                            Մուտք գործել
                        </Link>
                        <Link
                            href={'#'}
                            aria-label={'#'}
                            className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                            prefetch={true}
                            passHref
                        >
                            Գրանցվել
                        </Link>
                    </div>
                </ul>
                <div className="lg:hidden">
                    <button
                        aria-label="Open Menu"
                        title="Open Menu"
                        className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                            />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <div className="absolute top-0 left-0 w-full">
                            <div className="p-5 bg-white border rounded shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <Image
                                        className="w-[7rem]"
                                        src={ImagePaths.logoURL}
                                        alt="footer_logo"
                                        priority
                                        width={0}
                                        height={0}
                                    />
                                    <div>
                                        <button
                                            aria-label="Close Menu"
                                            title="Close Menu"
                                            className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className="space-y-4">
                                        {navigationLinks.map((link, key) => (
                                            <li key={key}
                                            >
                                                <Link
                                                    href={`/am${link.path}`}
                                                    aria-label={link.path}
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                    prefetch={true}
                                                    passHref
                                                >
                                                    {link.label}
                                                </Link>
                                            </li>
                                        ))}
                                        <li>
                                            <div>
                                                <Link
                                                    href={'#'}
                                                    aria-label={'#'}
                                                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                                    prefetch={true}
                                                    passHref
                                                >
                                                    Գրանցվել
                                                </Link>
                                                <p className="mt-6 text-center text-base font-medium text-gray-500">
                                                    Existing customer?{' '}
                                                    <Link
                                                        href={'#'}
                                                        aria-label={'#'}
                                                        className="text-indigo-600 hover:text-indigo-500"
                                                        prefetch={true}
                                                        passHref
                                                    >
                                                        Մուտք գործել
                                                    </Link>
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
