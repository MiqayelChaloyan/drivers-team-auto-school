// 'use client'

// import Image from 'next/image';

// import { AiOutlineTwitter } from 'react-icons/ai';
// import { FaFacebookF } from 'react-icons/fa';
// import { BsInstagram } from 'react-icons/bs';

// import { ImagePaths } from '@/constants';


// const iconsTab = [
//     { icon: <FaFacebookF /> },
//     { icon: <AiOutlineTwitter /> },
//     { icon: <BsInstagram /> },
// ];

// const Footer = () => {

//     return (
//         <>
//             <footer className="bg-white">
//                 <div className="container mx-auto  py-[10rem]">
//                     <div className="flex justify-between flex-col md:flex-row  items-center md:items-start  md:gap-[5rem] text-left">
//                         <div className="flex flex-col w-1/2 md:p-0 py-4 gap-8">
//                             <Image
//                                 className="w-[12rem]"
//                                 src={ImagePaths.logoURL}
//                                 alt="footer_logo"
//                                 priority
//                                 width={0}
//                                 height={0}
//                             />
//                             <p className="text-[15px] font-medium text-[#646464]">
//                                 Տեսական քննությունների հարցաշարերը վերցված են Police.am կայքից
//                             </p>
//                             <div className="flex gap-7 text-[18px] text-[#646464] justify-center md:justify-start">
//                                 {iconsTab.map(({ icon }, index) => {
//                                     return (
//                                         <div
//                                             key={index}
//                                             className="text-2xl bg-[#efefef] p-2 rounded-full hover:bg-[#ff0366] hover:text-white"
//                                             style={{ transition: "all 0.3s" }}
//                                         >
//                                             {icon}
//                                         </div>
//                                     );
//                                 })}
//                             </div>
//                             <p className="text-[16px] font-medium text-[#646464]">
//                                 Բոլոր իրավունքները պաշտպանված են | © {new Date().getFullYear()}
//                             </p>
//                         </div>
//                         <div className="flex flex-col gap-8 relative">
//                             <p className="text-[22px] font-bold footer-main">Մեր Դասերը</p>

//                             <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>

//                             <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
//                                 Fitness Classes
//                             </p>
//                             <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
//                                 Aerobics Classes
//                             </p>
//                         </div>
// <div className="flex flex-col gap-8 relative">
//     <p className="text-[22px] font-bold footer-main">Աշխատանքային ժամեր</p>
//     <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>
//     <p className="text-[16px]  text-[#646464] font-bold">
//         Երկուշաբթի - Ուրբաթ:
//     </p>
//     <p className="text-[16px] text-[#646464] font-medium">
//         7:00am - 21:00pm
//     </p>
//     <p className="text-[16px] text-[#646464] font-bold">Շաբաթ օրը:</p>
//     <p className="text-[16px] text-[#646464] font-medium">
//         7:00am - 19:00pm
//     </p>
//     <p className="text-[16px] text-[#646464] font-bold ">
//         Կիրակի – Փակ է
//     </p>
// </div>
//                         <span></span>
//                     </div>
//                 </div>
//             </footer>
//         </>
//     );
// }

// export default Footer;





'use client'

import Image from 'next/image';

import { AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';

import { ImagePaths } from '@/constants';


const iconsTab = [
    { icon: <FaFacebookF /> },
    // { icon: <AiOutlineTwitter /> },
    { icon: <BsInstagram /> },
];

const Footer = () => {
    return (
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
                <div className="sm:col-span-2">
                    <a
                        href="/"
                        aria-label="Go home"
                        title="Company"
                        className="inline-flex items-center"
                    >
                        <Image
                            // className="w-[7rem]"
                            src={ImagePaths.logoURL}
                            alt="logo"
                            priority
                            width={120}
                            height={50}
                        />
                    </a>
                    <div className="mt-6 lg:max-w-sm">
                        <p className="text-sm text-gray-800">
                            Drivers Team Auto School-ը առաջարկում է բարձր որակի ուսուցում՝ ապահովելով ձեր անվտանգությունը և վստահությունը ճանապարհներին:
                        </p>
                        {/* <p className="mt-4 text-sm text-gray-800">
                            Eaque ipsa quae ab illo inventore veritatis et quasi architecto
                            beatae vitae dicta sunt explicabo.
                        </p> */}
                    </div>
                </div>
                <div className="space-y-2 text-sm">
                    <p className="text-base font-bold tracking-wide text-gray-900">
                        Contacts
                    </p>
                    <div className="flex">
                        <p className="mr-1 text-gray-800">Phone:</p>
                        <a
                            href="tel:850-123-5021"
                            aria-label="Our phone"
                            title="Our phone"
                            className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            850-123-5021
                        </a>
                    </div>
                    <div className="flex">
                        <p className="mr-1 text-gray-800">Email:</p>
                        <a
                            href="mailto:info@lorem.mail"
                            aria-label="Our email"
                            title="Our email"
                            className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            info@lorem.mail
                        </a>
                    </div>
                </div>
                <div>
                    <span className="text-base font-bold tracking-wide text-gray-900">
                        Social
                    </span>
                    <div className="flex items-center mt-1 space-x-3">
                        {iconsTab.map(({ icon }, index) => {
                            return (
                                <div
                                    key={index}
                                    className="text-2xl bg-[#efefef] p-2 rounded-full hover:bg-indigo-600 hover:text-white"
                                    style={{ transition: "all 0.3s" }}
                                >
                                    {icon}
                                </div>
                            );
                        })}
                    </div>
                    <p className="mt-4 text-sm text-gray-500">
                        Տեսական քննությունների հարցաշարերը վերցված են Police.am կայքից
                    </p>
                </div>
            </div>
            <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
                <p className="text-sm text-gray-600">
                    © {new Date().getFullYear()} |  Բոլոր իրավունքները պաշտպանված են
                </p>
            </div>
        </div>
    );
};


export default Footer;
