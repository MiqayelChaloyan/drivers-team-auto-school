'use client'

import { Texts } from '@/src/constants';
import Logo from '@/src/lib/icons/Logo';
import SocialLinks from '../Footer/social';
import { Pages } from '@/src/constants/pages';

import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaPhone } from 'react-icons/fa6';
import { IoMailOutline } from 'react-icons/io5';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';


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

const TFooter = () => {
    const fullYear = new Date().getFullYear();

    const [scrollTo, setScrollTo] = useState<string | null>(null);
    const [linkActive, setLinkActive] = useState<string>('/');

    const router = useRouter();
    const pathname = usePathname();



    const handleActiveLink = (newPath: string) => {
        setLinkActive(newPath);

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
        <footer className="w-full min-h-[500px] py-10 px-10 px-10px lg:px-0 flex items-center justify-center bg-black">
            <div className="md:w-2/3 w-full text-white flex flex-col mx-auto max-w-screen-xl my-px-2 pr-4">
                <div className="w-full text-4xl font-bold">
                    <h1 className="w-full md:w-2/3">ՍՏԱՑԵՔ ՁԵՐ ՎԱՐՈՐԴԱԿԱՆ ԻՐԱՎՈՒՆՔՆ ԱՌԱՋԻՆ ԱՆԳԱՄԻՑ</h1>
                </div>
                <div className="flex mt-2 flex-col md:flex-row md:justify-between">
                    <p className="w-full md:w-2/3 text-white">To ensure that all Wikipedia content is verifiable, anyone may question an uncited claim. If your work has been tagged</p>
                    <div className='md:mt-0 mt-10'>
                        <Link
                            href={`tel:${'+37477122212'}`}
                            aria-label={'37477122212'}
                            className="flex items-center justify-start lg:justify-between pb-4 md:py-0"
                            prefetch={true}
                            passHref
                        >
                            <FaPhone size={17} color='white' />
                            <span className='ml-2'>+{37477122212}</span>
                        </Link>
                        <Link
                            href={`mailto:${'info@lorem.mail'}`}
                            aria-label={'info@lorem.mail'}
                            className="flex items-center justify-start lg:justify-between pb-4 md:py-0"
                            prefetch={true}
                            passHref
                        >
                            <IoMailOutline size={20} color='white' />
                            <span className='ml-2'>{'info@lorem.mail'}</span>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex mt-24 mb-12 flex-row items-center justify-between">
                        <div className='relative right-4'>
                            <Logo width={100} height={100} fill='white' />
                        </div>
                        <nav className="hidden md:flex space-x-8">
                            {navLinks.map(link =>
                                link.path.startsWith('/') ? (
                                    <li
                                        key={link.path}
                                        className="text-lg lg:text-base xl:text-lg font-medium group text-color"
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
                                        className={`cursor-pointer text-lg lg:text-base xl:text-lg font-medium group ${linkActive === link.path ? 'text-[#ec3237]' : 'text-color'}`}
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
                        </nav>
                        <div className="flex space-x-4">
                            <SocialLinks />
                        </div>
                    </div>
                    <div className="h-px bg-gray-800"></div>
                    <div className="flex flex-col md:flex-row md:justify-between text-xs mt-4 mb-2 text-gray-500">
                        <div className="text-center md:text-left">© {fullYear} {Texts.allReserved}</div>
                        <nav className="mt-2 md:mt-0 grid text-center md:text-right">
                            <a href="#" className="mb-5 hover:underline">
                                Տեսական քննությունների հարցաշարերը վերցված են Police.am կայքից
                            </a>
                            <a href="#" className="hover:underline">
                                ՀՀ ՕՐԵՆՔԸ ՃԱՆԱՊԱՐՀԱՅԻՆ ԵՐԹԵՎԵԿՈՒԹՅԱՆ ԱՆՎՏԱՆԳՈՒԹՅԱՆ ԱՊԱՀՈՎՄԱՆ ՄԱՍԻՆ
                            </a>
                        </nav>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default TFooter;
