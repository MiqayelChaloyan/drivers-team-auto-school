'use client'

import Image from 'next/image';

import { AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';

import { ImagePaths } from '@/constants';


const iconsTab = [
    { icon: <FaFacebookF /> },
    { icon: <AiOutlineTwitter /> },
    { icon: <BsInstagram /> },
];

const Footer = () => {

    return (
        <>
            <footer className="bg-white">
                <div className="container mx-auto  py-[10rem]">
                    <div className="flex justify-between flex-col md:flex-row  items-center md:items-start  md:gap-[5rem] text-left">
                        <div className="flex flex-col w-1/2 md:p-0 py-4 gap-8">
                            <Image
                                className="w-[12rem]"
                                src={ImagePaths.logoURL}
                                alt="footer_logo"
                                priority
                                width={0}
                                height={0}
                            />
                            <p className="text-[15px] font-medium text-[#646464]">
                                Տեսական քննությունների հարցաշարերը վերցված են Police.am կայքից
                            </p>
                            <div className="flex gap-7 text-[18px] text-[#646464] justify-center md:justify-start">
                                {iconsTab.map(({ icon }, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="text-2xl bg-[#efefef] p-2 rounded-full hover:bg-[#ff0366] hover:text-white"
                                            style={{ transition: "all 0.3s" }}
                                        >
                                            {icon}
                                        </div>
                                    );
                                })}
                            </div>
                            <p className="text-[16px] font-medium text-[#646464]">
                                Բոլոր իրավունքները պաշտպանված են | © {new Date().getFullYear()}
                            </p>
                        </div>
                        <div className="flex flex-col gap-8 relative">
                            <p className="text-[22px] font-bold footer-main">Մեր Դասերը</p>

                            <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>

                            <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                                Fitness Classes
                            </p>
                            <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                                Aerobics Classes
                            </p>
                        </div>
                        <div className="flex flex-col gap-8 relative">
                            <p className="text-[22px] font-bold footer-main">Աշխատանքային ժամեր</p>
                            <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>
                            <p className="text-[16px]  text-[#646464] font-bold">
                                Երկուշաբթի - Ուրբաթ:
                            </p>
                            <p className="text-[16px] text-[#646464] font-medium">
                                7:00am - 21:00pm
                            </p>
                            <p className="text-[16px] text-[#646464] font-bold">Շաբաթ օրը:</p>
                            <p className="text-[16px] text-[#646464] font-medium">
                                7:00am - 19:00pm
                            </p>
                            <p className="text-[16px] text-[#646464] font-bold ">
                                Կիրակի – Փակ է
                            </p>
                        </div>
                        <span></span>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;