'use client';

import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Buttons, ImagePaths } from '@/src/constants';
import { Pages } from '@/src/constants/pages';
import PhoneIcon from '@/src/lib/ui/PhoneIcon';
import { IoMenu, IoClose } from 'react-icons/io5';
import './styles.css';
import { useDispatch } from 'react-redux';
import * as Action from '@/src/reducer/store/modalReducer'

const navLinks = [
    { path: Pages.ABOUT_US, title: 'Մեր Մասին' },
    { path: 'pricing', title: 'Փաթեթներ' },
    { path: 'features', title: 'Մեր Առավելությունները' },
    { path: Pages.TESTS, title: 'Թեստեր' },
];

const NavBar = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [linkActive, setLinkActive] = useState<string>('');
    const dispatch = useDispatch();


    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1200);
        };

        handleResize(); // Initialize on mount
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

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
        setShowModal(false);

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
        dispatch(Action.toggleModal())
    }

    return (
        <>
            {!isMobile ? (
                // Desktop Navbar Code
                <nav className="h-70 bg-white sticky top-0 z-50 shadow">
                    <div className="flex justify-between mx-auto items-center py-4 px-24">
                        <div className="font-bold">
                            <Link href="/" aria-label="home" className="flex items-center" onClick={() => setLinkActive('/')}>
                                <Image
                                    src={ImagePaths.logoURL}
                                    alt="logo"
                                    className="h-50 w-51 object-cover"
                                    priority
                                    width={70}
                                    height={40}
                                />
                                <p className="text-black-100 text-1xl">
                                    DRIVERS TEAM <br /> AUTO SCHOOL
                                </p>
                            </Link>
                        </div>
                        <ul className="flex gap-8 md:gap-16 items-center justify-center text-center cursor-pointer">
                            <Link
                                href="tel:+37477122212"
                                aria-label="tel:+37477122212"
                                className="text-gray-700"
                            >
                                <PhoneIcon />
                            </Link>
                            {navLinks.map((link, index) =>
                                link.path.startsWith('/') ? (
                                    <Link
                                        key={index}
                                        href={link.path}
                                        aria-label={link.path}
                                        onClick={() => handleActiveLink(link.path)}
                                        className={`link ${linkActive === link.path ? 'text-[#ec3237]' : 'text-gray-700'
                                            }`}
                                    >
                                        {link.title}
                                    </Link>
                                ) : (
                                    <ScrollLink
                                        key={index}
                                        to={link.path}
                                        className={`cursor-pointer link ${linkActive === link.path ? 'text-[#ec3237]' : 'text-gray-700'
                                            }`}
                                        onClick={() => handleActiveLink(link.path)}
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={500}
                                    >
                                        {link.title}
                                    </ScrollLink>
                                )
                            )}
                        </ul>
                        <button
                            type="submit"
                            title="Submit"
                            className="block py-3 px-6 text-center rounded-xl transition bg-[#ec3237] hover:bg-[#f7d046]"
                            onClick={handleOpenModal}
                        >
                            <span className="text-white font-semibold">{Buttons.signUp}</span>
                        </button>
                    </div>
                </nav>
            ) : (
                // Mobile Navbar Code
                <nav className="h-70 bg-white py-4 px-4 sticky top-0 z-50 shadow">
                    <div className="mx-auto flex justify-between items-center">
                        <div className="font-bold">
                            <Link href="/" aria-label="home" className="flex items-center">
                                <Image
                                    src={ImagePaths.logoURL}
                                    alt="logo"
                                    className="h-50 w-51 object-cover"
                                    priority
                                    width={70}
                                    height={40}
                                />
                                <p className="text-black-100 text-1xl">
                                    DRIVERS TEAM <br /> AUTO SCHOOL
                                </p>
                            </Link>
                        </div>
                        <div className="flex justify-end items-center gap-6 cursor-pointer">
                            {showModal ? (
                                <IoClose
                                    onClick={toggleModal}
                                    size={40}
                                    className="text-black cursor-pointer"
                                />
                            ) : (
                                <IoMenu
                                    onClick={toggleModal}
                                    size={40}
                                    className="text-black cursor-pointer"
                                />
                            )}
                        </div>
                    </div>
                    {showModal && (
                        <div className="fixed top-20 inset-0 z-50 flex justify-center items-center">
                            <div className="absolute inset-0 bg-white" />
                            <div className="relative w-full h-full flex flex-col gap-8 items-center justify-center">
                                {navLinks.map((link, index) =>
                                    link.path.startsWith('/') ? (
                                        <Link
                                            key={index}
                                            href={link.path}
                                            aria-label={link.path}
                                            onClick={() => handleActiveLink(link.path)}
                                            className={`text-2xl link ${linkActive === link.path
                                                ? 'text-[#ec3237]'
                                                : 'text-gray-700'
                                                }`}
                                        >
                                            {link.title}
                                        </Link>
                                    ) : (
                                        <ScrollLink
                                            key={index}
                                            to={link.path}
                                            className={`text-2xl cursor-pointer link ${linkActive === link.path ? 'text-[#ec3237]' : 'text-gray-700'}`}
                                            onClick={() => handleActiveLink(link.path)}
                                            spy={true}
                                            smooth={true}
                                            offset={-100}
                                            duration={500}
                                        >
                                            {link.title}
                                        </ScrollLink>
                                    )
                                )}
                                <Link
                                    href="tel:+37477122212"
                                    aria-label="tel:+37477122212"
                                    className="text-gray-700 text-2xl hover:text-[#ec3237] link"
                                >
                                    +37477122212
                                </Link>
                                <button
                                    type="submit"
                                    title="Submit"
                                    className="block w-[80%] sm:w-auto py-3 px-6 text-center rounded-xl transition bg-[#ec3237] hover:bg-[#f7d046] mx-auto"
                                    onClick={handleOpenModal}
                                >
                                    <span className="text-white font-semibold">
                                        {Buttons.signUp}
                                    </span>
                                </button>
                            </div>
                        </div>
                    )}
                </nav>
            )}
        </>
    );
};

export default NavBar;
