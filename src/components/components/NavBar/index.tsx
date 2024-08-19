'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
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
import PhoneIcon from '@/src/lib/ui/PhoneIcon';
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const navLinks = [
    { path: Pages.ABOUT_US, title: 'Մեր Մասին' },
    { path: 'features', title: 'Մեր Առավելությունները' },
    { path: 'pricing', title: 'Փաթեթներ' },
    { path: Pages.TESTS, title: 'Թեստեր' },
];

const linkProps = {
    spy: true,
    smooth: true,
    offset: -100,
    duration: 500,
};

const NavBar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [linkActive, setLinkActive] = useState<string>('/');
    const menuRef = useRef<HTMLDivElement | null>(null);
    const overlayRef = useRef<HTMLDivElement | null>(null);

    const isPageWide = useMediaQuery("(min-width: 1024px)");
    const dispatch = useDispatch();
    const router = useRouter();
    const pathname = usePathname();

    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target as Node) &&
            overlayRef.current &&
            !overlayRef.current.contains(event.target as Node)
        ) {
            setIsMenuOpen(false);
        }
    }, []);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [handleClickOutside]);

    const handleRouteChangeComplete = useCallback((scrollTo: string) => {
        const element = document.getElementById(scrollTo);
        if (element) {
            const offset = -100;
            const topPosition = element.offsetTop + offset;
            window.scrollTo({ top: topPosition, behavior: 'smooth' });
        }
    }, []);

    const handleActiveLink = (newPath: string) => {
        setLinkActive(newPath);
        setIsMenuOpen(false);

        if (pathname !== Pages.HOME) {
            router.push(Pages.HOME);
            setTimeout(() => {
                handleRouteChangeComplete(newPath);
            }, 150);
        }
    };
    

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;
            let activeLinkFound = false;

            navLinks.forEach(link => {
                const section = document.getElementById(link.path);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        setLinkActive(link.path);
                        activeLinkFound = true;
                    }
                }
            });

            if (!activeLinkFound) {
                setLinkActive('');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const scrollToTop = () => {
        setLinkActive('');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <nav className="sticky top-0 bg-white shadow-lg z-50">
            <div className="flex justify-between items-center py-8 px-5 mx-auto max-w-screen-xl">
                <button
                    className="sidebar-open block lg:hidden relative z-30 focus:outline-none"
                    onClick={toggleMenu}
                >
                    {/* Open and Close Icons */}
                    <HiOutlineMenuAlt2 size={30} />
                </button>
                <Link
                    href="/"
                    aria-label="home"
                    className="logo flex flex-col lg:flex-row items-center justify-center tracking-wide"
                    onClick={scrollToTop}
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
                <div
                    ref={menuRef}
                    className={`menu-responsive fixed inset-0 bg-white/70 backdrop-blur-xl transition-all z-40 ${isMenuOpen ? 'flex' : 'hidden'} lg:static lg:bg-transparent lg:flex items-center justify-center space-y-8 lg:space-y-0 flex-col lg:flex-row lg:space-x-8`}
                >
                    <button
                        className="close-menu absolute top-4 right-4 lg:hidden p-2 text-gray-600 hover:text-gray-800"
                        onClick={toggleMenu}
                    >
                        <IoClose size={30} />
                    </button>
                    <ul className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-6 xl:space-x-8">
                        {isPageWide && (
                            <li className="text-lg lg:text-base xl:text-lg font-medium group">
                                <Link href={`tel:${'+37477122212'}`} aria-label={'37477122212'}>
                                    <PhoneIcon />
                                </Link>
                            </li>
                        )}
                        {navLinks.map(link =>
                            link.path.startsWith('/') ? (
                                <li
                                    key={link.path}
                                    className={`text-lg lg:text-base xl:text-lg font-medium group ${linkActive === link.path ? 'text-[#ec3237]' : 'text-color'}`}
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
                                    className={`cursor-pointer text-sm lg:text-base xl:text-lg font-medium group ${linkActive === link.path ? 'text-[#ec3237]' : 'text-color'}`}
                                >
                                    <ScrollLink
                                        to={link.path}
                                        {...linkProps}
                                        onClick={() => handleActiveLink(link.path)}
                                        className="link"
                                    >
                                        {link.title}
                                    </ScrollLink>
                                </li>
                            )
                        )}
                        {!isPageWide && (
                            <>
                                <li className="text-lg lg:text-base xl:text-lg font-bold group">
                                    <Link href={`tel:${'+37477122212'}`} aria-label={'37477122212'}>
                                        +37477122212
                                    </Link>
                                </li>
                                <Link
                                    href="/"
                                    aria-label="home"
                                    className="flex flex-col lg:flex-row items-center justify-center tracking-wide"
                                    onClick={scrollToTop}
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
                            </>
                        )}
                    </ul>
                </div>
                <button
                    type="submit"
                    className="block py-3 px-6 text-center rounded-xl transition bg-[#ec3237] hover:bg-[#991b1b] md:mr-10 sm:mx-4 lg:mx-8 text-sm sm:text-base md:text-base lg:text-md font-semibold"
                    onClick={() => dispatch(Action.toggleModal())}
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
