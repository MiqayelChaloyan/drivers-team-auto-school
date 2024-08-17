// 'use client'

// import Link from 'next/link';
// import Image from 'next/image';

// import { FaFacebookF } from 'react-icons/fa';
// import { BsInstagram } from 'react-icons/bs';
// import { FaPhone } from 'react-icons/fa6';
// import { IoMailOutline } from 'react-icons/io5';
// import { FaTiktok } from "react-icons/fa";

// import { ImagePaths } from '@/src/constants';


// const iconsTab = [
//     {
//         icon: <FaFacebookF size={20} fill='black' />,
//         href: 'https://www.facebook.com/DriversTeamAutoSchool?locale=ru_RU'
//     },
//     {
//         icon: <BsInstagram size={20} fill='black' />,
//         href: 'https://www.instagram.com/drivers_team_auto_school/'
//     },
//     {
//         icon: <FaTiktok size={20} fill='black' />,
//         href: '#'
//     },
// ];

// const navItems = [
//     {
//         title: 'Փաթեթներ և գներ',
//         links: [
//             {
//                 text: 'Մեր մասին',
//                 href: '#'
//             },
//             {
//                 text: 'Փաթեթներ',
//                 href: '#'
//             },
//             {
//                 text: 'Մեր թիմը',
//                 href: '#'
//             },
//             {
//                 text: 'Մեր առավելությունը',
//                 href: '#'
//             },
//         ],
//     },
//     {
//         title: 'Կապ Մեզ Հետ',
//         links: [
// {
//     text: '+37477122212',
//     href: 'tel:+37477122212',
//     icon: <FaPhone size={20} />,
// },
// {
//     text: 'info@lorem.mail',
//     href: 'mailto:info@lorem.mail',
//     icon: <IoMailOutline size={20} />,
// },
//         ],
//     },
// ];

// const Footer = () => {
//     const fullYear = new Date().getFullYear();

//     return (
//         <footer className="px-4 py-20 text-black bg-white">
//             <div className="mx-auto max-w-7xl">
//                 <div className="grid grid-cols-2 gap-4 mb-3 md:grid-cols-4">
//                     <a href="/" title="Go to Kutty Home Page" className="col-span-2 mb-12 md:col-span-1">
// <Image
//     src={ImagePaths.logoURL}
//     alt="logo"
//     priority
//     width={120}
//     height={50}
// />
//                     </a>
//                     {navItems.map((navItem, index) => (
//                         <nav key={index} className="mb-8">
//                             <p className="mb-3 text-xs font-bold tracking-wider text-gray-500 uppercase">{navItem.title}</p>
// {navItem.links.map((link: any, linkIndex: number) => (
//     <Link
//         key={linkIndex}
//         href={link.href}
//         aria-label={link.text}
//         className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-indigo-600"
//         prefetch={true}
//         passHref
//     >
//         {link.icon}
//         <span className={link.icon && 'ml-2'}>{link.text}</span>
//     </Link>
// ))}
//                         </nav>
//                     ))}
//                     <nav className="mb-8">
//                         <p className="mb-3 text-xs font-bold tracking-wider text-gray-500 uppercase">Contact</p>
//                         <div className='flex'>
//                             {iconsTab.map(({ icon, href }, index) => (
//                                 <Link
//                                     key={index}
//                                     href={href}
//                                     // aria-label={link.href}
//                                     className={`text-2xl bg-[#efefef] p-2 rounded-full hover:bg-indigo-600 hover:svg:color-indigo-600 ${index !== 0 && 'ml-2'}`}
//                                     prefetch={true}
//                                     target="_blank"
//                                     passHref
//                                 >
//                                     {icon}
//                                 </Link>

//                             ))}
//                         </div>
//                     </nav>
//                 </div>
// <div className="flex flex-col items-start justify-between pt-10 mt-10 border-t border-gray-400 md:flex-row md:items-center">
//     <p className="mb-2 text-xs text-left text-gray-600 md:mb-0">
//         Տեսական քննությունների հարցաշարերը վերցված են Police.am կայքից
//     </p>
//     <p className="mb-0 text-xs text-left text-gray-600 md:mb-0">
//         © {fullYear} |  Բոլոր իրավունքները պաշտպանված են
//     </p>
// </div>
//             </div>
//         </footer>

//     );
// }

// export default Footer;














'use client'
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { FaTiktok } from "react-icons/fa";
import { FaPhone } from 'react-icons/fa6';
import { IoMailOutline } from 'react-icons/io5';
import { ImagePaths, Texts } from "@/src/constants";
import { Pages } from "@/src/constants/pages";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const navigationLinks = [
    { path: Pages.ABOUT_US, label: 'Մեր Մասին' },
    { path: Pages.TESTS, label: 'Փաթեթներ' },
    { path: Pages.TESTS, label: 'Մեր Առավելությունները' },
    { path: Pages.TESTS, label: 'Թեստեր' },
];


const Footer = () => {
    const fullYear = new Date().getFullYear();
    return (
        <>
            <div className="bg-linear-pink-invert">
                <div className="mx-auto container pt-4 lg:pt-4 flex flex-col items-center justify-center">
                    <div>
                        <Image
                            src={ImagePaths.logoURL}
                            alt="logo"
                            className="h-50 w-51 object-cover"
                            priority
                            width={70}
                            height={40}
                        />
                    </div>
                    <div className="text-black flex flex-col md:items-center f-f-l pt-3">
                        <h1 className="text-1xl font-black">DRIVERS TEAM AUTO SCHOOL</h1>
                        <div className="my-6 text-base text-color f-f-l">
                            <ul className="md:flex items-center">
                                {navigationLinks.map((link, index) => (
                                    <li key={index} className=" md:mr-6 cursor-pointer pt-4 lg:py-0">{link.label}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="md:flex items-center mt-5 mb-5 md:mt-10 text-base text-color f-f-l">
                            <Link
                                href={`tel:${'+37477122212'}`}
                                aria-label={'37477122212'}
                                className="flex items-center md:mr-6 pb-4 md:py-0"
                                prefetch={true}
                                passHref
                            >
                                <FaPhone size={20} />
                                <span className='ml-2'>{+37477122212}</span>
                            </Link>
                            <Link
                                href={`mailto:${'info@lorem.mail'}`}
                                aria-label={'info@lorem.mail'}
                                className="flex items-center md:mr-6 pb-4 md:py-0"
                                prefetch={true}
                                passHref
                            >
                                <IoMailOutline size={20} />
                                <span className='ml-2'>{'info@lorem.mail'}</span>
                            </Link>
                        </div>
                    </div>
                    <div className="text-sm mt-2 text-color mb-2 f-f-l p-2">
                        <p className="text-sm text-color f-f-l mt-5 mb-2 text-center">
                            Տեսական քննությունների հարցաշարերը վերցված են Police.am կայքից
                        </p>
                        <p className="text-sm text-color f-f-l mb-5 text-center">
                            ՀՀ ՕՐԵՆՔԸ ՃԱՆԱՊԱՐՀԱՅԻՆ ԵՐԹԵՎԵԿՈՒԹՅԱՆ ԱՆՎՏԱՆԳՈՒԹՅԱՆ ԱՊԱՀՈՎՄԱՆ ՄԱՍԻՆ
                        </p>
                    </div>
                    <div className="w-9/12  h-0.5 bg-gray-100 rounded-full" />
                    <div className="text-sm mt-10 text-color mb-10 f-f-l">
                        <p>  © {fullYear} |  {Texts.allReserved} </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
