"use client";

import React from "react";

import Link from "next/link";
import Image from "next/image";

import {
    Navbar as MTNavbar,
    Collapse,
    IconButton,
} from "@material-tailwind/react";

import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

import PhoneIcon from "@/lib/ui/PhoneIcon";
import { Pages } from "@/constants/pages";
import { ImagePaths } from "@/constants";
import './styles.css'

const navigationLinks = [
    { path: Pages.ABOUT_US, label: 'Մեր Մասին' },
    { path: Pages.TESTS, label: 'Փաթեթներ' },
    { path: Pages.TESTS, label: 'Մեր Առավելությունները' },
    // { path: Pages.TESTS, label: 'Մեր թիմը' },
    { path: Pages.TESTS, label: 'Թեստեր' },
];


export function Navbar() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen((cur) => !cur);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpen(false)
        );
    }, []);

    return (
        <MTNavbar
            color='white'
            shadow={true}
            fullWidth
            className="border-0 sticky top-0 z-50 bg-white"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
        >
            <div className="container mx-auto flex items-center justify-between">
                <Link
                    href='/'
                    aria-label='/'
                    className="text-gray-700 hover:text-indigo-600 flex items-center"
                    prefetch={true}
                    passHref
                >
                    <Image
                        src={ImagePaths.logoURL}
                        alt="logo"
                        className="h-50 w-50"
                        priority
                        width={70}
                        height={40}
                    />
                    <p className="text-black-100">DRIVERS TEAM <br/> AUTO SCHOOL</p>
                </Link>
                <ul className="ml-10 hidden items-center gap-8 lg:flex">
                    <Link
                        href='tel:+37477122212'
                        aria-label='tel:+37477122212'
                        className="text-gray-700"
                        prefetch={true}
                        passHref
                    >
                        <PhoneIcon />
                    </Link>
                    {navigationLinks.map((link, key) => (
                        <li key={key}>
                            <Link
                                href={link.path}
                                aria-label={link.path}
                                // className="text-gray-700 hover:text-indigo-600"
                                   className="dd"
                                prefetch={true}
                                passHref
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <IconButton
                    variant="text"
                    color="gray"
                    onClick={handleOpen}
                    className="ml-auto inline-block lg:hidden"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                >
                    {open ? (
                        <XMarkIcon strokeWidth={2} className="h-6 w-6" />
                    ) : (
                        <Bars3Icon strokeWidth={2} className="h-6 w-6" />
                    )}
                </IconButton>
            </div>
            <Collapse open={open}>
                <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
                    <ul className="flex flex-col gap-4">
                        {navigationLinks.map((link, key) => (
                            <li key={key}
                            >
                                <Link
                                    href={link.path}
                                    aria-label={link.path}
                                    className="text-gray-700 hover:text-indigo-600"
                                    prefetch={true}
                                    passHref
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                        <Link
                            href='tel:+37477122212'
                            aria-label='tel:+37477122212'
                            className="text-gray-700 hover:text-indigo-600"
                            prefetch={true}
                            passHref
                        >
                            +37477122212
                        </Link>
                    </ul>
                </div>
            </Collapse>
        </MTNavbar>
    );
}

export default Navbar;