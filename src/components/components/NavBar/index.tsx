'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Link as ScrollLink } from 'react-scroll';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

import { useMediaQuery } from '@/src/hooks/useMediaQuery';

import { Buttons, ImagePaths } from '@/src/constants';
import { Pages } from '@/src/constants/pages';

import { useDispatch } from 'react-redux';
import * as Action from '@/src/reducer/store/modalReducer';

import './styles.css';


import { IoClose } from "react-icons/io5";

type RefType = HTMLDivElement | null;

const navLinks = [
    { path: Pages.ABOUT_US, title: 'Մեր Մասին' },
    { path: 'pricing', title: 'Փաթեթներ' },
    { path: 'features', title: 'Մեր Առավելությունները' },
    { path: Pages.TESTS, title: 'Թեստեր' },
];

const NavBar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [linkActive, setLinkActive] = useState<string>('');
    const menuRef = useRef<RefType>(null);
    const overlayRef = useRef<RefType>(null);

    const isPageWide = useMediaQuery("(min-width: 1024px)");

    const dispatch = useDispatch();
    const pathname = usePathname();
    const router = useRouter();

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                overlayRef.current &&
                !overlayRef.current.contains(event.target as Node)
            ) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleRouteChangeComplete = (scrollTo: string) => {
        const observer = new MutationObserver((_, obs) => {
            const element = document.getElementById(scrollTo);
            if (element) {
                const topPosition = element.offsetTop;
                window.scrollTo({ top: topPosition, behavior: 'smooth' });
                obs.disconnect();
            }
        });

        observer.observe(document, { childList: true, subtree: true });
    };

    const handleActiveLink = (newPath: string) => {
        handleChangeActiveLink(newPath);
        setIsMenuOpen(false);

        if (pathname !== '/') {
            router.push('/');
            setTimeout(() => {
                handleRouteChangeComplete(newPath);
            }, 100);
        } else {
            handleRouteChangeComplete(newPath);
        }
    };

    const handleChangeActiveLink = (link: string) => setLinkActive(link);

    const handleOpenModal = () => {
        dispatch(Action.toggleModal());
    };

    return (
        <nav className="sticky top-0 bg-white shadow-lg z-50">
            <div className="flex justify-between items-center py-8 px-5 mx-auto max-w-screen-xl">
                <button
                    className="sidebar-open block lg:hidden relative z-30 focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`btn-open h-5 w-5 transition-transform duration-500 ${isMenuOpen ? 'hidden' : ''}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`btn-close h-5 w-5 transition-transform duration-500 ${isMenuOpen ? '' : 'hidden'}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
                {isPageWide && (
                    <Link
                        href="/"
                        aria-label="home"
                        className="flex flex-col lg:flex-row items-center justify-center tracking-wide"
                        onClick={() => setLinkActive('/')}
                    >
                        <Image
                            src={ImagePaths.logoURL}
                            alt="logo"
                            className="object-cover"
                            priority
                            width={70}
                            height={70}
                        />
                        <p className="text-black-100 text-sm lg:text-base font-bold text-center lg:text-left">
                            DRIVERS TEAM <br /> AUTO SCHOOL
                        </p>
                    </Link>
                )}
                <div
                    ref={menuRef}
                    className={`menu-responsive fixed inset-0 bg-white/70 backdrop-blur-xl transition-all z-40 ${isMenuOpen ? 'flex' : 'hidden'
                        } lg:static lg:bg-transparent lg:flex items-center justify-center space-y-8 lg:space-y-0 flex-col lg:flex-row lg:space-x-8`}
                >
                    <button
                        className="close-menu absolute top-4 right-4 lg:hidden p-2 text-gray-600 hover:text-gray-800"
                        onClick={toggleMenu}
                    >
                        <IoClose size={30} />
                    </button>
                    <ul className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-6 xl:space-x-8">
                        {navLinks.map(link =>
                            link.path.startsWith('/') ? (
                                <li
                                    key={link.path}
                                    className={`text-lg lg:text-base xl:text-lg font-medium group ${linkActive === link.path ? 'text-[#ec3237]' : 'text-gray-900'
                                        }`}
                                >
                                    <Link
                                        href={link.path}
                                        aria-label={link.path}
                                        onClick={() => handleActiveLink(link.path)}
                                        className="link"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ) : (
                                <li
                                    key={link.path}
                                    className={`cursor-pointer text-lg lg:text-base xl:text-lg font-medium group ${linkActive === link.path ? 'text-[#ec3237]' : 'text-gray-900'
                                        }`}
                                >
                                    <ScrollLink
                                        to={link.path}
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={500}
                                        onClick={() => handleActiveLink(link.path)}
                                        className="link"
                                    >
                                        {link.title}
                                    </ScrollLink>
                                </li>
                            )
                        )}
                        {!isPageWide && (
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex flex-col lg:flex-row items-center justify-center tracking-wide"
                                onClick={() => setLinkActive('/')}
                            >
                                <Image
                                    src={ImagePaths.logoURL}
                                    alt="logo"
                                    className="object-cover"
                                    priority
                                    width={70}
                                    height={70}
                                />
                                <p className="text-black-100 text-sm lg:text-1xl font-bold text-center lg:text-left">
                                    DRIVERS TEAM <br /> AUTO SCHOOL
                                </p>
                            </Link>
                        )}
                    </ul>
                </div>
                <button
                    type="submit"
                    className="block py-3 px-6 text-center rounded-xl transition bg-[#ec3237] hover:bg-[#991b1b] md:mr-10  sm:mx-4 lg:mx-8 text-sm sm:text-base md:text-base lg:text-xl font-semibold"
                    onClick={handleOpenModal}
                >
                    <span className="text-white">
                        {Buttons.signUp}
                    </span>
                </button>

            </div>
        </nav>
    );
};

export default NavBar;



