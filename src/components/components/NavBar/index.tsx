'use client'

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { ImagePaths } from '@/constants';
import { Pages } from '@/constants/pages';


const navigationLinks = [
    { path: '+37477122212', label: '+37477122212' },
    { path: Pages.HOME, label: 'Մեր Մասին' },
    { path: Pages.TESTS, label: 'Գնացուցակ' },
    { path: Pages.TESTS, label: 'Թեստեր' },
];

const NavBar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="relative bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <Link
                                href={'#'}
                                aria-label={'#'}
                                prefetch={true}
                                passHref
                            >
                                <Image
                                    className="h-8 w-auto sm:h-40"
                                    src={ImagePaths.logoURL}
                                    alt="logo"
                                    priority
                                    width={0}
                                    height={0}
                                />
                            </Link>
                        </div>
                        <div className="-mr-2 -my-2 md:hidden">
                            <button
                                type="button"
                                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                onClick={() => setOpen(!open)}
                            >
                                <span className="sr-only">Open menu</span>
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                        <nav className="hidden md:flex space-x-10">
                            {navigationLinks.map((link, key) => (
                                <Link
                                    key={key}
                                    href={`/am${link.path}`}
                                    aria-label={link.path}
                                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                                    prefetch={true}
                                    passHref
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
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
                    </div>
                </div>
                <div
                    className={
                        open
                            ? "opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                            : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                    }
                >
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <Image
                                        className="h-8 w-auto"
                                        src={ImagePaths.logoURL}
                                        alt="logo"
                                        priority
                                        width={0}
                                        height={0}
                                    />
                                </div>
                                <div className="-mr-2">
                                    <button
                                        type="button"
                                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                        onClick={() => setOpen(!open)}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <svg
                                            className="h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="py-6 px-5 space-y-6">
                            <div className="grid grid-cols-2 gap-y-2 gap-x-8">
                                {navigationLinks.map((link, key) => (
                                    <Link
                                        key={key}
                                        href={`/am${link.path}`}
                                        aria-label={link.path}
                                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                                        prefetch={true}
                                        passHref
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;
