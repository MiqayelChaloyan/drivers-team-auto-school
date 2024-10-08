'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Link as ScrollLink } from 'react-scroll';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

import { useDispatch } from 'react-redux';
import * as Action from '@/src/reducer/store/modalReducer';

import { useMediaQuery } from '@/src/hooks/useMediaQuery';

import { Buttons, ImagePaths, Titles } from '@/src/constants';
import { Pages } from '@/src/constants/pages';

import PhoneIcon from '@/src/lib/ui/PhoneIcon';
import Logo from '@/src/lib/icons/Logo'
import { Palette } from '@/src/themes';

import { IoClose } from 'react-icons/io5';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';

import './styles.css';


interface Props {
    contact: CONTACT_US_QUERYResult
};

const navLinks = [
    { path: Pages.ABOUT_US, title: 'Մեր Մասին' },
    { path: Pages.FEATURES, title: 'Մեր Առավելությունները' },
    { path: Pages.PRICING, title: 'Փաթեթներ' },
    { path: Pages.TESTS, title: 'Թեստեր' },
];

const linkProps = {
    spy: true,
    smooth: true,
    offset: -100,
    duration: 500,
};

const NavBar = ({ contact }: Readonly<Props>) => {
    const [scrollTo, setScrollTo] = useState<string | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [linkActive, setLinkActive] = useState<string>('/');

    const menuRef = useRef<HTMLDivElement | null>(null);

    const isPageWide = useMediaQuery("(min-width: 1024px)");

    const dispatch = useDispatch();
    const router = useRouter();
    const pathname = usePathname();


    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    const handleActiveLink = (newPath: string) => {
        setLinkActive(newPath);
        setIsMenuOpen(false);

        if (pathname !== Pages.HOME) {
            setScrollTo(newPath);
            router.push(Pages.HOME);
        } else {
            const element = document.getElementById(newPath);
            if (element) {
                const offset = -100;
                const topPosition = element.getBoundingClientRect().top + window.pageYOffset + offset;

                window.scrollTo({ top: topPosition, behavior: 'smooth' });
            }
        }
    };

    useEffect(() => {
        if (pathname !== Pages.HOME) {
            setLinkActive(pathname);
        }
    }, [handleActiveLink])


    useEffect(() => {
        if (scrollTo) {
            const timer = setTimeout(() => {
                const element = document.getElementById(scrollTo);
                if (element) {
                    const offset = -100;
                    const topPosition = element.getBoundingClientRect().top + window.pageYOffset + offset;

                    window.scrollTo({ top: topPosition, behavior: 'smooth' });
                }
                setScrollTo(null);
            }, 300);

            return () => clearTimeout(timer);
        }
    }, [pathname, scrollTo]);


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


    return (
        <nav className="sticky top-0 bg-white shadow-lg z-50">
            <div className="flex justify-between items-center py-5 px-5 mx-auto max-w-screen-xl">
                <button
                    className="sidebar-open block lg:hidden relative z-30 focus:outline-none"
                    onClick={toggleMenu}
                >
                    <HiOutlineMenuAlt2 size={30} />
                </button>
                <Link
                    href={Pages.HOME}
                    aria-label="home"
                    className="logo flex flex-col lg:flex-row items-center justify-center tracking-wide"
                    onClick={toggleMenu}
                >
                    <Logo
                        fill='black'
                        width={70}
                        height={70}
                    />
                    <p className="block whitespace-pre-wrap text-white lg:text-black text-sm lg:text-base font-bold text-left lg:text-left">
                        {Titles.companyName}
                    </p>
                </Link>
                <div
                    ref={menuRef}
                    className={`${!isPageWide ? 'mobile-bg' : 'bg-white/70'} menu-responsive fixed inset-0 max-h-screen backdrop-blur-xl transition-all z-40 ${isMenuOpen ? 'flex' : 'hidden'} lg:static lg:bg-transparent lg:flex items-center justify-center space-y-2 lg:space-y-0 flex-col lg:flex-row lg:space-x-8`}
                    style={{ backgroundImage: !isPageWide ? `url(${ImagePaths.roadURL.default.src})` : 'none' }}
                >
                    <button
                        className="close-menu absolute top-4 right-4 lg:hidden p-2 text-gray-600 hover:text-gray-800"
                        onClick={toggleMenu}
                    >
                        <IoClose size={30} color={Palette.white} />
                    </button>
                    <ul className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-6 xl:space-x-8">
                        {isPageWide && (
                            <li className="text-lg lg:text-base xl:text-lg font-medium group">
                                <Link href={`tel:${contact?.phoneNumber ? contact.phoneNumber : '+37477122212'}`}>
                                    <PhoneIcon />
                                </Link>
                            </li>
                        )}
                        {navLinks.map(link =>
                            link.path.startsWith('/') ? (
                                <li
                                    key={link.path}
                                    className={`text-md uppercase lg:text-base xl:text-lg font-medium group ${linkActive === link.path ? 'text-[#ec3237]' : 'text-white lg:text-black'}`}
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
                                    className={`cursor-pointer text-lg uppercase lg:text-base xl:text-lg font-medium group ${linkActive === link.path ? 'text-[#ec3237]' : 'text-white lg:text-black'}`}
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
                                <li className="text-lg lg:text-base xl:text-lg font-medium group text-white hover:text-[#ec3237] lg:text-black">
                                    <Link href={`tel:${contact?.phoneNumber ? contact.phoneNumber : '+37477122212'}`} className='link'>
                                        {contact?.phoneNumber ? contact.phoneNumber : '+37477122212'}
                                    </Link>
                                </li>
                                <Link
                                    href={Pages.HOME}
                                    aria-label="home"
                                    className="flex flex-col lg:flex-row items-center justify-center tracking-wide"
                                    onClick={toggleMenu}
                                >
                                    <Logo
                                        fill='white'
                                        width={70}
                                        height={70}
                                    />
                                    <p className="block whitespace-pre-wrap text-white lg:text-black text-sm lg:text-1xl font-bold text-center lg:text-left">
                                        {Titles.companyName}
                                    </p>
                                </Link>
                            </>
                        )}
                    </ul>
                </div>
                <button
                    type="submit"
                    className="block uppercase py-3 px-6 text-center rounded-xl transition bg-[#040240] hover:bg-[#0f172a] md:mr-10 sm:mx-4 lg:mx-8 text-sm sm:text-base md:text-base lg:text-md font-semibold"
                    onClick={() => dispatch(Action.openeModal())}
                >
                    <span className="text-white">
                        {Buttons.register}
                    </span>
                </button>
            </div>
        </nav>
    );
};

export default NavBar;
